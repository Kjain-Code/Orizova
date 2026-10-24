import React from 'react';

/* Hand-drawn style accent doodles used across the site — inspired by the
   playful sticker/character language of our redesign references. Kept as
   lightweight inline SVGs so they inherit color and animate with CSS. */

export const ArrowDoodle = ({ className = '', color = 'var(--gold-deep)' }) => (
  <svg className={`doodle ${className}`} width="70" height="60" viewBox="0 0 70 60" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M3 5C20 8 45 18 60 42" stroke={color} strokeWidth="2.5" strokeLinecap="round" strokeDasharray="1 8" />
    <path d="M46 36L61 43L54 27" stroke={color} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
  </svg>
);

export const StarDoodle = ({ className = '', color = 'var(--violet)' }) => (
  <svg className={`doodle ${className}`} width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M13 0C13.5 7 19 12.5 26 13C19 13.5 13.5 19 13 26C12.5 19 7 13.5 0 13C7 12.5 12.5 7 13 0Z" fill={color} />
  </svg>
);

export const SparkleDoodle = ({ className = '', color = 'var(--coral)' }) => (
  <svg className={`doodle ${className}`} width="34" height="34" viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M17 2C17.6 10 24 16.4 32 17C24 17.6 17.6 24 17 32C16.4 24 10 17.6 2 17C10 16.4 16.4 10 17 2Z" stroke={color} strokeWidth="2" strokeLinejoin="round" />
  </svg>
);

export const SquiggleUnderline = ({ className = '', color = 'var(--gold)' }) => (
  <svg
    className={`doodle ${className}`}
    width="140"
    height="16"
    viewBox="0 0 140 16"
    preserveAspectRatio="none"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M2 10C20 2 35 14 52 8C69 2 84 14 101 8C112 4 124 8 138 5" stroke={color} strokeWidth="3.5" strokeLinecap="round" />
  </svg>
);

export const LoopArc = ({ className = '', color = 'var(--primary)' }) => (
  <svg className={`doodle ${className}`} width="120" height="70" viewBox="0 0 120 70" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M4 60C4 30 30 8 55 8C80 8 55 40 78 40C100 40 100 15 116 8" stroke={color} strokeWidth="2.5" strokeLinecap="round" fill="none" />
    <path d="M104 3L117 8L106 17" stroke={color} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
  </svg>
);

export const BlobBadge = ({ className = '', children, bg = 'var(--gold)' }) => (
  <div className={`blob-badge ${className}`} style={{ background: bg }}>
    {children}
  </div>
);

export const CircleDoodle = ({ className = '', color = 'var(--violet)' }) => (
  <svg className={`doodle ${className}`} width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M30 4C40 4 50 12 52 24C54 38 44 52 30 52C16 52 6 42 6 28" stroke={color} strokeWidth="2.5" strokeLinecap="round" fill="none" />
  </svg>
);

/* ---------------------------------------------------------------------
   Character doodles — small hand-drawn mascots with faces, used to give
   the site personality (the "doodle characters" the reference sites use).
--------------------------------------------------------------------- */

export const RocketCharacter = ({ className = '' }) => (
  <svg className={`doodle ${className}`} width="72" height="92" viewBox="0 0 72 92" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M36 4C48 16 52 34 48 54L24 54C20 34 24 16 36 4Z" fill="var(--paper)" stroke="var(--primary)" strokeWidth="2.5" strokeLinejoin="round" />
    <circle cx="36" cy="30" r="7" fill="var(--lavender)" stroke="var(--primary)" strokeWidth="2.2" />
    <circle cx="33.5" cy="29" r="1.6" fill="var(--ink)" />
    <circle cx="38.5" cy="29" r="1.6" fill="var(--ink)" />
    <path d="M34 33.5C34.8 34.3 37.2 34.3 38 33.5" stroke="var(--ink)" strokeWidth="1.4" strokeLinecap="round" />
    <path d="M24 44L10 54L20 52" stroke="var(--gold-deep)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" fill="var(--gold)" />
    <path d="M48 44L62 54L52 52" stroke="var(--gold-deep)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" fill="var(--gold)" />
    <path d="M28 54C28 62 26 68 26 68L46 68C46 68 44 62 44 54" fill="var(--lilac)" stroke="var(--primary)" strokeWidth="2.2" strokeLinejoin="round" />
    <path d="M32 72C30 78 30 84 32 88M40 72C42 78 42 84 40 88" stroke="var(--coral)" strokeWidth="2.5" strokeLinecap="round" />
  </svg>
);

