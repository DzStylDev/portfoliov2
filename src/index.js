
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import { Helmet } from 'react-helmet'
import { BrowserRouter } from 'react-router-dom'

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <BrowserRouter> 
    <Helmet>
      <script src='./tabCompetences.js'></script>
    </Helmet>
    <App />
  </BrowserRouter>
);
