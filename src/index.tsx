// import React from 'react';
import ReactDOM from 'react-dom/client';import { HashRouter } from 'react-router-dom';
import { App } from './App';
import './styles/fonts/fonts.scss';
import './styles/header.scss';
import './styles/app.scss';
import './styles/card.scss';
import './styles/pagination.scss';
import './styles/detailsPage.scss';


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <HashRouter>
    <App />
  </HashRouter>
);
