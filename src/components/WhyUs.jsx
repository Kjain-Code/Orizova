import React from 'react';
import { motion } from 'framer-motion';
import { FiZap, FiTarget, FiUsers, FiBarChart2, FiShield, FiClock } from 'react-icons/fi';
import './WhyUs.css';

const reasons = [
  { icon: FiZap, title: 'Fast Delivery', desc: 'We deliver projects on time without compromising quality.', backTitle: 'Quick Turnaround', backDesc: 'Agile workflows ensure rapid delivery without quality trade-offs.' },
  { icon: FiTarget, title: 'Result Focused', desc: 'Every strategy we build is designed to drive measurable outcomes.', backTitle: 'Measurable ROI', backDesc: 'Track every metric and optimize for maximum returns.' },
  { icon: FiUsers, title: 'Client-First Approach', desc: 'Your success is our success — we treat your business like our own.', backTitle: 'Your Partner', backDesc: 'More than a vendor — we become your growth partner.' },
  { icon: FiBarChart2, title: 'Data-Driven', desc: 'Every decision is backed by data, research, and market insights.', backTitle: 'Smart Decisions', backDesc: 'Analytics-powered strategies that remove guesswork.' },
  { icon: FiShield, title: 'Transparent Process', desc: 'No hidden costs. Clear communication at every stage.', backTitle: 'Full Visibility', backDesc: 'Real-time updates and complete project transparency.' },
  { icon: FiClock, title: '24/7 Support', desc: 'We are always available to support your business needs.', backTitle: 'Always Here', backDesc: 'Round-the-clock support whenever you need us.' },
];

const bounceIn = {
  hidden: { opacity: 0, y: 80, scale: 0.8, rotate: -5 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    rotate: 0,
    transition: {
      type: "spring",
      stiffness: 200,
      damping: 12,
      delay: i * 0.12,
    },
  }),
};

const WhyUs = () => {
  return (
    <section id="whyus" className="whyus-section">
      <div className="whyus-bg-orb whyus-orb-1" />
      <div className="whyus-bg-orb whyus-orb-2" />
      <div className="whyus-bg-orb whyus-orb-3" />

      <div className="container">
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <span className="section-tag">Why Choose Us</span>
          <h2 className="section-title">The <span>Orizova Advantage</span></h2>
          <p className="section-subtitle">
            We don't just deliver services — we deliver growth. Here's what makes us different.
          </p>
        </motion.div>

        <div className="whyus-grid">
          {reasons.map((reason, i) => (
            <motion.div
              key={i}
              className="whyus-flip-container"
              custom={i}
              variants={bounceIn}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
            >
              <div className="whyus-flip-inner">
                {/* FRONT */}
                <div className="whyus-flip-front">
                  <div className="whyus-icon-float">
                    <motion.div
                      className="whyus-icon"
                      animate={{ y: [0, -6, 0] }}
                      transition={{ duration: 2.5, repeat: Infinity, delay: i * 0.3, ease: "easeInOut" }}
                    >
                      <reason.icon size={26} />
                    </motion.div>
                    <div className="whyus-icon-ring" />
                  </div>

                  <h3>{reason.title}</h3>
                  <p>{reason.desc}</p>

                  <div className="whyus-card-glow" />

                  <div className="whyus-card-number">
                    {String(i + 1).padStart(2, '0')}
                  </div>
                </div>

                {/* BACK */}
                <div className="whyus-flip-back">
                  <div className="whyus-back-icon">
                    <reason.icon size={32} />
                  </div>
                  <h3>{reason.backTitle}</h3>
                  <p>{reason.backDesc}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyUs;
