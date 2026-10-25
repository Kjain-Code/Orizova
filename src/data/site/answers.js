// Answer-first summaries ("Quick answer" box) for AEO / GEO.
// Rules: lead with the direct answer, 40–80 words, name the brand and the
// place, facts only (no invented prices, numbers, clients or results).
// Rendered by components/content/QuickAnswer.jsx; also used for /llms.txt.
// Section: home, hubs & company pages.

const answers = {
  '/': {
    q: 'What is Orizova Digital?',
    a: 'Orizova Digital is a website development and digital marketing agency based in Delhi NCR. It builds fast, mobile-first websites, online stores and apps, and grows businesses with SEO, local SEO, AI search optimization, Google Ads, Meta (Facebook & Instagram) Ads, social media, branding and video editing — for businesses across India, from Delhi NCR, Lucknow and Chandigarh to Jaipur, Hyderabad, Pune, Bengaluru and Mumbai.',
  },
  '/services': {
    q: 'What services does Orizova Digital offer?',
    a: 'Orizova Digital offers three groups of services: build (website development, e-commerce stores, mobile apps), grow (SEO, local SEO, AI search optimization for ChatGPT and Google AI Overviews, Google Ads, Meta Ads, social media marketing, digital marketing) and create (branding, logo design and video editing). Each service is planned around enquiries and sales, with tracking set up so results can be measured.',
  },
  '/industries': {
    q: 'Which industries does Orizova Digital work with?',
    a: 'Orizova Digital works with 19 industries: clinics, dental and skin clinics; real estate, architects and home services; restaurants, hotels and wedding businesses; D2C brands, retailers and manufacturers; schools and coaching; salons and gyms; and finance, professional, immigration and tech companies. Each gets a plan built around how its customers search and decide.',
  },
  '/blog': {
    q: 'What does the Orizova Digital blog cover?',
    a: 'The Orizova Digital blog publishes practical, plain-language guides for business owners in India on website cost, getting a website made, choosing a developer, Google Business Profile, local SEO, Meta Ads vs Google Ads, and marketing for clinics, real estate, restaurants, architects and loan agents.',
  },
  '/faq': {
    q: 'What do businesses usually ask Orizova Digital?',
    a: 'Most questions are about website cost and timelines, how long SEO takes, ad budgets, ownership and process. In short: quotes are fixed and written after understanding your scope, SEO builds over months while ads can bring enquiries within days, no honest agency guarantees rankings, and your domain, website and ad accounts stay in your name.',
  },
  '/about': {
    q: 'Who is Orizova Digital?',
    a: 'Orizova Digital is a full-service digital agency in Delhi NCR that builds websites and apps and runs SEO, Google Ads, Meta Ads, social media and video for local and growing businesses. It works on fixed written quotes, keeps domains and ad accounts in the client’s name, and does not use fake reviews, spam links or ranking guarantees.',
  },
  '/contact': {
    q: 'How do I contact Orizova Digital?',
    a: 'You can contact Orizova Digital on WhatsApp or phone at +91 70608 24503, by email at orizovadigital@gmail.com, or through the contact form on this page. Share your business, city and goal, and the team replies with a clear plan and a fixed quote. Consultations are free.',
  },
  '/portfolio': {
    q: 'What websites has Orizova Digital built?',
    a: 'Orizova Digital’s website portfolio includes Morphic Spaces (a spatial design studio in the Chandigarh Tricity), WIPO Group (a fractional real-estate investment portal), Ganesh Creation (a wedding and fashion photography studio) and FPS Subtitle (a subtitling and localisation studio). Each case study explains the brief, the approach and what was built.',
  },
  '/creative-work': {
    q: 'What kind of videos does Orizova Digital edit?',
    a: 'Orizova Digital edits Instagram reels, short-form ad creatives, brand films and kinetic-typography videos for businesses such as a shopping mall, a diagnostic lab, doctors, paint dealers, car brands and gift-hamper sellers — mostly from footage shot on a phone or camera by the client.',
  },
};

export default answers;
