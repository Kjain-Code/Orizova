import React from "react";
import { m } from "framer-motion";
import { Link } from "react-router-dom";
import { FiArrowRight } from "react-icons/fi";
import services from "../../data/services/services";
import { SquiggleUnderline } from "../common/Doodles";
import ServiceIllustration from "./ServiceIllustrations";
import "./Services.css";

const cardVariants = {
  hidden: { opacity: 0, y: 28 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: (i % 3) * 0.07, duration: 0.5, ease: [0.22, 1, 0.36, 1] },
  }),
};

/* Home "What we do" grid: centred cards with a colourful illustration per
   service (see ServiceIllustrations.jsx). The whole card is one link. */
const Services = () => (
  <section className="services-section">
    <div className="container">
      <m.div
        className="text-center"
        initial={{ opacity: 0, y: 35 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
      >
        <span className="section-tag">What We Do</span>
        <h2 className="section-title">
          Web, SEO &amp; Marketing Services That <span>Drive Results
            <SquiggleUnderline className="title-squiggle" />
          </span>
        </h2>
        <p className="section-subtitle">
          We cover every part of your digital growth — from the website people land on to the ads, search rankings and content that bring them there.
        </p>
      </m.div>

      <div className="services-grid">
        {services.map((service, i) => (
          <m.div
            key={service.id}
            custom={i}
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "0px 0px 15% 0px" }}
            className="svc-cell"
          >
            <Link to={`/services/${service.slug}`} className="svc-card" style={{ "--c": service.color }}>
              <span className="svc-art-wrap">
                <ServiceIllustration slug={service.slug} />
              </span>
              <h3 className="svc-title">{service.title}</h3>
              <p className="svc-desc">{service.shortDesc}</p>
              <span className="svc-link">
                Learn more<span className="sr-only"> about {service.title}</span> <FiArrowRight aria-hidden="true" />
              </span>
            </Link>
          </m.div>
        ))}
        <m.div
          custom={services.length}
          variants={cardVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "0px 0px 15% 0px" }}
          className={`svc-cell${services.length % 3 === 0 ? ' svc-cell--wide' : ''}`}
        >
          <Link to="/contact" className="svc-card svc-card--cta">
            <span className="svc-cta-kicker">Not sure what you need?</span>
            <h3 className="svc-title">Get a free plan for your business</h3>
            <p className="svc-desc">Tell us your goal and budget. We&apos;ll suggest the right mix of website, SEO and ads — no obligation.</p>
            <span className="svc-link">Get free consultation <FiArrowRight aria-hidden="true" /></span>
          </Link>
        </m.div>
      </div>

      <div className="text-center svc-all">
        <Link to="/services" className="btn-outline">View all services <FiArrowRight aria-hidden="true" /></Link>
      </div>
    </div>
  </section>
);

export default Services;
