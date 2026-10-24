import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

/* Site-wide micro-interactions for content pages, with zero extra libraries:
   1. Scroll reveal — blocks and cards below the fold fade/slide in, with a
      small stagger between siblings. Only elements that start BELOW the fold
      are hidden, so nothing visible on first paint ever flickers, and the
      pre-rendered HTML (no JS) always shows everything.
   2. Cursor spotlight — cards with class "spot" get a soft glow that follows
      the pointer (CSS vars --mx / --my). */

const SELECTOR = [
  '.sh', '.cb-prose', '.cb-split-left', '.cb-chips-block',
  '.cb-card', '.cb-step', '.cb-checks li', '.cb-faq', '.cb-work-card',
  '.blog-card', '.svc-group', '.content-section .loc-service',
].join(',');

const ScrollReveal = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    if (typeof window === 'undefined' || !('IntersectionObserver' in window)) return undefined;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return undefined;

    let io;
    const timer = setTimeout(() => {
      const els = Array.from(document.querySelectorAll(SELECTOR));
      const fold = window.innerHeight * 0.92;
      io = new IntersectionObserver((entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add('rv-in');
            io.unobserve(e.target);
          }
        });
      }, { rootMargin: '0px 0px 12% 0px', threshold: 0 });

      els.forEach((el) => {
        if (el.classList.contains('rv')) return;
        if (el.getBoundingClientRect().top < fold) return; // already visible
        const siblings = el.parentElement ? Array.from(el.parentElement.children) : [];
        const idx = Math.max(0, siblings.indexOf(el));
        el.style.setProperty('--rv-delay', `${Math.min(idx, 4) * 0.05}s`);
        el.classList.add('rv');
        io.observe(el);
      });
    }, 60); // wait for the page transition to mount

    return () => {
      clearTimeout(timer);
      if (io) io.disconnect();
    };
  }, [pathname]);

  useEffect(() => {
    const onMove = (e) => {
      const card = e.target.closest && e.target.closest('.spot');
      if (!card) return;
      const r = card.getBoundingClientRect();
      card.style.setProperty('--mx', `${e.clientX - r.left}px`);
      card.style.setProperty('--my', `${e.clientY - r.top}px`);
    };
    document.addEventListener('pointermove', onMove, { passive: true });
    return () => document.removeEventListener('pointermove', onMove);
  }, []);

  return null;
};

export default ScrollReveal;
