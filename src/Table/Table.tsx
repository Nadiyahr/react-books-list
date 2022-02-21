import * as React from 'react';
// import Button from '@mui/material/Button';
import { DataGrid, GridColDef, GridValueGetterParams } from '@mui/x-data-grid';

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
    valueGetter: (params: GridValueGetterParams) => params.row.category.map((cat: string) => `${cat || ''}`).join('/'),
  },
];

type Props = {
  books: Book[];
};

export const Table: React.FC<Props> = (props) => {
  const { books } = props;
  // const [nbRows, setNbRows] = React.useState(15);
  // const removeRow = () => setNbRows((x) => Math.max(0, x - 1));
  // const addRow = () => setNbRows((x) => Math.min(100, x + 1));

  const rows = books;

  return (
    <div style={{ height: 400, width: '100%' }}>
      <h1>Tabble of my books</h1>
      {/* <Button variant="outlined" onClick={removeRow}>
        Remove a row
      </Button>
      <Button variant="outlined" onClick={addRow}>
        Add a row
      </Button> */}
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={6}
        rowsPerPageOptions={[6]}
        checkboxSelection
        disableSelectionOnClick
      />
    </div>
  );
};
