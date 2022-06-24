import json
from typing import List
from uuid import UUID

from django.db.models.expressions import RawSQL
from celery import shared_task
from channels.layers import get_channel_layer
from asgiref.sync import async_to_sync
import stardog

from datasets.models import Dataset
from datasets.services.stardog_api import StardogApi
from reports.models import Report, CellType
from reports.utils import Packet, PacketType
from shared import get_logger
from shared.query import q_json_update
from tasks.utils import send_to_group_sync

logger = get_logger()


@shared_task()
def run_cell(report_id: UUID, cell_id: UUID) -> str:
    logger.info(f'Running cell {cell_id} in notebook {report_id}')
    report: Report = Report.objects.get(id=report_id)
    notebook = report.notebook
    dataset: Dataset = report.dataset
    cell = notebook.get('cells', {}).get(str(cell_id), None)

    if cell is None:
        raise Exception(f'Cell {cell_id} not found in notebook {report_id}')

    if dataset.database is None:
        raise Exception(f'Dataset {dataset.id} has no database')

    outputs: list = []
    match CellType(cell.get('cell_type', None)):
        case CellType.code:
            connection = StardogApi.from_database(dataset.database)
            source = cell.get('source', '')
            limit = 100 if ' LIMIT ' not in source.upper() else None
            try:
                output = connection.query(source, limit=limit, timeout=5000)
                outputs.append({
                    'output_type': 'execute_result',
                    'execute_count': 1,
                    'data': {
                        'application/json': json.dumps(output)
                    }
                })
            except stardog.exceptions.StardogException as e:
                outputs.append({
                    'output_type': 'error',
                    'ename': type(e).__name__,
                    'evalue': str(e),
                    'traceback': []
                })
            except Exception as e:
                logger.error(f'Error running cell {cell_id} in notebook {report_id}')
                raise e

    print(outputs)

    Report.objects.filter(id=report_id).update(
        notebook=q_json_update('notebook', ['cells', str(cell_id), 'outputs'], outputs)
    )
    print(outputs)
    print(cell)

    send_to_group_sync(
        str(report_id),
        {
            'type': 'task_message',
            'message': Packet(PacketType.CELL_RESULT, {
                'cell_id': str(cell_id),
                'outputs': outputs,
            }).dumps()
        }
    )
