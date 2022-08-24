import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

// Created by CB 24th August 2022
console.log("running index.js")

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App subject="Chaz" />
  </React.StrictMode>
);
