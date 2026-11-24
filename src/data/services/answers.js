// Answer-first summaries ("Quick answer" box) for AEO / GEO.
// Rules: lead with the direct answer, 40–80 words, name the brand and the
// place, facts only (no invented prices, numbers, clients or results).
// Rendered by components/content/QuickAnswer.jsx; also used for /llms.txt.
// Section: main service pages (India-wide).

const answers = {
  '/services/website-development': {
    q: 'What does Orizova Digital’s website development service include?',
    a: 'Orizova Digital is a website development company that builds business websites, landing pages for ads, portfolio sites, WordPress sites, online stores and custom web apps for businesses across India. Every site is coded mobile-first, set up for Google from day one (titles, schema, sitemap, Search Console) and connected to WhatsApp, Google Business Profile, Meta Pixel and Analytics. A focused business website usually takes a few weeks once content is ready.',
  },
  '/services/ecommerce-solutions': {
    q: 'Can Orizova Digital build an online store?',
    a: 'Yes. Orizova Digital builds Shopify, WooCommerce and custom online stores with fast product pages, a short checkout and Indian payment gateways that accept UPI, cards, net banking and wallets. It also migrates existing stores — products, customers and orders where the platform allows — and redirects old URLs to protect search traffic.',
  },
  '/services/app-development': {
    q: 'Does Orizova Digital build mobile apps?',
    a: 'Yes. Orizova Digital builds Android and iOS apps for startups and businesses across India, usually cross-platform with React Native or Flutter so one codebase runs on both, and native apps when the product needs it. The admin panel, backend APIs and marketing website can be built alongside, apps are published under your own developer accounts, and the source code is handed over to you.',
  },
  '/services/digital-marketing': {
    q: 'What is included in Orizova Digital’s digital marketing service?',
    a: 'Orizova Digital’s digital marketing combines SEO, Google Ads, Meta Ads, social media and content in one plan for businesses across India, built around how many enquiries or sales you need each month. Tracking is set up first and reports focus on leads and cost per lead, not likes. Ads can bring enquiries within days; SEO builds over months. No fixed lead numbers are guaranteed.',
  },
  '/services/social-media-marketing': {
    q: 'What does Orizova Digital’s social media management include and cost?',
    a: 'Orizova Digital manages Instagram, Facebook and LinkedIn for businesses across India: a monthly content calendar, reels with scripts and editing, posts, carousels, stories, captions, posting and replies, plus a monthly report. Plans are ₹6,000/month (4 reels, 4 posts, 8 stories), ₹10,000/month (8 reels, 8 posts, community management) and ₹14,000/month (12 reels, 12 posts, advanced strategy). Paid ads are separate.',
  },
  '/services/instagram-management': {
    q: 'Who can manage my business Instagram account?',
    a: 'Orizova Digital offers Instagram management for businesses across India: reels with hooks, scripts and editing, posts and carousels, daily stories, highlights, bio optimisation, captions, hashtags and replies to comments and DMs. You approve a monthly calendar and we post on schedule. Plans start at ₹6,000/month and cover Instagram and Facebook together. Followers are never bought.',
  },
  '/services/facebook-page-management': {
    q: 'What does Facebook page management include?',
    a: 'Orizova Digital’s Facebook page management covers page set-up and clean-up, weekly posts and reels, Messenger and comment replies, replies to reviews, events and offers, and a monthly report. It runs together with Instagram in every plan, from ₹6,000/month. Facebook ads are available as a separate Meta Ads service, with the ad budget paid to Meta directly.',
  },
  '/services/linkedin-management': {
    q: 'Does Orizova Digital manage LinkedIn for founders and companies?',
    a: 'Yes. Orizova Digital manages LinkedIn for founders, consultants, CAs and B2B companies: profile and company page optimisation, weekly posts and carousels written in the client’s voice from short monthly calls or voice notes, and manual engagement with relevant people — no automation tools. LinkedIn is quoted on its own or added to an Instagram and Facebook plan.',
  },
  '/services/meta-ads': {
    q: 'How does Orizova Digital run Meta (Facebook & Instagram) ads?',
    a: 'Orizova Digital runs Facebook and Instagram campaigns for businesses across India, built for fewer but better enquiries: lead forms with qualifying questions, click-to-WhatsApp ads, retargeting, fast landing pages and tracking that tells Meta which leads were useful. It designs static, carousel and reel creatives, and works inside your own Meta Business account.',
  },
  '/services/google-ads': {
    q: 'How does Orizova Digital manage Google Ads?',
    a: 'Orizova Digital manages Google Ads for businesses across India, building accounts around search intent — Search, local, Performance Max and YouTube — with tightly grouped keywords, a growing negative keyword list, matching ad copy, fast landing pages and call and form tracking. Ads can show the day they are approved; the first few weeks are used to learn which keywords convert.',
  },
  '/services/seo': {
    q: 'How does Orizova Digital do SEO?',
    a: 'Orizova Digital’s SEO combines technical fixes, page-by-page optimisation, useful content and local signals, for businesses across India, aimed at the searches that bring enquiries — not vanity keywords. Every project starts with an audit and a keyword map, followed by monthly work you can see. Results usually build over months, and like any honest agency it does not guarantee first-page rankings.',
  },
  '/services/ai-search-optimization': {
    q: 'What is AI search optimization (AEO / GEO)?',
    a: 'AI search optimization means making your business easy for AI answers — Google AI Overviews and AI Mode, ChatGPT search, Gemini and Perplexity — to find, understand and mention. Orizova Digital does it with answer-first page content, consistent business details everywhere, correct structured data, reviews and genuine mentions on trusted sites. Google says there is no special trick: strong, crawlable, helpful pages come first, so the work builds on good SEO.',
  },
  '/services/local-seo': {
    q: 'What is local SEO and how does Orizova Digital help?',
    a: 'Local SEO helps a business appear in Google Maps and the local pack for nearby searches. Google ranks these results on relevance, distance and prominence. Orizova Digital optimises your Google Business Profile, builds a steady flow of genuine reviews, fixes citations and adds location pages, for businesses across India. Profile fixes can show results within weeks.',
  },
  '/services/video-editing': {
    q: 'What video editing does Orizova Digital offer?',
    a: 'Orizova Digital edits reels, short-form ad creatives, brand films and animated typography for Instagram, YouTube and Meta ads for brands across India — usually from footage you shoot on your phone. Edits focus on a strong opening, tight cuts, readable captions and fitting music. Monthly reel packages are available, and revision rounds are agreed upfront.',
  },
  '/services/ai-video-production': {
    q: 'What is AI video production and what does Orizova Digital make?',
    a: 'AI video production means making marketing videos with AI tools — AI presenters, AI-generated scenes and product shots, AI voices and dubbing — guided by a human script and finished by human editors. Orizova Digital produces AI UGC-style ads, AI product videos, AI avatar and spokesperson videos, AI reels and multilingual versions in Hindi, English and other languages for brands across India, sized for Instagram, YouTube and Meta ads, and labelled as AI where rules require.',
  },
  '/services/ai-ugc-videos': {
    q: 'What are AI UGC video ads?',
    a: 'AI UGC video ads are creator-style “person talking to camera” ads made with realistic AI presenters instead of hired creators. Orizova Digital scripts them from your product’s real benefits and produces several hooks, lengths and languages per script, so Meta and Instagram ads can test what works quickly. They are best for testing and volume; real customer videos are still better for testimonials and trust-heavy categories.',
  },
  '/services/ai-product-videos': {
    q: 'Can AI make product videos from photos?',
    a: 'Yes. Orizova Digital turns clear product photos into AI product videos — showcase and 360-style shots, lifestyle scenes, close-ups, launch ads and marketplace videos. Every shot is checked against your photos so colour, shape and labels stay accurate, and the video only shows what the product really is and does.',
  },
  '/services/ai-avatar-videos': {
    q: 'What is an AI avatar video?',
    a: 'An AI avatar video is a presenter video where a stock AI presenter, or a digital twin of a real person created with their written consent, speaks your script. Orizova Digital makes avatar videos for explainers, FAQs, founder messages, training and multilingual marketing in Hindi, English and other Indian languages, with lip-sync and captions.',
  },
  '/services/branding-designing': {
    q: 'What branding services does Orizova Digital provide?',
    a: 'Orizova Digital designs logos, complete brand identity systems, social media templates, packaging and pitch decks for businesses across India. You receive editable source files plus PNG, SVG and PDF exports, and the number of concepts and revisions is agreed in the quote. Existing logos can be refreshed instead of replaced.',
  },
};

export default answers;
