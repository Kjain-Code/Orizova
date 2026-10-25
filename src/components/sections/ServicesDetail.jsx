import React from "react";
import { m } from "framer-motion";
import { Link } from "react-router-dom";
import { FiArrowRight, FiCheck } from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa";
import services from "../../data/services/services";
import { waLink } from "../../data/site/contact";
import ServiceIllustration from "../home/ServiceIllustrations";
import "./ServicesDetail.css";

/* /services — one detailed card per service: illustration, what it is,
   what's included, and two next steps (read more, or ask on WhatsApp with
   the service already named in the message). */
const ServicesDetail = () => (
  <section className="services-detail-section" id="all-services">
    <div className="container">
      <div className="text-center sd-head">
        <span className="section-tag">All services</span>
        <h2 className="section-title">Everything You Need to <span>Grow Online</span></h2>
        <p className="section-subtitle">Pick one service or combine a few — every project starts with a free call and a fixed, written quote.</p>
      </div>
      <div className="services-detail-list">
        {services.map((service, i) => (
          <m.article
            key={service.id}
            className="service-detail-card"
            style={{ "--c": service.color }}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, delay: (i % 2) * 0.06 }}
            viewport={{ once: true, margin: "0px 0px 15% 0px" }}
          >
            <div className="sd-top">
              <span className="sd-art"><ServiceIllustration slug={service.slug} /></span>
              <div>
                <span className="sd-group">{service.group}</span>
                <h3 className="service-detail-title">
                  <Link to={`/services/${service.slug}`}>{service.title}</Link>
                </h3>
              </div>
            </div>
            <p className="service-detail-desc">{service.fullDesc}</p>

            <ul className="sd-subs">
              {service.subServices.map((sub) => (
                <li key={sub}><span className="sd-tick" aria-hidden="true"><FiCheck /></span>{sub}</li>
              ))}
            </ul>

            <div className="sd-actions">
              <Link to={`/services/${service.slug}`} className="service-detail-link">
                Explore {service.title.split(" (")[0]} <FiArrowRight aria-hidden="true" />
              </Link>
              <a
                href={waLink(`Hi Orizova Digital, I'm interested in ${service.title}. Can you share a plan and quote?`)}
                target="_blank"
                rel="noopener noreferrer"
                className="sd-wa"
              >
                <FaWhatsapp aria-hidden="true" /> Ask for a quote
              </a>
            </div>
          </m.article>
        ))}
      </div>
    </div>
  </section>
);

export default ServicesDetail;
