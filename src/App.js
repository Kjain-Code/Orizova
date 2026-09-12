import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { AnimatePresence } from 'framer-motion';

import Preloader from './components/Preloader';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import FloatingButtons from './components/FloatingButtons';
import ScrollToTop from './components/ScrollToTop';
import ScrollProgress from './components/ScrollProgress';

import Home from './pages/Home';
import ServicesPage from './pages/ServicesPage';
import Portfolio from './pages/Portfolio';
import CreativeWork from './pages/CreativeWork';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import ServicePage from './pages/ServicePage';
import NotFound from './pages/NotFound';

// Animates pages in/out on route change (needs to live under <BrowserRouter>
// so it can read the current location).
const AnimatedRoutes = () => {
  const location = useLocation();
  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/services/:slug" element={<ServicePage />} />
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
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <HelmetProvider>
      <AnimatePresence>
        {loading && <Preloader />}
      </AnimatePresence>

      <BrowserRouter>
        <ScrollToTop />
        <ScrollProgress />
        <Navbar />
        <main>
          <AnimatedRoutes />
        </main>
        <Footer />
      </BrowserRouter>

      <FloatingButtons />
    </HelmetProvider>
  );
}

export default App;
