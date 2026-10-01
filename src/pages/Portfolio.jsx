import React from 'react';
import Seo, { SITE_URL } from '../components/Seo';
import projects from '../data/projects';
import PageBanner from '../components/PageBanner';
import Projects from '../components/Projects';
import CtaBand from '../components/CtaBand';
import PageTransition from '../components/PageTransition';

const Portfolio = () => {
  return (
    <PageTransition>
      <Seo
        page="portfolio"
        schema={[{
          '@context': 'https://schema.org',
          '@type': 'ItemList',
          itemListElement: projects.map((project, index) => ({
            '@type': 'ListItem',
            position: index + 1,
            name: project.title,
            url: `${SITE_URL}/portfolio/${project.slug}`,
          })),
        }]}
      />

      <PageBanner
        title="Website Development Portfolio —"
        highlight="Projects That Speak"
        subtitle="Live websites we have designed and developed — open them, click around and judge the work for yourself."
        chips={['Web apps', 'Portfolios', 'Corporate sites', 'Dashboards', 'Live work']}
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
