import React, { useEffect } from 'react';
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

function App() {
  useEffect(() => {
    AOS.init({ duration: 700, once: true, easing: 'ease-out-cubic' });
  }, []);

  return (
    <HelmetProvider>
      <Helmet>
        <title>Orizova Co. | Digital Marketing & Web Development Agency India</title>
        <meta name="description" content="Orizova Co. is a full-service digital agency offering website development, app development, SEO, social media marketing, branding, and e-commerce solutions across India." />
        <meta name="keywords" content="digital marketing agency India, website development company, SEO services India, app development, social media marketing, branding agency, e-commerce solutions, performance marketing, Orizova" />
        <meta property="og:title" content="Orizova Co. | Digital Growth Agency" />
        <meta property="og:description" content="From strategy to scale — we build growth that lasts." />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://orizova.com" />
      </Helmet>

      <Navbar />
      <main>
        <Hero />
        <Services />
        <About />
        <WhyUs />
        <Projects />
        <Contact />
      </main>
      <Footer />

      {/* WhatsApp Float */}
      <a
        // href="https://wa.me/917505802687"
        href="https://wa.me/917505802687?text=Hi%20Orizova%20Co.%2C%20I%20want%20to%20discuss%20a%20project"
        target="_blank"
        rel="noopener noreferrer"
        className="whatsapp-float"
      >
        💬
      </a>

      <style>{`
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
    </HelmetProvider>
  );
}

export default App;