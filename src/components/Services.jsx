import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FiMonitor, FiSmartphone, FiTrendingUp, FiPenTool, FiSearch, FiShoppingCart, FiMail, FiArrowRight } from 'react-icons/fi';
import services from '../data/services';
import './Services.css';

const iconMap = {
  FiMonitor, FiSmartphone, FiTrendingUp, FiPenTool, FiSearch, FiShoppingCart, FiMail
};

const Services = () => {
  const [hovered, setHovered] = useState(null);

  return (
    <section id="services" className="services-section">
      <div className="container">
        <div className="text-center" data-aos="fade-up">
          <span className="section-tag">What We Do</span>
          <h2 className="section-title">Services That <span>Drive Results</span></h2>
          <p className="section-subtitle">
            From building your digital presence to scaling your brand — we cover every step of your growth journey.
          </p>
        </div>

        <div className="services-grid">
          {services.map((service, i) => {
            const Icon = iconMap[service.icon];
            return (
              <motion.div
                key={service.id}
                className={`service-card ${hovered === i ? 'hovered' : ''}`}
                onMouseEnter={() => setHovered(i)}
                onMouseLeave={() => setHovered(null)}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                viewport={{ once: true }}
                whileHover={{ y: -8 }}
              >
                <div className="service-icon-wrap" style={{ background: service.color + '15' }}>
                  {Icon && <Icon size={28} color={service.color} />}
                </div>
                <h3 className="service-title">{service.title}</h3>
                <p className="service-desc">{service.shortDesc}</p>
                <div className="service-arrow">
                  <FiArrowRight size={18} />
                </div>
                <div className="service-hover-bg" style={{ background: service.color }} />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;