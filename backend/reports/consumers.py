from typing import Any
from uuid import UUID

from asgiref.sync import async_to_sync
from channels.generic.websocket import WebsocketConsumer
from django.contrib.auth.models import User

from reports.models import Report, CellState, PacketType
from shared.logging import get_logger
from shared.websocket import Packet
from .tasks import run_cell

logger = get_logger()


class NotebookConsumer(WebsocketConsumer):
    report_id: UUID
    user: User

    def connect(self):
        self.report_id = self.scope['url_route']['kwargs']['notebook_id']
        self.user = self.scope["user"]

        if not self.report.can_view(self.user):
            self.close()
            return

        async_to_sync(self.channel_layer.group_add)(
            str(self.report_id), self.channel_name
        )
        self.accept()

    def disconnect(self, close_code):
        async_to_sync(self.channel_layer.group_discard)(
            str(self.report_id), self.channel_name
        )

    def receive(self, text_data):
        packet = Packet.loads_json(text_data)
        logger.info(f'Received {packet.type} packet')

        match PacketType(packet.type):
            case PacketType.CELL_RUN:
                if not self.report.can_edit(self.user):
                    return

                report = self.report
                cell_id = UUID(packet.data)
                cell_index = report.notebook.get('content', {}).get('cell_order', []).index(str(cell_id))

                Report.update_cell_outputs(self.report_id, cell_id, [])
                Report.update_cell_state(self.report_id, cell_id, CellState.QUEUED)
                self.report.apply_async(
                    run_cell, (self.report_id, cell_id),
                    creator=self.user,
                    name='Run cell #{}'.format(cell_index)
                )
            case PacketType.CELL_RESULT:
                self.send_packet(PacketType.CELL_RESULT, packet.data)
            case PacketType.CELL_STATE:
                self.send_packet(PacketType.CELL_STATE, packet.data)

    def task_message(self, event):
        self.receive(event['message'])

    def send_packet(self, type: PacketType, data: Any):
        self.send(text_data=Packet(type.value, data).dumps())

    @property
    def report(self) -> Report:
        report, created = Report.objects.get_or_create(
            id=self.report_id,
            defaults={
                'notebook': {
                    'id': self.report_id,
                }
            }
        )

        return report

    def check_permissions(self):
        pass
