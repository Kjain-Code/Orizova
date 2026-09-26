import React, { Suspense, lazy, useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { AnimatePresence, LazyMotion } from 'framer-motion';

import Navbar from './components/Navbar';
import Footer from './components/Footer';
import FloatingButtons from './components/FloatingButtons';
import ScrollToTop from './components/ScrollToTop';
import ScrollProgress from './components/ScrollProgress';

// Home ships in the main bundle (it's the landing page); every other page is
// code-split so the first load downloads far less JavaScript.
import Home from './pages/Home';
const ServicesPage = lazy(() => import('./pages/ServicesPage'));
const ServicePage = lazy(() => import('./pages/ServicePage'));
const LocationPage = lazy(() => import('./pages/LocationPage'));
const Portfolio = lazy(() => import('./pages/Portfolio'));
const CreativeWork = lazy(() => import('./pages/CreativeWork'));
const AboutPage = lazy(() => import('./pages/AboutPage'));
const ContactPage = lazy(() => import('./pages/ContactPage'));
const NotFound = lazy(() => import('./pages/NotFound'));

// Meta Pixel: the base script loads lazily from index.html, so SPA route
// changes need their own PageView (the first one is sent by index.html).
const PixelPageView = () => {
  const location = useLocation();
  const first = React.useRef(true);
  useEffect(() => {
    if (first.current) { first.current = false; return; }
    if (typeof window.fbq === 'function') window.fbq('track', 'PageView');
  }, [location.pathname]);
  return null;
};

const loadMotionFeatures = () => import('./motionFeatures').then((mod) => mod.default);

const PageFallback = () => <div style={{ minHeight: '100vh' }} aria-hidden="true" />;

const AnimatedRoutes = () => {
  const location = useLocation();
  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/services/:slug" element={<ServicePage />} />
        <Route path="/locations/:city" element={<LocationPage />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/creative-work" element={<CreativeWork />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </AnimatePresence>
  );
};

function App() {
  return (
    <HelmetProvider>
      <LazyMotion features={loadMotionFeatures}>
      <BrowserRouter>
        <ScrollToTop />
        <ScrollProgress />
        <PixelPageView />
        <Navbar />
        <main>
          <Suspense fallback={<PageFallback />}>
            <AnimatedRoutes />
          </Suspense>
        </main>
        <Footer />
      </BrowserRouter>

      <FloatingButtons />
      </LazyMotion>
    </HelmetProvider>
  );
}

export default App;
