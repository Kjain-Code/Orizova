import React from 'react';
import { motion } from 'framer-motion';
import { FiLinkedin, FiInstagram, FiArrowUpRight } from 'react-icons/fi';
import founders from '../data/founders';
import './Founders.css';

const Founders = () => {
  return (
    <section className="founders-section">
      <div className="founders-bg-pattern" />
      
      {/* Planets */}
      <div className="founder-planet founder-planet-1">
        <div className="planet-ring" />
        <div className="planet-dot" />
        <div className="planet-dot" />
        <div className="planet-dot" />
      </div>
      <div className="founder-planet founder-planet-2">
        <div className="planet-ring" />
        <div className="planet-dot" />
        <div className="planet-dot" />
      </div>
      <div className="founder-planet founder-planet-3">
        <div className="planet-ring" />
      </div>

      <div className="container">
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <span className="section-tag">Leadership</span>
          <h2 className="section-title">Meet Our <span>Founders</span></h2>
          <p className="section-subtitle">
            The visionaries behind Orizova's mission to transform businesses through digital excellence.
          </p>
        </motion.div>

        <div className="founders-grid">
          {founders.map((founder, i) => (
            <motion.div
              key={founder.id}
              className={`founder-card founder-card-${i}`}
              initial={{ opacity: 0, x: i === 0 ? -100 : 100, rotate: i === 0 ? -5 : 5 }}
              whileInView={{ opacity: 1, x: 0, rotate: 0 }}
              transition={{
                type: "spring",
                stiffness: 200,
                damping: 18,
                delay: i * 0.3,
              }}
              viewport={{ once: true }}
            >
              <div className="founder-card-bg" />

              <div className="founder-image-wrap">
                {founder.photo ? (
                  <img src={founder.photo} alt={founder.name} className="founder-photo" />
                ) : (
                  <div className="founder-photo-placeholder">
                    <span>{founder.name.split(' ').pop().charAt(0)}</span>
                  </div>
                )}
                <div className="founder-image-ring" />
              </div>

              <div className="founder-content">
                <h3 className="founder-name">{founder.name}</h3>
                <span className="founder-role">{founder.role}</span>
                <p className="founder-desc">{founder.description}</p>
              </div>

              <div className="founder-footer">
                <div className="founder-socials">
                  <a href={founder.linkedin} target="_blank" rel="noopener noreferrer" className="founder-social-link">
                    <FiLinkedin size={16} />
                  </a>
                  <a href={founder.instagram} target="_blank" rel="noopener noreferrer" className="founder-social-link">
                    <FiInstagram size={16} />
                  </a>
                </div>
                <div className="founder-connect">
                  <span>Profile</span>
                  <FiArrowUpRight size={14} />
                </div>
              </div>

              <div className="founder-decor-1" />
              <div className="founder-decor-2" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Founders;
