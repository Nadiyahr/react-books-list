import React, { useEffect, useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.scss';
import CssBaseline from '@mui/material/CssBaseline';
// import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import { requestBooks } from './api/api';
import { Table } from './Table';
import { AddForm } from './AddForm';
import { Header } from './Header';

export const App: React.FC = () => {
  const [books, setBooks] = useState<Book[]>([]);

  const loadData = async () => {
    const booksList = await requestBooks();

    setBooks(booksList);
  };

  useEffect(() => {
    loadData();
  }, []);

  return (
    <>
      <CssBaseline />
      <Container maxWidth="md">
        {/* <Box sx={{ bgcolor: '#cfe8fc', height: '100vh' }} /> */}
        <Header />
        <Routes>
          <Route path="/" element={<Table books={books} />} />
          <Route path="add" element={<AddForm data={books} />} />
          <Route
            path="*"
            element={(
              <p>
                Page not found
              </p>
            )}
          />
        </Routes>
      </Container>
    </>
    // <div className="App">
    //   <Header />
    //   <Routes>
    //     <Route path="/" element={<Table books={books} />} />
    //     <Route path="add" element={<AddForm data={books} />} />
    //     <Route
    //       path="*"
    //       element={(
    //         <p>
    //           Page not found
    //         </p>
    //       )}
    //     />
    //   </Routes>
    // </div>
  );
};
