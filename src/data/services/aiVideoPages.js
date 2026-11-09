// Long-form copy for the AI video service pages (added 9 Nov 2026):
//   /services/ai-video-production   (pillar)
//   /services/ai-ugc-videos          /services/ai-product-videos
//   /services/ai-avatar-videos
// Same rules as servicePages.js: original writing, no invented numbers,
// prices, clients or results. Platform and legal rules are dated and linked.
// Sample videos come from data/work/creativeWork.js (category "AI Videos",
// optional `kind`: ugc | product | avatar | reel | explainer).

const RULES_BLOCK = {
  type: 'prose',
  tag: 'Done responsibly',
  h2: 'AI labels, consent and honest claims',
  paras: [
    'AI video is now covered by clear rules, and we follow them on every project. India’s amended IT Rules (notified on 10 February 2026, in force from 20 February 2026) require platforms to label realistic AI-generated content. YouTube asks creators to [disclose realistic altered or synthetic content](https://blog.youtube/news-and-events/disclosing-ai-generated-content), Meta adds “AI info” labels to many AI-made ads, and the Advertising Standards Council of India released draft guidelines in May 2026 on labelling AI in advertising.',
  ],
  bullets: [
    'We tell you where an AI label is needed, and add a simple on-screen note such as “Video created using AI” where it applies',
    'No fake testimonials, fake customers or AI “doctors” and “experts” giving advice — the claims in the video are your real product facts',
    'A real person’s face or voice is used only with their written consent',
    'Product visuals show what the product really looks like and does',
  ],
};

