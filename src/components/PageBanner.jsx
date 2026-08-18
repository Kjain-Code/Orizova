import React from 'react';
import { motion } from 'framer-motion';

const PageBanner = ({ tag, title, highlight, subtitle }) => {
  return (
    <section className="page-banner">
      <div className="page-banner-shape" style={{ width: 380, height: 380, background: 'var(--violet)', top: -140, right: -100 }} />
      <div className="page-banner-shape" style={{ width: 260, height: 260, background: 'var(--gold)', bottom: -100, left: -80 }} />
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {tag && <span className="section-tag">{tag}</span>}
          <h1 className="section-title">
            {title} {highlight && <span className="accent-serif gradient-text">{highlight}</span>}
          </h1>
          {subtitle && <p className="section-subtitle" style={{ margin: '0 auto' }}>{subtitle}</p>}
        </motion.div>
      </div>
    </section>
  );
};

export default PageBanner;
