// Social media management pages (24 Nov 2026):
//   /services/social-media-marketing      (pillar — "social media management")
//   /services/instagram-management         /services/facebook-page-management
//   /services/linkedin-management
// Same rules as servicePages.js: original writing, no invented numbers,
// clients or results. Prices come only from data/services/socialPricing.js.
// Merged into servicePages (overrides the older social-media-marketing entry).

const CREATIVE_LINKS = [
  { to: '/creative-work', label: 'See our reels & ad videos' },
  { to: '/case-studies', label: 'Real results with screenshots' },
];

const NEVER = {
  type: 'prose',
  tag: 'Straight talk',
  h2: 'What we will never do on your account',
  bullets: [
    'Buy followers, likes or comments — they ruin reach and trust, and Meta removes fake engagement',
    'Use engagement pods, follow–unfollow tricks or automation that breaks platform rules',
    'Post anything without your approval, or make claims about your business that are not true',
    'Hold your account hostage — the page, logins and content always stay yours',
  ],
};

const socialPages = {
  /* ------------------------------------------------------------------ */
  'social-media-marketing': {
    banner: 'Done-for-you social media management for Instagram, Facebook and LinkedIn — reels, posts, stories, captions, replies and a monthly report, from ₹6,000/month. You approve, we post every week.',
    intro: {
      h2: 'You built the page. We keep it posting, growing and bringing enquiries.',
      paras: [
        'Almost every business now has an Instagram and Facebook page — and most of them stop posting after a few weeks. There is no time to plan, shoot, design, write captions and reply to comments while running the business. An inactive page quietly loses customers, because people check your Instagram before they call, visit or buy.',
        'Our **social media management** service takes that whole job off your plate. Each month we plan your content calendar, script and edit reels, design posts and carousels, write captions and hashtags, post on schedule, reply to comments and messages, and send you a clear report. You only approve the plan and share a few clips from your phone when needed — or we create the visuals ourselves, including [AI videos](/services/ai-video-production).',
      ],
    },
    blocks: [
      {
        type: 'pricing',
        tag: 'Plans & pricing',
        h2: 'Social media management packages',
        intro: 'Clear monthly plans. Every plan includes planning, design, captions, posting and a monthly report.',
      },
      {
        type: 'cards',
        tag: 'Platforms',
        h2: 'Which platforms do we manage?',
        items: [
          { title: 'Instagram management', desc: 'Reels-first content, stories, highlights, bio and comments — the page most customers check first.', to: '/services/instagram-management' },
          { title: 'Facebook page management', desc: 'Posts, reels, reviews, local groups and page messages for audiences that still live on Facebook.', to: '/services/facebook-page-management' },
          { title: 'LinkedIn management', desc: 'Company pages and founder profiles for B2B firms, consultants, CAs and professionals.', to: '/services/linkedin-management' },
          { title: 'YouTube Shorts', desc: 'Your best reels re-cut for Shorts — more reach from the same content, and it helps Google search.' },
        ],
      },
      {
        type: 'prose',
        tag: 'What you get',
        h2: 'What our social media managers do every month',
        bullets: [
          '**Content calendar** — a month of ideas built around your offers, festivals, customer questions and what works in your industry, sent for approval before anything is made',
          '**Reels** — hooks and scripts written for you, then edited with captions, music and branding (from your clips, our footage or AI)',
          '**Posts and carousels** — designed in your brand colours and fonts, so the grid looks consistent',
          '**Captions, hashtags and location tags** — written for discovery in your city, not copied from a list',
          '**Stories and highlights** — offers, behind-the-scenes, reviews and FAQs, so new visitors understand you in seconds',
          '**Profile optimisation** — bio, link, contact buttons, highlights covers and pinned posts',
          '**Community management** — replying to comments and DMs, and passing price and booking enquiries to your team',
          '**Monthly report** — reach, followers, profile visits, best-performing posts and what we will change next month',
        ],
      },
      {
        type: 'process',
        h2: 'How social media management works with us',
        steps: [
          { title: 'Free page audit', desc: 'We review your current pages and competitors and suggest the right plan.' },
          { title: 'Brand brief', desc: 'Your offers, customers, tone, colours, do’s and don’ts — one short call.' },
          { title: 'Monthly calendar', desc: 'You approve the month’s plan on WhatsApp before we design anything.' },
          { title: 'Create & post', desc: 'Reels, posts and stories go live on schedule; we reply to comments and DMs.' },
          { title: 'Report & improve', desc: 'Monthly report, plus more of what worked and less of what did not.' },
        ],
      },
      {
        type: 'videos',
        all: true,
        tag: 'Our work',
        h2: 'Reels and videos we have made',
        intro: 'A few reels, ad videos and AI videos made for real businesses — tap any one to watch. More in our [creative work gallery](/creative-work).',
      },
      {
        type: 'cards',
        tag: 'Who it is for',
        h2: 'Social media management for your industry',
        items: [
          { title: 'Restaurants & cafes', desc: 'Dish reels, offers, events and reviews that bring people in this weekend.', to: '/industries/restaurants-cafes' },
          { title: 'Clinics & doctors', desc: 'Patient-education reels and doctor introductions — within medical advertising rules.', to: '/industries/clinics' },
          { title: 'Real estate', desc: 'Project walkthroughs, location videos and site-visit stories for builders and brokers.', to: '/industries/real-estate' },
          { title: 'Salons & beauty', desc: 'Before–after reels, offers and booking reminders.', to: '/industries/salons-beauty' },
          { title: 'Coaches, consultants & CAs', desc: 'Founder content and LinkedIn posts that build trust before the first call.', to: '/industries/professional-services' },
          { title: 'Retail, fashion & D2C', desc: 'Product reels, new arrivals and festive campaigns that sell.', to: '/industries/retail-showrooms' },
        ],
      },
      {
        type: 'prose',
        tag: 'Organic + ads',
        h2: 'Posting builds trust. Ads bring new people.',
        paras: [
          'Regular posting makes your page credible for everyone who finds you — from Google, a friend’s recommendation or an ad. When you need enquiries quickly, we promote the reels and posts that already perform well through [Meta Ads](/services/meta-ads), with click-to-WhatsApp or lead-form campaigns. Ads are optional and billed separately; the ad budget is paid to Meta directly.',
        ],
      },
      NEVER,
      {
        type: 'links',
        h2: 'Social media management in your city',
        links: [
          { to: '/locations/delhi/social-media-marketing', label: 'Delhi' },
          { to: '/locations/noida/social-media-marketing', label: 'Noida' },
          { to: '/locations/gurugram/social-media-marketing', label: 'Gurugram' },
          { to: '/locations/ghaziabad/social-media-marketing', label: 'Ghaziabad' },
          { to: '/locations/lucknow/social-media-marketing', label: 'Lucknow' },
          { to: '/locations/jaipur/social-media-marketing', label: 'Jaipur' },
          { to: '/locations/chandigarh/social-media-marketing', label: 'Chandigarh' },
          { to: '/locations/hyderabad/social-media-marketing', label: 'Hyderabad' },
          { to: '/locations/bengaluru/social-media-marketing', label: 'Bengaluru' },
          { to: '/locations/mumbai/social-media-marketing', label: 'Mumbai' },
          { to: '/locations', label: 'All cities' },
          { to: '/blog/social-media-marketing-cost-india', label: 'Guide: social media management cost in India' },
          { to: '/blog/what-does-a-social-media-manager-do', label: 'Guide: what a social media manager does' },
          ...CREATIVE_LINKS,
        ],
      },
      {
        type: 'faq',
        faqs: [
          ['How much does social media management cost?', 'Our plans start at ₹6,000/month (Brand Presence: 4 reels, 4 posts, 8 stories), ₹10,000/month (Brand Accelerator: 8 reels, 8 posts, 12–16 stories, community management) and ₹14,000/month (Brand Domination: 12 reels, 12 posts, 20–24 stories, advanced strategy). Paid ads are separate.'],
          ['Will you post on my Instagram and Facebook for me?', 'Yes. That is the core of the service — we plan, create and post on a fixed schedule after you approve the monthly calendar. You do not need to log in or design anything.'],
          ['Do I need to send you photos and videos?', 'It helps to send a few phone clips of your shop, team or product each month — we tell you exactly what to shoot. We can also create content from your existing photos, stock-free graphics and AI videos, and arrange an on-location shoot as an extra.'],
          ['Will you reply to comments and DMs?', 'Yes, in the Brand Accelerator and Brand Domination plans. We reply to general comments and questions and pass price, booking and order enquiries to your team so no customer is missed.'],
          ['Can you manage LinkedIn too?', 'Yes. Plans include Instagram and Facebook; LinkedIn company pages and founder profiles can be added — see [LinkedIn management](/services/linkedin-management) — and we quote it with your plan.'],
          ['How soon will I see results?', 'Your page looks active and professional from the first week. Followers and reach usually build over two to three months of consistent posting. For faster enquiries we recommend adding Meta Ads to promote your best content.'],
          ['How long before I can judge the results?', 'Plans are billed monthly. We suggest giving it about three months of consistent posting before judging results fairly.'],
          ['Will you buy followers?', 'Never. Bought followers and likes damage your reach and credibility. We grow real followers who can become customers.'],
          ['Who owns the account and content?', 'You. We work with access you give us (Meta Business Suite roles, not your password where possible) and you keep every post, design and video.'],
          ['Do you work outside Delhi NCR?', 'Yes. Social media management is fully remote — we work with businesses across India and abroad on WhatsApp, calls and shared folders.'],
        ],
      },
    ],
  },

  /* ------------------------------------------------------------------ */
  'instagram-management': {
    banner: 'Instagram account management for businesses — reels, posts, stories, highlights, captions, hashtags and replies, handled every week by our team. Plans from ₹6,000/month.',
    intro: {
      h2: 'Your Instagram is your shop window. We keep it full.',
      paras: [
        'Before someone books a table, a facial, a site visit or a consultation, they open your Instagram. If the last post is from two months ago, or the grid looks messy, they move on to the next business. **Instagram management** means someone is responsible for keeping that window full, fresh and inviting — every single week.',
        'We plan and create reels that hook viewers in the first two seconds, design posts and carousels in your brand style, run daily stories, keep your highlights and bio sharp, and reply to comments and DMs. Every month you get a calendar to approve and a report that shows what grew and what we will improve next.',
      ],
    },
    blocks: [
      {
        type: 'prose',
        tag: 'What we handle',
        h2: 'Our Instagram management service includes',
        bullets: [
          '**Reels strategy** — formats that suit your business: tours, before–after, how-to, behind-the-scenes, customer questions and trends that fit your brand',
          '**Hooks and scripts** — the first line on screen and the voice-over written for you',
          '**Editing** — captions, music, cuts and branding; vertical 9:16 for Reels, re-used for Stories and YouTube Shorts',
          '**Posts and carousels** — offers, menus, price lists, tips and testimonials designed to be saved and shared',
          '**Stories and highlights** — daily stories, polls and question boxes; highlight covers for Services, Prices, Reviews, Location',
          '**Bio and profile** — keyword-rich name field, clear bio, link, contact and WhatsApp buttons',
          '**Captions, hashtags and location tags** — for local discovery in your city and area',
          '**Comments and DMs** — quick replies, and enquiries passed to your team',
        ],
      },
      { type: 'pricing', tag: 'Pricing', h2: 'Instagram management packages', intro: 'Every plan covers Instagram and Facebook together — the same content is adapted for both.', context: 'Instagram management' },
      {
        type: 'cards',
        tag: 'Growing the right way',
        h2: 'How we grow an Instagram page',
        items: [
          { title: 'Reels for reach', desc: 'Reels are how new people discover you. We test hooks and formats and repeat what gets watched and shared.' },
          { title: 'Carousels for saves', desc: 'Useful tips, price guides and checklists that people save and come back to — a strong signal for reach.' },
          { title: 'Stories for trust', desc: 'Everyday stories keep existing followers close and turn them into repeat customers.' },
          { title: 'Local discovery', desc: 'Location tags, city keywords in the name field and collaborations with nearby brands.' },
          { title: 'DMs to enquiries', desc: 'Quick replies and a WhatsApp handover so interest turns into bookings.' },
          { title: 'Ads when you need speed', desc: 'Boost your best reels or run click-to-WhatsApp ads through [Meta Ads](/services/meta-ads).', to: '/services/meta-ads' },
        ],
      },
      { type: 'videos', all: true, tag: 'Our reels', h2: 'Reels we have edited', intro: 'Tap any reel to watch it with sound. More in the [creative work gallery](/creative-work).' },
      NEVER,
      {
        type: 'links',
        h2: 'Related',
        links: [
          { to: '/services/social-media-marketing', label: 'Social media management (all platforms)' },
          { to: '/services/facebook-page-management', label: 'Facebook page management' },
          { to: '/services/linkedin-management', label: 'LinkedIn management' },
          { to: '/services/video-editing', label: 'Reel & video editing' },
          { to: '/blog/instagram-ideas-restaurants-cafes', label: 'Instagram ideas for restaurants & cafes' },
          { to: '/blog/what-does-a-social-media-manager-do', label: 'What a social media manager does' },
        ],
      },
      {
        type: 'faq',
        faqs: [
          ['How much does Instagram management cost?', 'Plans start at ₹6,000/month for 4 reels, 4 posts and 8 stories, with Brand Accelerator at ₹10,000/month and Brand Domination at ₹14,000/month. Each plan covers Instagram and Facebook together.'],
          ['How many reels should a business post?', 'One to three reels a week, posted consistently, works well for most local businesses. Our plans include 4, 8 or 12 reels a month.'],
          ['Can you grow my followers?', 'Yes — with real people, through reels, local hashtags, collaborations and optional ads. We never buy followers, and we focus on followers who can become customers, not just a bigger number.'],
          ['Do I have to give you my password?', 'Not if your Instagram is linked to a Facebook page — we use Meta Business Suite access. Otherwise we agree a secure method and you can change the password any time.'],
          ['Can you manage a personal brand Instagram?', 'Yes — for doctors, coaches, consultants, chefs and creators, with founder-led reels and scripts written in your voice.'],
          ['Do you make reels in Hindi?', 'Yes. Hindi, English or Hinglish — whatever your customers respond to.'],
        ],
      },
    ],
  },

  /* ------------------------------------------------------------------ */
  'facebook-page-management': {
    banner: 'Facebook page management for local businesses — regular posts and reels, reviews, page messages, events and local reach, handled by our team alongside Instagram. From ₹6,000/month.',
    intro: {
      h2: 'Facebook still sends real customers — if the page looks alive',
      paras: [
        'For many customers aged 30 and above, families, and smaller cities, Facebook is still where they look up a business, read reviews, ask a question on Messenger or see what friends recommend. A Facebook page with old posts, unanswered messages and no reviews loses those customers to a competitor whose page looks active.',
        'Our **Facebook page management** keeps your page posting every week, answers messages and comments, collects and responds to reviews, and makes sure your timings, location, phone and WhatsApp details are always correct. It runs together with your Instagram, so one plan covers both.',
      ],
    },
    blocks: [
      {
        type: 'prose',
        tag: 'What is included',
        h2: 'Our Facebook page management covers',
        bullets: [
          '**Page setup and clean-up** — category, about section, services, hours, location, WhatsApp button and cover in your branding',
          '**Weekly posts and reels** — the same monthly calendar as Instagram, adapted for Facebook’s audience',
          '**Messenger and comment replies** — quick answers and enquiries passed to your team',
          '**Reviews and recommendations** — asking happy customers, replying to every review politely',
          '**Events and offers** — festive offers, launches, workshops and open days',
          '**Local community** — sharing to relevant local groups where it is allowed and useful',
          '**Monthly report** — reach, page visits, messages and best posts',
        ],
      },
      { type: 'pricing', tag: 'Pricing', h2: 'Facebook + Instagram management plans', intro: 'Facebook is included with Instagram in every plan.', context: 'Facebook page management' },
      {
        type: 'cards',
        tag: 'Works best for',
        h2: 'Businesses that do well on Facebook',
        items: [
          { title: 'Clinics & hospitals', desc: 'Health tips, doctor introductions, camps and reviews for family decision-makers.', to: '/industries/clinics' },
          { title: 'Schools, colleges & coaching', desc: 'Admissions, results, events and parents’ questions.', to: '/industries/education' },
          { title: 'Real estate & builders', desc: 'Project updates, site-visit events and local reach.', to: '/industries/real-estate' },
          { title: 'Shops & showrooms', desc: 'New stock, festive offers and wedding-season collections.', to: '/industries/retail-showrooms' },
          { title: 'Restaurants & caterers', desc: 'Menus, party orders, events and reviews.', to: '/industries/restaurants-cafes' },
          { title: 'Home services', desc: 'Before–after work, service areas and quick Messenger replies.', to: '/industries/home-services' },
        ],
      },
      NEVER,
      {
        type: 'links',
        h2: 'Related',
        links: [
          { to: '/services/social-media-marketing', label: 'Social media management (all platforms)' },
          { to: '/services/instagram-management', label: 'Instagram management' },
          { to: '/services/meta-ads', label: 'Facebook & Instagram ads' },
          { to: '/services/local-seo', label: 'Google Business Profile & local SEO' },
        ],
      },
      {
        type: 'faq',
        faqs: [
          ['Is Facebook still worth it for a business in India?', 'For many local businesses, yes — especially where customers are 30+, families or in smaller cities. Facebook also powers your Instagram ads, so a well-kept page helps both.'],
          ['How much does Facebook page management cost?', 'Facebook is managed together with Instagram in all our plans: ₹6,000, ₹10,000 or ₹14,000 per month depending on the number of reels, posts and stories.'],
          ['Can you handle Facebook reviews?', 'Yes. We reply to every review, politely and quickly, and help you ask happy customers for recommendations. We never post fake reviews.'],
          ['Can you also run Facebook ads?', 'Yes, as a separate service — see [Meta Ads](/services/meta-ads). The ad budget is paid to Meta directly.'],
          ['My page was made years ago by someone else. Can you take over?', 'Yes. We help you recover admin access through Meta’s process where possible, then clean up and rebrand the page.'],
        ],
      },
    ],
  },

  /* ------------------------------------------------------------------ */
  'linkedin-management': {
    banner: 'LinkedIn management for founders, consultants, CAs and B2B companies — profile optimisation, weekly posts and carousels written in your voice, company page management and engagement.',
    intro: {
      h2: 'On LinkedIn, the person is the brand',
      paras: [
        'For B2B companies, consultants, CAs, lawyers, architects, coaches and founders, LinkedIn is where clients, partners and hires check you out — and where a steady stream of useful posts builds trust before the first meeting. The problem is time: writing good posts every week while running a practice or company rarely happens.',
        'Our **LinkedIn management** service writes and publishes for you. We optimise your profile and company page, plan topics from your real experience, write posts and design carousels in your voice, publish on a schedule and engage with your network — always with your approval.',
      ],
    },
    blocks: [
      {
        type: 'cards',
        tag: 'Two ways we help',
        h2: 'Founder profile and company page',
        items: [
          { title: 'Founder / personal profile', desc: 'Headline, about, featured section and banner rewritten; weekly posts in your voice from short calls or voice notes.' },
          { title: 'Company page', desc: 'Page set-up and branding, service showcase, hiring and culture posts, case studies and announcements.' },
          { title: 'Carousels & document posts', desc: 'Designed explainers, checklists and frameworks — the format that gets saved and shared on LinkedIn.' },
          { title: 'Engagement', desc: 'Thoughtful comments on clients’ and peers’ posts and connection requests to the right people — no spam automation.' },
        ],
      },
      {
        type: 'prose',
        tag: 'How it works',
        h2: 'What LinkedIn management includes',
        bullets: [
          'A 20-minute monthly call or voice notes — we turn your experience into posts',
          'Weekly text posts, carousels and occasional short videos, written and designed for you',
          'Profile and company page optimisation with the keywords clients search for',
          'Publishing on a schedule you approve',
          'Monthly report: impressions, followers, profile views and conversations started',
        ],
      },
      {
        type: 'prose',
        tag: 'Pricing',
        h2: 'LinkedIn management pricing',
        paras: [
          'LinkedIn is quoted on its own or added to an Instagram + Facebook plan, depending on how many posts and carousels you want and whether it is a founder profile, a company page or both. Our Instagram + Facebook plans start at ₹6,000/month — see [all social media plans](/services/social-media-marketing#pricing).',
        ],
      },
      {
        type: 'cards',
        tag: 'Who it is for',
        h2: 'LinkedIn works best for',
        items: [
          { title: 'Consultants, CAs & lawyers', desc: 'Expertise posts that bring referrals and enquiries.', to: '/industries/professional-services' },
          { title: 'Startups & SaaS', desc: 'Founder-led content for customers, investors and hiring.', to: '/industries/startups-saas' },
          { title: 'Manufacturers & exporters', desc: 'Company updates and capability posts for B2B buyers.', to: '/industries/manufacturers-exporters' },
          { title: 'Architects & designers', desc: 'Project stories and process posts for corporate and premium clients.', to: '/industries/architects' },
        ],
      },
      NEVER,
      {
        type: 'links',
        h2: 'Related',
        links: [
          { to: '/services/social-media-marketing', label: 'Social media management (all platforms)' },
          { to: '/services/instagram-management', label: 'Instagram management' },
          { to: '/services/branding-designing', label: 'Branding & design' },
          { to: '/blog/b2b-lead-generation-manufacturers-india', label: 'B2B lead generation for manufacturers' },
        ],
      },
      {
        type: 'faq',
        faqs: [
          ['Will the posts sound like me?', 'Yes. Every post starts from your own experience — a short monthly call or voice notes — and you approve before anything is published.'],
          ['Do you need my LinkedIn password?', 'For a company page, no — you add us as a page admin. For a personal profile we agree a secure way to schedule posts, and you can change access any time.'],
          ['How often should I post on LinkedIn?', 'Two to three good posts a week is plenty for most founders and professionals. Consistency matters more than volume.'],
          ['Do you send automated connection requests or messages?', 'No. Automation tools break LinkedIn’s rules and can get accounts restricted. We engage manually and only with relevant people.'],
          ['How much does LinkedIn management cost?', 'It depends on posts per month and whether we manage a profile, a page or both, so we quote it after a short call — on its own or added to an Instagram + Facebook plan.'],
        ],
      },
    ],
  },
};

export default socialPages;