export const BulbCharacter = ({ className = '' }) => (
  <svg className={`doodle ${className}`} width="70" height="90" viewBox="0 0 70 90" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="35" cy="32" r="24" fill="var(--gold)" fillOpacity="0.18" stroke="var(--gold-deep)" strokeWidth="2.5" />
    <circle cx="28" cy="30" r="2" fill="var(--ink)" />
    <circle cx="42" cy="30" r="2" fill="var(--ink)" />
    <path d="M27 40C30 44 40 44 43 40" stroke="var(--ink)" strokeWidth="1.8" strokeLinecap="round" />
    <path d="M27 56L24 66H46L43 56" fill="var(--paper)" stroke="var(--primary)" strokeWidth="2.2" strokeLinejoin="round" />
    <path d="M28 72H42M30 78H40" stroke="var(--primary)" strokeWidth="2.5" strokeLinecap="round" />
    <path d="M6 20L14 24M64 20L56 24M35 2V10" stroke="var(--coral)" strokeWidth="2.5" strokeLinecap="round" />
  </svg>
);

export const ChatCharacter = ({ className = '' }) => (
  <svg className={`doodle ${className}`} width="82" height="70" viewBox="0 0 82 70" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M6 30C6 15 20 6 41 6C62 6 76 15 76 30C76 45 62 54 41 54C36 54 31.5 53.3 27.5 52L12 60L16 46C10 41.5 6 36 6 30Z" fill="var(--lavender)" stroke="var(--primary)" strokeWidth="2.5" strokeLinejoin="round" />
    <circle cx="28" cy="30" r="2.3" fill="var(--primary)" />
    <circle cx="41" cy="30" r="2.3" fill="var(--primary)" />
    <circle cx="54" cy="30" r="2.3" fill="var(--primary)" />
  </svg>
);

export const TargetCharacter = ({ className = '' }) => (
  <svg className={`doodle ${className}`} width="76" height="76" viewBox="0 0 76 76" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="38" cy="38" r="30" fill="var(--paper)" stroke="var(--coral)" strokeWidth="2.5" />
    <circle cx="38" cy="38" r="19" fill="var(--gold)" fillOpacity="0.25" stroke="var(--gold-deep)" strokeWidth="2.2" />
    <circle cx="38" cy="38" r="8" fill="var(--primary)" />
    <path d="M56 14L64 8L62 18Z" fill="var(--gold)" stroke="var(--gold-deep)" strokeWidth="1.8" strokeLinejoin="round" />
    <path d="M46 26L60 12" stroke="var(--ink)" strokeWidth="2.2" strokeLinecap="round" />
  </svg>
);

export const MagnifierCharacter = ({ className = '' }) => (
  <svg className={`doodle ${className}`} width="70" height="78" viewBox="0 0 70 78" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="32" cy="32" r="24" fill="var(--lilac)" stroke="var(--primary)" strokeWidth="2.5" />
    <circle cx="25" cy="29" r="2" fill="var(--ink)" />
    <circle cx="38" cy="29" r="2" fill="var(--ink)" />
    <path d="M24 38C27 41 37 41 40 38" stroke="var(--ink)" strokeWidth="1.8" strokeLinecap="round" />
    <path d="M49 49L64 64" stroke="var(--gold-deep)" strokeWidth="6" strokeLinecap="round" />
  </svg>
);
