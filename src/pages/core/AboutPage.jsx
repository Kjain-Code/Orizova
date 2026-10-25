import React from 'react';
import QuickAnswer from '../../components/content/QuickAnswer';
import sectionAnswers from '../../data/site/answers';
import Seo, { SITE_URL } from '../../components/seo/Seo';
import PageBanner from '../../components/common/PageBanner';
import { AboutStory, AboutValues, AboutServices, AboutWho } from '../../components/sections/About';
import { AtAGlance, HowWeWork } from '../../components/home/HomeSections';
import { ToolsStrip, Reviews } from '../../components/home/TrustSections';
import CtaBand from '../../components/common/CtaBand';
import PageTransition from '../../components/layout/PageTransition';
import { FactSheet } from '../../components/content/ContentBlocks';

// {{TODO: add founder name(s), founding year, team photos and a short real
// story here — they are the strongest trust signals on an About page.}}
const AboutPage = () => {
  return (
    <PageTransition>
      <Seo speakable
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

      <PageBanner crumbs={[{ name: 'About', path: '/about' }]}
        title="About Orizova Digital —"
        highlight="Web Development & Digital Marketing Agency"
        subtitle="We're a full-service digital agency based in Delhi NCR, helping businesses across India get found, chosen and contacted online."
        chips={['Websites', 'SEO', 'Ads', 'Content', 'Pan-India']}
      />
      <AboutStory />
      <AtAGlance />
      <AboutValues />
      <AboutServices />
      <HowWeWork />
      <AboutWho />
      <Reviews />
      <ToolsStrip />
      <section className="ab-facts content-section">
        <div className="container">
          <QuickAnswer answers={sectionAnswers} path="/about" />
          <FactSheet />
        </div>
      </section>
      <CtaBand
        title="Let's Talk About Your Business"
        subtitle="Tell us what you sell and who you want to reach — we'll suggest the smallest set of work that brings enquiries."
        buttonText="Get a Free Consultation"
      />
    </PageTransition>
  );
};

export default AboutPage;
