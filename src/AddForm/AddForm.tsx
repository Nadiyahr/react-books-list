import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
// import { useEffect, useState } from 'react';
// import { requestBooks } from '../api/api';

type Props = {
  data: Book[];
};

export const AddForm: React.FC<Props> = () => {
  return (
    <Box
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >
      <h1>Add a Book</h1>
      <div>
        <TextField
          id="id"
          label="ID"
          defaultValue="0"
          InputProps={{
            readOnly: true,
          }}
        />
        <TextField
          required
          id="title"
          label="Title"
          defaultValue="Title"
        />
        <TextField
          required
          id="author"
          label="Author"
          defaultValue="Author"
        />
        <TextField
          required
          id="category"
          label="Category"
          defaultValue="Category"
        />
        <TextField
          required
          id="ISBN"
          label="ISBN"
          type="number"
          InputLabelProps={{
            shrink: true,
          }}
          helperText="ISBN code must contain 13 numbers"
        />
        <TextField
          id="outlined-helperText"
          label="Helper text"
          defaultValue="Default Value"
        />
      </div>
    </Box>
  );
};
