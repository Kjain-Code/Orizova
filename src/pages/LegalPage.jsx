import React from 'react';
import PageBanner from '../components/PageBanner';
import PageTransition from '../components/PageTransition';
import Seo from '../components/Seo';
import { Prose } from '../components/ContentBlocks';
import legal from '../data/pages/legal';
import { formatDate } from '../components/BlogCards';

const LegalPage = ({ doc }) => {
  const page = legal[doc];
  return (
    <PageTransition>
      <Seo page={doc === 'privacy' ? 'privacy' : 'terms'} breadcrumbs={[{ name: page.title, path: page.path }]} />
      <PageBanner title={page.title} subtitle={`Last updated: ${formatDate(page.updated)}`} actions={false} compact chips={['Privacy', 'Transparency', 'Your data', 'Plain language']} />
      <section className="loc-section content-section">
        <div className="container">
          <div className="article legal">
            {page.sections.map((s) => <Prose key={s.h2} {...s} variant="article" />)}
          </div>
        </div>
      </section>
    </PageTransition>
  );
};

export default LegalPage;
