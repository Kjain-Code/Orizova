import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './Loader.css';

const Loader = ({ onComplete }) => {
  const [phase, setPhase] = useState(0);

  const handleComplete = useCallback(() => {
    onComplete();
  }, [onComplete]);

  useEffect(() => {
    const timers = [
      setTimeout(() => setPhase(1), 100),
      setTimeout(() => setPhase(2), 800),
      setTimeout(() => setPhase(3), 1600),
      setTimeout(() => setPhase(4), 2400),
      setTimeout(() => setPhase(5), 3200),
      setTimeout(() => setPhase(6), 3800),
      setTimeout(() => setPhase(7), 4500),
      setTimeout(() => {
        setPhase(8);
        setTimeout(handleComplete, 800);
      }, 7000),
    ];
    return () => timers.forEach(clearTimeout);
  }, [handleComplete]);

  const letters = "ORIZOVA".split('');

  return (
    <AnimatePresence>
      {phase < 8 && (
        <motion.div
          className="loader-overlay"
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="loader-bg-gradient" />

          <div className="loader-particles">
            {[...Array(20)].map((_, i) => (
              <div
                key={i}
                className={`particle particle-${i % 5}`}
                style={{
                  left: `${10 + Math.random() * 80}%`,
                  top: `${10 + Math.random() * 80}%`,
                  animationDelay: `${Math.random() * 6}s`,
                  animationDuration: `${4 + Math.random() * 5}s`,
                }}
              />
            ))}
          </div>

          <div className="loader-content">
            {/* Glowing Ball with 7 Bounces */}
            {phase < 5 && (
              <div className={`glow-ball-container ${phase >= 1 ? 'bounce-start' : ''}`}>
                <div className="glow-ball">
                  <div className="glow-ball-core" />
                  <div className="glow-ball-ring" />
                  <div className="glow-ball-glow" />
                </div>

                {/* Impact Particles on each bounce */}
                {phase >= 2 && phase <= 4 && (
                  <div className="impact-burst">
                    {[...Array(10)].map((_, i) => {
                      const angle = (i * 36) * Math.PI / 180;
                      const distance = 40 + Math.random() * 30;
                      const x = Math.cos(angle) * distance;
                      const y = Math.sin(angle) * distance;
                      return (
                        <div
                          key={`${phase}-${i}`}
                          className="impact-dot"
                          style={{
                            '--tx': `${x}px`,
                            '--ty': `${y}px`,
                            animationDelay: `${i * 0.02}s`,
                          }}
                        />
                      );
                    })}
                  </div>
                )}
              </div>
            )}

            {/* Logo Reveal */}
            {phase >= 5 && (
              <motion.div
                className="logo-reveal"
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ type: 'spring', stiffness: 250, damping: 12 }}
              >
                <div className="logo-glow" />
                <span className="logo-symbol">◎</span>
              </motion.div>
            )}

            {/* Welcome Text */}
            {phase >= 5 && (
              <motion.div
                className="welcome-text"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                WELCOME TO
              </motion.div>
            )}

            {/* ORIZOVA Letter by Letter */}
            {phase >= 5 && (
              <div className="brand-name">
                {letters.map((letter, i) => (
                  <motion.span
                    key={i}
                    className="brand-letter"
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                      type: "spring",
                      stiffness: 200,
                      damping: 10,
                      delay: 0.4 + i * 0.08,
                    }}
                  >
                    {letter}
                  </motion.span>
                ))}
              </div>
            )}

            {/* Tagline */}
            {phase >= 6 && (
              <motion.div
                className="tagline"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                Building Digital Experiences
              </motion.div>
            )}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Loader;
