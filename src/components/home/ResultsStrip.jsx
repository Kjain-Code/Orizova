import React from 'react';
import { Link } from 'react-router-dom';
import { m } from 'framer-motion';
import { FiArrowRight } from 'react-icons/fi';
import { caseStudiesWithStats as studies, formatRupees } from '../../data/work/caseStudies';
import './ResultsStrip.css';

/* Home page "Results" strip. Numbers come ONLY from data/work/caseStudies.js:
   - fewer than 3 ad campaigns → the first case study's real numbers.
   - 3+ ad campaigns           → totals across them.
   - none             → the section is hidden. */

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '0px 0px -8% 0px' },
  transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
};

const buildItems = () => {
  const ads = studies.filter((s) => s.kind !== 'seo');
  if (ads.length >= 3) {
    const enquiries = ads.reduce((t, s) => t + s.enquiries, 0);
    const spend = ads.reduce((t, s) => t + s.adSpend, 0);
    const approx = ads.some((s) => s.approx) ? '~' : '';
    return {
      note: `Totals from ${ads.length} ad campaigns on our case studies page`,
      items: [
        { value: enquiries, label: 'Enquiries generated for clients' },
        { value: ads.length, label: 'Campaigns with published results' },
        { value: `${approx}₹${Math.round(spend / enquiries)}`, label: 'Average cost per enquiry' },
        { value: `${approx}${formatRupees(spend)}`, label: 'Total ad spend behind them' },
      ],
    };
  }
  const s = studies[0];
  return {
    note: `${s.industry} · ${s.type} · ${s.city} · ${s.period}`,
    items: [s.big, ...s.stats],
  };
};

const ResultsStrip = () => {
  if (!studies.length) return null;
  const { note, items } = buildItems();
  return (
    <section className="rs-results" aria-labelledby="rs-results-title">
      <div className="container">
        <m.div className="text-center" {...fadeUp}>
          <span className="section-tag">Results</span>
          <h2 className="section-title" id="rs-results-title">Real Campaigns, <span>Real Numbers</span></h2>
          <p className="rs-note">{note}</p>
        </m.div>
        <div className="rs-grid">
          {items.map((it, i) => (
            <m.div key={it.label} className={`rs-item${i === 0 ? ' rs-item--main' : ''}`} {...fadeUp} transition={{ ...fadeUp.transition, delay: i * 0.07 }}>
              <strong>{it.value}</strong>
              <span>{it.label}</span>
            </m.div>
          ))}
        </div>
        <m.div className="rs-cta" {...fadeUp}>
          <Link to="/case-studies" className="btn-primary">View Case Studies <FiArrowRight aria-hidden="true" /></Link>
        </m.div>
      </div>
    </section>
  );
};

export default ResultsStrip;
