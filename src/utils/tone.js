/* Brand colour -> CSS class. Components used to pass colours as inline
   style="--c:#..." attributes, and SEO audit tools (SEOptimer) flag every
   inline style. tone(color) returns a class that sets the same CSS variables
   from styles/tones.css. A colour that is not in the list falls back to the
   old inline style (toneStyle), so nothing ever loses its colour.
   Variables: --c (colour), --c-cc (80% alpha), --c-40 (25% alpha), --c-15 (8% alpha). */
const TONES = new Set(['4C0E82', 'C2650C', '8B5CF6', 'FF6B4A', '16A34A', 'DB2777', 'E11D48', 'D97706', '1D4ED8', '0EA5E9', '0D9488', 'F5A623', 'EA580C', 'C026D3', 'BE185D', '7C3AED', 'EF4444', 'EC4899', '475569', '22C55E', '15803D', '0369A1', '0284C7']);

const key = (color) => String(color || '').replace('#', '').toUpperCase();

/** className for a colour, e.g. tone('#4C0E82') -> 'tone-4c0e82' */
export const tone = (color) => (TONES.has(key(color)) ? `tone-${key(color).toLowerCase()}` : '');

/** Inline-style fallback: undefined when the colour has a class. */
export const toneStyle = (color) => (color && !TONES.has(key(color))
  ? { '--c': color, '--c-cc': `${color}CC`, '--c-40': `${color}40`, '--c-15': `${color}15` }
  : undefined);
