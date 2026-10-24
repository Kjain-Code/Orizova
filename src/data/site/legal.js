// Privacy policy & terms. Plain-language templates based on how this website
// actually works (contact form, WhatsApp, Meta Pixel, analytics).
// {{TODO: have these reviewed by a lawyer and add the registered business name/address}}

const UPDATED = '2026-10-01';

const legal = {
  privacy: {
    path: '/privacy-policy',
    title: 'Privacy Policy',
    updated: UPDATED,
    sections: [
      { h2: 'Who we are', paras: ['This website is operated by Orizova Digital, a web development and digital marketing agency serving Delhi NCR, Chandigarh and clients across India. You can contact us using the details on our [contact page](/contact).'] },
      { h2: 'Information we collect', paras: ['We collect only the information needed to respond to you and to understand how our website is used:'], bullets: [
        '**Details you share with us** — your name, email, phone number, the service you are interested in and your message, when you use our contact form, WhatsApp, phone or email.',
        '**Usage data** — pages visited, device and browser type, approximate location and how you reached our site, collected through cookies and similar technologies by analytics and advertising tools.',
      ] },
      { h2: 'How we use your information', bullets: [
        'To reply to your enquiry and provide quotes or services you request',
        'To communicate about an ongoing project',
        'To understand and improve our website and marketing',
        'To measure and improve our advertising, for example through the Meta Pixel',
        'To meet legal and accounting obligations',
      ], after: ['We do not sell your personal information.'] },
      { h2: 'Cookies and third-party tools', paras: ['Our website uses the Meta Pixel and may use Google Analytics and Google Search Console. These services may set cookies or collect information about your visit under their own privacy policies. You can block or delete cookies in your browser settings, and adjust ad preferences in your Meta and Google accounts.'] },
      { h2: 'Sharing', paras: ['We share information only with service providers who help us operate (for example email, hosting, form-handling, analytics and advertising platforms), and where required by law. These providers may process data outside India.'] },
      { h2: 'How long we keep data', paras: ['We keep enquiry details for as long as needed to respond and maintain business records, and delete or anonymise them when no longer required.'] },
      { h2: 'Your rights', paras: ['Under India’s Digital Personal Data Protection Act, 2023 and other applicable laws, you may ask to access, correct or delete your personal data, or withdraw consent for its use. Contact us and we will respond within a reasonable time.'] },
      { h2: 'Security', paras: ['We use reasonable technical and organisational measures to protect your information. No method of transmission over the internet is completely secure.'] },
      { h2: 'Changes to this policy', paras: ['We may update this policy from time to time. The date at the top shows when it was last changed.'] },
    ],
  },
  terms: {
    path: '/terms',
    title: 'Terms of Use',
    updated: UPDATED,
    sections: [
      { h2: 'About these terms', paras: ['These terms apply to your use of this website, operated by Orizova Digital. Specific projects are governed by the proposal or agreement we share with each client, which takes priority over these terms.'] },
      { h2: 'Use of the website', bullets: [
        'You may browse and share our content for personal, non-commercial purposes with a link back to the original page.',
        'You must not misuse the website, attempt to break its security, or copy substantial parts of its content without permission.',
      ] },
      { h2: 'Information on this website', paras: ['Our articles and pages are general information, not legal, medical or financial advice. We try to keep them accurate and up to date but do not guarantee completeness. Marketing results depend on many factors outside our control; nothing on this website is a guarantee of rankings, leads or sales.'] },
      { h2: 'Quotes and services', paras: ['Prices and scope are confirmed only in a written quote or agreement. Timelines depend on timely content, feedback and approvals from the client.'] },
      { h2: 'Intellectual property', paras: ['The Orizova Digital name, logo, website design and original content belong to us. Client names, logos and project images shown in our portfolio belong to their respective owners.'] },
      { h2: 'Third-party links', paras: ['Links to other websites, including client sites, are provided for convenience. We are not responsible for their content or practices.'] },
      { h2: 'Limitation of liability', paras: ['To the extent permitted by law, we are not liable for any indirect or consequential loss arising from use of this website.'] },
      { h2: 'Governing law', paras: ['These terms are governed by the laws of India.'] }, // {{TODO: add jurisdiction city after legal review}}
      { h2: 'Contact', paras: ['Questions about these terms? Reach us via the [contact page](/contact).'] },
    ],
  },
};

export default legal;
