import React from "react";
import { motion } from "framer-motion";
import {
  FiMonitor, FiSmartphone, FiTrendingUp, FiPenTool, FiSearch, FiShoppingCart, FiArrowRight,
} from "react-icons/fi";
import { Link } from "react-router-dom";
import "./Services.css";

const Services = () => {
  return (
    <section id="services" className="services-section">
      <div className="container">
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <span className="section-tag">What We Do</span>
          <h2 className="section-title">Services That <span>Drive Results</span></h2>
          <p className="section-subtitle">
            From building your digital presence to scaling your brand — we cover every step of your growth journey.
          </p>
        </motion.div>

        <div className="svc-grid">

          {/* CARD 1 — Website Development */}
          <Link to="/services/website-development" style={{ textDecoration: 'none' }}>
            <motion.div
              className="svc-card svc-c1"
              initial={{ opacity: 0, y: 70 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0 }}
              viewport={{ once: true }}
            >
              <div className="svc1-bg-circles">
                <span /><span /><span />
              </div>
              <div className="svc1-icon-wrap">
                <div className="svc1-ring" />
                <FiMonitor size={30} />
              </div>
              <h3>Website Development</h3>
              <p>Responsive, fast, and conversion-ready websites that deliver real results.</p>
              <div className="svc1-link">Explore Service <FiArrowRight /></div>
            </motion.div>
          </Link>

          {/* CARD 2 — App Development */}
          <Link to="/services/app-development" style={{ textDecoration: 'none' }}>
            <motion.div
              className="svc-card svc-c2"
              initial={{ opacity: 0, y: 70 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <div className="svc2-shimmer" />
              <div className="svc2-float-dots">
                <span /><span /><span /><span />
              </div>
              <div className="svc2-icon-wrap">
                <FiSmartphone size={30} />
              </div>
              <h3>App Development</h3>
              <p>Sleek, scalable, future-ready mobile apps for every device.</p>
              <div className="svc2-arrow"><FiArrowRight size={18} /></div>
            </motion.div>
          </Link>

          {/* CARD 3 — Digital Marketing */}
          <Link to="/services/digital-marketing" style={{ textDecoration: 'none' }}>
            <motion.div
              className="svc-card svc-c3"
              initial={{ opacity: 0, y: 70 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div className="svc3-live-bar" />
              <div className="svc3-icon-wrap">
                <FiTrendingUp size={30} />
              </div>
              <h3>Digital Marketing</h3>
              <p>Social media, performance ads & influencer campaigns that convert.</p>
              <div className="svc3-tags">
                <span>Meta Ads</span><span>Google Ads</span><span>Leads</span>
              </div>
              <div className="svc3-cta">See Results <FiArrowRight /></div>
            </motion.div>
          </Link>

          {/* CARD 4 — Branding & Designing */}
          <Link to="/services/branding-designing" style={{ textDecoration: 'none' }}>
            <motion.div
              className="svc-card svc-c4"
              initial={{ opacity: 0, y: 70 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <div className="svc4-float-shapes">
                <div className="svc4-s1" /><div className="svc4-s2" /><div className="svc4-s3" />
              </div>
              <div className="svc4-icon-wrap">
                <FiPenTool size={30} />
              </div>
              <h3>Branding & Designing</h3>
              <p>Brand identities that stand out — logos, visuals, LinkedIn carousels.</p>
              <div className="svc4-link">See Our Work <FiArrowRight /></div>
            </motion.div>
          </Link>

          {/* CARD 5 — SEO */}
          <Link to="/services/seo" style={{ textDecoration: 'none' }}>
            <motion.div
              className="svc-card svc-c5"
              initial={{ opacity: 0, y: 70 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <div className="svc5-wave">
                <svg viewBox="0 0 200 80" preserveAspectRatio="none">
                  <path d="M0,40 C30,70 60,10 100,40 C140,70 170,10 200,40 L200,80 L0,80 Z" fill="rgba(124,58,237,0.08)" />
                </svg>
              </div>
              <div className="svc5-icon-wrap">
                <FiSearch size={30} />
              </div>
              <h3>Search Engine Optimization</h3>
              <p>Rank higher, attract organic traffic, stay ahead of competition.</p>
              <div className="svc5-rank">
                <span className="svc5-num">#1</span>
                <span className="svc5-label">Google Ranking</span>
              </div>
            </motion.div>
          </Link>

          {/* CARD 6 — E-Commerce */}
          <Link to="/services/ecommerce-solutions" style={{ textDecoration: 'none' }}>
            <motion.div
              className="svc-card svc-c6"
              initial={{ opacity: 0, y: 70 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              viewport={{ once: true }}
            >
              <div className="svc6-reveal-bg" />
              <div className="svc6-float-badge">
                <FiShoppingCart size={18} /> <span>Shop Now</span>
              </div>
              <div className="svc6-icon-wrap">
                <FiShoppingCart size={30} />
              </div>
              <h3>E-Commerce Solutions</h3>
              <p>End-to-end e-commerce platforms with secure payments & smooth UX.</p>
              <div className="svc6-chips">
                <span>Shopify</span><span>Custom</span><span>Payments</span>
              </div>
              <div className="svc6-link">Get Started <FiArrowRight /></div>
            </motion.div>
          </Link>

        </div>
      </div>
    </section>
  );
};

export default Services;
