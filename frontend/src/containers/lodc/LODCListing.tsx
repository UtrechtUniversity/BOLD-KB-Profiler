import {
  Box, Card, CardContent, CardHeader, LinearProgress, Modal
} from "@mui/material";
import React from "react";
import { useQuery } from "react-query";
import { fetchLODCDatasets, LODCDataset } from "../../services/lodc";
import CloudDownloadIcon from '@mui/icons-material/CloudDownload';

import { DataGrid, GridActionsCellItem, GridColDef, GridRowParams, GridToolbar } from '@mui/x-data-grid';
import Link from "next/link";
import { LODCImportForm } from "./LODCImportForm";

const LODC_DATASET_COLUMNS: GridColDef[] = [
  { field: 'identifier', headerName: 'ID', flex: 0.5 },
  {
    field: 'title', headerName: 'Title', flex: 1, minWidth: 200,
    renderCell: (params) => (
      <Link
        href={`https://lod-cloud.net/dataset/${encodeURIComponent(params.row.identifier)}`}
        target="_blank">{params.value}</Link>
    )
  },
  {
    field: 'description', headerName: 'Description', flex: 0.5,
    valueGetter: (row) => row.row.description.en ?? ''
  },
  { field: 'domain', headerName: 'Domain', flex: 0.5 },
  { field: 'website', headerName: 'Website', flex: 0.5 },
  {
    field: 'triples', headerName: 'Triples', flex: 0.5, type: 'number',
    valueGetter: (row) => row.row.triples ? row.row.triples.toString().replaceAll(/[.,]/g, '') : null
  },
  { field: 'n_downloads_available', headerName: 'Downloads Available', type: 'number' },
  { field: 'n_downloads_kg', headerName: 'Downloads KG', type: 'number' },
  { field: 'n_downloads_maybekg', headerName: 'Downloads Maybe KG', type: 'number' },
  { field: 'n_kg_available', headerName: 'KG Available', type: 'number', width: 180 },
];

export const LODCListing = (props: {}) => {
  const { data: rows } = useQuery<LODCDataset[]>('lodc-datasets', fetchLODCDatasets);
  const [ openItem, setOpenItem ] = React.useState<LODCDataset | null>(null);

  const openImportDialog = (item: LODCDataset) => {
    setOpenItem(item);
  }

  const columns = [
    ...LODC_DATASET_COLUMNS,
    {
      field: 'actions',
      type: 'actions',
      getActions: (params: GridRowParams) => [
        <GridActionsCellItem icon={<CloudDownloadIcon/>} onClick={() => openImportDialog(params.row)} label="Delete"/>,
      ]
    }
  ]

  return (
    <Box
      sx={{ width: '100%', height: 600, bgcolor: 'background.paper' }}
    >
      <DataGrid
        components={{
          Toolbar: GridToolbar,
          LoadingOverlay: LinearProgress
        }}
        rows={rows || []}
        loading={!rows}
        columns={columns}
        initialState={{
          filter: {
            filterModel: {
              items: [ { columnField: 'n_kg_available', operatorValue: '>', value: '0' } ],
            },
          },
          columns: {
            columnVisibilityModel: {
              n_downloads_available: false,
              n_downloads_kg: false,
              n_downloads_maybekg: false,
            }
          }
        }}
        componentsProps={{
          toolbar: {
            showQuickFilter: true,
            quickFilterProps: { debounceMs: 500 },
          },
        }}

      />
      <Modal
        open={openItem !== null}
        onClose={() => setOpenItem(null)}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Card sx={{
          width: 600,
          position: 'absolute' as 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          maxHeight: '100%',
          display: 'flex',
          flexDirection: 'column',
        }}>
          <CardHeader title="Import LODC Dataset"/>
          <CardContent sx={{ overflow: 'auto', flex: 1 }}>
            <LODCImportForm
              dataset={openItem}
              onComplete={(created) => {
                setOpenItem(null);
              }}
            />
          </CardContent>
        </Card>
      </Modal>
    </Box>
  )
}
