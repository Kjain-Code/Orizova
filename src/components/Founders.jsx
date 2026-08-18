import React from 'react';
import { motion } from 'framer-motion';
import founders from '../data/founders';
import { StarDoodle, SparkleDoodle } from './Doodles';
import './Founders.css';

const Founders = () => {
  return (
    <section className="founders-section">
      <div className="container">
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <span className="section-tag">Meet The Team</span>
          <h2 className="section-title">
            The People Behind <span className="accent-serif">Orizova</span>
          </h2>
          <p className="section-subtitle">
            Two founders, one mission — helping brands grow with clarity, creativity, and consistency.
          </p>
        </motion.div>

        <div className="founders-grid">
          {founders.map((founder, i) => (
            <motion.div
              key={founder.name}
              className="founder-card"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              viewport={{ once: true }}
            >
              {i === 0 ? (
                <StarDoodle className="founder-doodle" />
              ) : (
                <SparkleDoodle className="founder-doodle" />
              )}
              <div className="founder-avatar" style={{ background: founder.color }}>
                {founder.initials}
              </div>
              <h3>{founder.name}</h3>
              <span className="founder-role">{founder.role}</span>
              <p>{founder.bio}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Founders;
