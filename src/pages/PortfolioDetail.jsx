import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { FiExternalLink, FiArrowRight } from 'react-icons/fi';
import PageBanner from '../components/PageBanner';
import PageTransition from '../components/PageTransition';
import CtaBand from '../components/CtaBand';
import Seo, { SITE_URL, routesByPath } from '../components/Seo';
import { CtaButtons, Inline, Prose, LinkChips } from '../components/ContentBlocks';
import projects from '../data/projects';
import NotFound from './NotFound';

// Contextual link from a case study to the matching industry page.
const INDUSTRY_LINKS = {
  'morphic-spaces': { to: '/industries/architects', label: 'Websites for architects & interior designers' },
  'wipo-group': { to: '/industries/finance-loan-agents', label: 'Digital marketing for finance businesses' },
};

const PortfolioDetail = () => {
  const { slug } = useParams();
  const p = projects.find((x) => x.slug === slug);
  if (!p) return <NotFound />;
  const path = `/portfolio/${p.slug}`;
  const crumbs = [{ name: 'Portfolio', path: '/portfolio' }, { name: p.title, path }];

  return (
    <PageTransition>
      <Seo
        path={path}
        breadcrumbs={crumbs}
        schema={[{
          '@context': 'https://schema.org',
          '@type': 'CreativeWork',
          name: `${p.title} website`,
          description: p.desc,
          url: `${SITE_URL}${path}`,
          sameAs: p.link,
          creator: { '@id': `${SITE_URL}/#organization` },
          genre: p.category,
        }]}
      />
      <PageBanner title={`${p.title} —`} highlight={((routesByPath[path] || {}).h1 || '').split(' — ')[1] || 'Website Case Study'} subtitle={p.desc} chips={[p.industry, ...p.tags].slice(0, 5)} />
      <section className="loc-section content-section">
        <div className="container">
          <div className="loc-intro">
            <div>
              <img
                src={p.image}
                alt={`${p.title} website homepage designed and developed by Orizova Digital`}
                width="800"
                height="338"
                loading="lazy"
                decoding="async"
                style={{ width: '100%', height: 'auto', borderRadius: 18, border: '1.5px solid var(--lavender)' }}
              />
            </div>
            <aside className="loc-card">
              <h3>Project</h3>
              <ul className="loc-areas">
                {p.tags.map((t) => <li key={t}>{t}</li>)}
              </ul>
              <a href={p.link} target="_blank" rel="noopener noreferrer" className="btn-primary" style={{ marginTop: 20 }}>
                Visit live site <FiExternalLink aria-hidden="true" />
              </a>
            </aside>
          </div>

          <Prose tag="The brief" h2="What the client needed" paras={[p.brief]} />
          <Prose tag="What we built" h2="Key features of the website" bullets={p.built} />
          <div className="loc-block content-prose">
            <span className="section-tag">Takeaway</span>
            <h2 className="section-title content-h2">What other businesses can learn</h2>
            <p className="loc-text"><Inline text={p.takeaway} /></p>
          </div>
          {p.clientResult && <Prose tag="Results" h2="Results" paras={[p.clientResult]} />}
          {p.testimonial && <Prose tag="Client feedback" h2="What the client said" paras={[p.testimonial]} />}

          <div className="loc-block">
            <h2 className="section-title content-h2">Want a website like this?</h2>
            <CtaButtons />
          </div>
          <LinkChips
            h2="More projects"
            links={projects.filter((x) => x.slug !== p.slug).map((x) => ({ to: `/portfolio/${x.slug}`, label: x.title }))}
          />
          <LinkChips
            h2="Related services & industries"
            links={[
              { to: '/services/website-development', label: 'Website development service' },
              ...(INDUSTRY_LINKS[p.slug] ? [INDUSTRY_LINKS[p.slug]] : []),
              { to: '/portfolio', label: 'All portfolio projects' },
            ]}
          />
          <Link to="/contact" className="loc-inline-link" style={{ marginTop: 20 }}>
            Get a quote for a similar website <FiArrowRight aria-hidden="true" />
          </Link>
        </div>
      </section>
      <CtaBand title="Let's build yours next" subtitle="Tell us about your business and we'll suggest the right website." buttonText="Start Your Project" />
    </PageTransition>
  );
};

export default PortfolioDetail;
