import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FiArrowRight } from 'react-icons/fi';
import { SparkleDoodle, StarDoodle } from './Doodles';
import './CtaBand.css';

const CtaBand = ({
  title = "Let's Build Something Great",
  subtitle = "Tell us about your project and we'll get back to you within 24 hours.",
  buttonText = 'Start Your Project',
}) => {
  return (
    <section className="cta-band">
      <div className="cta-band-shape shape-a" />
      <div className="cta-band-shape shape-b" />
      <SparkleDoodle className="cta-sparkle-1" color="var(--gold)" />
      <StarDoodle className="cta-sparkle-2" color="#fff" />
      <div className="container">
        <motion.div
          className="cta-band-inner"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2>{title}</h2>
          <p>{subtitle}</p>
          <Link to="/contact">
            <button className="btn-gold">
              {buttonText} <FiArrowRight />
            </button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default CtaBand;
