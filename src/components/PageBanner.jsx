import React from 'react';

// Static (no JS entrance animation) so the page heading paints immediately —
// this is the LCP element on inner pages and matters for PageSpeed.
const PageBanner = ({ tag, title, highlight, subtitle }) => {
  return (
    <section className="page-banner">
      <div className="page-banner-shape" style={{ width: 380, height: 380, '--blob': 'var(--violet)', top: -140, right: -100 }} />
      <div className="page-banner-shape" style={{ width: 260, height: 260, '--blob': 'var(--gold)', bottom: -100, left: -80 }} />
      <div className="container page-banner-inner">
        {tag && <span className="section-tag">{tag}</span>}
        <h1 className="section-title">
          {title} {highlight && <span className="accent-serif gradient-text">{highlight}</span>}
        </h1>
        {subtitle && <p className="section-subtitle" style={{ margin: '0 auto' }}>{subtitle}</p>}
      </div>
    </section>
  );
};

export default PageBanner;
