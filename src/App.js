import React, { Suspense, lazy, useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { AnimatePresence, LazyMotion } from 'framer-motion';

import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import FloatingButtons from './components/layout/FloatingButtons';
import ScrollToTop from './components/layout/ScrollToTop';
import ScrollProgress from './components/layout/ScrollProgress';
import ScrollReveal from './components/layout/ScrollReveal';
import motionFeatures from './motionFeatures';

// After a new deploy the page files get new names. A tab that was opened
// before the deploy still asks for the old names, the download fails and —
// without this — the page stays blank. So: try again once, and if it still
// fails reload the page (at most once every 30 s) to pick up the new files.
const RELOAD_KEY = 'oz-chunk-reload';
const lazyPage = (load) => lazy(() => load()
  .catch(() => new Promise((resolve) => { setTimeout(resolve, 500); }).then(load))
  .catch((err) => {
    try {
      const last = Number(window.sessionStorage.getItem(RELOAD_KEY) || 0);
      if (Date.now() - last > 30000) {
        window.sessionStorage.setItem(RELOAD_KEY, String(Date.now()));
        window.location.reload();
        return new Promise(() => {}); // keep the fallback on screen until the reload
      }
    } catch (e) { /* storage blocked: fall through to the error message */ }
    throw err;
  }));

/* If a page still can't load, show a short message with a Refresh button
   instead of an empty screen. Resets when the visitor goes to another page. */
class PageErrorBoundary extends React.Component {
  constructor(props) { super(props); this.state = { failed: false }; }
  static getDerivedStateFromError() { return { failed: true }; }
  componentDidUpdate(prev) {
    if (prev.resetKey !== this.props.resetKey && this.state.failed) this.setState({ failed: false });
  }
  render() {
    if (!this.state.failed) return this.props.children;
    // The page arrived pre-rendered: keep showing that full content.
    if (typeof window !== 'undefined' && window.__PRERENDERED_MAIN__ &&
        window.__PRERENDERED_PATH__ === window.location.pathname) {
      // eslint-disable-next-line react/no-danger
      return <div dangerouslySetInnerHTML={{ __html: window.__PRERENDERED_MAIN__ }} />;
    }
    return (
      <section className="page-load-error container" role="alert">
        <h2>This page didn't load properly</h2>
        <p>Please refresh — it usually works on the second try. You can also reach us on WhatsApp or call anytime.</p>
        <button type="button" className="btn-primary" onClick={() => window.location.reload()}>Refresh page</button>
      </section>
    );
  }
}

const PageArea = () => {
  const { pathname } = useLocation();
  return (
    <PageErrorBoundary resetKey={pathname}>
      <Suspense fallback={<PageFallback />}>
        <AnimatedRoutes />
      </Suspense>
    </PageErrorBoundary>
  );
};

// Every page — Home included — is code-split, so the first download is only
// the shared app shell. The pre-rendered HTML stays on screen while a page's
// own file loads (see PageFallback), so nothing flashes.
const pageLoaders = {
  Home: () => import('./pages/core/Home'),
  ServicesPage: () => import('./pages/services/ServicesPage'),
  ServicePage: () => import('./pages/services/ServicePage'),
  LocationsPage: () => import('./pages/locations/LocationsPage'),
  LocationPage: () => import('./pages/locations/LocationPage'),
  CityServicePage: () => import('./pages/locations/CityServicePage'),
  IndustriesPage: () => import('./pages/industries/IndustriesPage'),
  IndustryPage: () => import('./pages/industries/IndustryPage'),
  BlogIndex: () => import('./pages/blog/BlogIndex'),
  BlogPost: () => import('./pages/blog/BlogPost'),
  FaqPage: () => import('./pages/core/FaqPage'),
  LegalPage: () => import('./pages/core/LegalPage'),
  Portfolio: () => import('./pages/work/Portfolio'),
  PortfolioDetail: () => import('./pages/work/PortfolioDetail'),
  CreativeWork: () => import('./pages/work/CreativeWork'),
  CaseStudies: () => import('./pages/work/CaseStudies'),
  AboutPage: () => import('./pages/core/AboutPage'),
  ContactPage: () => import('./pages/core/ContactPage'),
  NotFound: () => import('./pages/core/NotFound'),
};
const Home = lazyPage(pageLoaders.Home);
const ServicesPage = lazyPage(pageLoaders.ServicesPage);
const ServicePage = lazyPage(pageLoaders.ServicePage);
const LocationsPage = lazyPage(pageLoaders.LocationsPage);
const LocationPage = lazyPage(pageLoaders.LocationPage);
const CityServicePage = lazyPage(pageLoaders.CityServicePage);
const IndustriesPage = lazyPage(pageLoaders.IndustriesPage);
const IndustryPage = lazyPage(pageLoaders.IndustryPage);
const BlogIndex = lazyPage(pageLoaders.BlogIndex);
const BlogPost = lazyPage(pageLoaders.BlogPost);
const FaqPage = lazyPage(pageLoaders.FaqPage);
const LegalPage = lazyPage(pageLoaders.LegalPage);
const Portfolio = lazyPage(pageLoaders.Portfolio);
const PortfolioDetail = lazyPage(pageLoaders.PortfolioDetail);
const CreativeWork = lazyPage(pageLoaders.CreativeWork);
const CaseStudies = lazyPage(pageLoaders.CaseStudies);
const AboutPage = lazyPage(pageLoaders.AboutPage);
const ContactPage = lazyPage(pageLoaders.ContactPage);
const NotFound = lazyPage(pageLoaders.NotFound);

// ---- Faster clicks: download a page's file before it is needed ----
// When the pointer moves over (or a finger touches) an internal link, start
// loading that page's file, so by the time the click lands it is ready.
// After the first page has loaded and the browser is idle, the other page
// files are fetched quietly too — skipped on Data Saver and slow (2G/3G)
// connections so nobody's data is wasted.
const ROUTE_LOADERS = [
  [/^\/$/, 'Home'],
  [/^\/services\/?$/, 'ServicesPage'],
  [/^\/services\/[^/]+\/?$/, 'ServicePage'],
  [/^\/locations\/?$/, 'LocationsPage'],
  [/^\/locations\/[^/]+\/?$/, 'LocationPage'],
  [/^\/locations\/[^/]+\/[^/]+\/?$/, 'CityServicePage'],
  [/^\/industries\/?$/, 'IndustriesPage'],
  [/^\/industries\/[^/]+\/?$/, 'IndustryPage'],
  [/^\/blog\/?$/, 'BlogIndex'],
  [/^\/blog\/[^/]+\/?$/, 'BlogPost'],
  [/^\/faq\/?$/, 'FaqPage'],
  [/^\/(privacy-policy|terms)\/?$/, 'LegalPage'],
  [/^\/portfolio\/?$/, 'Portfolio'],
  [/^\/portfolio\/[^/]+\/?$/, 'PortfolioDetail'],
  [/^\/creative-work\/?$/, 'CreativeWork'],
  [/^\/case-studies\/?$/, 'CaseStudies'],
  [/^\/about\/?$/, 'AboutPage'],
  [/^\/contact\/?$/, 'ContactPage'],
];
const prefetched = new Set();
const prefetchPage = (name) => {
  if (!name || prefetched.has(name) || !pageLoaders[name]) return;
  prefetched.add(name);
  pageLoaders[name]().catch(() => prefetched.delete(name));
};
const prefetchPath = (pathname) => {
  const hit = ROUTE_LOADERS.find(([re]) => re.test(pathname));
  if (hit) prefetchPage(hit[1]);
};

const LinkPrefetcher = () => {
  useEffect(() => {
    const onIntent = (e) => {
      const a = e.target && e.target.closest ? e.target.closest('a[href^="/"]') : null;
      if (a) prefetchPath(a.getAttribute('href').split(/[?#]/)[0]);
    };
    const opts = { passive: true, capture: true };
    document.addEventListener('mouseover', onIntent, opts);
    document.addEventListener('touchstart', onIntent, opts);
    document.addEventListener('focusin', onIntent, opts);

    let timer;
    let idleId;
    const conn = navigator.connection || {};
    const slow = conn.saveData || /(^|-)(2g|3g)$/.test(conn.effectiveType || '');
    const idle = window.requestIdleCallback || ((cb) => setTimeout(cb, 200));
    const warmAll = () => {
      const names = Object.keys(pageLoaders);
      const next = () => {
        const name = names.shift();
        if (!name) return;
        prefetchPage(name);
        idleId = idle(next);
      };
      idleId = idle(next);
    };
    const start = () => { timer = setTimeout(warmAll, 2500); };
    if (!slow) {
      if (document.readyState === 'complete') start();
      else window.addEventListener('load', start, { once: true });
    }
    return () => {
      document.removeEventListener('mouseover', onIntent, opts);
      document.removeEventListener('touchstart', onIntent, opts);
      document.removeEventListener('focusin', onIntent, opts);
      window.removeEventListener('load', start);
      clearTimeout(timer);
      if (window.cancelIdleCallback && idleId) window.cancelIdleCallback(idleId);
    };
  }, []);
  return null;
};

// Meta Pixel: the base script loads lazily from index.html, so SPA route
// changes need their own PageView (the first one is sent by index.html).
const PixelPageView = () => {
  const location = useLocation();
  const first = React.useRef(true);
  useEffect(() => {
    if (first.current) { first.current = false; return; }
    document.documentElement.classList.remove('pb-static');
    if (typeof window.fbq === 'function') window.fbq('track', 'PageView');
  }, [location.pathname]);
  return null;
};

// Animation features load with the app (not as a separate later chunk) so
// animated sections never sit invisible waiting for a download.
const loadMotionFeatures = motionFeatures;

// While a lazy page chunk downloads on the very first visit, keep showing the
// pre-rendered HTML that came with the page (captured in index.js) instead of
// a blank screen. On later in-app navigations it is just an empty spacer.
const PageFallback = () => {
  if (typeof window !== 'undefined' && window.__PRERENDERED_MAIN__ &&
      window.__PRERENDERED_PATH__ === window.location.pathname) {
    // eslint-disable-next-line react/no-danger
    return <div dangerouslySetInnerHTML={{ __html: window.__PRERENDERED_MAIN__ }} />;
  }
  return <div style={{ minHeight: '100vh' }} aria-hidden="true" />;
};

const AnimatedRoutes = () => {
  const location = useLocation();
  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/services/:slug" element={<ServicePage />} />
        <Route path="/locations" element={<LocationsPage />} />
        <Route path="/locations/:city" element={<LocationPage />} />
        <Route path="/locations/:city/:service" element={<CityServicePage />} />
        <Route path="/industries" element={<IndustriesPage />} />
        <Route path="/industries/:slug" element={<IndustryPage />} />
        <Route path="/blog" element={<BlogIndex />} />
        <Route path="/blog/:slug" element={<BlogPost />} />
        <Route path="/faq" element={<FaqPage />} />
        <Route path="/privacy-policy" element={<LegalPage doc="privacy" />} />
        <Route path="/terms" element={<LegalPage doc="terms" />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/portfolio/:slug" element={<PortfolioDetail />} />
        <Route path="/creative-work" element={<CreativeWork />} />
        <Route path="/case-studies" element={<CaseStudies />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </AnimatePresence>
  );
};

/** Everything inside the router. Shared by the browser app and the
 *  build-time pre-renderer (src/ssr-entry.jsx). */
export const AppShell = () => (
  <LazyMotion features={loadMotionFeatures}>
    <ScrollToTop />
    <ScrollProgress />
    <ScrollReveal />
    <PixelPageView />
    <LinkPrefetcher />
    <Navbar />
    <main id="main">
      <PageArea />
    </main>
    <Footer />
    <FloatingButtons />
  </LazyMotion>
);

function App() {
  return (
    <HelmetProvider>
      <BrowserRouter>
        <AppShell />
      </BrowserRouter>
    </HelmetProvider>
  );
}

export default App;
