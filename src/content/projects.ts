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
    org: 'Tan Tan',
    title: 'Voice Communities & Creator Growth',
    discipline: 'Consumer Tech · Live Audio',
    role: 'Operations Lead, Voice Communities',
    period: 'Aug 2021 – Aug 2022',
    location: 'Beijing',
    status: 'completed',
    tone: 'ink',
    summary:
      'Led the launch and growth of live-audio communities, building creator partnerships, monetization programs, and international operations across multiple markets.',
    highlights: [
      'Built the creator operating model end to end and the platform’s first creator commercialization framework.',
      'Single-handedly designed domestic and international partner payment and compliance processes, including a third-party provider to pay partners in Taiwan.',
      'Redesigned partner incentives and community programs; the feature’s daily active users rose 67%.',
      'Rebuilt creator onboarding through research and controlled experiments; first-week room launches rose 600%.',
      'Led a team of interns on expansion to Taiwan, Hong Kong and Germany.',
    ],
    overview:
      'Voice Rooms was a new live-audio social feature inside Tan Tan, part of Hello Group, built around engagement and monetization. As operations lead, Artemis took it from concept to launch, built how creators were recruited, onboarded, rewarded and paid, and led its expansion outside mainland China.',
    roleDetail: 'Operations Lead, Voice Communities. Worked across product, Finance, Legal and Tax; led a team of interns on international expansion.',
    contributions: [
      {
        heading: 'Product launch & content strategy',
        body: 'Led product and content operations for Voice Rooms from concept to launch. Ran the pre-launch market and competitor analysis, helped define feature requirements, and set the content review standards and moderation keyword lists used by third-party moderators. After launch, developed room themes, conversation topics and interactive formats to encourage participation and repeat visits, and brought host and user feedback to product managers to refine the live-audio experience.',
      },
      {
        heading: 'Creator ecosystem & international expansion',
        body: 'Led a team of interns on expansion into Taiwan, Hong Kong and Germany — market research, local culture, competitor analysis and cold-start content. Recruited overseas hosts through talent agencies, MCNs, influencers, micro-creators and first-time hosts, and coordinated creator acquisition and the international partnerships behind it.',
      },
      {
        heading: 'Monetization & partner operations',
        body: 'Built the platform’s first creator monetization program: virtual gifting campaigns, agency revenue-sharing rates and performance incentives. Built domestic and international partner payout workflows, coordinating with Finance, Legal and Tax on contracts, compliance documentation, invoicing, reconciliation and disbursement, and led the integration of a third-party payment provider to launch partner payouts in Taiwan.',
      },
      {
        heading: 'Growth & measurable impact',
        body: 'Redesigned creator incentives and community programs, and the feature’s daily active users rose 67%. Rebuilt creator onboarding through user research and controlled experiments; the number of rooms creators launched in their first week rose 600%.',
      },
    ],
    results: [
      { value: '+67%', label: 'daily active users for the Voice Rooms feature', note: 'After she redesigned creator incentives and community programs.' },
      { value: '+600%', label: 'rooms launched by creators in their first week', note: 'After she rebuilt creator onboarding through user research and controlled experiments.' },
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
    logoBackground: '#704d4b',
    images: {
      cover: { alt: 'Illustration of the twelve Chinese zodiac animals around a dragon, Baoxiang brand artwork' },
      '01': { alt: 'White tiger statue candle on its Eternal Path packaging, labeled Animal Statue Candle, soy wax' },
      '02': { alt: 'Animated monkey character from the zodiac illustration' },
      '03': { alt: 'Animated rabbit character from the zodiac illustration' },
    },
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
