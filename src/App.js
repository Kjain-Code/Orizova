import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { HelmetProvider, Helmet } from 'react-helmet-async';
import AOS from 'aos';
import 'aos/dist/aos.css';

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import About from './components/About';
import WhyUs from './components/WhyUs';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Projects from './components/Projects';
import Loader from './components/Loader';
import ScrollProgress from './components/ScrollProgress';
import BackToTop from './components/BackToTop';
import ServiceDetail from './pages/ServiceDetail';

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

function HomePage() {
  return (
    <>
      <Hero />
      <Services />
      <Projects />
      <About />
      <WhyUs />
      <Contact />
    </>
  );
}

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    AOS.init({ duration: 700, once: true, easing: 'ease-out-cubic' });
  }, []);

  return (
    <HelmetProvider>
      <Router>
        <ScrollToTop />
        <Helmet>
          <title>Orizova Co. | Digital Marketing & Web Development Agency India</title>
          <meta name="description" content="Orizova Co. is a full-service digital agency offering website development, app development, SEO, social media marketing, branding, and e-commerce solutions across India." />
          <meta name="keywords" content="digital marketing agency India, website development company, SEO services India, app development, social media marketing, branding agency, e-commerce solutions, performance marketing, Orizova" />
          <meta property="og:title" content="Orizova Co. | Digital Growth Agency" />
          <meta property="og:description" content="From strategy to scale — we build growth that lasts." />
          <meta name="robots" content="index, follow" />
          <link rel="canonical" href="https://orizova.com" />
        </Helmet>

        {isLoading && <Loader onComplete={() => setIsLoading(false)} />}

        <ScrollProgress />
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/services/:slug" element={<ServiceDetail />} />
        </Routes>
        <Footer />
        <BackToTop />

        {/* Instagram Float - Left Side */}
        <a
          href="https://instagram.com/orizova0.1"
          target="_blank"
          rel="noopener noreferrer"
          className="instagram-float"
        >
          <svg viewBox="0 0 24 24" width="28" height="28" fill="currentColor">
            <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
          </svg>
        </a>

        {/* WhatsApp Float - Right Side */}
        <a
          href="https://wa.me/917505802687?text=Hi%20Orizova%20Co.%2C%20I%20want%20to%20discuss%20a%20project"
          target="_blank"
          rel="noopener noreferrer"
          className="whatsapp-float"
        >
          💬
        </a>

        <style>{`
          .instagram-float {
            position: fixed;
            bottom: 32px;
            left: 32px;
            width: 56px;
            height: 56px;
            background: linear-gradient(135deg, #833AB4, #FD1D1D, #F77737);
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            color: white;
            box-shadow: 0 4px 20px rgba(225, 48, 108, 0.4);
            z-index: 999;
            transition: all 0.3s ease;
            text-decoration: none;
          }
          .instagram-float:hover {
            transform: scale(1.1) rotate(5deg);
            box-shadow: 0 6px 30px rgba(225, 48, 108, 0.5);
          }
          .whatsapp-float {
            position: fixed;
            bottom: 32px;
            right: 32px;
            width: 56px;
            height: 56px;
            background: #25D366;
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 1.6rem;
            box-shadow: 0 4px 20px rgba(37,211,102,0.4);
            z-index: 999;
            transition: transform 0.3s ease;
            text-decoration: none;
          }
          .whatsapp-float:hover {
            transform: scale(1.1);
          }
        `}</style>
      </Router>
    </HelmetProvider>
  );
}

export default App;