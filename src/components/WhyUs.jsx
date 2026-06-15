import React from 'react';
import { motion } from 'framer-motion';
import { FiZap, FiTarget, FiUsers, FiBarChart2, FiShield, FiClock } from 'react-icons/fi';
import './WhyUs.css';

const reasons = [
  { icon: FiZap, title: 'Fast Delivery', desc: 'We deliver projects on time without compromising quality.', color: '#D97706' },
  { icon: FiTarget, title: 'Result Focused', desc: 'Every strategy we build is designed to drive measurable outcomes.', color: '#480b79' },
  { icon: FiUsers, title: 'Client-First Approach', desc: 'Your success is our success — we treat your business like our own.', color: '#7C3AED' },
  { icon: FiBarChart2, title: 'Data-Driven', desc: 'Every decision is backed by data, research, and market insights.', color: '#0EA5E9' },
  { icon: FiShield, title: 'Transparent Process', desc: 'No hidden costs. Clear communication at every stage.', color: '#480b79' },
  { icon: FiClock, title: '24/7 Support', desc: 'We are always available to support your business needs.', color: '#D97706' },
];

const WhyUs = () => {
  return (
    <section id="whyus" className="whyus-section">
      <div className="container">
        <div className="text-center" data-aos="fade-up">
          <span className="section-tag">Why Choose Us</span>
          <h2 className="section-title">The <span>Orizova Advantage</span></h2>
          <p className="section-subtitle">
            We don't just deliver services — we deliver growth. Here's what makes us different.
          </p>
        </div>

        <div className="whyus-grid">
          {reasons.map((reason, i) => (
            <motion.div
              key={i}
              className="whyus-card"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -6, boxShadow: '0 12px 40px rgba(72,11,121,0.15)' }}
            >
              <div className="whyus-icon" style={{ background: reason.color + '18' }}>
                <reason.icon size={26} color={reason.color} />
              </div>
              <h3>{reason.title}</h3>
              <p>{reason.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyUs;