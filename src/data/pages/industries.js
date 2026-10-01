// Industry pages: /industries/<slug>. Original copy, no invented results.
// name/short come from data/siteIndex.js (shared with nav/footer/home).
import { industryMeta } from '../siteIndex';

const industries = [
  /* ------------------------------------------------------------------ */
  {
    ...industryMeta['clinics'],
    banner: 'Websites, Google Maps visibility, reviews and ethical ads that help clinics, dentists, dermatologists, physiotherapists and diagnostic centres across Delhi NCR and Chandigarh reach more patients.',
    intro: {
      h2: 'Patients search before they book',
      paras: [
        'Whether it is a toothache at night, a child with a fever or a skin concern someone has been putting off, most patients now start with Google. They compare the clinics that appear on the map, read reviews, check timings and look at the doctor’s qualifications — usually within a couple of minutes. The clinic that answers those questions most clearly gets the call.',
        'Orizova Digital helps clinics present themselves clearly and ethically online: a fast website with doctor profiles and treatments, a complete Google Business Profile, a steady flow of genuine reviews, and targeted ads for the services you want to grow.',
      ],
    },
    blocks: [
      {
        type: 'cards',
        tag: 'What we do',
        h2: 'Digital marketing services for clinics',
        items: [
          { title: 'Clinic website', desc: 'Doctor profiles with qualifications, treatment pages, OPD timings, map, appointment request and WhatsApp.', to: '/services/website-development' },
          { title: 'Google Business Profile', desc: 'Correct categories, services, photos, timings, Q&A and appointment link.', to: '/services/local-seo' },
          { title: 'Reviews routine', desc: 'A simple, compliant way to ask patients for honest reviews after their visit.' },
          { title: 'Google Ads for treatments', desc: 'Search ads for specific treatments in your area, with call tracking.', to: '/services/google-ads' },
          { title: 'Awareness content', desc: 'Helpful posts and reels: myths, aftercare, when to see a doctor.', to: '/services/social-media-marketing' },
          { title: 'Health camp promotion', desc: 'Local Meta ads and posts for camps, new branches or new specialists.', to: '/services/meta-ads' },
        ],
      },
      {
        type: 'prose',
        tag: 'Website essentials',
        h2: 'What every clinic website should include',
        bullets: [
          'Each doctor’s name, qualifications, registration details and experience — exactly as they are, nothing exaggerated',
          'A page for each major treatment or service, explained in plain language',
          'OPD timings, holidays, emergency contact and a map with landmark directions',
          'Appointment request form and WhatsApp button that reach the front desk quickly',
          'Insurance / TPA information and fee transparency where possible',
          'Patient-friendly FAQs: what to bring, how long a visit takes, parking',
        ],
      },
      {
        type: 'prose',
        tag: 'Compliance',
        h2: 'Ethical medical marketing',
        paras: [
          'Medical advertising in India is guided by the National Medical Commission’s professional conduct rules, the Drugs and Magic Remedies Act, consumer protection law, and Google and Meta healthcare ad policies. In practice that means no guaranteed cures, no misleading before-and-after claims, no fake testimonials and no pressure tactics.',
          'We plan content and ads within these boundaries. That protects your registration and your ad accounts — and patients trust clinics that communicate responsibly. Final medical claims are always reviewed by you.',
        ],
      },
      {
        type: 'process',
        h2: 'How we work with clinics',
        steps: [
          { title: 'Understand the practice', desc: 'Specialities, the treatments you want to grow and your catchment area.' },
          { title: 'Fix the foundations', desc: 'Google profile, website basics, tracking for calls and bookings.' },
          { title: 'Reviews & content', desc: 'Review routine plus helpful posts and pages.' },
          { title: 'Targeted ads', desc: 'Treatment-specific campaigns once the basics are ready.' },
          { title: 'Monthly review', desc: 'Calls, appointment requests and cost per enquiry.' },
        ],
      },
      {
        type: 'links',
        h2: 'Useful reading & local pages',
        links: [
          { to: '/blog/get-more-patients-clinic-online', label: 'How to get more patients online' },
          { to: '/blog/google-business-profile-guide', label: 'Google Business Profile guide' },
          { to: '/locations/ghaziabad/seo', label: 'SEO in Ghaziabad' },
          { to: '/locations/delhi/seo', label: 'SEO in Delhi' },
        ],
      },
      {
        type: 'faq',
        faqs: [
          ['Is it allowed for doctors to advertise online?', 'Doctors and clinics can share factual information about their services, timings and qualifications. Claims must not be misleading and should follow NMC guidelines and platform policies. We keep content factual and you approve all medical content.'],
          ['How can my clinic appear in “near me” searches?', 'Mainly through a complete, active Google Business Profile, genuine reviews and a website with clear treatment and location information. See our [local SEO service](/services/local-seo).'],
          ['Should a clinic run Google Ads or Meta ads?', 'Google search ads are usually better for treatments people actively search for. Meta works for awareness, health camps and new branches.'],
          ['Can you add online appointment booking?', 'Yes — a request form, WhatsApp booking or integration with the booking software you already use.'],
          ['Can you post before-and-after photos?', 'Only where allowed by medical guidelines and platform policies, with patient consent and without misleading claims. Many clinics avoid them altogether.'],
        ],
      },
    ],
  },

  /* ------------------------------------------------------------------ */
  {
    ...industryMeta['architects'],
    banner: 'Portfolio-first websites, Instagram presence and enquiry systems for architects, interior designers and design-build studios in Delhi NCR and the Chandigarh Tricity.',
    intro: {
      h2: 'Your projects are your best salespeople',
      paras: [
        'People hiring an architect or interior designer are about to make one of the biggest purchases of their lives. They want to see work they love, understand how you work, and feel confident about budgets and timelines before they call. Most practices have excellent projects but present them in a slow website, a scattered Instagram grid or a PDF that never gets opened.',
        'We help design practices turn their projects into a clear, fast, beautiful portfolio — and attach a simple enquiry process that filters for the clients you actually want.',
      ],
    },
    blocks: [
      {
        type: 'cards',
        tag: 'What we do',
        h2: 'Marketing services for design practices',
        items: [
          { title: 'Portfolio website', desc: 'A page per project with story, scope, location type and photography — loading fast despite large images.', to: '/services/website-development' },
          { title: 'Instagram & Pinterest', desc: 'Project reveals, process reels and before/after site progress.', to: '/services/social-media-marketing' },
          { title: 'Enquiry qualification', desc: 'Forms that ask project type, location, size and budget range before the call.' },
          { title: 'Local SEO', desc: 'Show up for "architect near me" and "interior designer in [area]".', to: '/services/local-seo' },
          { title: 'Brand identity', desc: 'Logo, typography and presentation templates that match your design language.', to: '/services/branding-designing' },
          { title: 'Reel editing', desc: 'Walkthrough and transformation reels from your site footage.', to: '/services/video-editing' },
        ],
      },
      {
        type: 'prose',
        tag: 'Portfolio website',
        h2: 'What a great architecture or interiors website includes',
        bullets: [
          'Projects grouped by type: residences, apartments, offices, retail, hospitality',
          'For each project: the brief, the challenge, your approach and a well-sequenced gallery',
          'An "approach" or "process" page that explains stages, timelines and how fees are structured',
          'Team and studio page with real photos',
          'Image optimisation (modern formats, lazy loading) so galleries stay fast',
          'An enquiry form that captures project details and budget range',
        ],
      },
      {
        type: 'process',
        h2: 'How we work with studios',
        steps: [
          { title: 'Portfolio review', desc: 'Choose the projects that best represent the work you want more of.' },
          { title: 'Story & structure', desc: 'Project write-ups, categories and site map.' },
          { title: 'Design & build', desc: 'Minimal design that lets the photography lead.' },
          { title: 'Visibility', desc: 'Instagram routine, Google profile and local pages.' },
          { title: 'Enquiries', desc: 'Qualifying forms and quick follow-up.' },
        ],
      },
      {
        type: 'links',
        h2: 'Related',
        links: [
          { to: '/blog/architect-portfolio-website-tips', label: 'Architect portfolio website tips' },
          { to: '/locations/chandigarh/website-development', label: 'Websites in Chandigarh' },
          { to: '/locations/delhi/website-development', label: 'Web design in Delhi' },
        ],
      },
      {
        type: 'prose',
        tag: 'Getting found',
        h2: 'How clients look for architects and interior designers',
        paras: [
          'Some clients start on Instagram or Pinterest, saving ideas for months. Others search Google for "architect in Mohali" or "interior designer for 3 BHK Noida" once they have bought a property. Referrals still matter, but even referred clients check your website and reviews before calling. A good plan covers all three: inspiring social content, a website that ranks for local searches, and a Google profile with genuine reviews from past clients.',
        ],
      },
      {
        type: 'faq',
        faqs: [
          ['Do I need professional photography?', 'It helps a lot. Where professional photos are not available, well-lit phone photos and short walkthrough videos are still better than renders alone.'],
          ['Can I show 3D renders on my website?', 'Yes, clearly labelled as concepts. Built-project photos build more trust, so we mix both carefully.'],
          ['How do I avoid enquiries with very low budgets?', 'Mention starting budgets or typical project sizes and add a budget-range question to the enquiry form.'],
          ['Is Instagram or a website more important?', 'Both. Instagram is where people discover you; the website is where they decide. The website also ranks on Google.'],
          ['Can clients share their own reviews or project feedback?', 'Yes — with their permission. Genuine client words on project pages are very persuasive.'],
        ],
      },
    ],
  },

  /* ------------------------------------------------------------------ */
  {
    ...industryMeta['real-estate'],
    banner: 'Project landing pages, Meta lead ads, Google search campaigns and WhatsApp follow-up for builders, brokers and channel partners in Noida, Ghaziabad, Delhi and the Chandigarh Tricity.',
    intro: {
      h2: 'More site visits, fewer wasted calls',
      paras: [
        'Real-estate marketing produces a lot of leads and a lot of frustration. Cheap lead forms fill up with people who were just browsing, numbers that do not pick up, and enquiries from the wrong budget or location. The sales team loses trust in digital leads and the budget gets cut.',
        'We approach real-estate campaigns with lead quality as the main goal: focused project landing pages, lead forms that ask about budget and timeline, fast WhatsApp follow-up, and tracking that tells the ad platforms which leads became site visits.',
      ],
    },
    blocks: [
      {
        type: 'cards',
        tag: 'What we do',
        h2: 'Real-estate marketing services',
        items: [
          { title: 'Project landing pages', desc: 'Location, configuration, price range, amenities, floor plans, RERA number and a clear enquiry form.', to: '/services/website-development' },
          { title: 'Meta lead campaigns', desc: 'Facebook and Instagram ads with higher-intent forms and qualifying questions.', to: '/services/meta-ads' },
          { title: 'Google search ads', desc: 'Ads for project names, localities and configurations like "3 BHK Noida Extension".', to: '/services/google-ads' },
          { title: 'WhatsApp follow-up', desc: 'Instant brochure and site-visit scheduling flows so leads are contacted within minutes.' },
          { title: 'Walkthrough reels', desc: 'Short videos of sample flats, amenities and the neighbourhood.', to: '/services/video-editing' },
          { title: 'Broker / dealer websites', desc: 'Listing-style websites with locality pages for resale and rental businesses.' },
        ],
      },
      {
        type: 'prose',
        tag: 'Compliance',
        h2: 'RERA and ad-platform rules',
        paras: [
          'Real-estate promotions in India should display the project’s RERA registration number where required, and claims about possession dates, returns or approvals must be accurate. Meta treats housing ads as a Special Ad Category, which limits targeting by age, gender and narrow postcodes. Google also has policies for real-estate and financial claims.',
          'We build campaigns that work within these rules — using creative, offer and form design to qualify leads rather than relying on restricted targeting.',
        ],
      },
      {
        type: 'process',
        h2: 'Our real-estate campaign process',
        steps: [
          { title: 'Project brief', desc: 'Inventory, price points, USPs and the ideal buyer.' },
          { title: 'Landing page & creatives', desc: 'Page, ads and brochure aligned to one clear message.' },
          { title: 'Lead routing', desc: 'Leads to CRM/Sheet and WhatsApp in real time.' },
          { title: 'Launch & qualify', desc: 'Daily checks on lead quality with your sales team.' },
          { title: 'Optimise for site visits', desc: 'Feed back outcomes so campaigns learn what a good lead is.' },
        ],
      },
      {
        type: 'links',
        h2: 'Related',
        links: [
          { to: '/blog/real-estate-leads-meta-ads', label: 'Real-estate leads from Meta ads' },
          { to: '/locations/noida', label: 'Noida' },
          { to: '/locations/ghaziabad', label: 'Ghaziabad' },
          { to: '/locations/chandigarh', label: 'Chandigarh Tricity' },
        ],
      },
      {
        type: 'prose',
        tag: 'Brokers & resale',
        h2: 'For brokers and resale or rental businesses',
        paras: [
          'If you deal in resale and rentals rather than one project, your website works like a local property guide: pages for the societies and sectors you cover, current listings, and helpful content on prices, documentation and the buying process. Combined with a strong Google profile and steady reviews, this builds enquiries that do not depend entirely on ad spend.',
        ],
      },
      {
        type: 'faq',
        faqs: [
          ['Why are my real-estate leads poor quality?', 'Common causes are low-intent form settings, vague ads with no price indication, slow follow-up and broad audiences. Fixing these usually improves lead quality noticeably.'],
          ['Do you work with channel partners and brokers?', 'Yes, as long as you have the developer’s permission to advertise the project and follow RERA requirements.'],
          ['Can you target NRI buyers?', 'Yes, campaigns can target audiences abroad, with messaging and timings adjusted for them.'],
          ['Should I use a landing page or a lead form?', 'Lead forms give more volume; landing pages often give better quality. Many campaigns test both.'],
          ['Do you make the brochures and creatives?', 'Yes — ad creatives, digital brochures and walkthrough reels.'],
        ],
      },
    ],
  },

  /* ------------------------------------------------------------------ */
  {
    ...industryMeta['restaurants-cafes'],
    banner: 'Google Maps visibility, reviews, Instagram reels, websites and local ads for restaurants, cafes, bakeries and cloud kitchens in Delhi NCR and Chandigarh.',
    intro: {
      h2: 'Get discovered, get visited, get talked about',
      paras: [
        'Food businesses are chosen fast. Someone searches "cafe near me" or scrolls past a reel, looks at photos and ratings for a few seconds, and decides where to go tonight. If your Google profile has old photos, wrong timings or unanswered reviews — or your Instagram has not been updated in months — they pick somewhere else.',
        'We help restaurants and cafes keep their digital storefront fresh: an accurate and attractive Google profile, steady reviews, reels that show the food and the vibe, and ads that reach people within a short drive of your outlet.',
      ],
    },
    blocks: [
      {
        type: 'cards',
        tag: 'What we do',
        h2: 'Marketing services for food businesses',
        items: [
          { title: 'Google Maps & reviews', desc: 'Menu, photos, timings, reservation link and replies to every review.', to: '/services/local-seo' },
          { title: 'Instagram & reels', desc: 'Food close-ups, kitchen moments, events and behind-the-scenes content.', to: '/services/social-media-marketing' },
          { title: 'Reel editing', desc: 'Fast-cut reels from footage your team shoots during service.', to: '/services/video-editing' },
          { title: 'Local Meta ads', desc: 'Ads for launches, weekend offers and events within a few kilometres.', to: '/services/meta-ads' },
          { title: 'Restaurant website', desc: 'Menu, reservations, private dining, delivery links and directions.', to: '/services/website-development' },
          { title: 'Branding', desc: 'Logo, menu design, packaging and signage artwork.', to: '/services/branding-designing' },
        ],
      },
      {
        type: 'prose',
        tag: 'Restaurants',
        h2: 'For restaurants and family dining',
        paras: [
          'Restaurants depend on repeat customers and occasions — birthdays, family dinners, office parties. Your Google profile and website should make it easy to see the menu, check prices, book a table or enquire about group bookings. Reviews mentioning specific dishes help you appear for searches like "best biryani near me".',
        ],
      },
      {
        type: 'prose',
        tag: 'Cafes',
        h2: 'For cafes, bakeries and dessert places',
        paras: [
          'Cafes compete on experience as much as food. Instagram reels of the space, latte art, new menu drops, live music nights and community events give people a reason to visit — and to tag you. A consistent visual identity across cups, packaging and posts makes the cafe memorable. Our [Instagram ideas for cafes and restaurants](/blog/instagram-ideas-restaurants-cafes) has practical content ideas.',
        ],
      },
      {
        type: 'process',
        h2: 'How we work with restaurants and cafes',
        steps: [
          { title: 'Audit', desc: 'Google profile, delivery app listings, Instagram and reviews.' },
          { title: 'Fix the basics', desc: 'Correct info, fresh photos, menu and reservation links.' },
          { title: 'Content routine', desc: 'Monthly reels and posts planned around your calendar.' },
          { title: 'Local ads', desc: 'Short, targeted campaigns for launches and events.' },
          { title: 'Review & improve', desc: 'Reviews, footfall signals and what content worked.' },
        ],
      },
      {
        type: 'faq',
        faqs: [
          ['How can my restaurant rank higher on Google Maps?', 'Keep your profile complete and accurate, add fresh photos, collect genuine reviews regularly and reply to them, and make sure your website matches the same name, address and phone.'],
          ['Do restaurants need a website if they are on Zomato and Swiggy?', 'Delivery apps cover ordering, but your own website helps with reservations, private events, catering enquiries and Google search — without commission.'],
          ['How often should a cafe post on Instagram?', 'Consistency beats volume. A few good reels and posts each week, plus stories during service, is a realistic routine for most cafes.'],
          ['Do you shoot food content?', 'We guide your team on what to shoot and edit the footage; professional shoots can be arranged separately.'],
          ['Can ads bring walk-ins?', 'Yes. Local Meta ads around your outlet work well for launches, offers and events, especially combined with a strong Google profile.'],
        ],
      },
    ],
  },

  /* ------------------------------------------------------------------ */
  {
    ...industryMeta['finance-loan-agents'],
    banner: 'Trust-first websites, compliant Google and Meta lead generation, and WhatsApp follow-up for loan agents, DSAs, insurance advisors and financial consultants.',
    intro: {
      h2: 'In finance, trust comes before the lead',
      paras: [
        'People looking for a home loan, business loan or insurance policy are cautious — and they should be. They have heard about fraud, hidden charges and pushy agents. Before they share their phone number, they want to know who you are, which lenders or companies you work with, and what the process looks like.',
        'We help loan agents, DSAs and financial advisors build that trust online first: a clear, professional website with honest disclosures, a strong Google profile, and lead campaigns that follow financial-services rules — so the enquiries you get are serious, and your ad accounts stay safe.',
      ],
    },
    blocks: [
      {
        type: 'cards',
        tag: 'What we do',
        h2: 'Marketing services for financial professionals',
        items: [
          { title: 'Professional website', desc: 'Services, process, documents checklist, EMI calculator, disclosures and enquiry form.', to: '/services/website-development' },
          { title: 'Google search ads', desc: 'Campaigns for specific loan types and locations, within Google’s financial-services policy.', to: '/services/google-ads' },
          { title: 'Meta lead ads', desc: 'Qualifying forms for loan type, amount range, city and employment type.', to: '/services/meta-ads' },
          { title: 'Local SEO', desc: 'Google Business Profile and reviews for your office location.', to: '/services/local-seo' },
          { title: 'LinkedIn & content', desc: 'Helpful explainers on eligibility, documents and process.', to: '/services/social-media-marketing' },
          { title: 'WhatsApp follow-up', desc: 'Fast first response with a documents checklist.' },
        ],
      },
      {
        type: 'prose',
        tag: 'Compliance',
        h2: 'Staying compliant in financial marketing',
        bullets: [
          'Never promise guaranteed approval, "lowest interest rate" or instant disbursal unless it is genuinely true and documented',
          'Show lender or insurer tie-ups only if you are formally authorised — logos without permission damage trust and can create legal problems',
          'Mention that final approval and rates are decided by the lender',
          'Follow Meta’s Special Ad Category for credit and Google’s financial-services verification where it applies',
          'Protect customer data: collect only what you need, and secure where leads are stored',
        ],
      },
      {
        type: 'process',
        h2: 'How we work with loan agents and advisors',
        steps: [
          { title: 'Understand your products', desc: 'Loan types, partner lenders, areas and ideal customers.' },
          { title: 'Build trust assets', desc: 'Website, Google profile, disclosures and FAQs.' },
          { title: 'Lead generation', desc: 'Compliant search and social campaigns with qualifying forms.' },
          { title: 'Follow-up flow', desc: 'Quick WhatsApp response and document collection.' },
          { title: 'Optimise', desc: 'Track which campaigns lead to files logged and disbursals.' },
        ],
      },
      {
        type: 'links',
        h2: 'Related',
        links: [
          { to: '/blog/loan-agent-lead-generation', label: 'How loan agents get leads online' },
          { to: '/services/google-ads', label: 'Google Ads' },
          { to: '/services/meta-ads', label: 'Meta Ads' },
        ],
      },
      {
        type: 'faq',
        faqs: [
          ['Can loan agents run Facebook and Google ads?', 'Yes, within platform rules. Credit ads on Meta use a Special Ad Category with limited targeting, and Google may require financial-services verification in India. We set campaigns up accordingly.'],
          ['How do I get better-quality loan leads?', 'Ask qualifying questions (loan type, amount, city, income type), mention eligibility basics in the ad, and respond within minutes.'],
          ['Do I need a website if I get leads from ads?', 'A professional website increases trust and conversion rates, and it is often expected by ad platforms for financial services.'],
          ['Can I show bank logos on my website?', 'Only if you have formal authorisation from those banks or NBFCs. Otherwise describe your services without their branding.'],
          ['Do you work with insurance advisors and CAs too?', 'Yes. The same trust-first approach works for insurance, investment and accounting professionals.'],
        ],
      },
    ],
  },
];

export default industries;
