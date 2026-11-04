// Blog posts (set D, 4 Nov 2026). Original writing — no invented statistics,
// clients or results. Third-party prices and rules link to the official page
// and are dated, because they change. Example numbers are labelled as such.
//
// Extra section fields used here (rendered by Prose in ContentBlocks.jsx):
//   steps: [{ title, text }]                       numbered step cards
//   table: { caption, head: [], rows: [[]], note } comparison table
//   tip:   { title, text, tone: tip|warn|example } callout box

const postsD = [
  /* ------------------------------------------------------------------ */
  {
    slug: 'how-long-does-seo-take',
    title: 'How Long Does SEO Take to Show Results? A Realistic Timeline for Indian Businesses',
    category: 'SEO',
    date: '2026-11-04',
    readMins: 9,
    chips: ['SEO', '9 min read', 'Timeline', 'India'],
    excerpt: 'Most businesses see the first signs of SEO in weeks, real enquiries in a few months, and steady growth after six to twelve. Here is what happens in each phase — and what speeds it up or slows it down.',
    intro: [
      '“How long before we show up on Google?” is the first question almost every business owner asks about SEO — and the answer they hear is usually either a vague “it depends” or a promise of page one in 30 days. Neither helps you plan.',
      'This guide gives you an honest, phase-by-phase timeline: what you should see in the first weeks, when enquiries usually start, and why some businesses move faster than others. It is written for Indian small and mid-sized businesses — clinics, builders, coaching institutes, manufacturers, local services and online stores.',
    ],
    sections: [
      {
        h2: 'The short answer',
        paras: [
          'Google itself says that in most cases SEO needs **four months to a year** to first put improvements in place and then see the benefit — that line comes from its own guide, [Do you need an SEO?](https://developers.google.com/search/docs/fundamentals/do-i-need-seo). That matches what we see: technical fixes and Google Maps changes can show movement within weeks, but rankings that bring regular enquiries are built over months.',
        ],
        tip: {
          tone: 'warn',
          title: 'Be careful with guarantees',
          text: 'Nobody can guarantee a #1 ranking on Google. Google says so in the same guide. An agency that promises page one by a fixed date is either guessing or using shortcuts that can get your site penalised.',
        },
      },
      {
        h2: 'A month-by-month SEO timeline',
        paras: [
          'Every site is different, but the work — and the results — usually follow this order:',
        ],
        table: {
          caption: 'Typical SEO timeline for a small business website',
          head: ['Phase', 'What gets done', 'What you can expect to see'],
          rows: [
            ['Weeks 1–4', 'Technical audit and fixes, Search Console set-up, sitemap, page titles, Google Business Profile clean-up', 'Pages indexed properly; impressions start to appear in Search Console'],
            ['Months 2–3', 'New or improved service and city pages, internal links, first reviews and listings', 'More impressions, first rankings for specific, low-competition searches, some Maps calls'],
            ['Months 4–6', 'Content for buyer questions, more reviews, local citations, earned links', 'Clicks and enquiries start to come from search; ranking for more valuable terms'],
            ['Months 6–12', 'Keep publishing, improve pages that almost rank, build reputation', 'Steady, compounding traffic; competitive terms start to move'],
          ],
          note: 'A guide, not a promise. New domains and competitive industries sit at the slower end; established sites with old problems fixed often move faster.',
        },
      },
      {
        h2: 'Why some sites rank faster than others',
        bullets: [
          '**Age and history of the domain.** A brand-new website has no reputation yet. An older site that was simply badly built often jumps quickly once it is fixed.',
          '**Competition for the search.** “Dentist in Indirapuram” is far easier than “best dentist in Delhi”. City and service-specific searches move first.',
          '**How much useful content you have.** One home page cannot rank for twenty services. Each service and area needs its own clear page.',
          '**Technical health.** Slow, broken or hard-to-crawl pages hold everything back. Speed and mobile-friendliness are the base, not a bonus.',
          '**Reviews and mentions.** For local searches especially, genuine Google reviews and listings on trusted sites decide who appears in the map pack.',
          '**Consistency.** SEO that is done for two months and then stopped rarely sticks. Small monthly work beats one big push.',
        ],
      },
      {
        h2: 'Local SEO is usually the fastest win',
        paras: [
          'If customers find you nearby — clinics, salons, restaurants, home services, showrooms — the Google Maps results are where the quickest gains usually are. A fully completed and accurate Google Business Profile, the right primary category, real photos and a steady flow of reviews can change your Maps visibility within weeks, long before your website ranks for competitive terms.',
          'Start with our [Google Business Profile guide](/blog/google-business-profile-guide) and the [25-step local SEO checklist](/blog/local-seo-checklist), or see our [local SEO service](/services/local-seo).',
        ],
      },
      {
        h2: 'What a realistic first 90 days looks like',
        steps: [
          { title: 'Fix what stops Google reading the site', text: 'Indexing errors, slow pages, missing titles and descriptions, duplicate pages and broken links. Submit a sitemap in Google Search Console.' },
          { title: 'Give every service and area a proper page', text: 'One clear page per service (and per city, where you genuinely serve it) that answers what, who, where, how long and what affects the cost.' },
          { title: 'Clean up your Google Business Profile and reviews', text: 'Same name, phone and address everywhere, the right categories, real photos, and a simple routine for asking happy customers for reviews.' },
          { title: 'Answer the questions buyers ask before they call', text: 'Costs and what affects them, timelines, comparisons, “how to choose” — the same questions people now also ask ChatGPT and Google’s AI answers.' },
          { title: 'Measure enquiries, not just rankings', text: 'Track calls, WhatsApp clicks and form leads from search, so you can see which pages actually bring business.' },
        ],
      },
      {
        h2: 'A real example: our own website',
        paras: [
          'When we rebuilt the Orizova Digital website in October 2026 — fast pre-rendered pages, one page per service, industry and city, schema and answer-first summaries — daily Google impressions grew from under 20 at the start of October to 40–100 a day by the last week of the month, according to Google Search Console. That is the “first signs” stage: Google is testing the pages. Clicks and enquiries come as rankings firm up over the following months.',
          'You can read exactly what we did in the [Orizova Digital case study](/portfolio/orizova-digital).',
        ],
      },
      {
        h2: 'How to tell if SEO is working before rankings arrive',
        paras: [
          'In the first months, rankings are the last thing to move. Watch these instead in [Google Search Console](https://search.google.com/search-console/about):',
        ],
        bullets: [
          'More pages indexed, and fewer indexing errors',
          'Impressions rising week on week, even if clicks are still low',
          'New search queries appearing that match your services and cities',
          'Average position improving for specific, long searches first',
          'More calls, direction requests and website clicks in your Google Business Profile',
        ],
        tip: {
          tone: 'tip',
          title: 'A simple monthly check',
          text: 'Compare the last 28 days with the 28 days before in Search Console. If impressions and the number of queries are growing, the groundwork is paying off — clicks follow.',
        },
      },
      {
        h2: 'Can you speed SEO up?',
        paras: [
          'You cannot force Google, but you can remove delays. Publish pages that genuinely answer searches, link them from your existing pages, keep the site fast, and build reviews from real customers. Crawling and re-indexing of updated pages can take anywhere from a few days to a few weeks, so request indexing in Search Console for important new pages — see Google’s note on [asking Google to recrawl](https://developers.google.com/search/docs/crawling-indexing/ask-google-to-recrawl).',
          'If you need enquiries this month, run [Google Ads](/services/google-ads) alongside SEO. Ads bring traffic from day one, and the search terms that convert tell you which pages to build for SEO. Our [Google Ads budget guide](/blog/google-ads-cost-india) explains how to start small.',
        ],
      },
      {
        h2: 'Red flags when an agency talks about timelines',
        bullets: [
          'A guaranteed #1 ranking, or page one “in 15 days”',
          'Hundreds of backlinks per month for a low fixed price',
          'Reports that only show rankings for terms nobody searches',
          'No access for you to Search Console, Analytics or your Google Business Profile',
          'No clear list of what will be done each month',
        ],
        after: [
          'Our checklist of [15 questions to ask before hiring a digital marketing agency](/blog/how-to-choose-digital-marketing-agency) covers this in detail.',
        ],
      },
      {
        h2: 'Need help with SEO?',
        paras: [
          'Orizova Digital provides [SEO](/services/seo), [local SEO](/services/local-seo) and [AI search optimization](/services/ai-search-optimization) for businesses across India. We start with a free check of where you stand today and give you a written plan with a realistic timeline — no ranking guarantees, just the work and the numbers. [Talk to us](/contact).',
        ],
      },
    ],
    faqs: [
      ['How long does SEO take for a new website?', 'Usually longer than for an established site — often six months or more for competitive searches, because a new domain has no history or reviews yet. Specific city and service searches can start moving within the first few months.'],
      ['How long does local SEO take?', 'Google Business Profile fixes can change your Maps visibility within weeks. Reviews, citations and local pages build over months.'],
      ['Is SEO worth it for a small business?', 'Yes, if you can give it time. Once pages rank, the traffic does not stop the day you stop paying, unlike ads. Many businesses run ads for quick enquiries while SEO builds.'],
      ['Why is my website not showing on Google at all?', 'Check it is indexed in Google Search Console, that robots.txt or a noindex tag is not blocking it, and that you have a page that matches what people search. A brand-new site can take a few weeks to be crawled.'],
      ['Can SEO results disappear?', 'Rankings can drop if competitors improve, Google updates its systems or your site develops problems. Regular, steady work protects them.'],
    ],
  },

  /* ------------------------------------------------------------------ */
  {
    slug: 'shopify-vs-woocommerce-vs-custom-website-india',
    title: 'Shopify vs WooCommerce vs Custom Website: Which Is Best for an Online Store in India? (2026)',
    category: 'E-commerce',
    date: '2026-11-04',
    readMins: 10,
    chips: ['E-commerce', '10 min read', 'Comparison', 'India'],
    excerpt: 'Shopify is quickest to launch, WooCommerce gives control at a lower monthly cost, and a custom build fits brands with unusual needs or heavy traffic. A side-by-side comparison of costs, fees, payments, speed and SEO for Indian sellers.',
    intro: [
      'If you are starting an online store in India — or moving beyond selling only on Instagram, Amazon or Meesho — the first big decision is the platform. Get it right and the store is easy to run for years. Get it wrong and you pay for it in monthly fees, slow pages or an expensive rebuild.',
      'This guide compares the three routes Indian businesses usually choose: **Shopify**, **WooCommerce** (on WordPress) and a **custom-built** store. No platform is “best” for everyone; the right one depends on your products, budget, team and plans.',
    ],
    sections: [
      {
        h2: 'Quick comparison',
        table: {
          caption: 'Shopify vs WooCommerce vs custom store (India, November 2026)',
          head: ['', 'Shopify', 'WooCommerce', 'Custom build'],
          rows: [
            ['Best for', 'Launching fast with little tech help', 'Owners who want control and lower monthly fees', 'Brands with unique features, scale or speed needs'],
            ['Monthly running cost', 'Plan fee + 18% GST + paid apps', 'Hosting, domain, paid plugins, upkeep', 'Hosting and maintenance; no platform fee'],
            ['Extra fee per sale', 'Yes, on online payments via a third-party gateway', 'No platform fee (only the gateway’s charge)', 'No platform fee (only the gateway’s charge)'],
            ['Indian payments', 'Razorpay, PayU, Cashfree and others via apps', 'Razorpay, PayU, Cashfree and others via plugins', 'Any gateway, integrated directly'],
            ['Speed', 'Good; depends on theme and apps', 'Varies a lot with hosting and plugins', 'Can be the fastest — built for your pages'],
            ['SEO control', 'Good, with some fixed URL patterns', 'Full control', 'Full control'],
            ['Who updates it', 'You, in a simple dashboard', 'You, plus a developer for updates and fixes', 'A developer for new features; you for products and orders'],
          ],
          note: 'Fees and features change — always check the official pages before deciding: [Shopify India pricing](https://www.shopify.com/in/pricing) and [WooCommerce](https://woocommerce.com/).',
        },
      },
      {
        h2: 'Shopify: fastest to launch',
        paras: [
          'Shopify is a hosted platform: you pay a monthly subscription and Shopify handles hosting, security and updates. You pick a theme, add products, connect a payment gateway and you can be selling within days.',
          'What Indian sellers should know about cost: at the time of writing (November 2026) the **Basic** plan is listed at about ₹1,499 a month when billed yearly, with 18% GST added. **Shopify Payments is not available in India**, so stores use a third-party gateway such as Razorpay, PayU or Cashfree — and Shopify then adds its own transaction fee on online payments (2% on Basic, lower on higher plans), on top of the gateway’s charge. Cash on delivery orders are not charged that fee. Many features also come from paid apps, which add monthly costs.',
        ],
        bullets: [
          '**Good for:** first-time sellers, small catalogues, fashion, beauty, gifting and D2C brands that want to launch quickly',
          '**Watch out for:** transaction fees as sales grow, app costs adding up, and less freedom to change how checkout and some URLs work',
        ],
      },
      {
        h2: 'WooCommerce: control at a lower monthly cost',
        paras: [
          'WooCommerce is a free, open-source plugin that turns a WordPress website into a store. There is no platform subscription or platform transaction fee, but you pay for good hosting, a domain, your theme, paid extensions you need, and — importantly — someone to keep WordPress, the theme and plugins updated and secure.',
          'Because it is WordPress, it is excellent for content: blogs, guides and category pages that help with SEO. It also has plugins for almost everything Indian stores need, including GST invoices, COD rules and shipping integrations.',
        ],
        bullets: [
          '**Good for:** stores that also want a strong blog, businesses with an existing WordPress site, owners who want ownership without monthly platform fees',
          '**Watch out for:** slow sites from cheap hosting or too many plugins, and security issues when updates are skipped',
        ],
      },
      {
        h2: 'Custom-built store: when your needs are not standard',
        paras: [
          'A custom store is built specifically for your business — for example a React or Next.js front end with your own product and order system. There is no platform fee and no limit on how checkout, pricing or product pages work, and it can be the fastest option, because nothing loads that your store does not need.',
          'The trade-off is a higher build cost and time, and you depend on developers for new features. It makes sense when you have rules the standard platforms handle badly: dealer and retail pricing, B2B bulk orders, custom product builders, subscriptions, multiple warehouses, or very high traffic.',
        ],
        bullets: [
          '**Good for:** manufacturers and wholesalers with B2B pricing, brands with complex products, high-traffic stores that need top speed',
          '**Watch out for:** choose a team that documents the code and hands over every account, so you are not locked in',
        ],
      },
      {
        h2: 'What it really costs to run each one',
        paras: [
          'The build cost is only part of the picture. Before you choose, list the running costs for the next two to three years:',
        ],
        bullets: [
          'Platform plan or hosting, plus 18% GST where it applies',
          'Payment gateway charges on every online order — check the current rates of Razorpay, PayU or Cashfree',
          'Platform transaction fees (Shopify, when using a third-party gateway)',
          'Paid apps, plugins and premium themes, often billed monthly or yearly',
          'Maintenance, updates, backups and security',
          'Shipping and COD handling (Shiprocket, Delhivery and similar)',
          'Marketing: SEO, Google Shopping, Meta ads and content',
        ],
        tip: {
          tone: 'example',
          title: 'Quick way to compare',
          text: 'Estimate your monthly online sales a year from now. Multiply it by each platform’s extra fee per sale, then add the monthly plan, apps and maintenance. The cheapest option at launch is not always the cheapest at scale.',
        },
      },
      {
        h2: 'Payments, COD and GST in India',
        bullets: [
          '**Payment gateways:** Razorpay, PayU, Cashfree and others work with all three options; UPI is a must for Indian buyers.',
          '**Cash on delivery:** still popular in many categories. Plan COD limits, extra COD charges or OTP confirmation to reduce fake orders and returns.',
          '**GST invoices:** make sure your store can generate GST-compliant invoices with your GSTIN, HSN codes and the right tax split.',
          '**Shipping:** integrate a shipping aggregator early so orders, tracking and returns are not handled manually.',
        ],
      },
      {
        h2: 'SEO and speed: what matters for ranking',
        paras: [
          'All three can rank well on Google. What matters more than the platform is how the store is built: fast-loading pages on mobile, unique product and category descriptions (not copied from the manufacturer), clean URLs, product schema, and category pages that match how people search — “cotton kurta sets for women”, not just “Collection 3”.',
          'Speed is where the platforms differ most in practice. A Shopify store with many apps, or a WooCommerce store on cheap hosting, can become slow. A well-built custom store can be the fastest. Whichever you choose, test your pages in [PageSpeed Insights](https://pagespeed.web.dev/) before launch.',
        ],
      },
      {
        h2: 'Which should you choose?',
        steps: [
          { title: 'Choose Shopify if…', text: 'you want to start selling within weeks, have a small team, a standard catalogue and want the least technical work.' },
          { title: 'Choose WooCommerce if…', text: 'you want to own everything, avoid platform fees, publish a lot of content, and have (or can hire) someone to maintain WordPress.' },
          { title: 'Choose a custom build if…', text: 'you have B2B or dealer pricing, complex products, high traffic or specific checkout rules — and the budget for a proper build.' },
        ],
        after: [
          'Not sure? Many brands start on Shopify or WooCommerce and move to a custom build once sales and requirements grow. Plan your product data and URLs from day one so that move is easy later.',
        ],
      },
      {
        h2: 'Need help choosing or building your store?',
        paras: [
          'Orizova Digital builds [e-commerce websites](/services/ecommerce-solutions) on Shopify, WooCommerce and custom code for [D2C brands](/industries/ecommerce-d2c), [retailers](/industries/retail-showrooms) and [manufacturers](/industries/manufacturers-exporters) across India — with payments, COD rules, GST invoices and SEO set up from the start. We will recommend the platform that fits your business, not the one we prefer to build. [Get a free consultation](/contact).',
          'Planning a regular business website instead? Read [how to get a business website made in India](/blog/how-to-get-a-business-website-india).',
        ],
      },
    ],
    faqs: [
      ['Is Shopify available in India?', 'Yes. Shopify has Indian pricing in rupees. Shopify Payments is not available in India, so stores connect a third-party gateway such as Razorpay, PayU or Cashfree.'],
      ['Is WooCommerce free?', 'The WooCommerce plugin is free. You still pay for hosting, a domain, any paid themes or extensions, and maintenance.'],
      ['Which platform is best for SEO?', 'All three can rank well. Page speed, unique product and category content, clean URLs and product schema matter more than the platform itself.'],
      ['Can I move from Shopify to WooCommerce or a custom store later?', 'Yes. Products, customers and orders can be migrated. Set up 301 redirects from old URLs to new ones so you keep your Google rankings.'],
      ['Can I offer cash on delivery?', 'Yes, on all three. Shopify’s transaction fee applies to online payments through third-party gateways, not to COD orders.'],
    ],
  },

  /* ------------------------------------------------------------------ */
  {
    slug: 'google-ads-cost-india',
    title: 'Google Ads Cost in India: How Much Budget Do You Need? (2026 Guide)',
    category: 'Ads',
    date: '2026-11-04',
    readMins: 9,
    chips: ['Google Ads', '9 min read', 'Budget', 'India'],
    excerpt: 'There is no fixed price for Google Ads — you set the budget and pay when people click. Here is how the cost is decided, how to work out a starting budget from your own numbers, and how to stop wasting it.',
    intro: [
      '“How much does Google Ads cost?” has no single answer, and anyone who gives you one number without asking about your business is guessing. A click for a plumber in a small town and a click for a home loan in Mumbai can differ many times over.',
      'What you can do is understand how the price is decided, work out a sensible starting budget from your own numbers, and set the account up so the money goes to people who are ready to buy. This guide walks you through all three, for Indian businesses.',
    ],
    sections: [
      {
        h2: 'How Google Ads pricing actually works',
        paras: [
          'For search campaigns you usually pay **per click** — only when someone clicks your ad. Every search runs a quick auction. Your position and the price you pay depend on your bid, the quality and relevance of your ad and landing page, and the context of the search. That is why a better ad and page can win clicks for less than a competitor who simply bids more.',
          'You stay in control of the total: you set an average daily budget. Google explains in [its help on overdelivery](https://support.google.com/google-ads/answer/1704443?hl=en) that a campaign might spend up to twice the average daily budget on a busy day, but over a month you will not be charged more than **30.4 times** your average daily budget.',
        ],
        tip: {
          tone: 'tip',
          title: 'No minimum spend',
          text: 'Google Ads has no fixed minimum budget. In India, GST is added to your ad spend on the invoice — check the billing section of your account when planning.',
        },
      },
      {
        h2: 'What makes clicks expensive (or cheap)',
        bullets: [
          '**Industry.** Searches with high-value customers — loans, insurance, property, legal, education admissions, cosmetic treatments — attract more advertisers and cost more per click.',
          '**City and targeting.** Metro cities usually cost more than smaller towns. Targeting a tight radius around your shop keeps clicks relevant.',
          '**Keyword intent.** “Dentist near me open now” is worth more to a clinic than “what causes tooth pain” — and is priced like it.',
          '**Your ad and landing page quality.** Relevant ads and fast, clear landing pages help you pay less for the same position.',
          '**Competition at that moment.** Prices change by time of day, season and how many competitors are bidding.',
        ],
      },
      {
        h2: 'How to work out your starting budget',
        paras: [
          'Start from the number of enquiries you want, not from a round figure. You need three numbers:',
        ],
        steps: [
          { title: 'Estimate your cost per click', text: 'Open [Keyword Planner](https://ads.google.com/home/tools/keyword-planner/) inside Google Ads, enter your main services and city, and note the “top of page bid” range for the keywords you would actually bid on.' },
          { title: 'Estimate how many clicks become enquiries', text: 'This is your conversion rate. If you have no history yet, use a cautious guess and replace it with real data after the first few weeks.' },
          { title: 'Decide how many enquiries you want per month', text: 'Be realistic — and make sure your team can answer every call and WhatsApp quickly. Slow replies waste paid leads.' },
          { title: 'Do the maths', text: 'Monthly budget ≈ enquiries wanted × cost per click ÷ conversion rate. Divide by 30.4 for your average daily budget.' },
        ],
        tip: {
          tone: 'example',
          title: 'Worked example (example numbers only)',
          text: 'Say Keyword Planner suggests clicks around ₹40, and 5 in every 100 clicks become an enquiry. Each enquiry then costs about ₹40 ÷ 0.05 = ₹800. For 30 enquiries a month you need roughly 30 × ₹800 = ₹24,000, or about ₹790 a day. Your own keywords, city and landing page will give different numbers — use this method, not these figures.',
        },
      },
      {
        h2: 'Five ways businesses waste Google Ads budget',
        bullets: [
          '**Broad keywords with no negatives.** Without negative keywords, ads show for “free”, “jobs”, “course” and “DIY” searches that never buy.',
          '**Sending clicks to the home page.** A dedicated landing page for each service converts far better than a general home page.',
          '**No conversion tracking.** If calls, WhatsApp clicks and forms are not tracked, Google cannot optimise and you cannot judge what works.',
          '**Targeting too wide an area.** Showing ads across a whole state when you serve three localities burns money on people who will never visit.',
          '**Judging too early or never at all.** Changing everything after three days is as harmful as letting a poor campaign run for months unchecked.',
        ],
        after: [
          'If your ads bring visitors but the phone stays quiet, the problem is often the page, not the ads — see [15 fixes for a website with visitors but no enquiries](/blog/website-visitors-but-no-enquiries).',
        ],
      },
      {
        h2: 'Set up the account so every rupee is measured',
        steps: [
          { title: 'Track the actions that matter', text: 'Calls from ads, calls from the website, WhatsApp clicks and form submissions — set each up as a conversion before spending.' },
          { title: 'Group keywords by service', text: 'One campaign or ad group per service, each with its own ads and landing page, so you can see what pays.' },
          { title: 'Add negative keywords from day one', text: 'Block searches you know will not buy, and review the search terms report every week to add more.' },
          { title: 'Use location and schedule settings', text: 'Target where your customers are, and show ads when someone can answer the phone.' },
          { title: 'Review weekly, change slowly', text: 'Look at cost per enquiry and lead quality, move budget to what works, and give changes a week or two to settle.' },
        ],
      },
      {
        h2: 'Google Ads or Meta Ads first?',
        paras: [
          'Google Ads catches people who are already searching for what you sell, so it usually brings higher-intent enquiries. Meta (Facebook and Instagram) ads create demand among people who were not searching yet — often cheaper per lead, but they need more filtering. Many businesses start with Google for ready buyers and add Meta for reach. Our comparison [Meta Ads vs Google Ads](/blog/meta-ads-vs-google-ads) explains which suits which business.',
        ],
      },
      {
        h2: 'Should you manage Google Ads yourself or hire someone?',
        paras: [
          'You can run a simple local campaign yourself if you have time to learn, set up tracking properly and check the account every week. An experienced manager is worth it when the budget is meaningful, the industry is competitive, or you need landing pages and tracking built. Either way, the account should be in your name and you should see every report.',
          'Orizova Digital manages [Google Ads](/services/google-ads) for clinics, real estate, education, home services and local businesses across India — with conversion tracking, landing pages and plain-language monthly reports. [Talk to us](/contact) for a free account review or launch plan.',
        ],
      },
    ],
    faqs: [
      ['What is the minimum budget for Google Ads in India?', 'There is no fixed minimum. You set your own average daily budget. A budget that is too small for your keywords simply gets too few clicks to learn from, so work it out from your cost per click and the enquiries you want.'],
      ['Do I pay for every view of my ad?', 'For most search campaigns you pay when someone clicks, not when the ad is shown.'],
      ['Can Google spend more than my daily budget?', 'On some days a campaign can spend up to twice the average daily budget, but over a month Google will not charge more than 30.4 times your average daily budget.'],
      ['How soon do Google Ads bring enquiries?', 'Ads can bring clicks from the first day they are approved. Expect a few weeks of data before costs settle and you can judge results properly.'],
      ['Is GST charged on Google Ads in India?', 'Yes, GST is added to ad spend for Indian billing. Check the billing section of your Google Ads account and your invoices for the exact amounts.'],
    ],
  },
];

export default postsD;
