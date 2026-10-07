import React from 'react';
import { Link } from 'react-router-dom';
import { FaWhatsapp } from 'react-icons/fa';
import { FiArrowRight, FiPhone } from 'react-icons/fi';
import CONTACT, { whatsappLink } from '../data/contact';
import './PageBanner.css';

/* Inner-page hero. Left: kinetic headline (each word slides up), subtitle and
   quick actions. Right: an animated "orbit" visual with floating chips.
   Pure CSS animations — the text is in the HTML from the first paint, so it
   stays fast for PageSpeed and fully readable for Google. */

const DEFAULT_CHIPS = ['Websites', 'SEO', 'Meta Ads', 'Google Ads', 'Reels'];

const Words = ({ text, offset = 0, className = '' }) =>
  String(text)
    .split(' ')
    .filter(Boolean)
    .map((w, i) => (
      <React.Fragment key={`${w}-${i}`}>
        {i > 0 && ' '}
        <span className="pb-word">
          <span className={`pb-word-inner ${className}`} style={{ animationDelay: `${(offset + i) * 0.06}s` }}>
            {w}
          </span>
        </span>
      </React.Fragment>
    ));

/** Split a heading into [main, highlighted tail] at the FIRST match of `re`,
 *  keeping everything after it (older code used String.split, which dropped
 *  any third part — e.g. "Local SEO Services — Rank on Google Maps in Delhi
 *  NCR" lost "in Delhi NCR" from the H1). */
export const splitHeading = (text, re) => {
  const str = String(text || '');
  const m = str.match(re);
  if (!m || m.index === 0) return [str, ''];
  return [str.slice(0, m.index).trim(), str.slice(m.index).trim()];
};

const PageBanner = ({ title, highlight, subtitle, chips = DEFAULT_CHIPS, actions = true, compact = false }) => {
  const titleWords = String(title || '').split(' ').filter(Boolean).length;
  // A leading/trailing em dash is kept as a plain-text separator so the H1
  // reads "Local SEO Services — Rank on Google Maps", not "...Services Rank...".
  const dashed = /^—/.test(String(highlight || '')) || /—\s*$/.test(String(title || ''));
  const cleanHighlight = highlight ? String(highlight).replace(/^—\s*/, '') : '';
  const cleanTitle = String(title || '').replace(/\s*—\s*$/, '');

  return (
    <section className={`pb ${compact ? 'pb--compact' : ''}`}>
      <div className="pb-grid-bg" aria-hidden="true" />
      <div className="pb-glow pb-glow--a" aria-hidden="true" />
      <div className="pb-glow pb-glow--b" aria-hidden="true" />

      <div className="container pb-inner">
        <div className="pb-copy">
          <h1 className="pb-title">
            <Words text={cleanTitle} />
            {cleanHighlight && (dashed ? '\u00A0— ' : ' ')}
            {cleanHighlight && (
              <span className="pb-highlight">
                <Words text={cleanHighlight} offset={titleWords} className="pb-grad" />
              </span>
            )}
          </h1>
          {subtitle && <p className="pb-sub">{subtitle}</p>}
          {actions && (
            <div className="pb-actions">
              <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="pb-btn pb-btn--primary">
                <FaWhatsapp aria-hidden="true" /> WhatsApp us
              </a>
              <a href={`tel:${CONTACT.phoneTel}`} className="pb-btn pb-btn--ghost">
                <FiPhone aria-hidden="true" /> {CONTACT.phoneDisplay}
              </a>
              <Link to="/contact" className="pb-link">
                Free consultation <FiArrowRight aria-hidden="true" />
              </Link>
            </div>
          )}
        </div>

        <div className="pb-visual" aria-hidden="true">
          <div className="pb-orbit pb-orbit--1" />
          <div className="pb-orbit pb-orbit--2" />
          <div className="pb-orbit pb-orbit--3" />
          <div className="pb-core">
            <span className="pb-core-ring" />
            <span className="pb-core-dot" />
          </div>
          {chips.slice(0, 5).map((c, i) => (
            <span key={c} className={`pb-chip pb-chip--${i + 1}`}>
              <span className="pb-chip-dot" />
              {c}
            </span>
          ))}
        </div>
      </div>
      <div className="pb-bottom-line" aria-hidden="true" />
    </section>
  );
};

export default PageBanner;
