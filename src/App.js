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

// Home ships in the main bundle (it's the landing page); every other page is
// code-split so the first load downloads far less JavaScript.
import Home from './pages/core/Home';
const ServicesPage = lazy(() => import('./pages/services/ServicesPage'));
const ServicePage = lazy(() => import('./pages/services/ServicePage'));
const LocationsPage = lazy(() => import('./pages/locations/LocationsPage'));
const LocationPage = lazy(() => import('./pages/locations/LocationPage'));
const CityServicePage = lazy(() => import('./pages/locations/CityServicePage'));
const IndustriesPage = lazy(() => import('./pages/industries/IndustriesPage'));
const IndustryPage = lazy(() => import('./pages/industries/IndustryPage'));
const BlogIndex = lazy(() => import('./pages/blog/BlogIndex'));
const BlogPost = lazy(() => import('./pages/blog/BlogPost'));
const FaqPage = lazy(() => import('./pages/core/FaqPage'));
const LegalPage = lazy(() => import('./pages/core/LegalPage'));
const Portfolio = lazy(() => import('./pages/work/Portfolio'));
const PortfolioDetail = lazy(() => import('./pages/work/PortfolioDetail'));
const CreativeWork = lazy(() => import('./pages/work/CreativeWork'));
const AboutPage = lazy(() => import('./pages/core/AboutPage'));
const ContactPage = lazy(() => import('./pages/core/ContactPage'));
const NotFound = lazy(() => import('./pages/core/NotFound'));

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
      <Suspense fallback={<PageFallback />}>
        <AnimatedRoutes />
      </Suspense>
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
