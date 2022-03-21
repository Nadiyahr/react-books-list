/* eslint-disable no-console */
import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { addBook, requestBooks } from '../api/api';

export const AddForm: React.FC = () => {
  const [newId, setNewId] = useState(0);
  const [newTitle, setNewTitle] = useState('');
  const [newAuthor, setNewAuthor] = useState('');
  const [newCategory, setNewCathegory] = useState('');
  const [newISBN, setNewISBN] = useState(0);
  const [newYear, setNewYear] = useState(0);
  // const [formErrors, setFormErrors] = useState({});
  const history = useNavigate();

  const getNewId = async () => {
    const booksList = await requestBooks();
    const arr = booksList.map((b: Book) => b.id);
    const id = +Math.max(...arr) + 1;

    setNewId(id);
  };

  // function minMaxLength(text: string, minLength: number, maxLength: number) {
  //   let result = !text || text.length < minLength;

  //   if (maxLength) {
  //     result = result || text.length < minLength;
  //   }

  //   return result;
  // }

  const hanndleChange = (e: React.FormEvent<EventTarget>) => {
    const { name, value } = e.target as HTMLInputElement;

    switch (name) {
      case 'title':
        // if (minMaxLength(value, 2, 6)) {
        // }
        setNewTitle(value);
        break;

      case 'author':
        setNewAuthor(value);
        break;

      case 'category':
        setNewCathegory(value);
        break;

      case 'ISBN':
        setNewISBN(+value);
        break;

      case 'year':
        setNewYear(+value);
        break;

      default:
        break;
    }
  };

  const hanndleSubmit = async () => {
    const newData: Book = {
      id: newId,
      title: newTitle,
      author: newAuthor,
      category: newCategory,
      ISBN: newISBN,
      year: newYear,
    };

    addBook(newData);
    history('/');
  };

  useEffect(() => {
    getNewId();
  }, []);

  return (
    <Box
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
      onSubmit={hanndleSubmit}
    >
      <h1>Add a Book</h1>
      <div>
        <TextField
          required
          id="title"
          label="Title"
          name="title"
          // defaultValue={newTitle}
          value={newTitle}
          onChange={hanndleChange}
        />
        <TextField
          required
          id="author"
          label="Author"
          name="author"
          value={newAuthor}
          onChange={hanndleChange}
        />
        <TextField
          required
          id="category"
          label="Category"
          name="category"
          value={newCategory}
          onChange={hanndleChange}
        />
        <TextField
          required
          id="ISBN"
          label="ISBN"
          type="number"
          name="ISBN"
          onChange={hanndleChange}
          InputLabelProps={{
            shrink: true,
          }}
          helperText="ISBN code must contain 13 numbers"
        />
        <TextField
          id="year"
          label="Year"
          name="year"
          onChange={hanndleChange}
        />
      </div>
      <button type="submit">Submite</button>
    </Box>
  );
};
