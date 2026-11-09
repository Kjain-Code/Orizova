// AI video production × city pages: /locations/<city>/ai-video-production
// (added 9 Nov 2026). Each page is written for its own market — local
// industries, languages and buying habits — never a copy with the city name
// swapped. No invented clients, numbers or prices.
// Pushed into cityServices (cityServices.js); answers merged in
// locations/answers.js; routes live in data/site/seo.json.

const SERVICE = 'ai-video-production';

const pages = [
  /* ============================== DELHI ============================== */
  {
    city: 'delhi',
    service: SERVICE,
    label: 'AI video production in Delhi',
    banner: 'AI UGC ads, product videos and Hindi–English avatar videos for Delhi brands, traders, coaching institutes and clinics — produced without a shoot and ready for Instagram, YouTube and Meta ads.',
    intro: {
      h2: 'Video for a city that buys on Instagram and WhatsApp',
      paras: [
        'From wholesale markets in Chandni Chowk and Karol Bagh to fashion labels in South Delhi and coaching institutes in Mukherjee Nagar and Laxmi Nagar, Delhi businesses increasingly win customers through short videos. The problem is keeping up: a new offer, a new product or a festive sale every few weeks, and a shoot for each one is slow and costly.',
        'We produce AI videos that keep pace — UGC-style ads for Meta campaigns, product videos made from your catalogue photos, and presenter videos in Hindi and English — and our editors finish them so they look like your brand, not like a generic AI clip. See the full service on our [AI video production](/services/ai-video-production) page.',
      ],
    },
    blocks: [
      {
        type: 'cards',
        tag: 'Popular in Delhi',
        h2: 'AI videos Delhi businesses ask for',
        items: [
          { title: 'Festive & sale ads', desc: 'Diwali, wedding-season and end-of-season offers turned into short ads in days, not weeks.' },
          { title: 'Product videos for traders', desc: 'Catalogue photos of garments, electronics, home goods and jewellery turned into product reels and WhatsApp-ready videos.', to: '/services/ai-product-videos' },
          { title: 'UGC ads for D2C brands', desc: 'Creator-style ads with AI presenters for South and West Delhi fashion, beauty and lifestyle labels.', to: '/services/ai-ugc-videos' },
          { title: 'Coaching & course explainers', desc: 'Batch details, results process and FAQs explained by an AI presenter in Hindi and English.', to: '/industries/education' },
          { title: 'Clinic awareness videos', desc: 'Treatment explainers and clinic introductions — real doctor footage for advice, AI only for visuals and versions.', to: '/industries/clinics' },
          { title: 'Real-estate project teasers', desc: 'Walk-through style teasers and offer videos from renders and brochures, labelled as AI where needed.', to: '/industries/real-estate' },
        ],
      },
      { type: 'videos', tag: 'Our AI work', h2: 'AI videos we have made' },
      {
        type: 'prose',
        tag: 'Delhi specifics',
        h2: 'What works for Delhi audiences',
        bullets: [
          '**Hinglish wins** — most Delhi viewers respond to a natural mix of Hindi and English; we write scripts the way people actually speak',
          '**Price and offer up front** — in markets like Lajpat Nagar and Sarojini, the offer often is the hook',
          '**WhatsApp versions** — square and vertical cuts small enough to forward to customers and resellers',
          '**Locality targeting** — separate versions for East, West, North and South Delhi or NCR when the offer is local',
          '**Trust signals** — real store photos, address and reviews mixed with AI scenes, so the brand feels real',
        ],
      },
      {
        type: 'process',
        h2: 'How we work with Delhi clients',
        steps: [
          { title: 'Call or WhatsApp', desc: 'You share products, offer and audience; we suggest video types.' },
          { title: 'Script in Hinglish', desc: 'Hooks and scripts written for your customers, approved by you.' },
          { title: 'AI production', desc: 'Presenters, scenes and product shots generated and selected.' },
          { title: 'Edit & versions', desc: 'Captions, music, sizes for Reels, feed and WhatsApp.' },
          { title: 'Run & refresh', desc: 'Optional Meta ads management and new versions when ads tire.' },
        ],
      },
      {
        type: 'links',
        h2: 'More for Delhi businesses',
        links: [
          { to: '/locations/delhi', label: 'Digital marketing agency in Delhi' },
          { to: '/locations/delhi/website-development', label: 'Website development in Delhi' },
          { to: '/services/meta-ads', label: 'Meta ads management' },
          { to: '/services/video-editing', label: 'Video editing' },
          { to: '/blog/ai-ugc-video-ads-guide', label: 'Guide: AI UGC video ads' },
        ],
      },
      {
        type: 'faq',
        faqs: [
          ['Do you make AI videos for Delhi businesses?', 'Yes. Our team is based in Delhi NCR and works with Delhi brands, traders, coaching institutes and clinics over calls, WhatsApp and meetings when needed.'],
          ['Can the AI presenter speak Hinglish?', 'Yes. We write scripts in natural Hindi, English or Hinglish and produce matching voice and captions.'],
          ['Can you make product videos from our catalogue photos?', 'Yes. Clear photos from a few angles are usually enough for showcase and lifestyle-style product videos.'],
          ['How fast can a festive ad be ready?', 'Usually within a few days of approving the script, depending on the number of videos and versions.'],
          ['Will the videos be marked as AI?', 'Where rules or platforms require it, yes — we add a clear note such as “Video created using AI”.'],
        ],
      },
    ],
  },

  /* ============================== NOIDA ============================== */
  {
    city: 'noida',
    service: SERVICE,
    label: 'AI video production in Noida',
    banner: 'AI explainer videos for Noida startups and edtech, product videos for manufacturers and exporters, and UGC-style ads for D2C brands — scripted, produced with AI and edited for ads and LinkedIn.',
    intro: {
      h2: 'From Sector 62 startups to Phase 2 factories',
      paras: [
        'Noida is a mix few cities have: IT, SaaS and edtech companies around Sector 62, 63 and 125, manufacturers and export houses in Phase 2 and Sector 63, D2C brands run from small offices, and fast-growing residential markets in Noida Extension. Each needs video for a different reason — explaining a product, showing a catalogue to buyers, or running ads every week.',
        'AI video lets these teams produce professional videos without booking a studio: app and product explainers, catalogue videos for international buyers, and UGC-style ads for testing. Our editors finish every video in your brand style. Explore the full range on [AI video production](/services/ai-video-production).',
      ],
    },
    blocks: [
      {
        type: 'cards',
        tag: 'Popular in Noida',
        h2: 'AI videos Noida companies use',
        items: [
          { title: 'App & SaaS explainers', desc: 'A presenter or animated walkthrough explaining what your software does in under a minute.', to: '/industries/startups-saas' },
          { title: 'Edtech course promos', desc: 'Course launches, batch announcements and FAQs in Hindi and English.', to: '/industries/education' },
          { title: 'Export catalogue videos', desc: 'Product videos for garments, handicrafts and components — English versions for overseas buyers and trade fairs.', to: '/industries/manufacturers-exporters' },
          { title: 'D2C UGC ads', desc: 'Creator-style ads for skincare, apparel and home brands, with many hooks to test.', to: '/services/ai-ugc-videos' },
          { title: 'Founder & hiring videos', desc: 'Short founder messages and employer-brand videos for LinkedIn using a consent-based avatar.', to: '/services/ai-avatar-videos' },
          { title: 'Residential project videos', desc: 'Offer and project-update videos for Noida Extension and Greater Noida launches.', to: '/industries/real-estate' },
        ],
      },
      { type: 'videos', tag: 'Our AI work', h2: 'AI videos we have made' },
      {
        type: 'prose',
        tag: 'Noida specifics',
        h2: 'B2B and B2C need different videos',
        paras: [
          'A SaaS buyer on LinkedIn wants clarity: what problem, for whom, how it works, and proof. A shopper on Instagram wants a hook in the first second and a reason to buy now. We plan Noida projects around that difference — calmer explainers and avatar videos for B2B, fast UGC and product ads for B2C.',
        ],
        bullets: [
          'English-first scripts for international and B2B audiences; Hindi or Hinglish for local consumers',
          'Screen-recording and UI shots mixed with AI scenes for software explainers',
          'Separate cuts for LinkedIn (calmer, captioned) and Reels (fast, hook-led)',
          'Catalogue batches planned product-by-product so every item stays accurate',
        ],
      },
      {
        type: 'process',
        h2: 'Our process for Noida projects',
        steps: [
          { title: 'Discovery call', desc: 'Audience (B2B or B2C), platform and goal of each video.' },
          { title: 'Scripts', desc: 'Clear, jargon-free scripts and hooks for your approval.' },
          { title: 'Produce', desc: 'AI presenters, scenes, product or UI shots combined.' },
          { title: 'Finish', desc: 'Branding, captions, music and platform sizes.' },
          { title: 'Measure', desc: 'Optional ad campaigns and reporting to see what works.' },
        ],
      },
      {
        type: 'links',
        h2: 'More for Noida businesses',
        links: [
          { to: '/locations/noida', label: 'Digital marketing agency in Noida' },
          { to: '/locations/noida/website-development', label: 'Website development in Noida' },
          { to: '/locations/noida/seo', label: 'SEO company in Noida' },
          { to: '/services/ai-avatar-videos', label: 'AI avatar videos' },
          { to: '/blog/ai-video-vs-traditional-video-shoot', label: 'AI video vs a traditional shoot' },
        ],
      },
      {
        type: 'faq',
        faqs: [
          ['Do you work with startups in Noida?', 'Yes. We make explainers, launch videos and ads for Noida startups, SaaS and edtech companies, mostly over calls and video meetings.'],
          ['Can you make an explainer for our software or app?', 'Yes — combining screen recordings of your product with an AI presenter or animated scenes, plus captions.'],
          ['Can exporters use AI product videos?', 'Yes. Product videos made from your catalogue photos work well for buyers, trade-fair screens and WhatsApp catalogues, in English or other languages.'],
          ['Can our founder appear without recording every video?', 'Yes, with a consent-based digital twin made from a short recording. The founder approves how it is used.'],
        ],
      },
    ],
  },

  /* ============================ GURUGRAM ============================ */
  {
    city: 'gurugram',
    service: SERVICE,
    label: 'AI video production in Gurugram',
    banner: 'Premium AI videos for Gurugram D2C brands, startups, real-estate developers, aesthetic clinics and corporates — UGC-style ads, product films and avatar videos built to brand standards.',
    intro: {
      h2: 'AI video that meets Gurugram’s brand bar',
      paras: [
        'Gurugram’s businesses market to some of India’s most demanding audiences: corporate teams around Cyber City and Golf Course Road, buyers of premium homes on Golf Course Extension and the Dwarka Expressway, and shoppers who follow national D2C brands closely. Video that looks cheap or obviously generated works against you here.',
        'So our Gurugram AI work is brand-first: consistent presenters and visual style across a series, product shots that match your packaging exactly, and editing that fits your guidelines. AI gives you the speed and number of versions; we make sure it still looks premium. See the full [AI video production](/services/ai-video-production) service.',
      ],
    },
    blocks: [
      {
        type: 'cards',
        tag: 'Popular in Gurugram',
        h2: 'AI videos Gurugram brands use',
        items: [
          { title: 'D2C performance creatives', desc: 'UGC-style and product ads in batches for weekly testing on Meta and YouTube.', to: '/services/ai-ugc-videos' },
          { title: 'Premium product films', desc: 'Studio-style product videos for skincare, wellness, home and gadget brands.', to: '/services/ai-product-videos' },
          { title: 'Real-estate launch teasers', desc: 'Lifestyle and amenity teasers from renders for premium projects — clearly marked as artist’s impressions.', to: '/industries/real-estate' },
          { title: 'Aesthetic clinic content', desc: 'Treatment explainers and FAQs where AI supports visuals, while advice stays with your real doctors.', to: '/industries/skin-hair-clinics' },
          { title: 'Startup & SaaS explainers', desc: 'Product walkthroughs and investor-style one-minute overviews.', to: '/industries/startups-saas' },
          { title: 'Corporate & HR videos', desc: 'Training, onboarding and internal announcements with consistent AI presenters in several languages.', to: '/services/ai-avatar-videos' },
        ],
      },
      { type: 'videos', tag: 'Our AI work', h2: 'AI videos we have made' },
      {
        type: 'prose',
        tag: 'Gurugram specifics',
        h2: 'Keeping AI video on-brand',
        bullets: [
          'One visual style and set of presenters across a campaign, so videos look like a series',
          'Brand fonts, colours and logo animation built into every edit',
          'Packaging and product details checked shot by shot',
          'Renders and AI scenes for property clearly marked as illustrative',
          'English-first scripts, with Hindi versions where your audience prefers them',
        ],
      },
      {
        type: 'process',
        h2: 'How a Gurugram project runs',
        steps: [
          { title: 'Brand brief', desc: 'Guidelines, references, audience and channels.' },
          { title: 'Concepts', desc: 'Two or three creative directions and scripts.' },
          { title: 'Production', desc: 'Consistent AI presenters, scenes and product shots.' },
          { title: 'Post', desc: 'Grading, typography, sound and captions to brand standard.' },
          { title: 'Rollout', desc: 'Platform versions and optional ad testing.' },
        ],
      },
      {
        type: 'links',
        h2: 'More for Gurugram businesses',
        links: [
          { to: '/locations/gurugram', label: 'Digital marketing agency in Gurugram' },
          { to: '/locations/gurugram/website-development', label: 'Website development in Gurugram' },
          { to: '/services/branding-designing', label: 'Branding & design' },
          { to: '/services/ai-product-videos', label: 'AI product videos' },
          { to: '/blog/ai-video-production-cost-india', label: 'What AI videos cost' },
        ],
      },
      {
        type: 'faq',
        faqs: [
          ['Can AI videos look premium enough for our brand?', 'Yes, when they are planned and edited properly — consistent presenters and style, accurate product shots and brand-standard finishing. We do not deliver raw AI clips.'],
          ['Can you make videos for a real-estate launch?', 'Yes — lifestyle and amenity teasers from renders and brochures, clearly marked as illustrative, plus offer and site-update videos.'],
          ['Do you follow our brand guidelines?', 'Yes. Fonts, colours, logo use and tone are agreed before production.'],
          ['Do you work on-site in Gurugram?', 'We are based in Delhi NCR and meet when useful, but most AI video work runs over calls and shared review links.'],
        ],
      },
    ],
  },

  /* ============================== MUMBAI ============================== */
  {
    city: 'mumbai',
    service: SERVICE,
    label: 'AI video production in Mumbai',
    banner: 'AI UGC ads, product videos and multilingual avatar videos for Mumbai D2C, fashion and beauty brands, real-estate projects and service businesses — high-volume ad creative without a production day.',
    intro: {
      h2: 'More ad creative, without another shoot day',
      paras: [
        'Mumbai has India’s deepest film and ad-production talent, and big brand films will keep being shot here. But most growing brands do not need one big film — they need a steady flow of ads to test every week: new hooks, new offers, new formats. That is where AI video fits best.',
        'We produce AI UGC-style ads, product videos and presenter videos for Mumbai’s fashion, beauty and lifestyle labels, consumer brands and service businesses, in English, Hindi and Marathi. Your best-performing messages can later be reshot with real creators — AI helps you find them faster. More on [AI video production](/services/ai-video-production).',
      ],
    },
    blocks: [
      {
        type: 'cards',
        tag: 'Popular in Mumbai',
        h2: 'AI videos Mumbai brands use',
        items: [
          { title: 'Fashion & beauty UGC ads', desc: 'Try-on style and “my routine” ads with AI presenters, many hooks per product.', to: '/services/ai-ugc-videos' },
          { title: 'Lifestyle product videos', desc: 'Products placed in aspirational scenes for Instagram and marketplaces.', to: '/services/ai-product-videos' },
          { title: 'Marathi & Hindi versions', desc: 'One campaign in English, Hindi and Marathi for Thane, Navi Mumbai and Pune audiences.' },
          { title: 'Real-estate offer videos', desc: 'Offer, possession and amenity videos for projects across the western suburbs, Thane and Navi Mumbai.', to: '/industries/real-estate' },
          { title: 'Service explainers', desc: 'Clear explainers for agencies, consultants and professional services — general information only, never personal advice from an AI.', to: '/industries/professional-services' },
          { title: 'Restaurant & cafe reels', desc: 'Menu launches and offers as short reels to support your real food footage.', to: '/industries/restaurants-cafes' },
        ],
      },
      { type: 'videos', tag: 'Our AI work', h2: 'AI videos we have made' },
      {
        type: 'prose',
        tag: 'Mumbai specifics',
        h2: 'Where AI fits next to Mumbai’s production world',
        paras: [
          'AI does not replace a well-shot brand film or real customer stories. It fills the gap between them: the dozens of performance ads, product videos and quick explainers a brand needs every month. Used this way, it lowers the cost of testing and keeps your ads fresh.',
        ],
        bullets: [
          'Use AI for testing hooks, product videos, offers and multilingual versions',
          'Use real shoots and creators for hero films, testimonials and proof',
          'Keep one consistent look so AI and shot content sit together in your feed',
          'Financial and health topics: real experts only — AI never gives advice in your ads',
        ],
      },
      {
        type: 'process',
        h2: 'Working with Mumbai teams',
        steps: [
          { title: 'Brief', desc: 'Product, audience, channels and what has worked before.' },
          { title: 'Hooks & scripts', desc: 'Several angles per product for testing.' },
          { title: 'Produce', desc: 'AI presenters, lifestyle scenes and product shots.' },
          { title: 'Edit', desc: 'Captions, sound, brand finish and language versions.' },
          { title: 'Iterate', desc: 'New batches based on what performs.' },
        ],
      },
      {
        type: 'links',
        h2: 'More for Mumbai businesses',
        links: [
          { to: '/locations/mumbai', label: 'Digital marketing agency in Mumbai' },
          { to: '/locations/mumbai/website-development', label: 'Website development in Mumbai' },
          { to: '/locations/mumbai/seo', label: 'SEO company in Mumbai' },
          { to: '/industries/ecommerce-d2c', label: 'E-commerce & D2C brands' },
          { to: '/blog/ai-ugc-video-ads-guide', label: 'Guide: AI UGC video ads' },
        ],
      },
      {
        type: 'faq',
        faqs: [
          ['Do you make AI videos for Mumbai brands?', 'Yes. We work remotely with Mumbai brands over calls and shared review links; our team is based in Delhi NCR.'],
          ['Can you make videos in Marathi?', 'Yes — Marathi, Hindi and English versions with matching captions.'],
          ['Should we stop shooting with creators?', 'No. Use AI to test messages quickly and produce volume; keep real creators and customers for proof and the best-performing concepts.'],
          ['Can AI videos be used for financial services?', 'For general explainers, yes. AI presenters will not give personal financial advice, and claims must follow the rules that apply to your business.'],
        ],
      },
    ],
  },

  /* ============================ BENGALURU ============================ */
  {
    city: 'bengaluru',
    service: SERVICE,
    label: 'AI video production in Bengaluru',
    banner: 'AI explainers, launch videos and UGC-style ad creatives for Bengaluru startups, SaaS and consumer-tech companies — produced in batches for testing, in English, Kannada and Hindi.',
    intro: {
      h2: 'Creative volume for growth teams',
      paras: [
        'Bengaluru’s startups — from Koramangala and HSR Layout to Indiranagar and Whitefield — run on experiments. Growth teams test landing pages, audiences and offers every week, and the bottleneck is usually creative: not enough new videos to test.',
        'We make AI video a reliable part of that loop: product explainers and feature-launch videos, UGC-style ads with several hooks per script, app walkthroughs combining screen recordings with AI presenters, and language versions for users across India. More on our [AI video production](/services/ai-video-production) service.',
      ],
    },
    blocks: [
      {
        type: 'cards',
        tag: 'Popular in Bengaluru',
        h2: 'AI videos Bengaluru teams order',
        items: [
          { title: 'Feature launch videos', desc: 'Short videos for each release — what is new, why it matters, how to use it.', to: '/industries/startups-saas' },
          { title: 'App install & UGC ads', desc: 'Creator-style ads with AI presenters and real app footage, in many hooks.', to: '/services/ai-ugc-videos' },
          { title: 'Product explainers', desc: 'One-minute overviews for websites, sales decks and investor updates.' },
          { title: 'Consumer product videos', desc: 'D2C and hardware products shown in clean, lifestyle and in-use scenes.', to: '/services/ai-product-videos' },
          { title: 'Kannada, Hindi & English versions', desc: 'One script produced for users across Karnataka and the rest of India.' },
          { title: 'Help-centre & onboarding videos', desc: 'AI presenter tutorials that are easy to update when the product changes.', to: '/services/ai-avatar-videos' },
        ],
      },
      { type: 'videos', tag: 'Our AI work', h2: 'AI videos we have made' },
      {
        type: 'prose',
        tag: 'Built for testing',
        h2: 'How we fit into a growth team’s workflow',
        bullets: [
          'Batches planned around your testing calendar — hooks, angles and formats per sprint',
          'Naming and versioning that make results easy to read in your ad reports',
          'Real product UI and app screens wherever possible, so ads match the actual experience',
          'Quick turnarounds for new versions of winning concepts',
          'Clear notes where AI labels are needed on Meta, YouTube and in-app stores',
        ],
      },
      {
        type: 'process',
        h2: 'A typical Bengaluru engagement',
        steps: [
          { title: 'Kick-off', desc: 'Goals, metrics, audiences and current best ads.' },
          { title: 'Test plan', desc: 'Which hooks and angles to test first.' },
          { title: 'Batch production', desc: 'Scripts, AI presenters, UI capture and edits.' },
          { title: 'Review', desc: 'One round of feedback on a shared link.' },
          { title: 'Next batch', desc: 'New versions built from the results.' },
        ],
      },
      {
        type: 'links',
        h2: 'More for Bengaluru businesses',
        links: [
          { to: '/locations/bengaluru', label: 'Digital marketing agency in Bengaluru' },
          { to: '/locations/bengaluru/website-development', label: 'Website development in Bengaluru' },
          { to: '/services/app-development', label: 'App development' },
          { to: '/services/google-ads', label: 'Google Ads' },
          { to: '/blog/ai-video-vs-traditional-video-shoot', label: 'AI video vs a traditional shoot' },
        ],
      },
      {
        type: 'faq',
        faqs: [
          ['Do you work with Bengaluru startups remotely?', 'Yes. Most AI video work runs over calls, Slack or WhatsApp and shared review links.'],
          ['Can you include our real app screens?', 'Yes. Screen recordings of your product combined with AI presenters make ads more accurate and trustworthy.'],
          ['Can you produce Kannada versions?', 'Yes — Kannada, Hindi and English, with captions checked for each language.'],
          ['Can you produce ads every week?', 'Yes. Monthly creative packages with weekly or fortnightly batches are common for growth teams.'],
        ],
      },
    ],
  },

  /* ============================ CHANDIGARH ============================ */
  {
    city: 'chandigarh',
    service: SERVICE,
    label: 'AI video production in Chandigarh',
    banner: 'AI videos for Chandigarh Tricity businesses — study-abroad and IELTS promos, real-estate offers in Mohali and Zirakpur, clinic explainers and boutique fashion reels, in Punjabi, Hindi and English.',
    intro: {
      h2: 'Video in the language your Tricity customers speak',
      paras: [
        'Chandigarh, Mohali and Panchkula have their own marketing mix: immigration and study-abroad consultants and IELTS institutes, real-estate projects across Mohali, New Chandigarh and Zirakpur, aesthetic and dental clinics, and boutiques and fashion labels selling Punjabi suits and occasion wear across India and abroad.',
        'For these businesses, video works best when it feels local — Punjabi or Hindi voice, familiar settings, and the offer stated clearly. AI video lets you produce that in several languages and versions without a shoot for each. See the full [AI video production](/services/ai-video-production) service.',
      ],
    },
    blocks: [
      {
        type: 'cards',
        tag: 'Popular in the Tricity',
        h2: 'AI videos Tricity businesses use',
        items: [
          { title: 'Study-abroad & IELTS promos', desc: 'Intake announcements, course explainers and FAQs — with no promises of visas or results.', to: '/industries/immigration-consultants' },
          { title: 'Real-estate offer videos', desc: 'Project, offer and amenity videos for Mohali, New Chandigarh and Zirakpur launches.', to: '/industries/real-estate' },
          { title: 'Boutique & fashion reels', desc: 'Suits, lehengas and occasion wear shown on AI models from your product photos — labelled where needed.', to: '/services/ai-product-videos' },
          { title: 'Clinic explainers', desc: 'Treatment and procedure explainers where AI supports visuals and your doctors give the advice.', to: '/industries/skin-hair-clinics' },
          { title: 'Punjabi & Hindi versions', desc: 'One script in Punjabi, Hindi and English for Tricity, Punjab and NRI audiences.' },
          { title: 'UGC-style ads', desc: 'Creator-style ads with AI presenters for local brands running Meta campaigns.', to: '/services/ai-ugc-videos' },
        ],
      },
      { type: 'videos', tag: 'Our AI work', h2: 'AI videos we have made' },
      {
        type: 'prose',
        tag: 'Tricity specifics',
        h2: 'Getting it right for Chandigarh audiences',
        bullets: [
          '**Language** — Punjabi for local reach, Hindi for wider Punjab and Haryana, English for students and NRI families',
          '**Honest claims** — immigration and education videos never promise visas, scores or admissions',
          '**NRI timing** — versions and captions that work for viewers in Canada, the UK and Australia',
          '**Local proof** — mix AI scenes with real office, clinic or site photos so viewers trust the business',
        ],
      },
      {
        type: 'process',
        h2: 'How we work with Tricity clients',
        steps: [
          { title: 'Brief', desc: 'Services, offer, audience and languages.' },
          { title: 'Scripts', desc: 'Punjabi, Hindi or English scripts for approval.' },
          { title: 'Produce', desc: 'AI presenters, scenes and product or property visuals.' },
          { title: 'Edit', desc: 'Captions, music and versions for Reels, feed and WhatsApp.' },
          { title: 'Launch', desc: 'Optional Meta ads targeting the Tricity or NRI audiences.' },
        ],
      },
      {
        type: 'links',
        h2: 'More for Chandigarh businesses',
        links: [
          { to: '/locations/chandigarh', label: 'Digital marketing agency in Chandigarh' },
          { to: '/locations/chandigarh/website-development', label: 'Website development in Chandigarh' },
          { to: '/locations/mohali', label: 'Digital marketing in Mohali' },
          { to: '/locations/panchkula', label: 'Digital marketing in Panchkula' },
          { to: '/blog/ai-video-production-cost-india', label: 'What AI videos cost' },
        ],
      },
      {
        type: 'faq',
        faqs: [
          ['Can you make AI videos in Punjabi?', 'Yes — Punjabi, Hindi and English versions with matching captions.'],
          ['Can immigration consultants use AI videos?', 'Yes, for announcements, explainers and FAQs. Videos must not promise visas or results, and advice should come from your licensed team.'],
          ['Can you show our suits or lehengas on a model without a shoot?', 'Yes, using AI models from your product photos, with every outfit checked for accuracy and labelled where required.'],
          ['Do you serve Mohali, Panchkula and Zirakpur too?', 'Yes — we work with businesses across the Tricity, mostly over calls and WhatsApp.'],
        ],
      },
    ],
  },
];

