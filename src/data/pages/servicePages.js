// Long-form copy for every /services/<slug> page.
// Rules: original writing, no invented numbers, prices, clients or results.
// Inline links use [text](/path). Block types are rendered by ContentBlocks.

const servicePages = {
  /* ------------------------------------------------------------------ */
  'website-development': {
    banner: 'Fast, mobile-first business websites, landing pages and web apps for businesses in Ghaziabad, Noida, Delhi and Chandigarh — built to rank on Google and turn visitors into calls and WhatsApp enquiries.',
    intro: {
      h2: 'A website that works as hard as your best salesperson',
      paras: [
        'Most people who find your business will look at your website before they call. If it loads slowly on a phone, hides your number or looks out of date, they simply go back to Google and pick the next result. A good website fixes that: it explains what you do in the first few seconds, shows proof that you are real, and makes it effortless to call, WhatsApp or book.',
        'Orizova Digital designs and develops websites for local businesses, startups and professionals across Delhi NCR and the Chandigarh Tricity. Every site is coded mobile-first, set up for search engines from day one, and connected to the tools you already use — WhatsApp, Google Business Profile, Meta Pixel and Google Analytics.',
      ],
    },
    blocks: [
      {
        type: 'cards',
        tag: 'What we build',
        h2: 'Types of websites we develop',
        items: [
          { title: 'Business & service websites', desc: 'Multi-page sites for clinics, consultants, showrooms, coaching centres and service companies — with a page for every service you want to rank for.' },
          { title: 'Landing pages for ads', desc: 'Single-offer pages built for Google Ads and Meta campaigns, with one clear action and fast load times so your ad budget is not wasted.' },
          { title: 'Portfolio websites', desc: 'Image-led sites for architects, interior designers, photographers and creative studios that still load quickly on mobile data.' },
          { title: 'WordPress websites', desc: 'Easy-to-edit WordPress sites when your team wants to update pages and blogs without a developer.' },
          { title: 'E-commerce stores', desc: 'Shopify, WooCommerce or custom stores with payments, shipping and order management. See [e-commerce development](/services/ecommerce-solutions).' },
          { title: 'Custom web apps & dashboards', desc: 'Booking systems, client portals, admin panels and dashboards built with modern JavaScript frameworks.' },
        ],
      },
      {
        type: 'prose',
        tag: 'Built in',
        h2: 'What every Orizova website includes',
        paras: ['Whatever the size of the project, these basics are part of the build — not paid add-ons:'],
        bullets: [
          'Mobile-first, responsive design that is tested on real phone sizes',
          'Speed optimisation: compressed images, lazy loading and clean code for good Core Web Vitals',
          'Click-to-call, WhatsApp and enquiry form on every page',
          'On-page SEO setup: titles, meta descriptions, headings, schema markup, XML sitemap and robots.txt',
          'Google Analytics, Google Search Console and Meta Pixel connected',
          'SSL (https), basic security headers and a proper 404 page',
          'A short handover walkthrough so you know how to update content',
        ],
      },
      {
        type: 'process',
        h2: 'From first call to launch',
        steps: [
          { title: 'Discovery call', desc: 'We understand your business, customers, competitors and what a "lead" means for you.' },
          { title: 'Sitemap & content plan', desc: 'We plan every page, the keyword each page targets and the content you need to provide.' },
          { title: 'Design', desc: 'You see the homepage and key inner pages first, give feedback, and we refine before coding.' },
          { title: 'Development', desc: 'We build the site, connect forms, WhatsApp, analytics and tracking, and test on phones and desktops.' },
          { title: 'Launch & handover', desc: 'Domain and hosting setup, Search Console submission, and a walkthrough of how to manage the site.' },
        ],
      },
      {
        type: 'prose',
        tag: 'Pricing',
        h2: 'What affects the cost of a website?',
        paras: [
          'We quote a fixed price after understanding your requirement, so you know the cost before work starts. The main things that change the price are:',
        ],
        bullets: [
          'Number of pages and how much of the content we write for you',
          'Custom design vs. a refined template',
          'Features such as booking, payments, logins, multi-language or integrations',
          'Platform: hand-coded, WordPress or Shopify',
          'Ongoing support, hosting management and SEO after launch',
        ],
        after: ['Our guide [how much does a website cost in Delhi NCR](/blog/website-cost-in-delhi-ncr) explains these factors in more detail.'],
      },
      {
        type: 'cards',
        tag: 'Who it is for',
        h2: 'Websites for your industry',
        items: [
          { title: 'Clinics & doctors', desc: 'Doctor profiles, treatments, timings and appointment booking.', to: '/industries/clinics' },
          { title: 'Architects & interior designers', desc: 'Project galleries that load fast and attract the right clients.', to: '/industries/architects' },
          { title: 'Real estate', desc: 'Project landing pages built for lead generation.', to: '/industries/real-estate' },
          { title: 'Restaurants & cafes', desc: 'Menus, reservations, delivery links and maps.', to: '/industries/restaurants-cafes' },
          { title: 'Loan agents & advisors', desc: 'Trust-first sites with clear disclosures and enquiry flows.', to: '/industries/finance-loan-agents' },
        ],
      },
      { type: 'work' },
      {
        type: 'faq',
        faqs: [
          ['How long does it take to build a website?', 'A focused business website or landing page usually takes a few weeks once your content and photos are ready. Larger sites, e-commerce stores and web apps are planned in clear milestones so you always know what is next.'],
          ['Will my website be SEO-friendly?', 'Yes. Every page gets a unique title, meta description, heading structure and schema markup, and the site is submitted to Google Search Console at launch. For ongoing rankings, see our [SEO services](/services/seo).'],
          ['Can you redesign my existing website without losing rankings?', 'Yes. We map your old URLs to the new ones, keep content that already ranks, and set up redirects so Google transfers the existing value to the new site.'],
          ['Do you write the content?', 'We can. Many clients give us the basics and we write clear, search-friendly page content, which you approve before it goes live.'],
          ['Who owns the website and domain?', 'You do. The domain, hosting account and website files are registered in your name or handed over to you.'],
          ['Do you offer maintenance after launch?', 'Yes — updates, backups, security checks and small content changes can be covered under a monthly support plan.'],
        ],
      },
    ],
  },

  /* ------------------------------------------------------------------ */
  'ecommerce-solutions': {
    banner: 'Shopify, WooCommerce and custom online stores with secure payments, smooth checkout and mobile-first product pages — for D2C brands and retailers across India.',
    intro: {
      h2: 'An online store that is easy to buy from',
      paras: [
        'Selling online is not just about listing products. Customers leave when the store is slow, the checkout asks too many questions, or they cannot find delivery and return information. We build stores that remove that friction — clear product pages, quick checkout, reliable payment gateways and order flows your team can actually manage.',
        'Whether you are a boutique in Delhi moving online, a Noida D2C brand scaling up, or a manufacturer adding direct sales, we help you choose the right platform and set it up properly the first time.',
      ],
    },
    blocks: [
      {
        type: 'cards',
        tag: 'Platforms',
        h2: 'Choosing the right e-commerce platform',
        items: [
          { title: 'Shopify', desc: 'Fast to launch, reliable hosting, huge app ecosystem. A good fit for most D2C brands that want to focus on selling rather than servers.' },
          { title: 'WooCommerce (WordPress)', desc: 'Flexible and cost-effective if you already use WordPress or want full control over content and plugins.' },
          { title: 'Custom store', desc: 'For unusual pricing, B2B ordering, subscriptions or integrations that off-the-shelf platforms cannot handle well.' },
        ],
      },
      {
        type: 'prose',
        tag: 'What is included',
        h2: 'Everything a new store needs',
        bullets: [
          'Store design and mobile-first product, collection and cart pages',
          'Payment gateway integration (for example Razorpay, PayU, Stripe or Cashfree) and cash-on-delivery rules',
          'Shipping, GST and tax settings, plus courier integration where needed',
          'Product upload and catalogue structure (categories, filters, variants)',
          'Order, inventory and customer management training',
          'Store SEO: product schema, clean URLs, sitemap and fast images',
          'Meta Pixel, Conversions API and Google Analytics e-commerce tracking',
          'Policy pages: shipping, returns, privacy and terms',
        ],
      },
      {
        type: 'process',
        h2: 'How we launch your store',
        steps: [
          { title: 'Plan', desc: 'Catalogue size, payment and shipping rules, and the platform that fits.' },
          { title: 'Design', desc: 'Homepage, collection, product and cart designs focused on trust and speed.' },
          { title: 'Build & integrate', desc: 'Payments, shipping, tracking, apps and product upload.' },
          { title: 'Test orders', desc: 'Real test transactions on phone and desktop before launch.' },
          { title: 'Launch & grow', desc: 'Go live, then grow sales with [Meta Ads](/services/meta-ads) and [Google Ads](/services/google-ads).' },
        ],
      },
      {
        type: 'prose',
        tag: 'Pricing',
        h2: 'What affects the cost of an e-commerce website?',
        bullets: [
          'Platform choice and paid themes or apps',
          'Number of products and whether we upload them',
          'Custom features such as subscriptions, wholesale pricing or product builders',
          'Integrations with ERP, inventory, courier or marketplace systems',
          'Ongoing store management and marketing',
        ],
      },
      { type: 'work' },
      {
        type: 'faq',
        faqs: [
          ['Shopify or WooCommerce — which is better for my business?', 'Shopify is usually simpler to run and scale; WooCommerce gives more control and lower platform fees if you are comfortable with WordPress. We recommend one after seeing your catalogue and budget.'],
          ['Can you migrate my existing store?', 'Yes. We migrate products, customers and orders where the platforms allow it, and redirect old URLs to protect your search traffic.'],
          ['Can I sell on Amazon or Flipkart as well?', 'Your website and marketplaces can work together. We focus on your own store and can connect inventory tools that sync with marketplaces.'],
          ['Will customers be able to pay by UPI and cards?', 'Yes. Indian payment gateways support UPI, cards, net banking and wallets; we set up and test the one you choose.'],
          ['How do I get sales after launch?', 'Most stores combine product-led Meta ads, Google Shopping/Performance Max and SEO for collection pages. We can manage this after launch.'],
        ],
      },
    ],
  },

  /* ------------------------------------------------------------------ */
  'app-development': {
    banner: 'Android, iOS and cross-platform apps (React Native / Flutter) with the admin panel and website that go with them — for startups and businesses in Noida, Delhi NCR and Chandigarh.',
    intro: {
      h2: 'Apps that solve one problem really well',
      paras: [
        'A successful app starts with a clear answer to "why would someone open this every week?" Before writing code, we help you define the core user journey, the features that matter for version one, and what can wait. That keeps the first release focused, affordable and faster to market.',
        'We build cross-platform apps with React Native or Flutter so one codebase runs on both Android and iOS, and native apps when the product needs it. The admin panel, backend APIs and marketing website can be built alongside the app.',
      ],
    },
    blocks: [
      {
        type: 'cards',
        tag: 'What we build',
        h2: 'Apps and products we develop',
        items: [
          { title: 'Booking & appointment apps', desc: 'For clinics, salons, studios and service businesses.' },
          { title: 'Customer & loyalty apps', desc: 'Ordering, rewards and offers for restaurants, cafes and retail.' },
          { title: 'Field & team apps', desc: 'Internal apps for sales teams, deliveries, attendance and reporting.' },
          { title: 'Startup MVPs', desc: 'A lean first version to test your idea with real users.' },
          { title: 'Admin panels & dashboards', desc: 'Web dashboards to manage users, content, orders and reports.' },
          { title: 'App UI/UX design', desc: 'Wireframes, prototypes and polished screens before development.' },
        ],
      },
      {
        type: 'process',
        h2: 'How an app project runs',
        steps: [
          { title: 'Scope', desc: 'User journeys, must-have features and a clear version-one list.' },
          { title: 'Design & prototype', desc: 'Clickable screens you can test with real users before development.' },
          { title: 'Build in sprints', desc: 'Regular builds you can install and review on your own phone.' },
          { title: 'Test & publish', desc: 'Device testing, then Play Store and App Store submission.' },
          { title: 'Support & iterate', desc: 'Bug fixes, updates and new features based on user feedback.' },
        ],
      },
      {
        type: 'prose',
        tag: 'Pricing',
        h2: 'What affects the cost of an app?',
        bullets: [
          'Number of screens and user roles (customer, admin, staff)',
          'Native vs. cross-platform development',
          'Backend complexity: payments, maps, chat, notifications, integrations',
          'Design depth and animation',
          'Store publishing, maintenance and hosting',
        ],
      },
      {
        type: 'prose',
        tag: 'Before you build',
        h2: 'Do you need an app, or a better website?',
        paras: [
          'Many businesses ask for an app when a fast mobile website or a WhatsApp flow would serve customers better. Apps make sense when people will use them repeatedly — booking regularly, tracking orders, earning loyalty points or doing their job in the field. For a one-time enquiry or occasional purchase, a mobile-first website is cheaper to build, easier to find on Google and needs no download.',
          'We will tell you honestly which one fits. If an app is right, we usually recommend starting with a focused version one, measuring how people use it, and then adding features based on real behaviour rather than guesses.',
        ],
      },
      {
        type: 'faq',
        faqs: [
          ['Do you build for both Android and iOS?', 'Yes. With React Native or Flutter one codebase covers both; we also build native apps when performance or device features require it.'],
          ['Can you build the admin panel and website too?', 'Yes. Most apps need a web admin panel and a marketing site, and we can deliver all three together.'],
          ['Do you publish the app on the Play Store and App Store?', 'Yes, we handle the submission process using your developer accounts so the apps stay in your name.'],
          ['Will I own the source code?', 'Yes. The code is handed over to you at the end of the project.'],
          ['Can you take over an app built by someone else?', 'Often yes. We review the existing code first and tell you honestly whether to continue with it or rebuild parts.'],
        ],
      },
    ],
  },

  /* ------------------------------------------------------------------ */
  'digital-marketing': {
    banner: 'One team for SEO, Google Ads, Meta Ads, social media and content — planned around the number of enquiries your business actually needs.',
    intro: {
      h2: 'Marketing planned backwards from your leads',
      paras: [
        'Digital marketing is not one activity; it is a mix. Some customers are already searching for what you sell — Google Ads and SEO catch them. Others do not know you exist yet — Meta and Instagram ads create that demand. Everyone checks your reviews, website and social pages before contacting you. When these pieces are planned together, each rupee works harder.',
        'Orizova Digital starts with a simple question: how many enquiries or sales do you need each month, and what is one customer worth to you? From there we choose the channels, set up tracking, and report on leads and cost per lead — not just likes and impressions.',
      ],
    },
    blocks: [
      {
        type: 'cards',
        tag: 'Channels',
        h2: 'Our digital marketing services',
        items: [
          { title: 'Meta Ads (Facebook & Instagram)', desc: 'Lead forms, WhatsApp ads and retargeting.', to: '/services/meta-ads' },
          { title: 'Google Ads', desc: 'Search, Maps, Performance Max and YouTube.', to: '/services/google-ads' },
          { title: 'Social media marketing', desc: 'Content calendars, reels and community management.', to: '/services/social-media-marketing' },
          { title: 'SEO', desc: 'Long-term rankings for the searches that bring business.', to: '/services/seo' },
          { title: 'Local SEO', desc: 'Google Maps visibility and reviews.', to: '/services/local-seo' },
          { title: 'Video editing', desc: 'Reels and ad videos that stop the scroll.', to: '/services/video-editing' },
        ],
      },
      {
        type: 'prose',
        tag: 'Approach',
        h2: 'Which channel should you start with?',
        paras: [
          '**If people already search for your service** ("dentist near me", "flat in Noida Extension", "website designer in Ghaziabad"), start with Google Ads for immediate enquiries and local SEO for the long term.',
          '**If your product is visual or new to the customer** — a cafe, a fashion label, a new residential project — Meta and Instagram ads plus regular reels usually build demand faster.',
          '**If you depend on trust** — clinics, financial advisors, architects — invest early in reviews, a strong website and helpful content, then add ads.',
          'Our comparison [Meta Ads vs Google Ads](/blog/meta-ads-vs-google-ads) explains this choice with examples.',
        ],
      },
      {
        type: 'process',
        h2: 'How a marketing engagement works',
        steps: [
          { title: 'Audit', desc: 'Website, Google Business Profile, social pages, past ads and competitors.' },
          { title: 'Plan', desc: 'Channel mix, monthly budget split, offers and the tracking we will use.' },
          { title: 'Set up', desc: 'Pixel, conversions, landing pages, lead forms and a lead sheet or CRM.' },
          { title: 'Launch & optimise', desc: 'Weekly changes to targeting, creatives and keywords based on lead quality.' },
          { title: 'Report', desc: 'A plain-language monthly report: spend, leads, cost per lead and next steps.' },
        ],
      },
      {
        type: 'prose',
        tag: 'Pricing',
        h2: 'What affects the cost of digital marketing?',
        paras: ['There are two parts: your ad budget (paid directly to Meta or Google) and our management fee. What changes our fee:'],
        bullets: [
          'Number of channels managed',
          'How many creatives, reels or landing pages are needed each month',
          'Number of locations, products or campaigns',
          'Reporting and CRM integration requirements',
        ],
      },
      {
        type: 'faq',
        faqs: [
          ['What budget do I need for ads?', 'It depends on your city, competition and how many leads you need. We suggest a starting budget after the audit and scale up only when cost per lead is under control.'],
          ['How soon will I see results?', 'Paid ads can bring enquiries within days of launch, but the first few weeks are a learning period. SEO builds over months. We set expectations for each channel in the plan.'],
          ['Do you guarantee leads or rankings?', 'No honest agency can guarantee rankings or a fixed number of leads, because platforms and competitors change. We commit to transparent work, clear tracking and steady optimisation.'],
          ['Who owns the ad accounts and pages?', 'You do. We work inside your Meta Business account and Google Ads account with partner access.'],
          ['Can you work with my in-house team?', 'Yes. We can handle ads and strategy while your team creates content, or the other way round.'],
        ],
      },
    ],
  },

  /* ------------------------------------------------------------------ */
  'social-media-marketing': {
    banner: 'Monthly content calendars, posts, reels and community management for Instagram, Facebook, LinkedIn and YouTube — so the people who discover you see an active, trustworthy brand.',
    intro: {
      h2: 'Your social pages are your second website',
      paras: [
        'Before someone calls a clinic, books a table or messages an architect, they often check Instagram first. An inactive page with three posts from last year quietly loses you customers. A consistent page with useful posts, real faces and quick replies does the opposite — it answers questions before they are asked and makes people comfortable reaching out.',
        'Our social media management covers planning, design, captions, reel editing, posting and replying, with a monthly review of what worked. You stay in control: nothing goes live without your approval.',
      ],
    },
    blocks: [
      {
        type: 'prose',
        tag: 'What is included',
        h2: 'What our social media management covers',
        bullets: [
          'A monthly content calendar built around your offers, festivals and customer questions',
          'Designed posts and carousels in your brand style',
          'Reels and short videos edited from your footage — see [video editing](/services/video-editing)',
          'Captions, hashtags and location tags written for discovery',
          'Stories, highlights and profile optimisation (bio, links, contact buttons)',
          'Replying to comments and routing DMs to your team',
          'A monthly report: reach, engagement, profile visits, enquiries and learnings',
        ],
      },
      {
        type: 'cards',
        tag: 'Platforms',
        h2: 'Platforms we manage',
        items: [
          { title: 'Instagram', desc: 'Reels-first strategy for local discovery, food, fashion, real estate and design businesses.' },
          { title: 'Facebook', desc: 'Community, reviews and local audiences — still strong for many 30+ customer groups.' },
          { title: 'LinkedIn', desc: 'Founder and company pages for B2B services, consultants and financial professionals.' },
          { title: 'YouTube & Shorts', desc: 'Walkthroughs, explainers and testimonials that also help Google search.' },
        ],
      },
      {
        type: 'prose',
        tag: 'Organic + paid',
        h2: 'Organic posting and ads work best together',
        paras: [
          'Organic posts build trust with people who already follow you; ads put your best content in front of new people nearby. We usually recommend boosting only the posts and reels that perform well organically, and running proper lead campaigns through [Meta Ads](/services/meta-ads) when you need enquiries quickly.',
        ],
      },
      {
        type: 'process',
        h2: 'Our monthly social media process',
        steps: [
          { title: 'Brand & audience brief', desc: 'Tone of voice, visual style, offers and who you want to reach.' },
          { title: 'Calendar approval', desc: 'You review the month’s plan before anything is designed.' },
          { title: 'Shoot guidance & creation', desc: 'We tell you what to film on your phone and design the rest.' },
          { title: 'Publish & engage', desc: 'Scheduled posting, comment replies and DM routing.' },
          { title: 'Review', desc: 'Monthly report and changes for next month.' },
        ],
      },
      {
        type: 'prose',
        tag: 'Pricing',
        h2: 'What affects the cost of social media management?',
        bullets: [
          'Number of platforms',
          'Posts and reels per month',
          'Whether we shoot content or edit what you send',
          'Community management hours and response expectations',
          'Ad management added on top',
        ],
      },
      {
        type: 'links',
        h2: 'Social media for your industry',
        links: [
          { to: '/industries/restaurants-cafes', label: 'Restaurants & cafes' },
          { to: '/industries/real-estate', label: 'Real estate' },
          { to: '/industries/architects', label: 'Architects & interior designers' },
          { to: '/industries/clinics', label: 'Clinics & doctors' },
          { to: '/blog/instagram-ideas-restaurants-cafes', label: 'Instagram ideas for cafes & restaurants' },
        ],
      },
      {
        type: 'faq',
        faqs: [
          ['How many posts per month do I need?', 'Consistency matters more than volume. Many local businesses do well with a few quality posts and reels every week; we recommend a number based on your goals and how much content you can provide.'],
          ['Do you shoot photos and videos?', 'We mostly edit footage you record on your phone, and guide you on what to shoot. On-site shoots can be arranged separately.'],
          ['Will you reply to comments and DMs?', 'We reply to general comments and questions and pass enquiries, pricing and bookings to your team so no lead is missed.'],
          ['Should I start with organic posts or ads?', 'Have a credible page first (bio, highlights, recent posts), then run ads. Ads send people to your profile, and an empty profile wastes that traffic.'],
          ['Who owns the accounts?', 'You. We work with access you give us and never change ownership or login details.'],
        ],
      },
    ],
  },

  /* ------------------------------------------------------------------ */
  'meta-ads': {
    banner: 'Facebook and Instagram ad campaigns that bring real enquiries — lead forms with qualifying questions, click-to-WhatsApp ads, retargeting and proper tracking.',
    intro: {
      h2: 'Meta ads that focus on lead quality, not cheap clicks',
      paras: [
        'Meta (Facebook and Instagram) lets you reach people in a specific area, age group or interest even before they start searching. That makes it powerful for real estate projects, clinics, cafes, coaching, fashion and local services. It also makes it easy to waste money: a form that is too easy to fill brings lots of "leads" who never pick up the phone.',
        'We set campaigns up to attract fewer but better enquiries — with qualifying questions, the right campaign objective, a fast landing page or WhatsApp flow, and tracking that tells Meta which leads were actually useful.',
      ],
    },
    blocks: [
      {
        type: 'cards',
        tag: 'Campaign types',
        h2: 'Meta campaigns we run',
        items: [
          { title: 'Instant lead forms', desc: 'Forms inside Facebook/Instagram with custom questions (budget, location, timeline) to filter casual clicks.' },
          { title: 'Click-to-WhatsApp ads', desc: 'People start a WhatsApp chat with you directly — great for clinics, cafes, retail and services.' },
          { title: 'Website conversion campaigns', desc: 'Traffic to a landing page optimised for calls, form fills or purchases.' },
          { title: 'Retargeting', desc: 'Reminding website visitors, video viewers and profile engagers to come back.' },
          { title: 'Awareness for launches', desc: 'Reach and video campaigns for new outlets, projects or products in a defined area.' },
          { title: 'Catalogue & sales ads', desc: 'Product ads for e-commerce stores connected to your catalogue.' },
        ],
      },
      {
        type: 'prose',
        tag: 'Lead quality',
        h2: 'How we improve the quality of Meta leads',
        bullets: [
          'Higher-intent form settings and 2–3 qualifying questions',
          'Clear offer and pricing hints in the ad so expectations match',
          'Instant follow-up: leads flow to a Google Sheet, CRM or WhatsApp within minutes',
          'Meta Pixel and Conversions API set up so the algorithm learns from real outcomes',
          'Regular creative testing — images, carousels and reels made for the feed',
          'Excluding past customers and junk audiences where possible',
        ],
      },
      {
        type: 'prose',
        tag: 'Special categories',
        h2: 'Real estate, finance and health ads follow stricter rules',
        paras: [
          'Meta restricts targeting for housing, credit and employment ads, and has policies for health-related claims. We plan campaigns within these rules — for example using broader location targeting for [real estate](/industries/real-estate) and avoiding guaranteed-approval language for [loan agents](/industries/finance-loan-agents) — so your account stays healthy.',
        ],
      },
      {
        type: 'process',
        h2: 'How we run your Meta ads',
        steps: [
          { title: 'Account & tracking check', desc: 'Business Manager, page, pixel, domain verification and Conversions API.' },
          { title: 'Offer & audience plan', desc: 'What we promote, to whom, where, and the qualifying questions.' },
          { title: 'Creatives', desc: 'Static, carousel and reel ads in your brand style.' },
          { title: 'Launch & learn', desc: 'Controlled budget during the learning phase, daily checks.' },
          { title: 'Optimise & report', desc: 'Pause what does not work, scale what does, weekly lead-quality review.' },
        ],
      },
      {
        type: 'prose',
        tag: 'Budget',
        h2: 'What affects Meta ads cost?',
        bullets: [
          'Your city and how many advertisers target the same audience',
          'Your offer and how clearly it is communicated',
          'Lead form vs. WhatsApp vs. website objective',
          'Number of campaigns and creatives we manage each month',
        ],
        after: ['Not sure whether Meta or Google suits you better? Read [Meta Ads vs Google Ads](/blog/meta-ads-vs-google-ads) or look at our [Google Ads service](/services/google-ads).'],
      },
      {
        type: 'faq',
        faqs: [
          ['What is the minimum budget for Meta ads?', 'You can start small, but the campaign needs enough budget to exit the learning phase. We recommend a starting daily budget after looking at your area and goal.'],
          ['Why are my current Meta leads junk?', 'Usually because the form is set for maximum volume, the offer is vague, or nobody follows up quickly. Fixing the form type, adding qualifying questions and speeding up follow-up generally helps.'],
          ['Do you design the ad creatives?', 'Yes. We design static, carousel and reel ads, and can edit videos you shoot.'],
          ['Can you run ads to WhatsApp instead of a form?', 'Yes. Click-to-WhatsApp works well when your team can reply quickly and the conversation needs a personal touch.'],
          ['Who owns the ad account and data?', 'You do. Campaigns run in your ad account with your payment method, and you keep all data and audiences.'],
        ],
      },
    ],
  },

  /* ------------------------------------------------------------------ */
  'google-ads': {
    banner: 'Search, local, Performance Max and YouTube campaigns that reach people already looking for your service — with tight keywords, negative keywords and call tracking.',
    intro: {
      h2: 'Be the first answer when customers search',
      paras: [
        'When someone types "skin clinic in Indirapuram", "architect in Mohali" or "home loan agent near me", they are ready to act. Google Ads puts you at the top of those results within days. The catch is that a poorly set up account also shows your ads for irrelevant searches, burning budget on clicks that will never become customers.',
        'We build Google Ads accounts around intent: tightly grouped keywords, a growing negative keyword list, ad copy that matches the search, and landing pages that load fast and ask for one clear action. Every call and form is tracked so you can see which keywords bring business.',
      ],
    },
    blocks: [
      {
        type: 'cards',
        tag: 'Campaign types',
        h2: 'Google campaigns we manage',
        items: [
          { title: 'Search campaigns', desc: 'Text ads on Google search for high-intent keywords — the core of most local accounts.' },
          { title: 'Local & call campaigns', desc: 'Ads that drive calls and directions, linked to your Google Business Profile.' },
          { title: 'Performance Max', desc: 'Google’s automated campaign across Search, YouTube, Display and Maps — useful once tracking is solid.' },
          { title: 'YouTube ads', desc: 'Short video ads for awareness and remarketing in your service area.' },
          { title: 'Shopping', desc: 'Product listings for e-commerce stores connected to Merchant Center.' },
          { title: 'Account audits', desc: 'A clear review of an existing account with a prioritised fix list.' },
        ],
      },
      {
        type: 'prose',
        tag: 'Setup',
        h2: 'What a well-built Google Ads account includes',
        bullets: [
          'Keyword research by service and location, with match types chosen deliberately',
          'Negative keywords to block jobs, free, DIY and irrelevant searches',
          'Ad copy and assets (sitelinks, callouts, call and location assets)',
          'Conversion tracking for calls, WhatsApp clicks and form submissions',
          'Landing pages built for the ad — see [website development](/services/website-development)',
          'Location and schedule settings that match when you can take calls',
        ],
      },
      {
        type: 'process',
        h2: 'How we manage Google Ads',
        steps: [
          { title: 'Research', desc: 'Keywords, competitors, search volumes and realistic cost per click in your area.' },
          { title: 'Build', desc: 'Campaign structure, ads, assets and tracking.' },
          { title: 'Launch', desc: 'Controlled budget and daily search-term checks in the first weeks.' },
          { title: 'Optimise', desc: 'Bids, negatives, ad tests and landing page improvements.' },
          { title: 'Report', desc: 'Monthly results in plain language: spend, calls, leads, cost per lead.' },
        ],
      },
      {
        type: 'prose',
        tag: 'Budget',
        h2: 'What affects Google Ads cost?',
        bullets: [
          'Cost per click for your keywords — legal, finance and real estate terms are usually more expensive',
          'How many services and locations you want to cover',
          'Landing page quality, which affects Quality Score and cost',
          'Management scope: number of campaigns, ad tests and reports',
        ],
        after: ['For businesses depending on nearby customers, combine ads with [local SEO](/services/local-seo) so you also appear in the free map results.'],
      },
      {
        type: 'faq',
        faqs: [
          ['Google Ads or Meta Ads — which is better?', 'Google catches people who are already searching; Meta reaches people before they search. Many businesses use both. Our [comparison guide](/blog/meta-ads-vs-google-ads) explains when each makes sense.'],
          ['How soon will Google Ads bring enquiries?', 'Ads can show the same day they are approved. The first few weeks are for learning which keywords convert, after which cost per lead usually becomes more stable.'],
          ['Can you fix my existing account?', 'Yes. We start with an audit of search terms, tracking and structure, then fix the biggest leaks first.'],
          ['Do I need a new website to run Google Ads?', 'Not always, but a fast, focused landing page normally lowers cost per lead. We can build one for each main service.'],
          ['Is Google Ads useful for clinics and doctors?', 'Yes, within Google’s healthcare policies. Treatment-specific campaigns with clear landing pages work well for many clinics — see [digital marketing for clinics](/industries/clinics).'],
        ],
      },
    ],
  },

  /* ------------------------------------------------------------------ */
  seo: {
    banner: 'On-page, technical and content SEO that helps businesses in Ghaziabad, Noida, Delhi and Chandigarh rank on Google for the searches that bring real enquiries.',
    intro: {
      h2: 'SEO that targets searches with buying intent',
      paras: [
        'Ranking for a keyword nobody searches, or one that only brings students looking for free information, does not help your business. Good SEO starts by finding the searches your customers actually use — the services, the locations, the questions they ask before buying — and then makes sure your website has the best page for each of them.',
        'Orizova Digital combines technical fixes, page-by-page optimisation, useful content and local signals. You get a clear plan, monthly work you can see, and reporting based on rankings, traffic and enquiries from search.',
      ],
    },
    blocks: [
      {
        type: 'cards',
        tag: 'What is included',
        h2: 'Our SEO services',
        items: [
          { title: 'Technical SEO', desc: 'Crawlability, speed, mobile usability, indexing, sitemaps, redirects and structured data.' },
          { title: 'On-page SEO', desc: 'Titles, descriptions, headings, internal links and content improvements page by page.' },
          { title: 'Keyword research & mapping', desc: 'One clear target keyword per page so your pages do not compete with each other.' },
          { title: 'Content SEO', desc: 'Service pages, location pages and blog posts that answer real customer questions.' },
          { title: 'Local SEO', desc: 'Google Business Profile, reviews and citations.', to: '/services/local-seo' },
          { title: 'Off-page SEO', desc: 'Genuine mentions, listings and links from relevant websites — no spam networks.' },
        ],
      },
      {
        type: 'process',
        h2: 'Our SEO process',
        steps: [
          { title: 'Audit', desc: 'Technical crawl, current rankings, competitors and content gaps.' },
          { title: 'Keyword map', desc: 'The keyword each page should own, and the new pages you need.' },
          { title: 'Fix & optimise', desc: 'Technical issues first, then on-page improvements.' },
          { title: 'Create', desc: 'New service, location and blog content on a monthly schedule.' },
          { title: 'Build authority', desc: 'Listings, PR mentions and links that make sense for your business.' },
          { title: 'Measure', desc: 'Search Console, rankings and enquiries — reviewed every month.' },
        ],
      },
      {
        type: 'prose',
        tag: 'Honest SEO',
        h2: 'What we will not do',
        bullets: [
          'Promise number-one rankings or guaranteed timelines',
          'Buy bulk backlinks, use private blog networks or spin content',
          'Create fake reviews or keyword-stuffed pages with only the city name changed',
        ],
        after: ['These shortcuts can work briefly and then cause penalties. Sustainable SEO compounds instead.'],
      },
      {
        type: 'prose',
        tag: 'Pricing',
        h2: 'What affects the cost of SEO?',
        bullets: [
          'Size and technical condition of your website',
          'Competition for your keywords and locations',
          'How much new content is needed each month',
          'Number of locations or Google Business Profiles',
        ],
      },
      {
        type: 'links',
        h2: 'SEO by city',
        links: [
          { to: '/locations/ghaziabad/seo', label: 'SEO company in Ghaziabad' },
          { to: '/locations/noida/seo', label: 'SEO company in Noida' },
          { to: '/locations/delhi/seo', label: 'SEO company in Delhi' },
          { to: '/locations/chandigarh/seo', label: 'SEO company in Chandigarh' },
        ],
      },
      {
        type: 'faq',
        faqs: [
          ['How long does SEO take?', 'It depends on your website’s age, condition and competition. Technical fixes and local improvements can show movement within a few months; competitive keywords take longer. We share a realistic timeline after the audit.'],
          ['Do you guarantee first-page rankings?', 'No. Google does not allow anyone to guarantee rankings. We guarantee transparent work and reporting, and we focus on searches that bring enquiries.'],
          ['Is SEO better than Google Ads?', 'They do different jobs. Ads bring immediate traffic while you pay; SEO builds free traffic over time. Many businesses run ads while SEO grows.'],
          ['Can you do SEO for a website built by someone else?', 'Yes. If the platform blocks important fixes, we will tell you and suggest options.'],
          ['What reports will I get?', 'A monthly report with work done, keyword positions, Search Console clicks and enquiries from organic search.'],
        ],
      },
    ],
  },

  /* ------------------------------------------------------------------ */
  'local-seo': {
    banner: 'Google Business Profile optimisation, reviews, citations and location pages — so nearby customers find you on Google Maps in Delhi NCR and the Chandigarh Tricity.',
    intro: {
      h2: 'Get found when people search “near me”',
      paras: [
        'For clinics, restaurants, cafes, salons, showrooms and service businesses, the three map results at the top of Google — the local pack — often get the call before anyone scrolls to the websites below. Local SEO is the work that helps your business appear there.',
        'Google ranks local results mainly on relevance (does your profile match the search?), distance (how close are you?) and prominence (reviews, mentions and website strength). We cannot change your distance, but we can make your profile, reviews and website far more relevant and trustworthy.',
      ],
    },
    blocks: [
      {
        type: 'prose',
        tag: 'What is included',
        h2: 'Our local SEO work',
        bullets: [
          '**Google Business Profile:** correct categories, services, products, description, hours, photos, booking link and regular posts',
          '**Reviews system:** a simple way to ask happy customers for reviews and templates to reply to every review',
          '**NAP consistency:** your name, address and phone the same across Justdial, Sulekha, IndiaMART, Bing Places, Apple Maps and other directories',
          '**Local pages:** service and location pages on your website that match how people search',
          '**Local schema:** structured data that tells Google your business type, area served and contact details',
          '**Tracking:** calls, direction requests and website clicks from your profile',
        ],
      },
      {
        type: 'prose',
        tag: 'Ethics',
        h2: 'Real reviews only',
        paras: [
          'Buying reviews or asking staff to post them can get your profile suspended and breaks consumer protection rules. We help you collect genuine reviews steadily — at the right moment, with a direct link — and reply professionally to every review, including negative ones.',
        ],
      },
      {
        type: 'process',
        h2: 'Local SEO in five steps',
        steps: [
          { title: 'Profile audit', desc: 'Categories, verification status, duplicates and competitor comparison.' },
          { title: 'Optimise', desc: 'Complete every profile field, add services, photos and booking links.' },
          { title: 'Citations', desc: 'Fix and build consistent listings on major Indian directories.' },
          { title: 'Reviews & posts', desc: 'Set up a review routine and a monthly posting plan.' },
          { title: 'Local content', desc: 'Location and service pages on your website, linked from the profile.' },
        ],
      },
      {
        type: 'links',
        h2: 'Local SEO in your city',
        links: [
          { to: '/locations/ghaziabad/seo', label: 'Ghaziabad' },
          { to: '/locations/noida/seo', label: 'Noida' },
          { to: '/locations/delhi/seo', label: 'Delhi' },
          { to: '/locations/chandigarh/seo', label: 'Chandigarh' },
          { to: '/blog/google-business-profile-guide', label: 'Google Business Profile guide' },
          { to: '/blog/local-seo-checklist', label: 'Local SEO checklist' },
        ],
      },
      {
        type: 'faq',
        faqs: [
          ['How long does local SEO take?', 'Profile fixes can show results within weeks; building reviews and citations is ongoing. Competitive areas take longer.'],
          ['Can you rank me in an area where I don’t have an office?', 'Map rankings depend heavily on distance from the searcher, so ranking far from your address is difficult. Location pages on your website and Google Ads can cover nearby areas instead.'],
          ['I don’t have a shop or office. Can I still have a Google Business Profile?', 'Yes, as a service-area business that hides its address and lists the areas it serves — if you meet customers at their location.'],
          ['My profile is suspended. Can you help?', 'We can review the likely reason, fix the profile details and guide you through Google’s reinstatement request.'],
          ['Do you buy reviews?', 'Never. Fake reviews risk suspension and legal trouble. We help you collect real ones consistently.'],
        ],
      },
    ],
  },

  /* ------------------------------------------------------------------ */
  'video-editing': {
    banner: 'Reels, short-form ads, brand films and kinetic-typography videos edited for Instagram, YouTube and Meta ads — from footage you shoot on your phone or camera.',
    intro: {
      h2: 'Edits that hold attention past the first three seconds',
      paras: [
        'On Instagram and YouTube Shorts, viewers decide within moments whether to keep watching. The edit decides that: a strong opening frame, tight cuts, readable captions, music that fits, and a clear message before they scroll away. Good editing can make simple phone footage look professional.',
        'We edit reels for brands, ad creatives for campaigns, longer brand films and animated typography. You can see samples in our [creative work gallery](/creative-work).',
      ],
    },
    blocks: [
      {
        type: 'cards',
        tag: 'What we edit',
        h2: 'Video editing services',
        items: [
          { title: 'Instagram reels & YouTube Shorts', desc: 'Vertical 9:16 edits with hooks, captions and trending-style pacing.' },
          { title: 'Ad creatives', desc: 'Short videos made for Meta and YouTube ads, with multiple hook versions for testing.' },
          { title: 'Brand films', desc: 'Longer stories about your business, team or process for your website and YouTube.' },
          { title: 'Kinetic typography', desc: 'Animated text videos for announcements, quotes and explainers.' },
          { title: 'Product & food videos', desc: 'Close-up, fast-paced edits for restaurants, cafes, fashion and retail.' },
          { title: 'Subtitles & resizing', desc: 'Captions in English or Hindi and versions for 9:16, 1:1 and 16:9.' },
        ],
      },
      {
        type: 'prose',
        tag: 'Working together',
        h2: 'How sending footage and revisions work',
        bullets: [
          'You upload raw clips to Google Drive or a similar link; phone footage is fine',
          'We share a short brief template: goal, key message, call to action, references',
          'First cut is shared for feedback, followed by agreed revision rounds',
          'Final files are delivered in the formats you need for each platform',
        ],
        after: ['We use music and assets that are licensed for your use, or platform-library audio when you post natively.'],
      },
      {
        type: 'process',
        h2: 'Our editing process',
        steps: [
          { title: 'Brief', desc: 'Purpose, platform, length, style references.' },
          { title: 'Selects', desc: 'We choose the strongest shots and structure the story.' },
          { title: 'Edit', desc: 'Cuts, captions, motion graphics, colour and sound.' },
          { title: 'Review', desc: 'You comment on the draft; we refine.' },
          { title: 'Deliver', desc: 'Final exports for each platform and aspect ratio.' },
        ],
      },
      {
        type: 'prose',
        tag: 'Pricing',
        h2: 'What affects the cost of video editing?',
        bullets: [
          'Video length and number of videos per month',
          'Motion graphics, typography animation or simple cuts',
          'Footage quality and how much sorting is needed',
          'Number of revisions and versions (formats, languages, hooks)',
        ],
      },
      {
        type: 'links',
        h2: 'Related services',
        links: [
          { to: '/creative-work', label: 'See our video work' },
          { to: '/services/social-media-marketing', label: 'Social media marketing' },
          { to: '/services/meta-ads', label: 'Meta ads' },
          { to: '/industries/restaurants-cafes', label: 'Restaurants & cafes' },
        ],
      },
      {
        type: 'prose',
        tag: 'What makes a good reel',
        h2: 'What we focus on in every edit',
        bullets: [
          'A hook in the first second — movement, a question or the end result shown first',
          'Captions that are readable on a small screen and stay inside safe zones',
          'Pacing that matches the platform: quicker for reels, more breathing room for brand films',
          'A clear ending: what you want the viewer to do next',
        ],
      },
      {
        type: 'faq',
        faqs: [
          ['Do you also shoot the videos?', 'Our core service is editing. We guide you on what to shoot on your phone, and on-site shoots can be discussed separately.'],
          ['Is phone footage good enough?', 'Yes, for most reels. Good light, steady shots and clear audio matter more than the camera.'],
          ['Can you provide monthly reel packages?', 'Yes. Regular editing for a fixed number of reels per month is common for brands that post consistently.'],
          ['How many revisions are included?', 'Revision rounds are agreed upfront in the quote so timelines stay predictable.'],
          ['Do you add subtitles?', 'Yes, in English or Hindi. Most people watch reels without sound, so captions are recommended.'],
        ],
      },
    ],
  },

  /* ------------------------------------------------------------------ */
  'branding-designing': {
    banner: 'Logos, brand identity systems, social media templates, packaging and pitch decks for businesses in Delhi, Noida, Ghaziabad and Chandigarh.',
    intro: {
      h2: 'A brand people recognise and remember',
      paras: [
        'Branding is how your business looks, sounds and feels everywhere a customer meets it — signboard, Instagram, website, visiting card, packaging and WhatsApp messages. When those touchpoints are consistent, people recognise you faster and trust you sooner.',
        'We design logos and complete identity systems, then turn them into practical templates your team can use every day, so the brand stays consistent long after the project ends.',
      ],
    },
    blocks: [
      {
        type: 'cards',
        tag: 'What we design',
        h2: 'Branding and design services',
        items: [
          { title: 'Logo design', desc: 'Concepts based on your positioning, refined into primary and secondary logo versions.' },
          { title: 'Brand identity & guidelines', desc: 'Colours, typography, imagery style and usage rules in one reference document.' },
          { title: 'Social media kit', desc: 'Post, carousel, story and highlight templates — including LinkedIn carousels.' },
          { title: 'Packaging design', desc: 'Labels, boxes and inserts for D2C and retail products.' },
          { title: 'Pitch decks', desc: 'Investor and sales decks with clear storytelling and data layout.' },
          { title: 'Print collateral', desc: 'Visiting cards, brochures, menus and signage artwork.' },
        ],
      },
      {
        type: 'process',
        h2: 'Our branding process',
        steps: [
          { title: 'Discovery', desc: 'Your audience, competitors, personality and goals.' },
          { title: 'Direction', desc: 'Mood boards and positioning options to agree a direction.' },
          { title: 'Design', desc: 'Logo concepts, then a full identity system on the chosen route.' },
          { title: 'Refine', desc: 'Feedback rounds and real-world mock-ups.' },
          { title: 'Hand over', desc: 'All source files, export formats and brand guidelines.' },
        ],
      },
      {
        type: 'prose',
        tag: 'Pricing',
        h2: 'What affects the cost of branding?',
        bullets: [
          'Logo only vs. complete identity system',
          'Number of concepts and revision rounds',
          'Number of templates and collateral items',
          'Packaging formats and print specifications',
        ],
        after: ['Once your identity is ready, we can carry it across your [website](/services/website-development) and [social media](/services/social-media-marketing).'],
      },
      {
        type: 'prose',
        tag: 'When to rebrand',
        h2: 'Signs your brand needs attention',
        bullets: [
          'Your logo looks different on your signboard, Instagram and visiting card',
          'Customers confuse you with a competitor or cannot remember your name',
          'You have moved upmarket but your visuals still look like when you started',
          'Your team creates designs from scratch every time because there are no templates',
        ],
        after: [
          'A brand project does not have to mean starting over. Sometimes a refined logo, a tighter colour palette and a set of templates is enough to make everything look consistent and more premium. We recommend the smallest change that solves the problem.',
          'Good branding also makes marketing cheaper over time: ads, reels and posts become instantly recognisable, so people remember you after fewer impressions.',
        ],
      },
      {
        type: 'faq',
        faqs: [
          ['How many logo concepts will I see?', 'The number of concepts and revision rounds is agreed in the quote so you know exactly what to expect.'],
          ['Will I get the source files?', 'Yes — editable source files plus PNG, SVG and PDF exports for print and digital use.'],
          ['Can you refresh my existing logo instead of replacing it?', 'Yes. A refresh keeps the recognition you have built while modernising the look.'],
          ['Do you design social media templates?', 'Yes, templates for posts, carousels, stories and highlights so your team can create consistent content.'],
          ['Can you help with brand names and taglines?', 'We can help shape taglines and messaging as part of the discovery phase.'],
        ],
      },
    ],
  },
};

export default servicePages;
