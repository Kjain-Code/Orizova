import React from 'react';
import Seo, { SITE_URL } from '../components/Seo';
import PageBanner from '../components/PageBanner';
import About from '../components/About';
import CtaBand from '../components/CtaBand';
import PageTransition from '../components/PageTransition';
import { Cards, Process, Prose, LinkChips } from '../components/ContentBlocks';
import { industriesIndex } from '../data/siteIndex';
import locations from '../data/locations';

// {{TODO: add founder name(s), founding year, team photos and a short real
// story here — they are the strongest trust signals on an About page.}}
const AboutPage = () => {
  return (
    <PageTransition>
      <Seo
        page="about"
        breadcrumbs={[{ name: 'About', path: '/about' }]}
        schema={[{
          '@context': 'https://schema.org',
          '@type': 'AboutPage',
          name: 'About Orizova Digital',
          url: `${SITE_URL}/about`,
          about: { '@id': `${SITE_URL}/#organization` },
        }]}
      />

      <PageBanner
        title="About Orizova — A Team That Turns"
        highlight="Vision Into Reality"
        subtitle="We're a full-service digital agency helping businesses in Delhi NCR, Chandigarh and across India grow smarter, faster and stronger online."
        chips={['Websites', 'SEO', 'Ads', 'Content', 'Pan-India']}
      />
      <About />
      <section className="loc-section content-section">
        <div className="container">
          <Prose
            tag="What we do"
            h2="Websites, marketing and content — under one roof"
            paras={[
              'Orizova Digital builds websites and apps, and helps businesses get found and chosen online through SEO, Google Ads, Meta Ads, social media and video. Having all of this in one team means your website, your ads and your content are planned together instead of by three different vendors who never talk to each other.',
              'We mostly work with local and growing businesses — clinics, architects, real-estate firms, restaurants and cafes, financial professionals, startups and service companies — across [Ghaziabad](/locations/ghaziabad), [Noida](/locations/noida), [Delhi](/locations/delhi) and the [Chandigarh Tricity](/locations/chandigarh).',
            ]}
          />
          <Cards
            tag="How we work"
            h2="What you can expect from us"
            items={[
              { title: 'Plain language', desc: 'No jargon-filled reports. You will always know what we are doing, why, and what it costs.' },
              { title: 'Fixed, written quotes', desc: 'Scope and price are agreed in writing before work starts.' },
              { title: 'You own everything', desc: 'Domains, websites, ad accounts, pages and data stay in your name.' },
              { title: 'Honest marketing', desc: 'No fake reviews, spam links or promises of guaranteed rankings.' },
              { title: 'Built to be measured', desc: 'Calls, WhatsApp clicks and forms are tracked so results are visible.' },
              { title: 'Long-term thinking', desc: 'We would rather build something that keeps working than chase a quick spike.' },
            ]}
          />
          <Process
            h2="How a project with us runs"
            steps={[
              { title: 'Listen', desc: 'Understand your business, customers and goals.' },
              { title: 'Plan', desc: 'Recommend the smallest set of work that moves the needle.' },
              { title: 'Build', desc: 'Design, develop, write and set up tracking.' },
              { title: 'Launch', desc: 'Go live with checks on speed, SEO and tracking.' },
              { title: 'Improve', desc: 'Monthly reviews and steady improvements.' },
            ]}
          />
          <LinkChips
            h2="Industries we focus on"
            links={industriesIndex.map((i) => ({ to: `/industries/${i.slug}`, label: i.name }))}
          />
          <LinkChips
            h2="Where we work"
            links={locations.map((l) => ({ to: `/locations/${l.slug}`, label: `Digital agency in ${l.city}` }))}
          />
        </div>
      </section>
      <CtaBand
        title="Let's Work Together"
        subtitle="Have a project in mind? We'd love to hear about it."
      />
    </PageTransition>
  );
};

export default AboutPage;
