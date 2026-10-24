# AEO + GEO: Orizova Digital

Date: 24 Oct 2026

**AEO (Answer Engine Optimization):** Google featured snippets, "People also ask", voice search aur Google AI Overviews mein site ka content seedha **answer** ki tarah dikhe.
**GEO (Generative Engine Optimization):** ChatGPT, Claude, Perplexity, Gemini aur Copilot apne jawab mein **Orizova Digital ka naam lein aur site ko cite karein**.

Dono SEO ke upar hi bante hain. Is site ka SEO base pehle se strong tha: pre-rendered HTML, schema, FAQ, sitemap, IndexNow. Is liye is round mein sirf AEO/GEO wali layer add ki gayi hai.

---

## 1. Code mein kya badla (is round mein)

| Change | Kahan | Kyun |
|---|---|---|
| **Quick Answer box**: har page ke top par 1 sawal + 40–80 word ka seedha jawab, aur "Last updated" date | `src/data/<section>/answers.js` (content), `src/components/content/QuickAnswer.jsx`, CSS in `src/components/content/ContentPage.css` | AI tools aur Google wahi text uthate hain jo khud mein poora jawab ho. 55 pages par laga hai: home, services, cities, city×service, industries, portfolio, blog |
| **Key takeaways**: har blog post mein 3–4 point | `src/data/blog/answers.js` → `takeaways` | Lists AI ke liye quote karna sabse aasaan hota hai |
| **Brand fact sheet** ("Orizova Digital at a glance") About page par | `src/data/site/facts.js`, `FactSheet` component | Brand ki ek pakki, consistent definition jise AI repeat kar sake |
| **WebPage schema** har page par: `dateModified` + `speakable` (Quick Answer ki taraf point karta hai) | `src/components/seo/Seo.jsx` | Freshness signal + voice assistants ke liye answer mark hota hai |
| **OfferCatalog** (saari 11 services) + `knowsLanguage` Organization schema mein | `src/components/seo/Seo.jsx` | AI ko clear pata chale ki brand kaun-kaun si services deta hai |
| **BlogPosting** mein `dateModified` (seo.json ka lastmod), `articleSection`, `isPartOf` + byline mein "Updated" date | `src/pages/blog/BlogPost.jsx` | Freshness |
| **robots.txt**: AI crawlers ko naam se allow kiya (GPTBot, OAI-SearchBot, ChatGPT-User, ClaudeBot, Claude-SearchBot, PerplexityBot, Google-Extended, Applebot, Bingbot, CCBot…) | `scripts/prerender.js` (build par ban-ta hai), `public/robots.txt` | Bot block hai to AI site padh hi nahi sakta |
| **/llms.txt**: brand summary + key facts + har page ka link uske short answer ke saath | build par auto-generate (`scripts/prerender.js`) | AI assistants ke liye site ka "visiting card" |
| **/llms-full.txt**: saare pages ka poora text, Markdown mein | build par auto-generate | AI ko poora content ek jagah mil jata hai |
| `llms*.txt` par `X-Robots-Tag: noindex` | `vercel.json`, `public/.htaccess` | Ye files AI ke liye hain; Google search mein duplicate na banein |
| Home FAQ mein Varanasi add kiya | `src/components/home/AreasServed.jsx` | Har jagah cities ki list same honi chahiye (entity consistency) |
| Badle hue 55 pages ka `lastmod` → 2026-10-24 | `src/data/site/seo.json` | Sitemap Google/Bing ko batata hai ki content update hua hai |

Verify kiya gaya: `npm run build` ✅, ESLint 0 errors ✅, test ✅, 57 pages pre-rendered, saara JSON-LD valid, har page par ek H1, 390px par horizontal scroll nahi, browser mein koi JS error nahi.

### Naya page ya blog add karte waqt (zaroori)
1. `src/data/site/seo.json` mein route add karo (jaise pehle karte the).
2. Us section ki `answers.js` (jaise `src/data/services/answers.js`) mein usi path ka `{ q, a }` add karo. Blog ke liye `takeaways` bhi.
   - Pehli line mein seedha jawab. Brand ka naam aur shehar ka naam ho. 40–80 words.
   - Koi fake number, price ya result nahi.
3. Content badlo to us route ka `lastmod` update karo.
4. Deploy ke baad `npm run indexnow` chalao (Bing + ChatGPT search ke liye).

---

## 2. Deploy ke baad turant (1–2 din)

1. **Deploy** karo, phir browser mein check karo:
   - `https://orizovadigital.co.in/llms.txt`
   - `https://orizovadigital.co.in/robots.txt`
