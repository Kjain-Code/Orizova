import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  FiMonitor,
  FiSmartphone,
  FiTrendingUp,
  FiPenTool,
  FiSearch,
  FiShoppingCart,
  FiMail,
  FiArrowRight,
} from "react-icons/fi";
import services from "../data/services";
import "./Services.css";

const iconMap = {
  FiMonitor,
  FiSmartphone,
  FiTrendingUp,
  FiPenTool,
  FiSearch,
  FiShoppingCart,
  FiMail,
};

const cardVariants = {
  hidden: {
    opacity: 0,
    y: 60,
    scale: 0.9,
  },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      delay: i * 0.08,
      duration: 0.65,
      ease: [0.22, 1, 0.36, 1],
    },
  }),
};

const Services = () => {
  const [hovered, setHovered] = useState(null);

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

          <h2 className="section-title">
            Services That <span>Drive Results</span>
          </h2>

          <p className="section-subtitle">
            From building your digital presence to scaling your brand — we cover every step of your growth journey.
          </p>
        </motion.div>

        <div className="services-grid">
          {services.map((service, i) => {
            const Icon = iconMap[service.icon];

            return (
              <motion.div
                key={service.id}
                className={`service-card ${hovered === i ? "active" : ""}`}
                custom={i}
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
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

                  <button className="service-btn">
                    Learn
                    <FiArrowRight />
                  </button>

                </div>

                <div
                  className="service-hover-bg"
                  style={{
                    background: service.color,
                  }}
                />

              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default Services;