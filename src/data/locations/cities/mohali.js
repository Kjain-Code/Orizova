// Mohali (SAS Nagar): city hub + city × service pages. Complements the
// Chandigarh Tricity page with Mohali-specific content.
const hub = {
  slug: 'mohali',
  city: 'Mohali',
  region: 'SAS Nagar, Punjab (Chandigarh Tricity)',
  tagline: 'Websites, SEO & lead generation for Mohali — IT companies, immigration and IELTS consultants, hospitals, builders and retailers from Phase 3B2 to Aerocity',
  intro:
    "Mohali has become the Tricity’s growth engine: IT and software companies in the Industrial Area and IT City, large hospitals, a dense cluster of immigration, study-abroad and IELTS consultants, and new housing along Airport Road, Aerocity, Sector 82 and towards Kharar and New Chandigarh. Orizova Digital builds fast websites and runs SEO and Meta and Google lead campaigns for Mohali businesses — with a focus on enquiry quality, not just volume.",
  areas: ['Phase 3B2', 'Phase 5', 'Phase 7', 'Phase 8B Industrial Area', 'Sector 70–71', 'Sector 82', 'Aerocity', 'Airport Road', 'IT City', 'Kharar'],
  industries: ['Immigration, visa & IELTS', 'IT & software companies', 'Hospitals & clinics', 'Real estate developers', 'Restaurants & cafes', 'Schools & coaching'],
  focus:
    'Mohali enquiries are competitive and expensive in categories like immigration and real estate. We build landing pages and lead forms that qualify people before they reach your team, and keep claims honest so ad accounts stay in good standing.',
  sections: [
    {
      type: 'prose',
      tag: 'The Mohali market',
      h2: 'High competition, high value — and lead quality decides profit',
      paras: [
        'In Mohali, several of the most active advertisers are in the same few categories: study visas, PR and immigration, IELTS and PTE coaching, real-estate projects on Airport Road and in Aerocity, and multi-speciality hospitals. Cost per lead is high, and many leads are students "just checking" or buyers outside your budget band. The businesses that grow are the ones that filter early and follow up fast.',
        'Mohali is also a technology city. Software, IT services and startup teams in the Industrial Area, IT City and Quark City sell to clients in India and abroad, and need credible websites, case studies and search visibility for specific services rather than local Maps rankings.',
      ],
    },
    {
      type: 'cards',
      tag: 'Where to start',
      h2: 'Popular starting points in Mohali',
      items: [
        { title: 'Website development in Mohali', desc: 'Consultancy, IT, hospital and project websites built to convert.', to: '/locations/mohali/website-development', cta: 'Websites in Mohali' },
        { title: 'SEO in Mohali', desc: 'Phase- and sector-level local SEO plus service SEO for IT firms.', to: '/locations/mohali/seo', cta: 'SEO company in Mohali' },
        { title: 'Immigration & study-abroad marketing', desc: 'Compliant ads, qualifying lead forms and counsellor follow-up.', to: '/industries/immigration-consultants' },
        { title: 'Chandigarh Tricity', desc: 'Covering Chandigarh, Panchkula and Zirakpur too.', to: '/locations/chandigarh' },
      ],
    },
  ],
  faqs: [
    ['Do you work with businesses in Mohali?', 'Yes. Our team is based in Delhi NCR and works with Tricity clients over calls, video meetings and WhatsApp. Our Tricity work includes the website for [Morphic Spaces](/portfolio/morphic-spaces).'],
    ['Can you run ads for immigration and study-visa consultants?', 'Yes, within Google and Meta policies and without guaranteed-outcome claims. We use lead forms with qualifying questions (country, course, budget, test scores) so counsellors spend time on serious applicants. See [immigration consultant marketing](/industries/immigration-consultants).'],
    ['Can you help an IELTS or PTE institute get more students?', 'Yes — course pages, demo-class booking, Google search ads for test preparation and Instagram content that shows real classes and results you can verify.'],
    ['Do you work with real-estate projects on Airport Road and in Aerocity?', 'Yes. Project landing pages with RERA details, Meta and Google lead campaigns and tracking of site visits. See [real estate marketing](/industries/real-estate).'],
    ['Do you also cover Chandigarh and Panchkula?', 'Yes — see [Chandigarh](/locations/chandigarh) and [Panchkula](/locations/panchkula).'],
  ],
};

