import React from 'react';
import { Link } from 'react-router-dom';
import { FiArrowRight } from 'react-icons/fi';
import PageBanner from '../components/PageBanner';
import PageTransition from '../components/PageTransition';
import CtaBand from '../components/CtaBand';
import Seo, { SITE_URL } from '../components/Seo';
import { CtaButtons } from '../components/ContentBlocks';
import industries from '../data/pages/industries';

const IndustriesPage = () => (
  <PageTransition>
    <Seo
      page="industries"
      breadcrumbs={[{ name: 'Industries', path: '/industries' }]}
      schema={[{
        '@context': 'https://schema.org',
        '@type': 'CollectionPage',
        name: 'Industries we serve',
        url: `${SITE_URL}/industries`,
        mainEntity: {
          '@type': 'ItemList',
          itemListElement: industries.map((i, idx) => ({
            '@type': 'ListItem', position: idx + 1, name: i.name, url: `${SITE_URL}/industries/${i.slug}`,
          })),
        },
      }]}
    />
    <PageBanner
      title="Digital Marketing"
      highlight="by Industry"
      subtitle="Every industry buys differently. These pages explain how we approach websites, SEO and ads for the businesses we work with most."
      chips={['Clinics', 'Architects', 'Real estate', 'Cafes', 'Finance']}
      />
    <section className="loc-section content-section">
      <div className="container">
        <div className="content-prose">
          <h2 className="section-title content-h2">Marketing that fits how your customers decide</h2>
          <p className="loc-text">
            A patient choosing a clinic, a family buying a flat and a couple picking a cafe for the evening all go through very different decisions. The channels, the content and even the questions on a lead form should change with them. Instead of one generic package, we start from your industry: its rules, its customers and what a good enquiry looks like.
          </p>
          <p className="loc-text">
            Choose your industry below to see what we focus on, the compliance points we keep in mind, and the questions business owners in that space usually ask us.
          </p>
        </div>
        <div className="loc-block">
          <div className="loc-services">
            {industries.map((i) => (
              <Link key={i.slug} to={`/industries/${i.slug}`} className="loc-service">
                <h3>{i.name}</h3>
                <p>{i.short}</p>
                <span className="loc-service-link">See how we help <FiArrowRight aria-hidden="true" /></span>
              </Link>
            ))}
          </div>
        </div>
        <div className="loc-block content-prose">
          <h2 className="section-title content-h2">Don&apos;t see your industry?</h2>
          <p className="loc-text">
            We also work with coaching centres, schools, salons, gyms, retailers, manufacturers, consultants and startups. Tell us about your business and we&apos;ll explain what we would do first.
          </p>
          <CtaButtons />
        </div>
      </div>
    </section>
    <CtaBand title="Let's plan your growth" subtitle="A short call is enough to suggest the right first steps for your business." buttonText="Get Free Consultation" />
  </PageTransition>
);

export default IndustriesPage;
