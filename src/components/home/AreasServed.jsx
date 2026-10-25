import React from 'react';
import { Link } from 'react-router-dom';
import { Inline } from '../content/ContentBlocks';
import { citiesIndex } from '../../data/site/siteIndex';
import './AreasServed.css';

export const homeFaqs = [
  ['Which areas does Orizova serve?', 'Businesses across India — most of our work happens online over calls and WhatsApp, so location is never a barrier. Our team is based in Delhi NCR, and we work with clients from Delhi, Noida, Gurugram and Lucknow to Jaipur, Chandigarh, Hyderabad, Pune, Bengaluru and Mumbai. See [all cities we serve](/locations).'],
  ['What services does Orizova offer?', 'Website development, e-commerce stores, mobile apps, SEO and local SEO, AI search optimization, Google Ads, Meta Ads, social media marketing, video editing and branding — see [all services](/services).'],
  ['Can you get my business recommended in ChatGPT or Google AI Overviews?', 'Nobody can guarantee what an AI tool says, but we can make your business much easier for those tools to find, trust and quote — clear answer-first pages, consistent business details, schema, reviews and genuine mentions. See [AI search optimization](/services/ai-search-optimization).'],
  ['Will I own my website, domain and ad accounts?', 'Yes. Domains are registered in your name, ad accounts and Google Business Profile stay yours, and the website is handed over to you. We work inside your accounts with partner access.'],
  ['How much does a website cost?', 'It depends on the pages and features you need. A business website or landing page costs much less than a custom web app or online store. Share your requirement and we will send a clear, fixed quote.'],
  ['Will my website be SEO-friendly and fast?', 'Yes. Every site we build is mobile-first, optimised for Core Web Vitals and set up with titles, meta descriptions, schema markup, sitemap and Google Search Console.'],
  ['How long does it take to launch a website?', 'A focused business website or landing page usually goes live within a few weeks once content is ready. Larger websites, online stores and apps are planned in clear milestones.'],
  ['Which industries do you work with?', 'Clinics and dentists, skin and hair clinics, real estate, architects and interior designers, restaurants and cafes, schools and coaching, D2C brands, manufacturers and exporters, hotels, salons, gyms, startups and more. Each industry has its own page explaining our approach — see [industries we serve](/industries).'],
  ['Do you run Facebook, Instagram and Google Ads?', 'Yes. We plan, design and manage lead-generation campaigns on Meta and Google, and optimise for lead quality — not just cheap clicks.'],
  ['How will I know if it is working?', 'Calls, WhatsApp clicks and form enquiries are tracked from day one, and you get a plain-language monthly report showing work done, rankings, leads and cost per enquiry.'],
  ['Do you work with businesses outside Delhi NCR?', 'Yes — most of our work is remote. We plan over calls and WhatsApp and share progress online, so a business in Lucknow, Jaipur, Hyderabad or Mumbai gets the same service as one in Noida.'],
];

/* Home-page block: we work pan-India, so instead of a big "locations"
   grid this is a quiet one-line list of cities (still links every city page
   for visitors and Google), followed by the home FAQ. */
const AreasServed = () => (
  <section className="areas-section">
    <div className="container">
      <div className="text-center">
        <span className="section-tag">Pan-India</span>
        <h2 className="section-title">
          One Team, <span>Clients Across India</span>
        </h2>
        <p className="section-subtitle">
          Websites, SEO and ads run over calls, video and WhatsApp — so your city is never a barrier. Based in Delhi NCR, working with businesses everywhere.
        </p>
      </div>

      <nav className="areas-cities" aria-label="Cities we work with">
        {citiesIndex.map((c) => (
          <Link key={c.slug} to={`/locations/${c.slug}`} className="areas-city">{c.city}</Link>
        ))}
        <Link to="/locations" className="areas-city areas-city--all">All cities →</Link>
      </nav>

      <div className="home-faq">
        <h2 className="section-title text-center">Frequently Asked <span>Questions</span></h2>
        {homeFaqs.map(([q, a]) => (
          <details key={q} className="home-faq-item">
            <summary>{q}</summary>
            <p><Inline text={a} /></p>
          </details>
        ))}
      </div>
    </div>
  </section>
);

export default AreasServed;
