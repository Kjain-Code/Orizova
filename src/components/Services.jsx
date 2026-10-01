import React, { useState } from "react";
import { m } from "framer-motion";
import { Link } from "react-router-dom";
import {
  FiMonitor,
  FiSmartphone,
  FiTrendingUp,
  FiPenTool,
  FiSearch,
  FiShoppingCart,
  FiInstagram,
  FiTarget,
  FiMousePointer,
  FiMapPin,
  FiVideo,
  FiMail,
  FiArrowRight,
} from "react-icons/fi";
import services from "../data/services";
import { SquiggleUnderline } from "./Doodles";
import "./Services.css";

const iconMap = {
  FiMonitor,
  FiSmartphone,
  FiTrendingUp,
  FiPenTool,
  FiSearch,
  FiShoppingCart,
  FiInstagram,
  FiTarget,
  FiMousePointer,
  FiMapPin,
  FiVideo,
  FiMail,
};

const cardVariants = {
  hidden: {
    opacity: 0,
    y: 30,
    scale: 0.97,
  },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      delay: (i % 3) * 0.06,
      duration: 0.45,
      ease: [0.22, 1, 0.36, 1],
    },
  }),
};

const Services = () => {
  const [hovered, setHovered] = useState(null);

  return (
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
            From building your digital presence to scaling your brand — we cover every step of your growth journey.
          </p>
        </m.div>

        <div className="services-grid">
          {services.map((service, i) => {
            const Icon = iconMap[service.icon];

            return (
              <m.div
                key={service.id}
                className={`service-card ${hovered === i ? "active" : ""}`}
                custom={i}
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "0px 0px 15% 0px" }}
                whileHover={{
                  y: -12,
                  scale: 1.03,
                  rotateX: 4,
                  rotateY: -4,
                }}
                onMouseEnter={() => setHovered(i)}
                onMouseLeave={() => setHovered(null)}
              >
                <div className="service-glow"></div>

                <div
                  className="service-icon-wrap"
                  style={{
                    background: `${service.color}15`,
                  }}
                >
                  {Icon && (
                    <Icon
                      size={30}
                      color={service.color}
                    />
                  )}
                </div>

                <div className="service-content">

                  <h3 className="service-title">
                    {service.title}
                  </h3>

                  <p className="service-desc">
                    {service.shortDesc}
                  </p>

                  <Link to={`/services/${service.slug}`} className="service-btn">
                    Learn More<span className="sr-only"> about {service.title}</span>
                    <FiArrowRight />
                  </Link>

                </div>

                <div
                  className="service-hover-bg"
                  style={{
                    background: service.color,
                  }}
                />

              </m.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default Services;
