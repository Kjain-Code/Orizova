import React from 'react';
import { Link } from 'react-router-dom';
import { FiArrowRight, FiGrid } from 'react-icons/fi';
import { industryIcons as IND_ICON } from '../../data/site/industryIcons';
import { industriesIndex as industries, postsIndex as posts } from '../../data/site/siteIndex';
import BlogCards from '../common/BlogCards';
import './AreasServed.css';
import '../content/ContentPage.css';

/* Home-page strips: industries we serve + latest guides. Reuse the
   AreasServed card styles so they look native. */
export const IndustriesStrip = () => (
  <section className="areas-section home-industries">
    <div className="container">
      <div className="text-center">
        <span className="section-tag">Industries</span>
        <h2 className="section-title">Marketing Built for <span>Your Industry</span></h2>
        <p className="section-subtitle">
          A dental clinic, a D2C brand and a manufacturer each win customers differently — so we plan websites, SEO and ads around your industry.
        </p>
      </div>
      <div className="areas-grid">
        {industries.filter((ind) => ind.featured).slice(0, 7).map((ind) => (
          <Link key={ind.slug} to={`/industries/${ind.slug}`} className="area-card">
            {IND_ICON[ind.slug] && (() => {
              const [Icon, c] = IND_ICON[ind.slug];
              return <span className="ind-ico" style={{ '--c': c }} aria-hidden="true"><Icon /></span>;
            })()}
            <h3>{ind.name}</h3>
            <p>{ind.short}</p>
            <span className="area-link">How we help <FiArrowRight aria-hidden="true" /></span>
          </Link>
        ))}
        <Link to="/industries" className="area-card area-card--all">
          <span className="ind-ico" style={{ '--c': '#4C0E82' }} aria-hidden="true"><FiGrid /></span>
          <h3>All {industries.length} industries</h3>
          <p>Hotels, salons, gyms, home services, startups, professional firms and more — see how we approach your business.</p>
          <span className="area-link">View all <FiArrowRight aria-hidden="true" /></span>
        </Link>
      </div>
    </div>
  </section>
);

export const LatestPosts = () => (
  <section className="areas-section" style={{ background: 'var(--cream)' }}>
    <div className="container">
      <div className="text-center">
        <span className="section-tag">From the blog</span>
        <h2 className="section-title">Guides for <span>Business Owners</span></h2>
        <p className="section-subtitle">Plain-language answers on website costs, Google Maps, ads and more.</p>
      </div>
      <BlogCards items={posts.slice(0, 3)} />
      <div className="text-center" style={{ marginTop: 36 }}>
        <Link to="/blog" className="btn-outline">Read all articles <FiArrowRight aria-hidden="true" /></Link>
      </div>
    </div>
  </section>
);
