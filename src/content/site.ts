/**
 * ─────────────────────────────────────────────────────────────
 *  SITE CONTENT — edit this file to change text, links and SEO.
 *  Projects live in ./projects.ts. Images live in /src/assets.
 * ─────────────────────────────────────────────────────────────
 */

export type SocialLink = {
  label: string;
  /** Leave empty ('') to hide the link entirely. */
  url: string;
  /** true = temporary demo link. Replace with the real profile before launch. */
  demo?: boolean;
};

export const site = {
  name: 'Artemis Wang',
  /** Used in the browser tab and search results. */
  title: 'Artemis Wang — Growth, Creator Partnerships & Brand Building',
  description:
    'Artemis Wang is a growth and creator-partnerships strategist and founder working across consumer technology, beauty, fashion, cross-border e-commerce and art business.',
  location: 'New York, NY',
  /** Shown in the footer. */
  copyrightYear: new Date().getFullYear(),

  hero: {
    /** Discipline line under the name. */
    eyebrow: 'Growth Strategy · Creator Partnerships · Brand Building',
    /*
     * Statement options considered:
     *   A. "Where culture meets commerce."
     *   B. "Building communities around things worth wanting."
     *   C. "From creator ecosystems to collectible objects."
     *   D. "Strategy, with a curator’s eye."   ← chosen
     * Wrap a word in *asterisks* to set it in italic accent.
     */
    headline: 'Strategy, with a curator’s *eye*.',
    intro:
      'I build creator programs, communities and brands where consumer technology, beauty, fashion and culture meet — from 0-to-1 AI and live-audio launches at Hello Group to two cross-border businesses of my own. Now based in New York, I’m bringing that work into art business and cultural design.',
    /** Small vertical caption beside the portrait. */
    caption: 'Beijing — New York',
    portraitAlt: 'Portrait of Artemis Wang in a navy ribbed top against a pale studio backdrop',
  },

  about: {
    heading: 'Commercial rigor, *cultural fluency*.',
    /** Opening statement, set large. */
    lead: 'Nearly a decade of building creator programs, communities and businesses — across consumer technology, fashion and beauty, and now art and culture.',
    /** The story in three chapters. */
    chapters: [
      {
        label: 'Consumer technology',
        body: 'At Hello Group (Nasdaq: MOMO) I worked on 0-to-1 consumer launches — the AI face, hair and makeup products ZAO and Moxie at Momo, and the live-audio Voice Rooms feature at Tantan. I built the creator programs, partner contracting, incentive structures and payment processes behind their growth, and led intern teams taking them into Japan, South Korea, Vietnam, Taiwan, Hong Kong and Germany.',
      },
      {
        label: 'Entrepreneurship',
        body: 'Alongside that path runs a founder’s one. Since 2017 I have run Missingcity, an online boutique introducing emerging international designers to global consumers. In 2023 I launched Esoteric Studios, bringing Korean professional salon and skincare brands to Chinese-speaking customers. Both grew on curation, trusted relationships and community rather than paid reach.',
      },
      {
        label: 'Art & culture',
        body: 'I have also worked inside the cultural sector — at No Space Gallery in Beijing, and on “Beauty and Sharing,” an international cultural exchange program co-produced by CCTV and the Ministry of Culture and Tourism. Today I am studying for a Master in Art Business in New York and developing Baoxiang, a collectible-objects concept drawn from Chinese zodiac symbolism and Five Elements philosophy.',
      },
    ],
    /** "What I bring" columns. */
    capabilities: [
      {
        title: 'Growth & Creators',
        items: [
          'Creator & influencer marketing',
          'Creator commercialization',
          'Growth & user acquisition',
          'Community growth & retention',
        ],
      },
      {
        title: 'Brand & Commerce',
        items: [
          'Brand & creator partnerships',
          'Cross-border e-commerce',
          'Merchandising & curation',
          'Supplier partnerships',
        ],
      },
      {
        title: 'Insight & Operations',
        items: [
          'Consumer insights & market research',
          'Go-to-market & product operations',
          'Localization & international expansion',
          'AI-output evaluation & training data',
          'Content strategy · Trust & safety',
        ],
      },
    ],
    languages: [
      { name: 'Mandarin Chinese', level: 'Native' },
      { name: 'English', level: 'Fluent' },
      { name: 'Korean', level: 'Conversational' },
    ],
    platforms: ['Taobao', 'Xiaohongshu (RED)', 'WeChat'],
    tools: ['ChatGPT & other generative AI tools', 'Analytics dashboards', 'Microsoft Office', 'Canva', 'Figma', 'CapCut'],
  },

  /** Career timeline (newest first). */
  timeline: [
    { years: '2025 — Now', title: 'Baoxiang (The Eternal Path)', role: 'Founder & Creative Director', note: 'Cultural design project · in development' },
    { years: '2023 — Now', title: 'Esoteric Studios', role: 'Founder & Brand Director', note: 'Cross-border professional beauty' },
    { years: '2023', title: 'No Space Gallery', role: 'Exhibition Assistant Intern (part-time)', note: 'Beijing · spring 2023' },
    { years: '2022 — 2023', title: 'Communication University of China', role: 'Project Assistant, School of Drama and Film', note: 'Beijing · cultural exchange programs' },
    { years: '2021 — 2022', title: 'Tantan (Hello Group)', role: 'Operations Lead, Voice Communities', note: 'Beijing' },
    { years: '2020 — 2021', title: 'Momo Inc. (Hello Group)', role: 'Senior Product Operations, AI Products', note: 'Beijing' },
    { years: '2017 — Now', title: 'Missingcity', role: 'Founder & Curator', note: 'Online designer boutique' },
  ],

  education: {
    /*
     * From the latest résumé (Artemis_Wang Resume.pdf). The school is not named
     * there — add it here once confirmed. Earlier drafts listed UIBE, Beijing.
     */
    school: '',
    location: 'New York, NY',
    degree: 'Master',
    field: 'Art Business',
    period: 'Aug 2026 – 2027',
    status: 'In progress',
    coursework: [
      'Art History through Contemporary Art',
      'Art Market Research & Valuation',
      'Art Law',
      'Art Finance',
      'Collection Management & Logistics',
    ],
  },

  /** Shorter roles shown on the résumé page and timeline. */
  otherExperience: [
    {
      org: 'No Space Gallery',
      role: 'Exhibition Assistant Intern (part-time)',
      period: 'Spring 2023',
      location: 'Beijing',
      highlights: [
        'Supported curatorial staff on exhibition installation, artist outreach and public events.',
        'Edited promotional materials and coordinated the launch of the gallery’s online exhibition.',
      ],
    },
    {
      org: 'Communication University of China, School of Drama and Film',
      role: 'Project Assistant to Dr. Wang Naliu',
      period: '2022 – 2023',
      location: 'Beijing',
      highlights: [
        'Supported “Beauty and Sharing,” an international cultural exchange program co-produced by CCTV and the Ministry of Culture and Tourism, and the Second China Musical Creation Forum exhibition.',
        'Handled contracts, publicity and fundraising support; ran audience research that informed localization for international audiences.',
      ],
    },
  ],

  resume: {
    /**
     * Path to the approved PDF inside /public. Leave empty to hide the download buttons.
     * Note: the PDF itself includes a phone number.
     */
    pdf: '/resume/Artemis-Wang-Resume.pdf',
    headline: 'Partner Programs · Community Operations · AI Product Operations',
    summary:
      'Partner and community operations professional who has built creator programs, launched consumer AI products and run cross-border businesses — from recruitment, onboarding, incentives and revenue sharing to team leadership and research-led iteration. Experience spans 500+ creator and influencer partnerships, international localization and hands-on AI quality evaluation.',
  },

  contact: {
    heading: 'Let’s *talk*.',
    blurb:
      'Open to roles and collaborations in growth, creator partnerships, brand strategy and art business — in New York and across markets.',
    /** Public contact email (shown in Contact and on the résumé page). */
    email: 'Artemisnewyork@outlook.com',
  },

  /**
   * Social & business links.
   *  - url: ''      → hidden
   *  - demo: true   → PLACEHOLDER. Shown with a visible "Placeholder" tag and kept out
   *                   of search-engine structured data. Replace the url with Artemis's
   *                   real profile and delete `demo: true` to publish it as hers.
   */
  socials: [
    { label: 'LinkedIn', url: 'https://www.linkedin.com/', demo: true }, // PLACEHOLDER — replace with real profile URL
    { label: 'Instagram', url: 'https://www.instagram.com/', demo: true }, // PLACEHOLDER — replace with real profile URL
    { label: 'Xiaohongshu / RED', url: 'https://www.xiaohongshu.com/', demo: true }, // PLACEHOLDER — replace with real profile URL
    { label: 'WeChat', url: '' },
    { label: 'Missingcity', url: '' },
    { label: 'Esoteric Studios', url: '' },
  ] satisfies SocialLink[],
};

/** Featured numbers for the Impact section. Every figure is taken from the résumé. */
export const impact = [
  {
    value: '500+',
    label: 'creator and influencer partnerships managed',
    source: 'Momo · AI Products, 2020–21',
  },
  {
    value: '67%',
    label: 'increase in Voice Rooms daily active users',
    source: 'Tantan · following her redesign of partner incentives and community programs',
  },
  {
    value: '45%',
    label: 'increase in daily active users',
    source: 'Momo · team result her creator partnerships contributed to',
  },
  {
    value: 'RMB 700K+',
    label: 'organic revenue, with no paid advertising',
    source: 'Missingcity · as founder, over two years on Taobao',
  },
  {
    value: '43,000+',
    label: 'community followers',
    source: 'Missingcity · across Taobao, Xiaohongshu and WeChat',
  },
  {
    value: '65%+',
    label: 'repeat-purchase rate',
    source: 'Missingcity · as founder',
  },
];