const answers = {
  '/locations/delhi/ai-video-production': {
    q: 'Who makes AI videos for businesses in Delhi?',
    a: 'Orizova Digital, a Delhi NCR agency, produces AI videos for Delhi brands, traders, coaching institutes, clinics and real-estate projects — UGC-style ads for Meta campaigns, product videos from catalogue photos, festive offer ads and presenter videos in Hindi, English and Hinglish, finished by human editors and labelled as AI where required.',
  },
  '/locations/noida/ai-video-production': {
    q: 'Who makes AI explainer and product videos in Noida?',
    a: 'Orizova Digital makes AI videos for Noida startups, SaaS and edtech companies, manufacturers and exporters, D2C brands and real-estate projects — software explainers mixing screen recordings with AI presenters, export catalogue videos, UGC-style ads and consent-based founder avatar videos for LinkedIn.',
  },
  '/locations/gurugram/ai-video-production': {
    q: 'Which agency makes premium AI videos in Gurugram?',
    a: 'Orizova Digital produces brand-standard AI videos for Gurugram D2C brands, startups, real-estate developers, aesthetic clinics and corporates — UGC-style ad batches, studio-style product films, launch teasers from renders marked as illustrative, and multilingual corporate and HR videos with consistent AI presenters.',
  },
  '/locations/mumbai/ai-video-production': {
    q: 'Who produces AI UGC ads and product videos for Mumbai brands?',
    a: 'Orizova Digital produces AI UGC-style ads, lifestyle product videos and multilingual avatar videos for Mumbai fashion, beauty and D2C brands, real-estate projects and service businesses — in English, Hindi and Marathi — for weekly ad testing, alongside real shoots and creators for hero films and testimonials.',
  },
  '/locations/bengaluru/ai-video-production': {
    q: 'Who makes AI ad creatives and explainers for Bengaluru startups?',
    a: 'Orizova Digital makes AI videos for Bengaluru startups, SaaS and consumer-tech teams — feature-launch videos, product explainers, app walkthroughs with real UI and AI presenters, UGC-style ad batches for testing, and Kannada, Hindi and English versions, delivered in regular batches.',
  },
  '/locations/chandigarh/ai-video-production': {
    q: 'Who makes AI videos in Chandigarh, Mohali and Panchkula?',
    a: 'Orizova Digital makes AI videos for Chandigarh Tricity businesses — study-abroad and IELTS promos without visa or score promises, real-estate offer videos for Mohali, New Chandigarh and Zirakpur, clinic explainers, boutique fashion reels on AI models, and UGC-style ads — in Punjabi, Hindi and English.',
  },
};

