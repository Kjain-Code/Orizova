// Answer-first summaries ("Quick answer" box) for AEO / GEO.
// Rules: lead with the direct answer, 40–80 words, name the brand and the
// place, facts only (no invented prices, numbers, clients or results).
// Rendered by components/content/QuickAnswer.jsx; also used for /llms.txt.
// Section: blog posts (with takeaways).

const answers = {
  '/blog/meta-ads-cost-india': {
    q: "How much do Facebook and Instagram ads cost in India?",
    a: "Meta ads have no fixed price in India: you set a daily or lifetime budget and an auction decides how far it goes, with GST added on Meta’s invoices. Work out a budget from the customers you want — customers × leads per customer × cost per lead — and test for one to two weeks. Judge cost per qualified lead or per customer, not just the cheapest lead.",
    takeaways: [
      "You set the budget; the auction sets the price.",
      "GST is added to ad spend for India billing.",
      "Budget = customers × leads per customer × cost per lead.",
      "Cheap instant-form leads often cost more per customer.",
      "Fresh creatives and fast follow-up lower costs.",
    ],
  },
  '/blog/seo-cost-india': {
    q: "How much does SEO cost in India?",
    a: "SEO cost in India depends on competition, whether you target one city or the whole country, the state of your website and how much content is needed. A sensible monthly package covers technical fixes, on-page work, new content, local SEO, genuine authority building and reports that show enquiries. Treat ranking guarantees and bulk backlinks as red flags.",
    takeaways: [
      "Price depends on competition, scope and website condition.",
      "Good SEO includes technical, content, local and authority work.",
      "No one can guarantee a #1 ranking on Google.",
      "Own your website, Search Console and Business Profile.",
      "Judge SEO by calls and enquiries, not rankings alone.",
    ],
  },
  '/blog/whatsapp-marketing-for-business-india': {
    q: "How can a business use WhatsApp marketing in India?",
    a: "Small businesses can start with the free WhatsApp Business app; teams that need bulk messages, automation and a shared inbox use the WhatsApp Business API through a provider. Since July 2025 Meta charges per delivered template message by category, while replies inside the 24-hour customer window are mostly free. Message only people who opted in, using approved templates.",
    takeaways: [
      "Free app for small businesses; API for teams and bulk messages.",
      "Marketing templates are charged per message.",
      "Click-to-WhatsApp ads open a 72-hour free window.",
      "Only message opted-in contacts with approved templates.",
      "Unofficial bulk-sender tools get numbers banned.",
    ],
  },
  '/blog/social-media-marketing-cost-india': {
    q: "How much does social media marketing cost in India?",
    a: "Social media management cost in India depends on the number of reels versus posts, who shoots the video, how many platforms are covered, community management and reporting. The management fee is separate from the ad budget, which goes to Meta plus GST. Compare packages by what is included and judge results by profile visits and enquiries, not likes.",
    takeaways: [
      "Reels cost more than static posts — and do more.",
      "Management fee and ad budget are separate.",
      "A package needs a plan, replies and reports.",
      "Avoid bought followers and greeting-only calendars.",
      "Judge by enquiries over two to three months.",
    ],
  },
  '/blog/b2b-lead-generation-manufacturers-india': {
    q: "How can manufacturers in India get B2B leads online?",
    a: "Indian manufacturers get B2B enquiries online by building a website with a page per product range, specifications and proof of capability, ranking those pages on Google, running search ads for exact product + manufacturer searches, reaching dealers with Meta and LinkedIn, and replying to every enquiry the same day with a catalogue on WhatsApp. B2B portals help with volume but should not be the only channel.",
    takeaways: [
      "Product pages with specifications win B2B searches.",
      "Show factory, capacity, quality and certifications.",
      "Use Google for buyers searching, Meta/LinkedIn for dealers.",
      "Filter retail buyers with a qualifying question.",
      "Fast quotes and follow-up win the order.",
    ],
  },
  '/blog/ai-ugc-video-ads-guide': {
    q: 'What are AI UGC video ads and when should brands use them?',
    a: 'AI UGC video ads are creator-style ads — a presenter talking to camera about a product — where the presenter or scenes are made with AI. They are best for testing many hooks, angles and languages quickly and for simple product demos. Real creators and customers remain the right choice for testimonials, results and trust-heavy categories, and realistic AI content should be labelled in India.',
    takeaways: [
      'Use AI UGC to test many hooks and languages quickly.',
      'Script from real product benefits; edit like a real ad with captions.',
      'Never fake testimonials or AI “experts”.',
      'Label realistic AI presenters; use real likenesses only with consent.',
      'Re-make winning messages with real people for trust.',
    ],
  },
  '/blog/ai-video-production-cost-india': {
    q: 'How much do AI videos cost in India?',
    a: 'There is no single price: the cost of AI video production depends on the type of video, how many videos and versions you need, languages, stock presenter vs custom digital twin, and editing depth. Per version, AI is usually much cheaper than a shoot because extra hooks, sizes and languages are fast to make. Very cheap quotes often mean raw, unedited AI clips, so compare finished samples.',
    takeaways: [
      'Scripting and editing are most of the value, not the AI tool.',
      'Versions, languages and custom avatars raise the price.',
      'Monthly batches cost less per video than one-offs.',
      'Ask about revisions, sizes, music and file ownership.',
      'Compare finished samples, not just prices.',
    ],
  },
  '/blog/ai-video-vs-traditional-video-shoot': {
    q: 'Should a brand use AI video or a traditional video shoot?',
    a: 'Use AI video when the job is volume, speed or versions — ad testing, product catalogues, multilingual content, explainers and offers. Use a real shoot when the video depends on viewers believing what they see is real — testimonials, results, places, people and hero brand films. Most brands do best with a hybrid: AI to find winning messages, real shoots for proof.',
    takeaways: [
      'AI wins on speed, versions and cost per variation.',
      'Real shoots win on trust, proof and real places.',
      'Ask: does this video depend on viewers believing it is real?',
      'Test with AI, then shoot the winners and the proof.',
      'Label realistic AI content.',
    ],
  },
  '/blog/how-long-does-seo-take': {
    q: 'How long does SEO take to show results?',
    a: 'Google says SEO usually needs four months to a year to put improvements in place and then see the benefit. In practice, technical fixes and Google Business Profile changes can show movement within weeks, specific city and service searches start ranking in two to three months, and steady enquiries from search typically build between four and twelve months — faster for established sites, slower for new domains and competitive industries.',
    takeaways: [
      'Expect first signs (impressions, indexing) in weeks, enquiries in months.',
      'Local SEO on Google Maps is usually the fastest win for nearby customers.',
      'Specific city and service searches rank before broad, competitive ones.',
      'Track impressions, queries and enquiries — rankings move last.',
      'Nobody can guarantee a #1 ranking; be wary of anyone who does.',
    ],
  },
  '/blog/shopify-vs-woocommerce-vs-custom-website-india': {
    q: 'Which is better for an online store in India: Shopify, WooCommerce or a custom website?',
    a: 'Shopify is quickest to launch with the least technical work, but adds a monthly plan, GST and — because Shopify Payments is not available in India — a transaction fee on online payments through gateways like Razorpay. WooCommerce has no platform fee and full control but needs good hosting and regular maintenance. A custom store costs more to build and suits B2B pricing, complex products or high traffic.',
    takeaways: [
      'Shopify: fastest start, but plan fees, app costs and per-sale fees add up.',
      'WooCommerce: free plugin and full control; budget for hosting and upkeep.',
      'Custom: no platform fee and top speed, for non-standard needs.',
      'Compare running costs over two to three years, not just build price.',
      'All three can rank on Google; speed and unique content matter most.',
    ],
  },
  '/blog/google-ads-cost-india': {
    q: 'How much does Google Ads cost in India?',
    a: 'Google Ads has no fixed price or minimum spend: you set an average daily budget and, for search campaigns, pay when someone clicks. The cost per click depends on industry, city, keyword intent, competition and the quality of your ad and landing page. Work out a budget as enquiries wanted × cost per click ÷ conversion rate, using Keyword Planner for the click cost; GST is added for Indian billing.',
    takeaways: [
      'You control the budget; Google can spend up to 2× on a day but no more than 30.4× the daily average in a month.',
      'Clicks cost more in competitive industries and metro cities.',
      'Budget = enquiries wanted × cost per click ÷ conversion rate.',
      'Negative keywords, landing pages and conversion tracking stop most waste.',
      'Review weekly and change slowly.',
    ],
  },
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
