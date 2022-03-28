import * as React from 'react';
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import {
  DataGrid, GridColDef, GridValueGetterParams, GridSelectionModel,
} from '@mui/x-data-grid';
import { useState } from 'react';
import { deleteBook } from '../api/api';

const columns: GridColDef[] = [
  { field: 'id', headerName: 'ID', width: 90 },
  {
    field: 'title',
    headerName: 'Title',
    width: 150,
    editable: false,
  },
  {
    field: 'author',
    headerName: 'Author',
    width: 150,
    editable: false,
  },
  {
    field: 'ISBN',
    headerName: 'ISBN',
    width: 160,
    editable: false,
  },
  {
    field: 'category',
    headerName: 'Category',
    description: 'This column has a value getter and is not sortable.',
    sortable: false,
    width: 180,
    valueGetter: (params: GridValueGetterParams) => params.row.category,
  },
];

type Props = {
  books: Book[];
  reload: () => Promise<void>;
};

export const Table: React.FC<Props> = (props) => {
  const { books, reload } = props;
  const [selectionModel, setSelectionModel] = useState<GridSelectionModel>([]);
  const removeBook = () => {
    selectionModel.forEach(i => deleteBook(+i));
    reload();
  };

  const rows = books;

  return (
    <div style={{ height: 420, width: '100%' }}>
      <h1>Tabble of my books</h1>
      <Button
        disabled={selectionModel.length === 0}
        variant="contained"
        startIcon={<DeleteIcon />}
        onClick={removeBook}
      >
        Remove Book
      </Button>
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={6}
        rowsPerPageOptions={[6]}
        checkboxSelection
        onSelectionModelChange={(newSelectionModel) => {
          setSelectionModel(newSelectionModel);
        }}
        selectionModel={selectionModel}
      />
    </div>
  );
};
