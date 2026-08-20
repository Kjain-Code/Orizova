import React, { useEffect, useRef, useState } from 'react';
import { createPortal } from 'react-dom';
import { FiFilm, FiX, FiPlay } from 'react-icons/fi';
import './CreativeRingGallery.css';

const accentGradients = [
  'linear-gradient(160deg, #4C0E82, #8B5CF6)',
  'linear-gradient(160deg, #C2650C, #F5A623)',
  'linear-gradient(160deg, #FF6B4A, #C2650C)',
  'linear-gradient(160deg, #34095B, #4C0E82)',
  'linear-gradient(160deg, #8B5CF6, #FF6B4A)',
];

/**
 * Rotating "ring" gallery for Creative Work videos.
 * - The ring spins continuously, radius is computed in JS so cards never overlap.
 * - Hovering a card pauses the spin, zooms it toward the viewer (keeping its
 *   own angle, so it doesn't jump/run away) and plays it muted, in place.
 * - Clicking a card opens it full-size in a page-level popup (via a portal,
 *   so it's never trapped inside the ring) and plays it with sound.
 *   Cards with no local video file are shown but aren't clickable — nothing
 *   ever redirects to Instagram.
 */
const CreativeRingGallery = ({ items }) => {
  const ringRef = useRef(null);
  const videoRefs = useRef({});
  const [activeItem, setActiveItem] = useState(null);

  useEffect(() => {
    const updateRadius = () => {
      const ring = ringRef.current;
      if (!ring) return;
      const cardWidth = ring.offsetWidth;
      const n = Math.max(items.length, 1);
      const angle = (2 * Math.PI) / n;
      const raw = (cardWidth / 2) / Math.sin(angle / 2) * 1.15;
      const radius = Math.min(Math.max(Math.round(raw), cardWidth), 420);
      ring.style.setProperty('--ring-radius', `${radius}px`);
    };
    updateRadius();
    window.addEventListener('resize', updateRadius);
    return () => window.removeEventListener('resize', updateRadius);
  }, [items.length]);

  useEffect(() => {
    if (!activeItem) return undefined;
    document.body.style.overflow = 'hidden';
    const onKey = (e) => {
      if (e.key === 'Escape') setActiveItem(null);
    };
    window.addEventListener('keydown', onKey);
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', onKey);
    };
  }, [activeItem]);

  const handleEnter = (id) => {
    const vid = videoRefs.current[id];
    if (vid) vid.play().catch(() => {});
  };

  const handleLeave = (id) => {
    const vid = videoRefs.current[id];
    if (vid) vid.pause();
  };

  const count = Math.max(items.length, 1);
  const step = 360 / count;

  return (
    <div className="ring-stage">
      <div ref={ringRef} className="ring" style={{ animationDuration: `${count * 4.5}s` }}>
        {items.map((item, i) => {
          const angle = step * i;
          const gradient = accentGradients[i % accentGradients.length];
          return (
            <div
              key={item.id}
              className={`ring-card ${item.video ? 'is-clickable' : ''}`}
              style={{ '--card-angle': `${angle}deg` }}
              onMouseEnter={() => handleEnter(item.id)}
              onMouseLeave={() => handleLeave(item.id)}
              onClick={() => item.video && setActiveItem(item)}
            >
              <div className="ring-card-inner" style={{ background: gradient }}>
                {item.video && (
                  <video
                    ref={(el) => (videoRefs.current[item.id] = el)}
                    src={item.video}
                    muted
                    loop
                    playsInline
                    preload="metadata"
                  />
                )}
                <span className="ring-badge">
                  <FiFilm size={11} /> {item.category}
                </span>
                {item.video && (
                  <span className="ring-play-dot">
                    <FiPlay size={16} />
                  </span>
                )}
                <div className="ring-card-caption">
                  <h4>{item.title}</h4>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {activeItem &&
        createPortal(
          <div className="ring-modal" onClick={() => setActiveItem(null)}>
            <div className="ring-modal-inner" onClick={(e) => e.stopPropagation()}>
              <button
                type="button"
                className="ring-modal-close"
                onClick={() => setActiveItem(null)}
                aria-label="Close"
              >
                <FiX size={22} />
              </button>
              <video
                key={activeItem.id}
                src={activeItem.video}
                controls
                autoPlay
                playsInline
                className="ring-modal-video"
              />
              <div className="ring-modal-caption">
                <span className="ring-modal-category">{activeItem.category}</span>
                <h4>{activeItem.title}</h4>
              </div>
            </div>
          </div>,
          document.body
        )}
    </div>
  );
};

export default CreativeRingGallery;