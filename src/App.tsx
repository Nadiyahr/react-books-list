/* eslint-disable no-console */
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
    console.log(books);
    loadData();
  }, []);

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
          <Route path="/" element={<Table books={books} reload={loadData} />} />
          <Route path="add" element={<AddForm reload={loadData} />} />
        </Routes>
      </Container>
    </>
  );
};
