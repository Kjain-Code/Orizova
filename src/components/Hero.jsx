import React, { useRef } from 'react';
import { Link } from 'react-scroll';
import { motion, useMotionValue, useTransform, useSpring } from 'framer-motion';
import { FiArrowRight } from 'react-icons/fi';
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';
import logo from '../assets/logo.png';
import './Hero.css';

const stats = [
  { value: 150, suffix: '+', label: 'Projects Delivered', icon: '🚀' },
  { value: 98, suffix: '%', label: 'Client Satisfaction', icon: '⭐' },
  { value: 50, suffix: '+', label: 'Happy Clients', icon: '🤝' },
  { value: 5, suffix: '+', label: 'Years Experience', icon: '🏆' },
];

const titleWords = ["We", "Build", "Websites", "That", "Grow", "Your", "Business"];

const Hero = () => {
  const { ref, inView } = useInView({ threshold: 0.3, triggerOnce: true });
  const heroRef = useRef(null);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const handleMouseMove = (e) => {
    const rect = heroRef.current?.getBoundingClientRect();
    if (!rect) return;
    const x = (e.clientX - rect.left - rect.width / 2) / 25;
    const y = (e.clientY - rect.top - rect.height / 2) / 25;
    mouseX.set(x);
    mouseY.set(y);
  };

  const tagText = "🚀 Digital Growth Agency";
  const descText = "At Orizova Digital, we create fast, responsive, and visually stunning websites that help businesses establish a strong online presence, attract more customers, and achieve measurable growth.";

  return (
    <section id="home" className="hero" ref={heroRef} onMouseMove={handleMouseMove}>
      <div className="hero-bg-shapes">
        <div className="shape shape-1" />
        <div className="shape shape-2" />
        <div className="shape shape-3" />
      </div>

      {/* Animated Planet Logo */}
      <div className="planet-container">
        <motion.div
          className="planet"
          style={{ x: useSpring(useTransform(mouseX, (v) => -v * 0.5), { stiffness: 150, damping: 15 }), y: useSpring(useTransform(mouseY, (v) => -v * 0.5), { stiffness: 150, damping: 15 }) }}
          animate={{ rotate: [0, 360] }}
          transition={{ rotate: { duration: 20, repeat: Infinity, ease: "linear" } }}
        >
          <div className="planet-glow" />
          <div className="planet-ring" />
          <img src={logo} alt="Orizova" className="planet-logo" />
        </motion.div>
        <motion.div
          className="planet-shadow"
          animate={{ scaleX: [1, 1.2, 1], opacity: [0.3, 0.15, 0.3] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      {/* Floating orbit particles */}
      {[...Array(8)].map((_, i) => (
        <motion.div
          key={i}
          className="orbit-particle"
          style={{
            '--angle': `${i * 45}deg`,
            '--radius': `${260 + i * 25}px`,
            '--size': `${3 + i * 1.5}px`,
          }}
          animate={{ rotate: [i * 45, i * 45 + 360] }}
          transition={{ duration: 8 + i * 1.5, repeat: Infinity, ease: "linear" }}
        />
      ))}

      <div className="container hero-inner">
        <div className="hero-content">

          {/* Glitch Tag */}
          <motion.div
            className="glitch-tag-wrapper"
            initial={{ opacity: 0, scale: 0.5, rotateX: 90 }}
            animate={{ opacity: 1, scale: 1, rotateX: 0 }}
            transition={{ type: "spring", stiffness: 200, damping: 15, delay: 0.2 }}
          >
            <span className="glitch-tag" data-text={tagText}>
              {tagText}
            </span>
          </motion.div>

          {/* 3D Flip Title */}
          <h1 className="hero-title-flip">
            {titleWords.map((word, i) => (
              <motion.span
                key={i}
                className={`title-word ${word === 'Grow' ? 'highlight-gold' : ''}`}
                initial={{ opacity: 0, rotateX: -90, y: 30 }}
                animate={{ opacity: 1, rotateX: 0, y: 0 }}
                transition={{
                  type: "spring",
                  stiffness: 150,
                  damping: 12,
                  delay: 0.4 + i * 0.1,
                }}
              >
                {word === 'Grow' ? (
                  <motion.span
                    className="grow-text"
                    animate={{ textShadow: ['0 0 20px rgba(34,211,238,0.5)', '0 0 40px rgba(34,211,238,0.8)', '0 0 20px rgba(34,211,238,0.5)'] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    {word}
                  </motion.span>
                ) : word}
                {i < titleWords.length - 1 && ' '}
              </motion.span>
            ))}
          </h1>

          {/* Blur Reveal Description */}
          <motion.p
            className="hero-desc-blur"
            initial={{ opacity: 0, filter: 'blur(20px)', y: 20 }}
            animate={{ opacity: 1, filter: 'blur(0px)', y: 0 }}
            transition={{ duration: 1, delay: 1.2, ease: "easeOut" }}
          >
            {descText}
          </motion.p>

          {/* Magnetic Buttons */}
          <motion.div
            className="hero-btns"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.5, type: "spring", stiffness: 120 }}
          >
            <MagneticButton>
              <Link to="contact" smooth duration={600} offset={-80}>
                <button className="btn-glow">
                  <span className="btn-text">Get Free Consultation</span>
                  <span className="btn-icon"><FiArrowRight /></span>
                  <span className="btn-shine" />
                </button>
              </Link>
            </MagneticButton>
            <MagneticButton>
              <Link to="services" smooth duration={600} offset={-80}>
                <button className="btn-outline-anim">
                  <span>Our Services</span>
                  <span className="btn-border-anim" />
                </button>
              </Link>
            </MagneticButton>
          </motion.div>

          {/* 3D Flip Stats */}
          <motion.div className="hero-stats" ref={ref}>
            {stats.map((stat, i) => (
              <motion.div
                className="stat-flip-card"
                key={i}
                initial={{ opacity: 0, rotateY: -90, scale: 0.8 }}
                animate={inView ? { opacity: 1, rotateY: 0, scale: 1 } : {}}
                transition={{
                  type: "spring",
                  stiffness: 120,
                  damping: 10,
                  delay: 1.8 + i * 0.15,
                }}
                whileHover={{ scale: 1.08, rotateY: 5, z: 20 }}
              >
                <div className="stat-flip-inner">
                  <div className="stat-icon">{stat.icon}</div>
                  <div className="stat-number">
                    {inView && <CountUp end={stat.value} duration={2.5} suffix={stat.suffix} />}
                  </div>
                  <div className="stat-label">{stat.label}</div>
                  <div className="stat-glow-bar" />
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      <motion.div
        className="scroll-indicator"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 10, 0] }}
        transition={{ opacity: { delay: 2 }, y: { duration: 2, repeat: Infinity } }}
      >
        <div className="scroll-dot" />
      </motion.div>
    </section>
  );
};

/* Magnetic Button Component */
const MagneticButton = ({ children }) => {
  const ref = useRef(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { stiffness: 300, damping: 20 });
  const springY = useSpring(y, { stiffness: 300, damping: 20 });

  const handleMouseMove = (e) => {
    const rect = ref.current?.getBoundingClientRect();
    if (!rect) return;
    x.set((e.clientX - rect.left - rect.width / 2) * 0.3);
    y.set((e.clientY - rect.top - rect.height / 2) * 0.3);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={ref}
      style={{ x: springX, y: springY }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="magnetic-wrap"
    >
      {children}
    </motion.div>
  );
};

export default Hero;