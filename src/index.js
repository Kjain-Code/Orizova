import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
// Styles for the code-split pages ship in the main stylesheet. The
// pre-rendered HTML only links main.css, so when these lived in lazy chunks the
// page first painted unstyled and then jumped (CLS ≈ 0.43 on desktop).
import './components/common/PageBanner.css';
import './components/content/ContentPage.css';
import './pages/locations/LocationPage.css';
import './components/common/CtaBand.css';
import './components/sections/About.css';
import './components/sections/Contact.css';
import './components/home/AreasServed.css';
import './components/sections/CreativeRingGallery.css';
import './components/sections/CreativeWorkSections.css';

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

// Every URL ships fully pre-rendered HTML (scripts/prerender.js). Hydrating it
// — instead of throwing it away and rendering again — keeps the text that is
// already on screen, so the Largest Contentful Paint happens at first paint,
// not after the JavaScript has downloaded and run (big mobile speed win).
const container = document.getElementById('root');
const app = (
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
if (container.querySelector('main')) {
  ReactDOM.hydrateRoot(container, app, {
    // A small mismatch makes React re-render that part on the client, which is
    // exactly what the old createRoot did for the whole page — so it's safe.
    onRecoverableError: (err) => { if (window.__HYDRATION_DEBUG__) console.warn('[hydration]', err && err.message); },
  });
} else {
  ReactDOM.createRoot(container).render(app);
}

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
