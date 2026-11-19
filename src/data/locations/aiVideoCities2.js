// AI video production × city pages, set 2 (added 19 Nov 2026):
// /locations/<city>/ai-video-production for the 16 cities that did not have
// one yet. Same rules as aiVideoCities.js — each page is written for its own
// market (local industries, languages, buying habits), no invented clients,
// numbers or prices. Pushed into cityServices (cityServices.js); answers merged
// in locations/answers.js; routes live in data/site/seo.json.

const SERVICE = 'ai-video-production';

const RULES_FAQ = ['Will the videos be marked as AI?', 'Where platform rules or Indian guidelines require it, yes — we add a clear note such as “Video created using AI”. We never copy a real person’s face or voice without written consent.'];

const pages = [
  /* ========================== GREATER NOIDA ========================== */
  {
    city: 'greater-noida',
    service: SERVICE,
    label: 'AI video production in Greater Noida',
    banner: 'AI videos for Greater Noida builders and brokers, colleges in Knowledge Park, factories in the industrial sectors and local shops — project teasers, admission promos, catalogue videos and UGC-style ads, made without a shoot.',
    intro: {
      h2: 'Video for a city that is still being built',
      paras: [
        'Greater Noida and Greater Noida West change every month: new towers handed over, new colleges admitting students in Knowledge Park, new units opening in the Ecotech and Kasna industrial areas, and new shops and clinics opening for the families moving in. Every one of them needs fresh video — and very few have the budget for a shoot each time.',
        'AI video fills that gap. We make project teasers from your renders, admission promos with a presenter, catalogue videos from product photos and short ads for Instagram and YouTube — scripted for your buyers and finished by our editors. See the full service on [AI video production](/services/ai-video-production).',
      ],
    },
    blocks: [
      {
        type: 'cards',
        tag: 'Popular in Greater Noida',
        h2: 'AI videos Greater Noida businesses ask for',
        items: [
          { title: 'Project & possession updates', desc: 'Teasers, offer videos and construction-update videos for Greater Noida West projects, built from renders and site photos.', to: '/industries/real-estate' },
          { title: 'Admission promos', desc: 'Course, campus-facility and admission-deadline videos for colleges and institutes in Knowledge Park.', to: '/industries/education' },
          { title: 'Factory & catalogue videos', desc: 'Product and capability videos for units in the industrial sectors — English cuts for buyers and dealers.', to: '/industries/manufacturers-exporters' },
          { title: 'Shop & clinic launches', desc: 'Opening offers and “now open” videos for new stores, salons and clinics in sector markets.' },
          { title: 'UGC-style ads', desc: 'Creator-style ads with AI presenters for brands testing Meta campaigns.', to: '/services/ai-ugc-videos' },
          { title: 'Hindi explainer videos', desc: 'A presenter explaining your service, price range and process in clear Hindi.', to: '/services/ai-avatar-videos' },
        ],
      },
      { type: 'videos', tag: 'Our AI work', h2: 'AI videos we have made' },
      {
        type: 'prose',
        tag: 'Greater Noida specifics',
        h2: 'What works for Greater Noida audiences',
        bullets: [
          '**Families comparing projects** respond to clarity — location, possession timeline and amenities, with renders marked as illustrative',
          '**Students and parents** want course details, fees process and placement support explained simply, without exaggerated promises',
          '**Local offers** work best targeted to a few sectors or societies, not the whole of Delhi NCR',
          '**Hindi first** for local shoppers; English versions for colleges, B2B buyers and corporate audiences',
        ],
      },
      {
        type: 'process',
        h2: 'How a Greater Noida project runs',
        steps: [
          { title: 'Brief', desc: 'Your project, course or product, the audience and where the video will run.' },
          { title: 'Script', desc: 'Hook and script in Hindi or English for your approval.' },
          { title: 'Produce', desc: 'AI presenter, scenes and visuals from your renders or photos.' },
          { title: 'Finish', desc: 'Captions, music, logo and sizes for Reels, YouTube and WhatsApp.' },
        ],
      },
      {
        type: 'links',
        h2: 'More for Greater Noida businesses',
        links: [
          { to: '/locations/greater-noida', label: 'Digital marketing in Greater Noida' },
          { to: '/locations/greater-noida/website-development', label: 'Website development in Greater Noida' },
          { to: '/locations/noida/ai-video-production', label: 'AI video production in Noida' },
          { to: '/blog/ai-video-vs-traditional-video-shoot', label: 'AI video vs a traditional shoot' },
        ],
      },
      {
        type: 'faq',
        faqs: [
          ['Do you make AI videos for real-estate projects in Greater Noida West?', 'Yes — teasers, offer videos and update videos from your renders and site photos. Renders are marked as illustrative and RERA details are shown where required.'],
          ['Can colleges use AI presenters for admission videos?', 'Yes, for course explainers, deadlines and FAQs. Testimonials should always be real students, not AI.'],
          ['Are you close to Greater Noida?', 'Yes. Our team is based in Delhi NCR, so we can meet when needed and handle most work over calls and WhatsApp.'],
          RULES_FAQ,
        ],
      },
    ],
  },

  /* ============================ GHAZIABAD ============================ */
  {
    city: 'ghaziabad',
    service: SERVICE,
    label: 'AI video production in Ghaziabad',
    banner: 'AI videos for Ghaziabad builders, coaching institutes, hospitals, retailers and industrial units — offer ads, explainers and product videos in Hindi, produced without a shoot and ready for Instagram, YouTube and WhatsApp.',
    intro: {
      h2: 'More video, without more shoots',
      paras: [
        'Ghaziabad businesses compete hard for attention: builders in Raj Nagar Extension and Crossings Republik, coaching institutes in Raj Nagar and Vaishali, hospitals and clinics across the city, retailers in Turab Nagar and Ambedkar Road, and factories in Sahibabad, Loni and Meerut Road. Short video is now how customers discover all of them.',
        'We produce AI videos that let you post and advertise every week: offer ads, Hindi explainers with an AI presenter, product videos from your photos and UGC-style ads. Every video is scripted for your customers and finished by our editors. Read more on [AI video production](/services/ai-video-production).',
      ],
    },
    blocks: [
      {
        type: 'cards',
        tag: 'Popular in Ghaziabad',
        h2: 'AI videos Ghaziabad businesses ask for',
        items: [
          { title: 'Builder offer videos', desc: 'Payment-plan, possession and site-visit offer videos for Raj Nagar Extension and NH-24 projects.', to: '/industries/real-estate' },
          { title: 'Coaching batch promos', desc: 'New batch, demo class and result-process videos in Hindi for institutes and schools.', to: '/industries/education' },
          { title: 'Hospital & clinic explainers', desc: 'Department, facility and health-camp videos — real doctors for medical advice, AI only for visuals.', to: '/industries/clinics' },
          { title: 'Retail sale ads', desc: 'Festive and wedding-season offers for garment, jewellery and furniture stores.', to: '/industries/retail-showrooms' },
          { title: 'Industrial product videos', desc: 'Catalogue and process videos for Sahibabad and Loni manufacturers, for dealers and buyers.', to: '/industries/manufacturers-exporters' },
          { title: 'UGC-style ads', desc: 'Creator-style ads with AI presenters for testing many hooks on Meta.', to: '/services/ai-ugc-videos' },
        ],
      },
      { type: 'videos', tag: 'Our AI work', h2: 'AI videos we have made' },
      {
        type: 'prose',
        tag: 'Ghaziabad specifics',
        h2: 'What works for Ghaziabad audiences',
        bullets: [
          '**Hindi scripts** that sound like local customers, not translated English',
          '**Offer and location in the first seconds** — “near Hindon Elevated Road” or “in Vaishali” matters to local buyers',
          '**WhatsApp-sized versions** for sharing with existing customers and dealers',
          '**Separate cuts by area** — Indirapuram, Raj Nagar Extension, Vaishali and old Ghaziabad audiences respond to different offers',
        ],
      },
      {
        type: 'process',
        h2: 'How we work with Ghaziabad clients',
        steps: [
          { title: 'Call or visit', desc: 'We are in Delhi NCR — a call or a short meeting to understand the offer.' },
          { title: 'Hindi script', desc: 'Hooks and script for your approval.' },
          { title: 'AI production', desc: 'Presenter, scenes and product shots generated and selected.' },
          { title: 'Edit & deliver', desc: 'Captions, music and sizes for Reels, Shorts and WhatsApp.' },
        ],
      },
      {
        type: 'links',
        h2: 'More for Ghaziabad businesses',
        links: [
          { to: '/locations/ghaziabad', label: 'Digital marketing in Ghaziabad' },
          { to: '/locations/ghaziabad/website-development', label: 'Website development in Ghaziabad' },
          { to: '/locations/indirapuram/ai-video-production', label: 'AI video production in Indirapuram' },
          { to: '/services/meta-ads', label: 'Meta ads management' },
        ],
      },
      {
        type: 'faq',
        faqs: [
          ['Do you make AI videos for Ghaziabad businesses?', 'Yes. Our team is in Delhi NCR and works with Ghaziabad builders, institutes, clinics, retailers and manufacturers.'],
          ['Can the videos be in Hindi?', 'Yes — Hindi, English or Hinglish, with matching captions.'],
          ['Can you also run the ads?', 'Yes. We can run the videos on Meta ads and refresh them when results drop.'],
          RULES_FAQ,
        ],
      },
    ],
  },

  /* =========================== INDIRAPURAM =========================== */
  {
    city: 'indirapuram',
    service: SERVICE,
    label: 'AI video production in Indirapuram',
    banner: 'AI videos for Indirapuram clinics, salons, cafes, schools, tutors and property dealers — short local ads and explainers in Hindi and English that bring nearby families to your door.',
    intro: {
      h2: 'Short local videos for a neighbourhood that lives on Instagram',
      paras: [
        'Indirapuram is a dense, family neighbourhood — Niti Khand, Shakti Khand, Ahinsa Khand, Nyay Khand and the societies around them — with a high number of clinics, salons, cafes, tuition centres and property dealers competing for the same households. Most of those families discover local businesses on Instagram, WhatsApp groups and Google Maps.',
        'AI video makes it practical to post regularly: a new offer, a festive deal, a doctor’s introduction or a “now open” video, without arranging a shoot every time. We script, produce and edit each video for your customers. See the full service on [AI video production](/services/ai-video-production).',
      ],
    },
    blocks: [
      {
        type: 'cards',
        tag: 'Popular in Indirapuram',
        h2: 'AI videos local businesses ask for',
        items: [
          { title: 'Clinic & dental videos', desc: 'Treatment explainers and clinic introductions — real doctor footage for advice, AI for visuals and versions.', to: '/industries/dental-clinics' },
          { title: 'Salon & spa offers', desc: 'Festive, bridal and weekday offers as short Reels and WhatsApp statuses.', to: '/industries/salons-beauty' },
          { title: 'Cafe & restaurant reels', desc: 'Menu highlights, new launches and weekend offers from your food photos.', to: '/industries/restaurants-cafes' },
          { title: 'Tuition & school promos', desc: 'Batch timings, demo classes and admission videos in Hindi and English.', to: '/industries/education' },
          { title: 'Property listing videos', desc: 'Resale and rental listing videos for societies, made from flat photos.', to: '/industries/real-estate' },
          { title: 'Product videos', desc: 'Catalogue photos turned into product reels for home businesses and boutiques.', to: '/services/ai-product-videos' },
        ],
      },
      { type: 'videos', tag: 'Our AI work', h2: 'AI videos we have made' },
      {
        type: 'prose',
        tag: 'Indirapuram specifics',
        h2: 'Why local video works here',
        paras: [
          'In a neighbourhood like Indirapuram, ads can target just a few kilometres around your clinic or shop. A short, clear video with your offer, your location and a WhatsApp button reaches exactly the families who can walk in.',
        ],
        bullets: [
          'Name the khand, society or landmark in the video so viewers know you are nearby',
          'Show real photos of your clinic, salon or cafe alongside AI scenes',
          'Keep it under 20–30 seconds with captions — most people watch without sound',
          'Make a WhatsApp-status version for your existing customers',
        ],
      },
      {
        type: 'process',
        h2: 'Simple process',
        steps: [
          { title: 'WhatsApp us', desc: 'Send your offer, photos and logo.' },
          { title: 'Script', desc: 'A short script in Hindi or English for your OK.' },
          { title: 'Video', desc: 'AI production and editing with captions and music.' },
          { title: 'Post or promote', desc: 'Post it yourself or let us run it as a local ad.' },
        ],
      },
      {
        type: 'links',
        h2: 'More for Indirapuram businesses',
        links: [
          { to: '/locations/indirapuram', label: 'Digital marketing in Indirapuram' },
          { to: '/locations/indirapuram/website-development', label: 'Website development in Indirapuram' },
          { to: '/locations/ghaziabad/ai-video-production', label: 'AI video production in Ghaziabad' },
          { to: '/blog/local-seo-checklist', label: 'Local SEO checklist' },
        ],
      },
      {
        type: 'faq',
        faqs: [
          ['Can a small clinic or salon afford AI videos?', 'Yes. Short videos made from your photos and an approved script cost far less than a shoot, and we can make a small batch for a month.'],
          ['Can you target only Indirapuram with the ads?', 'Yes. Meta ads can be limited to a small radius around your business.'],
          ['Do you visit Indirapuram?', 'Yes, our team is in Delhi NCR. Most work happens on WhatsApp, and we can meet when needed.'],
          RULES_FAQ,
        ],
      },
    ],
  },

  /* ============================ FARIDABAD ============================ */
  {
    city: 'faridabad',
    service: SERVICE,
    label: 'AI video production in Faridabad',
    banner: 'AI product and capability videos for Faridabad manufacturers, plus offer ads and explainers for schools, hospitals, builders and retailers — produced without a shoot, in Hindi and English.',
    intro: {
      h2: 'Show your factory and products without stopping production',
      paras: [
        'Faridabad is one of the biggest manufacturing centres around Delhi — auto components, engineering goods, electricals and more — alongside fast-growing residential sectors, schools, hospitals and retail markets in NIT and Sector 15–16. Manufacturers need videos for dealers and buyers; local businesses need videos for families nearby.',
        'With AI video, a manufacturer can turn product photos and drawings into clear product videos, and a school or hospital can explain its services with a presenter — without a crew on the shop floor. See [AI video production](/services/ai-video-production) for the full service.',
      ],
    },
    blocks: [
      {
        type: 'cards',
        tag: 'Popular in Faridabad',
        h2: 'AI videos Faridabad businesses ask for',
        items: [
          { title: 'Product & component videos', desc: 'Product videos from photos and drawings — specifications on screen, English for buyers and Hindi for dealers.', to: '/industries/manufacturers-exporters' },
          { title: 'Capability videos', desc: 'Machinery, capacity, quality checks and certifications explained in a short company video.' },
          { title: 'Dealer recruitment ads', desc: '“Become a dealer” videos for Meta campaigns aimed at shop owners in chosen cities.', to: '/blog/b2b-lead-generation-manufacturers-india' },
          { title: 'School admission videos', desc: 'Admission, facilities and activity videos for Faridabad schools.', to: '/industries/education' },
          { title: 'Hospital explainers', desc: 'Department and facility videos with real doctors for medical content.', to: '/industries/clinics' },
          { title: 'Property offer videos', desc: 'Offer and update videos for projects in Greater Faridabad and the new sectors.', to: '/industries/real-estate' },
        ],
      },
      { type: 'videos', tag: 'Our AI work', h2: 'AI videos we have made' },
      {
        type: 'prose',
        tag: 'Faridabad specifics',
        h2: 'B2B videos need accuracy first',
        paras: [
          'A buyer watching a product video wants exact sizes, grades and applications, not just nice visuals. For manufacturers we check every specification shown against your catalogue and keep AI to presentation — backgrounds, motion and voice — never inventing product details.',
        ],
        bullets: [
          'Specifications and part numbers shown on screen, checked with your team',
          'English versions for buyers and exporters; Hindi for dealers and distributors',
          'LinkedIn cuts for corporate buyers, Reels cuts for dealers',
          'A catalogue PDF and WhatsApp number at the end of every video',
        ],
      },
      {
        type: 'process',
        h2: 'How we work with Faridabad manufacturers',
        steps: [
          { title: 'Product list', desc: 'You share photos, drawings and specifications.' },
          { title: 'Script', desc: 'Accurate, simple script for each product or range.' },
          { title: 'Produce', desc: 'AI visuals, voice-over and on-screen specifications.' },
          { title: 'Review', desc: 'Your team checks every detail before delivery.' },
        ],
      },
      {
        type: 'links',
        h2: 'More for Faridabad businesses',
        links: [
          { to: '/locations/faridabad', label: 'Digital marketing in Faridabad' },
          { to: '/locations/faridabad/website-development', label: 'Website development in Faridabad' },
          { to: '/services/ai-product-videos', label: 'AI product videos' },
          { to: '/industries/manufacturers-exporters', label: 'Marketing for manufacturers' },
        ],
      },
      {
        type: 'faq',
        faqs: [
          ['Can you make product videos without visiting our factory?', 'Yes. Clear photos, drawings and specifications are usually enough. Real factory footage can be added if you have it.'],
          ['Will the AI change how our product looks?', 'No. We keep the product accurate and use AI only for backgrounds, motion and presentation; your team approves every video.'],
          ['Do you work with Faridabad businesses in person?', 'Yes — we are in Delhi NCR and can meet when needed.'],
          RULES_FAQ,
        ],
      },
    ],
  },

  /* ============================= LUCKNOW ============================= */
  {
    city: 'lucknow',
    service: SERVICE,
    label: 'AI video production in Lucknow',
    banner: 'AI videos for Lucknow chikankari brands, restaurants, coaching institutes, hospitals and real-estate projects — product reels, Hindi explainers and offer ads, made without a shoot.',
    intro: {
      h2: 'Lucknow’s brands, now on video every week',
      paras: [
        'Lucknow businesses have stories worth showing: chikankari from Chowk and Aminabad sold across India online, kebab and biryani restaurants with loyal followings, coaching institutes in Kapoorthala and Aliganj, hospitals and clinics, and new projects along Shaheed Path and Gomti Nagar Extension. What most lack is a steady flow of good video.',
        'AI video makes that possible. We turn product photos into reels, write Hindi and Urdu-flavoured scripts that sound like Lucknow, and produce explainers and ads you can post or promote every week. Learn more on [AI video production](/services/ai-video-production).',
      ],
    },
    blocks: [
      {
        type: 'cards',
        tag: 'Popular in Lucknow',
        h2: 'AI videos Lucknow businesses ask for',
        items: [
          { title: 'Chikankari product reels', desc: 'Kurtas, sarees and dupattas shown on AI models from your product photos, with every design kept accurate.', to: '/services/ai-product-videos' },
          { title: 'Restaurant & sweet shop reels', desc: 'Menu highlights, festive specials and delivery offers from your food photos.', to: '/industries/restaurants-cafes' },
          { title: 'Coaching & exam promos', desc: 'Batch, test-series and admission videos in Hindi for institutes and schools.', to: '/industries/education' },
          { title: 'Hospital & clinic videos', desc: 'Facility and awareness videos — real doctors for medical advice.', to: '/industries/clinics' },
          { title: 'Property offer videos', desc: 'Offer and possession videos for Lucknow projects, renders marked as illustrative.', to: '/industries/real-estate' },
          { title: 'UGC-style ads for D2C', desc: 'Creator-style ads with AI presenters for brands selling across India.', to: '/services/ai-ugc-videos' },
        ],
      },
      { type: 'videos', tag: 'Our AI work', h2: 'AI videos we have made' },
      {
        type: 'prose',
        tag: 'Lucknow specifics',
        h2: 'What works for Lucknow audiences',
        bullets: [
          '**Polite, warm Hindi** with a Lucknowi touch — scripts that respect the city’s tone instead of loud sales language',
          '**Craft and heritage** — chikankari, food and culture make strong hooks for audiences across India',
          '**Two audiences** — local customers in Lucknow, and online buyers in other cities for crafts and D2C brands',
          '**WhatsApp versions** for sharing with existing customers and resellers',
        ],
      },
      {
        type: 'process',
        h2: 'How we work with Lucknow clients',
        steps: [
          { title: 'Call', desc: 'Your products, offer and audience — local or all-India.' },
          { title: 'Script', desc: 'Hindi, English or Hinglish script for your approval.' },
          { title: 'Produce', desc: 'AI models, presenters and scenes created and selected.' },
          { title: 'Edit', desc: 'Captions, music and sizes for Reels, YouTube and WhatsApp.' },
        ],
      },
      {
        type: 'links',
        h2: 'More for Lucknow businesses',
        links: [
          { to: '/locations/lucknow', label: 'Digital marketing in Lucknow' },
          { to: '/locations/lucknow/website-development', label: 'Website development in Lucknow' },
          { to: '/locations/lucknow/seo', label: 'SEO in Lucknow' },
          { to: '/blog/ai-video-production-cost-india', label: 'What AI videos cost' },
        ],
      },
      {
        type: 'faq',
        faqs: [
          ['Can you show our chikankari on a model without a shoot?', 'Yes, from clear product photos. Every garment is checked so the embroidery and colours match the real product.'],
          ['Do you work with Lucknow businesses remotely?', 'Yes. We work over calls, video meetings and WhatsApp, and deliver videos online.'],
          ['Can the videos be in Hindi and Urdu style?', 'Yes — we write in natural Hindi with a Lucknowi tone, or in English for all-India audiences.'],
          RULES_FAQ,
        ],
      },
    ],
  },

  /* ============================== MEERUT ============================= */
  {
    city: 'meerut',
    service: SERVICE,
    label: 'AI video production in Meerut',
    banner: 'AI videos for Meerut sports-goods makers, jewellers, coaching institutes, hospitals and builders — product videos, dealer ads and Hindi explainers produced without a shoot.',
    intro: {
      h2: 'Meerut makes things the whole country buys',
      paras: [
        'Meerut is known across India for sports goods, scissors and musical instruments, and for its jewellery market in Sarafa Bazaar, alongside a large education and healthcare sector and new residential projects along the Delhi–Meerut Expressway. Many of these businesses sell to dealers and buyers far from Meerut — and video is how those buyers judge quality.',
        'We produce AI product videos from your photos, dealer-recruitment ads and Hindi explainers, so you can show your range to buyers anywhere. See [AI video production](/services/ai-video-production) for the full service.',
      ],
    },
    blocks: [
      {
        type: 'cards',
        tag: 'Popular in Meerut',
        h2: 'AI videos Meerut businesses ask for',
        items: [
          { title: 'Sports goods product videos', desc: 'Bats, balls, fitness and team equipment shown clearly, with specifications for dealers.', to: '/services/ai-product-videos' },
          { title: 'Dealer & distributor ads', desc: '“Become a dealer” and bulk-order videos for buyers in other cities.', to: '/blog/b2b-lead-generation-manufacturers-india' },
          { title: 'Jewellery showcase reels', desc: 'Wedding and festive collections from product photos, with designs kept accurate.', to: '/industries/retail-showrooms' },
          { title: 'Coaching & school promos', desc: 'Batch, admission and result-process videos in Hindi.', to: '/industries/education' },
          { title: 'Hospital & clinic videos', desc: 'Facility and awareness videos with real doctors for medical content.', to: '/industries/clinics' },
          { title: 'Property offer videos', desc: 'Offer videos for projects near the Expressway, renders marked as illustrative.', to: '/industries/real-estate' },
        ],
      },
      { type: 'videos', tag: 'Our AI work', h2: 'AI videos we have made' },
      {
        type: 'prose',
        tag: 'Meerut specifics',
        h2: 'Selling beyond Meerut',
        paras: [
          'For a sports-goods or instrument maker, the real customer is often a dealer in another state or an online buyer. A clear product video — every model, size and grade shown properly — does more than a long phone call. AI makes it possible to produce one for every product in your range.',
        ],
        bullets: [
          'One short video per product or range, with specifications on screen',
          'Hindi for dealers, English for online and export buyers',
          'Catalogue PDF and WhatsApp number at the end of each video',
          'Reels and YouTube Shorts cuts for wider reach',
        ],
      },
      {
        type: 'process',
        h2: 'How we work with Meerut clients',
        steps: [
          { title: 'Share your range', desc: 'Photos, specifications and the buyers you want to reach.' },
          { title: 'Script', desc: 'Short, accurate scripts in Hindi or English.' },
          { title: 'Produce', desc: 'AI visuals, voice-over and on-screen details.' },
          { title: 'Approve', desc: 'You check every product detail before delivery.' },
        ],
      },
      {
        type: 'links',
        h2: 'More for Meerut businesses',
        links: [
          { to: '/locations/meerut', label: 'Digital marketing in Meerut' },
          { to: '/locations/meerut/website-development', label: 'Website development in Meerut' },
          { to: '/industries/manufacturers-exporters', label: 'Marketing for manufacturers' },
          { to: '/services/meta-ads', label: 'Meta ads for dealer leads' },
        ],
      },
      {
        type: 'faq',
        faqs: [
          ['Can you make videos for our whole product range?', 'Yes. We plan videos product by product from your photos and specifications, so each item stays accurate.'],
          ['Can these videos help us find dealers?', 'Yes — used in Meta or Google campaigns with a dealer offer and a qualifying question, they reach shop owners in the cities you choose.'],
          ['Is Meerut close enough to meet?', 'Yes. Our team is in Delhi NCR, and most work happens over calls and WhatsApp.'],
          RULES_FAQ,
        ],
      },
    ],
  },

  /* =============================== AGRA ============================== */
  {
    city: 'agra',
    service: SERVICE,
    label: 'AI video production in Agra',
    banner: 'AI videos for Agra hotels, tour operators, leather and footwear exporters, marble-inlay and handicraft sellers and petha brands — in English and Hindi, for tourists, buyers and online shoppers.',
    intro: {
      h2: 'Video for visitors, buyers and online shoppers',
      paras: [
        'Agra’s businesses sell to three very different audiences: tourists from India and abroad who visit the Taj Mahal and Fatehpur Sikri, overseas and domestic buyers of leather goods and footwear, and online shoppers who order marble inlay, handicrafts and petha. Each needs video in a different language and style.',
        'AI video lets one Agra business serve all three: English hotel and tour videos for visitors, product videos for buyers, and Reels for shoppers — produced from your photos without a shoot. Read more on [AI video production](/services/ai-video-production).',
      ],
    },
    blocks: [
      {
        type: 'cards',
        tag: 'Popular in Agra',
        h2: 'AI videos Agra businesses ask for',
        items: [
          { title: 'Hotel & homestay videos', desc: 'Room, view and location videos for direct bookings — real property photos with AI motion and voice-over.', to: '/industries/hotels-travel' },
          { title: 'Tour & guide promos', desc: 'Same-day tour and package videos in English and Hindi for visitors.' },
          { title: 'Leather & footwear catalogues', desc: 'Product videos for exporters and wholesalers, with sizes and materials on screen.', to: '/industries/manufacturers-exporters' },
          { title: 'Marble inlay & handicraft reels', desc: 'Craft and product reels for online stores and gift buyers.', to: '/services/ai-product-videos' },
          { title: 'Petha & sweet brand reels', desc: 'Festive gift-box and online-order videos from your product photos.' },
          { title: 'Clinic & school videos', desc: 'Explainers and admission videos for local institutions in Hindi.', to: '/industries/education' },
        ],
      },
      { type: 'videos', tag: 'Our AI work', h2: 'AI videos we have made' },
      {
        type: 'prose',
        tag: 'Agra specifics',
        h2: 'What works for Agra audiences',
        bullets: [
          '**English first for tourists and exporters**, Hindi for local customers — and other languages on request',
          '**Real photos of your hotel or product** with AI for motion and presentation, so guests see what they will actually get',
          '**Distance and directions** — how far from the Taj Mahal, Agra Fort or the railway station',
          '**Gift and festive angles** for petha, marble and handicraft buyers across India',
        ],
      },
      {
        type: 'process',
        h2: 'How we work with Agra clients',
        steps: [
          { title: 'Call', desc: 'Your audience — tourists, buyers or shoppers — and the platform.' },
          { title: 'Script', desc: 'English and Hindi scripts for your approval.' },
          { title: 'Produce', desc: 'Visuals from your photos plus AI presenter or voice.' },
          { title: 'Deliver', desc: 'Sizes for Reels, YouTube, website and booking platforms.' },
        ],
      },
      {
        type: 'links',
        h2: 'More for Agra businesses',
        links: [
          { to: '/locations/agra', label: 'Digital marketing in Agra' },
          { to: '/locations/agra/website-development', label: 'Website development in Agra' },
          { to: '/industries/hotels-travel', label: 'Marketing for hotels & travel' },
          { to: '/blog/ai-ugc-video-ads-guide', label: 'Guide: AI UGC video ads' },
        ],
      },
      {
        type: 'faq',
        faqs: [
          ['Can you make English videos for foreign tourists?', 'Yes. We write and voice videos in clear English, with Hindi and other language versions on request.'],
          ['Will hotel videos show our real property?', 'Yes. We build them from your real photos; AI is used for motion, voice and presentation, never to invent rooms or views.'],
          ['Do you work with Agra businesses remotely?', 'Yes — over calls, video meetings and WhatsApp.'],
          RULES_FAQ,
        ],
      },
    ],
  },

  /* ============================== KANPUR ============================= */
  {
    city: 'kanpur',
    service: SERVICE,
    label: 'AI video production in Kanpur',
    banner: 'AI videos for Kanpur leather and textile manufacturers, FMCG and trading companies, coaching institutes and hospitals — catalogue videos, dealer ads and Hindi explainers produced without a shoot.',
    intro: {
      h2: 'Industrial Kanpur, explained in short videos',
      paras: [
        'Kanpur is one of north India’s oldest industrial cities — leather goods and saddlery, textiles, detergents and FMCG, and engineering — with a large trading community, coaching institutes in Kakadeo and busy hospitals. Many Kanpur companies sell to buyers and dealers who never visit the city, so their products have to sell on screen.',
        'We produce AI catalogue videos, dealer ads and Hindi explainers that make your range easy to understand, without a crew on the factory floor. See [AI video production](/services/ai-video-production) for the full service.',
      ],
    },
    blocks: [
      {
        type: 'cards',
        tag: 'Popular in Kanpur',
        h2: 'AI videos Kanpur businesses ask for',
        items: [
          { title: 'Leather goods catalogues', desc: 'Bags, belts, saddlery and footwear shown clearly for export and domestic buyers.', to: '/industries/manufacturers-exporters' },
          { title: 'FMCG & product ads', desc: 'Short product ads for detergents, food and household brands sold through dealers.', to: '/services/ai-product-videos' },
          { title: 'Dealer recruitment videos', desc: 'Distributor and dealer offer videos for Meta campaigns in chosen districts.', to: '/blog/b2b-lead-generation-manufacturers-india' },
          { title: 'Coaching promos', desc: 'Batch, test-series and admission videos in Hindi for Kakadeo institutes.', to: '/industries/education' },
          { title: 'Hospital explainers', desc: 'Facility and department videos with real doctors for medical content.', to: '/industries/clinics' },
          { title: 'UGC-style ads', desc: 'Creator-style ads for brands selling online across India.', to: '/services/ai-ugc-videos' },
        ],
      },
      { type: 'videos', tag: 'Our AI work', h2: 'AI videos we have made' },
      {
        type: 'prose',
        tag: 'Kanpur specifics',
        h2: 'What works for Kanpur businesses',
        bullets: [
          '**Accuracy over effects** — materials, sizes and finishes shown exactly as they are',
          '**Hindi for dealers across UP and Bihar**, English for export buyers',
          '**One video per product range**, so sales teams can send the right one on WhatsApp',
          '**Dealer campaigns** that filter out retail customers with a qualifying question',
        ],
      },
      {
        type: 'process',
        h2: 'How we work with Kanpur clients',
        steps: [
          { title: 'Brief', desc: 'Your products, buyers and the markets you want.' },
          { title: 'Script', desc: 'Hindi or English scripts checked for accuracy.' },
          { title: 'Produce', desc: 'AI visuals and voice built from your photos.' },
          { title: 'Approve', desc: 'Your team signs off every detail.' },
        ],
      },
      {
        type: 'links',
        h2: 'More for Kanpur businesses',
        links: [
          { to: '/locations/kanpur', label: 'Digital marketing in Kanpur' },
          { to: '/locations/kanpur/website-development', label: 'Website development in Kanpur' },
          { to: '/locations/lucknow/ai-video-production', label: 'AI video production in Lucknow' },
          { to: '/services/meta-ads', label: 'Meta ads for dealer leads' },
        ],
      },
      {
        type: 'faq',
        faqs: [
          ['Can AI videos work for industrial products?', 'Yes, when they are accurate. We use your real photos and specifications and keep AI for presentation only.'],
          ['Can you make Hindi videos for dealers?', 'Yes — Hindi, English or both, with captions.'],
          ['Do you work with Kanpur companies remotely?', 'Yes, over calls, video meetings and WhatsApp.'],
          RULES_FAQ,
        ],
      },
    ],
  },

  /* ============================= VARANASI ============================ */
  {
    city: 'varanasi',
    service: SERVICE,
    label: 'AI video production in Varanasi',
    banner: 'AI videos for Varanasi hotels and homestays, Banarasi silk and saree sellers, tour and puja services, coaching institutes and hospitals — for pilgrims, tourists and online buyers.',
    intro: {
      h2: 'Show Banaras to people before they arrive',
      paras: [
        'Most customers of Varanasi businesses decide before they reach the city: pilgrims choosing a guest house near the ghats, tourists booking a boat ride or Ganga aarti package, and shoppers across India ordering Banarasi silk sarees online. Good video is what convinces them.',
        'We make AI videos from your real photos — rooms, sarees, ghats-side locations — with voice-overs and presenters in Hindi, English and other languages for visitors from different states. Learn more on [AI video production](/services/ai-video-production).',
      ],
    },
    blocks: [
      {
        type: 'cards',
        tag: 'Popular in Varanasi',
        h2: 'AI videos Varanasi businesses ask for',
        items: [
          { title: 'Hotel & guest house videos', desc: 'Rooms, rooftop views and distance to the ghats and Kashi Vishwanath, from real photos.', to: '/industries/hotels-travel' },
          { title: 'Banarasi saree reels', desc: 'Sarees shown on AI models from product photos, with weave and colours kept accurate.', to: '/services/ai-product-videos' },
          { title: 'Tour, boat & puja packages', desc: 'Package videos in Hindi, English and other languages for pilgrims and tourists.' },
          { title: 'Coaching & school promos', desc: 'Admission and batch videos for institutes near BHU, Lanka and Sigra.', to: '/industries/education' },
          { title: 'Hospital & clinic videos', desc: 'Facility and awareness videos with real doctors for medical content.', to: '/industries/clinics' },
          { title: 'Food & sweet shop reels', desc: 'Menu, festive specials and delivery offers from your food photos.', to: '/industries/restaurants-cafes' },
        ],
      },
      { type: 'videos', tag: 'Our AI work', h2: 'AI videos we have made' },
      {
        type: 'prose',
        tag: 'Varanasi specifics',
        h2: 'What works for Varanasi audiences',
        bullets: [
          '**Respectful tone** for temple, puja and pilgrimage content',
          '**Many languages** — Hindi and English, plus regional languages for pilgrims from other states on request',
          '**Real location details** — which ghat, how far from the temple, airport or Cantt station',
          '**Online-buyer focus** for sarees and crafts, with clear product views and delivery information',
        ],
      },
      {
        type: 'process',
        h2: 'How we work with Varanasi clients',
        steps: [
          { title: 'Call', desc: 'Your customers — pilgrims, tourists or online buyers.' },
          { title: 'Script', desc: 'Scripts in the languages your customers speak.' },
          { title: 'Produce', desc: 'Visuals from your photos with AI voice or presenter.' },
          { title: 'Deliver', desc: 'Versions for Reels, YouTube, website and booking platforms.' },
        ],
      },
      {
        type: 'links',
        h2: 'More for Varanasi businesses',
        links: [
          { to: '/locations/varanasi', label: 'Digital marketing in Varanasi' },
          { to: '/locations/varanasi/website-development', label: 'Website development in Varanasi' },
          { to: '/locations/varanasi/seo', label: 'SEO in Varanasi' },
          { to: '/industries/hotels-travel', label: 'Marketing for hotels & travel' },
        ],
      },
      {
        type: 'faq',
        faqs: [
          ['Can you make videos in South Indian or Bengali languages for pilgrims?', 'Yes, on request — we produce Hindi and English versions and can add other Indian languages.'],
          ['Can you show Banarasi sarees on a model without a shoot?', 'Yes, from clear product photos, with every weave and colour checked against the real saree.'],
          ['Do you work with Varanasi businesses remotely?', 'Yes — over calls, video meetings and WhatsApp.'],
          RULES_FAQ,
        ],
      },
    ],
  },

  /* ============================== MOHALI ============================= */
  {
    city: 'mohali',
    service: SERVICE,
    label: 'AI video production in Mohali',
    banner: 'AI videos for Mohali IT companies, immigration and IELTS consultants, hospitals, builders and restaurants — explainers, offer ads and Punjabi–Hindi–English versions, produced without a shoot.',
    intro: {
      h2: 'From IT City to Aerocity, on video',
      paras: [
        'Mohali’s businesses range from IT and software companies in the IT City and industrial areas, to immigration and IELTS consultants, large hospitals, builders around Aerocity and the airport road, and restaurants and cafes across the sectors. Each needs a steady flow of video for LinkedIn, Instagram and ads.',
        'We produce AI explainers, offer ads and presenter videos in Punjabi, Hindi and English — scripted for your audience and finished by our editors. See [AI video production](/services/ai-video-production) for the full service.',
      ],
    },
    blocks: [
      {
        type: 'cards',
        tag: 'Popular in Mohali',
        h2: 'AI videos Mohali businesses ask for',
        items: [
          { title: 'IT & software explainers', desc: 'Service and product explainers for LinkedIn and websites, in English.', to: '/industries/startups-saas' },
          { title: 'Immigration & IELTS videos', desc: 'Intake, course and FAQ videos — no visa or score promises, advice from your licensed team.', to: '/industries/immigration-consultants' },
          { title: 'Hospital & clinic videos', desc: 'Facility and awareness videos with real doctors for medical content.', to: '/industries/clinics' },
          { title: 'Property offer videos', desc: 'Offer and update videos for Aerocity and new-sector projects, renders marked as illustrative.', to: '/industries/real-estate' },
          { title: 'Restaurant & cafe reels', desc: 'Menu, launch and weekend-offer reels from your food photos.', to: '/industries/restaurants-cafes' },
          { title: 'Hiring & culture videos', desc: 'Employer-brand videos for IT companies using a consent-based avatar.', to: '/services/ai-avatar-videos' },
        ],
      },
      { type: 'videos', tag: 'Our AI work', h2: 'AI videos we have made' },
      {
        type: 'prose',
        tag: 'Mohali specifics',
        h2: 'What works for Mohali audiences',
        bullets: [
          '**Punjabi, Hindi and English** — the right language for each audience and platform',
          '**Careful claims** for immigration and study-abroad content: no guarantees, clear disclaimers',
          '**LinkedIn-first** videos for IT and B2B, **Reels-first** for consumer businesses',
          '**Tricity targeting** — Mohali, Chandigarh, Zirakpur and Kharar audiences together or separately',
        ],
      },
      {
        type: 'process',
        h2: 'How we work with Mohali clients',
        steps: [
          { title: 'Call', desc: 'Your audience, platform and goal.' },
          { title: 'Script', desc: 'Punjabi, Hindi or English scripts for approval.' },
          { title: 'Produce', desc: 'AI presenter, scenes and visuals.' },
          { title: 'Finish', desc: 'Captions, music and platform sizes.' },
        ],
      },
      {
        type: 'links',
        h2: 'More for Mohali businesses',
        links: [
          { to: '/locations/mohali', label: 'Digital marketing in Mohali' },
          { to: '/locations/mohali/website-development', label: 'Website development in Mohali' },
          { to: '/locations/chandigarh/ai-video-production', label: 'AI video production in Chandigarh' },
          { to: '/locations/panchkula/ai-video-production', label: 'AI video production in Panchkula' },
        ],
      },
      {
        type: 'faq',
        faqs: [
          ['Can you make AI videos in Punjabi?', 'Yes — Punjabi, Hindi and English versions with matching captions.'],
          ['Can immigration consultants use AI videos?', 'Yes, for announcements, explainers and FAQs. Videos must not promise visas or results, and advice should come from your licensed team.'],
          ['Do you serve the whole Tricity?', 'Yes — Mohali, Chandigarh, Panchkula and Zirakpur, mostly over calls and WhatsApp.'],
          RULES_FAQ,
        ],
      },
    ],
  },

  /* ============================ PANCHKULA ============================ */
  {
    city: 'panchkula',
    service: SERVICE,
    label: 'AI video production in Panchkula',
    banner: 'AI videos for Panchkula schools, clinics, builders, boutiques, cafes and hill-stay businesses — short local ads and explainers in Hindi, Punjabi and English, made without a shoot.',
    intro: {
      h2: 'Polished local video for a planned city',
      paras: [
        'Panchkula is a quieter, family-focused part of the Tricity — well-planned sectors, good schools, clinics and diagnostic centres, boutiques and cafes, residential projects, and homestays and resorts towards Morni Hills. Its customers expect businesses to look professional online.',
        'We help Panchkula businesses post regularly with AI videos: offers, introductions, admission and project videos built from your photos and scripts. See the full service on [AI video production](/services/ai-video-production).',
      ],
    },
    blocks: [
      {
        type: 'cards',
        tag: 'Popular in Panchkula',
        h2: 'AI videos Panchkula businesses ask for',
        items: [
          { title: 'School & tuition promos', desc: 'Admission, activity and facility videos for schools and coaching centres.', to: '/industries/education' },
          { title: 'Clinic & diagnostic videos', desc: 'Service and test-package explainers — real doctors for medical advice.', to: '/industries/clinics' },
          { title: 'Property videos', desc: 'Project and resale listing videos, renders marked as illustrative.', to: '/industries/real-estate' },
          { title: 'Boutique & salon reels', desc: 'New collections and festive offers from product photos.', to: '/industries/salons-beauty' },
          { title: 'Cafe & restaurant reels', desc: 'Menu and weekend videos from your food photos.', to: '/industries/restaurants-cafes' },
          { title: 'Homestay & resort videos', desc: 'Stay videos for Morni Hills and nearby getaways from real photos.', to: '/industries/hotels-travel' },
        ],
      },
      { type: 'videos', tag: 'Our AI work', h2: 'AI videos we have made' },
      {
        type: 'prose',
        tag: 'Panchkula specifics',
        h2: 'What works for Panchkula audiences',
        bullets: [
          '**Clean, premium look** — Panchkula audiences respond to calm, well-made videos rather than loud ads',
          '**Sector names and landmarks** so viewers know you are close by',
          '**Hindi, Punjabi or English** depending on the audience',
          '**Weekend-getaway angle** for hill stays, aimed at Tricity and Delhi visitors',
        ],
      },
      {
        type: 'process',
        h2: 'Simple process',
        steps: [
          { title: 'Share', desc: 'Your offer, photos and logo on WhatsApp.' },
          { title: 'Script', desc: 'A short script for your approval.' },
          { title: 'Produce', desc: 'AI video with captions and music.' },
          { title: 'Post or promote', desc: 'Post it yourself or let us run it as an ad.' },
        ],
      },
      {
        type: 'links',
        h2: 'More for Panchkula businesses',
        links: [
          { to: '/locations/panchkula', label: 'Digital marketing in Panchkula' },
          { to: '/locations/panchkula/website-development', label: 'Website development in Panchkula' },
          { to: '/locations/chandigarh/ai-video-production', label: 'AI video production in Chandigarh' },
          { to: '/locations/mohali/ai-video-production', label: 'AI video production in Mohali' },
        ],
      },
      {
        type: 'faq',
        faqs: [
          ['Can a school use AI videos for admissions?', 'Yes, for facilities, process and FAQs. Student and parent testimonials should always be real.'],
          ['Can ads target only Panchkula?', 'Yes — Meta ads can target Panchkula sectors or the whole Tricity.'],
          ['Do you work with Panchkula businesses remotely?', 'Yes, mostly over calls and WhatsApp.'],
          RULES_FAQ,
        ],
      },
    ],
  },

  /* ============================= LUDHIANA ============================ */
  {
    city: 'ludhiana',
    service: SERVICE,
    label: 'AI video production in Ludhiana',
    banner: 'AI videos for Ludhiana hosiery and knitwear brands, cycle and auto-parts makers, wholesalers, boutiques and immigration consultants — catalogue videos, dealer ads and Punjabi reels, made without a shoot.',
    intro: {
      h2: 'Ludhiana’s products, shown to buyers everywhere',
      paras: [
        'Ludhiana makes much of India’s knitwear, woollens and hosiery, and is a major centre for bicycles, cycle parts, auto components and machine tools. Its wholesalers sell across the country, its boutiques and wedding-wear stores attract shoppers from all over Punjab, and its immigration consultants serve a huge student market.',
        'AI video lets Ludhiana businesses show every product and offer on video — catalogue reels for buyers, dealer ads and Punjabi promos — without a shoot each season. Read more on [AI video production](/services/ai-video-production).',
      ],
    },
    blocks: [
      {
        type: 'cards',
        tag: 'Popular in Ludhiana',
        h2: 'AI videos Ludhiana businesses ask for',
        items: [
          { title: 'Knitwear & hosiery catalogues', desc: 'Season collections shown on AI models from product photos, for wholesalers and retailers.', to: '/services/ai-product-videos' },
          { title: 'Cycle & auto-parts videos', desc: 'Product videos with specifications for dealers and export buyers.', to: '/industries/manufacturers-exporters' },
          { title: 'Wholesale & dealer ads', desc: 'Bulk-order and dealer offer videos for Meta campaigns across states.', to: '/blog/b2b-lead-generation-manufacturers-india' },
          { title: 'Boutique & wedding-wear reels', desc: 'Suits, lehengas and new arrivals without a shoot.', to: '/industries/retail-showrooms' },
          { title: 'Immigration & IELTS videos', desc: 'Intake and course videos — no visa or score promises.', to: '/industries/immigration-consultants' },
          { title: 'UGC-style ads', desc: 'Creator-style ads with AI presenters for D2C brands.', to: '/services/ai-ugc-videos' },
        ],
      },
      { type: 'videos', tag: 'Our AI work', h2: 'AI videos we have made' },
      {
        type: 'prose',
        tag: 'Ludhiana specifics',
        h2: 'What works for Ludhiana businesses',
        bullets: [
          '**Season-ready catalogues** — a full winter or summer range on video before the selling season starts',
          '**Punjabi and Hindi** for local and north-Indian buyers, English for exports',
          '**Accurate products** — colours, sizes and designs checked against your samples',
          '**Wholesale focus** — MOQ, price-list and WhatsApp details at the end of every video',
        ],
      },
      {
        type: 'process',
        h2: 'How we work with Ludhiana clients',
        steps: [
          { title: 'Share the range', desc: 'Photos and details of your products or collection.' },
          { title: 'Script', desc: 'Punjabi, Hindi or English scripts for approval.' },
          { title: 'Produce', desc: 'AI models, scenes and voice-overs.' },
          { title: 'Check & deliver', desc: 'You approve every product before delivery.' },
        ],
      },
      {
        type: 'links',
        h2: 'More for Ludhiana businesses',
        links: [
          { to: '/locations/ludhiana', label: 'Digital marketing in Ludhiana' },
          { to: '/locations/ludhiana/website-development', label: 'Website development in Ludhiana' },
          { to: '/locations/ludhiana/seo', label: 'SEO in Ludhiana' },
          { to: '/industries/manufacturers-exporters', label: 'Marketing for manufacturers' },
        ],
      },
      {
        type: 'faq',
        faqs: [
          ['Can you show our knitwear on models without a shoot?', 'Yes, from clear product photos, with colours and designs checked against your samples.'],
          ['Can you make Punjabi videos?', 'Yes — Punjabi, Hindi and English versions with captions.'],
          ['Do you work with Ludhiana businesses remotely?', 'Yes, over calls, video meetings and WhatsApp.'],
          RULES_FAQ,
        ],
      },
    ],
  },

  /* ============================== JAIPUR ============================= */
  {
    city: 'jaipur',
    service: SERVICE,
    label: 'AI video production in Jaipur',
    banner: 'AI videos for Jaipur jewellers and gem traders, block-print and handicraft brands, heritage hotels, wedding venues, tour operators and coaching institutes — for India and overseas buyers.',
    intro: {
      h2: 'Jaipur’s craft and hospitality, on video',
      paras: [
        'Jaipur sells to the world: jewellery and gemstones from Johari Bazaar, block-printed textiles and home linen from Sanganer and Bagru, blue pottery and handicrafts, heritage hotels and destination-wedding venues, and a large coaching and education market. Much of this is sold online or to overseas buyers who judge you entirely on screen.',
        'We produce AI videos from your product and property photos — jewellery showcases, textile collections, hotel and venue videos and course promos — in English and Hindi. See [AI video production](/services/ai-video-production) for the full service.',
      ],
    },
    blocks: [
      {
        type: 'cards',
        tag: 'Popular in Jaipur',
        h2: 'AI videos Jaipur businesses ask for',
        items: [
          { title: 'Jewellery & gem showcases', desc: 'Collections shown clearly from product photos, with designs and stones kept accurate.', to: '/services/ai-product-videos' },
          { title: 'Block-print & textile reels', desc: 'Kurtas, bedsheets and home linen shown on models and in room scenes.', to: '/industries/ecommerce-d2c' },
          { title: 'Heritage hotel videos', desc: 'Rooms, courtyards and experiences from your real photos, for direct bookings.', to: '/industries/hotels-travel' },
          { title: 'Wedding venue promos', desc: 'Venue and package videos for destination-wedding planners and families.', to: '/industries/events-weddings' },
          { title: 'Export buyer catalogues', desc: 'English catalogue videos for overseas buyers and trade fairs.', to: '/industries/manufacturers-exporters' },
          { title: 'Coaching promos', desc: 'Batch and admission videos in Hindi for institutes.', to: '/industries/education' },
        ],
      },
      { type: 'videos', tag: 'Our AI work', h2: 'AI videos we have made' },
      {
        type: 'prose',
        tag: 'Jaipur specifics',
        h2: 'What works for Jaipur audiences',
        bullets: [
          '**Craft first** — show the detail of the print, stone or workmanship; that is what buyers pay for',
          '**English for overseas buyers and tourists**, Hindi for local customers',
          '**Real properties** — hotel and venue videos built from your own photos, never invented spaces',
          '**Wedding-season timing** — venue and jewellery videos ready before the season starts',
        ],
      },
      {
        type: 'process',
        h2: 'How we work with Jaipur clients',
        steps: [
          { title: 'Call', desc: 'Your buyers — local, India-wide or overseas.' },
          { title: 'Script', desc: 'English and Hindi scripts for approval.' },
          { title: 'Produce', desc: 'Visuals from your photos with AI models or voice.' },
          { title: 'Deliver', desc: 'Sizes for Reels, YouTube, website and marketplaces.' },
        ],
      },
      {
        type: 'links',
        h2: 'More for Jaipur businesses',
        links: [
          { to: '/locations/jaipur', label: 'Digital marketing in Jaipur' },
          { to: '/locations/jaipur/website-development', label: 'Website development in Jaipur' },
          { to: '/locations/jaipur/seo', label: 'SEO in Jaipur' },
          { to: '/blog/ai-video-production-cost-india', label: 'What AI videos cost' },
        ],
      },
      {
        type: 'faq',
        faqs: [
          ['Can AI show our jewellery accurately?', 'Yes, when built from clear photos. We check every design and stone against the real piece before delivery.'],
          ['Can you make English videos for overseas buyers?', 'Yes — English first, with Hindi and other versions on request.'],
          ['Do you work with Jaipur businesses remotely?', 'Yes, over calls, video meetings and WhatsApp.'],
          RULES_FAQ,
        ],
      },
    ],
  },

  /* ============================= DEHRADUN ============================ */
  {
    city: 'dehradun',
    service: SERVICE,
    label: 'AI video production in Dehradun',
    banner: 'AI videos for Dehradun schools and boarding schools, defence-exam coaching, hotels and homestays, clinics and real-estate projects — admission, stay and offer videos made without a shoot.',
    intro: {
      h2: 'Schools, stays and services, on video',
      paras: [
        'Dehradun is known for its schools and boarding schools, coaching for defence and government exams, and as the gateway to Mussoorie and the hills — with hotels, homestays and cafes to match. Parents, students and travellers usually decide from far away, which makes good video essential.',
        'We produce AI admission videos, course promos and stay videos from your real photos, in Hindi and English. See the full service on [AI video production](/services/ai-video-production).',
      ],
    },
    blocks: [
      {
        type: 'cards',
        tag: 'Popular in Dehradun',
        h2: 'AI videos Dehradun businesses ask for',
        items: [
          { title: 'School admission videos', desc: 'Campus, facilities, boarding life and admission process for parents in other cities.', to: '/industries/education' },
          { title: 'Defence & exam coaching promos', desc: 'Batch, test-series and course videos — no selection guarantees.', to: '/industries/education' },
          { title: 'Hotel & homestay videos', desc: 'Rooms, views and experiences from real photos, for Dehradun and Mussoorie stays.', to: '/industries/hotels-travel' },
          { title: 'Cafe & restaurant reels', desc: 'Menu and weekend videos for Rajpur Road and city cafes.', to: '/industries/restaurants-cafes' },
          { title: 'Clinic & hospital videos', desc: 'Facility and awareness videos with real doctors for medical content.', to: '/industries/clinics' },
          { title: 'Property offer videos', desc: 'Project and plot offer videos, renders marked as illustrative.', to: '/industries/real-estate' },
        ],
      },
      { type: 'videos', tag: 'Our AI work', h2: 'AI videos we have made' },
      {
        type: 'prose',
        tag: 'Dehradun specifics',
        h2: 'What works for Dehradun audiences',
        bullets: [
          '**Parents decide from far away** — clear, calm admission videos build trust better than flashy ads',
          '**No guarantees** in coaching content — show the process, faculty and schedule instead',
          '**Real photos** of rooms, views and campuses, with AI used only for motion and voice',
          '**Seasonal timing** — summer and winter travel, and admission seasons',
        ],
      },
      {
        type: 'process',
        h2: 'How we work with Dehradun clients',
        steps: [
          { title: 'Call', desc: 'Your audience — parents, students or travellers.' },
          { title: 'Script', desc: 'Hindi or English scripts for approval.' },
          { title: 'Produce', desc: 'Visuals from your photos with AI presenter or voice.' },
          { title: 'Deliver', desc: 'Versions for YouTube, Reels and your website.' },
        ],
      },
      {
        type: 'links',
        h2: 'More for Dehradun businesses',
        links: [
          { to: '/locations/dehradun', label: 'Digital marketing in Dehradun' },
          { to: '/locations/dehradun/website-development', label: 'Website development in Dehradun' },
          { to: '/industries/education', label: 'Marketing for schools & coaching' },
          { to: '/industries/hotels-travel', label: 'Marketing for hotels & travel' },
        ],
      },
      {
        type: 'faq',
        faqs: [
          ['Can boarding schools use AI videos?', 'Yes, for facilities, routines and admission FAQs. Student and parent testimonials should always be real.'],
          ['Can coaching institutes advertise results?', 'Only real, verifiable results with permission. We never invent selections or toppers.'],
          ['Do you work with Dehradun businesses remotely?', 'Yes, over calls, video meetings and WhatsApp.'],
          RULES_FAQ,
        ],
      },
    ],
  },

  /* ============================ HYDERABAD ============================ */
  {
    city: 'hyderabad',
    service: SERVICE,
    label: 'AI video production in Hyderabad',
    banner: 'AI videos for Hyderabad SaaS and IT companies, pharma and healthcare, real-estate developers, restaurants and retail — explainers, launch videos and ads in English, Telugu and Hindi.',
    intro: {
      h2: 'From HITEC City launches to Old City favourites',
      paras: [
        'Hyderabad’s economy spans software and SaaS companies in HITEC City and Gachibowli, a major pharma and life-sciences industry, large hospitals, real-estate growth in Kokapet, Tellapur and beyond, and a food and retail scene from biryani houses to pearl and bangle markets near Charminar. Each needs video in a different language and style.',
        'We produce AI explainers, launch videos, project teasers and Reels in English, Telugu and Hindi — scripted for your audience and finished by our editors. See [AI video production](/services/ai-video-production) for the full service.',
      ],
    },
    blocks: [
      {
        type: 'cards',
        tag: 'Popular in Hyderabad',
        h2: 'AI videos Hyderabad businesses ask for',
        items: [
          { title: 'SaaS & IT explainers', desc: 'Product and service explainers mixing real UI with AI presenters, for LinkedIn and websites.', to: '/industries/startups-saas' },
          { title: 'Pharma & healthcare videos', desc: 'Corporate, process and awareness videos — medical claims checked by your team.', to: '/industries/clinics' },
          { title: 'Real-estate launch teasers', desc: 'Project teasers and offer videos from renders, marked as illustrative.', to: '/industries/real-estate' },
          { title: 'Restaurant & food reels', desc: 'Menu, launch and delivery-offer reels from your food photos.', to: '/industries/restaurants-cafes' },
          { title: 'Training & hiring videos', desc: 'Onboarding and employer-brand videos with consent-based avatars.', to: '/services/ai-avatar-videos' },
          { title: 'UGC-style ads', desc: 'Creator-style ad batches for D2C and consumer apps.', to: '/services/ai-ugc-videos' },
        ],
      },
      { type: 'videos', tag: 'Our AI work', h2: 'AI videos we have made' },
      {
        type: 'prose',
        tag: 'Hyderabad specifics',
        h2: 'What works for Hyderabad audiences',
        bullets: [
          '**English for B2B and tech**, **Telugu and Hindi** for local consumers — and Urdu-flavoured Hindi for parts of the old city',
          '**Calm, credible explainers** for SaaS and pharma; fast, hook-led Reels for food and retail',
          '**Area targeting** — Gachibowli, Kondapur, Banjara Hills or Secunderabad audiences behave differently',
          '**Compliance first** for healthcare and pharma content',
        ],
      },
      {
        type: 'process',
        h2: 'How we work with Hyderabad clients',
        steps: [
          { title: 'Discovery call', desc: 'Audience, platform and language for each video.' },
          { title: 'Scripts', desc: 'English, Telugu or Hindi scripts for approval.' },
          { title: 'Produce', desc: 'AI presenters, scenes, UI or product shots.' },
          { title: 'Finish', desc: 'Branding, captions and platform sizes.' },
        ],
      },
      {
        type: 'links',
        h2: 'More for Hyderabad businesses',
        links: [
          { to: '/locations/hyderabad', label: 'Digital marketing in Hyderabad' },
          { to: '/locations/hyderabad/website-development', label: 'Website development in Hyderabad' },
          { to: '/locations/hyderabad/seo', label: 'SEO in Hyderabad' },
          { to: '/locations/bengaluru/ai-video-production', label: 'AI video production in Bengaluru' },
        ],
      },
      {
        type: 'faq',
        faqs: [
          ['Can you make AI videos in Telugu?', 'Yes — Telugu, Hindi and English versions with matching captions.'],
          ['Can pharma and healthcare companies use AI video?', 'Yes for corporate, process and awareness content, with every medical claim reviewed by your team. Patient testimonials should be real.'],
          ['Do you work with Hyderabad companies remotely?', 'Yes, over calls, video meetings and shared drives.'],
          RULES_FAQ,
        ],
      },
    ],
  },

  /* =============================== PUNE ============================== */
  {
    city: 'pune',
    service: SERVICE,
    label: 'AI video production in Pune',
    banner: 'AI videos for Pune IT and SaaS companies, auto and engineering manufacturers, institutes, real-estate projects and D2C brands — explainers, product videos and ads in English, Marathi and Hindi.',
    intro: {
      h2: 'Pune’s tech, industry and campuses, on video',
      paras: [
        'Pune combines IT and SaaS around Hinjewadi, Kharadi and Baner, a major auto and engineering belt in Chakan, Pimpri-Chinchwad and Talegaon, a huge student population across its colleges and institutes, fast real-estate growth, and a young D2C and startup scene. Each sells best with short, clear video.',
        'We produce AI explainers, product and capability videos, admission promos and UGC-style ads in English, Marathi and Hindi. See the full service on [AI video production](/services/ai-video-production).',
      ],
    },
    blocks: [
      {
        type: 'cards',
        tag: 'Popular in Pune',
        h2: 'AI videos Pune businesses ask for',
        items: [
          { title: 'SaaS & IT explainers', desc: 'Product walkthroughs with real UI and AI presenters for LinkedIn and websites.', to: '/industries/startups-saas' },
          { title: 'Engineering product videos', desc: 'Component and capability videos with specifications for OEM and dealer buyers.', to: '/industries/manufacturers-exporters' },
          { title: 'Institute & course promos', desc: 'Admission, course and campus videos for colleges and training institutes.', to: '/industries/education' },
          { title: 'Real-estate teasers', desc: 'Launch and offer videos from renders for Pune projects, marked as illustrative.', to: '/industries/real-estate' },
          { title: 'D2C UGC ads', desc: 'Creator-style ad batches for testing hooks on Meta.', to: '/services/ai-ugc-videos' },
          { title: 'Marathi local ads', desc: 'Offer and introduction videos in Marathi for local customers.', to: '/services/ai-avatar-videos' },
        ],
      },
      { type: 'videos', tag: 'Our AI work', h2: 'AI videos we have made' },
      {
        type: 'prose',
        tag: 'Pune specifics',
        h2: 'What works for Pune audiences',
        bullets: [
          '**English for tech and B2B**, **Marathi and Hindi** for local consumers',
          '**Accurate specifications** for engineering buyers — AI only for presentation',
          '**Student-friendly** formats for institutes: short, captioned, mobile-first',
          '**Batch production** for startups that test new ad creatives every week',
        ],
      },
      {
        type: 'process',
        h2: 'How we work with Pune clients',
        steps: [
          { title: 'Discovery call', desc: 'Audience, platform and language.' },
          { title: 'Scripts', desc: 'Hooks and scripts for approval.' },
          { title: 'Produce', desc: 'AI presenters, scenes, UI or product shots.' },
          { title: 'Batch & refresh', desc: 'New versions as ads tire.' },
        ],
      },
      {
        type: 'links',
        h2: 'More for Pune businesses',
        links: [
          { to: '/locations/pune', label: 'Digital marketing in Pune' },
          { to: '/locations/pune/website-development', label: 'Website development in Pune' },
          { to: '/locations/pune/seo', label: 'SEO in Pune' },
          { to: '/locations/mumbai/ai-video-production', label: 'AI video production in Mumbai' },
        ],
      },
      {
        type: 'faq',
        faqs: [
          ['Can you make AI videos in Marathi?', 'Yes — Marathi, Hindi and English versions with matching captions.'],
          ['Can engineering companies use AI product videos?', 'Yes, built from your photos and drawings with specifications checked by your team.'],
          ['Do you work with Pune companies remotely?', 'Yes, over calls, video meetings and shared drives.'],
          RULES_FAQ,
        ],
      },
    ],
  },

  /* ======================== VARANASI — SEO =========================== */
  {
    city: 'varanasi',
    service: 'seo',
    label: 'SEO company in Varanasi',
    banner: 'Local SEO and Google Maps for Varanasi hotels, guest houses, Banarasi saree sellers, coaching institutes, hospitals and travel businesses — so pilgrims, tourists and buyers find you first.',
    intro: {
      h2: 'Be found before visitors reach Banaras',
      paras: [
        'In Varanasi, a large share of customers search long before they arrive: pilgrims look for a guest house near Dashashwamedh or Assi Ghat, families compare hospitals in Mahmoorganj or Lanka, students search for coaching near BHU, and shoppers across India look for Banarasi silk online. If you do not appear in those searches, a competitor or a booking platform gets the customer.',
        'Our SEO work for Varanasi businesses covers Google Maps, location and service pages, reviews and content — with monthly reports that show calls and enquiries, not just rankings. See how we approach [SEO](/services/seo) and [local SEO](/services/local-seo).',
      ],
    },
    blocks: [
      {
        type: 'prose',
        tag: 'What we do',
        h2: 'Our SEO services in Varanasi',
        bullets: [
          'Google Business Profile setup, categories, photos and posts for Maps visibility',
          'Pages for each service and location — “hotel near Kashi Vishwanath”, “coaching in Lanka”',
          'Review requests and replies, done steadily and genuinely',
          'Technical SEO: speed, mobile, indexing and structured data',
          'Content for visitors: guides, FAQs and directions that answer real questions',
          'Monthly reports from Search Console, Analytics and call/WhatsApp tracking',
        ],
      },
      {
        type: 'cards',
        tag: 'Industries',
        h2: 'Varanasi businesses we help with SEO',
        items: [
          { title: 'Hotels & guest houses', desc: 'Direct-booking pages and Maps visibility near the ghats and temples.', to: '/industries/hotels-travel' },
          { title: 'Banarasi saree sellers', desc: 'Product and category SEO for online stores selling across India.', to: '/industries/ecommerce-d2c' },
          { title: 'Coaching & schools', desc: 'Course and location pages for institutes near BHU, Lanka and Sigra.', to: '/industries/education' },
          { title: 'Hospitals & clinics', desc: 'Speciality pages, doctor profiles and Maps for local patients.', to: '/industries/clinics' },
        ],
      },
      {
        type: 'prose',
        tag: 'Varanasi specifics',
        h2: 'How people search in Varanasi',
        paras: [
          'Searches here are tied to landmarks and areas — Kashi Vishwanath, the ghats, BHU, Cantt station, Sarnath, Sigra, Lanka, Bhelupur — and many come from people outside the city. We build pages and Google Business Profile content around those exact searches, in English and Hindi.',
          'For hotels and guest houses, direct visibility on Google Maps and your own website reduces dependence on booking platforms. For saree sellers, product and category pages compete for all-India searches, not just local ones.',
        ],
      },
      {
        type: 'process',
        h2: 'How we run SEO',
        steps: [
          { title: 'Audit', desc: 'Website, Google Business Profile and competitors.' },
          { title: 'Plan', desc: 'The searches that bring customers, and the pages to target them.' },
          { title: 'Fix & build', desc: 'Technical fixes, new pages and profile improvements.' },
          { title: 'Reviews & mentions', desc: 'Genuine reviews and local listings.' },
          { title: 'Report', desc: 'Calls, enquiries and rankings every month.' },
        ],
      },
      {
        type: 'links',
        h2: 'More for Varanasi businesses',
        links: [
          { to: '/locations/varanasi', label: 'Digital marketing in Varanasi' },
          { to: '/locations/varanasi/website-development', label: 'Website development in Varanasi' },
          { to: '/locations/varanasi/ai-video-production', label: 'AI video production in Varanasi' },
          { to: '/blog/local-seo-checklist', label: 'Local SEO checklist' },
          { to: '/blog/seo-cost-india', label: 'What SEO costs in India' },
        ],
      },
      {
        type: 'faq',
        faqs: [
          ['How long does SEO take for a Varanasi business?', 'Google Maps and local searches can move within weeks once your profile and pages are right. Competitive searches take a few months of steady work.'],
          ['Can SEO reduce our dependence on booking platforms?', 'Yes. Strong Maps visibility and your own website bring direct enquiries, which usually cost less than platform commissions.'],
          ['Do you guarantee a number one ranking?', 'No one can honestly guarantee that. We promise clear monthly work and reports that show calls and enquiries.'],
          ['Do you work with Varanasi businesses remotely?', 'Yes — over calls, video meetings and WhatsApp.'],
        ],
      },
    ],
  },
];

