import React from "react";
import { motion } from "framer-motion";
import { useParams, Link } from "react-router-dom";
import {
  FiCheck, FiArrowLeft, FiPhone, FiMail, FiGlobe, FiArrowRight,
  FiMonitor, FiSmartphone, FiTrendingUp, FiPenTool, FiSearch, FiShoppingCart,
} from "react-icons/fi";
import serviceDetails from "../data/serviceDetails";
import "./ServiceDetail.css";

const fadeUp = {
  hidden: { opacity: 0, y: 50 },
  visible: (i = 0) => ({
    opacity: 1, y: 0,
    transition: { delay: i * 0.1, duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  }),
};

const flipIn = {
  hidden: { opacity: 0, rotateX: -80, y: 30 },
  visible: (i = 0) => ({
    opacity: 1, rotateX: 0, y: 0,
    transition: { delay: i * 0.08, type: "spring", stiffness: 120, damping: 12 },
  }),
};

const slideRight = {
  hidden: { opacity: 0, x: -60 },
  visible: (i = 0) => ({
    opacity: 1, x: 0,
    transition: { delay: i * 0.1, duration: 0.5, ease: [0.22, 1, 0.36, 1] },
  }),
};

const scaleUp = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: (i = 0) => ({
    opacity: 1, scale: 1,
    transition: { delay: i * 0.06, type: "spring", stiffness: 150, damping: 12 },
  }),
};

