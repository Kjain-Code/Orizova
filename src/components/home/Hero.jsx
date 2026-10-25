import React from 'react';
import { Link } from 'react-router-dom';
import { m } from 'framer-motion';
import { FiArrowRight } from 'react-icons/fi';
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';
import { ArrowDoodle, StarDoodle, SparkleDoodle, RocketCharacter } from '../common/Doodles';
import './Hero.css';
import logo from '../../assets/logo.webp';
import services from '../../data/services/services';
import { industriesIndex } from '../../data/site/siteIndex';
import { waLink } from '../../data/site/contact';

// Only verifiable facts here. The previous numbers (150+ projects, 98%
// satisfaction, 50+ clients, 5+ years, 150% revenue, 100K+ leads, 5.0 rating)
// could not be verified and were removed. {{TODO: add real, verifiable stats}}
const stats = [
  { value: services.length, suffix: '+', label: 'Services Under One Roof' },
  { value: industriesIndex.length, suffix: '+', label: 'Industries We Plan For' },
  { text: 'Free', label: 'First Consultation' },
];

const floatingCards = [
  { icon: '📈', title: 'Leads, Not Likes', value: 'Meta & Google', sub: 'Ads tracked to enquiries' },
  { icon: '📍', title: 'Local SEO', value: 'Google Maps', sub: 'Show up near you' },
  { icon: '✨', title: 'AI Search', value: 'ChatGPT & Gemini', sub: 'Get named in AI answers' },
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
            Website Development &amp; Digital Marketing Agency in India
          </h1>

          <p className="hero-title">
            Websites, SEO, Ads &amp; <span className="highlight-gold gradient-text">Content</span> —<br />
            One Team for <span className="highlight-purple accent-serif">More Enquiries</span>
            <StarDoodle className="hero-title-star" />
          </p>

          <p className="hero-desc">
            Orizova Digital is a web development company and digital marketing agency based in Delhi NCR, working with businesses across India. We build fast, SEO-ready websites, get you ranking on Google, Maps and AI answers like ChatGPT, and run Google &amp; Meta Ads tracked to real calls and WhatsApp enquiries.
          </p>

          <div className="hero-btns">
            <div className="hero-cta-wrap">
              <Link to="/contact" className="btn-primary">
                Get Free Consultation <FiArrowRight />
              </Link>
              <ArrowDoodle className="hero-cta-doodle" />
            </div>
            <a
              href={waLink('Hi Orizova Digital, I saw your website. I want more enquiries for my business — can we talk?')}
              className="btn-outline" target="_blank" rel="noopener noreferrer"
            >
              WhatsApp Us
            </a>
          </div>


          <div className="hero-stats" ref={ref}>
            {stats.map((stat, i) => (
              <div className="stat-item" key={i}>
                <p className="stat-value">
                  {stat.text ? stat.text : inView ? (
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
            <img src={logo} alt="Orizova Digital logo" width="108" height="80" decoding="async" style={{ height: '80px', width: 'auto', objectFit: 'contain', marginBottom: '12px' }} />
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
                <p className="fc-value">{card.value}</p>
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
