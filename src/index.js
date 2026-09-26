import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

// The static SEO tags in public/index.html (marked data-rh) exist for crawlers
// and link previews. Once React is running, react-helmet-async renders the
// live per-page tags itself — remove the static copies so there are no
// duplicates when visitors navigate between pages.
document.querySelectorAll('head [data-rh]').forEach((node) => node.remove());

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
