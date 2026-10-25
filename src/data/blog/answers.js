// Answer-first summaries ("Quick answer" box) for AEO / GEO.
// Rules: lead with the direct answer, 40–80 words, name the brand and the
// place, facts only (no invented prices, numbers, clients or results).
// Rendered by components/content/QuickAnswer.jsx; also used for /llms.txt.
// Section: blog posts (with takeaways).

const answers = {
  '/blog/get-recommended-by-chatgpt-google-ai': {
    q: 'How can my business get recommended by ChatGPT and Google AI Overviews?',
    a: 'There is no special trick. Google says AI Overviews and AI Mode have no extra requirements beyond being indexed and eligible for a snippet, and OpenAI asks sites to allow its OAI-SearchBot crawler for ChatGPT search. Then make each key page answer buyer questions clearly near the top, keep your business details identical everywhere, add matching schema, and build genuine reviews and mentions on trusted sites.',
    takeaways: [
      'AI answers are built on crawled, indexed web pages — strong SEO is the foundation.',
      'Put a quotable, factual answer at the top of every key page.',
      'Use the same business name, address, phone and description everywhere.',
      'Reviews and genuine mentions on other sites make you easier to recommend.',
      'Re-check the same buyer questions in AI tools every month.',
    ],
  },
  '/blog/website-visitors-but-no-enquiries': {
    q: 'Why does my website get visitors but no enquiries?',
    a: 'Usually because the traffic is the wrong audience, the page does not say clearly what you do and where, contacting you takes too much effort, there is too little proof to trust you, or the site is slow or broken on phones. Check traffic sources first, then add a clear headline, one page per service, click-to-call and WhatsApp buttons, real reviews and photos, and fix speed.',
    takeaways: [
      'Check the traffic is buyers in your area before redesigning anything.',
      'Say what you do, for whom and where in the first screen.',
      'Sticky call and WhatsApp buttons on mobile are often the biggest win.',
      'Real reviews, photos and a clear process build trust.',
      'Track calls, WhatsApp clicks and forms, and change one thing at a time.',
    ],
  },
  '/blog/how-to-choose-digital-marketing-agency': {
    q: 'How do I choose a good digital marketing agency in India?',
    a: 'Ask who will own your domain, ad accounts and website (it should be you), how enquiries and lead quality are tracked, what the monthly report contains, whether the quote is fixed and itemised, whether ad spend is paid directly to Google and Meta, and what the exit terms are. Avoid agencies that guarantee #1 rankings or a fixed number of leads.',
    takeaways: [
      'Your domain, ad accounts and Google profile should always be in your name.',
      'Judge agencies on tracked enquiries and lead quality, not clicks.',
      'Get a fixed, itemised quote and keep ad budget separate from the fee.',
      'Guaranteed rankings or lead numbers are a red flag.',
    ],
  },
  '/blog/website-cost-in-delhi-ncr': {
    q: 'How much does a website cost in Delhi NCR?',
    a: 'Website cost in Delhi NCR depends mainly on the number of pages, design approach (template or custom), who writes the content, features like booking or payments, the platform, SEO and speed setup, and ongoing costs like domain, hosting and maintenance. A one-page landing site costs least; multi-page sites and online stores cost more. Always compare itemised quotes.',
    takeaways: [
      'Price is mostly time and responsibility — cheap quotes often leave out content, SEO setup, mobile testing or hosting.',
      'Seven factors decide cost: pages, design, content, features, platform, SEO/speed setup and ongoing costs.',
      'Compare itemised quotes on what is included, not just the total.',
      'Make sure the domain is registered in your own name.',
    ],
  },
  '/blog/google-business-profile-guide': {
    q: 'How do I optimise my Google Business Profile?',
    a: 'To optimise a Google Business Profile: claim and verify it correctly, choose the most accurate primary category, fill every field (hours, services, areas, description), add real photos, build a steady flow of genuine reviews and reply to them, post updates regularly, and make sure your name, address and phone match everywhere else online. The profile is free.',
    takeaways: [
      'Google ranks local results on relevance, distance and prominence.',
      'The primary category is one of the most important choices on the profile.',
      'Genuine reviews, collected steadily, matter more than a one-time burst.',
      'Keep your business name, address and phone identical across the web.',
    ],
  },
  '/blog/meta-ads-vs-google-ads': {
    q: 'Meta Ads or Google Ads — which is better for a local business?',
    a: 'Google Ads catches people who are already searching for your service, so it suits urgent, high-intent needs. Meta Ads (Facebook and Instagram) reaches people before they search, so it suits visual offers, events and creating demand. Many local businesses use both. Judge each by cost per qualified lead or sale, not just cost per click.',
    takeaways: [
      'Google = intent (people searching now). Meta = interruption (people discovering you).',
      'Meta often has a lower cost per lead, but lead quality varies more.',
      'Give each campaign a few weeks and enough budget before deciding.',
      'Running both together often works best once tracking is in place.',
    ],
  },
  '/blog/get-more-patients-clinic-online': {
    q: 'How can a clinic get more patients online?',
    a: 'Start with a complete Google Business Profile, make asking for reviews a routine, build a simple fast website with treatments, timings and booking, share helpful and responsible content, use Google Ads for treatments people actively search for and Meta for awareness — and measure calls and appointments, not clicks. Always stay within medical advertising rules.',
    takeaways: [
      'Google Business Profile fixes and a booking option can help within weeks.',
      'Reviews should be collected routinely and genuinely.',
      'Patient testimonials need clear consent and no misleading claims.',
      'Track calls and appointments as the real result.',
    ],
  },
  '/blog/real-estate-leads-meta-ads': {
    q: 'How do I get better-quality real-estate leads from Facebook and Instagram ads?',
    a: 'Put the filter in the ad itself (location, configuration, price), add two or three qualifying questions to the lead form, respond within minutes, send higher-intent buyers to a landing page, use creatives that show the real project, teach Meta which leads were good, and measure cost per site visit instead of cost per lead.',
    takeaways: [
      'Most poor leads come from forms set for maximum volume and slow follow-up.',
      'Two or three custom questions is usually the right length.',
      'Real-estate ads must follow Meta’s Special Ad Category rules.',
      'Cost per site visit is a better measure than cost per lead.',
    ],
  },
  '/blog/how-to-get-a-business-website-india': {
    q: 'How do I get a business website made in India?',
    a: 'Decide what the website must achieve, prepare your content (services, photos, contact details), choose a developer by checking live work and an itemised quote, then go through planning, design, development, testing and launch. Once content is ready, a landing page takes about a week and a 5–10 page business website about 2–4 weeks. Keep the domain in your own name.',
    takeaways: [
      'Prepare content and photos before development starts — it is the most common delay.',
      'Ask for live examples and an itemised quote before you pay.',
      'A 5–10 page business website usually takes about 2–4 weeks once content is ready.',
      'After launch, set up Google Search Console and Google Business Profile.',
    ],
  },
  '/blog/website-development-cost-chandigarh': {
    q: 'How much does website development cost in Chandigarh?',
    a: 'Website cost in Chandigarh, Mohali and Panchkula depends on the number of pages, design approach, content writing and features. A landing page costs much less than a multi-page business website, and an online store or web app costs more again. Ask about recurring costs — domain, hosting, paid plugins — and compare itemised quotes.',
    takeaways: [
      'Quotes differ because the scope behind them differs.',
      'Domain and hosting are sometimes included only for the first year.',
      'WordPress can be cheaper at the start; paid plugins renew every year.',
      'The cheapest quote often leaves out content, SEO setup or support.',
    ],
  },
  '/blog/choose-web-development-company-chandigarh': {
    q: 'How do I choose a web development company in Chandigarh?',
    a: 'Check their real, live work on your own phone; verify their claims; ask for an itemised quote that says who writes the content and what SEO setup is included; confirm you will own the domain, hosting and code; and ask what support you get after launch. Be wary of anyone who guarantees first-page Google rankings.',
    takeaways: [
      'Open their live websites on your phone, not just screenshots.',
      'Get scope, content writing and SEO setup in writing.',
      'Make sure the domain and hosting are in your name.',
      'Nobody can guarantee first-page rankings — Google decides.',
    ],
  },
  '/blog/instagram-ideas-restaurants-cafes': {
    q: 'What should restaurants and cafes post on Instagram?',
    a: 'Restaurants and cafes do well posting food close-ups and preparation, the place and its vibe, the people behind it, reasons to visit now (offers, events, new dishes) and trust-building answers (timings, location, reviews). A sustainable routine of a few reels a week plus daily stories, shot well on a phone with a location tag, works better than bursts.',
    takeaways: [
      'Mix five themes: food, place, people, reasons to come now, and trust.',
      'Consistency beats bursts — a few reels a week plus stories.',
      'Good light, steady shots and clear audio matter more than the camera.',
      'Always add a location tag and a clear way to book or order.',
    ],
  },
  '/blog/architect-portfolio-website-tips': {
    q: 'What makes a good architect or interior designer portfolio website?',
    a: 'A good architect portfolio website shows a curated set of the best, most relevant projects with clear structure, loads large images quickly, explains the studio’s process and fee approach, filters enquiries by project type and budget, and works together with Instagram and Google Business Profile.',
    takeaways: [
      'Quality over quantity — show your best, most relevant projects.',
      'Optimise images so the site stays fast on mobile.',
      'Explain how you work and share typical budgets to filter enquiries.',
      'Link the website and Instagram so each supports the other.',
    ],
  },
  '/blog/loan-agent-lead-generation': {
    q: 'How can loan agents and DSAs get quality leads online?',
    a: 'Build trust first with a clear website and Google profile, use Google search to reach people already looking for loans, use Meta ads for reach, reply on WhatsApp within the first few minutes, publish helpful content, and follow compliance rules — such as not using bank or NBFC logos without permission. Measure files logged and disbursals, not just leads.',
    takeaways: [
      'Trust comes before ads — a transparent website is strongly recommended.',
      'Home loans, business loans and loan against property have strong search demand.',
      'Fast WhatsApp follow-up decides lead quality.',
      'Never use bank logos in ads without explicit permission.',
    ],
  },
  '/blog/local-seo-checklist': {
    q: 'What is a local SEO checklist for small businesses?',
    a: 'A local SEO checklist covers five areas: a complete and accurate Google Business Profile, a steady flow of genuine reviews with replies, website pages for each service and area with your name, address and phone, consistent citations and local links, and tracking calls, direction requests and website visits from Maps.',
    takeaways: [
      'Google Business Profile is the foundation of local SEO.',
      'Reviews and replies build prominence over time.',
      'Each service and area you serve deserves a useful page.',
      'Check profile details monthly and post every week or two.',
    ],
  },
};

export default answers;
