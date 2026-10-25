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
    q: 'What does Orizova Digital’s social media management cover?',
    a: 'Orizova Digital manages Instagram, Facebook, LinkedIn and YouTube for businesses across India with a monthly content calendar, post design, captions, reel editing, posting and replies to general comments, plus a monthly review of what worked. Nothing goes live without your approval, and enquiries from comments and DMs are passed to your team so no lead is missed.',
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
  '/services/branding-designing': {
    q: 'What branding services does Orizova Digital provide?',
    a: 'Orizova Digital designs logos, complete brand identity systems, social media templates, packaging and pitch decks for businesses across India. You receive editable source files plus PNG, SVG and PDF exports, and the number of concepts and revisions is agreed in the quote. Existing logos can be refreshed instead of replaced.',
  },
};

export default answers;