const pages = [
  {
    city: 'mohali',
    service: 'website-development',
    label: 'Website development company in Mohali',
    banner: 'Websites for Mohali immigration consultants, IELTS institutes, IT companies, hospitals and real-estate projects — fast, credible and built to qualify enquiries.',
    intro: {
      h2: 'Credibility first: websites for a competitive Mohali market',
      paras: [
        'When a student compares three visa consultants in Phase 3B2, or an investor compares two projects on Airport Road, the decision often comes down to which one looks more established and transparent. A thin website with stock photos and bold promises makes people suspicious; a clear site with real team photos, process, licences you hold and honest FAQs builds trust.',
        'Orizova Digital builds websites that earn that trust and filter enquiries at the same time — with forms that ask the right questions, WhatsApp that reaches the right counsellor or sales person, and pages structured for Google from day one.',
      ],
    },
    blocks: [
      {
        type: 'cards',
        tag: 'Popular in Mohali',
        h2: 'Websites we build for Mohali businesses',
        items: [
          { title: 'Immigration & visa consultant sites', desc: 'Country and visa-type pages, process explainers, team credentials and qualifying enquiry forms.', to: '/industries/immigration-consultants' },
          { title: 'IELTS / PTE institute sites', desc: 'Courses, batch timings, demo-class booking and verifiable student results.', to: '/industries/education' },
          { title: 'IT company websites', desc: 'Services, technologies, case studies, careers and international enquiry forms.', to: '/industries/startups-saas' },
          { title: 'Hospital & clinic websites', desc: 'Departments, doctors, health packages and appointment requests.', to: '/industries/clinics' },
          { title: 'Real-estate project websites', desc: 'Floor plans, amenities, location advantages, RERA details and site-visit booking.', to: '/industries/real-estate' },
          { title: 'Restaurant & cafe websites', desc: 'Menus, reservations and party bookings for Phase 3B2, Sector 70 and Airport Road outlets.', to: '/industries/restaurants-cafes' },
        ],
      },
      {
        type: 'prose',
        tag: 'Lead quality',
        h2: 'Building filters into the website',
        bullets: [
          'Enquiry forms that ask for the details your team needs — destination country and test score, budget band and configuration, speciality and preferred date',
          'Separate WhatsApp numbers or routing for different services, so enquiries reach the right person',
          'Clear process pages and honest FAQs that answer common questions before the call',
          'Thank-you pages and tracking that tell Google and Meta which leads became real conversations',
          'No guaranteed-outcome claims — they hurt trust and can get ad accounts restricted',
        ],
      },
      {
        type: 'process',
        h2: 'From brief to launch',
        steps: [
          { title: 'Understand your funnel', desc: 'Services, ideal customer and what happens after an enquiry.' },
          { title: 'Plan pages & forms', desc: 'Content structure and qualifying questions.' },
          { title: 'Design', desc: 'A credible, modern look using your real team and work.' },
          { title: 'Develop & track', desc: 'Fast build with WhatsApp routing and conversion tracking.' },
          { title: 'Launch & improve', desc: 'Review enquiry quality and adjust forms and pages.' },
        ],
      },
      {
        type: 'prose',
        tag: 'Cost',
        h2: 'Website development cost in Mohali',
        paras: [
          'We quote a fixed price after understanding your pages, content and integrations — such as CRM connections or multiple branches. Many Tricity businesses start with a focused website plus one landing page for ads, then expand. See our [Chandigarh website cost guide](/blog/website-development-cost-chandigarh) for typical cost factors in the Tricity.',
        ],
      },
      {
        type: 'faq',
        faqs: [
          ['Can the website connect to our CRM?', 'Yes — most CRMs accept form submissions via integrations or webhooks, so leads land where your counsellors already work.'],
          ['Can you show our licences and registrations?', 'Yes, and we recommend it. Show only details you genuinely hold, with links to official verification where available.'],
          ['Do you build landing pages for ads separately?', 'Yes. A focused landing page per campaign usually converts better than sending ads to the homepage.'],
          ['Do you do SEO for Mohali too?', 'Yes — see [SEO in Mohali](/locations/mohali/seo).'],
        ],
      },
    ],
  },
  {
    city: 'mohali',
    service: 'seo',
    label: 'SEO company in Mohali',
    banner: 'Local SEO for Mohali clinics, consultants, institutes and retailers, and service SEO for Mohali IT companies selling across India and abroad.',
    intro: {
      h2: 'Rank by phase, sector and service',
      paras: [
        'Mohali customers search by phase and sector — "IELTS coaching phase 7", "physiotherapist sector 70", "cafe phase 3B2" — and often by Tricity, since Chandigarh and Panchkula are minutes away. To appear, you need a precise Google Business Profile, steady reviews and website pages that match how people describe your location and service.',
        'For Mohali IT companies the game is different: national and international searches for specific services and technologies, where content depth, case studies and authority decide rankings.',
      ],
    },
    blocks: [
      {
        type: 'prose',
        tag: 'What we do',
        h2: 'Our SEO services in Mohali',
        bullets: [
          'Google Business Profile optimisation with exact phase/sector and landmarks',
          'Genuine review routines and reply templates',
          'Service and country pages for consultancies, written without misleading claims',
          'Service and technology pages, case studies and blog content for IT firms',
          'Technical SEO and structured data',
          'Monthly reporting tied to enquiries',
        ],
      },
      {
        type: 'cards',
        tag: 'Industries',
        h2: 'Mohali businesses we often help with SEO',
        items: [
          { title: 'Immigration & study abroad', desc: 'Country and visa-type pages that answer real questions.', to: '/industries/immigration-consultants' },
          { title: 'IT companies', desc: 'Service SEO for national and international clients.', to: '/industries/startups-saas' },
          { title: 'Hospitals & clinics', desc: 'Speciality pages and Maps visibility.', to: '/industries/clinics' },
          { title: 'Coaching & IELTS', desc: 'Course pages that rank before every intake.', to: '/industries/education' },
        ],
      },
      {
        type: 'prose',
        tag: 'Tricity overlap',
        h2: 'Mohali, Chandigarh or both?',
        paras: [
          'Because the Tricity behaves like one market, many Mohali businesses also want to appear for Chandigarh searches. Google Maps results depend heavily on distance, so that is hard with one address. Your website, however, can rank for Tricity-wide service searches with strong content, and ads can cover areas where Maps cannot.',
          'If you have staffed branches in both cities, each can have its own profile and page. We set them up so they support each other rather than compete.',
        ],
      },
      {
        type: 'faq',
        faqs: [
          ['How long does SEO take in Mohali?', 'Local profile improvements can show within weeks; competitive categories like immigration take several months of consistent work.'],
          ['Can you guarantee top rankings for "visa consultant Mohali"?', 'No honest agency can guarantee rankings. We focus on the work that moves rankings and report transparently.'],
          ['Can SEO reduce our ad spend?', 'Over time, organic enquiries can reduce dependence on ads, but most competitive Mohali businesses run both.'],
          ['Do you cover Chandigarh SEO as well?', 'Yes — see [SEO in Chandigarh](/locations/chandigarh/seo).'],
        ],
      },
    ],
  },
];

