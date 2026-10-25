// Blog posts (set C). Original writing — no invented statistics, prices,
// clients or results. Claims about Google / OpenAI link to their own docs.

const postsC = [
  /* ------------------------------------------------------------------ */
  {
    slug: 'get-recommended-by-chatgpt-google-ai',
    title: 'How to Get Your Business Recommended by ChatGPT and Google AI Overviews (2026 Guide)',
    category: 'AI Search',
    date: '2026-10-25',
    readMins: 9,
    excerpt: 'People now ask AI tools which clinic, builder or agency to choose. Here is what AI answers actually rely on — and a practical checklist to make your business one they can find, trust and name.',
    intro: [
      'A growing number of buyers no longer scroll through ten blue links. They read the AI-written answer at the top of Google, or they ask ChatGPT, Gemini or Perplexity directly: “best dental clinic for implants in Noida”, “how much does a website cost”, “is this immigration consultant genuine”. Those answers name a handful of businesses and link to a handful of pages.',
      'The good news: there is no secret trick, and small businesses are not locked out. The businesses that get mentioned are usually the ones that are easiest to understand, most consistent and best referenced. This guide explains how that works and gives you a checklist you can start on today.',
    ],
    sections: [
      {
        h2: 'SEO, AEO and GEO — what the terms mean',
        bullets: [
          '**SEO (search engine optimization)** — helping your pages rank in normal search results.',
          '**AEO (answer engine optimization)** — writing and structuring content so it can be used as a direct answer to a question.',
          '**GEO (generative engine optimization)** — improving the chance your business is mentioned or cited inside AI-generated answers.',
        ],
        paras: [
          'In practice the three overlap heavily. AI tools read the same web that search engines crawl, so a site that is weak at SEO is rarely strong in AI answers. Think of AEO and GEO as SEO with extra attention on clarity, consistency and reputation.',
        ],
      },
      {
        h2: 'What Google and OpenAI actually say',
        paras: [
          'Google’s own guide, [AI features and your website](https://developers.google.com/search/docs/appearance/ai-features), says there are no additional requirements to appear in AI Overviews or AI Mode: a page must be indexed and eligible to show with a snippet. It recommends the usual fundamentals — allow crawling, link pages internally, keep important content in text, offer a good page experience, and make sure structured data matches what is visible on the page. It also says you do not need special AI files or markup.',
          'For ChatGPT search, OpenAI explains in its [crawler documentation](https://developers.openai.com/api/docs/bots) that OAI-SearchBot is used to surface websites in ChatGPT’s search features, and that sites which want to appear should allow it in robots.txt.',
          'So the foundation is simple: be crawlable, be clear, be consistent, and be talked about.',
        ],
      },
      {
        h2: 'Step 1: Make sure AI and search crawlers can read your site',
        bullets: [
          'Check robots.txt is not blocking Googlebot, Bingbot or OAI-SearchBot (unless you deliberately want to)',
          'Confirm your key pages are indexed in Google Search Console',
          'Make sure important text is in the HTML — not only inside images, PDFs or content that appears after clicks',
          'Fix slow pages and broken links; a page that fails to load is a page that is never read',
          'Submit an XML sitemap and keep it updated',
        ],
      },
      {
        h2: 'Step 2: Put a clear answer at the top of every key page',
        paras: [
          'AI answers love pages that say plainly what something is, who it is for, where, how long it takes and what affects the cost. Many business websites bury this under slogans like “Excellence in every smile”.',
          'For each main service, write a two-to-four sentence answer near the top that someone could quote word for word. Then expand below with details, process, FAQs and proof.',
        ],
        bullets: [
          'Use the question as a heading: “How long does dental implant treatment take?”',
          'Answer in the first sentence, then explain',
          'Name your business and your city in the answer naturally',
          'Avoid vague claims (“best in class”) — specific facts are easier to trust and quote',
        ],
      },
      {
        h2: 'Step 3: Be the same business everywhere',
        paras: [
          'Before an AI tool recommends you, it has to be confident that the clinic on Google Maps, the page on your website and the listing on a directory are the same business. Inconsistent names, old phone numbers and different addresses create doubt.',
        ],
        bullets: [
          'Use one exact business name across website, Google Business Profile, social profiles and directories',
          'Keep the same address and phone number everywhere — update old listings',
          'Write one short, factual description of what you do and reuse it',
          'Add Organization or LocalBusiness schema to your website with the same details',
          'Link your website to your official social profiles and back again',
        ],
      },
      {
        h2: 'Step 4: Build reviews and genuine mentions',
        paras: [
          'AI answers lean heavily on what other sources say about you. A business with recent, detailed reviews and mentions on relevant websites is easier to recommend than one that only praises itself.',
        ],
        bullets: [
          'Ask every happy customer for a Google review, and reply to every review',
          'Get listed on the directories and associations your buyers actually use',
          'Earn mentions through local news, partners, suppliers, events and industry lists',
          'Publish useful guides others want to link to',
          'Never buy fake reviews or pay for fake “top 10” lists — they can backfire badly',
        ],
      },
      {
        h2: 'Step 5: Answer the questions buyers ask before they choose',
        paras: [
          'Make a list of the questions customers ask you on calls and WhatsApp. Each one is a prompt someone is also typing into an AI tool. Create pages or FAQ sections that answer them honestly: costs and what affects them, timelines, comparisons, risks, eligibility, what to check before hiring.',
          'Comparison and “how to choose” pages are especially useful, because AI answers are often built to help people decide.',
        ],
      },
      {
        h2: 'Step 6: Check your AI visibility every month',
        bullets: [
          'Write 10–20 questions a real customer would ask, by service and city',
          'Ask them in ChatGPT, Gemini, Perplexity and Google, and note who is named and which pages are linked',
          'Look at which competitors appear and what their pages do better',
          'Repeat the same questions monthly so you can see changes',
          'Watch Search Console — Google includes AI Overviews and AI Mode traffic in its Performance report',
        ],
      },
      {
        h2: 'Common myths',
        bullets: [
          '**“Add an llms.txt file and you will appear in ChatGPT.”** It is harmless and some tools read it, but Google says no special AI files are needed, and it is not a ranking switch.',
          '**“AI search replaces SEO.”** AI answers are built from crawled, indexed web pages. Strong SEO is the foundation.',
          '**“Someone can guarantee you a ChatGPT mention.”** Nobody controls these answers, and they vary by question and over time.',
        ],
      },
      {
        h2: 'Need help?',
        paras: [
          'Orizova Digital offers [AI search optimization](/services/ai-search-optimization) alongside [SEO](/services/seo) and [local SEO](/services/local-seo) for businesses across India. We start with a visibility check — the questions your buyers ask, and who AI tools recommend today — and then fix the gaps. [Talk to us](/contact) for a free consultation.',
        ],
      },
    ],
    faqs: [
      ['Can a small business appear in AI Overviews?', 'Yes. Google says there are no extra requirements beyond being indexed and eligible for a snippet. Clear, helpful, well-referenced pages give a small business a fair chance, especially for local and specific questions.'],
      ['Does ChatGPT use Google results?', 'ChatGPT search uses its own crawler, OAI-SearchBot, and other sources. Allowing that crawler and having strong, clear pages both help.'],
      ['How long does it take to show up in AI answers?', 'Fixes can be picked up once pages are re-crawled, but becoming a trusted, recommended business usually builds over months — similar to SEO.'],
      ['Should I block AI crawlers?', 'Only if you do not want your content used by those tools. Blocking search crawlers such as OAI-SearchBot can keep you out of their search answers.'],
    ],
  },

  /* ------------------------------------------------------------------ */
  {
    slug: 'website-visitors-but-no-enquiries',
    title: 'Website Gets Visitors but No Enquiries? 15 Fixes That Actually Work',
    category: 'Websites',
    date: '2026-10-24',
    readMins: 8,
    excerpt: 'Traffic without calls usually means the page is unclear, slow, hard to trust or hard to act on. Here are 15 practical fixes, in the order we check them.',
    intro: [
      'It is one of the most frustrating situations for a business owner: Google Analytics shows people visiting, maybe you are even paying for ads, but the phone stays quiet and WhatsApp has no new chats.',
      'The cause is rarely one big thing. It is usually a handful of small barriers that each lose a few visitors. Below are the 15 fixes we check first when a business tells us “people come, but nobody contacts us”.',
    ],
    sections: [
      {
        h2: 'First, check that the traffic is the right traffic',
        bullets: [
          '**1. Look at where visitors come from.** In Google Analytics, check which pages and channels bring traffic. Blog visitors from another country will not book your clinic in Noida.',
          '**2. Check the search terms.** In Search Console, see which queries bring clicks. If they are mostly informational (“what is…”), the traffic may never have been buyers.',
          '**3. Check ad targeting.** Broad ad audiences and placements can send many low-intent clicks. Tighter locations and intent-based keywords usually bring fewer but better visitors.',
        ],
      },
      {
        h2: 'Make the page instantly clear',
        bullets: [
          '**4. Say what you do, for whom and where — in the first screen.** “Dental implants and smile makeovers in Indirapuram” beats “Your smile, our passion”.',
          '**5. One page per service.** A single “Services” page listing everything makes it hard for visitors (and Google) to find the exact thing they searched for.',
          '**6. Remove clutter.** Sliders, auto-playing videos and long welcome paragraphs push the important information below the fold, especially on phones.',
        ],
      },
      {
        h2: 'Make it easy to contact you',
        bullets: [
          '**7. Click-to-call and WhatsApp on every page.** A sticky button on mobile is often the single biggest improvement.',
          '**8. Shorter forms.** Ask only for what you need to follow up — usually name, phone and requirement.',
          '**9. Prefill the WhatsApp message.** A ready message like “Hi, I want to know about…” removes the awkward first step.',
          '**10. Respond fast.** Many enquiries are lost not on the website but in the hours after. Fast replies convert better.',
        ],
      },
      {
        h2: 'Give visitors reasons to trust you',
        bullets: [
          '**11. Show real proof.** Genuine Google reviews, photos of your actual work, team and premises, and certifications where relevant.',
          '**12. Explain your process and pricing factors.** You do not need to publish exact prices, but saying what affects the cost and what happens after someone contacts you reduces fear.',
          '**13. Keep details consistent.** The same name, address and phone on your website and Google profile reassures visitors that you are real.',
        ],
      },
      {
        h2: 'Fix speed and mobile problems',
        bullets: [
          '**14. Test on a real phone over mobile data.** Heavy images, pop-ups and slow hosting quietly lose visitors. Google’s guidance on [Core Web Vitals](https://web.dev/articles/vitals) explains the metrics that matter.',
          '**15. Check every button and form.** Broken forms, wrong phone numbers and WhatsApp links to old numbers are more common than you would think.',
        ],
      },
      {
        h2: 'Then measure, change one thing, and measure again',
        paras: [
          'Set up tracking for calls, WhatsApp clicks and form submissions so you know which pages and channels produce enquiries. Change one thing at a time — a clearer headline, a sticky WhatsApp button, a shorter form — and compare a few weeks before and after.',
          'If you would like a second pair of eyes, Orizova Digital builds [websites designed to bring enquiries](/services/website-development) and runs [Google Ads](/services/google-ads) and [Meta Ads](/services/meta-ads) tracked to real leads. [Ask us for a free review](/contact) of your current site.',
        ],
      },
    ],
    faqs: [
      ['What is a good conversion rate for a business website?', 'It varies widely by industry, traffic source and offer, so compare against your own past numbers rather than a generic benchmark. Track enquiries per page and improve from there.'],
      ['Should I redesign my whole website?', 'Not always. Often clearer service pages, faster loading and better contact options fix most of the problem. A redesign makes sense when the site is slow, hard to edit or not mobile-friendly.'],
      ['Do pop-ups help get more leads?', 'Aggressive pop-ups on mobile usually annoy visitors and can hurt the experience. A visible WhatsApp or call button tends to work better for local businesses.'],
    ],
  },

  /* ------------------------------------------------------------------ */
  {
    slug: 'how-to-choose-digital-marketing-agency',
    title: 'How to Choose a Digital Marketing Agency in India: 15 Questions to Ask First',
    category: 'Marketing',
    date: '2026-10-23',
    readMins: 8,
    excerpt: 'Before you sign with any agency, ask these 15 questions about ownership, reporting, pricing, lead quality and promises. The answers tell you more than any sales deck.',
    intro: [
      'Choosing a digital marketing agency is hard because almost every agency says the same things: results-driven, data-backed, customer-first. The difference shows up only months later — in who owns your accounts, how honestly results are reported and whether the leads were ever real.',
      'These 15 questions help you see that difference before you pay. They apply whether you are a clinic, builder, coaching institute, manufacturer or D2C brand, and whether the agency is in your city or works remotely.',
    ],
    sections: [
      {
        h2: 'Ownership and access',
        bullets: [
          '**1. Will my domain be registered in my name?** It should be — with your email, so you can never be locked out.',
          '**2. Who owns the ad accounts, Google Business Profile and Analytics?** You should. Agencies should work inside your accounts with partner or manager access.',
          '**3. Will I get the website files and admin access?** Ask what is handed over at the end and what happens if you part ways.',
        ],
      },
      {
        h2: 'Strategy and fit',
        bullets: [
          '**4. What would you do first for my business, and why?** A good agency asks about your customers, margins and capacity before suggesting channels.',
          '**5. Have you worked with businesses like mine?** Ask to see live examples — websites you can open, ads you can see in the ad library.',
          '**6. What will you not do?** Honest agencies are clear about limits: no guaranteed rankings, no fake reviews, no bought followers.',
        ],
      },
      {
        h2: 'Leads and reporting',
        bullets: [
          '**7. How do you track enquiries?** Calls, WhatsApp clicks and forms should be tracked, not just clicks and impressions.',
          '**8. How do you judge lead quality?** Cheap leads are easy; leads that turn into customers are the goal. Ask how they will review quality with your team.',
          '**9. What does the monthly report contain?** Look for work done, results by channel, cost per enquiry and next steps — in plain language.',
          '**10. Who will I talk to, and how quickly do they respond?** One named point of contact saves a lot of frustration.',
        ],
      },
      {
        h2: 'Pricing and contracts',
        bullets: [
          '**11. Is the quote fixed and itemised?** You should know exactly what is included — and what costs extra.',
          '**12. Is the ad budget separate from your fee?** Ideally you pay Google and Meta directly, so you can see every rupee spent.',
          '**13. What is the minimum commitment and notice period?** Know how to exit before you start.',
        ],
      },
      {
        h2: 'Red flags',
        bullets: [
          '**14. Guarantees of #1 rankings or a fixed number of leads.** Google states that no one can guarantee a #1 ranking ([Google’s advice on hiring an SEO](https://developers.google.com/search/docs/fundamentals/do-i-need-an-seo)).',
          '**15. Vague answers about ownership or reporting.** If an agency avoids these questions now, it will not get easier later.',
        ],
        paras: [
          'Other warning signs: buying followers or reviews, keyword-stuffed pages copied for every city, and reports full of impressions with no enquiries.',
        ],
      },
      {
        h2: 'Local agency or remote agency?',
        paras: [
          'For websites, SEO and ads, most work happens online anyway — on calls, WhatsApp and shared dashboards. A remote agency can serve you as well as a local one if communication is clear. A local partner helps when you need regular on-site shoots or in-person meetings.',
        ],
      },
      {
        h2: 'How we answer these questions',
        paras: [
          'At Orizova Digital, domains and accounts stay in your name, quotes are fixed and written, enquiries are tracked from day one, and we do not promise guaranteed rankings or use fake reviews. You can see our [live work](/portfolio), read [how we work](/about), or [book a free consultation](/contact) and ask us all 15 questions.',
        ],
      },
    ],
    faqs: [
      ['How much should I pay a digital marketing agency?', 'It depends on the services, number of channels and locations, and how much content is needed. Compare itemised quotes, and keep your ad budget separate from the agency fee.'],
      ['Is it better to hire one agency for everything?', 'One team for website, SEO and ads avoids finger-pointing and keeps messaging consistent. Specialists can make sense for very large budgets in one channel.'],
      ['How soon should I see results?', 'Ads can bring enquiries within days of launch; SEO and AI search visibility build over months. A good agency gives you a realistic timeline for each.'],
    ],
  },
];

export default postsC;
