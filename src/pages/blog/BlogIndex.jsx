import React from 'react';
import QuickAnswer from '../../components/content/QuickAnswer';
import sectionAnswers from '../../data/site/answers';
import PageBanner from '../../components/common/PageBanner';
import PageTransition from '../../components/layout/PageTransition';
import CtaBand from '../../components/common/CtaBand';
import Seo, { SITE_URL } from '../../components/seo/Seo';
import posts from '../../data/blog';
import BlogCards, { formatDate } from '../../components/common/BlogCards';

export { BlogCards, formatDate };

const BlogIndex = () => (
  <PageTransition>
    <Seo speakable
      page="blog"
      breadcrumbs={[{ name: 'Blog', path: '/blog' }]}
      schema={[{
        '@context': 'https://schema.org',
        '@type': 'Blog',
        name: 'Orizova Digital Blog',
        url: `${SITE_URL}/blog`,
        publisher: { '@id': `${SITE_URL}/#organization` },
        blogPost: posts.map((p) => ({
          '@type': 'BlogPosting',
          headline: p.title,
          url: `${SITE_URL}/blog/${p.slug}`,
          datePublished: p.date,
        })),
      }]}
    />
    <PageBanner crumbs={[{ name: 'Blog', path: '/blog' }]}
      title="Practical Guides on Websites, SEO"
      highlight="& Digital Marketing"
      subtitle="Plain-language guides for business owners across India — website costs, Google Maps, ads, and marketing for clinics, real estate, cafes, architects and finance professionals."
      chips={['Website costs', 'Google Maps', 'Meta vs Google', 'Local SEO', 'Reels']}
      actions={false}
      />
    <section className="loc-section content-section">
      <div className="container">
        <div className="content-prose" style={{ marginBottom: 40 }}>
          <p className="loc-text">
            We write these guides to answer the questions business owners ask us most often. No jargon, no secret formulas — just what works, what to avoid and how to decide for your own business.
          </p>
        </div>
        <BlogCards items={posts} headingLevel={2} />
        <div style={{ marginTop: 56 }}><QuickAnswer answers={sectionAnswers} path="/blog" /></div>
      </div>
    </section>
    <CtaBand title="Prefer to talk it through?" subtitle="Send us your question on WhatsApp — we're happy to point you in the right direction." buttonText="Contact Us" />
  </PageTransition>
);

export default BlogIndex;
