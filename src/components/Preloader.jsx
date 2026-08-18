import React from 'react';
import { motion } from 'framer-motion';
import logo from '../assets/logo.png';
import './Preloader.css';

/* A clean, modern intro: a soft gradient ring spins around the logo mark
   while it pulses gently, then the whole thing fades into the site. */
const Preloader = () => {
  return (
    <motion.div
      className="preloader"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 0.5, ease: 'easeInOut' } }}
    >
      <div className="preloader-mesh" />

      <div className="preloader-mark">
        <motion.div
          className="preloader-ring"
          animate={{ rotate: 360 }}
          transition={{ duration: 2.2, repeat: Infinity, ease: 'linear' }}
        />
        <motion.img
          src={logo}
          alt="Orizova Co."
          className="preloader-logo"
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: [0.85, 1, 0.97, 1] }}
          transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
        />
      </div>
    </motion.div>
  );
};

export default Preloader;
