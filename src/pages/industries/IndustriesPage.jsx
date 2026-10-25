import React from 'react';
import QuickAnswer from '../../components/content/QuickAnswer';
import sectionAnswers from '../../data/site/answers';
import { Link } from 'react-router-dom';
import { FiArrowRight, FiUsers, FiShield, FiTarget } from 'react-icons/fi';
import { FaWhatsapp } from 'react-icons/fa';
import PageBanner from '../../components/common/PageBanner';
import PageTransition from '../../components/layout/PageTransition';
import CtaBand from '../../components/common/CtaBand';
import Seo, { SITE_URL } from '../../components/seo/Seo';
import { LinkChips } from '../../components/content/ContentBlocks';
import { guideIndex, industryGroups } from '../../data/site/siteIndex';
import { industryIcons, groupMeta } from '../../data/site/industryIcons';
import { waLink } from '../../data/site/contact';
import industries from '../../data/industries/industries';

const slugify = (t) => t.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');

const tailor = [
  { icon: FiUsers, color: '#8B5CF6', title: 'We learn how your buyers decide', desc: 'A patient, a home buyer and a wholesale buyer search, compare and trust in very different ways. Your website, keywords and ads follow their journey.' },
  { icon: FiShield, color: '#C2650C', title: 'We follow your industry’s rules', desc: 'Medical, finance, real-estate, legal and immigration advertising all have rules. We plan content and ads that stay compliant and keep accounts safe.' },
  { icon: FiTarget, color: '#16A34A', title: 'We measure the right enquiry', desc: 'A booked appointment, a site visit or a bulk RFQ — we track what a good lead means for you, not just clicks and form fills.' },
];

const IndustriesPage = () => (
  <PageTransition>
    <Seo speakable
      page="industries"
      breadcrumbs={[{ name: 'Industries', path: '/industries' }]}
      schema={[{
        '@context': 'https://schema.org',
        '@type': 'CollectionPage',
        name: 'Industries we serve',
        url: `${SITE_URL}/industries`,
        mainEntity: {
          '@type': 'ItemList',
          itemListElement: industries.map((i, idx) => ({
            '@type': 'ListItem', position: idx + 1, name: i.name, url: `${SITE_URL}/industries/${i.slug}`,
          })),
        },
      }]}
    />
    <PageBanner crumbs={[{ name: 'Industries', path: '/industries' }]}
      title="Digital Marketing"
      highlight="by Industry"
      subtitle={`Every industry buys differently. Pick yours from ${industries.length} industries to see how we plan websites, SEO and ads around how your customers search and decide.`}
      chips={['Healthcare', 'Real estate', 'Education', 'D2C brands', 'Manufacturers']}
    />
    <section className="loc-section content-section ip">
      <div className="container">
        {/* Jump navigation */}
        <nav className="ip-jump" aria-label="Industry groups">
          {industryGroups.map((g) => {
            const meta = groupMeta[g] || {};
            const Icon = meta.icon;
            const count = industries.filter((i) => i.group === g).length;
            return (
              <a key={g} href={`#${slugify(g)}`} className="ip-jump-chip" style={{ '--c': meta.color }}>
                {Icon && <Icon aria-hidden="true" />} {g} <span className="ip-count">{count}</span>
              </a>
            );
          })}
        </nav>

        {industryGroups.map((g) => {
          const list = industries.filter((i) => i.group === g);
          if (!list.length) return null;
          const meta = groupMeta[g] || {};
          const GIcon = meta.icon;
          return (
            <section key={g} id={slugify(g)} className="ip-group" style={{ '--gc': meta.color }} aria-labelledby={`${slugify(g)}-h`}>
              <header className="ip-group-head">
                {GIcon && <span className="ip-group-ico" aria-hidden="true"><GIcon /></span>}
                <div>
                  <h2 id={`${slugify(g)}-h`}>{g}</h2>
                  {meta.desc && <p>{meta.desc}</p>}
                </div>
              </header>
              <div className="ip-grid">
                {list.map((i) => {
                  const [Icon, c] = industryIcons[i.slug] || [];
                  return (
                    <Link key={i.slug} to={`/industries/${i.slug}`} className="ip-card" style={{ '--c': c || meta.color }}>
                      <span className="ip-card-ico" aria-hidden="true">{Icon && <Icon />}</span>
                      <h3>{i.name}</h3>
                      <p>{i.short}</p>
                      <span className="ip-card-link">See how we help <FiArrowRight aria-hidden="true" /></span>
                    </Link>
                  );
                })}
                {list.length % 3 !== 0 && (
                  <a
                    href={waLink(`Hi Orizova Digital, I run a business in ${g.toLowerCase()}. Can you suggest a website / marketing plan?`)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="ip-card ip-card--ask"
                    style={{ gridColumn: `span ${3 - (list.length % 3)}` }}
                  >
                    <span className="ip-card-ico" aria-hidden="true"><FaWhatsapp /></span>
                    <h3>Work in {g.toLowerCase()}?</h3>
                    <p>Tell us about your business on WhatsApp — we&apos;ll reply with what we would do first, and a fixed quote.</p>
                    <span className="ip-card-link">Chat with us <FiArrowRight aria-hidden="true" /></span>
                  </a>
                )}
              </div>
            </section>
          );
        })}

        <section className="ip-tailor" aria-labelledby="ip-tailor-h">
          <div className="text-center">
            <span className="section-tag">Why industry matters</span>
            <h2 className="section-title" id="ip-tailor-h">Marketing That Fits <span>How Your Customers Decide</span></h2>
            <p className="section-subtitle">Instead of one generic package, we start from your industry — its customers, its rules and what a good enquiry looks like.</p>
          </div>
          <div className="ip-tailor-grid">
            {tailor.map((t, n) => (
              <div key={t.title} className="ip-tailor-card" style={{ '--c': t.color }}>
                <span className="ip-tailor-ico" aria-hidden="true"><t.icon /></span>
                <span className="ip-tailor-num" aria-hidden="true">0{n + 1}</span>
                <h3>{t.title}</h3>
                <p>{t.desc}</p>
              </div>
            ))}
          </div>
        </section>

        <QuickAnswer answers={sectionAnswers} path="/industries" />

        <LinkChips
          h2="Industry guides from our blog"
          links={guideIndex
            .filter((g) => g.pages.some((pg) => pg.startsWith('/industries/')))
            .map((g) => ({ to: `/blog/${g.slug}`, label: g.label }))}
        />

        <div className="ip-cta">
          <div>
            <span className="ip-cta-kicker">Don&apos;t see your industry?</span>
            <h2>We still work with you</h2>
            <p>NGOs, logistics, agencies, local brands and more — tell us what you do and we&apos;ll explain what we would do first, free.</p>
          </div>
          <div className="ip-cta-actions">
            <a href={waLink("Hi Orizova Digital, my business is in the ____ industry. Can you suggest a website / marketing plan?")} target="_blank" rel="noopener noreferrer" className="ip-cta-wa">
              <FaWhatsapp aria-hidden="true" /> Tell us on WhatsApp
            </a>
            <Link to="/contact" className="ip-cta-link">Or send the contact form <FiArrowRight aria-hidden="true" /></Link>
          </div>
        </div>
      </div>
    </section>
    <CtaBand title="Let's plan your growth" subtitle="A short call is enough to suggest the right first steps for your business." buttonText="Get Free Consultation" />
  </PageTransition>
);

export default IndustriesPage;
