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

/** Filter groups for Selected Work. */
export type ProjectCategory = 'Consumer Tech' | 'Entrepreneurship' | 'Art & Culture';

export type Project = {
  slug: string;
  category: ProjectCategory;
  org: string;
  title: string;
  discipline: string;
  role: string;
  /** Products she worked on, when the project is named after the company. */
  products?: string;
  period: string;
  location?: string;
  /** University department or division, shown in the case-study facts. */
  department?: string;
  status: ProjectStatus;
  /** One line for the Selected Work index. */
  summary: string;
  /** Concise bullets for the résumé page. */
  highlights: string[];
  overview: string;
  /** Case study → "The context": the product, brand or business situation. Blank lines split paragraphs. */
  challenge: string;
  /** Case study → "What she owned": short list of her responsibilities. */
  owned: string[];
  /** Only what the résumé documents. Omit when unknown. */
  context?: string;
  roleDetail: string;
  /** Verified YouTube video shown under Selected media (click-to-load, privacy-enhanced). */
  video?: { youtubeId: string; title: string; caption: string };
  contributions: { heading: string; body: string }[];
  results: Metric[];
  /**
   * Projects without results yet: paragraphs for the side panel (instead of figures).
   * Optional `headings` rename the case-study sections, and `ownedAsText` sets
   * `owned` as paragraphs rather than a list.
   */
  statusNote?: string[];
  headings?: { context?: string; owned?: string; approach?: string; status?: string };
  ownedAsText?: boolean;
  /**
   * Roles without documented figures: short labels for the side panel, shown under
   * `headings.status` instead of a status badge or a Results & Impact list.
   */
  focus?: string[];
  /**
   * Background color of the logo file in src/assets/logos/<slug>.png, so the
   * logo sits on its own color instead of a mismatched box. Defaults to white.
   */
  logoBackground?: string;
  /**
   * Shows the logo file as a round emblem on the cream card with a small caption
   * underneath, instead of filling a white logo panel.
   */
  emblem?: { alt: string; caption: string };
  /**
   * Selected Work card and case-study hero show the logo (as in the homepage logo
   * strip) instead of the cover image; the cover still appears under Selected Media.
   */
  preferLogo?: boolean;
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
    category: 'Consumer Tech',
    org: 'Tan Tan',
    title: 'Voice Communities & Creator Growth',
    discipline: 'Consumer Tech · Live Audio',
    role: 'Operations Lead, Voice Communities',
    period: 'Aug 2021 – Aug 2022',
    location: 'Hong Kong',
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
    challenge:
      'Voice Rooms was a new live-audio social feature inside Tan Tan (Hello Group), built around engagement and monetization. It had to be launched, filled with active hosts, monetized, and taken beyond mainland China.',
    owned: [
      'Product and content operations for Voice Rooms, from concept to launch',
      'Creator recruitment, onboarding, incentives and payouts',
      'The platform’s first creator monetization program',
      'An intern team expanding into Taiwan, Hong Kong and Germany',
    ],
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
    category: 'Consumer Tech',
    org: 'MoMo',
    title: 'Moxie & ZAO: AI Product Growth',
    discipline: 'Consumer AI · Beauty',
    role: 'Senior Product Operations, AI Products (Deep Lab)',
    products: 'Moxie (AI-powered selfie & beauty editor) · ZAO (AI face swap)',
    period: 'Sep 2019 – Jun 2021',
    location: 'Hong Kong',
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
      'At MoMo’s Deep Lab, Artemis worked on two AI products: Moxie (芒西), a beauty app for trying on hairstyles, hair colors and makeup from a single selfie, and ZAO, a face-swapping app. She led Moxie’s product operations from concept through launch — building its creator community, taking it into new markets, and shaping the training data and quality standards behind its AI — and managed creator and influencer partnerships across both products.',
    context:
      'MoMo Inc. (now Hello Group, NASDAQ: MOMO). Moxie and ZAO were both AI products from its Deep Lab.',
    challenge:
      'MoMo’s Deep Lab was bringing two consumer AI products to market: Moxie (芒西), a beauty app for trying on hairstyles, hair colors and makeup from a single selfie, and ZAO, a face-swapping app. Moxie had to launch with a creator community behind it, reach new markets, and close gaps in the training data behind its hairstyle AI.',
    owned: [
      'Moxie’s product operations, from concept through launch',
      '500+ creator and influencer partnerships across Moxie and ZAO',
      'An intern team supporting expansion into Japan, South Korea and Vietnam',
      'Creator contracting and payment approvals with Legal and Finance',
    ],
    roleDetail:
      'Senior Product Operations, AI Products (Deep Lab). Worked between creators, Legal and Finance, the corporate risk team and Deep Lab engineers; led an intern team on international expansion.',
    video: {
      youtubeId: 'dJYTMhKXCAc',
      title: 'The Future Is Zao: How A Chinese Deepfake App Went Viral',
      caption: 'ZAO in the news — NBC News, September 2019, before Artemis joined MoMo.',
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
    category: 'Entrepreneurship',
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
      // Source figure: RMB 700K+. At the 2017–2022 yearly average rates (6.45–6.91 RMB per US$) any two years come to about US$101K–109K.
      'Generated US$100K+ in Taobao revenue over two years without paid advertising.',
      'Built a 43,000+ follower community across Taobao, RED and WeChat with a 65%+ repeat-purchase rate.',
      'Manages designer relationships, selection and international shipping.'
    ],
    overview:
      'Missingcity is an online boutique Artemis founded to introduce emerging international designers to global consumers. It grew through curation, direct designer relationships and community — not paid media.',
    challenge:
      'Missingcity is an online boutique Artemis founded in 2017 to introduce emerging international designers to global consumers — growing through curation, direct designer relationships and community rather than paid media.',
    owned: [
      'Designer and supplier relationships',
      'Curation and product selection',
      'Cross-border sourcing and fulfillment',
      'Community across Taobao, Xiaohongshu (RED) and WeChat',
    ],
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
      // Source figure: RMB 700K+. At the 2017–2022 yearly average rates (6.45–6.91 RMB per US$) any two years come to about US$101K–109K.
      { value: 'US$100K+', label: 'Taobao revenue over two years', note: 'Generated without paid advertising.' },
      { value: '43,000+', label: 'community followers', note: 'Across Taobao, Xiaohongshu (RED) and WeChat.' },
      { value: '65%+', label: 'repeat-purchase rate' },
    ],
  },
  {
    slug: 'esoteric-studios',
    category: 'Entrepreneurship',
    logoBackground: '#f6f6f6', // ground of the green circular logo supplied by Artemis (Nov 2026)
    images: {
      // The brand's earlier crest logo, kept as a showcase under Selected Media (gold margin added around it).
      '01': { alt: 'Earlier Esoteric Studios crest logo: lion and phoenix around a crowned monogram, 2023, Esoteric Studios, New York and Seoul' },
    },
    org: 'Esoteric Studios',
    title: 'Cross-Border Professional Beauty',
    discipline: 'Beauty · Cross-Border E-Commerce',
    role: 'Founder & Brand Director',
    period: '2023 – Present',
    status: 'ongoing',
    tone: 'sage',
    summary:
      'Bringing Korean professional salon and skincare brands to global customers, with a digital consultation model.',
    highlights: [
      'Introduced Korean professional salon and skincare brands to global customers.',
      'Grew social communities to 27,000+ followers and 100,000+ content views.',
      'Recorded product tutorials with Korean salon owners and turned them into SOPs for customers.'
    ],
    overview:
      'Esoteric Studios is a cross-border business introducing Korean professional salon and skincare brands to global customers. Artemis oversees the brand end to end: suppliers, curation, logistics, positioning, content and e-commerce.',
    challenge:
      'Esoteric Studios introduces Korean professional salon and skincare brands to global customers — products that usually depend on specialized, in-person salon expertise.',
    owned: [
      'Supplier relationships and product curation',
      'Logistics and e-commerce',
      'Brand positioning and content',
      'Consumer research',
    ],
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
    category: 'Art & Culture',
    logoBackground: '#704d4b',
    preferLogo: true,
    images: {
      cover: { alt: 'Illustration of the twelve Chinese zodiac animals around a dragon, Baoxiang brand artwork' },
      '01': { alt: 'White tiger statue candle on its Eternal Path packaging, labeled Animal Statue Candle, soy wax' },
      '02': { alt: 'Animated monkey character from the zodiac illustration' },
      '03': { alt: 'Animated rabbit character from the zodiac illustration' },
    },
    org: 'Baoxiang',
    title: 'The Eternal Path',
    discipline: 'Cultural Design · Contemporary Collectibles · Creative Direction',
    role: 'Founder & Creative Director',
    period: '2025 – Present',
    status: 'in-development',
    tone: 'stone',
    summary:
      'An emerging cultural design project reinterpreting Chinese zodiac symbolism and Five Elements philosophy through contemporary collectible objects.',
    highlights: [
      'Developing a collectible-objects concept rooted in Chinese zodiac symbolism and Five Elements philosophy, starting with a 12-piece zodiac candle collection.',
      'Exploring collaborations with contemporary Asian artists.'
    ],
    overview:
      'Baoxiang — The Eternal Path is an emerging cultural design project exploring the intersection of Chinese heritage, contemporary aesthetics and collectible objects.',
    headings: {
      context: 'The Vision',
      owned: 'Creative Direction',
      approach: 'Developing the Collection',
      status: 'Current Direction',
    },
    challenge: `Baoxiang — The Eternal Path is an emerging cultural design project exploring the intersection of Chinese heritage, contemporary aesthetics and collectible objects.

Drawing inspiration from the Chinese zodiac and Five Elements philosophy, the project reinterprets traditional cultural symbolism through objects designed for contemporary audiences.

Its first proposed collection centers on twelve zodiac-inspired candles, bringing cultural storytelling into everyday objects.`,
    ownedAsText: true,
    owned: [
      'As Founder & Creative Director, Artemis is shaping the project’s concept, creative direction and cultural positioning.',
      'Her work focuses on translating traditional symbolism into a contemporary design language, while considering how culturally rooted objects can connect with international audiences.',
    ],
    roleDetail: 'Founder & Creative Director.',
    contributions: [
      {
        heading: 'Concept & product direction',
        body: 'Developing the concept for a twelve-piece candle collection inspired by the Chinese zodiac, with each piece representing a different sign.',
      },
      {
        heading: 'Artistic collaboration',
        body: 'Exploring potential collaborations with contemporary Asian artists to bring additional creative perspectives to the project.',
      },
      {
        heading: 'Cultural storytelling & international positioning',
        body: 'Researching how Chinese cultural narratives and symbolic objects can be presented meaningfully to audiences across different cultural markets.',
      },
    ],
    results: [],
    statusNote: [
      'Baoxiang is in development, with ongoing work focused on its first collection, creative collaborations and international positioning.',
      'The project reflects Artemis’s interest in connecting cultural heritage with contemporary design, brand storytelling and creative entrepreneurship.',
    ],
  },
];

