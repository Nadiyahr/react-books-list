import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import './App.scss';

export const App: React.FC = () => {
  return (
    <div className="App">
      <nav>
        <Link to="/">Home</Link>
        <Link to="/table">Add</Link>
      </nav>
      <Routes>
        <Route path="/" element={<h1>Home page</h1>} />
        <Route path="table" element={<h1>Table</h1>} />

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
