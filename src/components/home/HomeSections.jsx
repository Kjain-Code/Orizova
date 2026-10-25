import React from 'react';
import { Link } from 'react-router-dom';
import { m } from 'framer-motion';
import { FiArrowRight, FiCheck } from 'react-icons/fi';
import services from '../../data/services/services';
import { industriesIndex, citiesIndex } from '../../data/site/siteIndex';
import './HomeSections.css';

/* Extra home-page sections: intro with illustration, how-we-work steps,
   honest "at a glance" numbers (all computed from site data — no invented
   client counts) and a sample tracking report. All visuals are original
   inline SVG: fast, sharp and free of third-party logos. */

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '0px 0px -10% 0px' },
  transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
};

/* ---------- Intro illustration: laptop + growth elements ---------- */
const GrowthIllustration = () => (
  <svg viewBox="0 0 520 420" className="hs-illus" aria-hidden="true" focusable="false">
    <defs>
      <linearGradient id="hsScreen" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0" stopColor="#8B5CF6" /><stop offset="1" stopColor="#4C0E82" />
      </linearGradient>
      <linearGradient id="hsWarm" x1="0" y1="1" x2="1" y2="0">
        <stop offset="0" stopColor="#FF6B4A" /><stop offset="1" stopColor="#F5A623" />
      </linearGradient>
    </defs>
    <circle cx="260" cy="200" r="190" fill="#F1E9FE" />
    <circle cx="260" cy="200" r="150" fill="none" stroke="#C4B5FD" strokeWidth="2" strokeDasharray="6 8" />
    {/* laptop */}
    <rect x="118" y="120" width="284" height="180" rx="14" fill="#241832" />
    <rect x="130" y="132" width="260" height="156" rx="6" fill="url(#hsScreen)" />
    <path d="M86 300h348l-22 30H108z" fill="#B9B2C6" />
    <rect x="226" y="304" width="68" height="8" rx="4" fill="#8E86A0" />
    {/* screen content */}
    <rect x="146" y="148" width="110" height="10" rx="5" fill="#fff" opacity=".9" />
    <rect x="146" y="166" width="76" height="8" rx="4" fill="#fff" opacity=".5" />
    <rect x="146" y="186" width="92" height="22" rx="11" fill="#F5A623" />
    <rect x="160" y="194" width="64" height="6" rx="3" fill="#241832" opacity=".7" />
    <rect x="270" y="148" width="104" height="124" rx="10" fill="#fff" />
    <rect x="282" y="230" width="14" height="30" rx="3" fill="#C4B5FD" />
    <rect x="302" y="214" width="14" height="46" rx="3" fill="#8B5CF6" />
    <rect x="322" y="196" width="14" height="64" rx="3" fill="#4C0E82" />
    <rect x="342" y="176" width="14" height="84" rx="3" fill="#22C55E" />
    <path d="M280 214l24-18 20 8 34-38" fill="none" stroke="#FF6B4A" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M350 164l9 1-1 9" fill="none" stroke="#FF6B4A" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round" />
    <rect x="282" y="158" width="44" height="6" rx="3" fill="#E9E3F5" />
    <rect x="146" y="222" width="110" height="50" rx="10" fill="#fff" opacity=".14" />
    <circle cx="164" cy="247" r="10" fill="#22C55E" />
    <path d="M159 247l4 4 7-8" fill="none" stroke="#fff" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
    <rect x="182" y="238" width="60" height="6" rx="3" fill="#fff" opacity=".85" />
    <rect x="182" y="250" width="40" height="5" rx="2.5" fill="#fff" opacity=".5" />
    {/* megaphone (left) */}
    <g transform="translate(44 150) rotate(-12)">
      <path d="M0 22h16l44-24v64L16 38H0z" fill="url(#hsWarm)" />
      <rect x="-8" y="18" width="14" height="24" rx="5" fill="#C2650C" />
      <path d="M16 38l8 26h10l-6-26" fill="#C2650C" />
      <path d="M70 14c6 5 6 19 0 24M80 6c10 9 10 31 0 40" fill="none" stroke="#FF6B4A" strokeWidth="4" strokeLinecap="round" />
    </g>
    {/* target (bottom left) */}
    <g transform="translate(70 330)">
      <circle r="42" fill="#fff" />
      <circle r="42" fill="none" stroke="#FF6B4A" strokeWidth="8" />
      <circle r="26" fill="none" stroke="#FF6B4A" strokeWidth="8" />
      <circle r="10" fill="#FF6B4A" />
      <path d="M0 0l44-36" stroke="#241832" strokeWidth="4" strokeLinecap="round" />
      <path d="M40-44l14 2-5 5 7 3-12 9z" fill="#F5A623" />
    </g>
    {/* chat / like bubbles */}
    <g transform="translate(390 64)">
      <rect width="70" height="44" rx="14" fill="#FF6B4A" />
      <path d="M14 44l-2 14 16-14z" fill="#FF6B4A" />
      <path d="M24 20c0-6 8-8 11-2 3-6 11-4 11 2 0 7-11 13-11 13s-11-6-11-13z" fill="#fff" />
    </g>
    <g transform="translate(70 40)">
      <rect width="62" height="42" rx="14" fill="#4C0E82" />
      <path d="M48 42l4 14-16-14z" fill="#4C0E82" />
      <path d="M22 13l14 8-14 8z" fill="#fff" />
    </g>
    <g transform="translate(440 190)">
      <circle r="30" fill="#F5A623" />
      <text x="-10" y="11" fontSize="30" fontWeight="800" fill="#fff" fontFamily="Inter, sans-serif">₹</text>
    </g>
    <g transform="translate(410 300)">
      <rect width="84" height="42" rx="12" fill="#fff" stroke="#E2DBEE" strokeWidth="2" />
      <circle cx="21" cy="21" r="11" fill="#22C55E" />
      <path d="M15 21l4 4 8-9" fill="none" stroke="#fff" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round" />
      <rect x="38" y="13" width="36" height="6" rx="3" fill="#4C0E82" />
      <rect x="38" y="24" width="26" height="5" rx="2.5" fill="#C4B5FD" />
    </g>
    <g transform="translate(250 34)">
      <rect width="96" height="34" rx="17" fill="#fff" stroke="#E2DBEE" strokeWidth="2" />
      <circle cx="17" cy="17" r="7" fill="none" stroke="#3B82F6" strokeWidth="3" />
      <path d="M22 22l5 5" stroke="#3B82F6" strokeWidth="3" strokeLinecap="round" />
      <rect x="34" y="14" width="48" height="6" rx="3" fill="#C4B5FD" />
    </g>
    <path d="M196 70l3 10 10 3-10 3-3 10-3-10-10-3 10-3z" fill="#F5A623" />
    <path d="M470 130l2 7 7 2-7 2-2 7-2-7-7-2 7-2z" fill="#8B5CF6" />
  </svg>
);

