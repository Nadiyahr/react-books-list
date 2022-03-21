import React, { useEffect, useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.scss';
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import { requestBooks } from './api/api';
import { Table } from './Table';
import { AddForm } from './AddForm';
import { Header } from './Header';

export const App: React.FC = () => {
  const [books, setBooks] = useState<Book[]>([]);

  useEffect(() => {
    loadData();
  }, [books]);

  const filterBooks = (data: Book[], id: number) => {
    data.filter(item => item.id !== id);

    setBooks(data);
  };

  const loadData = async () => {
    const booksList = await requestBooks();

    setBooks(booksList);
  };

  return (
    <>
      <CssBaseline />
      <Container maxWidth="md">
        <Header />
        <Routes>
          <Route path="/" element={<Table books={books} cangeBooks={filterBooks} />} />
          <Route path="add" element={<AddForm />} />
        </Routes>
      </Container>
    </>
  );
};
