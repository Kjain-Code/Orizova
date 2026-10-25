import React from 'react';
import { m } from 'framer-motion';
import { FiZap, FiTarget, FiUsers, FiBarChart2, FiShield, FiClock } from 'react-icons/fi';
import { SquiggleUnderline } from '../common/Doodles';
import './WhyUs.css';

const reasons = [
  { icon: FiZap, title: 'Fixed, Written Quotes', desc: 'Scope, timeline and price are agreed in writing before any work starts.', color: '#D97706' },
  { icon: FiTarget, title: 'Built to Be Measured', desc: 'Calls, WhatsApp clicks and form enquiries are tracked, so you can see what works.', color: '#4C0E82' },
  { icon: FiUsers, title: 'You Own Everything', desc: 'Domain, website, ad accounts, pages and data stay in your name — always.', color: '#8B5CF6' },
  { icon: FiBarChart2, title: 'SEO From Day One', desc: 'Every site ships with clean code, fast pages, schema and Search Console set up.', color: '#4C0E82' },
  { icon: FiShield, title: 'Honest Marketing', desc: 'No fake reviews, spam links or promises of guaranteed rankings.', color: '#C2650C' },
  { icon: FiClock, title: 'Responsive Support', desc: 'Reach us on WhatsApp, phone or email — and get clear answers, not runarounds.', color: '#8B5CF6' },
];

const WhyUs = () => {
  return (
    <section className="whyus-section">
      <div className="container">
        <m.div
          className="text-center"
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <span className="section-tag">Why Choose Us</span>
          <h2 className="section-title">
            The <span>Orizova Advantage<SquiggleUnderline className="title-squiggle" /></span>
          </h2>
          <p className="section-subtitle">
            Websites, SEO and ads under one roof — with clear quotes, honest reporting and quick replies.
          </p>
        </m.div>

        <div className="whyus-grid">
          {reasons.map((reason, i) => (
            <m.div
              key={i}
              className="whyus-card"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -6, boxShadow: '0 12px 40px rgba(76,14,130,0.15)' }}
            >
              <div className="whyus-icon" style={{ background: `linear-gradient(135deg, ${reason.color}, ${reason.color}CC)`, boxShadow: `0 10px 22px ${reason.color}40` }}>
                <reason.icon size={24} color="#fff" />
              </div>
              <h3>{reason.title}</h3>
              <p>{reason.desc}</p>
            </m.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyUs;
