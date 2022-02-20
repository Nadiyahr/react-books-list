import React, { useEffect, useState } from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import { requestBooks } from './api/api';
import './App.scss';
import Table from './Table';

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
    <div className="App">
      <nav>
        <Link to="/">Home</Link>
        <Link to="/table">Table</Link>
      </nav>
      <Routes>
        <Route path="/" element={<h1>Home page</h1>} />
        <Route path="table" element={<Table books={books} />} />

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
