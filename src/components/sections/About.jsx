import React from 'react';
import { m } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  FiArrowRight, FiCheck, FiMessageCircle, FiMonitor, FiSearch, FiTarget, FiPenTool,
  FiEye, FiFileText, FiKey, FiShield, FiBarChart2, FiTrendingUp,
} from 'react-icons/fi';
import './About.css';
import services from '../../data/services/services';
import { industriesIndex, industryGroups, citiesIndex } from '../../data/site/siteIndex';
import { groupMeta } from '../../data/site/industryIcons';
import { waLink } from '../../data/site/contact';
import ServiceIllustration from '../home/ServiceIllustrations';

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-60px' },
  transition: { duration: 0.5 },
};

/* ---------- Original illustration: one team, four disciplines ---------- */
const OneTeamIllustration = () => {
  const tiles = [
    { x: 40, y: 40, c: '#4C0E82', bg: '#F1E8FD', Icon: FiMonitor, label: 'Website' },
    { x: 330, y: 40, c: '#0D9488', bg: '#E2F7F4', Icon: FiSearch, label: 'SEO' },
    { x: 40, y: 290, c: '#EA580C', bg: '#FFEDE3', Icon: FiTarget, label: 'Ads' },
    { x: 330, y: 290, c: '#DB2777', bg: '#FDE7F1', Icon: FiPenTool, label: 'Content' },
  ];
  return (
    <div className="ab-art" aria-hidden="true">
      <svg className="ab-art-lines" viewBox="0 0 480 420">
        <circle cx="240" cy="210" r="170" fill="none" stroke="#E4D8F6" strokeWidth="2" strokeDasharray="6 8" />
        <circle cx="240" cy="210" r="110" fill="#F6F0FF" />
        {[[105, 105], [375, 105], [105, 335], [375, 335]].map(([x, y]) => (
          <line key={`${x}-${y}`} x1="240" y1="210" x2={x} y2={y} stroke="#CDBAF0" strokeWidth="2" strokeDasharray="4 6" />
        ))}
      </svg>
      <div className="ab-hub">
        <span className="ab-hub-mark">O</span>
        <strong>One team</strong>
        <small>planned together</small>
      </div>
      {tiles.map(({ x, y, c, bg, Icon, label }, i) => (
        <m.div
          key={label}
          className="ab-tile"
          style={{ left: `${(x / 480) * 100}%`, top: `${(y / 420) * 100}%`, '--c': c, '--bg': bg }}
          initial={{ opacity: 0, scale: 0.85 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.15 + i * 0.1, duration: 0.4 }}
        >
          <span className="ab-tile-icon"><Icon /></span>
          <span>{label}</span>
        </m.div>
      ))}
    </div>
  );
};

/* ---------- 1. Story split ---------- */
const points = [
  'Websites, SEO, ads and content from one team',
  'Fixed, written quotes before any work starts',
  'Calls, WhatsApp clicks and forms tracked',
  'Domain, site and ad accounts in your name',
];

export const AboutStory = () => (
  <section className="ab-story">
    <div className="container ab-split">
      <m.div className="ab-copy" {...fadeUp}>
        <span className="section-tag">Who We Are</span>
        <h2 className="section-title ab-left">
          Your Website, Marketing and Content — <span>Under One Roof</span>
        </h2>
        <p className="ab-lead">
          Orizova Digital is a web development and digital marketing agency based in Delhi NCR. We build websites
          and apps, and help businesses get found and chosen online through SEO, Google Ads, Meta Ads, social media and video.
        </p>
        <p className="ab-lead">
          Because one team plans all of it, your website, ads and content work towards the same goal — more
          genuine enquiries — instead of three vendors who never talk to each other.
        </p>
        <ul className="ab-checks">
          {points.map((p) => (
            <li key={p}><span className="ab-check"><FiCheck /></span>{p}</li>
          ))}
        </ul>
        <div className="ab-actions">
          <a
            href={waLink('Hi Orizova, I read about you on your website and would like to discuss my project.')}
            className="btn-primary" target="_blank" rel="noopener noreferrer"
          >
            <FiMessageCircle /> Talk to Us on WhatsApp
          </a>
          <Link to="/portfolio" className="ab-textlink">See our work <FiArrowRight /></Link>
        </div>
      </m.div>
      <m.div className="ab-split-art" {...fadeUp} transition={{ ...fadeUp.transition, delay: 0.1 }}>
        <OneTeamIllustration />
      </m.div>
    </div>
  </section>
);

