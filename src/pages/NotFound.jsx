import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FiArrowLeft } from 'react-icons/fi';
import { MagnifierCharacter } from '../components/Doodles';
import PageTransition from '../components/PageTransition';

const NotFound = () => {
  return (
    <PageTransition>
    <section className="page-banner" style={{ minHeight: '70vh', display: 'flex', alignItems: 'center' }}>
      <Helmet>
        <title>Page Not Found | Orizova Co.</title>
      </Helmet>
      <div className="page-banner-shape" style={{ width: 380, height: 380, background: 'var(--violet)', top: -140, right: -100 }} />
      <div className="page-banner-shape" style={{ width: 260, height: 260, background: 'var(--gold)', bottom: -100, left: -80 }} />
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 8 }}
        >
          <MagnifierCharacter />
          <h1 className="section-title" style={{ marginTop: 16 }}>
            404 — Page <span className="accent-serif">Not Found</span>
          </h1>
          <p className="section-subtitle" style={{ margin: '0 auto 32px' }}>
            The page you're looking for doesn't exist or has moved.
          </p>
          <Link to="/">
            <button className="btn-primary">
              <FiArrowLeft /> Back to Home
            </button>
          </Link>
        </motion.div>
      </div>
    </section>
    </PageTransition>
  );
};

export default NotFound;
