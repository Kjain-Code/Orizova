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
import Home from './pages/core/Home';

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

// Home ships in the main bundle (it's the landing page); every other page is
// code-split so the first load downloads far less JavaScript.
const ServicesPage = lazyPage(() => import('./pages/services/ServicesPage'));
const ServicePage = lazyPage(() => import('./pages/services/ServicePage'));
const LocationsPage = lazyPage(() => import('./pages/locations/LocationsPage'));
const LocationPage = lazyPage(() => import('./pages/locations/LocationPage'));
const CityServicePage = lazyPage(() => import('./pages/locations/CityServicePage'));
const IndustriesPage = lazyPage(() => import('./pages/industries/IndustriesPage'));
const IndustryPage = lazyPage(() => import('./pages/industries/IndustryPage'));
const BlogIndex = lazyPage(() => import('./pages/blog/BlogIndex'));
const BlogPost = lazyPage(() => import('./pages/blog/BlogPost'));
const FaqPage = lazyPage(() => import('./pages/core/FaqPage'));
const LegalPage = lazyPage(() => import('./pages/core/LegalPage'));
const Portfolio = lazyPage(() => import('./pages/work/Portfolio'));
const PortfolioDetail = lazyPage(() => import('./pages/work/PortfolioDetail'));
const CreativeWork = lazyPage(() => import('./pages/work/CreativeWork'));
const AboutPage = lazyPage(() => import('./pages/core/AboutPage'));
const ContactPage = lazyPage(() => import('./pages/core/ContactPage'));
const NotFound = lazyPage(() => import('./pages/core/NotFound'));

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