/**
 * Earlier roles with their own case-study pages at /work/<slug>/. Kept apart from
 * `projects` so they don't appear in Selected Work, the Case Studies index, the
 * logo strip or the résumé's project lists; the Work History timeline links to them.
 * Responsibilities are worded as supplied by Artemis. No figures are documented.
 */
export const roleStudies: Project[] = [
  {
    slug: 'no-space-gallery',
    category: 'Art & Culture',
    // Logo (無空間 / No Space) supplied by Artemis; empty grey margin trimmed, artwork untouched. Card matches its flat grey ground.
    logoBackground: '#bfbdbc', // the grey as encoded in the served WebP
    org: 'No Space Gallery',
    title: 'Exhibition Production & Gallery Operations',
    discipline: 'Exhibitions · Gallery Operations · Collector Relations',
    role: 'Exhibition & Gallery Operations Assistant',
    period: 'Spring 2023',
    location: 'Beijing, China',
    status: 'completed',
    tone: 'sage',
    summary:
      'Supporting exhibition production, the gallery’s Online Viewing Room, collector events and gallery records at No Space Gallery in Beijing.',
    highlights: [
      'Coordinated exhibition installations, artwork logistics, and artist communications in collaboration with curatorial teams.',
      'Produced online exhibition content and promotional materials while supporting VIP viewings, collector engagement, and gallery events.',
    ],
    overview:
      'Exhibition and gallery operations support at No Space Gallery in Beijing, spring 2023.',
    headings: {
      context: 'The Role',
      approach: 'Areas of Responsibility',
      status: 'Focus Areas',
    },
    challenge: `In spring 2023, Artemis joined No Space Gallery in Beijing as Exhibition & Gallery Operations Assistant.

Working with the gallery’s curatorial team and exhibiting artists, she supported exhibitions from installation through presentation, the gallery’s online exhibition, its events for collectors, curators and VIP guests, and the records behind them.`,
    owned: [],
    roleDetail: 'Exhibition & Gallery Operations Assistant.',
    contributions: [
      {
        heading: 'Exhibition Production & Artist Relations',
        body: 'Partnered with curatorial teams and exhibiting artists to coordinate end-to-end exhibition installation, artwork logistics, and gallery presentation, ensuring alignment with institutional standards.',
      },
      {
        heading: 'Digital Exhibition & Marketing Execution',
        body: 'Spearheaded content editing, promotional copywriting, and the multi-channel launch of the gallery’s Online Viewing Room, using digital storytelling to elevate artist visibility and expand audience reach.',
      },
      {
        heading: 'VIP Events & Collector Engagement',
        body: 'Managed exhibition openings, private viewings, and public programs, overseeing RSVP tracking, invitation management, and on-site hospitality for collectors, curators, and VIP guests.',
      },
      {
        heading: 'Archives, Documentation & Sales Collateral',
        body: 'Maintained exhibition archives, artwork documentation, and collector contact databases while assisting with exhibition materials and pricing checklists, maintaining strict confidentiality.',
      },
    ],
    results: [],
    focus: ['Exhibition production', 'Artist relations', 'Online Viewing Room', 'Collector & VIP events', 'Archives & documentation'],
  },
  {
    slug: 'communication-university-of-china',
    category: 'Art & Culture',
    org: 'Communication University of China',
    title: 'International Cultural Exchange & Exhibition Coordination',
    discipline: 'Cultural Exchange · Exhibitions · Institutional Partnerships',
    role: 'Cultural Exchange & Exhibition Coordinator',
    department: 'School of Drama and Film',
    // Official school badge from the university's Identity Guidelines page:
    // https://en.cuc.edu.cn/2144/list.htm (file saved unaltered, 353×353 JPEG).
    emblem: {
      alt: 'Communication University of China school badge',
      caption: 'Communication University of China',
    },
    period: '2022 – 2023',
    location: 'Beijing, China',
    status: 'completed',
    tone: 'blush',
    summary:
      'Supporting international cultural exchange exhibitions, institutional partnerships and audience strategy at the School of Drama and Film.',
    highlights: [
      'Supported international cultural exchange exhibitions, including “Beauty and Sharing” and the Second China Musical Creation Forum Exhibition.',
      'Assisted with institutional partnerships, fundraising proposals, bilingual publicity, and international audience research.',
    ],
    overview:
      'Cultural exchange and exhibition coordination at the Communication University of China’s School of Drama and Film, 2022–2023.',
    headings: {
      context: 'The Role',
      approach: 'Areas of Responsibility',
      status: 'Focus Areas',
    },
    challenge: `From 2022 to 2023, Artemis worked at the Communication University of China’s School of Drama and Film in Beijing as Cultural Exchange & Exhibition Coordinator.

In a supporting role alongside faculty leadership, she contributed to international cultural exchange exhibitions, institutional partnerships and fundraising, and the audience research and publicity that presented the work to international viewers.`,
    owned: [],
    roleDetail: 'Cultural Exchange & Exhibition Coordinator.',
    contributions: [
      {
        heading: 'National-Level Cultural & Exhibition Execution',
        // Event names and the CCTV / Ministry of Culture and Tourism attribution are as supplied by Artemis.
        body: 'Supported the production and exhibition of “Beauty and Sharing” — an international cultural exchange initiative described as co-presented by CCTV and the Ministry of Culture and Tourism — alongside the Second China Musical Creation Forum Exhibition.',
      },
      {
        heading: 'Institutional Partnerships & Fundraising',
        body: 'Assisted faculty leadership with sponsor outreach, fundraising proposals, and formal partnership agreements, bridging academic research with public and private cultural funding.',
      },
      {
        heading: 'Cross-Cultural Audience Strategy & Publicity',
        body: 'Conducted international audience research to tailor exhibition narratives, bilingual publicity materials, and localization strategies for global viewers.',
      },
    ],
    results: [],
    focus: ['Cultural exchange exhibitions', 'Institutional partnerships', 'Fundraising proposals', 'Bilingual publicity', 'Audience research'],
  },
];
