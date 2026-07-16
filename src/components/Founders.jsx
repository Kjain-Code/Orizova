import React from 'react';
import { motion } from 'framer-motion';
import { FiLinkedin, FiInstagram, FiArrowUpRight, FiStar } from 'react-icons/fi';
import founders from '../data/founders';
import './Founders.css';

const Founders = () => {
  return (
    <section className="fc-section" id="founders">
      {/* Background */}
      <div className="fc-bg">
        <div className="fc-bg-orb fc-bg-orb-1" />
        <div className="fc-bg-orb fc-bg-orb-2" />
        <div className="fc-bg-grid" />
      </div>

      <div className="container">
        {/* Header */}
        <motion.div
          className="fc-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <div className="fc-badge">
            <FiStar size={12} />
            <span>Leadership</span>
          </div>
          <h2 className="fc-title">
            Meet Our <span className="fc-title-accent">Founders</span>
          </h2>
          <p className="fc-subtitle">
            The visionaries driving Orizova's mission to transform businesses through digital excellence.
          </p>
        </motion.div>

        {/* Cards Grid */}
        <div className="fc-grid">
          {founders.map((founder, i) => (
            <motion.div
              key={founder.id}
              className="fc-card"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.6,
                delay: i * 0.2,
                ease: [0.22, 1, 0.36, 1],
              }}
              viewport={{ once: true }}
            >
              {/* Top gradient strip */}
              <div className="fc-card-top" />

              <div className="fc-card-body">
                {/* Avatar */}
                <div className="fc-avatar-wrap">
                  <div className="fc-avatar-glow" />
                  <div className="fc-avatar">
                    {founder.photo ? (
                      <img src={founder.photo} alt={founder.name} />
                    ) : (
                      <span className="fc-initials">{founder.initials}</span>
                    )}
                  </div>
                  <div className="fc-avatar-ring" />
                </div>

                {/* Name + Role */}
                <h3 className="fc-name">{founder.name}</h3>
                <span className="fc-role">{founder.role}</span>

                {/* Quote */}
                <p className="fc-quote">"{founder.quote}"</p>

                {/* Bio */}
                <p className="fc-bio">{founder.bio}</p>

                {/* Skills */}
                <div className="fc-skills">
                  {founder.skills.map((skill, j) => (
                    <span key={j} className="fc-skill">{skill}</span>
                  ))}
                </div>

                {/* Stats */}
                <div className="fc-stats">
                  {founder.stats.map((stat, j) => (
                    <div key={j} className="fc-stat">
                      <span className="fc-stat-val">{stat.value}</span>
                      <span className="fc-stat-lbl">{stat.label}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Footer */}
              <div className="fc-card-footer">
                <div className="fc-socials">
                  <a href={founder.linkedin} target="_blank" rel="noopener noreferrer" className="fc-social" aria-label="LinkedIn">
                    <FiLinkedin size={15} />
                  </a>
                  <a href={founder.instagram} target="_blank" rel="noopener noreferrer" className="fc-social" aria-label="Instagram">
                    <FiInstagram size={15} />
                  </a>
                </div>
                <a href={founder.linkedin} target="_blank" rel="noopener noreferrer" className="fc-connect">
                  <span>Connect</span>
                  <FiArrowUpRight size={13} />
                </a>
              </div>

              {/* Corner decoration */}
              <div className="fc-corner fc-corner-tl" />
              <div className="fc-corner fc-corner-br" />
            </motion.div>
          ))}
        </div>

        {/* Bottom line */}
        <motion.div
          className="fc-bottom"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <div className="fc-bottom-line" />
          <p className="fc-bottom-text">Two founders. One vision. Unlimited possibilities.</p>
          <div className="fc-bottom-line" />
        </motion.div>
      </div>
    </section>
  );
};

export default Founders;
