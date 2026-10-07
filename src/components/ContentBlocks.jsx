import React from 'react';
import { Link } from 'react-router-dom';
import {
  FiArrowRight, FiArrowUpRight, FiCheck, FiPhone, FiChevronRight, FiPlus,
  FiLayers, FiTarget, FiTrendingUp, FiZap, FiCompass, FiStar, FiShield, FiUsers,
} from 'react-icons/fi';
import { FaWhatsapp } from 'react-icons/fa';
import CONTACT, { whatsappLink } from '../data/contact';
import projects from '../data/projects';
import { SITE_URL } from './Seo';
import { guidesFor } from '../data/siteIndex';
import '../pages/LocationPage.css';
import './ContentPage.css';

/* Shared building blocks for the content-heavy pages (services, cities,
   industries, blog, FAQ). They only reuse the site's existing classes and
   tokens (section-tag, section-title, loc-*, chip-link, btn-*) so every new
   page looks native. */

// Turns "see [local SEO](/services/local-seo)" into text + <Link>.
export const Inline = ({ text }) => {
  const parts = [];
  const re = /\[([^\]]+)\]\(([^)]+)\)|\*\*([^*]+)\*\*/g;
  let last = 0;
  let m;
  let i = 0;
  while ((m = re.exec(text))) {
    if (m.index > last) parts.push(text.slice(last, m.index));
    if (m[3]) {
      parts.push(<strong key={i++}>{m[3]}</strong>);
    } else if (m[2].startsWith('/')) {
      parts.push(<Link key={i++} to={m[2]} className="content-link">{m[1]}</Link>);
    } else {
      parts.push(
        <a key={i++} href={m[2]} target="_blank" rel="noopener noreferrer" className="content-link">{m[1]}</a>
      );
    }
    last = m.index + m[0].length;
  }
  if (last < text.length) parts.push(text.slice(last));
  return <>{parts}</>;
};

export const Breadcrumbs = ({ items }) => (
  <nav className="crumbs" aria-label="Breadcrumb">
    <div className="container">
      <ol>
        <li><Link to="/">Home</Link></li>
        {items.map((c, idx) => (
          <li key={c.path}>
            <FiChevronRight aria-hidden="true" />
            {idx === items.length - 1 ? <span aria-current="page">{c.name}</span> : <Link to={c.path}>{c.name}</Link>}
          </li>
        ))}
      </ol>
    </div>
  </nav>
);

export const CtaButtons = ({ center = false, label = 'Get a free consultation' }) => (
  <div className={`cta-buttons ${center ? 'is-center' : ''}`}>
    <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="btn-primary">
      <FaWhatsapp aria-hidden="true" /> WhatsApp us
    </a>
    <a href={`tel:${CONTACT.phoneTel}`} className="btn-outline">
      <FiPhone aria-hidden="true" /> Call {CONTACT.phoneDisplay}
    </a>
    <Link to="/contact" className="cta-text-link">
      {label} <FiArrowRight aria-hidden="true" />
    </Link>
  </div>
);

const Paras = ({ paras = [] }) => paras.map((p) => <p className="loc-text" key={p.slice(0, 40)}><Inline text={p} /></p>);

const CARD_ICONS = [FiLayers, FiTarget, FiTrendingUp, FiZap, FiCompass, FiStar, FiShield, FiUsers];

/** Section eyebrow + heading used by every content block. */
export const SectionHead = ({ tag, h2, center = false }) => (
  <div className={`sh ${center ? 'sh--center' : ''}`}>
    {tag && <span className="sh-tag"><span className="sh-line" aria-hidden="true" />{tag}</span>}
    {h2 && <h2 className="sh-title">{h2}</h2>}
  </div>
);

