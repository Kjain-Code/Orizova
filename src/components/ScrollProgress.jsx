import React from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';
import './ScrollProgress.css';

// A slim gradient bar fixed to the very top of the viewport that fills as
// the visitor scrolls the page — a small, modern touch used across the
// reference sites we studied.
const ScrollProgress = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 120, damping: 25, restDelta: 0.001 });

  return <motion.div className="scroll-progress" style={{ scaleX }} />;
};

export default ScrollProgress;
