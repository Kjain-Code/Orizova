import React, { useEffect, useRef, useState } from 'react';
import { createPortal } from 'react-dom';
import { Link } from 'react-router-dom';
import { m } from 'framer-motion';
import { FiPlay, FiX, FiArrowRight, FiMessageCircle } from 'react-icons/fi';
import creativeWork from '../../data/work/creativeWork';
import { waLink } from '../../data/site/contact';
import { StarDoodle } from '../common/Doodles';
import './CreativeWorkSections.css';

/* /creative-work: a clean grid of vertical (9:16) video cards.
   - Filters come from the data, so a filter can never show an empty grid.
   - Hover (desktop) plays a muted preview; click/tap opens the video with sound.
   - Posters load first; video files only load on hover or when opened. */

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '0px 0px -8% 0px' },
  transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
};

const VideoCard = ({ item, index, onOpen }) => {
  const ref = useRef(null);
  const play = () => { const v = ref.current; if (v) { v.preload = 'auto'; v.play().catch(() => {}); } };
  const stop = () => { const v = ref.current; if (v) { v.pause(); v.currentTime = 0; } };

  return (
    <m.button
      type="button"
      className="cw-card"
      onClick={() => onOpen(item)}
      onMouseEnter={play}
      onMouseLeave={stop}
      onFocus={play}
      onBlur={stop}
      aria-label={`Play video: ${item.title} — ${item.client}`}
      {...fadeUp}
      transition={{ ...fadeUp.transition, delay: (index % 4) * 0.06 }}
    >
      <img className="cw-poster" src={item.poster} alt="" width="360" height="640" loading={index < 4 ? 'eager' : 'lazy'} decoding="async" />
      <video ref={ref} className="cw-preview" src={item.video} muted loop playsInline preload="none" aria-hidden="true" tabIndex={-1} />
      <span className="cw-badge">{item.category}</span>
      <span className="cw-play" aria-hidden="true"><FiPlay /></span>
      <span className="cw-caption">
        <strong>{item.title}</strong>
        <small>{item.client}</small>
      </span>
    </m.button>
  );
};

/** Full-screen player for one video (shared by the gallery and VideoGrid). */
const VideoModal = ({ open, onClose }) => {
  useEffect(() => {
    if (!open) return undefined;
    document.body.style.overflow = 'hidden';
    const onKey = (e) => { if (e.key === 'Escape') onClose(); };
    window.addEventListener('keydown', onKey);
    return () => { document.body.style.overflow = ''; window.removeEventListener('keydown', onKey); };
  }, [open, onClose]);
  if (!open) return null;
  return createPortal(
    <div className="cw-modal" role="dialog" aria-modal="true" aria-label={open.title} onClick={onClose}>
      <div className="cw-modal-inner" onClick={(e) => e.stopPropagation()}>
        <div className="cw-modal-head">
          <div>
            <span>{open.category}</span>
            <strong>{open.title}</strong>
          </div>
          <button type="button" className="cw-modal-close" onClick={onClose} aria-label="Close video">
            <FiX size={20} />
          </button>
        </div>
        <video key={open.id} src={open.video} poster={open.poster} controls autoPlay playsInline className="cw-modal-video" />
      </div>
    </div>,
    document.body,
  );
};

/** A small grid of video cards (used on service pages, e.g. AI video samples). */
export const VideoGrid = ({ items }) => {
  const [open, setOpen] = useState(null);
  const close = React.useCallback(() => setOpen(null), []);
  return (
    <>
      <div className="cw-grid cw-grid--compact">
        {items.map((item, i) => <VideoCard key={item.id} item={item} index={i} onOpen={setOpen} />)}
      </div>
      <VideoModal open={open} onClose={close} />
    </>
  );
};

const CreativeWorkSections = () => {
  const [active, setActive] = useState('All');
  const [open, setOpen] = useState(null);
  const close = React.useCallback(() => setOpen(null), []);

  if (creativeWork.length === 0) {
    return (
      <section className="creative-empty-section">
        <div className="container text-center">
          <StarDoodle className="creative-empty-star" />
          <h3>Videos coming soon</h3>
          <p>We&apos;re adding our reels, ad videos and typography work here shortly.</p>
        </div>
      </section>
    );
  }

  const cats = Array.from(new Set(creativeWork.map((v) => v.category)));
  const tabs = ['All', ...cats];
  const list = active === 'All' ? creativeWork : creativeWork.filter((v) => v.category === active);
  const countOf = (c) => (c === 'All' ? creativeWork.length : creativeWork.filter((v) => v.category === c).length);

  return (
    <section className="creative-work-section">
      <div className="container">
        <div className="text-center">
          <span className="section-tag">Our Video Work</span>
          <h2 className="section-title">Watch What <span>We&apos;ve Made</span></h2>
          <p className="section-subtitle">Hover to preview, tap to watch with sound. Every video was made for a real business and a real platform — edited from footage or produced with AI.</p>
        </div>

        <div className="creative-filters" role="tablist" aria-label="Filter videos">
          {tabs.map((cat) => (
            <button
              key={cat}
              type="button"
              role="tab"
              aria-selected={active === cat}
              className={`filter-btn ${active === cat ? 'active' : ''}`}
              onClick={() => setActive(cat)}
            >
              {cat} <span className="cw-count">{countOf(cat)}</span>
            </button>
          ))}
        </div>

        <div className="cw-grid">
          {list.map((item, i) => (
            <VideoCard key={item.id} item={item} index={i} onOpen={setOpen} />
          ))}
        </div>

        <m.div className="cw-next" {...fadeUp}>
          <div>
            <h2>Need Reels or Ad Videos for Your Brand?</h2>
            <p>Send us your raw phone footage — we edit it into scroll-stopping reels, ads and typography videos, with captions and formats for Instagram, YouTube and ads.</p>
          </div>
          <div className="cw-next-actions">
            <a
              href={waLink('Hi Orizova Digital, I saw your video work. I need reels / ad videos for my brand — can we discuss?')}
              className="btn-gold" target="_blank" rel="noopener noreferrer"
            >
              <FiMessageCircle aria-hidden="true" /> WhatsApp Us
            </a>
            <Link to="/services/video-editing" className="cw-next-link">Video editing service <FiArrowRight aria-hidden="true" /></Link>
          </div>
        </m.div>
      </div>

      <VideoModal open={open} onClose={close} />
    </section>
  );
};

export default CreativeWorkSections;
