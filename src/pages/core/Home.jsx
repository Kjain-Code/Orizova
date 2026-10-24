import React from 'react';
import Seo from '../../components/seo/Seo';
import Hero from '../../components/home/Hero';
import Services from '../../components/home/Services';
import WhyUs from '../../components/home/WhyUs';
import FeaturedWork from '../../components/home/FeaturedWork';
import AreasServed, { homeFaqs } from '../../components/home/AreasServed';
import CtaBand from '../../components/common/CtaBand';
import { IndustriesStrip, LatestPosts } from '../../components/home/HomeExtras';
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
      <Services />
      <WhyUs />
      <IndustriesStrip />
      <FeaturedWork />
      <AreasServed />
      <LatestPosts />
      <CtaBand
        title="Ready to Scale Your Brand?"
        subtitle="From strategy to execution — let's build the growth engine your business deserves."
        buttonText="Get Free Consultation"
      />
    </PageTransition>
  );
};

export default Home;
