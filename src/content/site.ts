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
    eyebrow: 'Growth Strategy · Creator Partnerships · Marketing · Media & Content · Brand Building · Art',
    /*
     * Statement options considered:
     *   A. "Where culture meets commerce."
     *   B. "Building communities around things worth wanting."
     *   C. "From creator ecosystems to collectible objects."
     *   D. "Strategy, with a curator’s eye."   ← chosen
     * Wrap a word in *asterisks* to set it in italic accent.
     */
    headline: 'Strategy, with a curator’s *eye*.',
    /** Positioning line under the name (not a job title). */
    role: 'Growth, Creator Partnerships & Brand Building',
    /** Small figures under the hero buttons. Every one is documented in the résumé. */
    meta: [
      { value: '6', label: 'International launch markets' },
      { value: '2', label: 'Businesses founded' },
      { value: '43K+', label: 'Missingcity community' },
      { value: '3', label: 'Working languages' },
    ],
    intro:
      'I build creator programs, communities and brands where consumer technology, beauty, fashion and culture meet — from 0-to-1 AI and live-audio launches at Hello Group to two cross-border businesses of my own. Now based in New York, I’m bringing that work into art business and cultural design.',
    /** Small vertical caption beside the portrait. */
    caption: 'Beijing — Seoul — New York',
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
        body: 'At Hello Group (Nasdaq: MOMO) I worked on 0-to-1 consumer launches — the AI face, hair and makeup products ZAO and Moxie at Momo, and the live-audio Voice Rooms feature at Tan Tan. I built the creator programs, partner contracting, incentive structures and payment processes behind their growth, and led intern teams taking them into Japan, South Korea, Vietnam, Taiwan, Hong Kong and Germany.',
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

  /**
   * Career timeline (newest first). `slug` pulls dates and bullets from projects.ts;
   * `other` points at an entry in otherExperience below.
   */
  timeline: [
    { years: '2025 — Now', slug: 'baoxiang', title: 'Baoxiang (The Eternal Path)', role: 'Founder & Creative Director', note: 'Cultural design project · in development' },
    { years: '2023 — Now', slug: 'esoteric-studios', title: 'Esoteric Studios', role: 'Founder & Brand Director', note: 'Cross-border professional beauty' },
    { years: '2023', other: 0, title: 'No Space Gallery', role: 'Exhibition Assistant Intern (part-time)', note: 'Beijing · spring 2023' },
    { years: '2022 — 2023', other: 1, title: 'Communication University of China', role: 'Project Assistant, School of Drama and Film', note: 'Beijing · cultural exchange programs' },
    { years: '2021 — 2022', slug: 'tantan', title: 'Tan Tan (Hello Group)', role: 'Operations Lead, Voice Communities', note: 'Beijing' },
    { years: '2020 — 2021', slug: 'momo', title: 'Momo Inc. (Hello Group)', role: 'Senior Product Operations, AI Products', note: 'Beijing' },
    { years: '2017 — Now', slug: 'missingcity', title: 'Missingcity', role: 'Founder & Curator', note: 'Online designer boutique' },
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

/**
 * Headline figures in the dark band under the hero. Each names its company and
 * product so figures from different roles are never read as one result.
 */
export const stats = [
  { value: '+67%', label: 'Daily active users', source: 'Tan Tan · Voice Rooms' },
  { value: '+600%', label: 'First-week creator room launches', source: 'Tan Tan · Voice Rooms' },
  { value: '20,000+', label: 'AI creations', source: 'Momo · Moxie creator program' },
  { value: '500+', label: 'Creator & influencer partnerships', source: 'Momo · Moxie and ZAO' },
];

/** "Areas of Expertise" cards. Examples are documented results; `slug` links the related case study. */
export const expertise = [
  {
    icon: 'users',
    title: 'Creator Partnerships & Community Growth',
    tag: 'Partnerships',
    body: 'Recruiting, onboarding, rewarding and retaining creators — and the communities that form around them.',
    examples: [
      'Managed 500+ creator and influencer partnerships across Moxie and ZAO at Momo',
      'Redesigned creator incentives and community programs for Tan Tan Voice Rooms; daily active users rose 67%',
      'Built a 43,000+ follower community for Missingcity across Taobao, RED and WeChat',
    ],
    slug: 'tantan',
  },
  {
    icon: 'trend',
    title: 'Growth Marketing & Campaign Strategy',
    tag: 'Growth',
    body: 'Campaigns and programs designed around a measurable growth outcome.',
    examples: [
      'Campaigns across Moxie and ZAO contributed to +45% daily and +200% total active users (team outcomes)',
      'A festival-makeup campaign reached 35% next-day retention among participants',
      'Grew Missingcity to RMB 700K+ in Taobao revenue without paid advertising',
    ],
    slug: 'momo',
  },
  {
    icon: 'launch',
    title: 'Product Operations & Launches',
    tag: 'Operations',
    body: 'Taking products from concept to launch, then iterating from creator feedback and usage data.',
    examples: [
      'Led Moxie’s product operations from concept through launch',
      'Led Voice Rooms product and content operations from concept to launch',
      'Turned feedback into three Moxie iterations; feature engagement and content-save rates rose 40%',
    ],
    slug: 'momo',
  },
  {
    icon: 'content',
    title: 'Content, Media & Brand Strategy',
    tag: 'Content & Brand',
    body: 'Content and brand storytelling that educates, builds trust and keeps people coming back.',
    examples: [
      'Grew Esoteric Studios to 27,000+ followers and 100,000+ content views through educational content',
      'Developed room themes, conversation topics and interactive formats for Voice Rooms',
      'Set content review standards and moderation keyword lists for Voice Rooms',
    ],
    slug: 'esoteric-studios',
  },
  {
    icon: 'globe',
    title: 'International Expansion & Localization',
    tag: 'Global',
    body: 'Market research, localized launch content and local creator recruitment.',
    examples: [
      'Led intern teams on expansion into Japan, South Korea and Vietnam (Momo)',
      'Led intern teams on expansion into Taiwan, Hong Kong and Germany (Tan Tan)',
      'Integrated a third-party payment provider to launch partner payouts in Taiwan',
    ],
    slug: 'tantan',
  },
  {
    icon: 'culture',
    title: 'Creative & Cultural Project Operations',
    tag: 'Culture',
    body: 'Exhibitions, cultural programs and collectible-object design.',
    examples: [
      'Developing Baoxiang, beginning with a 12-piece zodiac candle collection',
      'Supported “Beauty and Sharing,” an international cultural exchange program co-produced by CCTV and the Ministry of Culture and Tourism',
      'Exhibition installation, artist outreach and events at No Space Gallery',
    ],
    slug: 'baoxiang',
  },
] as const;
