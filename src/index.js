import React from 'react';
import * as ReactDOMClient from 'react-dom/client';
import App from './App';
import { HashRouter } from 'react-router-dom';
import { SearchResults } from './components/SearchResults/SearchResults';
import './index.css';

const root = ReactDOMClient.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <SearchResults>
      <HashRouter>
        <App />
      </HashRouter>
    </SearchResults>
  </React.StrictMode>
);