const introPoints = [
  'Website, SEO, ads and content — one team',
  'Every call and WhatsApp click tracked',
  'Fixed, written quotes — no surprises',
  'Your domain and ad accounts stay yours',
];

export const IntroSplit = () => (
  <section className="hs-intro">
    <div className="container hs-split">
      <m.div className="hs-split-art" {...fadeUp}>
        <GrowthIllustration />
      </m.div>
      <m.div className="hs-split-copy" {...fadeUp} transition={{ ...fadeUp.transition, delay: 0.1 }}>
        <span className="section-tag">Your growth partner</span>
        <h2 className="section-title hs-left">
          A Digital Marketing Agency That Builds <span>Real Enquiries</span>
        </h2>
        <p className="hs-lead">
          We build fast websites that convert, then bring the right people to them with SEO, Google Ads, Meta Ads and social media — and we measure everything in calls, WhatsApp chats and leads, not likes. Based in Delhi NCR, working with businesses across India.
        </p>
        <ul className="hs-checks">
          {introPoints.map((p) => (
            <li key={p}><span className="hs-check" aria-hidden="true"><FiCheck /></span>{p}</li>
          ))}
        </ul>
        <div className="hs-actions">
          <Link to="/contact" className="btn-primary">Get Free Consultation <FiArrowRight aria-hidden="true" /></Link>
          <Link to="/about" className="hs-textlink">About Orizova <FiArrowRight aria-hidden="true" /></Link>
        </div>
      </m.div>
    </div>
  </section>
);

