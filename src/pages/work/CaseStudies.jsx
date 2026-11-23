import React, { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import { Link } from 'react-router-dom';
import { m } from 'framer-motion';
import { FiArrowRight, FiCheck, FiCalendar, FiMessageCircle, FiInfo, FiX, FiZoomIn, FiShield } from 'react-icons/fi';
import Seo, { SITE_URL } from '../../components/seo/Seo';
import { CaseStudiesHero } from '../../components/heroes/PageHeroes';
import CtaBand from '../../components/common/CtaBand';
import QuickAnswer from '../../components/content/QuickAnswer';
import PageTransition from '../../components/layout/PageTransition';
import { Reviews } from '../../components/home/TrustSections';
import { VideoGrid } from '../../components/sections/CreativeWorkSections';
import sectionAnswers from '../../data/site/answers';
import { caseStudiesWithStats as studies } from '../../data/work/caseStudies';
import creativeWork from '../../data/work/creativeWork';
import { waLink } from '../../data/site/contact';
import './CaseStudies.css';

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '0px 0px -8% 0px' },
  transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
};

const byId = Object.fromEntries(creativeWork.map((c) => [c.id, c]));

const META_LABELS = [
  ['reach', 'People reached', (v) => v.toLocaleString('en-IN')],
  ['impressions', 'Impressions', (v) => v.toLocaleString('en-IN')],
  ['linkClicks', 'Clicks to WhatsApp', (v) => v.toLocaleString('en-IN')],
  ['ctr', 'Click-through rate', (v) => `${v}%`],
];

/** Numbers copied from Meta Ads Manager — only the ones filled in are shown. */
const MetaNumbers = ({ meta }) => {
  const rows = META_LABELS.filter(([k]) => meta && meta[k] != null);
  if (!rows.length) return null;
  return (
    <div className="csx-meta-box">
      <h4>From Meta Ads Manager</h4>
      <dl>
        {rows.map(([k, label, fmt]) => (
          <div key={k}><dt>{label}</dt><dd>{fmt(meta[k])}</dd></div>
        ))}
      </dl>
    </div>
  );
};