/* ---------- 2. Values ---------- */
const values = [
  { Icon: FiEye, color: '#4C0E82', title: 'Plain language', desc: 'No jargon-filled reports. You always know what we are doing, why, and what it costs.' },
  { Icon: FiFileText, color: '#C2650C', title: 'Fixed, written quotes', desc: 'Scope and price are agreed in writing before work starts — no surprise bills.' },
  { Icon: FiKey, color: '#0D9488', title: 'You own everything', desc: 'Domains, websites, ad accounts, pages and data stay in your name, always.' },
  { Icon: FiShield, color: '#DB2777', title: 'Honest marketing', desc: 'No fake reviews, spam links or promises of guaranteed #1 rankings.' },
  { Icon: FiBarChart2, color: '#1D4ED8', title: 'Built to be measured', desc: 'Calls, WhatsApp clicks and forms are tracked, so results are visible.' },
  { Icon: FiTrendingUp, color: '#16A34A', title: 'Long-term thinking', desc: 'We build things that keep working, rather than chasing a quick spike.' },
];

export const AboutValues = () => (
  <section className="ab-values">
    <div className="container">
      <m.div className="text-center" {...fadeUp}>
        <span className="section-tag">What We Stand For</span>
        <h2 className="section-title">How We Treat <span>Every Client</span></h2>
        <p className="section-subtitle">Six promises that shape every project — big or small.</p>
      </m.div>
      <div className="ab-values-grid">
        {values.map(({ Icon, color, title, desc }, i) => (
          <m.div key={title} className="ab-value" style={{ '--c': color }} {...fadeUp} transition={{ ...fadeUp.transition, delay: i * 0.06 }}>
            <span className="ab-value-icon"><Icon /></span>
            <h3>{title}</h3>
            <p>{desc}</p>
          </m.div>
        ))}
      </div>
    </div>
  </section>
);

/* ---------- 3. What we do ---------- */
export const AboutServices = () => (
  <section className="ab-services">
    <div className="container">
      <m.div className="text-center" {...fadeUp}>
        <span className="section-tag">What We Do</span>
        <h2 className="section-title">Everything You Need to <span>Grow Online</span></h2>
        <p className="section-subtitle">Pick one service or let us plan the whole mix — every piece is built to bring enquiries.</p>
      </m.div>
      <div className="ab-svc-grid">
        {services.map((s, i) => (
          <m.div key={s.slug} {...fadeUp} transition={{ ...fadeUp.transition, delay: (i % 4) * 0.06 }}>
            <Link to={`/services/${s.slug}`} className="ab-svc">
              <span className="ab-svc-art"><ServiceIllustration slug={s.slug} /></span>
              <span className="ab-svc-body">
                <strong>{s.title}</strong>
                <span>{s.shortDesc}</span>
              </span>
              <FiArrowRight className="ab-svc-arrow" />
            </Link>
          </m.div>
        ))}
      </div>
    </div>
  </section>
);

/* ---------- 4. Who we work with ---------- */
const slugify = (t) => t.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');

export const AboutWho = () => (
  <section className="ab-who">
    <div className="container">
      <m.div className="text-center" {...fadeUp}>
        <span className="section-tag">Who We Work With</span>
        <h2 className="section-title">Local and Growing Businesses <span>Across India</span></h2>
        <p className="section-subtitle">
          We plan for {industriesIndex.length} industries — each with its own customers, rules and way of deciding.
        </p>
      </m.div>
      <div className="ab-who-grid">
        {industryGroups.map((g, i) => {
          const meta = groupMeta[g] || {};
          const Icon = meta.icon;
          const list = industriesIndex.filter((x) => x.group === g);
          return (
            <m.div key={g} {...fadeUp} transition={{ ...fadeUp.transition, delay: (i % 4) * 0.06 }}>
              <Link to={`/industries#${slugify(g)}`} className="ab-who-card" style={{ '--c': meta.color }}>
                <span className="ab-who-head">
                  {Icon && <span className="ab-who-icon"><Icon /></span>}
                  <strong>{g}</strong>
                </span>
                <span className="ab-who-list">{list.map((x) => x.name).join(' · ')}</span>
              </Link>
            </m.div>
          );
        })}
        <m.div {...fadeUp}>
          <Link to="/industries" className="ab-who-card ab-who-card--all">
            <strong>All {industriesIndex.length} industries</strong>
            <span>See how we plan for yours <FiArrowRight /></span>
          </Link>
        </m.div>
      </div>

      <m.div className="ab-cities" {...fadeUp}>
        <p className="ab-cities-title">Based in Delhi NCR · working with clients in</p>
        <div className="ab-cities-list">
          {citiesIndex.map((c) => (
            <Link key={c.slug} to={`/locations/${c.slug}`}>{c.city}</Link>
          ))}
          <Link to="/locations" className="ab-cities-more">and across India <FiArrowRight /></Link>
        </div>
      </m.div>
    </div>
  </section>
);

/* ---------- Default: kept for compatibility ---------- */
const About = () => <AboutStory />;
export default About;
