import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiExternalLink, FiFilm } from 'react-icons/fi';
import creativeWork from '../data/creativeWork';
import { StarDoodle } from './Doodles';
import './CreativeWorkSections.css';

const categories = [
  'All',
  'Kinetic & Animated Typography',
  'Brand Films & Ads',
  'Reels & Social Content',
  'Showreel — Best Work',
];

const accentColors = ['#4C0E82', '#8B5CF6', '#C2650C', '#FF6B4A'];

const CreativeWorkSections = () => {
  const [active, setActive] = useState('All');

  if (creativeWork.length === 0) {
    return (
      <section className="creative-empty-section">
        <div className="container text-center">
          <StarDoodle className="creative-empty-star" />
          <h3>Videos coming soon</h3>
          <p>We're adding our animated typography, brand reels, and showreel work here shortly.</p>
        </div>
      </section>
    );
  }

  const filtered = active === 'All' ? creativeWork : creativeWork.filter((v) => v.category === active);

  return (
    <section className="creative-work-section">
      <div className="container">
        <div className="creative-filters">
          {categories.map((cat) => (
            <button
              key={cat}
              className={`filter-btn ${active === cat ? 'active' : ''}`}
              onClick={() => setActive(cat)}
            >
              {cat}
            </button>
          ))}
        </div>

        <motion.div layout className="creative-grid">
          <AnimatePresence>
            {filtered.map((item, i) => {
              const color = accentColors[i % accentColors.length];
              return (
                <motion.div
                  key={item.id}
                  layout
                  initial={{ opacity: 0, y: 40 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.85 }}
                  transition={{ duration: 0.4 }}
                  whileHover={{ y: -8 }}
                  className="creative-card"
                >
                  <div className="creative-card-media">
                    {item.thumbnail ? (
                      <img src={item.thumbnail} alt={item.title} />
                    ) : (
                      <div className="creative-card-fallback" style={{ background: `${color}18` }}>
                        <span>🎬</span>
                      </div>
                    )}
                    <span className="creative-play-badge"><FiFilm size={13} /> Video</span>
                  </div>
                  <div className="creative-card-body">
                    <span className="creative-card-category" style={{ color }}>{item.category}</span>
                    <h3>{item.title}</h3>
                    <a href={item.link} target="_blank" rel="noopener noreferrer" className="creative-card-link">
                      {item.linkLabel || 'Watch Video'} <FiExternalLink size={14} />
                    </a>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};

export default CreativeWorkSections;