const inr = (n) => `₹${Number(n).toLocaleString('en-IN', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;

/** Campaign rows exactly as in Ads Manager, with a total and simple bars. */
const MetaReport = ({ campaigns, period }) => {
  if (!campaigns || !campaigns.length) return null;
  const totalResults = campaigns.reduce((t, c) => t + c.results, 0);
  const totalSpent = campaigns.reduce((t, c) => t + c.spent, 0);
  const maxResults = Math.max(...campaigns.map((c) => c.results));
  return (
    <div className="csx-report">
      <div className="csx-report-head">
        <span className="csx-report-logo" aria-hidden="true">∞</span>
        <div>
          <strong>Meta Ads Manager report</strong>
          <small>{period} · Result = WhatsApp conversations started</small>
        </div>
      </div>
      <div className="csx-table-wrap">
        <table className="csx-table">
          <thead>
            <tr><th scope="col">Campaign</th><th scope="col">Results</th><th scope="col">Cost per result</th><th scope="col">Amount spent</th></tr>
          </thead>
          <tbody>
            {campaigns.map((c) => (
              <tr key={c.name}>
                <th scope="row">
                  {c.name}
                  <span className="csx-row-bar" aria-hidden="true"><i style={{ width: `${(c.results / maxResults) * 100}%` }} /></span>
                </th>
                <td data-label="Results">{c.results}</td><td data-label="Cost per result">{inr(c.costPerResult)}</td><td data-label="Amount spent">{inr(c.spent)}</td>
              </tr>
            ))}
          </tbody>
          <tfoot>
            <tr>
              <th scope="row">Total</th>
              <td data-label="Results">{totalResults}</td><td data-label="Cost per result">{inr(totalSpent / totalResults)}</td><td data-label="Amount spent">{inr(totalSpent)}</td>
            </tr>
          </tfoot>
        </table>
      </div>
    </div>
  );
};

const DAY = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
/** Enquiries per day (real daily numbers from Ads Manager) as simple bars. */
const DailyBars = ({ daily }) => {
  if (!daily || daily.length < 2) return null;
  const max = Math.max(...daily.map((d) => d.enquiries), 1);
  return (
    <div className="csx-daily">
      <h4>Enquiries per day</h4>
      <ol className="csx-bars">
        {daily.map((d) => {
          const [y, mo, da] = d.date.split('-').map(Number);
          const dt = new Date(y, mo - 1, da);
          return (
            <li key={d.date} aria-label={`${da}/${mo}: ${d.enquiries} enquiries`}>
              <span className="csx-bar-val">{d.enquiries}</span>
              <span className="csx-bar" style={{ height: `${Math.max(6, (d.enquiries / max) * 100)}%` }} />
              <span className="csx-bar-day">{DAY[dt.getDay()]}<br />{da}</span>
            </li>
          );
        })}
      </ol>
    </div>
  );
};

/** Real screenshots (Ads Manager, WhatsApp) — click to see full size. */
const ProofShots = ({ proof, note }) => {
  const [open, setOpen] = useState(null);
  useEffect(() => {
    if (!open) return undefined;
    const onKey = (e) => { if (e.key === 'Escape') setOpen(null); };
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', onKey);
    return () => { document.body.style.overflow = ''; window.removeEventListener('keydown', onKey); };
  }, [open]);
  if (!proof || !proof.length) return null;
  return (
    <div className="csx-proof">
      <h4><FiShield aria-hidden="true" /> Proof — real screenshots</h4>
      <div className={`csx-proof-grid${proof.length === 1 ? ' csx-proof-grid--wide' : ''}`}>
        {proof.map((p) => (
          <button type="button" key={p.caption} className="csx-shot" onClick={() => setOpen(p)} aria-label={`View screenshot: ${p.caption}`}>
            <img src={p.image} alt={p.caption} loading="lazy" decoding="async" />
            <span><FiZoomIn aria-hidden="true" /> {p.caption}</span>
          </button>
        ))}
      </div>
      {note && <p className="csx-proof-note">{note}</p>}
      {open && createPortal(
        <div className="csx-lightbox" role="dialog" aria-modal="true" aria-label={open.caption} onClick={() => setOpen(null)}>
          <figure onClick={(e) => e.stopPropagation()}>
            <button type="button" className="csx-lightbox-close" onClick={() => setOpen(null)} aria-label="Close"><FiX size={20} /></button>
            <img src={open.image} alt={open.caption} />
            <figcaption>{open.caption}</figcaption>
          </figure>
        </div>,
        document.body,
      )}
    </div>
  );
};

const CaseStudyCard = ({ cs, index }) => {
  const ads = (cs.creatives || []).map((id) => byId[id]).filter(Boolean);
  return (
    <m.article id={cs.slug} className="csx-card" {...fadeUp} transition={{ ...fadeUp.transition, delay: (index % 2) * 0.08 }}>
      <p className="csx-meta">
        <span>{cs.industry}</span><i aria-hidden="true">·</i><span>{cs.type}</span><i aria-hidden="true">·</i><span>{cs.city}</span>
      </p>
      <h3 className="csx-headline">{cs.headline}</h3>

      <div className="csx-body">
        <div className="csx-numbers">
          <div className="csx-big">
            <strong>{cs.big.value}</strong>
            <span>{cs.big.label}</span>
          </div>
          <dl className="csx-stats">
            {cs.stats.map((st) => <div key={st.label}><dt>{st.label}</dt><dd>{st.value}</dd></div>)}
          </dl>
        </div>

        <div className="csx-did">
          <h4>What we did</h4>
          <ul>
            {cs.whatWeDid.map((p) => (
              <li key={p}><FiCheck aria-hidden="true" /> {p}</li>
            ))}
          </ul>
        </div>
      </div>

      {cs.note && <p className="csx-note"><FiInfo aria-hidden="true" /> {cs.note}</p>}

      <MetaReport campaigns={cs.campaigns} period={cs.period} />
      <MetaNumbers meta={cs.meta} />
      <DailyBars daily={cs.daily} />
      <ProofShots proof={cs.proof} note={cs.proofNote} />

      <div className="csx-foot">
        <span className="csx-date"><FiCalendar aria-hidden="true" /> Results: {cs.period}</span>
        <span className="csx-links">
          {cs.more && <Link to={cs.more.to} className="csx-service">{cs.more.label} <FiArrowRight aria-hidden="true" /></Link>}
          {cs.service && (
            <Link to={cs.service.to} className="csx-service">{cs.service.label} service <FiArrowRight aria-hidden="true" /></Link>
          )}
        </span>
      </div>

      {ads.length > 0 && (
        <div className="csx-ads">
          <h4>The ads behind this result</h4>
          <VideoGrid items={ads} />
        </div>
      )}
    </m.article>
  );
};

const CaseStudies = () => {
  const samples = creativeWork.slice(0, 4);
  return (
    <PageTransition>
      <Seo
        speakable
        page="caseStudies"
        breadcrumbs={[{ name: 'Case Studies', path: '/case-studies' }]}
        schema={[{
          '@context': 'https://schema.org',
          '@type': 'ItemList',
          name: 'Orizova Digital case studies',
          itemListElement: studies.map((cs, i) => ({
            '@type': 'ListItem',
            position: i + 1,
            url: `${SITE_URL}/case-studies#${cs.slug}`,
            name: `${cs.headline} — ${cs.industry} (${cs.type}), ${cs.city}`,
            description: `${cs.big.value} ${cs.big.label}; ${cs.stats.map((st) => `${st.label}: ${st.value}`).join(', ')} (${cs.period}).`,
          })),
        }]}
      />

      <CaseStudiesHero />

      <section className="csx-section">
        <div className="container">
          <m.div className="text-center" {...fadeUp}>
            <span className="section-tag">Proof of Work</span>
            <h2 className="section-title">Campaign <span>Results</span></h2>
            <p className="section-subtitle">
              Numbers are copied as they are from Meta Ads Manager and Google Search Console, with the screenshot under each result. Client names stay
              private unless the client agrees to be named.
            </p>
          </m.div>

          {studies.length > 0 ? (
            <div className="csx-grid">
              {studies.map((cs, i) => <CaseStudyCard key={cs.slug} cs={cs} index={i} />)}
            </div>
          ) : (
            <p className="csx-empty">New case studies are being added — check back soon.</p>
          )}

          <QuickAnswer answers={sectionAnswers} path="/case-studies" />
        </div>
      </section>

      <Reviews />

      {samples.length > 0 && (
        <section className="csx-section csx-section--alt">
          <div className="container">
            <m.div className="text-center" {...fadeUp}>
              <span className="section-tag">Our Work</span>
              <h2 className="section-title">Ad Creatives <span>We&apos;ve Made</span></h2>
              <p className="section-subtitle">Reels, ad videos and AI videos made for real businesses. Tap any one to watch.</p>
            </m.div>
            <VideoGrid items={samples} />
            <div className="csx-more">
              <Link to="/creative-work" className="btn-primary">See all creative work <FiArrowRight aria-hidden="true" /></Link>
              <a
                href={waLink('Hi Orizova Digital, I saw your case studies. I want more enquiries for my business — can we discuss?')}
                className="btn-outline" target="_blank" rel="noopener noreferrer"
              >
                <FiMessageCircle aria-hidden="true" /> WhatsApp Us
              </a>
            </div>
          </div>
        </section>
      )}

      <CtaBand
        title="Want Results Like These?"
        subtitle="Tell us what you sell and where. We'll plan the ads, make the creatives and report every enquiry — honestly."
        buttonText="Get Free Consultation"
      />
    </PageTransition>
  );
};

export default CaseStudies;