2. **Google Search Console**: sitemap dobara submit karo. Home, /services aur city pages ke liye "Request indexing" karo.
3. **Bing Webmaster Tools**: site add karo (Search Console se import ho jata hai) aur sitemap submit karo. **ChatGPT search aur Copilot kaafi had tak Bing ke index par chalte hain**, isliye ye step bahut zaroori hai.
4. `npm run indexnow` chalao.
5. **Cloudflare** use ho raha hai to: Security → Bots mein dekho ki "Block AI bots / AI Scrapers" OFF ho. Warna robots.txt ke bawajood AI bots block ho jayenge.

---

## 3. Website ke bahar (GEO ka sabse bada hissa)

AI tools sirf aapki site padh kar recommend nahi karte. Wo ye bhi check karte hain ki **baaki internet aapke baare mein kya kehta hai**. Isliye ye kaam karne hi padenge:

**Har jagah bilkul same details** (naam "Orizova Digital", phone +91 70608 24503, website, services, cities). `src/data/site/facts.js` ko master copy maano.

| Priority | Kaam | Note |
|---|---|---|
| 1 | **Google Business Profile** banao/verify karo | Category "Website designer" / "Internet marketing service". Services, photos, aur har hafte ek post |
| 2 | **Genuine reviews**: Google par, purane clients se | Review mein service ka naam aaye to aur achha ("website banwayi", "Meta ads chalaye") |
| 3 | **LinkedIn company page, Facebook page, YouTube channel** | Reels YouTube Shorts par bhi daalo. Phir URLs `src/data/site/contact.js` → `sameAs` mein add karo |
| 4 | **Agency directories**: Clutch, GoodFirms, DesignRush, TechBehemoths, Sortlist | **AI tools agency recommend karte waqt aksar inhi listings ko cite karte hain** |
| 5 | **Indian directories**: Justdial, Sulekha, IndiaMART, Bing Places, Apple Business Connect | Same NAP (Name, Address, Phone) |
| 6 | **Reddit / Quora** par genuine jawab (website cost, Meta vs Google Ads, local SEO) | Spam nahi. Kaam ka jawab do, aur zaroorat ho tabhi blog ka link do |
| 7 | **Client sites par credit**: "Designed by Orizova Digital" (permission ke saath) | Backlink + brand mention dono milte hain |
| 8 | **Local PR / guest posts**: Noida, Ghaziabad, Chandigarh ke business blogs aur news sites | "Best agencies in…" type listicles mein naam aana bahut kaam karta hai |
| 9 | **Case studies mein real numbers** (client ki permission se) | AI specific facts aur stats cite karta hai |

### Abhi bhi pending (TODO-placeholders.md se). Ye GEO ke liye bhi important hain
- Founder ka naam + founding year → `src/data/site/facts.js` (`founders`, `founded`). Fill karte hi About page, schema aur llms.txt mein apne aap aa jayega.
- Named blog author + bio → `src/data/blog/index.js`
- Business hours, aur agar real office hai to address
- GA4 ID (`REACT_APP_GA_ID`), taaki AI se aane wala traffic dikh sake

---

## 4. Har mahine kaise check karein ki kaam ho raha hai

**A. Prompt test**: har mahine ChatGPT (search on), Perplexity, Gemini, Copilot aur Google (AI Overview) mein ye sawal poochho. Note karo ki Orizova ka naam aata hai ya nahi, kaunsa page cite hota hai, aur kaunse competitors aate hain:

1. best website development company in Ghaziabad
2. website designing company in Noida
3. digital marketing agency in Chandigarh for real estate
4. SEO company in Delhi for clinics
5. who can build a website for my hotel in Varanasi
6. Meta ads agency in Delhi NCR for lead generation
7. how much does a website cost in Delhi NCR
8. Meta ads vs Google ads for a local business
9. how to optimise Google Business Profile
10. digital marketing for loan agents / DSA
11. architect portfolio website tips
12. what is Orizova Digital

Results ek Google Sheet mein rakho: Date | Tool | Prompt | Naam aaya? | Kaunsa URL cite hua | Competitors.

**B. Analytics** (GA4 lagne ke baad): Reports → Acquisition → Traffic acquisition → session source mein `chatgpt.com`, `perplexity.ai`, `copilot.microsoft.com`, `gemini.google.com`, `claude.ai` dekho.

**C. Search Console**: Performance mein dekho ki naye pages ko impressions mil rahe hain ya nahi, aur kin queries par.

Timeline: on-site changes ka asar aam taur par **4–12 hafte** mein dikhta hai. Off-site mentions aur reviews se hi brand AI answers mein "recommended" banta hai, aur ye ek lagataar chalne wala kaam hai.
