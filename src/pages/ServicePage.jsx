import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { FiArrowRight, FiCheckCircle } from 'react-icons/fi';
import PageBanner from '../components/PageBanner';
import PageTransition from '../components/PageTransition';
import Seo, { SITE_URL } from '../components/Seo';
import services from '../data/services';
import NotFound from './NotFound';

const serviceFaqs = {
  'website-development': [
    ['What kind of websites do you build?', 'We build business and corporate websites, landing pages, portfolios, ecommerce websites and custom web applications.'],
    ['Can you maintain an existing website?', 'Yes. Share your current website and goals so we can recommend the right development or support plan.'],
  ],
  'app-development': [
    ['Do you build for both iOS and Android?', 'The service includes iOS, Android and cross-platform app development, depending on the product requirements.'],
    ['Can you help with app UI and maintenance?', 'Yes. App UI/UX design, deployment support and ongoing maintenance are part of the listed service scope.'],
  ],
  'digital-marketing': [
    ['Which digital marketing channels do you support?', 'The current offering includes social media, performance marketing and PPC ads, influencer marketing, content marketing and email marketing.'],
    ['How do you choose the right channel mix?', 'We start with your business goal, audience and available assets, then recommend a practical mix of channels and content.'],
  ],
  'branding-designing': [
    ['What does branding work include?', 'Branding and design work can include logos, identity guidelines, social media and LinkedIn carousels, packaging and pitch decks.'],
    ['Can you work with an existing brand identity?', 'Yes. We can extend an existing identity or help create a clearer, more consistent visual system.'],
  ],
  seo: [
    ['What SEO services do you provide?', 'The offering includes on-page, technical, local and off-page SEO, plus keyword research and content SEO.'],
    ['How long does SEO take?', 'Timing depends on your site, competition and starting point. We begin with research and technical priorities before setting a realistic plan.'],
  ],
  'ecommerce-solutions': [
    ['Which ecommerce platforms do you work with?', 'The listed service includes Shopify and WooCommerce development, as well as custom ecommerce experiences.'],
    ['Can you integrate payments and inventory workflows?', 'Yes. Payment gateway integration, catalog UX, inventory and order management are included in the service scope.'],
  ],
};

const ServicePage = () => {
  const { slug } = useParams();
  const service = services.find((item) => item.slug === slug);

  if (!service) {
    return <NotFound />;
  }

  const faqs = serviceFaqs[service.slug] || [];
  const title = `${service.title} Services | Orizova Co.`;
  const description = `${service.fullDesc} Orizova Co. works with businesses in India and globally.`;

  return (
    <PageTransition>
      <Seo
        title={title}
        description={description}
        path={`/services/${service.slug}`}
        schema={[
          {
            '@context': 'https://schema.org',
            '@type': 'Service',
            name: service.title,
            description: service.fullDesc,
            provider: { '@type': 'Organization', name: 'Orizova Co.' },
            areaServed: 'India and global clients',
            serviceType: service.title,
            url: `${SITE_URL}/services/${service.slug}`,
          },
          ...(faqs.length ? [{
            '@context': 'https://schema.org',
            '@type': 'FAQPage',
            mainEntity: faqs.map(([question, answer]) => ({
              '@type': 'Question',
              name: question,
              acceptedAnswer: { '@type': 'Answer', text: answer },
            })),
          }] : []),
        ]}
      />
      <PageBanner
        tag="Service"
        title={service.title}
        highlight="Built Around Your Goals"
        subtitle={service.fullDesc}
      />
      <section className="services-detail-section">
        <div className="container">
          <div className="service-detail-content">
            <div>
              <span className="section-tag">What is included</span>
              <h2 className="section-title">A practical scope for your next project</h2>
              <p className="section-subtitle" style={{ marginLeft: 0 }}>
                We shape the work around your business context, audience and delivery needs. Start with the areas that matter most and build from there.
              </p>
              <div className="about-points">
                {service.subServices.map((item) => (
                  <div className="about-point" key={item}>
                    <FiCheckCircle size={18} color="var(--primary)" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <span className="section-tag">Our approach</span>
              <h2 className="section-title">Clear thinking, careful execution</h2>
              <p className="about-desc">We begin by understanding the problem, audience and success criteria. From there, the work moves through planning, production, review and launch or handover.</p>
              <p className="about-desc">You can combine this service with other capabilities such as development, design, marketing or SEO when the project calls for a broader digital solution.</p>
              <Link to="/contact" className="btn-primary" style={{ marginTop: 16 }}>
                Discuss this service <FiArrowRight />
              </Link>
            </div>
          </div>
          {faqs.length > 0 && (
            <div style={{ marginTop: 72 }}>
              <span className="section-tag">FAQs</span>
              <h2 className="section-title">Common questions</h2>
              {faqs.map(([question, answer]) => (
                <div key={question} style={{ margin: '24px 0', maxWidth: 760 }}>
                  <h3>{question}</h3>
                  <p className="about-desc">{answer}</p>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>
    </PageTransition>
  );
};

export default ServicePage;
