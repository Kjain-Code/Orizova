import React from 'react';
import { Link } from 'react-router-dom';
import { FaWhatsapp } from 'react-icons/fa';
import { FiArrowRight, FiPhone, FiCheckCircle, FiCheck } from 'react-icons/fi';
import CONTACT, { whatsappLink } from '../../data/site/contact';
import facts from '../../data/site/facts';
import './PageBanner.css';

/* Inner-page hero. Left: section label, headline (each word slides up once),
   subtitle and quick actions. Right: a small "How we work" card with a link
   to the real results (no decorative graphics). `chips` is still accepted but unused.
   Pure CSS animations — the text is in the HTML from the first paint, so it
   stays fast for PageSpeed and fully readable for Google. */

const Words = ({ text, offset = 0, className = '' }) =>
  String(text)
    .split(' ')
    .filter(Boolean)
    .map((w, i) => (
      <React.Fragment key={`${w}-${i}`}>
        {i > 0 && ' '}
        <span className="pb-word">
          <span
            className={`pb-word-inner ${className}${offset + i < 40 ? ` pb-d${offset + i}` : ''}`}
            style={offset + i < 40 ? undefined : { animationDelay: `${(offset + i) * 0.06}s` }}
          >
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

/* No visible breadcrumb trail on the pages (removed on purpose, 4 Nov 2026).
   Pages still pass `crumbs`; it is ignored here. The BreadcrumbList schema
   in <Seo> stays, so Google can still show the page path in search results. */
/* Card on the right: how we work (from data/site/facts.js) + a link to the
   real results. No numbers here, so the same figures are not repeated on
   every page — they live on /case-studies. */
const ProofCard = () => (
  <aside className="pb-proof" aria-label="How we work">
    <p className="pb-proof-tag"><FiCheckCircle aria-hidden="true" /> How we work</p>
    <ul className="pb-proof-list">
      {facts.workingPrinciples.slice(0, 3).map((p) => (
        <li key={p}><FiCheck aria-hidden="true" /> {p}</li>
      ))}
    </ul>
    <Link to="/case-studies" className="pb-proof-link">See real results with screenshots <FiArrowRight aria-hidden="true" /></Link>
  </aside>
);

const PageBanner = ({ title, highlight, subtitle, crumbs = [], actions = true, compact = false, proof = true }) => {
  const titleWords = String(title || '').split(' ').filter(Boolean).length;
  // A leading/trailing em dash is kept as a plain-text separator so the H1
  // reads "Local SEO Services — Rank on Google Maps", not "...Services Rank...".
  const dashed = /^—/.test(String(highlight || '')) || /—\s*$/.test(String(title || ''));
  const cleanHighlight = highlight ? String(highlight).replace(/^—\s*/, '') : '';
  const cleanTitle = String(title || '').replace(/\s*—\s*$/, '');
  // Small label above the H1: the section this page belongs to (e.g. "Services").
  const section = crumbs.length ? crumbs[0].name : '';
  const eyebrow = section && !cleanTitle.toLowerCase().startsWith(section.toLowerCase()) ? section : '';
  const showProof = proof;

  return (
    <section className={`pb ${compact ? 'pb--compact' : ''}`}>
      <div className={`container pb-inner${showProof ? '' : ' pb-inner--solo'}`}>
        <div className="pb-copy">
          {eyebrow && <p className="pb-eyebrow">{eyebrow}</p>}
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

        {showProof && <ProofCard />}
      </div>
    </section>
  );
};

export default PageBanner;
