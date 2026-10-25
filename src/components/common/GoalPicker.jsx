import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaWhatsapp } from 'react-icons/fa';
import { FiArrowRight, FiPhone } from 'react-icons/fi';
import CONTACT, { waLink } from '../../data/site/contact';
import services from '../../data/services/services';
import ServiceIllustration from '../home/ServiceIllustrations';
import './GoalPicker.css';

/* "What do you need?" — a small interactive advisor. The visitor taps a goal,
   sees the services we would start with (and why), then sends that goal to
   us on WhatsApp with one tap, so the conversation starts with context.
   Works without JavaScript too: the first goal is pre-rendered. */

const GOALS = [
  {
    id: 'leads', ask: 'to get more enquiries and leads', label: 'More enquiries & leads', emoji: '📈',
    plan: 'We usually start with Google search ads for people already looking, Meta lead ads for reach, and a fast landing page — with every call and WhatsApp tracked.',
    services: ['google-ads', 'meta-ads', 'digital-marketing'],
  },
  {
    id: 'website', ask: 'a new website', label: 'A new website', emoji: '💻',
    plan: 'A fast, mobile-first website that explains what you do in seconds, with WhatsApp and call buttons — set up for Google from day one.',
    services: ['website-development', 'seo', 'branding-designing'],
  },
  {
    id: 'google', ask: 'to rank higher on Google', label: 'Rank higher on Google', emoji: '🔎',
    plan: 'An audit and keyword map first, then technical fixes, strong service pages and steady monthly work you can see in your reports.',
    services: ['seo', 'local-seo', 'website-development'],
  },
  {
    id: 'maps', ask: 'to show up on Google Maps', label: 'Show up on Google Maps', emoji: '📍',
    plan: 'A complete Google Business Profile, a routine for genuine reviews, and local pages — the signals that win "near me" searches.',
    services: ['local-seo', 'google-ads', 'seo'],
  },
  {
    id: 'sell', ask: 'to sell my products online', label: 'Sell products online', emoji: '🛒',
    plan: 'A fast online store with UPI and COD checkout, proper tracking, then Meta and Google Shopping campaigns measured on revenue.',
    services: ['ecommerce-solutions', 'meta-ads', 'google-ads'],
  },
  {
    id: 'social', ask: 'to grow on Instagram', label: 'Grow on Instagram', emoji: '📱',
    plan: 'A monthly content calendar, reels edited to stop the scroll, and small boosts for your best posts — with replies handled quickly.',
    services: ['social-media-marketing', 'video-editing', 'meta-ads'],
  },
  {
    id: 'app', ask: 'a mobile app', label: 'A mobile app', emoji: '📲',
    plan: 'Android and iOS from one codebase (React Native or Flutter), with the admin panel and website that go with it.',
    services: ['app-development', 'website-development', 'branding-designing'],
  },
  {
    id: 'brand', ask: 'a logo and brand identity', label: 'A logo & brand', emoji: '🎨',
    plan: 'A logo and identity system — colours, fonts, templates — that looks consistent on your website, Instagram, packaging and ads.',
    services: ['branding-designing', 'social-media-marketing', 'website-development'],
  },
];

const bySlug = Object.fromEntries(services.map((s) => [s.slug, s]));

const GoalPicker = ({ id = 'goal-picker', title = 'What do you want to achieve?', tag = 'Free advice in 10 seconds' }) => {
  const [goalId, setGoalId] = useState(GOALS[0].id);
  const goal = GOALS.find((g) => g.id === goalId) || GOALS[0];
  const picks = goal.services.map((s) => bySlug[s]).filter(Boolean);
  const message = `Hi Orizova Digital, I want ${goal.ask}. I'm interested in ${picks.map((p) => p.title).join(', ')}. Can you suggest a plan?`;

  return (
    <section className="gp" id={id} aria-labelledby={`${id}-title`}>
      <div className="container">
        <div className="gp-box">
          <div className="gp-head">
            <span className="section-tag">{tag}</span>
            <h2 className="section-title" id={`${id}-title`}>{title}</h2>
            <p className="gp-sub">Tap your goal — we&apos;ll show what we would do first, and you can send it to us on WhatsApp in one tap.</p>
          </div>

          <div className="gp-goals" role="group" aria-label="Choose your goal">
            {GOALS.map((g) => (
              <button
                key={g.id}
                type="button"
                className={`gp-goal ${g.id === goalId ? 'is-active' : ''}`}
                aria-pressed={g.id === goalId}
                onClick={() => setGoalId(g.id)}
              >
                <span aria-hidden="true">{g.emoji}</span> {g.label}
              </button>
            ))}
          </div>

          <div className="gp-result" aria-live="polite">
            <div className="gp-plan">
              <span className="gp-plan-kicker">Our suggestion</span>
              <p className="gp-plan-text">{goal.plan}</p>
              <div className="gp-actions">
                <a href={waLink(message)} target="_blank" rel="noopener noreferrer" className="gp-wa">
                  <FaWhatsapp aria-hidden="true" /> Send this to us on WhatsApp
                </a>
                <a href={`tel:${CONTACT.phoneTel}`} className="gp-call"><FiPhone aria-hidden="true" /> {CONTACT.phoneDisplay}</a>
              </div>
            </div>
            <div className="gp-picks">
              {picks.map((p, i) => (
                <Link key={p.slug} to={`/services/${p.slug}`} className="gp-pick">
                  <span className="gp-pick-art"><ServiceIllustration slug={p.slug} /></span>
                  <span className="gp-pick-body">
                    <span className="gp-pick-step">Step {i + 1}</span>
                    <strong>{p.title}</strong>
                    <span className="gp-pick-desc">{p.shortDesc}</span>
                  </span>
                  <FiArrowRight className="gp-pick-arrow" aria-hidden="true" />
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GoalPicker;
