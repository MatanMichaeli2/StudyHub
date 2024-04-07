import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './pages/landing/LandingPage.js';
import App from "./App";


ReactDOM.render(
  <React.StrictMode>
    <App /> {/* Render the LandingPage component */}
  </React.StrictMode>,
  document.getElementById('root')
);
