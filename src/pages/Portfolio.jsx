import React from 'react';
import { Helmet } from 'react-helmet-async';
import PageBanner from '../components/PageBanner';
import Projects from '../components/Projects';
import CtaBand from '../components/CtaBand';
import PageTransition from '../components/PageTransition';

const Portfolio = () => {
  return (
    <PageTransition>
      <Helmet>
        <title>Portfolio | Orizova Co. — Our Work & Client Results</title>
        <meta name="description" content="Browse Orizova Co.'s portfolio of website, app, e-commerce, branding, SEO, and digital marketing projects with real, measurable results." />
      </Helmet>

      <PageBanner
        tag="Our Work"
        title="Projects That"
        highlight="Speak for Themselves"
        subtitle="A look at the websites, apps, and campaigns we've built — and the results they delivered."
      />
      <Projects />
      <CtaBand
        title="Want Results Like These?"
        subtitle="Let's talk about what a project like this could look like for your business."
      />
    </PageTransition>
  );
};

export default Portfolio;
