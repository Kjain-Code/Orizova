import React, { useState } from 'react';
import creativeWork from '../data/creativeWork';
import { StarDoodle } from './Doodles';
import CreativeRingGallery from './CreativeRingGallery';
import './CreativeWorkSections.css';

const categories = [
  'All',
  'Kinetic & Animated Typography',
  'Brand Films & Ads',
  'Reels & Social Content',
  'Showreel — Best Work',
];

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

        <CreativeRingGallery items={filtered} />
        <p className="ring-hint">Click any card to play the video</p>
      </div>
    </section>
  );
};

export default CreativeWorkSections;