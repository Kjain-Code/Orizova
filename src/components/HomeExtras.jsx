import React from 'react';
import { Link } from 'react-router-dom';
import { FiArrowRight } from 'react-icons/fi';
import { industriesIndex as industries, postsIndex as posts } from '../data/siteIndex';
import BlogCards from './BlogCards';
import './AreasServed.css';
import './ContentPage.css';

/* Home-page strips: industries we serve + latest guides. Reuse the
   AreasServed card styles so they look native. */
export const IndustriesStrip = () => (
  <section className="areas-section home-industries">
    <div className="container">
      <div className="text-center">
        <span className="section-tag">Industries</span>
        <h2 className="section-title">Marketing Built for <span>Your Industry</span></h2>
        <p className="section-subtitle">
          Clinics, architects, real estate, restaurants and finance professionals each buy differently — so we plan differently.
        </p>
      </div>
      <div className="areas-grid">
        {industries.map((ind) => (
          <Link key={ind.slug} to={`/industries/${ind.slug}`} className="area-card">
            <h3>{ind.name}</h3>
            <p>{ind.short}</p>
            <span className="area-link">How we help <FiArrowRight aria-hidden="true" /></span>
          </Link>
        ))}
        <Link to="/industries" className="area-card">
          <h3>All industries</h3>
          <p>Coaching, retail, startups, manufacturers and more — see how we approach your business.</p>
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