/* ---------- How we work ---------- */
const StepIcon = ({ n }) => {
  const icons = [
    // 1 consultation: chat bubbles
    <g key="1"><rect x="14" y="18" width="40" height="28" rx="10" fill="#8B5CF6" /><path d="M24 46l-2 10 12-10z" fill="#8B5CF6" /><rect x="22" y="27" width="24" height="4" rx="2" fill="#fff" /><rect x="22" y="35" width="16" height="4" rx="2" fill="#fff" opacity=".7" /><rect x="36" y="36" width="34" height="24" rx="9" fill="#F5A623" /><path d="M62 60l3 8-10-8z" fill="#F5A623" /><circle cx="46" cy="48" r="2.5" fill="#fff" /><circle cx="53" cy="48" r="2.5" fill="#fff" /><circle cx="60" cy="48" r="2.5" fill="#fff" /></g>,
    // 2 plan & quote: document with check
    <g key="2"><rect x="20" y="12" width="40" height="54" rx="6" fill="#fff" stroke="#4C0E82" strokeWidth="3" /><rect x="28" y="22" width="24" height="4" rx="2" fill="#4C0E82" /><rect x="28" y="31" width="20" height="4" rx="2" fill="#C4B5FD" /><rect x="28" y="40" width="22" height="4" rx="2" fill="#C4B5FD" /><circle cx="56" cy="56" r="13" fill="#22C55E" /><path d="M50 56l4 4 8-9" fill="none" stroke="#fff" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" /><text x="26" y="58" fontSize="12" fontWeight="800" fill="#C2650C" fontFamily="Inter, sans-serif">₹</text></g>,
    // 3 build & launch: rocket
    <g key="3"><path d="M40 10c14 8 18 24 14 38H26c-4-14 0-30 14-38z" fill="#4C0E82" /><circle cx="40" cy="30" r="6" fill="#fff" /><path d="M26 48l-8 10 12-2zM54 48l8 10-12-2z" fill="#8B5CF6" /><path d="M32 50h16l-3 10h-10z" fill="#FF6B4A" /><path d="M35 60h10l-5 10z" fill="#F5A623" /></g>,
    // 4 grow & report: chart up
    <g key="4"><rect x="14" y="44" width="12" height="22" rx="3" fill="#C4B5FD" /><rect x="32" y="34" width="12" height="32" rx="3" fill="#8B5CF6" /><rect x="50" y="22" width="12" height="44" rx="3" fill="#4C0E82" /><path d="M12 34l18-12 14 6 22-18" fill="none" stroke="#22C55E" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round" /><path d="M58 10l9 0 0 9" fill="none" stroke="#22C55E" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round" /></g>,
  ];
  return <svg viewBox="0 0 80 80" width="64" height="64" aria-hidden="true" focusable="false">{icons[n]}</svg>;
};

const steps = [
  { title: 'Free consultation', desc: 'A short call or WhatsApp chat to understand your business, customers and goals.' },
  { title: 'Plan & fixed quote', desc: 'A written plan with scope, timeline and a fixed price — agreed before work starts.' },
  { title: 'Build & launch', desc: 'Website, campaigns and tracking set up, reviewed with you and launched.' },
  { title: 'Grow & report', desc: 'Monthly improvements and a clear report on calls, leads and cost per enquiry.' },
];

export const HowWeWork = () => (
  <section className="hs-process">
    <div className="container">
      <m.div className="text-center" {...fadeUp}>
        <span className="section-tag">How We Work</span>
        <h2 className="section-title">From First Call to <span>Steady Growth</span></h2>
        <p className="section-subtitle">A simple, transparent process — you always know what is happening and what it costs.</p>
      </m.div>
      <ol className="hs-steps">
        {steps.map((s, i) => (
          <m.li key={s.title} className="hs-step" {...fadeUp} transition={{ ...fadeUp.transition, delay: i * 0.1 }}>
            <span className="hs-step-circle">
              <StepIcon n={i} />
              <span className="hs-step-num">{String(i + 1).padStart(2, '0')}</span>
            </span>
            <h3>{s.title}</h3>
            <p>{s.desc}</p>
          </m.li>
        ))}
      </ol>
    </div>
  </section>
);

