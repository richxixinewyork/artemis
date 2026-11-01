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
  /** Employer, when the project is named after a product rather than the company. */
  company?: string;
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
  /** Public app-store listing for the product, verified before adding. */
  app?: { name: string; url: string; source: string };
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
    org: 'Moxie / Momo',
    title: 'AI Beauty & Product Growth',
    discipline: 'Consumer AI · Beauty',
    role: 'Senior Product Operations, AI Products (Deep Lab)',
    company: 'Momo Inc. / Deep Lab (Hello Group)',
    period: 'Apr 2020 – Jun 2021',
    location: 'Beijing',
    status: 'completed',
    tone: 'blush',
    summary:
      'Led product operations for an AI-powered beauty application, building creator partnerships, international launch programs, and data-driven product improvements.',
    highlights: [
      'Managed 500+ creator and influencer partnerships for ZAO and Moxie; daily active users rose 45% and active users 200%.',
      'Built partner contracting with Legal and Finance, owning signing for MCN agencies and individual creators.',
      'Led operations for ZAO and Moxie from concept through launch, plus an intern team on expansion to Japan, South Korea and Vietnam.',
      'Built a beauty creator program that generated 20,000+ AI creations.',
      'Organized real-model shoots (~500 participants, 3,000 samples in one week) and built 40,000+ image datasets, cutting data-preparation time by about 40%.',
    ],
    overview:
      'Moxie (芒西) was an AI beauty app from Momo’s Deep Lab: from a single selfie, users could try on hairstyles, hair colors and makeup looks virtually. Artemis led its product operations from concept through launch — building the creator community around it, taking it into new markets, and shaping the training data and quality standards behind its AI.',
    context:
      'Momo Inc. (now Hello Group, Nasdaq: MOMO), Deep Lab. Alongside Moxie, Artemis also managed creator and influencer partnerships for ZAO, Deep Lab’s AI face-swapping app.',
    roleDetail:
      'Senior Product Operations, AI Products (Deep Lab). Worked between creators, Legal and Finance, the corporate risk team and Deep Lab engineers; led an intern team on international expansion.',
    app: {
      name: '芒西 Moxie – 百变造型',
      url: 'https://appraven.net/app/15298843',
      source: 'A Momo Inc. product · iOS app listing on AppRaven',
    },
    contributions: [
      {
        heading: 'Product launch & creator growth',
        body: 'Led Moxie’s product operations from concept through launch and built its beauty creator program — sourcing content, training creators on product features and coordinating campaigns. The program generated more than 20,000 AI creations, and one festival-makeup campaign reached 35% next-day retention among participants. Across Moxie and ZAO, she managed more than 500 creator and influencer partnerships, whose campaigns contributed to 45% growth in daily active users and 200% growth in active users.',
      },
      {
        heading: 'International expansion',
        body: 'Led an intern team supporting expansion into Japan, South Korea and Vietnam: competitor research, analysis of local beauty preferences, launch content and marketing campaigns adapted to each market, and recruiting local creators.',
      },
      {
        heading: 'AI product development & quality',
        body: 'Spotted gaps in the training data behind virtual hairstyle generation and partnered with a Beijing salon to photograph hairstyles from multiple angles — about 500 participants and 3,000 samples in one week — contributing to a dataset of more than 40,000 images and cutting data-preparation time by about 40%. Helped set quality standards for AI-generated looks and specified a batch review tool for comparing results, spotting defects and approving content. Turned creator feedback and usage data into requirements for Deep Lab engineers across three product iterations, which lifted feature engagement and content-save rates by 40%.',
      },
      {
        heading: 'Business operations',
        body: 'Standardized creator contracting with Legal and Finance — contract templates and signing workflows for MCNs and individual creators — and managed contracts through signing and payment approval. Worked with the corporate risk team on content standards and community guidelines.',
      },
    ],
    results: [
      { value: '20,000+', label: 'AI creations generated', note: 'Through the Moxie beauty creator program she built.' },
      { value: '+45%', label: 'daily active users', note: 'Campaigns across Moxie and ZAO, supported by her 500+ creator partnerships, contributed to this team outcome.' },
      { value: '+200%', label: 'active users', note: 'Same campaigns and partnerships across Moxie and ZAO; a team outcome.' },
      { value: '+40%', label: 'feature engagement and content-save rates', note: 'Across three product iterations she supported.' },
      { value: '35%', label: 'next-day retention', note: 'Among participants in one festival-makeup campaign.' },
      { value: '~40%', label: 'less data-preparation time', note: 'While building a dataset of 40,000+ images.' },
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
