import React from 'react';
import QuickAnswer from '../../components/content/QuickAnswer';
import sectionAnswers from '../../data/site/answers';
import Seo, { SITE_URL } from '../../components/seo/Seo';
import projects from '../../data/work/projects';
import PageBanner from '../../components/common/PageBanner';
import Projects from '../../components/sections/Projects';
import CtaBand from '../../components/common/CtaBand';
import PageTransition from '../../components/layout/PageTransition';

const Portfolio = () => {
  return (
    <PageTransition>
      <Seo speakable
        page="portfolio"
        breadcrumbs={[{ name: 'Portfolio', path: '/portfolio' }]}
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
        crumbs={[{ name: 'Portfolio', path: '/portfolio' }]}
        title="Website Development Portfolio —"
        highlight="Projects That Speak"
        subtitle="Live websites we have designed and developed — open them, click around and judge the work for yourself."
        chips={['Web apps', 'Portfolios', 'Corporate sites', 'Dashboards', 'Live work']}
      />
      <h2 className="sr-only">Website projects</h2>
      <Projects />
      <section className="qa-home-section">
        <div className="container">
          <QuickAnswer answers={sectionAnswers} path="/portfolio" className="qa--home" />
        </div>
      </section>
      <CtaBand
        title="Want Results Like These?"
        subtitle="Let's talk about what a project like this could look like for your business."
      />
    </PageTransition>
  );
};

export default Portfolio;
