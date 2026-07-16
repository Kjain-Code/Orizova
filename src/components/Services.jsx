import React from "react";
import { motion } from "framer-motion";
import {
  FiMonitor, FiSmartphone, FiTrendingUp, FiPenTool, FiSearch, FiShoppingCart, FiArrowRight,
} from "react-icons/fi";
import { Link } from "react-router-dom";
import "./Services.css";

const services = [
  {
    slug: "website-development",
    icon: <FiMonitor size={30} />,
    title: "Website Development",
    desc: "Responsive, fast, and conversion-ready websites that deliver real results.",
  },
  {
    slug: "app-development",
    icon: <FiSmartphone size={30} />,
    title: "App Development",
    desc: "Sleek, scalable, future-ready mobile apps for every device.",
  },
  {
    slug: "digital-marketing",
    icon: <FiTrendingUp size={30} />,
    title: "Digital Marketing",
    desc: "Social media, performance ads & influencer campaigns that convert.",
  },
  {
    slug: "branding-designing",
    icon: <FiPenTool size={30} />,
    title: "Branding & Designing",
    desc: "Brand identities that stand out — logos, visuals, LinkedIn carousels.",
  },
  {
    slug: "seo",
    icon: <FiSearch size={30} />,
    title: "Search Engine Optimization",
    desc: "Rank higher, attract organic traffic, stay ahead of competition.",
  },
  {
    slug: "ecommerce-solutions",
    icon: <FiShoppingCart size={30} />,
    title: "E-Commerce Solutions",
    desc: "End-to-end e-commerce platforms with secure payments & smooth UX.",
  },
];

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
          {services.map((svc, i) => (
            <Link key={svc.slug} to={`/services/${svc.slug}`} style={{ textDecoration: 'none' }}>
              <motion.div
                className="svc-card"
                initial={{ opacity: 0, y: 70 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="svc-card-bg-orb svc-card-orb-1" />
                <div className="svc-card-bg-orb svc-card-orb-2" />
                <div className="svc-shimmer" />
                <div className="svc-float-dots">
                  <span /><span /><span /><span />
                </div>
                <div className="svc-icon-wrap">
                  <div className="svc-icon-ring" />
                  {svc.icon}
                </div>
                <h3>{svc.title}</h3>
                <p>{svc.desc}</p>
                <div className="svc-link">Explore Service <FiArrowRight /></div>
              </motion.div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;