// Blog posts (set F, 13 Nov 2026): commercial-intent cluster — what ads, SEO
// and social media cost, WhatsApp marketing, and B2B leads for manufacturers.
// Original writing — no invented statistics, clients, results or prices.
// Example numbers are labelled as examples.

const postsF = [
  /* ------------------------------------------------------------------ */
  {
    slug: 'meta-ads-cost-india',
    title: 'Facebook & Instagram Ads Cost in India: Budget, Cost per Lead and GST (2026)',
    category: 'Ads',
    date: '2026-11-13',
    readMins: 9,
    chips: ['Meta Ads', '9 min read', 'Budget', 'India'],
    excerpt: 'There is no fixed price for Facebook and Instagram ads — you choose the budget and the auction decides the rest. How Meta ads are priced in India, how to work out a budget from the leads you want, and why the cheapest lead is rarely the best one.',
    intro: [
      '“How much do Facebook ads cost?” is one of the first questions every business owner asks — and the honest answer is that you decide. Meta (Facebook and Instagram) has no fixed rate card. You set a budget, and an auction decides how far that budget goes.',
      'What you can control is how well that money is used. This guide explains how Meta ads are priced in India, what makes results expensive or cheap, how to work out a starting budget from the number of leads you want, and the mistakes that quietly waste money.',
    ],
    sections: [
      {
        h2: 'How Meta ads pricing works',
        paras: [
          'Every time someone opens Facebook or Instagram, Meta runs an auction to decide which ads they see. The winner is not simply the highest bidder: Meta weighs your bid, how likely the person is to take the action you want, and how relevant and good your ad is. A strong ad can reach the right people for less than a weak ad with a bigger budget.',
          'You pay for what the campaign is set to buy — usually impressions, with Meta optimising for your goal such as leads, messages or purchases. You control the total with a **daily or lifetime budget**, and you can pause at any time.',
        ],
        tip: {
          tone: 'tip',
          title: 'GST on Meta ads',
          text: 'For businesses billed in India, GST is added to ad spend on Meta’s invoices. If you are GST-registered, add your GSTIN in the billing settings so the invoices carry it. Plan your budget with GST included.',
        },
      },
      {
        h2: 'The numbers that matter: CPM, CPC and cost per lead',
        table: {
          caption: 'Meta ads metrics in plain language',
          head: ['Metric', 'What it means', 'Why it matters'],
          rows: [
            ['CPM', 'Cost for 1,000 times your ad is shown', 'Tells you how expensive the audience is'],
            ['CTR', 'Share of people who click', 'Tells you if the ad is interesting'],
            ['CPC', 'Cost per click', 'Useful for website traffic campaigns'],
            ['CPL', 'Cost per lead (form, message or call)', 'The number most businesses budget with'],
            ['Cost per qualified lead', 'Cost per lead that is genuine and interested', 'The number that actually decides profit'],
          ],
          note: 'A low cost per lead with mostly fake or uninterested leads is more expensive than a higher cost per lead that turns into customers.',
        },
      },
      {
        h2: 'What makes Meta ads expensive (or cheap)',
        bullets: [
          '**Industry and audience.** Audiences that many advertisers want — property buyers, loan seekers, cosmetic treatments, admissions — cost more to reach.',
          '**City and season.** Metro audiences usually cost more. Festive seasons, sale periods and admission season push prices up for everyone.',
          '**The creative.** The ad itself is the biggest lever you control. A clear hook, real visuals and one message lower your costs; a generic poster raises them.',
          '**The offer.** “Book a free consultation” or “Get the price list on WhatsApp” gets more responses than “Contact us”.',
          '**The form or landing page.** Instant forms are cheaper per lead but bring more casual entries. A qualifying question or a landing page brings fewer, better leads.',
          '**Account history and tracking.** Campaigns with proper tracking (Pixel and Conversions API) learn faster and waste less.',
        ],
      },
      {
        h2: 'How to work out your starting budget',
        paras: ['Start from the customers you want, not from a round figure:'],
        steps: [
          { title: 'Decide how many customers you want per month', text: 'Be realistic about how many your team can handle and follow up properly.' },
          { title: 'Estimate how many leads become customers', text: 'If 1 in 10 leads usually buys, you need ten leads per customer. Use your own sales history; if you have none, start cautious and correct it after a few weeks.' },
          { title: 'Estimate a cost per lead', text: 'Use past campaigns, or run a small test for one to two weeks to find your real cost per lead before scaling.' },
          { title: 'Do the maths and add GST', text: 'Monthly budget ≈ customers wanted × leads per customer × cost per lead, plus GST.' },
        ],
        tip: {
          tone: 'example',
          title: 'Worked example (example numbers only)',
          text: 'A clinic wants 15 new patients a month. Roughly 1 in 8 leads books, so it needs about 120 leads. If a test shows a cost per lead of around ₹150, the ad budget is about 120 × ₹150 = ₹18,000 a month plus GST. Your city, offer and creative will give different numbers — use the method, not these figures.',
        },
      },
      {
        h2: 'Why the cheapest leads are often the most expensive',
        paras: [
          'It is easy to get cheap leads from Meta: an instant form with pre-filled details and no questions will collect names quickly. But many of those people tapped by mistake, do not remember filling the form, or were never going to buy. Your team spends hours calling them, and the real cost per customer goes up.',
          'Better-quality setups add a little friction on purpose — a question about budget or timeline, a “higher intent” form, a WhatsApp conversation instead of a form, or a landing page that explains the offer first. Our guide to [better-quality real estate leads](/blog/real-estate-leads-meta-ads) shows how this works in one of the most competitive categories.',
        ],
      },
      {
        h2: 'Seven ways businesses waste Meta ads budget',
        bullets: [
          '**Boosting posts** instead of running proper campaigns with a clear goal.',
          '**One ad running for months** until people stop noticing it.',
          '**Targeting all of India** when you serve one city or a few localities.',
          '**No follow-up system** — leads called the next day (or never) go cold fast.',
          '**Judging after two days**, or never changing anything at all.',
          '**No tracking**, so nobody knows which ad brought the customers.',
          '**Sending people to a slow or confusing page** — see [15 fixes for websites with visitors but no enquiries](/blog/website-visitors-but-no-enquiries).',
        ],
      },
      {
        h2: 'Meta Ads or Google Ads first?',
        paras: [
          'Meta creates demand among people who were not searching yet; Google catches people who already are. Meta usually brings cheaper leads that need more filtering; Google usually brings fewer, higher-intent enquiries at a higher cost per click. Compare both in [Meta Ads vs Google Ads](/blog/meta-ads-vs-google-ads), and see what search ads cost in our [Google Ads budget guide](/blog/google-ads-cost-india).',
        ],
      },
      {
        h2: 'Want Meta ads that bring real customers?',
        paras: [
          'Orizova Digital runs [Meta Ads](/services/meta-ads) for clinics, real estate, education, local services and brands across India — with lead-quality filters, tracking, creatives (including [AI video ads](/services/ai-ugc-videos)) and plain monthly reports. The ad account stays in your name. [Talk to us](/contact) for a free review of your current ads or a launch plan.',
        ],
      },
    ],
    faqs: [
      ['What is the minimum budget for Facebook ads in India?', 'Meta has very low technical minimums, but a budget that is too small gets too few results to learn from. Work out a budget from the number of leads you want and test for one to two weeks before scaling.'],
      ['Is GST charged on Facebook and Instagram ads?', 'Yes. For businesses billed in India, GST is added to ad spend on Meta invoices. GST-registered businesses should add their GSTIN in billing settings.'],
      ['What is a good cost per lead on Meta?', 'It depends on your industry, city and offer. A better test is cost per qualified lead or cost per customer — compare those, not just the cheapest lead.'],
      ['Should I boost posts or run ads from Ads Manager?', 'Ads Manager. It gives you proper goals, targeting, placements, testing and tracking. Boosting is fine for a quick visibility push, not for lead generation.'],
      ['How soon do Meta ads bring leads?', 'Often within the first few days. Expect one to three weeks before costs settle and you can judge the campaign fairly.'],
    ],
  },

  /* ------------------------------------------------------------------ */
  {
    slug: 'seo-cost-india',
    title: 'SEO Cost in India: What Monthly SEO Packages Should Include (2026)',
    category: 'SEO',
    date: '2026-11-13',
    readMins: 9,
    chips: ['SEO', '9 min read', 'Cost', 'India'],
    excerpt: 'SEO quotes in India range from suspiciously cheap to very expensive. What actually drives the cost, what a monthly SEO package should include, the red flags in cheap offers, and how to judge whether it is working.',
    intro: [
      'Ask five agencies for an SEO quote and you may get five completely different numbers — and five different ideas of what “SEO” even means. One sends a list of “100 backlinks a month”, another a monthly report full of charts, a third talks about content and Google Maps.',
      'This guide explains what you are really paying for, what a sensible monthly SEO package for an Indian business includes, the red flags that usually mean wasted money, and how to measure whether SEO is working — so you can compare quotes properly.',
    ],
    sections: [
      {
        h2: 'Why SEO prices vary so much',
        paras: [
          'SEO is not a product with a fixed price — it is ongoing work, and the amount of work depends on your situation. The main factors:',
        ],
        bullets: [
          '**Competition.** Ranking for “dentist in Indirapuram” is a very different job from ranking for “home loan” across India.',
          '**Local or national.** Local SEO (Google Maps and city searches) usually needs less work than ranking across the country.',
          '**The state of your website.** A slow site with thin pages needs fixing before anything else helps.',
          '**How much content is needed.** Service pages, city pages and helpful articles take real time to write well.',
          '**Who does the work.** Experienced people who write original content cost more than automated tools and templates — and get better results.',
        ],
      },
      {
        h2: 'What a good monthly SEO package should include',
        table: {
          caption: 'The parts of real SEO work',
          head: ['Work', 'What it involves', 'Why it matters'],
          rows: [
            ['Technical SEO', 'Speed, mobile, indexing, errors, structured data', 'Google must be able to read your site'],
            ['Keyword and page plan', 'Which searches to target, with which page', 'Stops pages competing with each other'],
            ['On-page work', 'Titles, headings, internal links, content updates', 'Makes each page clearly relevant'],
            ['New content', 'Service, city and helpful guide pages', 'Gives Google more reasons to rank you'],
            ['Local SEO', 'Google Business Profile, reviews, local listings', 'Brings Google Maps calls'],
            ['Authority building', 'Genuine mentions and links from relevant sites', 'Helps you beat established competitors'],
            ['Reporting', 'Rankings, traffic, calls and enquiries', 'Shows whether it is paying off'],
          ],
          note: 'A package that is only “backlinks” or only “reports” is not SEO.',
        },
      },
      {
        h2: 'Red flags in cheap SEO offers',
        bullets: [
          '**“Guaranteed number 1 ranking.”** Nobody controls Google’s results. Google itself [warns that no one can guarantee a #1 ranking](https://developers.google.com/search/docs/fundamentals/do-i-need-seo).',
          '**Hundreds of backlinks a month.** Bulk links from unrelated or spammy sites can harm your site.',
          '**No access to your accounts.** You should own your website, Search Console, Analytics and Google Business Profile.',
          '**Reports with no enquiries in them.** Rankings for terms nobody searches do not pay the bills.',
          '**AI-spun articles in bulk.** Thin, repetitive content rarely ranks and can drag the whole site down.',
          '**Long lock-in contracts with no clear plan** of what will be done each month.',
        ],
        tip: {
          tone: 'warn',
          title: 'Ask for the plan, not the promise',
          text: 'A trustworthy SEO quote lists what will be done in the first three months and how progress will be measured. Promises without a plan are the biggest red flag.',
        },
      },
      {
        h2: 'Project, monthly or hourly — which pricing model?',
        table: {
          caption: 'Common SEO pricing models in India',
          head: ['Model', 'Best for', 'Watch out for'],
          rows: [
            ['One-time SEO setup', 'New websites; fixing a site before launch', 'Rankings need ongoing work after setup'],
            ['Monthly retainer', 'Most businesses that want steady growth', 'Make sure each month has clear deliverables'],
            ['Local SEO package', 'Clinics, shops, restaurants, local services', 'Must include Google Business Profile and reviews'],
            ['Audit only', 'Businesses with an in-house team', 'An audit only helps if someone acts on it'],
          ],
        },
      },
      {
        h2: 'How long before SEO pays off?',
        paras: [
          'SEO is slower than ads but keeps working when you stop paying for clicks. Most businesses see first signs — pages indexed, rankings for long, specific searches, Google Maps views — within weeks, meaningful enquiries in a few months, and steadier growth after six to twelve months. Our [realistic SEO timeline](/blog/how-long-does-seo-take) explains what happens month by month.',
          'If you need enquiries this month, run [Google Ads](/services/google-ads) alongside SEO and reduce ad spend as organic results grow.',
        ],
      },
      {
        h2: 'How to judge whether your SEO is working',
        steps: [
          { title: 'Check Search Console monthly', text: 'Look at clicks, impressions and the searches your pages appear for. Growing impressions come before growing clicks.' },
          { title: 'Track calls and enquiries from Google', text: 'Count calls, WhatsApp clicks and forms from organic search and Google Maps — not just traffic.' },
          { title: 'Watch the searches that matter', text: 'Five to ten service-plus-location searches that bring customers, not a list of hundreds of keywords.' },
          { title: 'Ask what was done', text: 'Every month you should know which pages were improved or added and why.' },
        ],
      },
      {
        h2: 'Get an honest SEO plan',
        paras: [
          'Orizova Digital does [SEO](/services/seo), [local SEO](/services/local-seo) and [AI search optimisation](/services/ai-search-optimization) for businesses across India — technical fixes, original content, Google Business Profile work and reports that show calls and enquiries, not just rankings. Before you hire anyone, read our [15 questions to ask a digital marketing agency](/blog/how-to-choose-digital-marketing-agency). [Talk to us](/contact) for a free SEO review of your website.',
        ],
      },
    ],
    faqs: [
      ['How much does SEO cost per month in India?', 'It depends on competition, whether you target one city or all of India, the state of your website and how much content is needed. Compare quotes by what work is included each month, not by price alone.'],
      ['Can anyone guarantee a number one ranking on Google?', 'No. Google controls its results and says no one can guarantee a top position. Treat ranking guarantees as a red flag.'],
      ['Is local SEO cheaper than regular SEO?', 'Usually, because it targets searches in one area and focuses on Google Maps, reviews and a few strong pages.'],
      ['Should I do SEO or Google Ads?', 'Ads bring enquiries quickly while you pay; SEO builds results that last. Many businesses run both and shift budget to SEO as it grows.'],
      ['What should I own when I hire an SEO agency?', 'Your website, domain, Google Search Console, Google Analytics and Google Business Profile — all in your own name.'],
    ],
  },

  /* ------------------------------------------------------------------ */
  {
    slug: 'whatsapp-marketing-for-business-india',
    title: 'WhatsApp Marketing for Business in India: App vs API, Costs and Rules (2026)',
    category: 'Marketing',
    date: '2026-11-13',
    readMins: 9,
    chips: ['WhatsApp', '9 min read', 'Leads', 'India'],
    excerpt: 'WhatsApp is where Indian customers already talk. When the free Business app is enough, when you need the WhatsApp Business API, how Meta charges for messages, and how to message customers without getting your number blocked.',
    intro: [
      'For most Indian customers, WhatsApp is the easiest way to talk to a business — easier than a form, an email or even a call. That makes it one of the best channels for enquiries, reminders, offers and repeat sales.',
      'But there is a right and a wrong way to use it. This guide explains the difference between the free WhatsApp Business app and the WhatsApp Business API (Platform), how Meta charges for messages, what you can and cannot send, and how WhatsApp fits with your ads and website.',
    ],
    sections: [
      {
        h2: 'WhatsApp Business app vs WhatsApp Business API',
        table: {
          caption: 'Which WhatsApp option suits your business',
          head: ['', 'WhatsApp Business app', 'WhatsApp Business API (Platform)'],
          rows: [
            ['Cost', 'Free', 'Per-message charges from Meta, plus the provider’s plan'],
            ['Users', 'One phone (plus linked devices)', 'Many team members on one number'],
            ['Bulk messages', 'Broadcast lists — only reach people who saved your number', 'Approved template messages to opted-in contacts'],
            ['Automation', 'Greeting and away messages, quick replies', 'Chatbots, CRM links, automatic reminders'],
            ['Green tick', 'Not available through the app alone', 'Can apply through the official process'],
            ['Best for', 'Small shops and solo professionals', 'Clinics, institutes, brands and teams with many chats'],
          ],
        },
        after: [
          'The API is not an app you download. You use it through a provider (such as WATI, Interakt, AiSensy and others) that gives your team a shared inbox, broadcasts and automation.',
        ],
      },
      {
        h2: 'How WhatsApp API pricing works',
        paras: [
          'Since July 2025, Meta charges the WhatsApp Business Platform **per message delivered** for template messages, at rates that depend on the message category and the customer’s country. You pay Meta’s charges and, separately, your provider’s subscription.',
        ],
        bullets: [
          '**Marketing messages** — offers, launches, reminders to come back — are always charged.',
          '**Utility messages** — order updates, appointment confirmations — are charged at a lower rate.',
          '**Authentication messages** — one-time passwords — have their own rate.',
          '**Replies to customers** inside the 24-hour window after they message you are mostly free, within limits Meta has set during 2026.',
          '**Click-to-WhatsApp ads** open a free messaging window: when someone messages you from a Facebook or Instagram ad and you reply within 24 hours, messages in the next 72 hours are free.',
        ],
        tip: {
          tone: 'tip',
          title: 'Check the current rate card',
          text: 'Meta updates WhatsApp rates at the start of a quarter, and India billing moved to rupees in 2026. Check [Meta’s official WhatsApp pricing page](https://developers.facebook.com/docs/whatsapp/pricing) or your provider for today’s rates, and whether their quotes include GST.',
        },
      },
      {
        h2: 'The rules: what you can send, and to whom',
        bullets: [
          '**Get permission first.** Only message people who have agreed to hear from you on WhatsApp — for example by ticking a box on your form, or messaging you first.',
          '**Use approved templates** for any message that starts a conversation. Meta reviews them; misleading or spammy templates get rejected.',
          '**Make it easy to stop.** Include an option to opt out and respect it.',
          '**Do not buy number lists.** Messaging people who never asked is the quickest way to get blocked, reported and banned.',
          '**Watch your quality rating.** If many people block or report you, Meta lowers your limits or pauses your templates.',
        ],
        tip: {
          tone: 'warn',
          title: 'Bulk “WhatsApp sender” tools',
          text: 'Unofficial tools that blast messages from normal WhatsApp numbers break WhatsApp’s terms. Numbers used this way are often banned — along with every chat on them.',
        },
      },
      {
        h2: 'Five WhatsApp campaigns that work for Indian businesses',
        steps: [
          { title: 'Instant reply to new enquiries', text: 'When a lead comes from your ad or website, send a WhatsApp within minutes with the details they asked for. Speed alone wins many customers.' },
          { title: 'Appointment and booking reminders', text: 'Clinics, salons and coaching institutes reduce no-shows with a reminder a day before and on the day.' },
          { title: 'Follow-up for undecided leads', text: 'A short, useful message a few days later — a price list, a video, an offer — brings back people who went quiet.' },
          { title: 'Offers to past customers', text: 'Festive offers, new arrivals or check-up reminders to people who already bought from you.' },
          { title: 'Reviews after the service', text: 'A friendly request with a direct link to your Google review page builds your [Google Business Profile](/blog/google-business-profile-guide).' },
        ],
      },
      {
        h2: 'Connect WhatsApp to your ads and website',
        paras: [
          'WhatsApp works best as the end of a journey, not on its own. A Meta ad with a “Send message” button opens a chat directly, often with more interested people than an instant form. A website with a WhatsApp button and a pre-filled message (“Hi, I want the price for…”) turns visitors into conversations. And a CRM or shared inbox makes sure no chat is missed.',
          'If you run [Meta Ads](/services/meta-ads), try a WhatsApp-message campaign alongside a lead-form campaign and compare the cost per real customer — not just cost per lead. Our [Meta ads cost guide](/blog/meta-ads-cost-india) explains how to judge that.',
        ],
      },
      {
        h2: 'Need help setting up WhatsApp marketing?',
        paras: [
          'Orizova Digital connects WhatsApp to your [website](/services/website-development), [Meta Ads](/services/meta-ads) and lead process — click-to-WhatsApp campaigns, pre-filled chat buttons, templates that get approved and follow-up messages that bring customers back. [Talk to us on WhatsApp](/contact).',
        ],
      },
    ],
    faqs: [
      ['Is WhatsApp Business API free?', 'No. The free option is the WhatsApp Business app. The API (Business Platform) charges per template message delivered, plus your provider’s plan. Replies inside the 24-hour customer window are mostly free.'],
      ['Can I send bulk WhatsApp messages in India?', 'Yes, through the WhatsApp Business API using approved templates — and only to people who have agreed to receive your messages.'],
      ['Why was my WhatsApp number banned?', 'Usually because of messaging people who did not opt in, many blocks or reports, or using unofficial bulk-sending tools.'],
      ['How do I get the green tick on WhatsApp?', 'Through the official verification process on the WhatsApp Business Platform. It depends on your brand’s public presence and is not guaranteed.'],
      ['Can I use my existing number for the API?', 'Usually yes, but the number has to be moved off the normal WhatsApp or WhatsApp Business app first. Back up important chats before switching.'],
    ],
  },

  /* ------------------------------------------------------------------ */
  {
    slug: 'social-media-marketing-cost-india',
    title: 'Social Media Marketing Cost in India: What Monthly Packages Include (2026)',
    category: 'Marketing',
    date: '2026-11-13',
    readMins: 8,
    chips: ['Social Media', '8 min read', 'Cost', 'India'],
    excerpt: 'Social media management quotes range widely because “posts per month” hides most of the work. What decides the cost, what a package should include, the difference between management and ad budget, and how to judge results.',
    intro: [
      'Most social media quotes look simple: so many posts and reels a month for a fixed fee. But two packages with the same number of posts can be completely different — one with planned content, professional reels and replies to every comment, the other with recycled templates and nothing else.',
      'This guide explains what you are paying for when you hire someone to manage Instagram, Facebook and LinkedIn, how to compare packages, and how to tell whether it is working.',
    ],
    sections: [
      {
        h2: 'What decides the cost of social media management',
        bullets: [
          '**Reels vs static posts.** Reels need scripting, shooting or sourcing footage, and editing — far more work than a designed post.',
          '**Who shoots the video.** Your team on a phone, an agency shoot, or [AI-made videos](/services/ai-video-production) all cost differently.',
          '**Number of platforms.** Instagram only, or Instagram, Facebook, LinkedIn and YouTube each with their own formats.',
          '**Community management.** Replying to comments and messages daily is ongoing work.',
          '**Strategy and reporting.** A monthly plan based on what worked last month costs more than posting on autopilot — and works better.',
          '**Ads.** Running paid campaigns is a separate service with its own budget.',
        ],
      },
      {
        h2: 'Management fee vs ad budget — two different things',
        paras: [
          'A common confusion: the agency’s fee for managing your social media is **not** the money spent on ads. The management fee pays for planning, content, posting and reporting. The ad budget goes to Meta (plus GST) to show your ads to new people. Make sure every quote states clearly which is which.',
          'Organic posting builds trust with people who already follow you or check your profile. Paid ads bring new people. Most growing businesses need both — see [what Facebook and Instagram ads cost](/blog/meta-ads-cost-india).',
        ],
      },
      {
        h2: 'What a good monthly package should include',
        table: {
          caption: 'Parts of a complete social media package',
          head: ['Part', 'What to expect'],
          rows: [
            ['Monthly content plan', 'Topics, formats and dates agreed before the month starts'],
            ['Reels', 'Scripted, edited, captioned, with trending or licensed audio'],
            ['Posts and carousels', 'On-brand designs with useful information, not just greetings'],
            ['Captions and hashtags', 'Written for your audience, with a clear call to action'],
            ['Profile optimisation', 'Bio, highlights, links and contact buttons set up properly'],
            ['Community management', 'Replies to comments and messages within an agreed time'],
            ['Monthly report', 'Reach, engagement, profile visits, enquiries — and what changes next month'],
          ],
        },
      },
      {
        h2: 'Red flags when hiring a social media agency',
        bullets: [
          '**Buying followers or likes** — fake numbers hurt your reach and credibility.',
          '**Only festival greetings and quotes** — they fill the calendar but rarely bring customers.',
          '**No access to your own accounts** — you should own your pages and ad account.',
          '**Reports with only likes** — ask for profile visits, messages and enquiries.',
          '**The same templates as every other client** — your content should look like your business.',
        ],
        tip: {
          tone: 'tip',
          title: 'Ask for three sample reels',
          text: 'Before you sign, ask to see recent reels the team made for similar businesses. Reels decide most of your results on Instagram today.',
        },
      },
      {
        h2: 'How to judge whether it is working',
        steps: [
          { title: 'Give it two to three months', text: 'Social media builds slowly. Judge trends over months, not individual posts.' },
          { title: 'Track enquiries, not only likes', text: 'Count messages, calls and WhatsApp chats that mention Instagram or Facebook.' },
          { title: 'Look at profile visits and reach to non-followers', text: 'These show whether your content is reaching new people.' },
          { title: 'Review what worked', text: 'Each month, do more of the formats that brought enquiries and drop the rest.' },
        ],
        after: [
          'Need content ideas? See [30 Instagram ideas for restaurants and cafes](/blog/instagram-ideas-restaurants-cafes) — most of them work for any local business.',
        ],
      },
      {
        h2: 'Social media that brings enquiries',
        paras: [
          'Orizova Digital manages [social media marketing](/services/social-media-marketing) for businesses across India — content plans, reels from our [video editing](/services/video-editing) team, community management and [Meta Ads](/services/meta-ads) when you want faster growth. Your accounts stay in your name. [Talk to us](/contact) for a free review of your Instagram profile.',
        ],
      },
    ],
    faqs: [
      ['How much does social media management cost in India?', 'It depends on how many reels and posts you need, who shoots the video, how many platforms are covered and whether replies and ads are included. Compare packages by what is included, not only the number of posts.'],
      ['Is the ad budget included in the social media package?', 'Usually not. The management fee covers content and posting; ad spend goes to Meta separately, plus GST. Check every quote for this.'],
      ['How many posts per month does a business need?', 'Consistency matters more than volume. A few strong reels and useful posts every week beat daily low-effort posts.'],
      ['Can social media bring customers without ads?', 'Yes, especially for local businesses with good reels and quick replies — but growth is slower. Ads speed up reach to new people.'],
      ['Should I hire a freelancer or an agency?', 'A good freelancer suits a simple plan. An agency is better when you need strategy, design, video, ads and reporting together.'],
    ],
  },

  /* ------------------------------------------------------------------ */
  {
    slug: 'b2b-lead-generation-manufacturers-india',
    title: 'B2B Lead Generation for Manufacturers in India: Get Dealer and Bulk-Order Enquiries Online',
    category: 'Marketing',
    date: '2026-11-13',
    readMins: 9,
    chips: ['B2B', '9 min read', 'Manufacturers', 'Leads'],
    excerpt: 'Trade fairs and B2B portals are no longer enough. How Indian manufacturers, wholesalers and exporters can get dealer, distributor and bulk-order enquiries from their own website, Google, LinkedIn, Meta and WhatsApp.',
    intro: [
      'Many Indian manufacturers still get most of their business from old contacts, trade fairs and B2B marketplaces. Those still work — but buyers, dealers and procurement teams now search Google, check websites and message on WhatsApp before they ever call. A manufacturer who is hard to find online loses orders to one who is easy to find, even with a better product.',
      'This guide explains how manufacturers, wholesalers and exporters can build a steady flow of B2B enquiries online — without depending only on marketplaces where you compete on price with every other seller.',
    ],
    sections: [
      {
        h2: 'Why B2B marketing is different',
        bullets: [
          '**Fewer, bigger buyers.** One dealer or distributor can be worth more than hundreds of retail customers.',
          '**Longer decisions.** Samples, price negotiations and approvals take weeks or months.',
          '**Several people decide.** Owners, purchase managers and engineers all check different things.',
          '**Trust is everything.** Buyers want proof you can deliver quality, quantity and on time.',
          '**Specifications matter.** Buyers search for exact products, sizes, grades and standards.',
        ],
      },
      {
        h2: 'Your own website: the base of B2B lead generation',
        paras: [
          'A marketplace listing puts you next to competitors. Your own [website](/services/website-development) puts only you in front of the buyer. For manufacturers it should include:',
        ],
        bullets: [
          '**A page for each product range** with specifications, sizes, materials, applications and MOQ.',
          '**Proof of capability** — factory photos and videos, machinery, capacity, quality checks and certifications.',
          '**Industries and clients served** (with permission) and the cities or countries you supply.',
          '**Downloadable catalogue** and a clear “Request a quote” form.',
          '**WhatsApp and call buttons** on every page, with a pre-filled message for quotes.',
          '**Dealer / distributor page** if you are appointing partners.',
        ],
      },
      {
        h2: 'Google: be found when buyers search',
        paras: [
          'B2B buyers search very specifically — “PVC pipe manufacturer in Gujarat”, “automotive sensor supplier Delhi”, “bulk cotton bags manufacturer”. These searches have lower volume than consumer searches but very high value.',
        ],
        steps: [
          { title: 'Product pages for every product and use', text: 'One page per product range, written in the words buyers use, with specifications. This is [SEO](/services/seo) for manufacturers.' },
          { title: 'Google Business Profile for the factory', text: 'Many buyers check Google Maps for a factory or office. Add photos, products and your exact category.' },
          { title: 'Google Ads for high-value searches', text: 'Bid on exact product + “manufacturer”, “supplier”, “wholesale” and “bulk” searches. Exclude retail and “price for one” searches.' },
          { title: 'Track every enquiry', text: 'Calls, WhatsApp and quote requests tracked separately, so you know which products and searches bring orders.' },
        ],
      },
      {
        h2: 'Meta and LinkedIn: reach dealers who are not searching yet',
        paras: [
          '**Meta (Facebook and Instagram) ads** work well for reaching shop owners, dealers and resellers in specific cities — especially with factory videos and a “Send WhatsApp message” button for dealer enquiries. Add a qualifying question (business type, monthly quantity) so you do not get retail buyers.',
          '**LinkedIn** suits larger B2B deals: reaching purchase managers, engineers and owners in specific industries. A company page with regular factory and product posts, plus personal posts from the owner, builds trust before the first meeting.',
        ],
        tip: {
          tone: 'example',
          title: 'Example campaign (illustration only)',
          text: 'An auto-parts maker targeting dealers in Delhi NCR runs a Meta campaign with a 30-second factory video, a “Become a dealer — get the price list on WhatsApp” offer and one question: “What is your business type?”. Retail buyers are filtered out, and every chat gets the catalogue PDF within minutes.',
        },
      },
      {
        h2: 'B2B portals: use them, but do not depend on them',
        table: {
          caption: 'Own website vs B2B marketplaces',
          head: ['', 'Your own website', 'B2B portals (IndiaMART, TradeIndia etc.)'],
          rows: [
            ['Competition on the page', 'Only you', 'Many sellers side by side'],
            ['Lead quality', 'Higher when pages are specific', 'Mixed — many price-shoppers'],
            ['Cost', 'Website + marketing', 'Annual packages and lead credits'],
            ['Brand building', 'Builds your own name', 'Builds the portal’s name'],
            ['Control', 'Full', 'Portal’s rules and ranking'],
          ],
          note: 'Many manufacturers do best with both: portals for volume, their own website and Google for higher-value buyers.',
        },
      },
      {
        h2: 'Follow-up decides who gets the order',
        paras: [
          'In B2B, the supplier who replies first with a clear quote often wins. Reply to every enquiry the same day, send the catalogue and price list on WhatsApp, follow up after samples, and keep in touch with buyers who said “not now”. [WhatsApp marketing](/blog/whatsapp-marketing-for-business-india) done properly makes this much easier.',
        ],
      },
      {
        h2: 'Get more B2B enquiries for your factory',
        paras: [
          'Orizova Digital works with [manufacturers and exporters](/industries/manufacturers-exporters) on product websites, [SEO](/services/seo), [Google Ads](/services/google-ads), [Meta Ads](/services/meta-ads) for dealer leads and factory videos. [Talk to us](/contact) for a free review of how buyers find you today.',
        ],
      },
    ],
    faqs: [
      ['How can a manufacturer get more B2B leads online?', 'Build product pages with specifications and proof of capability, rank them on Google, run search ads for exact product + “manufacturer” searches, reach dealers with Meta and LinkedIn, and reply to every enquiry fast.'],
      ['Are IndiaMART leads enough?', 'They bring volume, but you compete with many sellers on the same page. Your own website and Google bring buyers who see only you.'],
      ['Do Facebook ads work for B2B?', 'Yes, especially for reaching dealers, retailers and resellers in specific cities. Use a qualifying question to filter out retail buyers.'],
      ['Is LinkedIn useful for Indian manufacturers?', 'Yes for larger deals and corporate buyers — purchase managers, engineers and owners in your target industries.'],
      ['What should a manufacturer’s website include?', 'Product pages with specifications and MOQ, factory and quality proof, certifications, industries served, a downloadable catalogue, and quote, call and WhatsApp buttons.'],
    ],
  },
];

export default postsF;