export const Prose = ({ tag, h2, paras, bullets, after, variant }) => {
  const hasBullets = bullets && bullets.length > 0;
  if (variant === 'article') {
    return (
      <div className="loc-block cb-article">
        {h2 && <h2 className="cb-article-h2">{h2}</h2>}
        <Paras paras={paras} />
        {hasBullets && (
          <ul className="cb-article-list">
            {bullets.map((b) => <li key={b.slice(0, 40)}><Inline text={b} /></li>)}
          </ul>
        )}
        {after && <Paras paras={after} />}
      </div>
    );
  }
  if (!hasBullets) {
    return (
      <div className="loc-block cb-prose">
        <SectionHead tag={tag} h2={h2} />
        <div className="cb-prose-body">
          <Paras paras={paras} />
          {after && <Paras paras={after} />}
        </div>
      </div>
    );
  }
  return (
    <div className="loc-block cb-split">
      <div className="cb-split-left">
        <SectionHead tag={tag} h2={h2} />
        <Paras paras={paras} />
        {after && <Paras paras={after} />}
      </div>
      <ul className="cb-checks">
        {bullets.map((b) => (
          <li key={b.slice(0, 40)} className="spot">
            <span className="cb-check" aria-hidden="true"><FiCheck /></span>
            <span><Inline text={b} /></span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export const Cards = ({ tag, h2, intro, items }) => (
  <div className="loc-block">
    <SectionHead tag={tag} h2={h2} />
    {intro && <p className="loc-text cb-intro"><Inline text={intro} /></p>}
    <div className="cb-cards">
      {items.map((it, i) => {
        const Icon = CARD_ICONS[i % CARD_ICONS.length];
        const inner = (
          <>
            <span className="cb-card-top">
              <span className="cb-card-icon" aria-hidden="true"><Icon /></span>
              <span className="cb-card-num" aria-hidden="true">{String(i + 1).padStart(2, '0')}</span>
            </span>
            <h3>{it.title}</h3>
            <p><Inline text={it.desc} /></p>
            {it.to && <span className="cb-card-link">{it.cta || 'Explore'} <FiArrowUpRight aria-hidden="true" /></span>}
          </>
        );
        return it.to ? (
          <Link key={it.title} to={it.to} className="cb-card spot">{inner}</Link>
        ) : (
          <div key={it.title} className="cb-card spot">{inner}</div>
        );
      })}
    </div>
  </div>
);

export const Process = ({ tag = 'Our process', h2 = 'How we work', steps }) => (
  <div className="loc-block cb-band">
    <SectionHead tag={tag} h2={h2} />
    <ol className="cb-timeline" style={{ '--steps': steps.length }}>
      {steps.map((s, i) => (
        <li key={s.title} className="cb-step spot">
          <span className="cb-step-num" aria-hidden="true">{String(i + 1).padStart(2, '0')}</span>
          <h3>{s.title}</h3>
          <p><Inline text={s.desc} /></p>
        </li>
      ))}
    </ol>
  </div>
);

const FaqItem = ({ q, a, defaultOpen }) => {
  const [open, setOpen] = React.useState(defaultOpen);
  const id = React.useId();
  return (
    <div className={`cb-faq ${open ? 'is-open' : ''}`}>
      <h3 className="cb-faq-q">
        <button type="button" aria-expanded={open} aria-controls={id} onClick={() => setOpen(!open)}>
          <span>{q}</span>
          <span className="cb-faq-icon" aria-hidden="true"><FiPlus /></span>
        </button>
      </h3>
      <div className="cb-faq-a" id={id} role="region">
        <div><p><Inline text={a} /></p></div>
      </div>
    </div>
  );
};

export const Faqs = ({ h2 = 'Frequently asked questions', faqs, tag = 'FAQs' }) => (
  <div className="loc-block cb-faqs">
    <div className="cb-faqs-left">
      <SectionHead tag={tag} h2={h2} />
      <p className="loc-text">Can&apos;t find your answer? Ask us directly — we usually reply quickly on WhatsApp.</p>
      <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="cb-faq-cta">
        <FaWhatsapp aria-hidden="true" /> Ask on WhatsApp
      </a>
    </div>
    <div className="cb-faqs-list">
      {faqs.map(([q, a], i) => <FaqItem key={q} q={q} a={a} defaultOpen={i === 0} />)}
    </div>
  </div>
);

export const LinkChips = ({ h2, links }) => (
  <div className="loc-block cb-chips-block">
    {h2 && <h2 className="cb-chips-title">{h2}</h2>}
    <div className="cb-chips">
      {links.map((l) => (
        <Link key={l.to} to={l.to} className="cb-chip">
          {l.label} <FiArrowUpRight aria-hidden="true" />
        </Link>
      ))}
    </div>
  </div>
);

/** Contextual links to the blog guides that support the current page. */
export const RelatedGuides = ({ path, h2 = 'Helpful guides' }) => {
  const guides = guidesFor(path);
  if (!guides.length) return null;
  return <LinkChips h2={h2} links={guides.map((g) => ({ to: `/blog/${g.slug}`, label: g.label }))} />;
};

export const RealWork = ({ h2 = 'Websites we have built' }) => (
  <div className="loc-block">
    <SectionHead tag="Real work" h2={h2} />
    <div className="cb-work">
      {projects.map((p) => (
        <Link key={p.id} to={`/portfolio/${p.slug}`} className="cb-work-card spot">
          <span className="cb-work-img">
            <img src={p.image} alt={`${p.title} website by Orizova Digital`} width="800" height="338" loading="lazy" decoding="async" />
          </span>
          <span className="cb-work-body">
            <span className="cb-work-tag">{p.industry}</span>
            <strong>{p.title}</strong>
            <span className="cb-work-desc">{p.desc}</span>
            <span className="cb-card-link">View project <FiArrowUpRight aria-hidden="true" /></span>
          </span>
        </Link>
      ))}
    </div>
  </div>
);

/** Renders an array of block objects (see data/pages/*). */
export const Blocks = ({ blocks }) =>
  blocks.map((b, i) => {
    const key = `${b.type}-${i}`;
    switch (b.type) {
      case 'prose': return <Prose key={key} {...b} />;
      case 'cards': return <Cards key={key} {...b} />;
      case 'process': return <Process key={key} {...b} />;
      case 'faq': return <Faqs key={key} {...b} />;
      case 'links': return <LinkChips key={key} {...b} />;
      case 'work': return <RealWork key={key} {...b} />;
      case 'cta': return <div key={key} className="loc-block"><CtaButtons /></div>;
      default: return null;
    }
  });

/* ---------- schema helpers ---------- */
export const faqSchema = (faqs) => ({
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqs.map(([q, a]) => ({
    '@type': 'Question',
    name: q,
    acceptedAnswer: { '@type': 'Answer', text: a.replace(/\[([^\]]+)\]\([^)]+\)/g, '$1').replace(/\*\*/g, '') },
  })),
});

export const serviceSchema = ({ name, description, path, areaServed, serviceType }) => ({
  '@context': 'https://schema.org',
  '@type': 'Service',
  name,
  description,
  serviceType: serviceType || name,
  provider: { '@id': `${SITE_URL}/#organization` },
  areaServed,
  url: `${SITE_URL}${path}`,
});

export const collectFaqs = (blocks) => blocks.filter((b) => b.type === 'faq').flatMap((b) => b.faqs);
