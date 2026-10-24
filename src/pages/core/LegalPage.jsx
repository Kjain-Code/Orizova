import React from 'react';
import PageBanner from '../../components/common/PageBanner';
import PageTransition from '../../components/layout/PageTransition';
import Seo from '../../components/seo/Seo';
import { Prose } from '../../components/content/ContentBlocks';
import legal from '../../data/site/legal';
import { formatDate } from '../../components/common/BlogCards';

const LegalPage = ({ doc }) => {
  const page = legal[doc];
  return (
    <PageTransition>
      <Seo page={doc === 'privacy' ? 'privacy' : 'terms'} breadcrumbs={[{ name: page.title, path: page.path }]} />
      <PageBanner crumbs={[{ name: page.title, path: page.path }]} title={page.title} subtitle={`Last updated: ${formatDate(page.updated)}`} actions={false} compact chips={['Privacy', 'Transparency', 'Your data', 'Plain language']} />
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
