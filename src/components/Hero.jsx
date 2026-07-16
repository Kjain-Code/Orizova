import React, { useRef } from 'react';
import { Link } from 'react-scroll';
import { motion, useMotionValue, useTransform, useSpring } from 'framer-motion';
import { FiArrowRight } from 'react-icons/fi';
import { RocketLaunchIcon, StarIcon, UserGroupIcon, TrophyIcon } from '@heroicons/react/24/solid';
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';
import './Hero.css';

const stats = [
  { value: 150, suffix: '+', label: 'Projects Delivered', icon: RocketLaunchIcon },
  { value: 98, suffix: '%', label: 'Client Satisfaction', icon: StarIcon },
  { value: 50, suffix: '+', label: 'Happy Clients', icon: UserGroupIcon },
  { value: 5, suffix: '+', label: 'Years Experience', icon: TrophyIcon },
];

const titleWords = ["Complete", "Digital", "Solutions", "for", "Modern", "Businesses"];

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

  const descText = "From custom website development and e-commerce solutions to SEO, social media marketing, branding, and performance marketing, we help businesses build a powerful online presence and achieve measurable growth.";

  return (
    <section id="home" className="hero" ref={heroRef} onMouseMove={handleMouseMove}>
      <div className="hero-bg-shapes">
        <div className="shape shape-1" />
        <div className="shape shape-2" />
        <div className="shape shape-3" />
      </div>

      <div className="container hero-inner">
        {/* LEFT SIDE — Text Content */}
        <div className="hero-left">
          <div className="hero-content">

            {/* 3D Flip Title */}
            <h1 className="hero-title-flip">
              {titleWords.map((word, i) => (
                <motion.span
                  key={i}
                  className={`title-word ${word === 'Digital' ? 'highlight-gold' : ''}`}
                  initial={{ opacity: 0, rotateX: -90, y: 30 }}
                  animate={{ opacity: 1, rotateX: 0, y: 0 }}
                  transition={{
                    type: "spring",
                    stiffness: 150,
                    damping: 12,
                    delay: 0.4 + i * 0.1,
                  }}
                >
                  {word === 'Digital' ? (
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
                    <div className="stat-icon">
                      <stat.icon className="stat-icon-svg" />
                    </div>
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

        {/* RIGHT SIDE — Floating Laptop */}
        <div className="hero-right">
          <div className="laptop-wrapper">
            {/* Background Tech Particles */}
            <div className="tech-particles">
              {[...Array(20)].map((_, i) => (
                <div
                  key={i}
                  className="tech-particle"
                  style={{
                    '--tx': `${Math.random() * 300 - 150}px`,
                    '--ty': `${Math.random() * 300 - 150}px`,
                    '--delay': `${Math.random() * 5}s`,
                    '--size': `${2 + Math.random() * 3}px`,
                  }}
                />
              ))}
            </div>

            <motion.div
              className="laptop"
              style={{ x: useSpring(useTransform(mouseX, (v) => -v * 0.4), { stiffness: 120, damping: 14 }), y: useSpring(useTransform(mouseY, (v) => -v * 0.4), { stiffness: 120, damping: 14 }) }}
            >
              {/* Glow behind laptop */}
              <div className="laptop-glow" />

              {/* Screen */}
              <div className="laptop-screen">
                <div className="screen-bezel">
                  <div className="screen-display">
                    {/* Code lines */}
                    <div className="code-line code-line-1" />
                    <div className="code-line code-line-2" />
                    <div className="code-line code-line-3" />
                    <div className="code-line code-line-4" />
                    <div className="code-line code-line-5" />
                    <div className="code-line code-line-6" />
                    <div className="code-line code-line-7" />

                    {/* Floating UI elements on screen */}
                    <motion.div
                      className="screen-card card-1"
                      animate={{ y: [0, -4, 0] }}
                      transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                    />
                    <motion.div
                      className="screen-card card-2"
                      animate={{ y: [0, 5, 0] }}
                      transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                    />
                    <motion.div
                      className="screen-chart"
                      animate={{ scaleY: [1, 1.05, 1] }}
                      transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
                    >
                      <div className="chart-bar bar-1" />
                      <div className="chart-bar bar-2" />
                      <div className="chart-bar bar-3" />
                      <div className="chart-bar bar-4" />
                      <div className="chart-bar bar-5" />
                    </motion.div>

                    {/* Cursor blink */}
                    <motion.div
                      className="screen-cursor"
                      animate={{ opacity: [1, 0, 1] }}
                      transition={{ duration: 1, repeat: Infinity }}
                    />

                    {/* Screen scanline */}
                    <div className="screen-scanline" />
                  </div>
                </div>
                {/* Camera dot */}
                <div className="screen-camera" />
              </div>

              {/* Hinge */}
              <div className="laptop-hinge" />

              {/* Base / Keyboard */}
              <div className="laptop-base">
                <div className="laptop-keyboard">
                  {[...Array(30)].map((_, i) => (
                    <div key={i} className={`key key-${i}`} />
                  ))}
                </div>
                <div className="laptop-trackpad" />
              </div>
            </motion.div>

            {/* Shadow below */}
            <motion.div
              className="laptop-shadow"
              animate={{ scaleX: [1, 1.15, 1], opacity: [0.25, 0.12, 0.25] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            />

            {/* Floating code icons around laptop */}
            {[
              { icon: '< />', angle: -30, radius: 220, color: '#22D3EE' },
              { icon: '{ }', angle: 30, radius: 200, color: '#7C3AED' },
              { icon: '( )', angle: 150, radius: 210, color: '#3B82F6' },
              { icon: '[ ]', angle: 210, radius: 195, color: '#22D3EE' },
              { icon: '/**/', angle: 90, radius: 230, color: '#7C3AED' },
            ].map((item, i) => (
              <motion.div
                key={i}
                className="floating-code-icon"
                style={{
                  '--icon-angle': `${item.angle}deg`,
                  '--icon-radius': `${item.radius}px`,
                  color: item.color,
                }}
                animate={{
                  rotate: [item.angle, item.angle + 360],
                  scale: [1, 1.15, 1],
                }}
                transition={{
                  rotate: { duration: 12 + i * 2, repeat: Infinity, ease: "linear" },
                  scale: { duration: 3 + i, repeat: Infinity, ease: "easeInOut" },
                }}
              >
                {item.icon}
              </motion.div>
            ))}

            {/* Floating data dots */}
            {[...Array(8)].map((_, i) => (
              <motion.div
                key={`dot-${i}`}
                className="floating-dot"
                style={{
                  '--dot-angle': `${i * 45}deg`,
                  '--dot-radius': `${170 + i * 15}px`,
                  '--dot-color': i % 3 === 0 ? '#22D3EE' : i % 3 === 1 ? '#7C3AED' : '#3B82F6',
                  '--dot-size': `${3 + i * 0.8}px`,
                }}
                animate={{ rotate: [i * 45, i * 45 + 360] }}
                transition={{ duration: 9 + i * 1.5, repeat: Infinity, ease: "linear" }}
              />
            ))}
          </div>
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