/* ---------- At a glance: honest numbers from our own data ---------- */
export const AtAGlance = () => {
  const items = [
    { value: services.length, suffix: '+', label: 'Services under one roof', desc: 'Websites, apps, SEO, AI search, ads, social, video and branding.', to: '/services', color: '#4C0E82' },
    { value: industriesIndex.length, suffix: '+', label: 'Industries we plan for', desc: 'From clinics and real estate to manufacturers and D2C brands.', to: '/industries', color: '#C2650C' },
    { value: citiesIndex.length, suffix: '+', label: 'Cities with local pages', desc: 'Pan-India clients, with local know-how where it matters.', to: '/locations', color: '#8B5CF6' },
    { value: 100, suffix: '%', label: 'Ownership stays with you', desc: 'Domain, website, ad accounts and data — always in your name.', to: '/about', color: '#16A34A' },
  ];
  return (
    <section className="hs-glance">
      <div className="container">
        <m.div className="text-center" {...fadeUp}>
          <span className="section-tag">At a Glance</span>
          <h2 className="section-title">Orizova Digital <span>in Numbers</span></h2>
        </m.div>
        <div className="hs-glance-grid">
          {items.map((it, i) => (
            <m.div key={it.label} {...fadeUp} transition={{ ...fadeUp.transition, delay: i * 0.08 }}>
              <Link to={it.to} className="hs-glance-card" style={{ '--c': it.color }}>
                <span className="hs-glance-value">{it.value}{it.suffix}</span>
                <span className="hs-glance-label">{it.label}</span>
                <span className="hs-glance-desc">{it.desc}</span>
              </Link>
            </m.div>
          ))}
        </div>
      </div>
    </section>
  );
};

/* ---------- Tracking report (clearly labelled as a sample) ---------- */
const ReportIllustration = () => (
  <div className="hs-report" aria-hidden="true">
    <div className="hs-report-badge">Sample monthly report</div>
    <div className="hs-report-card">
      <div className="hs-report-head">
        <strong>Enquiries by source</strong>
        <span className="hs-legend"><i style={{ background: '#4C0E82' }} /> Calls <i style={{ background: '#22C55E' }} /> WhatsApp <i style={{ background: '#F5A623' }} /> Forms</span>
      </div>
      <svg viewBox="0 0 320 150" className="hs-report-chart">
        {[0, 1, 2, 3].map((r) => <line key={r} x1="0" x2="320" y1={20 + r * 40} y2={20 + r * 40} stroke="#EEE8F7" strokeWidth="1.5" />)}
        {[
          [30, 40, 26, 18], [100, 52, 34, 22], [170, 64, 44, 30], [240, 80, 56, 38],
        ].map(([x, a, b, c]) => (
          <g key={x}>
            <rect x={x} y={140 - a} width="14" height={a} rx="3" fill="#4C0E82" />
            <rect x={x + 18} y={140 - b} width="14" height={b} rx="3" fill="#22C55E" />
            <rect x={x + 36} y={140 - c} width="14" height={c} rx="3" fill="#F5A623" />
          </g>
        ))}
      </svg>
      <div className="hs-report-months"><span>Month 1</span><span>Month 2</span><span>Month 3</span><span>Month 4</span></div>
    </div>
    <div className="hs-report-pill hs-report-pill--a"><span>↗</span> Cost per lead tracked</div>
    <div className="hs-report-pill hs-report-pill--b"><span>✓</span> Every call &amp; chat counted</div>
  </div>
);

export const TrackingSplit = () => (
  <section className="hs-track">
    <div className="container hs-split hs-split--rev">
      <m.div className="hs-split-copy" {...fadeUp}>
        <span className="section-tag">Measured, Not Guessed</span>
        <h2 className="section-title hs-left">
          Know Exactly Where Your <span>Leads Come From</span>
        </h2>
        <p className="hs-lead">
          Before any campaign goes live we set up tracking for calls, WhatsApp clicks and form enquiries, connected to Google Analytics, Google Ads and Meta. Every month you get a plain-language report: what was done, how many enquiries came from each channel, and what each one cost.
        </p>
        <ul className="hs-checks">
          <li><span className="hs-check" aria-hidden="true"><FiCheck /></span>Google Analytics 4, Search Console, Meta Pixel &amp; Conversions API</li>
          <li><span className="hs-check" aria-hidden="true"><FiCheck /></span>Lead quality reviewed with your team, not just lead count</li>
          <li><span className="hs-check" aria-hidden="true"><FiCheck /></span>Budgets moved to what works, month after month</li>
        </ul>
        <div className="hs-actions">
          <Link to="/services/digital-marketing" className="btn-primary">How we run campaigns <FiArrowRight aria-hidden="true" /></Link>
        </div>
      </m.div>
      <m.div className="hs-split-art" {...fadeUp} transition={{ ...fadeUp.transition, delay: 0.1 }}>
        <ReportIllustration />
      </m.div>
    </div>
  </section>
);
