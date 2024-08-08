import React from 'react';
import ToDoList from '../ToDoList';
import { Route, Routes } from 'react-router-dom';
import ToDoDetails from '../ToDoDetails/ToDoDetails';

const AppRoutes = () => (
  <div className="AppRoutes">
    <Routes>
      <Route path="/" element={<ToDoList />} />
      <Route path="/todo/:id" element={<ToDoDetails />} />
      <Route path="/new" element={<h1>Create a new todo</h1>} />
    </Routes>
  </div>
);

export default AppRoutes;
