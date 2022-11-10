import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom'

import Routes from './Routes.js'

import './main.scss'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>
    <Router>
      <Routes />
    </Router>
  // </React.StrictMode>
);