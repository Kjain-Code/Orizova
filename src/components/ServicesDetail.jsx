import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  FiMonitor,
  FiSmartphone,
  FiTrendingUp,
  FiPenTool,
  FiSearch,
  FiShoppingCart,
  FiArrowRight,
} from "react-icons/fi";
import services from "../data/services";
import { BulbCharacter, MagnifierCharacter, TargetCharacter, RocketCharacter } from "./Doodles";
import "./ServicesDetail.css";

const iconMap = {
  FiMonitor,
  FiSmartphone,
  FiTrendingUp,
  FiPenTool,
  FiSearch,
  FiShoppingCart,
};

const characters = [RocketCharacter, BulbCharacter, TargetCharacter, MagnifierCharacter];

const ServicesDetail = () => {
  return (
    <section className="services-detail-section">
      <div className="container">
        <div className="services-detail-list">
          {services.map((service, i) => {
            const Icon = iconMap[service.icon];
            const Character = characters[i % characters.length];

            return (
              <motion.div
                key={service.id}
                className="service-detail-card"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: (i % 2) * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="service-detail-character">
                  <Character />
                </div>

                <div
                  className="service-detail-icon"
                  style={{ background: `${service.color}18`, color: service.color }}
                >
                  {Icon && <Icon size={32} />}
                </div>

                <h3 className="service-detail-title">{service.title}</h3>
                <p className="service-detail-desc">{service.fullDesc}</p>

                <div className="service-detail-subs">
                  {service.subServices.map((sub) => (
                    <span
                      key={sub}
                      className="sub-chip"
                      style={{ borderColor: `${service.color}40`, color: service.color }}
                    >
                      {sub}
                    </span>
                  ))}
                </div>

                <Link to="/contact" className="service-detail-link">
                  Get Started <FiArrowRight />
                </Link>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ServicesDetail;
