import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

// Jumps to the top of the page on every route change — without this,
// React Router keeps the previous page's scroll position.
const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

export default ScrollToTop;
