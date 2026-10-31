/**
 * ─────────────────────────────────────────────────────────────
 *  PROJECTS — each entry becomes a case study at /work/<slug>/
 *
 *  Images: drop files into  src/assets/projects/<slug>/
 *    cover.jpg            → cover image (gallery + top of case study)
 *    01.jpg, 02.jpg, …    → case-study gallery, in filename order
 *  Add alt text / captions below under `images`, keyed by file name
 *  without extension. Only use real, authorized images of her work.
 * ─────────────────────────────────────────────────────────────
 */

export type ProjectStatus = 'completed' | 'ongoing' | 'in-development';

export type Metric = {
  value: string;
  label: string;
  /** How the figure relates to Artemis's work. Shown under the number. */
  note?: string;
};

export type Project = {
  slug: string;
  org: string;
  title: string;
  discipline: string;
  role: string;
  period: string;
  location?: string;
  status: ProjectStatus;
  /** One line for the Selected Work index. */
  summary: string;
  /** Concise bullets for the résumé page. */
  highlights: string[];
  overview: string;
  /** Only what the résumé documents. Omit when unknown. */
  context?: string;
  roleDetail: string;
  contributions: { heading: string; body: string }[];
  results: Metric[];
  /** Shown instead of results for projects without outcomes yet. */
  nextSteps?: string[];
  /**
   * Background color of the logo file in src/assets/logos/<slug>.png, so the
   * logo sits on its own color instead of a mismatched box. Defaults to white.
   */
  logoBackground?: string;
  /** Muted tone used for the typographic cover when no image exists. */
  tone: 'clay' | 'sage' | 'stone' | 'blush' | 'ink';
  images?: Record<string, { alt: string; caption?: string }>;
};

export const statusLabel: Record<ProjectStatus, string> = {
  completed: 'Completed',
  ongoing: 'Ongoing venture',
  'in-development': 'In development',
};

