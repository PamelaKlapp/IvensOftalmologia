import React from 'react';
import * as ReactDOMClient from 'react-dom/client';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { SearchResults } from './components/SearchResults/SearchResults';
import './index.css';

const root = ReactDOMClient.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <SearchResults>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </SearchResults>
  </React.StrictMode>
);
