import React, { useEffect, useState } from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import { requestBooks } from './api/api';
import './App.scss';
import { Table } from './Table';
import { AddForm } from './AddForm';

export const App: React.FC = () => {
  const [books, setBooks] = useState<Book[]>([]);

  const loadData = async () => {
    const booksList = await requestBooks();

    setBooks(booksList);
  };

  // const max = (Math.max(...books.map(book => book.id)));

  useEffect(() => {
    loadData();
  }, []);

  return (
    <div className="App">
      <nav>
        {/* <Link to="/">Home</Link> */}
        <Link to="/">Dashboard</Link>
        <Link to="/add">Add Book</Link>
      </nav>
      <Routes>
        {/* <Route path="/" element={<h1>Home page</h1>} /> */}
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
    </div>
  );
};
