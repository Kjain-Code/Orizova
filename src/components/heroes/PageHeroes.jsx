import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FiArrowRight, FiArrowUpRight, FiArrowDown, FiPhone, FiMail, FiPlay, FiCheck } from 'react-icons/fi';
import { FaWhatsapp } from 'react-icons/fa';
import CONTACT, { waLink } from '../../data/site/contact';
import EmailLink, { EmailText } from '../common/EmailLink';
import ServiceIllustration from '../home/ServiceIllustrations';
import { allServices } from '../../data/services/services';
import { industriesIndex, industryGroups } from '../../data/site/siteIndex';
import { industryIcons, groupMeta } from '../../data/site/industryIcons';
import projects from '../../data/work/projects';
import creativeWork from '../../data/work/creativeWork';
import { caseStudiesWithStats as caseStudies } from '../../data/work/caseStudies';
import posts from '../../data/blog';
import facts from '../../data/site/facts';
import { formatDate } from '../common/BlogCards';
import './PageHeroes.css';

/* Page-specific heroes for the main hub pages (classes "ph-").
   Each one has its own composition but shares the type scale, colours and
   the small "eyebrow" label. Every number and image comes from the site's
   real data — nothing decorative stands in for proof.
   Deeper pages (services, cities, blog posts…) keep the calm PageBanner. */

const slugify = (t) => t.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');

const Eyebrow = ({ children, light = false }) => (
  <p className={`ph-eyebrow${light ? ' ph-eyebrow--light' : ''}`}>{children}</p>
);

/* =================== SERVICES =================== */
const SVC_GROUPS = [
  { key: 'Build', label: 'Build', line: 'Websites, stores and apps' },
  { key: 'Grow', label: 'Grow', line: 'SEO, ads and social' },
  { key: 'Create', label: 'Create', line: 'Brand, video and AI video' },
];

