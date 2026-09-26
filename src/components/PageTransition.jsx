import React from 'react';
import { m } from 'framer-motion';

const variants = {
  initial: { opacity: 0, y: 18 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -18 },
};

// The very first page render must NOT start invisible — otherwise the browser
// can't paint the hero text (LCP) until JavaScript animates it in, which is
// what was dragging the PageSpeed score down. Only later route changes animate.
let isFirstPageLoad = true;

const PageTransition = ({ children }) => {
  const skipIntro = isFirstPageLoad;
  React.useEffect(() => {
    isFirstPageLoad = false;
  }, []);

  return (
    <m.div
      variants={variants}
      initial={skipIntro ? false : 'initial'}
      animate="animate"
      exit="exit"
      transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </m.div>
  );
};

export default PageTransition;
