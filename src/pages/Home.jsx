import React from 'react';
import Seo from '../components/Seo';
import Hero from '../components/Hero';
import Services from '../components/Services';
import WhyUs from '../components/WhyUs';
import FeaturedWork from '../components/FeaturedWork';
import AreasServed, { homeFaqs } from '../components/AreasServed';
import CtaBand from '../components/CtaBand';
import PageTransition from '../components/PageTransition';

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
            acceptedAnswer: { '@type': 'Answer', text: a },
          })),
        }]}
      />

      <Hero />
      <Services />
      <WhyUs />
      <FeaturedWork />
      <AreasServed />
      <CtaBand
        title="Ready to Scale Your Brand?"
        subtitle="From strategy to execution — let's build the growth engine your business deserves."
        buttonText="Get Free Consultation"
      />
    </PageTransition>
  );
};

export default Home;
