import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { FiArrowRight, FiPlay } from 'react-icons/fi';
import { FaWhatsapp } from 'react-icons/fa';
import './Hero.css';
import services from '../../data/services/services';
import { industriesIndex } from '../../data/site/siteIndex';
import { waLink } from '../../data/site/contact';
import projects from '../../data/work/projects';
import creativeWork from '../../data/work/creativeWork';

/* Home hero. Left: the brand promise (unchanged copy — it is the page's LCP
   and SEO heading). Right: a "showreel" — one large browser that cycles
   through real client websites (tabs with a progress bar, click to switch,
   pauses on hover), a phone playing a real reel, and the site's real Google
   PageSpeed scores when a tested site is on screen. No counters. */

const stats = [
  { value: `${services.length}+`, label: 'Services under one roof' },
  { value: `${industriesIndex.length}+`, label: 'Industries we plan for' },
  { value: 'Free', label: 'First consultation' },
];

const bySlug = Object.fromEntries(projects.map((p) => [p.slug, p]));
// Showreel slides: real client websites. `focus` = which part of the
// screenshot stays in view when the frame crops it.
const SHOWREEL = [
  { slug: 'morphic-spaces', focus: '12% center' },
  { slug: 'fps-subtitle', focus: 'center 30%' },
  { slug: 'ganesh-creation', focus: 'center 40%' },
].map((s) => ({ ...s, project: bySlug[s.slug] })).filter((s) => s.project);
const SLIDE_MS = 5000;
// Lightest real reel (≈2.5 MB) plays inside the phone on desktop only.
const reel = creativeWork.find((c) => c.id === 13) || creativeWork.find((c) => c.category === 'AI Videos' && c.poster) || creativeWork[0];

