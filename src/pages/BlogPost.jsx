import React from 'react';
import { useParams } from 'react-router-dom';
import PageBanner from '../components/PageBanner';
import PageTransition from '../components/PageTransition';
import CtaBand from '../components/CtaBand';
import Seo, { SITE_URL, SITE_NAME } from '../components/Seo';
import { CtaButtons, Faqs, Prose, Inline, faqSchema } from '../components/ContentBlocks';
import posts, { AUTHOR } from '../data/blog';
import BlogCards, { formatDate } from '../components/BlogCards';
import NotFound from './NotFound';

const slugify = (s) => s.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');

const BlogPost = () => {
  const { slug } = useParams();
  const post = posts.find((p) => p.slug === slug);
  if (!post) return <NotFound />;

  const path = `/blog/${post.slug}`;
  const crumbs = [{ name: 'Blog', path: '/blog' }, { name: post.title, path }];
  const related = posts.filter((p) => p.slug !== post.slug && p.category === post.category)
    .concat(posts.filter((p) => p.slug !== post.slug && p.category !== post.category))
    .slice(0, 3);

  return (
    <PageTransition>
      <Seo
        path={path}
        type="article"
        breadcrumbs={crumbs}
        schema={[
          {
            '@context': 'https://schema.org',
            '@type': 'BlogPosting',
            headline: post.title,
            description: post.excerpt,
            datePublished: post.date,
            dateModified: post.updated || post.date,
            mainEntityOfPage: `${SITE_URL}${path}`,
            image: `${SITE_URL}/og-image.png`,
            author: { '@type': 'Organization', name: AUTHOR.name, url: SITE_URL },
            publisher: { '@id': `${SITE_URL}/#organization`, name: SITE_NAME },
            inLanguage: 'en-IN',
          },
          ...(post.faqs && post.faqs.length ? [faqSchema(post.faqs)] : []),
        ]}
      />
      <PageBanner title={post.title} subtitle={post.excerpt} chips={[post.category, `${post.readMins} min read`, 'Guide', 'Delhi NCR', 'India']} actions={false} />
      <section className="loc-section content-section">
        <div className="container">
          <article className="article">
            <div className="article-byline">
              <span>By <strong>{AUTHOR.name}</strong></span>
              <span>Published <time dateTime={post.date}>{formatDate(post.date)}</time></span>
              <span>{post.readMins} min read</span>
              <span>{post.category}</span>
            </div>
            {post.intro.map((p) => <p className="loc-text" key={p.slice(0, 30)}><Inline text={p} /></p>)}

            <nav className="article-toc" aria-label="In this article">
              <h2>In this article</h2>
              <ol>
                {post.sections.map((s) => (
                  <li key={s.h2}><a href={`#${slugify(s.h2)}`}>{s.h2}</a></li>
                ))}
              </ol>
            </nav>

            {post.sections.map((s) => (
              <div id={slugify(s.h2)} key={s.h2}>
                <Prose {...s} variant="article" />
              </div>
            ))}

            {post.faqs && post.faqs.length > 0 && <Faqs faqs={post.faqs} h2="Quick answers" />}

            <div className="loc-block">
              <h2 className="section-title content-h2">Need help with this?</h2>
              <p className="loc-text">Talk to Orizova Digital — we&apos;ll look at your situation and suggest practical next steps.</p>
              <CtaButtons />
            </div>
          </article>

          <div className="loc-block">
            <span className="section-tag">Keep reading</span>
            <h2 className="section-title content-h2">Related articles</h2>
            <BlogCards items={related} />
          </div>
        </div>
      </section>
      <CtaBand title="Ready to grow online?" subtitle="Websites, SEO and ads for businesses in Delhi NCR and Chandigarh." buttonText="Get Free Consultation" />
    </PageTransition>
  );
};

export default BlogPost;
