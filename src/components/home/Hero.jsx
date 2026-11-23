import React from 'react';
import { Link } from 'react-router-dom';
import { FiArrowRight, FiArrowUpRight, FiPlay } from 'react-icons/fi';
import { FaWhatsapp } from 'react-icons/fa';
import './Hero.css';
import services from '../../data/services/services';
import { industriesIndex } from '../../data/site/siteIndex';
import { waLink } from '../../data/site/contact';
import projects from '../../data/work/projects';
import creativeWork from '../../data/work/creativeWork';

/* Home hero. Left: the brand promise (unchanged copy — it is the page's LCP
   and SEO heading). Right: real work instead of decoration — two live website
   screenshots in browser frames, one real reel, and a link to all our work.
   Only verifiable numbers anywhere. */

const stats = [
  { value: `${services.length}+`, label: 'Services under one roof' },
  { value: `${industriesIndex.length}+`, label: 'Industries we plan for' },
  { value: 'Free', label: 'First consultation' },
];

const bySlug = Object.fromEntries(projects.map((p) => [p.slug, p]));
const mainSite = bySlug['morphic-spaces'] || projects[0];
const backSite = bySlug['fps-subtitle'] || projects[1];
const reel = creativeWork.find((c) => c.category === 'AI Videos' && c.poster) || creativeWork[0];

const host = (p) => (p && p.link ? p.link.replace(/^https?:\/\//, '').replace(/\/$/, '') : `${p.slug}.in`);

const Browser = ({ project, className }) => (
  <Link to={`/portfolio/${project.slug}`} className={`hm-browser ${className}`} aria-label={`${project.title} — website case study`}>
    <span className="hm-browser-bar" aria-hidden="true">
      <i /><i /><i />
      <span>{host(project)}</span>
    </span>
    <img src={project.image} alt="" width="640" height="400" loading="eager" decoding="async" />
    <span className="hm-browser-tag">{project.title} <FiArrowUpRight aria-hidden="true" /></span>
  </Link>
);

const Hero = () => (
  <section className="hm-hero">
    <div className="container hm-inner">
      <div className="hm-copy">
        {/* No JS entrance animation on purpose: this block is the Largest
            Contentful Paint, so it must paint on the first frame. */}
        <h1 className="hm-kicker">Website Development &amp; Digital Marketing Agency in India</h1>

        <p className="hm-title">
          Websites, SEO, Ads &amp; Content —{' '}
          <span className="hm-title-soft">one team for</span>{' '}
          <em>more enquiries.</em>
        </p>

        <p className="hm-desc">
          Orizova Digital is a web development company and digital marketing agency based in Delhi NCR, working with businesses across India. We build fast, SEO-ready websites, get you ranking on Google, Maps and AI answers like ChatGPT, and run Google &amp; Meta Ads tracked to real calls and WhatsApp enquiries.
        </p>

        <div className="hm-actions">
          <Link to="/contact" className="hm-btn hm-btn--primary">
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
        {backSite && <Browser project={backSite} className="hm-browser--back" />}
        {mainSite && <Browser project={mainSite} className="hm-browser--main" />}

        {reel && (
          <Link to="/creative-work" className="hm-phone" aria-label={`Watch our reels and ad videos — ${reel.title}`}>
            <img src={reel.poster} alt="" width="180" height="320" loading="eager" decoding="async" />
            <span className="hm-phone-play" aria-hidden="true"><FiPlay /></span>
            <span className="hm-phone-tag">{reel.title}</span>
          </Link>
        )}

        <Link to="/portfolio" className="hm-result">
          <strong>{projects.length}</strong>
          <span>
            Live websites you can open
            <small>Plus {creativeWork.length} reels &amp; ad videos · see our work <FiArrowRight aria-hidden="true" /></small>
          </span>
        </Link>
      </div>
    </div>
  </section>
);

export default Hero;
