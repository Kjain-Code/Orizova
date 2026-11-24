import React from 'react';
import Seo from '../../components/seo/Seo';
import Hero from '../../components/home/Hero';
import Services from '../../components/home/Services';
import WhyUs from '../../components/home/WhyUs';
import FeaturedWork from '../../components/home/FeaturedWork';
import AreasServed, { homeFaqs } from '../../components/home/AreasServed';
import CtaBand from '../../components/common/CtaBand';
import { IndustriesStrip, LatestPosts } from '../../components/home/HomeExtras';
import { IntroSplit, HowWeWork, AtAGlance, TrackingSplit } from '../../components/home/HomeSections';
import { ProblemsWeFix, ToolsStrip, Reviews } from '../../components/home/TrustSections';
import GoalPicker from '../../components/common/GoalPicker';
import PageTransition from '../../components/layout/PageTransition';

const Home = () => {
  return (
    <PageTransition>
      <Seo
        page="home"
        schema={[{
          '@context': 'https://schema.org',
          '@type': 'FAQPage',
          mainEntity: homeFaqs.map(([q, a]) => ({
            '@type': 'Question',
            name: q,
            acceptedAnswer: { '@type': 'Answer', text: a.replace(/\[([^\]]+)\]\([^)]+\)/g, '$1') },
          })),
        }]}
      />

      <Hero />
      <IntroSplit />
      <ProblemsWeFix />
      <Services />
      <GoalPicker />
      <HowWeWork />
      <AtAGlance />
      <IndustriesStrip />
      <TrackingSplit />
      <WhyUs />
      <FeaturedWork />
      <Reviews />
      <ToolsStrip />
      <AreasServed />
      <LatestPosts />
      <CtaBand
        title="Ready for More Enquiries?"
        subtitle="Tell us what you sell and where. We'll show you where your customers are searching — on Google, Maps, AI answers and social — and how to reach them."
        buttonText="Get Free Consultation"
      />
    </PageTransition>
  );
};

export default Home;
