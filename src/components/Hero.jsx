import React from 'react';
import { Link } from 'react-router-dom';
import { m } from 'framer-motion';
import { FiArrowRight, FiMapPin } from 'react-icons/fi';
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';
import { ArrowDoodle, StarDoodle, SparkleDoodle, RocketCharacter } from './Doodles';
import './Hero.css';
import logo from '../assets/logo.webp';
import locations from '../data/locations';

const cities = locations.map(({ slug, city }) => ({ slug, city }));

const stats = [
  { value: 150, suffix: '+', label: 'Projects Delivered' },
  { value: 98, suffix: '%', label: 'Client Satisfaction' },
  { value: 50, suffix: '+', label: 'Happy Clients' },
  { value: 5, suffix: '+', label: 'Years Experience' },
];

const floatingCards = [
  { icon: '📈', title: 'Business Growth', value: '150%', sub: 'Avg Revenue Increase' },
  { icon: '🎯', title: 'Total Leads', value: '100K+', sub: 'Generated for Clients' },
  { icon: '⭐', title: 'Client First', value: '5.0', sub: 'Average Rating' },
];

const marqueeItems = ['Web Development', 'App Development', 'SEO', 'Branding', 'Digital Marketing', 'E-Commerce'];

const Hero = () => {
  const { ref, inView } = useInView({ threshold: 0.3, triggerOnce: true });

  return (
    <section className="hero">
      <div className="hero-bg-shapes">
        <div className="shape shape-1" />
        <div className="shape shape-2" />
        <div className="shape shape-3" />
      </div>

      <div className="container hero-inner">
        <div className="hero-content">
          {/* Rendered without a JS entrance animation on purpose: this block is
              the Largest Contentful Paint, so it must paint on first frame. */}
          <h1 className="hero-kicker">
            <span className="hero-kicker-dot" aria-hidden="true" />
            Website Development &amp; Digital Marketing Agency in Ghaziabad, Noida, Delhi &amp; Chandigarh
          </h1>

          <p className="hero-title">
            From Strategy to <span className="highlight-gold gradient-text">Scale</span> —<br />
            We Build Growth <span className="highlight-purple accent-serif">That Lasts</span>
            <StarDoodle className="hero-title-star" />
          </p>

          <p className="hero-desc">
            Orizova Co. is a web development company and digital marketing agency for Delhi NCR &amp; Chandigarh. We build fast, SEO-ready websites and apps, and run Google &amp; Meta Ads that turn visitors into enquiries.
          </p>

          <div className="hero-btns">
            <div className="hero-cta-wrap">
              <Link to="/contact" className="btn-primary">
                Get Free Consultation <FiArrowRight />
              </Link>
              <ArrowDoodle className="hero-cta-doodle" />
            </div>
            <Link to="/services" className="btn-outline">
              Our Services
            </Link>
          </div>

          <nav className="hero-cities" aria-label="Cities we serve">
            <FiMapPin aria-hidden="true" />
            {cities.map((c, i) => (
              <React.Fragment key={c.slug}>
                {i > 0 && <span className="hero-cities-sep" aria-hidden="true">·</span>}
                <Link to={`/locations/${c.slug}`}>{c.city}</Link>
              </React.Fragment>
            ))}
          </nav>

          <div className="hero-stats" ref={ref}>
            {stats.map((stat, i) => (
              <div className="stat-item" key={i}>
                <p className="stat-value">
                  {inView ? (
                    <CountUp end={stat.value} duration={2.5} suffix={stat.suffix} />
                  ) : `${stat.value}${stat.suffix}`}
                </p>
                <p className="stat-label">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="hero-visual" aria-hidden="true">
          <SparkleDoodle className="hero-visual-sparkle" />
          <m.div
            className="hero-visual-rocket"
            animate={{ y: [0, -12, 0], rotate: [-4, 4, -4] }}
            transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
          >
            <RocketCharacter />
          </m.div>
          <div className="hero-card-main">
            <img src={logo} alt="Orizova Co. logo" width="108" height="80" decoding="async" style={{ height: '80px', width: 'auto', objectFit: 'contain', marginBottom: '12px' }} />
            <p>Your Digital Growth Partner</p>
            <div className="services-chips">
              {marqueeItems.map(s => (
                <span key={s} className="chip">{s}</span>
              ))}
            </div>
          </div>

          {floatingCards.map((card, i) => (
            <m.div
              key={i}
              className={`floating-card fc-${i + 1}`}
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 3 + i, repeat: Infinity, ease: 'easeInOut', delay: i * 0.5 }}
            >
              <span className="fc-icon">{card.icon}</span>
              <div>
                <p className="fc-title">{card.title}</p>
                <h4 className="fc-value">{card.value}</h4>
                <p className="fc-sub">{card.sub}</p>
              </div>
            </m.div>
          ))}
        </div>
      </div>

      <div className="hero-marquee">
        <div className="marquee-track">
          {[...marqueeItems, ...marqueeItems].map((item, i) => (
            <span className="marquee-item" key={i}>
              {item} <span className="marquee-dot">✦</span>
            </span>
          ))}
        </div>
      </div>

      <m.div
        className="scroll-indicator"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="scroll-dot" />
      </m.div>
    </section>
  );
};

export default Hero;