const host = (p) => (p && p.link ? p.link.replace(/^https?:\/\//, '').replace(/\/$/, '') : `${p.slug}.in`);

/* Premium-but-light motion (desktop with a mouse only; off for reduced motion):
   - the stage tilts in 3D and its layers drift at different depths with the
     pointer (CSS variables --mx / --my, one rAF per frame),
   - a soft spotlight follows the pointer across the hero (--px / --py),
   - the phone plays the real reel, loaded only after the page has finished
     loading and never on save-data / small screens. */
const useHeroMotion = () => {
  const heroRef = useRef(null);
  const [playReel, setPlayReel] = useState(false);

  useEffect(() => {
    const hero = heroRef.current;
    if (!hero || typeof window === 'undefined' || !window.matchMedia) return undefined;
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const finePointer = window.matchMedia('(hover: hover) and (pointer: fine)').matches;
    const wide = window.matchMedia('(min-width: 1100px)').matches;
    const saveData = !!(navigator.connection && navigator.connection.saveData);

    // Reel: start after load + idle, desktop only.
    let idleId; let loadHandler;
    if (!reduce && wide && !saveData) {
      const start = () => {
        const ric = window.requestIdleCallback || ((cb) => setTimeout(cb, 1200));
        idleId = ric(() => setPlayReel(true));
      };
      if (document.readyState === 'complete') start();
      else { loadHandler = start; window.addEventListener('load', loadHandler, { once: true }); }
    }

    if (reduce || !finePointer) return () => { if (loadHandler) window.removeEventListener('load', loadHandler); };

    let raf = 0; let tx = 0; let ty = 0; let px = 50; let py = 30;
    const apply = () => {
      raf = 0;
      hero.style.setProperty('--mx', tx.toFixed(3));
      hero.style.setProperty('--my', ty.toFixed(3));
      hero.style.setProperty('--px', `${px.toFixed(1)}%`);
      hero.style.setProperty('--py', `${py.toFixed(1)}%`);
    };
    const onMove = (e) => {
      const r = hero.getBoundingClientRect();
      const x = (e.clientX - r.left) / r.width;
      const y = (e.clientY - r.top) / r.height;
      tx = (x - 0.5) * 2; ty = (y - 0.5) * 2; px = x * 100; py = y * 100;
      if (!raf) raf = requestAnimationFrame(apply);
    };
    const onLeave = () => { tx = 0; ty = 0; if (!raf) raf = requestAnimationFrame(apply); };
    hero.classList.add('hm-hero--live');
    hero.addEventListener('pointermove', onMove, { passive: true });
    hero.addEventListener('pointerleave', onLeave);
    return () => {
      hero.removeEventListener('pointermove', onMove);
      hero.removeEventListener('pointerleave', onLeave);
      if (raf) cancelAnimationFrame(raf);
      if (loadHandler) window.removeEventListener('load', loadHandler);
      if (idleId && window.cancelIdleCallback) window.cancelIdleCallback(idleId);
    };
  }, []);

  return { heroRef, playReel };
};

const SCORE_LABELS = [['performance', 'Performance'], ['accessibility', 'Accessibility'], ['bestPractices', 'Best practices'], ['seo', 'SEO']];

const Showreel = () => {
  const [i, setI] = useState(0);
  const [paused, setPaused] = useState(false);
  const [auto, setAuto] = useState(false);

  // Auto-advance only in the browser, never for reduced-motion users.
  useEffect(() => {
    const reduce = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (!reduce && SHOWREEL.length > 1) setAuto(true);
  }, []);
  useEffect(() => {
    if (!auto || paused) return undefined;
    const t = setTimeout(() => setI((n) => (n + 1) % SHOWREEL.length), SLIDE_MS);
    return () => clearTimeout(t);
  }, [auto, paused, i]);

  if (!SHOWREEL.length) return null;
  const cur = SHOWREEL[i].project;
  const sc = cur.scores && cur.scores.mobile;

  return (
    <div
      className={`hm-reel${auto && !paused ? ' is-playing' : ''}`}
      onMouseEnter={() => setPaused(true)} onMouseLeave={() => setPaused(false)}
      onFocus={() => setPaused(true)} onBlur={() => setPaused(false)}
    >
      <div className="hm-screen">
        <span className="hm-screen-bar" aria-hidden="true">
          <i /><i /><i />
          <span key={cur.slug}>{host(cur)}</span>
        </span>
        <div className="hm-screen-view">
          {SHOWREEL.map((s, k) => (
            <Link
              key={s.slug} to={`/portfolio/${s.slug}`}
              className={`hm-slide${k === i ? ' is-on' : ''}`}
              aria-hidden={k !== i} tabIndex={k === i ? 0 : -1}
              aria-label={`${s.project.title} — website case study`}
            >
              <img src={s.project.image} alt="" width="1000" height="423" loading={k === 0 ? 'eager' : 'lazy'} decoding="async" style={{ objectPosition: s.focus }} />
            </Link>
          ))}
        </div>
      </div>

      {sc && (
        <div className="hm-speed" key={`sp-${cur.slug}`} aria-label={`Google PageSpeed scores for ${host(cur)} on mobile`}>
          <strong>Google PageSpeed <small>· mobile</small></strong>
          <span className="hm-speed-rings">
            {SCORE_LABELS.map(([k, label], n) => (
              <span key={k} className="hm-ring" style={{ '--v': sc[k], '--i': n }}>
                <svg viewBox="0 0 40 40" aria-hidden="true" focusable="false">
                  <circle cx="20" cy="20" r="16" className="hm-ring-bg" />
                  <circle cx="20" cy="20" r="16" className="hm-ring-fg" pathLength="100" />
                </svg>
                <b>{sc[k]}</b>
                <small>{label}</small>
              </span>
            ))}
          </span>
        </div>
      )}

      <div className="hm-tabs" role="tablist" aria-label="Websites we built">
        {SHOWREEL.map((s, k) => (
          <button
            key={s.slug} type="button" role="tab" aria-selected={k === i}
            className={`hm-tab${k === i ? ' is-on' : ''}`} onClick={() => setI(k)}
          >
            <span className="hm-tab-name">{s.project.title}</span>
            <span className="hm-tab-bar" aria-hidden="true"><i key={`${s.slug}-${i}`} /></span>
          </button>
        ))}
        <Link to="/portfolio" className="hm-tab-all">All work <FiArrowRight aria-hidden="true" /></Link>
      </div>
    </div>
  );
};

const Hero = () => {
  const { heroRef, playReel } = useHeroMotion();
  return (
  <section className="hm-hero" ref={heroRef}>
    <span className="hm-spot" aria-hidden="true" />
    <div className="container hm-inner">
      <div className="hm-copy">
        {/* No JS entrance animation on purpose: this block is the Largest
            Contentful Paint, so it must paint on the first frame. */}
        <h1 className="hm-kicker">Website Development &amp; Digital Marketing Agency in India</h1>

        <p className="hm-title">
          Websites, SEO, Ads &amp; Content —{' '}
          <span className="hm-title-soft">one team for</span>{' '}
          <em className="hm-em">more enquiries.</em>
        </p>

        <p className="hm-desc">
          Orizova Digital is a web development company and digital marketing agency based in Delhi NCR, working with businesses across India. We build fast, SEO-ready websites, get you ranking on Google, Maps and AI answers like ChatGPT, and run Google &amp; Meta Ads tracked to real calls and WhatsApp enquiries.
        </p>

        <div className="hm-actions">
          <Link to="/contact" className="hm-btn hm-btn--primary">
            <span className="hm-btn-shine" aria-hidden="true" />
            Get Free Consultation <FiArrowRight aria-hidden="true" />
          </Link>
          <a
            href={waLink('Hi Orizova Digital, I saw your website. I want more enquiries for my business — can we talk?')}
            className="hm-btn hm-btn--ghost" target="_blank" rel="noopener noreferrer"
          >
            <FaWhatsapp aria-hidden="true" /> WhatsApp Us
          </a>
        </div>

        <dl className="hm-stats">
          {stats.map((s) => (
            <div key={s.label}><dt>{s.label}</dt><dd>{s.value}</dd></div>
          ))}
        </dl>
      </div>

      <div className="hm-stage">
        <Showreel />

        {reel && (
          <Link to="/creative-work" className="hm-phone" aria-label={`Watch our reels and ad videos — ${reel.title}`}>
            <img src={reel.poster} alt="" width="180" height="320" loading="eager" decoding="async" />
            {playReel && reel.video && (
              <video className="hm-phone-video" src={reel.video} poster={reel.poster} muted loop autoPlay playsInline preload="auto" aria-hidden="true" tabIndex={-1} />
            )}
            {!playReel && <span className="hm-phone-play" aria-hidden="true"><FiPlay /></span>}
            <span className="hm-phone-tag">{reel.title}</span>
          </Link>
        )}
      </div>
    </div>
  </section>
  );
};

export default Hero;
