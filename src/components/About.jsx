import React from 'react';
import { motion } from 'framer-motion';
import { FiCheckCircle, FiArrowRight } from 'react-icons/fi';
import { Link } from 'react-scroll';
import Founders from './Founders';
import './About.css';

const points = [
  'Result-driven strategies tailored to your business',
  'Transparent communication at every step',
  'Cutting-edge technology stack',
  'Dedicated team for every project',
  'Post-delivery support & maintenance',
  'Proven track record across industries',
];

const About = () => {
  return (
    <section id="about" className="about-section">
      <div className="container about-inner">
        {/* Left Visual */}
        <motion.div
          className="about-visual"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <div className="about-card-main">
            <div className="about-logo">◎</div>
            <h3>Orizova Co.</h3>
            <p>We are a full-service digital agency helping businesses grow smarter, faster, and stronger in the digital world.</p>
            <div className="about-badge">
              <span>🏆</span>
              <div>
                <strong>Top Rated Agency</strong>
                <p>India's Emerging Digital Partner</p>
              </div>
            </div>
          </div>
          <div className="about-stat-cards">
            <div className="about-stat">
              <h4>5+</h4>
              <p>Years of Excellence</p>
            </div>
            <div className="about-stat">
              <h4>150+</h4>
              <p>Projects Done</p>
            </div>
            <div className="about-stat">
              <h4>50+</h4>
              <p>Happy Clients</p>
            </div>
          </div>
        </motion.div>

        {/* Right Content */}
        <motion.div
          className="about-content"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <span className="section-tag">Who We Are</span>
          <h2 className="section-title">
            A Team That Turns <span>Vision Into Reality</span>
          </h2>
          <p className="about-desc">
            At Orizova Co., we are more than just a digital agency — we are your growth partners. Based in India, we serve businesses globally with cutting-edge digital solutions that deliver real, measurable results.
          </p>
          <p className="about-desc">
            Whether you're a startup looking to establish your presence or an established brand seeking to scale — we have the expertise, tools, and passion to make it happen.
          </p>

          <div className="about-points">
            {points.map((point, i) => (
              <motion.div
                key={i}
                className="about-point"
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.08, duration: 0.4 }}
                viewport={{ once: true }}
              >
                <FiCheckCircle size={18} color="#06B6D4" />
                <span>{point}</span>
              </motion.div>
            ))}
          </div>

          <Link to="contact" smooth duration={600} offset={-80}>
            <button className="btn-primary" style={{ marginTop: '32px' }}>
              Work With Us <FiArrowRight />
            </button>
          </Link>
        </motion.div>
      </div>

      {/* Founders Section */}
      <Founders />
    </section>
  );
};

export default About;
