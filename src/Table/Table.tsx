/* eslint-disable no-console */
import * as React from 'react';
import Button from '@mui/material/Button';
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
    type: 'number',
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
  cangeBooks: (data: Book[], id: number) => void;
};

export const Table: React.FC<Props> = (props) => {
  const { books } = props;
  const [selectionModel, setSelectionModel] = useState<GridSelectionModel>([]);
  const removeBook = () => {
    console.log(selectionModel);

    deleteBook(+selectionModel);
  };

  const rows = books;

  return (
    <div style={{ height: 400, width: '100%' }}>
      <h1>Tabble of my books</h1>
      <Button variant="outlined" onClick={removeBook}>
        Remove a ithem
      </Button>
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
        checkboxSelection
        onSelectionModelChange={(newSelectionModel) => {
          setSelectionModel(newSelectionModel);
        }}
        selectionModel={selectionModel}
      />
    </div>
  );
};