const answers = {
  '/locations/mohali': {
    q: 'Which digital marketing agency works with Mohali businesses?',
    a: 'Orizova Digital builds websites and runs SEO and Meta and Google lead campaigns for Mohali businesses — immigration, study-visa and IELTS consultants, IT and software companies, hospitals, real-estate projects on Airport Road and in Aerocity, and restaurants in Phase 3B2 and Sector 70. Campaigns focus on qualifying enquiries and honest, policy-compliant claims.',
  },
  '/locations/mohali/website-development': {
    q: 'Who builds websites for businesses in Mohali?',
    a: 'Orizova Digital builds websites for Mohali immigration consultants, IELTS and PTE institutes, IT companies, hospitals, real-estate projects and restaurants. Sites show real teams, processes and credentials, use enquiry forms with qualifying questions, route WhatsApp leads to the right person and are set up for Google and conversion tracking from launch.',
  },
  '/locations/mohali/seo': {
    q: 'Who provides SEO services in Mohali?',
    a: 'Orizova Digital provides SEO for Mohali businesses: Google Business Profile optimisation by phase and sector, genuine review routines and service pages for clinics, consultants and institutes, plus service and technology SEO for IT companies selling across India and abroad. Monthly reports tie rankings to enquiries.',
  },
};

const meta = {
  '/locations/mohali': { title: 'Digital Marketing Agency in Mohali | Orizova Digital', description: 'Websites, SEO and lead generation for Mohali immigration & IELTS consultants, IT companies, hospitals, builders and restaurants — focused on lead quality.', h1: 'Digital Marketing Agency in Mohali' },
  '/locations/mohali/website-development': { title: 'Website Development Company in Mohali | Orizova', description: 'Websites for Mohali immigration consultants, IELTS institutes, IT firms, hospitals and real-estate projects — credible, fast and built to qualify leads.', h1: 'Website Development Company in Mohali' },
  '/locations/mohali/seo': { title: 'SEO Company in Mohali – Local & IT Service SEO', description: 'SEO in Mohali: Google Maps by phase and sector, reviews and service pages for clinics and consultants, plus service SEO for IT companies.', h1: 'SEO Company in Mohali' },
};

const city = { hub, pages, answers, meta };
export default city;
