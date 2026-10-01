import React from 'react';
import { m } from 'framer-motion';
import { FiCheckCircle, FiArrowRight } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import { LoopArc, StarDoodle } from './Doodles';
import './About.css';

const points = [
  'Result-driven strategies tailored to your business',
  'Transparent communication at every step',
  'Cutting-edge technology stack',
  'One team for websites, SEO, ads and content',
  'Post-delivery support & maintenance',
  'Real, live work you can check yourself',
];

const About = () => {
  return (
    <section className="about-section">
      <div className="container about-inner">
        {/* Left Visual */}
        <m.div
          className="about-visual"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <StarDoodle className="about-star" />
          <div className="about-card-main">
            <div className="about-logo">◎</div>
            <h3>Orizova Digital</h3>
            <p>We are a full-service digital agency helping businesses grow smarter, faster, and stronger in the digital world.</p>
            <div className="about-badge">
              <span>🤝</span>
              <div>
                <strong>Your Digital Growth Partner</strong>
                <p>For businesses across India</p>
              </div>
            </div>
          </div>
          <div className="about-stat-cards">
            {/* {{TODO: replace with real stats (years, projects, clients) once confirmed}} */}
            <div className="about-stat">
              <h4>11</h4>
              <p>Services</p>
            </div>
            <div className="about-stat">
              <h4>India</h4>
              <p>Pan-India Clients</p>
            </div>
            <div className="about-stat">
              <h4>1</h4>
              <p>Team, End to End</p>
            </div>
          </div>
        </m.div>

        {/* Right Content */}
        <m.div
          className="about-content"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <span className="section-tag">Our Story</span>
          <h2 className="section-title">
            Why <span className="accent-serif">Orizova</span> Exists
            <LoopArc className="about-title-arc" />
          </h2>
          <p className="about-desc">
            At Orizova Digital, we are more than just a digital agency — we are your growth partners. Based in India, we serve businesses globally with cutting-edge digital solutions that deliver real, measurable results.
          </p>
          <p className="about-desc">
            Whether you're a startup looking to establish your presence or an established brand seeking to scale — we have the expertise, tools, and passion to make it happen.
          </p>

          <div className="about-points">
            {points.map((point, i) => (
              <m.div
                key={i}
                className="about-point"
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.08, duration: 0.4 }}
                viewport={{ once: true }}
              >
                <FiCheckCircle size={18} color="var(--primary)" />
                <span>{point}</span>
              </m.div>
            ))}
          </div>

          <Link to="/contact" className="btn-primary" style={{ marginTop: '32px' }}>
              Work With Us <FiArrowRight />
            </Link>
        </m.div>
      </div>
    </section>
  );
};

export default About;
