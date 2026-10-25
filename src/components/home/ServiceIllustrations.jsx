import React from 'react';

/* Hand-made, colourful SVG illustrations for each service card on the home
   page (one per service slug). Pure inline SVG: no image requests, crisp on
   every screen, and tiny compared with PNG icons. Decorative only
   (aria-hidden) — the card title carries the meaning. */

const Blob = ({ fill = '#F1E9FE' }) => (
  <path d="M80 8c30 0 62 14 70 44s-10 58-40 64-70 4-90-18S2 40 22 22 50 8 80 8z" fill={fill} />
);

const Spark = ({ x, y, c = '#F5A623', s = 1 }) => (
  <path transform={`translate(${x} ${y}) scale(${s})`} d="M0-7C1-2 2-1 7 0 2 1 1 2 0 7-1 2-2 1-7 0-2-1-1-2 0-7z" fill={c} />
);

const art = {
  'website-development': (
    <>
      <Blob />
      <rect x="28" y="22" width="104" height="72" rx="8" fill="#fff" stroke="#4C0E82" strokeWidth="3" />
      <path d="M28 30a8 8 0 0 1 8-8h88a8 8 0 0 1 8 8v6H28z" fill="#4C0E82" />
      <circle cx="37" cy="29" r="2.4" fill="#FF6B4A" /><circle cx="45" cy="29" r="2.4" fill="#F5A623" /><circle cx="53" cy="29" r="2.4" fill="#22C55E" />
      <rect x="38" y="44" width="40" height="26" rx="4" fill="#8B5CF6" />
      <path d="M42 64l9-10 7 7 5-5 11 8z" fill="#C4B5FD" />
      <rect x="84" y="44" width="38" height="5" rx="2.5" fill="#4C0E82" />
      <rect x="84" y="54" width="30" height="4" rx="2" fill="#C4B5FD" />
      <rect x="84" y="62" width="34" height="4" rx="2" fill="#C4B5FD" />
      <rect x="84" y="72" width="22" height="9" rx="4.5" fill="#F5A623" />
      <rect x="38" y="76" width="40" height="4" rx="2" fill="#E9E3F5" />
      <path d="M118 78l14 6-6 2-2 6z" fill="#241832" stroke="#fff" strokeWidth="1.5" strokeLinejoin="round" />
      <Spark x={142} y={20} /><Spark x={18} y={84} c="#8B5CF6" s={0.7} />
    </>
  ),
  'ecommerce-solutions': (
    <>
      <Blob fill="#FDEEDB" />
      <path d="M50 44h60l-6 52H56z" fill="#8B5CF6" />
      <path d="M50 44h60l-2 14H52z" fill="#4C0E82" />
      <path d="M66 44v-6a14 14 0 0 1 28 0v6" fill="none" stroke="#4C0E82" strokeWidth="4" strokeLinecap="round" />
      <circle cx="80" cy="74" r="11" fill="#fff" />
      <path d="M75 74l4 4 7-8" fill="none" stroke="#22C55E" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
      <g transform="rotate(-18 120 40)">
        <path d="M108 30h20l6 10-6 10h-20z" fill="#F5A623" />
        <circle cx="113" cy="40" r="2.5" fill="#fff" />
        <text x="118" y="44" fontSize="10" fontWeight="800" fill="#fff" fontFamily="Inter, sans-serif">%</text>
      </g>
      <rect x="20" y="70" width="26" height="18" rx="4" fill="#fff" stroke="#FF6B4A" strokeWidth="2.5" />
      <rect x="20" y="75" width="26" height="4" fill="#FF6B4A" />
      <Spark x={138} y={88} c="#FF6B4A" s={0.8} /><Spark x={30} y={30} />
    </>
  ),
  'app-development': (
    <>
      <Blob />
      <rect x="56" y="12" width="48" height="96" rx="10" fill="#241832" />
      <rect x="60" y="20" width="40" height="80" rx="5" fill="#fff" />
      <rect x="74" y="15" width="12" height="3" rx="1.5" fill="#6B6478" />
      <rect x="64" y="26" width="14" height="14" rx="4" fill="#8B5CF6" />
      <rect x="82" y="26" width="14" height="14" rx="4" fill="#F5A623" />
      <rect x="64" y="44" width="14" height="14" rx="4" fill="#22C55E" />
      <rect x="82" y="44" width="14" height="14" rx="4" fill="#FF6B4A" />
      <rect x="64" y="62" width="32" height="6" rx="3" fill="#E9E3F5" />
      <rect x="64" y="72" width="24" height="6" rx="3" fill="#E9E3F5" />
      <rect x="64" y="86" width="32" height="9" rx="4.5" fill="#4C0E82" />
      <rect x="104" y="30" width="40" height="22" rx="8" fill="#fff" stroke="#8B5CF6" strokeWidth="2" />
      <circle cx="114" cy="41" r="4" fill="#22C55E" />
      <rect x="121" y="37" width="17" height="3" rx="1.5" fill="#4C0E82" />
      <rect x="121" y="43" width="12" height="3" rx="1.5" fill="#C4B5FD" />
      <path d="M30 70l-8 8 8 8M42 70l8 8-8 8" fill="none" stroke="#4C0E82" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round" />
      <Spark x={140} y={84} />
    </>
  ),
  'digital-marketing': (
    <>
      <Blob fill="#FDEEDB" />
      <rect x="96" y="66" width="10" height="28" rx="3" fill="#C4B5FD" />
      <rect x="110" y="54" width="10" height="40" rx="3" fill="#8B5CF6" />
      <rect x="124" y="38" width="10" height="56" rx="3" fill="#4C0E82" />
      <path d="M94 56l14-12 12 6 18-20" fill="none" stroke="#22C55E" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M132 28l7 1-1 7" fill="none" stroke="#22C55E" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M26 56h12l34-20v52L38 68H26z" fill="#FF6B4A" />
      <rect x="20" y="54" width="12" height="16" rx="4" fill="#F5A623" />
      <path d="M38 68l6 20h8l-4-20" fill="#C2650C" />
      <path d="M78 50c4 3 4 13 0 16M84 44c8 6 8 22 0 28" fill="none" stroke="#FF6B4A" strokeWidth="3" strokeLinecap="round" />
      <Spark x={52} y={24} /><Spark x={146} y={98} c="#8B5CF6" s={0.7} />
    </>
  ),
  'social-media-marketing': (
    <>
      <Blob />
      <defs>
        <linearGradient id="ig" x1="0" y1="1" x2="1" y2="0">
          <stop offset="0" stopColor="#F5A623" /><stop offset=".5" stopColor="#EC4899" /><stop offset="1" stopColor="#8B5CF6" />
        </linearGradient>
      </defs>
      <rect x="54" y="24" width="52" height="72" rx="12" fill="url(#ig)" />
      <rect x="62" y="34" width="36" height="36" rx="10" fill="none" stroke="#fff" strokeWidth="4" />
      <circle cx="80" cy="52" r="8" fill="none" stroke="#fff" strokeWidth="4" />
      <circle cx="91" cy="41" r="2.5" fill="#fff" />
      <rect x="62" y="78" width="36" height="4" rx="2" fill="#fff" opacity=".8" />
      <rect x="62" y="86" width="22" height="4" rx="2" fill="#fff" opacity=".6" />
      <g>
        <rect x="108" y="22" width="36" height="22" rx="11" fill="#FF6B4A" />
        <path d="M120 33c0-3 4-4 5-1 1-3 5-2 5 1 0 3-5 6-5 6s-5-3-5-6z" fill="#fff" />
        <text x="133" y="37" fontSize="9" fontWeight="800" fill="#fff" fontFamily="Inter, sans-serif">2k</text>
      </g>
      <g>
        <rect x="16" y="60" width="34" height="22" rx="11" fill="#4C0E82" />
        <path d="M27 66l9 5-9 5z" fill="#fff" />
        <rect x="38" y="69" width="7" height="4" rx="2" fill="#C4B5FD" />
      </g>
      <circle cx="128" cy="78" r="12" fill="#fff" stroke="#22C55E" strokeWidth="2.5" />
      <path d="M122 78h12M128 72v12" stroke="#22C55E" strokeWidth="3" strokeLinecap="round" />
      <Spark x={36} y={30} />
    </>
  ),
  'meta-ads': (
    <>
      <Blob fill="#E0ECFF" />
      <circle cx="70" cy="62" r="40" fill="#fff" />
      <circle cx="70" cy="62" r="40" fill="none" stroke="#3B82F6" strokeWidth="6" />
      <circle cx="70" cy="62" r="27" fill="none" stroke="#8B5CF6" strokeWidth="6" />
      <circle cx="70" cy="62" r="13" fill="#FF6B4A" />
      <path d="M70 62l52-38" stroke="#241832" strokeWidth="4" strokeLinecap="round" />
      <path d="M118 16l12 2-4 4 6 2-10 8z" fill="#F5A623" />
      <rect x="108" y="66" width="42" height="40" rx="7" fill="#fff" stroke="#3B82F6" strokeWidth="2" />
      <rect x="114" y="73" width="30" height="5" rx="2.5" fill="#E0ECFF" />
      <rect x="114" y="82" width="30" height="5" rx="2.5" fill="#E0ECFF" />
      <rect x="114" y="93" width="30" height="7" rx="3.5" fill="#3B82F6" />
      <Spark x={22} y={22} c="#3B82F6" />
    </>
  ),
  'google-ads': (
    <>
      <Blob />
      <rect x="18" y="26" width="124" height="26" rx="13" fill="#fff" stroke="#E2DBEE" strokeWidth="2" />
      <circle cx="34" cy="39" r="6" fill="none" stroke="#3B82F6" strokeWidth="3" />
      <path d="M38 43l5 5" stroke="#3B82F6" strokeWidth="3" strokeLinecap="round" />
      <rect x="50" y="36" width="52" height="6" rx="3" fill="#C4B5FD" />
      <rect x="18" y="60" width="124" height="40" rx="10" fill="#fff" stroke="#E2DBEE" strokeWidth="2" />
      <rect x="28" y="68" width="20" height="10" rx="3" fill="#22C55E" />
      <text x="31.5" y="76" fontSize="8" fontWeight="800" fill="#fff" fontFamily="Inter, sans-serif">Ad</text>
      <rect x="52" y="69" width="56" height="7" rx="3.5" fill="#3B82F6" />
      <rect x="28" y="84" width="78" height="5" rx="2.5" fill="#E9E3F5" />
      <rect x="28" y="92" width="60" height="4" rx="2" fill="#E9E3F5" />
      <path d="M112 84l16 6-7 2-2 7z" fill="#241832" stroke="#fff" strokeWidth="1.5" strokeLinejoin="round" />
      <circle cx="120" cy="18" r="6" fill="#F5A623" /><circle cx="134" cy="18" r="6" fill="#FF6B4A" /><circle cx="148" cy="18" r="6" fill="#22C55E" />
    </>
  ),
  seo: (
    <>
      <Blob fill="#DCFCE7" />
      <rect x="24" y="72" width="16" height="26" rx="4" fill="#C4B5FD" />
      <rect x="46" y="58" width="16" height="40" rx="4" fill="#8B5CF6" />
      <rect x="68" y="42" width="16" height="56" rx="4" fill="#4C0E82" />
      <path d="M22 60l22-16 20 8 24-24" fill="none" stroke="#22C55E" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round" />
      <circle cx="112" cy="54" r="22" fill="#fff" stroke="#241832" strokeWidth="5" />
      <circle cx="112" cy="54" r="14" fill="#FDEEDB" />
      <text x="102" y="59" fontSize="13" fontWeight="800" fill="#C2650C" fontFamily="Inter, sans-serif">#1</text>
      <path d="M128 70l16 16" stroke="#241832" strokeWidth="8" strokeLinecap="round" />
      <Spark x={140} y={26} /><Spark x={92} y={18} c="#22C55E" s={0.7} />
    </>
  ),
  'local-seo': (
    <>
      <Blob fill="#FDEEDB" />
      <path d="M22 34l38-10 40 10 38-10v66l-38 10-40-10-38 10z" fill="#fff" stroke="#E2DBEE" strokeWidth="2" />
      <path d="M60 24v66M100 34v66" stroke="#E2DBEE" strokeWidth="2" />
      <path d="M22 70c20-6 30 6 50-2s30-10 66-4" fill="none" stroke="#C4B5FD" strokeWidth="5" />
      <path d="M30 46h18M108 50h22M70 80h20" stroke="#BBF7D0" strokeWidth="6" strokeLinecap="round" />
      <path d="M80 82s-22-20-22-36a22 22 0 0 1 44 0c0 16-22 36-22 36z" fill="#FF6B4A" />
      <circle cx="80" cy="46" r="9" fill="#fff" />
      <path d="M76 46l3 3 6-6" fill="none" stroke="#FF6B4A" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
      <g transform="translate(110 76)">
        <rect width="38" height="18" rx="9" fill="#4C0E82" />
        <path d="M9 5l1.5 3.2 3.5.4-2.6 2.4.7 3.4L9 12.7 5.9 14.4l.7-3.4L4 8.6l3.5-.4z" fill="#F5A623" />
        <text x="17" y="13" fontSize="8.5" fontWeight="800" fill="#fff" fontFamily="Inter, sans-serif">4.9</text>
      </g>
    </>
  ),
  'video-editing': (
    <>
      <Blob />
      <rect x="22" y="34" width="96" height="62" rx="8" fill="#241832" />
      <path d="M22 34h96v10H22z" fill="#4C0E82" />
      <path d="M32 34l-6 10M48 34l-6 10M64 34l-6 10M80 34l-6 10M96 34l-6 10M112 34l-6 10" stroke="#fff" strokeWidth="3" />
      <circle cx="70" cy="70" r="15" fill="#FF6B4A" />
      <path d="M65 62l13 8-13 8z" fill="#fff" />
      <g transform="rotate(-14 70 24)">
        <rect x="22" y="16" width="96" height="12" rx="3" fill="#F5A623" />
        <path d="M34 16l-6 12M52 16l-6 12M70 16l-6 12M88 16l-6 12M106 16l-6 12" stroke="#241832" strokeWidth="3" />
      </g>
      <rect x="124" y="44" width="24" height="46" rx="6" fill="#fff" stroke="#8B5CF6" strokeWidth="2" />
      <rect x="129" y="50" width="14" height="6" rx="2" fill="#8B5CF6" />
      <rect x="129" y="60" width="14" height="6" rx="2" fill="#22C55E" />
      <rect x="129" y="70" width="14" height="6" rx="2" fill="#F5A623" />
      <rect x="129" y="80" width="10" height="5" rx="2" fill="#C4B5FD" />
      <rect x="22" y="102" width="96" height="6" rx="3" fill="#E9E3F5" />
      <rect x="22" y="102" width="52" height="6" rx="3" fill="#8B5CF6" />
    </>
  ),
  'ai-search-optimization': (
    <>
      <Blob fill="#E0F2FE" />
      <rect x="22" y="18" width="92" height="20" rx="10" fill="#fff" stroke="#0EA5E9" strokeWidth="2.5" />
      <circle cx="35" cy="28" r="5" fill="none" stroke="#0EA5E9" strokeWidth="2.5" />
      <path d="M39 32l4 4" stroke="#0EA5E9" strokeWidth="2.5" strokeLinecap="round" />
      <rect x="48" y="25" width="50" height="5" rx="2.5" fill="#BAE6FD" />
      <path d="M40 48h92a8 8 0 0 1 8 8v30a8 8 0 0 1-8 8H74l-14 12v-12H40a8 8 0 0 1-8-8V56a8 8 0 0 1 8-8z" fill="#4C0E82" />
      <path d="M50 58l2.4 5 5 2.4-5 2.4L50 73l-2.4-5-5-2.4 5-2.4z" fill="#F5A623" />
      <rect x="64" y="58" width="58" height="5" rx="2.5" fill="#C4B5FD" />
      <rect x="64" y="68" width="46" height="5" rx="2.5" fill="#C4B5FD" />
      <rect x="64" y="79" width="34" height="9" rx="4.5" fill="#22C55E" />
      <path d="M70 83.5l2.5 2.5 5-5" stroke="#fff" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" />
      <Spark x={140} y={30} c="#0EA5E9" /><Spark x={20} y={94} c="#F5A623" s={0.7} />
    </>
  ),
  'branding-designing': (
    <>
      <Blob fill="#FDEEDB" />
      <path d="M64 22c26 0 50 16 50 38 0 12-10 14-18 12s-14 4-10 12-2 16-22 16c-24 0-42-18-42-40s18-38 42-38z" fill="#fff" stroke="#4C0E82" strokeWidth="3" />
      <circle cx="46" cy="50" r="7" fill="#FF6B4A" />
      <circle cx="62" cy="38" r="7" fill="#F5A623" />
      <circle cx="82" cy="40" r="7" fill="#22C55E" />
      <circle cx="96" cy="54" r="7" fill="#3B82F6" />
      <circle cx="44" cy="72" r="7" fill="#8B5CF6" />
      <g transform="rotate(35 128 60)">
        <rect x="122" y="22" width="12" height="60" rx="4" fill="#4C0E82" />
        <path d="M122 82h12l-6 16z" fill="#F5A623" />
        <rect x="122" y="22" width="12" height="10" rx="3" fill="#8B5CF6" />
      </g>
      <Spark x={30} y={24} c="#8B5CF6" /><Spark x={140} y={98} />
    </>
  ),
};

const ServiceIllustration = ({ slug }) => (
  <svg viewBox="0 0 160 120" width="160" height="120" aria-hidden="true" focusable="false" className="svc-art">
    {art[slug] || art['digital-marketing']}
  </svg>
);

export default ServiceIllustration;