const A = (q, a) => ({ q, a });
const answers = {
  '/locations/greater-noida/ai-video-production': A('Who makes AI videos in Greater Noida?', 'Orizova Digital, a Delhi NCR agency, makes AI videos for Greater Noida builders, colleges in Knowledge Park, manufacturers in the industrial sectors and local shops — project teasers from renders, admission promos, catalogue videos and UGC-style ads in Hindi and English, finished by human editors and labelled as AI where required.'),
  '/locations/ghaziabad/ai-video-production': A('Who makes AI videos for Ghaziabad businesses?', 'Orizova Digital makes AI videos for Ghaziabad builders, coaching institutes, hospitals, retailers and manufacturers — Hindi offer ads, explainers with an AI presenter, product videos from photos and UGC-style ads, produced without a shoot and sized for Reels, Shorts and WhatsApp.'),
  '/locations/indirapuram/ai-video-production': A('Who makes short AI videos for Indirapuram businesses?', 'Orizova Digital makes short AI videos for Indirapuram clinics, salons, cafes, tuition centres and property dealers — offers, introductions and listing videos in Hindi and English, made from your photos and targeted to nearby families through Instagram and WhatsApp.'),
  '/locations/faridabad/ai-video-production': A('Who makes AI product videos for Faridabad manufacturers?', 'Orizova Digital makes AI product and capability videos for Faridabad manufacturers — built from photos, drawings and specifications that your team checks — plus admission, hospital and property videos for local businesses, in Hindi and English.'),
  '/locations/lucknow/ai-video-production': A('Who makes AI videos in Lucknow?', 'Orizova Digital makes AI videos for Lucknow chikankari brands, restaurants, coaching institutes, hospitals and real-estate projects — chikankari shown on AI models from product photos, food reels, Hindi explainers and offer ads, for local and all-India audiences.'),
  '/locations/meerut/ai-video-production': A('Who makes AI product videos for Meerut businesses?', 'Orizova Digital makes AI videos for Meerut sports-goods and instrument makers, jewellers, coaching institutes, hospitals and builders — product videos with specifications, dealer-recruitment ads, jewellery reels and Hindi explainers.'),
  '/locations/agra/ai-video-production': A('Who makes AI videos for Agra hotels and exporters?', 'Orizova Digital makes AI videos for Agra hotels, tour operators, leather and footwear exporters, marble-inlay and handicraft sellers and petha brands — English and Hindi videos for tourists, buyers and online shoppers, built from real photos.'),
  '/locations/kanpur/ai-video-production': A('Who makes AI catalogue videos for Kanpur companies?', 'Orizova Digital makes AI catalogue and product videos for Kanpur leather, textile and FMCG companies, dealer-recruitment ads, and Hindi explainers for coaching institutes and hospitals — accurate to your products and approved by your team.'),
  '/locations/varanasi/ai-video-production': A('Who makes AI videos for Varanasi businesses?', 'Orizova Digital makes AI videos for Varanasi hotels and guest houses, Banarasi saree sellers, tour and puja services, coaching institutes and hospitals — built from real photos, in Hindi, English and other languages for pilgrims, tourists and online buyers.'),
  '/locations/mohali/ai-video-production': A('Who makes AI videos in Mohali?', 'Orizova Digital makes AI videos for Mohali IT companies, immigration and IELTS consultants, hospitals, builders and restaurants — explainers, offer ads and presenter videos in Punjabi, Hindi and English, with no visa or result promises in immigration content.'),
  '/locations/panchkula/ai-video-production': A('Who makes AI videos in Panchkula?', 'Orizova Digital makes AI videos for Panchkula schools, clinics, builders, boutiques, cafes and hill-stay businesses — short local ads and explainers in Hindi, Punjabi and English, made from your photos.'),
  '/locations/ludhiana/ai-video-production': A('Who makes AI catalogue videos for Ludhiana businesses?', 'Orizova Digital makes AI videos for Ludhiana knitwear and hosiery brands, cycle and auto-parts makers, wholesalers, boutiques and immigration consultants — season catalogues on AI models, product videos with specifications, dealer ads and Punjabi reels.'),
  '/locations/jaipur/ai-video-production': A('Who makes AI videos for Jaipur jewellers and hotels?', 'Orizova Digital makes AI videos for Jaipur jewellers, block-print and handicraft brands, heritage hotels, wedding venues and coaching institutes — product showcases checked against the real pieces, hotel videos from real photos, in English and Hindi.'),
  '/locations/dehradun/ai-video-production': A('Who makes AI admission and hotel videos in Dehradun?', 'Orizova Digital makes AI videos for Dehradun schools and boarding schools, exam-coaching institutes, hotels and homestays, clinics and property projects — admission and stay videos from real photos, in Hindi and English, with no result guarantees.'),
  '/locations/hyderabad/ai-video-production': A('Who makes AI explainer videos in Hyderabad?', 'Orizova Digital makes AI videos for Hyderabad SaaS and IT companies, pharma and healthcare, real-estate developers, restaurants and retail — explainers with real UI and AI presenters, launch teasers and Reels in English, Telugu and Hindi.'),
  '/locations/pune/ai-video-production': A('Who makes AI videos for Pune companies?', 'Orizova Digital makes AI videos for Pune IT and SaaS companies, auto and engineering manufacturers, institutes, real-estate projects and D2C brands — explainers, product and capability videos, admission promos and UGC-style ads in English, Marathi and Hindi.'),
  '/locations/varanasi/seo': A('Which SEO company helps Varanasi businesses rank on Google?', 'Orizova Digital does SEO and Google Maps work for Varanasi hotels, guest houses, Banarasi saree sellers, coaching institutes and hospitals — Business Profile optimisation, landmark and service pages, genuine reviews, technical fixes and monthly reports on calls and enquiries.'),
};

const aiVideoCities2 = { pages, answers };
export default aiVideoCities2;
