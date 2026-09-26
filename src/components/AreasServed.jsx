import React from 'react';
import { Link } from 'react-router-dom';
import { FiArrowRight, FiMapPin } from 'react-icons/fi';
import locations from '../data/locations';
import './AreasServed.css';

export const homeFaqs = [
  ['Which areas does Orizova serve?', 'We work with businesses in Ghaziabad, Noida, Greater Noida, Delhi and the Chandigarh Tricity (Chandigarh, Mohali, Panchkula), and with clients across India and abroad.'],
  ['What services does Orizova offer?', 'Website development, mobile app development, SEO, digital marketing (Meta & Google Ads, social media), branding and design, and e-commerce stores on Shopify, WooCommerce or custom code.'],
  ['How much does a website cost?', 'It depends on the pages and features you need. A business website or landing page costs much less than a custom web app or online store. Share your requirement and we will send a clear, fixed quote.'],
  ['Will my website be SEO-friendly and fast?', 'Yes. Every site we build is mobile-first, optimised for Core Web Vitals and set up with titles, meta descriptions, schema markup, sitemap and Google Search Console.'],
  ['Do you run Facebook, Instagram and Google Ads?', 'Yes. We plan, design and manage lead-generation campaigns on Meta and Google, and optimise for lead quality — not just cheap clicks.'],
];

/* Home-page block that tells visitors (and Google) exactly where we work,
   links to each city page, and answers the common questions. */
const AreasServed = () => (
  <section className="areas-section">
    <div className="container">
      <div className="text-center">
        <span className="section-tag">Areas We Serve</span>
        <h2 className="section-title">
          Web Development &amp; Digital Marketing in <span>Delhi NCR &amp; Chandigarh</span>
        </h2>
        <p className="section-subtitle">
          Local knowledge, city-specific SEO and ad targeting — for businesses that want customers from their own area.
        </p>
      </div>

      <div className="areas-grid">
        {locations.map((loc) => (
          <Link key={loc.slug} to={`/locations/${loc.slug}`} className="area-card">
            <span className="area-pin"><FiMapPin /></span>
            <h3>{loc.city}</h3>
            <p>{loc.areas.slice(0, 4).join(' · ')}</p>
            <span className="area-link">Agency in {loc.city} <FiArrowRight /></span>
          </Link>
        ))}
      </div>

      <div className="home-faq">
        <h2 className="section-title text-center">Frequently Asked <span>Questions</span></h2>
        {homeFaqs.map(([q, a]) => (
          <details key={q} className="home-faq-item">
            <summary>{q}</summary>
            <p>{a}</p>
          </details>
        ))}
      </div>
    </div>
  </section>
);

export default AreasServed;
