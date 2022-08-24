import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
const DATA = [
  { id: "todo-0", name: "Eat", completed: true },
  { id: "todo-1", name: "Sleep", completed: false },
  { id: "todo-2", name: "Repeat", completed: false }
]

// Created by CB 24th August 2022
console.log("running index.js")

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <App subject="Charandeep" tasks={DATA} />
  </React.StrictMode>
);