const aiVideoPages = {
  /* ------------------------------------------------------------------ */
  'ai-video-production': {
    banner: 'AI UGC-style ads, product videos, AI avatar videos, reels and multilingual versions — scripted around your product, produced with the latest AI video tools and finished by human editors. No studio, no shoot day.',
    intro: {
      h2: 'Video content at the speed ads and reels now need',
      paras: [
        'Brands that do well on Instagram, YouTube and Meta ads publish a lot of video and keep testing new versions. A traditional shoot — models, location, crew, edit — makes that slow and expensive. AI video changes the maths: from a script and your product photos, we can produce UGC-style ads, product videos and presenter videos in days, in several hooks and languages, and refresh them whenever an ad starts to tire.',
        'AI alone is not the hard part — anyone can generate a clip. What makes an AI video sell is the same as any ad: a hook that stops the scroll, a script built on the reason people buy, honest product visuals, clean editing and captions, and testing. That is what we do, with our [video editing](/services/video-editing) team finishing every video and our [Meta Ads](/services/meta-ads) team using them in real campaigns.',
      ],
    },
    blocks: [
      {
        type: 'cards',
        tag: 'What we make',
        h2: 'AI videos we produce',
        items: [
          { title: 'AI UGC video ads', desc: 'Creator-style talking-head ads with AI presenters — many hooks and angles for ad testing.', to: '/services/ai-ugc-videos' },
          { title: 'AI product videos', desc: 'Studio-style product shots, lifestyle scenes and launch ads made from your product photos.', to: '/services/ai-product-videos' },
          { title: 'AI avatar & spokesperson videos', desc: 'A stock AI presenter, or a consent-based digital twin of you, explaining your service in many languages.', to: '/services/ai-avatar-videos' },
          { title: 'AI reels & short-form content', desc: 'Scroll-stopping reels, trend formats and visual stories for Instagram and YouTube Shorts.' },
          { title: 'Multilingual voiceovers & dubbing', desc: 'Hindi, English and regional-language versions of one video, with matching captions.' },
          { title: 'Explainer & promo videos', desc: 'Short explainers for services, apps and offers — animated scenes, text and voice.' },
        ],
      },
      {
        type: 'videos',
        tag: 'Our AI work',
        h2: 'AI videos made by Orizova Digital',
        intro: 'A selection of AI videos we have produced. Tap any video to watch it with sound — more of our edits are in the [creative work gallery](/creative-work).',
      },
      {
        type: 'prose',
        tag: 'AI vs shoot',
        h2: 'AI video or a traditional shoot?',
        paras: [
          'Both have a place. AI is strongest when you need many versions quickly; a real shoot is still best when trust depends on seeing real people, places and results.',
        ],
        table: {
          caption: 'AI video production vs a traditional video shoot',
          head: ['', 'AI video', 'Traditional shoot'],
          rows: [
            ['Speed', 'Days, not weeks; new versions quickly', 'Planning, shoot day and edit — usually weeks'],
            ['Versions', 'Many hooks, languages and formats from one script', 'Each extra version usually means more shooting or editing'],
            ['Cost drivers', 'Scripts, number of videos, versions and editing', 'Crew, talent, location, equipment and edit'],
            ['Best for', 'Ad testing, product videos, explainers, regular reels', 'Testimonials, real places, people and before/after proof'],
            ['Watch out for', 'Must look natural and follow AI-label rules', 'Slower to refresh when ads fatigue'],
          ],
          note: 'Many brands use both: AI to find the winning message fast, then a real shoot or real customer videos for the best performers.',
        },
      },
      {
        type: 'process',
        h2: 'How an AI video project works',
        steps: [
          { title: 'Brief', desc: 'Product, audience, platform, offer and what makes people buy.' },
          { title: 'Script & hooks', desc: 'Scripts and several opening hooks for you to approve.' },
          { title: 'Production', desc: 'AI presenters, scenes and product shots generated and selected.' },
          { title: 'Edit & finish', desc: 'Our editors add captions, music, branding and pacing.' },
          { title: 'Deliver & test', desc: 'Formats for each platform; we can run and test them as ads.' },
        ],
      },
      {
        type: 'prose',
        tag: 'Who it is for',
        h2: 'Businesses that get the most from AI video',
        bullets: [
          '[E-commerce & D2C brands](/industries/ecommerce-d2c) that need fresh ad creatives every week',
          'Product brands launching new items, offers and festive campaigns',
          '[Clinics](/industries/skin-hair-clinics), [coaching institutes](/industries/education) and service businesses that want explainers in Hindi and English',
          '[Real estate](/industries/real-estate) and [hotels](/industries/hotels-travel) promoting projects and offers between shoots',
          '[Startups & SaaS](/industries/startups-saas) explaining an app or product in under a minute',
          'Agencies and marketers who need UGC-style ads at volume for testing',
        ],
      },
      RULES_BLOCK,
      {
        type: 'prose',
        tag: 'Pricing',
        h2: 'What affects the cost of AI video production?',
        bullets: [
          'Type of video: UGC ad, product video, avatar explainer or reel',
          'Length, and how many videos and hook versions you need',
          'Number of languages and aspect ratios',
          'Custom avatar or digital twin vs stock AI presenters',
          'Level of editing: captions, motion graphics, music and sound design',
          'One-off project or a monthly creative package',
        ],
        after: ['We share a fixed, written quote after a short call — see [how we work](/about).'],
      },
      {
        type: 'links',
        h2: 'AI video near you',
        links: [
          { to: '/locations/delhi/ai-video-production', label: 'AI video production in Delhi' },
          { to: '/locations/noida/ai-video-production', label: 'AI video production in Noida' },
          { to: '/locations/gurugram/ai-video-production', label: 'AI video production in Gurugram' },
          { to: '/locations/mumbai/ai-video-production', label: 'AI video production in Mumbai' },
          { to: '/locations/bengaluru/ai-video-production', label: 'AI video production in Bengaluru' },
          { to: '/locations/chandigarh/ai-video-production', label: 'AI video production in Chandigarh' },
        ],
      },
      {
        type: 'faq',
        faqs: [
          ['What is AI video production?', 'Making marketing videos with AI tools — AI presenters, AI-generated scenes and product shots, AI voices and dubbing — guided by a human script and finished by human editors, instead of filming everything with a crew.'],
          ['Do AI videos work for ads?', 'Yes, especially for testing. AI makes it practical to try many hooks and angles quickly. The winning messages can then be scaled with AI or re-made with real creators.'],
          ['Do I need to send footage?', 'No. Usually your product photos, logo, key facts and a few references are enough. If you have footage, we can mix it in.'],
          ['Which languages can you make videos in?', 'English and Hindi most often, and other Indian languages on request, with matching captions.'],
          ['Will the video be labelled as AI?', 'Where rules or platforms require it, yes — we will tell you when, and add a clear note such as “Video created using AI”.'],
          ['How long does it take?', 'Usually a few days from approved script to first draft, depending on the number of videos and versions.'],
        ],
      },
    ],
  },

  /* ------------------------------------------------------------------ */
  'ai-ugc-videos': {
    banner: 'UGC-style video ads made with AI presenters — the “real person talking to camera” format that works on Instagram and Meta ads, scripted around your product and produced in many hooks, lengths and languages.',
    intro: {
      h2: 'The ad format people stop for — without hiring creators for every test',
      paras: [
        'User-generated-content (UGC) style ads look like a real person recommending a product on their phone, not a polished commercial. That is why they blend into Instagram and Facebook feeds and often hold attention better. The catch: testing ten hooks with real creators means ten shoots.',
        'AI UGC ads solve the testing problem. We write scripts from your product’s real benefits and customer questions, produce them with realistic AI presenters, and give you many versions — different hooks, angles, lengths and languages — so your [Meta Ads](/services/meta-ads) can find what works quickly. For the full range of AI videos, see [AI video production](/services/ai-video-production).',
      ],
    },
    blocks: [
      {
        type: 'cards',
        tag: 'Formats',
        h2: 'AI UGC ad formats we make',
        items: [
          { title: 'Problem → solution', desc: 'The presenter names a problem your customer has, then shows how the product fixes it.' },
          { title: 'Product walkthrough', desc: 'Unboxing-style or “here’s how I use it” demos built around your product visuals.' },
          { title: 'Top reasons / listicle', desc: '“3 reasons I switched to…” — quick, scannable and easy to test.' },
          { title: 'Offer & urgency', desc: 'Launches, sales and festive offers with a clear call to action.' },
          { title: 'Objection handling', desc: 'Price, quality or “does it really work?” answered in a natural, honest way.' },
          { title: 'Language & regional versions', desc: 'The same ad in Hindi, English or a regional language, with captions.' },
        ],
      },
      {
        type: 'videos',
        kind: 'ugc',
        tag: 'Samples',
        h2: 'AI UGC ads we have produced',
      },
      {
        type: 'prose',
        tag: 'Testing',
        h2: 'Built for ad testing, not just one video',
        paras: [
          'The value of AI UGC is speed of learning. A typical batch has one core script and several opening hooks, so you can see which angle earns the most watch time, clicks and enquiries. The winners get new versions; the losers are replaced. When a message clearly works, it is worth remaking with real customers or creators too.',
        ],
        bullets: [
          '3–5 different hooks for each script, so the first seconds can be tested',
          'Versions in 9:16 for Reels and Stories, 1:1 and 4:5 for feeds',
          'Captions burned in, because most people watch without sound',
          'Clear call to action that matches your landing page or WhatsApp',
        ],
      },
      {
        type: 'process',
        h2: 'From brief to live ads',
        steps: [
          { title: 'Product brief', desc: 'Benefits, proof, customer questions, offer and target audience.' },
          { title: 'Scripts & hooks', desc: 'Written in natural, spoken language — you approve before production.' },
          { title: 'AI presenters', desc: 'Presenters chosen to suit your audience; scenes and product shots added.' },
          { title: 'Edit', desc: 'Captions, B-roll, music and pacing tuned for each platform.' },
          { title: 'Launch & learn', desc: 'Run as ads, compare results, and make the next batch from what worked.' },
        ],
      },
      {
        type: 'prose',
        tag: 'Where it fits',
        h2: 'When AI UGC works best — and when it doesn’t',
        bullets: [
          'Great for: D2C and e-commerce products, apps, offers, impulse and everyday purchases, and testing new markets or languages',
          'Great for: refreshing ads quickly when results start to drop',
          'Use real people instead for: testimonials and reviews, before/after results, and anything medical or financial where trust is everything',
          'Never: presenting an AI person as a real customer or an expert giving professional advice',
        ],
      },
      RULES_BLOCK,
      {
        type: 'prose',
        tag: 'Pricing',
        h2: 'What affects the cost of AI UGC ads?',
        bullets: [
          'Number of scripts and hook versions per batch',
          'Video length and number of aspect ratios',
          'Languages and voiceovers',
          'Editing depth: B-roll, product shots, motion text',
          'One-off batch or a monthly testing package',
        ],
      },
      {
        type: 'faq',
        faqs: [
          ['What is an AI UGC video?', 'A video ad in the style of user-generated content — a person talking to camera about a product — where the presenter and some scenes are created with AI instead of filmed with a real creator.'],
          ['Are AI UGC ads allowed on Meta and Instagram?', 'Yes. Meta may add an “AI info” label, and in India realistic AI content should be labelled. The ad must not mislead — no fake reviews or false claims.'],
          ['Can the AI presenter speak Hindi?', 'Yes. We produce Hindi, English and other Indian-language versions with matching captions.'],
          ['How many versions should I test?', 'Start with a few hooks per script so you can compare. We plan the number with you based on your ad budget.'],
          ['Do AI UGC ads replace real creators?', 'Not completely. They are best for fast testing and volume; for trust-heavy categories, real customer videos still matter.'],
        ],
      },
    ],
  },

  /* ------------------------------------------------------------------ */
  'ai-product-videos': {
    banner: 'Product videos created with AI from your existing product photos — showcase shots, lifestyle scenes, close-ups and launch ads for your website, marketplaces, Instagram and Meta ads.',
    intro: {
      h2: 'Every product deserves a video — now it can have one',
      paras: [
        'Shoppers want to see a product move: how it looks from every side, how big it is, how it is used. Most brands have good photos but no video for most of their catalogue, because shooting every product is slow and costly.',
        'With AI we turn your product photos into short videos: rotating showcase shots, the product placed in real-life settings, detail close-ups and ad-ready cuts with text and music. We keep the product itself accurate — colour, shape, label and size — and build the scene around it. It is part of our wider [AI video production](/services/ai-video-production) service.',
      ],
    },
    blocks: [
      {
        type: 'cards',
        tag: 'What we make',
        h2: 'AI product video types',
        items: [
          { title: 'Showcase & 360-style shots', desc: 'Smooth, studio-style motion around the product on a clean background.' },
          { title: 'Lifestyle scenes', desc: 'The product in a kitchen, bathroom, office, gym or outdoors — where your customer uses it.' },
          { title: 'Detail close-ups', desc: 'Texture, finish, ingredients and features shown up close.' },
          { title: 'Launch & offer ads', desc: 'New arrivals, sales and festive campaigns with text and a call to action.' },
          { title: 'Marketplace & website videos', desc: 'Short loops for product pages, Amazon/Flipkart-style listings and catalogues.' },
          { title: 'AI model & try-on style', desc: 'Fashion and accessories shown on AI models — clearly labelled where required.' },
        ],
      },
      {
        type: 'videos',
        kind: 'product',
        tag: 'Samples',
        h2: 'AI product videos we have made',
      },
      {
        type: 'prose',
        tag: 'What we need',
        h2: 'What you send us',
        bullets: [
          'Clear product photos — front, back and side; a white or plain background is best',
          'Product facts: size, materials, key features, price or offer (if shown)',
          'Your logo, brand colours and any packaging shots',
          'A few reference videos you like (optional)',
        ],
        after: ['Better photos give better videos. If your photos are not ready, we can advise on simple phone product photography.'],
      },
      {
        type: 'process',
        h2: 'How we make your product video',
        steps: [
          { title: 'Product & goal', desc: 'Which products, where the video will run, and the main message.' },
          { title: 'Shot list', desc: 'Scenes, angles and text planned per product.' },
          { title: 'Generate & select', desc: 'Scenes created with AI; only shots that keep the product accurate are used.' },
          { title: 'Edit', desc: 'Text, music, pacing and your branding added.' },
          { title: 'Deliver', desc: 'Sizes for website, marketplaces, Reels and ads.' },
        ],
      },
      {
        type: 'prose',
        tag: 'Accuracy',
        h2: 'Your product must look like your product',
        paras: [
          'AI can change small details — a label, a colour shade, a button. We check every shot against your photos and reject anything that misrepresents the product. Showing features a product does not have would mislead customers and break advertising rules, so the video only shows what the product really is and does.',
        ],
      },
      RULES_BLOCK,
      {
        type: 'prose',
        tag: 'Pricing',
        h2: 'What affects the cost of AI product videos?',
        bullets: [
          'Number of products and videos per product',
          'Simple showcase vs lifestyle scenes or AI models',
          'Length, aspect ratios and marketplace formats',
          'Text, motion graphics and voiceover',
          'One-off catalogue project or monthly content',
        ],
        after: ['Selling online? See our [e-commerce solutions](/services/ecommerce-solutions) and our guide to [Shopify vs WooCommerce vs a custom store](/blog/shopify-vs-woocommerce-vs-custom-website-india).'],
      },
      {
        type: 'faq',
        faqs: [
          ['Can you make a product video from photos only?', 'Yes. Clear photos from a few angles are usually enough to create showcase and lifestyle videos.'],
          ['Will the product look exactly the same?', 'We check every shot against your photos and only use shots that keep the product accurate. Very fine text on labels may be re-added in editing for clarity.'],
          ['Are AI product videos allowed on Amazon or Flipkart?', 'Marketplaces have their own video rules and formats; we size and edit videos to their guidelines and avoid claims the listing cannot support.'],
          ['Can you show the product on a model?', 'Yes, with AI models for fashion and accessories — labelled where rules require it.'],
          ['How many products can you do at once?', 'From one hero product to a whole catalogue; larger batches are planned in phases.'],
        ],
      },
    ],
  },

  /* ------------------------------------------------------------------ */
  'ai-avatar-videos': {
    banner: 'Presenter videos with an AI avatar — a ready-made AI presenter, or a digital twin of you created with your consent — for explainers, FAQs, training, announcements and multilingual marketing.',
    intro: {
      h2: 'A presenter on camera, every time you need one',
      paras: [
        'Explaining a service, answering common questions, welcoming new customers or training a team works better on video — but recording yourself every time is hard to keep up. AI avatar videos let a realistic presenter deliver your script, and re-record it in minutes when something changes.',
        'You can use a stock AI presenter, or — with your written consent — a digital twin created from a short recording of you, so you can “appear” in videos in Hindi, English and other languages without filming each one. It is part of our [AI video production](/services/ai-video-production) service.',
      ],
    },
    blocks: [
      {
        type: 'cards',
        tag: 'Uses',
        h2: 'What businesses use AI avatar videos for',
        items: [
          { title: 'Service explainers', desc: 'What you do, who it is for and how to start — for your website and ads.' },
          { title: 'FAQ videos', desc: 'Short answers to the questions your team hears every day.' },
          { title: 'Founder & brand messages', desc: 'Announcements, offers and updates delivered by your digital twin.' },
          { title: 'Training & onboarding', desc: 'Consistent training videos for staff, partners and dealers.' },
          { title: 'Multilingual marketing', desc: 'One script in several Indian languages, with lip-sync and captions.' },
          { title: 'Website & WhatsApp videos', desc: 'Welcome videos and follow-ups you can share with enquiries.' },
        ],
      },
      {
        type: 'videos',
        kind: 'avatar',
        tag: 'Samples',
        h2: 'AI avatar videos we have made',
      },
      {
        type: 'prose',
        tag: 'Two options',
        h2: 'Stock AI presenter or your own digital twin?',
        paras: [
          'A stock presenter is the quickest start and suits explainers and product videos. A digital twin of you or your spokesperson builds more trust for founder messages and services where people want to know who they are dealing with.',
        ],
        table: {
          caption: 'Stock AI presenter vs custom digital twin',
          head: ['', 'Stock AI presenter', 'Your digital twin'],
          rows: [
            ['What we need', 'Your script and brand assets', 'A short consent recording of the person, plus the script'],
            ['Best for', 'Explainers, product and FAQ videos', 'Founder messages, services, training'],
            ['Trust', 'Neutral, professional', 'Personal — viewers see the real face of the business'],
            ['Consent', 'Licensed presenters', 'Written consent of the person is required'],
          ],
        },
      },
      {
        type: 'process',
        h2: 'How we make AI avatar videos',
        steps: [
          { title: 'Script', desc: 'Written for the ear: short sentences, one idea at a time.' },
          { title: 'Presenter', desc: 'Choose a stock presenter, or record a short consented clip for your twin.' },
          { title: 'Voice & language', desc: 'Voice, language and pronunciation checked line by line.' },
          { title: 'Edit', desc: 'Backgrounds, on-screen text, visuals and captions added.' },
          { title: 'Deliver', desc: 'Versions for website, YouTube, WhatsApp and social media.' },
        ],
      },
      {
        type: 'prose',
        tag: 'Safety',
        h2: 'Consent and limits we always keep',
        bullets: [
          'A person’s likeness or voice is cloned only with their written consent, for agreed uses',
          'AI avatars are not presented as doctors, lawyers or other experts giving personal advice',
          'Realistic avatar videos carry an AI note where platforms or rules require it',
          'You decide where the videos may be used, and can withdraw consent for future videos',
        ],
      },
      RULES_BLOCK,
      {
        type: 'prose',
        tag: 'Pricing',
        h2: 'What affects the cost of AI avatar videos?',
        bullets: [
          'Stock presenter or custom digital twin',
          'Number and length of videos',
          'Languages and lip-synced versions',
          'Editing: B-roll, screen recordings, graphics',
          'One-off series or ongoing monthly videos',
        ],
      },
      {
        type: 'faq',
        faqs: [
          ['What is an AI avatar video?', 'A video where an AI-generated presenter — a stock character or a digital twin of a real person made with consent — speaks your script on camera.'],
          ['Can you make an AI avatar of me?', 'Yes, with your written consent. We use a short recording of you to create a digital twin, and you approve how it is used.'],
          ['Can my avatar speak Hindi and other languages?', 'Yes. One script can be produced in Hindi, English and other Indian languages with lip-sync and captions.'],
          ['Do AI avatar videos look real?', 'Modern avatars look natural for most talking-head videos. Where they look realistic, we add an AI note if platforms or rules require it.'],
          ['Is it legal to use AI avatars in India?', 'Yes, when used honestly and with consent. Realistic AI content should be labelled, and avatars must not mislead viewers or impersonate real people.'],
        ],
      },
    ],
  },
};

export default aiVideoPages;