const meta = {
  '/locations/delhi/ai-video-production': { title: 'AI Video Production in Delhi – UGC & Product Ads', description: 'AI UGC ads, product videos and Hindi–English avatar videos for Delhi brands, traders, coaching institutes and clinics — made without a shoot.', h1: 'AI Video Production in Delhi' },
  '/locations/noida/ai-video-production': { title: 'AI Video Production in Noida – Explainers & Ads', description: 'AI explainers for Noida startups and edtech, catalogue videos for exporters and UGC-style ads for D2C brands — scripted, produced and edited.', h1: 'AI Video Production in Noida' },
  '/locations/gurugram/ai-video-production': { title: 'AI Video Production in Gurugram | Orizova Digital', description: 'Premium AI videos for Gurugram D2C brands, startups, real-estate developers and clinics — UGC ads, product films and avatar videos on brand.', h1: 'AI Video Production in Gurugram' },
  '/locations/mumbai/ai-video-production': { title: 'AI Video Production in Mumbai – UGC & Product Ads', description: 'AI UGC ads, product videos and multilingual avatar videos for Mumbai fashion, beauty and D2C brands — English, Hindi and Marathi versions.', h1: 'AI Video Production in Mumbai' },
  '/locations/bengaluru/ai-video-production': { title: 'AI Video Production in Bengaluru for Startups', description: 'AI explainers, launch videos and UGC-style ad creatives for Bengaluru startups and SaaS — produced in batches, in English, Kannada and Hindi.', h1: 'AI Video Production in Bengaluru' },
  '/locations/chandigarh/ai-video-production': { title: 'AI Video Production in Chandigarh | Orizova', description: 'AI videos for Chandigarh, Mohali and Panchkula businesses — study-abroad promos, property offers, clinic explainers and fashion reels.', h1: 'AI Video Production in Chandigarh' },
};

const aiVideoCities = { pages, answers, meta };
export default aiVideoCities;
