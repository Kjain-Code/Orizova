import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FiArrowRight } from 'react-icons/fi';
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';
import { ArrowDoodle, StarDoodle, SparkleDoodle, RocketCharacter } from './Doodles';
import './Hero.css';
import logo from '../assets/logo.png';

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
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="section-tag">🚀 Digital Growth Agency</span>
          </motion.div>

          <motion.h1
            className="hero-title"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            From Strategy to <span className="highlight-gold gradient-text">Scale</span> —<br />
            We Build Growth <span className="highlight-purple accent-serif">That Lasts</span>
            <StarDoodle className="hero-title-star" />
          </motion.h1>

          <motion.p
            className="hero-desc"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            Orizova Co. helps businesses design smart systems, build powerful digital presence, and scale faster with clarity and confidence.
          </motion.p>

          <motion.div
            className="hero-btns"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
          >
            <div className="hero-cta-wrap">
              <Link to="/contact">
                <button className="btn-primary">
                  Get Free Consultation <FiArrowRight />
                </button>
              </Link>
              <ArrowDoodle className="hero-cta-doodle" />
            </div>
            <Link to="/services">
              <button className="btn-outline">
                Our Services
              </button>
            </Link>
          </motion.div>

          <motion.div
            className="hero-stats"
            ref={ref}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
          >
            {stats.map((stat, i) => (
              <div className="stat-item" key={i}>
                <h3>
                  {inView && (
                    <CountUp end={stat.value} duration={2.5} suffix={stat.suffix} />
                  )}
                </h3>
                <p>{stat.label}</p>
              </div>
            ))}
          </motion.div>
        </div>

        <motion.div
          className="hero-visual"
          initial={{ opacity: 0, x: 60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <SparkleDoodle className="hero-visual-sparkle" />
          <motion.div
            className="hero-visual-rocket"
            animate={{ y: [0, -12, 0], rotate: [-4, 4, -4] }}
            transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
          >
            <RocketCharacter />
          </motion.div>
          <div className="hero-card-main">
            <img src={logo} alt="Orizova Co." style={{ height: '80px', objectFit: 'contain', marginBottom: '12px' }} />
            <p>Your Digital Growth Partner</p>
            <div className="services-chips">
              {marqueeItems.map(s => (
                <span key={s} className="chip">{s}</span>
              ))}
            </div>
          </div>

          {floatingCards.map((card, i) => (
            <motion.div
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
            </motion.div>
          ))}
        </motion.div>
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

      <motion.div
        className="scroll-indicator"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="scroll-dot" />
      </motion.div>
    </section>
  );
};

export default Hero;
