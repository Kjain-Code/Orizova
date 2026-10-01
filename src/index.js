import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

// The static SEO tags in each pre-rendered HTML file (marked data-rh) exist for
// crawlers and link previews. Once React is running, react-helmet-async renders
// the live per-page tags itself — remove the static copies so there are no
// duplicates when visitors navigate between pages.
document.querySelectorAll('head [data-rh]').forEach((node) => node.remove());

// Keep the pre-rendered page content so the first lazy page chunk can show it
// while it downloads (see PageFallback in App.js) — no blank flash.
if (document.querySelector('#root .pb')) document.documentElement.classList.add('pb-static');
const preMain = document.querySelector('#root main');
if (preMain) {
  window.__PRERENDERED_MAIN__ = preMain.innerHTML;
  window.__PRERENDERED_PATH__ = window.location.pathname;
}

// Google Analytics 4 — set REACT_APP_GA_ID=G-XXXXXXX in .env.production.
// {{TODO: add your GA4 Measurement ID}}. Loaded after the first paint.
const GA_ID = process.env.REACT_APP_GA_ID;
if (GA_ID) {
  window.dataLayer = window.dataLayer || [];
  window.gtag = function gtag() { window.dataLayer.push(arguments); }; // eslint-disable-line prefer-rest-params
  window.gtag('js', new Date());
  window.gtag('config', GA_ID);
  window.addEventListener('load', () => {
    setTimeout(() => {
      const s = document.createElement('script');
      s.async = true;
      s.src = `https://www.googletagmanager.com/gtag/js?id=${GA_ID}`;
      document.head.appendChild(s);
    }, 1500);
  });
}

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