const slideUp3D = {
  hidden: { opacity: 0, y: 80, rotateX: -20 },
  visible: (i = 0) => ({
    opacity: 1, y: 0, rotateX: 0,
    transition: { delay: i * 0.07, duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  }),
};

const zoomRotate = {
  hidden: { opacity: 0, scale: 0.6, rotate: -10 },
  visible: (i = 0) => ({
    opacity: 1, scale: 1, rotate: 0,
    transition: { delay: i * 0.06, type: "spring", stiffness: 130, damping: 10 },
  }),
};

const slugIcons = {
  "website-development": FiMonitor,
  "app-development": FiSmartphone,
  "digital-marketing": FiTrendingUp,
  "branding-designing": FiPenTool,
  "seo": FiSearch,
  "ecommerce-solutions": FiShoppingCart,
};

const ServiceDetail = () => {
  const { slug } = useParams();
  const data = serviceDetails[slug];
  const SlugIcon = slugIcons[slug] || FiMonitor;

  if (!data) {
    return (
      <div className="sd-page">
        <div className="sd-topbar">
          <Link to="/#services" className="sd-back"><FiArrowLeft /> Back to Services</Link>
        </div>
        <div className="sd-container" style={{ paddingTop: '200px', textAlign: 'center' }}>
          <h1 style={{ color: '#fff', fontSize: '2rem' }}>Service Coming Soon</h1>
          <p style={{ color: 'rgba(255,255,255,0.5)', marginTop: '16px' }}>This service page is under development.</p>
          <Link to="/#services" style={{ color: '#22D3EE', marginTop: '24px', display: 'inline-block' }}>← Go Back to Services</Link>
        </div>
      </div>
    );
  }

  const c = `sd-theme-${slug}`;

  return (
    <div className={`sd-page ${c}`}>

      {/* Topbar */}
      <div className="sd-topbar">
        <Link to="/#services" className="sd-back"><FiArrowLeft /> Back to Services</Link>
      </div>

      {/* Hero */}
      <div className="sd-hero">
        <div className="sd-hero-orb sd-orb-1" />
        <div className="sd-hero-orb sd-orb-2" />
        <div className="sd-hero-orb sd-orb-3" />
        <div className="sd-hero-particles">
          {[...Array(8)].map((_, i) => (
            <motion.div key={i} className="sd-particle"
              style={{ left: `${10 + i * 12}%`, top: `${20 + (i % 3) * 25}%` }}
              animate={{ y: [0, -30, 0], opacity: [0.2, 0.6, 0.2] }}
              transition={{ duration: 3 + i * 0.5, repeat: Infinity, delay: i * 0.3 }}
            />
          ))}
        </div>
        <div className="sd-container">
          <motion.div className="sd-hero-content" initial="hidden" animate="visible">
            <motion.div className="sd-hero-icon" variants={scaleUp} custom={0}><SlugIcon size={40} /></motion.div>
            <motion.span className="sd-tag" variants={fadeUp} custom={0}>{data.tag}</motion.span>
            <motion.h1 className="sd-hero-title" variants={fadeUp} custom={1}>
              {data.title.split('\n').map((line, i) => (
                <span key={i}>{line}{i < data.title.split('\n').length - 1 && <br />}</span>
              ))}
            </motion.h1>
            <motion.p className="sd-hero-sub" variants={fadeUp} custom={2}>{data.subtitle}</motion.p>
          </motion.div>
        </div>
      </div>

      {/* Intro */}
      <div className="sd-container">
        <motion.div className="sd-build" initial="hidden" whileInView="visible" viewport={{ once: true }}>
          <motion.h2 className="sd-title" variants={fadeUp}>{data.introTitle}</motion.h2>
          {data.introTexts.map((text, i) => (
            <motion.p className="sd-text" key={i} variants={fadeUp} custom={i + 1}>
              {text.split(/(\*\*.*?\*\*)/).map((part, j) => {
                if (part.startsWith('**') && part.endsWith('**')) return <strong key={j}>{part.slice(2, -2)}</strong>;
                return part;
              })}
            </motion.p>
          ))}
        </motion.div>
      </div>

      <div className="sd-divider"><span /></div>

      {/* What's Included */}
      <div className="sd-container">
        <motion.div className="sd-section" initial="hidden" whileInView="visible" viewport={{ once: true }}>
          <motion.h2 className="sd-title" variants={fadeUp}>What's <span>Included</span></motion.h2>
          <div className="sd-included-grid">
            {data.included.map((item, i) => (
              <motion.div className={`sd-include-item ${c}-include`} key={i} variants={slideUp3D} custom={i}>
                <span className="sd-include-index">{String(i + 1).padStart(2, '0')}</span>
                <span className="sd-include-label">{item}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      <div className="sd-divider"><span /></div>

      {/* Pricing */}
      <div className="sd-container">
        <motion.div className="sd-section" initial="hidden" whileInView="visible" viewport={{ once: true }}>
          <motion.h2 className="sd-title" variants={fadeUp}>{data.pricingTitle}</motion.h2>
          <div className="sd-pricing-row">
            {data.pricingCards.map((card, i) => (
              <motion.div
                className={`sd-price-box ${card.highlight ? 'sd-price-highlight' : ''} ${c}-price`}
                key={i}
                variants={flipIn}
                custom={i}
              >
                {card.badge && <div className="sd-badge">{card.badge}</div>}
                <h3>{card.name}</h3>
                <div className="sd-price">{card.price}</div>
                {card.note && <p className="sd-price-note">{card.note}</p>}
                {card.label && <div className="sd-price-label">{card.label}</div>}
                {card.list && (
                  <ul className="sd-price-list">
                    {card.list.map((li, j) => (
                      <li key={j}><span className="sd-price-check"><FiCheck size={12} /></span>{li}</li>
                    ))}
                  </ul>
                )}
                {card.extra && <p className="sd-price-extra">{card.extra}</p>}
                <Link to="/#contact" className={`sd-price-btn ${card.outline ? 'sd-price-btn-outline' : ''}`}>
                  {card.btnText} <FiArrowRight />
                </Link>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      <div className="sd-divider"><span /></div>

      {/* Process */}
      <div className="sd-container">
        <motion.div className="sd-section" initial="hidden" whileInView="visible" viewport={{ once: true }}>
          <motion.h2 className="sd-title" variants={fadeUp}>{data.processTitle}</motion.h2>
          <div className="sd-process-row">
            {data.processSteps.map((step, i) => (
              <motion.div className={`sd-process-item ${c}-process`} key={i} variants={slideRight} custom={i}>
                <div className="sd-process-num">{step.num}</div>
                <div className="sd-process-info">
                  <h3>{step.title}</h3>
                  <p>{step.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      <div className="sd-divider"><span /></div>

      {/* Perfect For */}
      <div className="sd-container">
        <motion.div className="sd-section" initial="hidden" whileInView="visible" viewport={{ once: true }}>
          <motion.h2 className="sd-title" variants={fadeUp}>{data.perfectTitle}</motion.h2>
          <div className="sd-perfect-wrap">
            {data.perfectItems.map((item, i) => (
              <motion.div className={`sd-perfect-chip ${c}-perfect`} key={i} variants={zoomRotate} custom={i} whileHover={{ scale: 1.06, y: -4 }}>
                <span className="sd-perfect-dot" />
                <span>{item}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      <div className="sd-divider"><span /></div>

      {/* Why Choose */}
      <div className="sd-container">
        <motion.div className="sd-section" initial="hidden" whileInView="visible" viewport={{ once: true }}>
          <motion.h2 className="sd-title" variants={fadeUp}>{data.whyTitle}</motion.h2>
          <div className="sd-why-wrap">
            {data.whyItems.map((item, i) => (
              <motion.div className={`sd-why-box ${c}-why`} key={i} variants={flipIn} custom={i}>
                <span className="sd-why-badge"><FiCheck size={16} /></span>
                <span>{item}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      <div className="sd-divider"><span /></div>

      {/* CTA */}
      <div className="sd-container">
        <motion.div className="sd-section" initial="hidden" whileInView="visible" viewport={{ once: true }}>
          <motion.h2 className="sd-title" variants={fadeUp}>{data.ctaTitle || "Let's Build Something Amazing Together"}</motion.h2>
          <div className="sd-cta-wrap">
            <motion.div className={`sd-cta-box ${c}-cta`} variants={flipIn} custom={0}>
              <div className="sd-cta-icon-box"><FiPhone size={24} /></div>
              <h4>Phone</h4>
              <a href="tel:7060824503">7060824503</a>
              <a href="tel:8527290722">8527290722</a>
            </motion.div>
            <motion.div className={`sd-cta-box ${c}-cta`} variants={flipIn} custom={1}>
              <div className="sd-cta-icon-box"><FiMail size={24} /></div>
              <h4>Email</h4>
              <a href="mailto:orizovadigital@gmail.com">orizovadigital@gmail.com</a>
            </motion.div>
            <motion.div className={`sd-cta-box ${c}-cta`} variants={flipIn} custom={2}>
              <div className="sd-cta-icon-box"><FiGlobe size={24} /></div>
              <h4>Website</h4>
              <a href="https://orizova-eosin.vercel.app" target="_blank" rel="noreferrer">orizova-eosin.vercel.app</a>
            </motion.div>
          </div>
          <motion.div className="sd-footer-brand" variants={fadeUp} custom={3}>
            <div className="sd-brand-logo"><SlugIcon size={32} /></div>
            <div className="sd-brand-text">ORIZOVA</div>
            <p>Your Vision. Our Creativity. Limitless Possibilities.</p>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default ServiceDetail;