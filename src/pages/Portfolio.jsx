import React from 'react';
import Seo from '../components/Seo';
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
            url: project.link,
          })),
        }]}
      />

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
