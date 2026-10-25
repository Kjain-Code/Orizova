import React from 'react';
import { Link } from 'react-router-dom';
import { m } from 'framer-motion';
import {
  FiArrowRight, FiPhoneOff, FiMapPin, FiTrendingDown, FiMessageSquare, FiInstagram, FiUsers, FiStar,
} from 'react-icons/fi';
import { reviews, clientNames, googleRating } from '../../data/site/reviews';
import './TrustSections.css';

const fadeUp = {
  initial: { opacity: 0, y: 26 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '0px 0px -10% 0px' },
  transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] },
};

/* ---------- Problems we fix (pain point → fix → service) ---------- */
const problems = [
  { Icon: FiPhoneOff, color: '#E11D48', pain: 'People visit my website, but nobody calls.', fix: 'We rebuild key pages around one clear action — call, WhatsApp or book — with proof, speed and mobile-first design.', to: '/services/website-development', label: 'Website development' },
  { Icon: FiMapPin, color: '#C2650C', pain: 'Competitors show up on Google Maps. I don’t.', fix: 'We optimise your Google Business Profile, build genuine reviews and fix your business details across the web.', to: '/services/local-seo', label: 'Local SEO' },
  { Icon: FiTrendingDown, color: '#7C3AED', pain: 'Ads spend money, but the leads are junk.', fix: 'We tighten targeting, forms and offers, track every enquiry and move budget to what brings real customers.', to: '/services/meta-ads', label: 'Meta & Google Ads' },
  { Icon: FiMessageSquare, color: '#0EA5E9', pain: 'ChatGPT and Google’s AI recommend others.', fix: 'We make your business easy for AI answers to understand and trust — answer-first pages, schema, reviews and mentions.', to: '/services/ai-search-optimization', label: 'AI search optimization' },
  { Icon: FiInstagram, color: '#DB2777', pain: 'We post on Instagram, but it brings no enquiries.', fix: 'We plan content around what buyers ask, edit reels that hold attention and add a clear next step to every post.', to: '/services/social-media-marketing', label: 'Social media & video' },
  { Icon: FiUsers, color: '#16A34A', pain: 'Three vendors, and nobody owns the results.', fix: 'One team plans your website, SEO, ads and content together — with one report and one person to call.', to: '/services/digital-marketing', label: 'Digital marketing' },
];

export const ProblemsWeFix = () => (
  <section className="tr-problems">
    <div className="container">
      <m.div className="text-center" {...fadeUp}>
        <span className="section-tag">Sound Familiar?</span>
        <h2 className="section-title">Problems We Fix for <span>Growing Businesses</span></h2>
        <p className="section-subtitle">If any of these sound like you, we can help — and we will tell you honestly if we can’t.</p>
      </m.div>
      <div className="tr-problems-grid">
        {problems.map(({ Icon, color, pain, fix, to, label }, i) => (
          <m.div key={pain} {...fadeUp} transition={{ ...fadeUp.transition, delay: (i % 3) * 0.08 }}>
            <Link to={to} className="tr-problem" style={{ '--c': color }}>
              <span className="tr-problem-icon" aria-hidden="true"><Icon /></span>
              <p className="tr-pain">“{pain}”</p>
              <p className="tr-fix">{fix}</p>
              <span className="tr-problem-link">{label} <FiArrowRight aria-hidden="true" /></span>
            </Link>
          </m.div>
        ))}
      </div>
    </div>
  </section>
);

/* ---------- Tools & platforms we work with (text only, no logos) ---------- */
const toolGroups = [
  { title: 'Websites & stores', items: ['React', 'WordPress', 'Shopify', 'WooCommerce', 'Razorpay', 'Vercel'] },
  { title: 'Apps', items: ['React Native', 'Flutter', 'Android', 'iOS'] },
  { title: 'Search & tracking', items: ['Google Search Console', 'Google Analytics 4', 'Google Business Profile', 'Schema.org'] },
  { title: 'Ads & messaging', items: ['Google Ads', 'Meta Ads Manager', 'Meta Pixel & CAPI', 'WhatsApp Business'] },
];

export const ToolsStrip = () => (
  <section className="tr-tools">
    <div className="container">
      <m.div className="text-center" {...fadeUp}>
        <span className="section-tag">Our Toolkit</span>
        <h2 className="section-title">Platforms We <span>Build &amp; Grow On</span></h2>
      </m.div>
      <div className="tr-tools-grid">
        {toolGroups.map((g, i) => (
          <m.div key={g.title} className="tr-tools-card" {...fadeUp} transition={{ ...fadeUp.transition, delay: i * 0.06 }}>
            <h3>{g.title}</h3>
            <ul>{g.items.map((t) => <li key={t}>{t}</li>)}</ul>
          </m.div>
        ))}
      </div>
    </div>
  </section>
);

/* ---------- Reviews: renders only when real reviews exist ---------- */
export const Reviews = () => {
  if (!reviews.length && !clientNames.length) return null;
  return (
    <section className="tr-reviews">
      <div className="container">
        <m.div className="text-center" {...fadeUp}>
          <span className="section-tag">Client Words</span>
          <h2 className="section-title">What Our <span>Clients Say</span></h2>
          {googleRating && (
            <a className="tr-rating" href={googleRating.link} target="_blank" rel="noopener noreferrer">
              <FiStar aria-hidden="true" /> {googleRating.rating} on Google · {googleRating.count} reviews
            </a>
          )}
        </m.div>
        {reviews.length > 0 && (
          <div className="tr-reviews-grid">
            {reviews.map((r, i) => (
              <m.figure key={`${r.name}-${i}`} className="tr-review" {...fadeUp} transition={{ ...fadeUp.transition, delay: (i % 3) * 0.08 }}>
                {r.rating ? <span className="tr-stars" aria-label={`${r.rating} out of 5 stars`}>{'★'.repeat(Math.round(r.rating))}</span> : null}
                <blockquote>“{r.quote}”</blockquote>
                <figcaption>
                  <strong>{r.name}</strong>
                  <span>{[r.role, r.business, r.city].filter(Boolean).join(' · ')}</span>
                  {r.source && (r.link
                    ? <a href={r.link} target="_blank" rel="noopener noreferrer">via {r.source}</a>
                    : <em>via {r.source}</em>)}
                </figcaption>
              </m.figure>
            ))}
          </div>
        )}
        {clientNames.length > 0 && (
          <div className="tr-clients">
            <p>Trusted by</p>
            <ul>{clientNames.map((c) => <li key={c}>{c}</li>)}</ul>
          </div>
        )}
      </div>
    </section>
  );
};