export const ServicesHero = () => {
  const top = allServices.filter((s) => !s.parent);
  const [group, setGroup] = useState('Build');
  const list = top.filter((s) => s.group === group);
  const [active, setActive] = useState(null);
  const shown = list.find((s) => s.slug === active) || list[0];

  return (
    <section className="ph ph-svc">
      <div className="container ph-svc-inner">
        <div className="ph-svc-copy">
          <Eyebrow>Services</Eyebrow>
          <h1 className="ph-h1">Web Development, SEO &amp; <em>Digital Marketing Services</em></h1>
          <p className="ph-lead">Websites, apps, SEO, ads, social media, branding and video for businesses across India — pick what you need, or let us plan the complete package.</p>
          <a href="#all-services" className="ph-textlink">See all {top.length} services <FiArrowDown aria-hidden="true" /></a>
        </div>

        <div className="ph-svc-panel">
          <div className="ph-svc-tabs" role="tablist" aria-label="Service groups">
            {SVC_GROUPS.map((g) => (
              <button
                key={g.key} type="button" role="tab" aria-selected={group === g.key}
                className={`ph-svc-tab${group === g.key ? ' is-on' : ''}`}
                onClick={() => { setGroup(g.key); setActive(null); }}
              >
                <strong>{g.label}</strong>
                <span>{g.line}</span>
              </button>
            ))}
          </div>
          <div className="ph-svc-body" role="tabpanel">
            <ul className="ph-svc-list">
              {list.map((s, i) => (
                <li key={s.slug}>
                  <Link
                    to={`/services/${s.slug}`}
                    className={shown && shown.slug === s.slug ? 'is-on' : ''}
                    onMouseEnter={() => setActive(s.slug)}
                    onFocus={() => setActive(s.slug)}
                  >
                    <span className="ph-svc-num">{String(i + 1).padStart(2, '0')}</span>
                    {s.title}
                    <FiArrowUpRight aria-hidden="true" />
                  </Link>
                </li>
              ))}
            </ul>
            {shown && (
              <div className="ph-svc-preview" aria-hidden="true" style={{ '--sc': shown.color }}>
                <span className="ph-svc-art"><ServiceIllustration slug={shown.slug} /></span>
                <p>{shown.shortDesc}</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

/* =================== INDUSTRIES =================== */
export const IndustriesHero = () => (
  <section className="ph ph-ind">
    <div className="container">
      <div className="ph-ind-top">
        <div>
          <Eyebrow>Industries</Eyebrow>
          <h1 className="ph-h1 ph-h1--xl">Digital Marketing <em>by Industry</em></h1>
        </div>
        <p className="ph-lead">Every industry buys differently. Pick yours from {industriesIndex.length} industries to see how we plan websites, SEO and ads around how your customers search and decide.</p>
      </div>

      <ol className="ph-ind-index">
        {industryGroups.map((g, i) => {
          const meta = groupMeta[g] || {};
          const list = industriesIndex.filter((x) => x.group === g);
          return (
            <li key={g} style={{ '--gc': meta.color }}>
              <a href={`#${slugify(g)}`}>
                <span className="ph-ind-num">{String(i + 1).padStart(2, '0')}</span>
                <span className="ph-ind-name">{g}</span>
                <span className="ph-ind-icons" aria-hidden="true">
                  {list.map((x) => {
                    const [Icon] = industryIcons[x.slug] || [];
                    return Icon ? <Icon key={x.slug} /> : null;
                  })}
                </span>
                <span className="ph-ind-count">{list.length} {list.length === 1 ? 'industry' : 'industries'}</span>
                <FiArrowDown className="ph-ind-go" aria-hidden="true" />
              </a>
            </li>
          );
        })}
      </ol>
    </div>
  </section>
);

/* =================== PORTFOLIO =================== */
export const PortfolioHero = () => {
  const order = ['morphic-spaces', 'orizova-digital', 'wipo-group', 'ganesh-creation', 'fps-subtitle'];
  const list = order.map((s) => projects.find((p) => p.slug === s)).filter(Boolean);
  const [lead] = list;
  return (
    <section className="ph ph-pf">
      <div className="container">
        <div className="ph-pf-head">
          <div>
            <Eyebrow>Portfolio</Eyebrow>
            <h1 className="ph-h1">Website Development Portfolio — <em>Projects That Speak</em></h1>
          </div>
          <p className="ph-lead">Live websites we have designed and developed — open them, click around and judge the work for yourself.</p>
        </div>

        {lead && (
          <div className="ph-pf-grid">
            <Link to={`/portfolio/${lead.slug}`} className="ph-pf-item ph-pf-item--lead">
              <img src={lead.image} alt={`${lead.title} website`} width="1000" height="423" decoding="async" />
              <span className="ph-pf-cap"><strong>{lead.title}</strong><small>{(lead.tags || []).slice(0, 2).join(' · ')}</small><FiArrowUpRight aria-hidden="true" /></span>
            </Link>
            <p className="ph-pf-more">{list.length} live projects below — open any of them and click around.</p>
          </div>
        )}
      </div>
    </section>
  );
};

/* =================== CASE STUDIES =================== */
export const CaseStudiesHero = () => (
  <section className="ph ph-cs">
    <div className="container">
      <Eyebrow>Case Studies</Eyebrow>
      <h1 className="ph-h1 ph-h1--xl">Case Studies — <em>Real Results, Real Numbers</em></h1>
      <p className="ph-lead">What our ads and SEO actually delivered — with the real Meta Ads Manager and Google Search Console screenshots behind every number.</p>

      <div className="ph-cs-evidence">
        {caseStudies.map((cs) => (
          <a key={cs.slug} href={`#${cs.slug}`} className="ph-cs-item">
            <span className="ph-cs-src">{cs.kind === 'seo' ? 'Google Search Console' : 'Meta Ads Manager'}</span>
            <strong>{cs.big.value}</strong>
            <span className="ph-cs-what">{cs.kind === 'seo' ? cs.big.label : `WhatsApp enquiries in ${cs.days} days`}</span>
            <span className="ph-cs-meta">{cs.industry} · {cs.city} · {cs.period}</span>
            {cs.proof && cs.proof[0] && (
              <span className="ph-cs-shot" aria-hidden="true"><img src={cs.proof[0].image} alt="" loading="lazy" decoding="async" /></span>
            )}
            <span className="ph-cs-go">See the proof <FiArrowDown aria-hidden="true" /></span>
          </a>
        ))}
      </div>
    </div>
  </section>
);

/* =================== CREATIVE WORK =================== */
export const CreativeHero = () => {
  const reels = creativeWork.filter((c) => c.poster).slice(0, 7);
  const center = Math.floor(reels.length / 2);
  return (
    <section className="ph ph-cw">
      <div className="ph-cw-screen">
      <div className="container ph-cw-copy">
        <Eyebrow light>Creative Work</Eyebrow>
        <h1 className="ph-h1 ph-h1--light">Video Editing &amp; Reels That <em>Do the Talking</em></h1>
        <p className="ph-lead ph-lead--light">Brand reels, ad videos, animated typography and AI videos — organised by style so you can see exactly what we do best.</p>
        <a href="#work" className="ph-cw-btn"><FiPlay aria-hidden="true" /> Watch the reels</a>
      </div>
      <div className="ph-cw-reel" aria-hidden="true">
        {reels.map((r, i) => (
          <span key={r.id} className={`ph-cw-frame${i === center ? ' is-center' : ''}`} style={{ '--d': `${Math.abs(i - center)}` }}>
            <img src={r.poster} alt="" width="360" height="640" loading={i === center ? 'eager' : 'lazy'} decoding="async" />
            <small>{r.title}</small>
          </span>
        ))}
      </div>
      </div>
    </section>
  );
};

/* =================== BLOG =================== */
export const BlogHero = () => {
  const [feature, ...more] = posts;
  return (
    <section className="ph ph-blog">
      <div className="container">
        <div className="ph-blog-masthead">
          <Eyebrow>The Orizova Journal</Eyebrow>
          <h1 className="ph-h1">Practical Guides on Websites, SEO <em>&amp; Digital Marketing</em></h1>
          <p className="ph-lead">Plain-language guides for business owners across India — website costs, Google Maps, ads, and marketing for clinics, real estate, cafes, architects and finance professionals.</p>
        </div>
        {feature && (
          <div className="ph-blog-grid">
            <Link to={`/blog/${feature.slug}`} className="ph-blog-feature">
              <span className="ph-blog-kicker">Latest · {feature.category} · {feature.readMins} min read</span>
              <strong>{feature.title}</strong>
              <p>{feature.excerpt}</p>
              <span className="ph-blog-date">{formatDate(feature.date)} <FiArrowRight aria-hidden="true" /></span>
            </Link>
            <ul className="ph-blog-list">
              {more.slice(0, 4).map((p) => (
                <li key={p.slug}>
                  <Link to={`/blog/${p.slug}`}>
                    <span className="ph-blog-kicker">{p.category} · {p.readMins} min</span>
                    <strong>{p.title}</strong>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </section>
  );
};

/* =================== ABOUT =================== */
export const AboutHero = () => (
  <section className="ph ph-about">
    <div className="container">
      <Eyebrow>About</Eyebrow>
      <h1 className="ph-about-h1">About Orizova Digital — <span>Web Development &amp; Digital Marketing Agency</span></h1>
      <p className="ph-about-statement">
        We&apos;re a full-service digital agency based in Delhi NCR, helping businesses across India get{' '}
        <em>found</em>, <em>chosen</em> and <em>contacted</em> online.
      </p>
      <ol className="ph-about-principles">
        {facts.workingPrinciples.map((p, i) => (
          <li key={p}>
            <span>{String(i + 1).padStart(2, '0')}</span>
            {p}
          </li>
        ))}
      </ol>
    </div>
  </section>
);

/* =================== CONTACT =================== */
export const ContactHero = () => (
  <section className="ph ph-contact">
    <div className="container ph-contact-inner">
      <div>
        <Eyebrow>Contact</Eyebrow>
        <h1 className="ph-h1">Contact Orizova Digital — <em>Free Consultation</em></h1>
        <p className="ph-lead">Tell us about your business on WhatsApp, a call or the form below — we&apos;ll reply with a clear plan and a fixed quote for your website and marketing.</p>
        <ul className="ph-contact-ticks">
          <li><FiCheck aria-hidden="true" /> First consultation is free</li>
          <li><FiCheck aria-hidden="true" /> Fixed, written quote before work starts</li>
          <li><FiCheck aria-hidden="true" /> English or Hindi — whatever is easier</li>
        </ul>
      </div>
      <div className="ph-contact-ways">
        <a href={waLink('Hi Orizova Digital, I would like a free consultation for my business.')} target="_blank" rel="noopener noreferrer" className="ph-way ph-way--wa">
          <span className="ph-way-ico"><FaWhatsapp aria-hidden="true" /></span>
          <span><small>WhatsApp — fastest</small><strong>{CONTACT.phoneDisplay}</strong></span>
          <FiArrowUpRight className="ph-way-go" aria-hidden="true" />
        </a>
        <a href={`tel:${CONTACT.phoneTel}`} className="ph-way">
          <span className="ph-way-ico"><FiPhone aria-hidden="true" /></span>
          <span><small>Call us</small><strong>{CONTACT.phoneDisplay}</strong></span>
          <FiArrowUpRight className="ph-way-go" aria-hidden="true" />
        </a>
        <EmailLink className="ph-way">
          <span className="ph-way-ico"><FiMail aria-hidden="true" /></span>
          <span><small>Email</small><strong><EmailText /></strong></span>
          <FiArrowUpRight className="ph-way-go" aria-hidden="true" />
        </EmailLink>
        <a href="#enquiry" className="ph-way ph-way--form">
          <span className="ph-way-ico"><FiArrowDown aria-hidden="true" /></span>
          <span><small>Prefer writing?</small><strong>Fill the enquiry form</strong></span>
        </a>
      </div>
    </div>
  </section>
);