export const projects: Project[] = [
  {
    slug: 'tantan',
    org: 'Tantan',
    title: 'Voice Communities & Creator Growth',
    discipline: 'Consumer Tech · Live Audio',
    role: 'Operations Lead, Voice Communities',
    period: 'Aug 2021 – Aug 2022',
    location: 'Beijing',
    status: 'completed',
    tone: 'ink',
    summary:
      'Building the creator operating model for Voice Rooms, a new live-audio feature — from incentives and partner payments to expansion in three markets.',
    highlights: [
      'Built the creator operating model end to end and the platform’s first creator commercialization framework.',
      'Single-handedly designed domestic and international partner payment and compliance processes, including a third-party provider to pay partners in Taiwan.',
      'Redesigned partner incentives and community programs; the feature’s daily active users rose 67%.',
      'Rebuilt creator onboarding through research and controlled experiments; first-week room launches rose 600%.',
      'Led a team of interns on expansion to Taiwan, Hong Kong and Germany.',
    ],
    overview:
      'Voice Rooms was a new live-audio social feature inside Tantan, part of Hello Group, built around engagement and monetization. As operations lead, Artemis built how creators were sourced, onboarded, evaluated, rewarded and paid — and led the feature’s expansion outside mainland China.',
    roleDetail: 'Operations Lead, Voice Communities. Led a team of interns on international expansion.',
    contributions: [
      {
        heading: 'Creator operating model',
        body: 'Built the model end to end — sourcing, recruitment, onboarding, evaluation, partnership terms and revenue sharing — and the platform’s first creator commercialization framework for virtual gifting, rewards and partner compensation.',
      },
      {
        heading: 'Partner payments & compliance',
        body: 'Designed and launched domestic and international partner payment and compliance processes single-handedly, including integrating a third-party payment provider to pay partners in Taiwan.',
      },
      {
        heading: 'Incentives & community programs',
        body: 'Redesigned partner incentives and community programs to bring creators back to host.',
      },
      {
        heading: 'Onboarding, rebuilt from research',
        body: 'Rebuilt creator onboarding using user research and controlled experiments, focused on getting new hosts to launch their first rooms.',
      },
      {
        heading: 'Expansion to three markets',
        body: 'Led a team of interns on expansion to Taiwan, Hong Kong and Germany: market research, local culture, competitor analysis, cold-start content, and creator recruitment with agencies, influencers, MCNs and content partners.',
      },
      {
        heading: 'Feedback loops into product',
        body: 'Set up recurring creator and core-user feedback programs and brought the insights to product teams, informing usability, interface and creator-experience improvements.',
      },
    ],
    results: [
      { value: '67%', label: 'increase in the feature’s daily active users', note: 'Following the redesign of partner incentives and community programs.' },
      { value: '600%', label: 'increase in first-week room launches', note: 'After onboarding was rebuilt through research and controlled experiments.' },
      { value: '3', label: 'new markets', note: 'Taiwan, Hong Kong and Germany.' },
    ],
  },
  {
    slug: 'momo',
    org: 'Momo',
    title: 'AI Beauty Products & Creator Partnerships',
    discipline: 'Consumer AI · Beauty',
    role: 'Senior Product Operations, AI Products (Deep Lab)',
    period: 'Apr 2020 – Jun 2021',
    location: 'Beijing',
    status: 'completed',
    tone: 'blush',
    summary:
      'Taking the consumer AI products ZAO and Moxie from concept to launch — and building the creator partnerships, data and quality systems behind them.',
    highlights: [
      'Managed 500+ creator and influencer partnerships for ZAO and Moxie; daily active users rose 45% and active users 200%.',
      'Built partner contracting with Legal and Finance, owning signing for MCN agencies and individual creators.',
      'Led operations for ZAO and Moxie from concept through launch, plus an intern team on expansion to Japan, South Korea and Vietnam.',
      'Built a beauty creator program that generated 20,000+ AI creations.',
      'Organized real-model shoots (~500 participants, 3,000 samples in one week) and built 40,000+ image datasets, cutting data-preparation time by about 40%.',
    ],
    overview:
      'At Momo’s Deep Lab, Artemis led operations for ZAO and Moxie — consumer AI products for virtual face, hair and makeup transformation — from concept through launch, building the creator partnerships that drove adoption and the data and quality processes behind the AI.',
    context: 'Momo Inc. (now Hello Group, Nasdaq: MOMO). ZAO and Moxie were 0-to-1 consumer AI launches.',
    roleDetail:
      'Senior Product Operations, AI Products (Deep Lab). Operations owner between creators, Legal and Finance, and Deep Lab engineers; led a team of interns on overseas expansion.',
    contributions: [
      {
        heading: 'Creator & influencer partnerships',
        body: 'Managed 500+ creator and influencer partnerships, and trained creators on product features and usage.',
      },
      {
        heading: 'Partner contracting',
        body: 'Built partner contracting with Legal and Finance — contract templates, signing workflows and payment approvals — and owned signing for both MCN agencies and individual creators.',
      },
      {
        heading: 'Launch & overseas expansion',
        body: 'Led operations for ZAO and Moxie from concept through launch, and led a team of interns on expansion to Japan, South Korea and Vietnam: market research, consumer preferences, competitor analysis, local culture and religious considerations, localized marketing, cold-start content and creator recruitment.',
      },
      {
        heading: 'Feedback into product',
        body: 'Relayed product requirements and improvement recommendations to Deep Lab engineers, and turned user feedback into three product iterations.',
      },
      {
        heading: 'Beauty creator program',
        body: 'Built a beauty creator program from launch that generated 20,000+ AI creations.',
      },
      {
        heading: 'Real-model shoots & training data',
        body: 'Organized real-model shoots with a leading Beijing salon partner — about 500 participants and 3,000 samples in one week — and built datasets of 40,000+ images.',
      },
      {
        heading: 'AI-output quality',
        body: 'Helped define AI-output quality standards and proposed an internal batch-testing tool to review results by style and angle and add approved outputs to the content library in one click.',
      },
      {
        heading: 'Trust & safety',
        body: 'Co-developed content standards and community guidelines with the corporate security and risk-control team to support responsible growth.',
      },
    ],
    results: [
      { value: '45%', label: 'increase in daily active users', note: 'Team outcome to which her 500+ creator partnerships contributed.' },
      { value: '200%', label: 'increase in active users', note: 'Team outcome to which her 500+ creator partnerships contributed.' },
      { value: '20,000+', label: 'AI creations generated', note: 'Through the beauty creator program she built.' },
      { value: '35%', label: 'next-day retention on one festival-makeup topic', note: 'A single topic within the beauty creator program.' },
      { value: '40%', label: 'lift in feature engagement and content-save rates', note: 'Across three feedback-driven product iterations.' },
      { value: '~40%', label: 'less data-preparation time', note: 'Building datasets of 40,000+ images.' },
    ],
  },
  {
    slug: 'missingcity',
    org: 'Missingcity',
    title: 'Independent Designer Boutique',
    discipline: 'Fashion · Curation · E-Commerce',
    role: 'Founder & Curator',
    period: '2017 – Present',
    status: 'ongoing',
    tone: 'clay',
    summary:
      'An online boutique introducing emerging international designers to global consumers — grown entirely without paid advertising.',
    highlights: [
      'Generated RMB 700K+ in Taobao revenue over two years without paid advertising.',
      'Built a 43,000+ follower community across Taobao, RED and WeChat with a 65%+ repeat-purchase rate.',
      'Manages designer relationships, selection and international shipping.'
    ],
    overview:
      'Missingcity is an online boutique Artemis founded to introduce emerging international designers to global consumers. It grew through curation, direct designer relationships and community — not paid media.',
    roleDetail:
      'Founder & Curator. Responsible for designer and supplier relationships, curation, cross-border sourcing and fulfillment, and community.',
    contributions: [
      {
        heading: 'Direct designer relationships',
        body: 'Established direct relationships with international designers and suppliers to secure early-access releases, limited selections and customer benefits.',
      },
      {
        heading: 'Community across three platforms',
        body: 'Built a loyal following across Taobao, Xiaohongshu (RED) and WeChat.',
      },
      {
        heading: 'Cross-border operations',
        body: 'Developed sourcing and fulfillment processes that shortened international delivery times and improved the customer experience.',
      },
    ],
    results: [
      { value: 'RMB 700K+', label: 'Taobao revenue over two years', note: 'Generated without paid advertising.' },
      { value: '43,000+', label: 'community followers', note: 'Across Taobao, Xiaohongshu (RED) and WeChat.' },
      { value: '65%+', label: 'repeat-purchase rate' },
    ],
  },
  {
    slug: 'esoteric-studios',
    logoBackground: '#baa46a',
    org: 'Esoteric Studios',
    title: 'Cross-Border Professional Beauty',
    discipline: 'Beauty · Cross-Border E-Commerce',
    role: 'Founder & Brand Director',
    period: '2023 – Present',
    status: 'ongoing',
    tone: 'sage',
    summary:
      'Bringing Korean professional salon and skincare brands to Chinese-speaking consumers, with a digital consultation model.',
    highlights: [
      'Introduced Korean professional salon and skincare brands to Chinese-speaking consumers.',
      'Grew social communities to 27,000+ followers and 100,000+ content views.',
      'Recorded product tutorials with Korean salon owners and turned them into SOPs for customers.'
    ],
    overview:
      'Esoteric Studios is a cross-border business introducing Korean professional salon and skincare brands to Chinese-speaking consumers. Artemis oversees the brand end to end: suppliers, curation, logistics, positioning, content and e-commerce.',
    roleDetail:
      'Founder & Brand Director, overseeing supplier relationships, product curation, logistics, positioning, content and e-commerce.',
    contributions: [
      {
        heading: 'A digital consultation model',
        body: 'Created a model connecting customers with Korean salon professionals — translating specialized, in-person services into an online experience.',
      },
      {
        heading: 'Salon partnerships & SOPs',
        body: 'Built trusted relationships with salon owners in Korea, recording product tutorials not available online and turning them into standard operating procedures for customers.',
      },
      {
        heading: 'Education-led content',
        body: 'Grew social communities through educational content and brand storytelling.',
      },
      {
        heading: 'Research-driven assortment',
        body: 'Uses ongoing consumer research to refine assortment, brand communication, conversion and retention.',
      },
    ],
    results: [
      { value: '27,000+', label: 'social community followers' },
      { value: '100,000+', label: 'content views', note: 'Through educational content and brand storytelling.' },
    ],
  },
  {
    slug: 'baoxiang',
    org: 'Baoxiang',
    title: 'The Eternal Path — Cultural Design Project',
    discipline: 'Cultural Design · Collectible Objects',
    role: 'Founder & Creative Director',
    period: '2025 – Present',
    status: 'in-development',
    tone: 'stone',
    summary:
      'A contemporary collectible-objects concept drawn from Chinese zodiac symbolism and Five Elements philosophy.',
    highlights: [
      'Developing a collectible-objects concept rooted in Chinese zodiac symbolism and Five Elements philosophy, starting with a 12-piece zodiac candle collection.',
      'Exploring collaborations with contemporary Asian artists.'
    ],
    overview:
      'Baoxiang (The Eternal Path) is a cultural design project in development: a contemporary collectible-objects concept inspired by Chinese zodiac symbolism and Five Elements philosophy.',
    roleDetail: 'Founder & Creative Director.',
    contributions: [
      {
        heading: 'Concept development',
        body: 'Developing the collection concept, beginning with a 12-piece zodiac candle collection.',
      },
      {
        heading: 'Artist collaborations',
        body: 'Exploring collaborations with contemporary Asian artists.',
      },
      {
        heading: 'Cultural translation research',
        body: 'Researching how cultural narratives and symbolic objects can be introduced to international audiences.',
      },
    ],
    results: [],
    nextSteps: [
      'First collection: 12 zodiac candles, one for each sign',
      'Collaborations with contemporary Asian artists (being explored)',
      'Positioning for international audiences (in research)',
    ],
  },
];
