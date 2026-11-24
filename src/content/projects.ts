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
  /** One line for the Selected Work card (and the page's meta description). */
  summary: string;
  /** Longer introduction for the case-study hero; falls back to `summary`. */
  intro?: string;
  /** Concise bullets for the résumé page. */
  highlights: string[];
  overview: string;
  /** Case study → "The context": the product, brand or business situation. Blank lines split paragraphs. */
  challenge: string;
  /**
   * Case study → "What I Owned": her direct responsibilities. A titled item
   * ({ title, body }) renders as a bold lead-in followed by the description.
   */
  owned: (string | { title: string; body: string })[];
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
    title: '0-to-1 Content Strategy, Creator Ecosystems & Voice Community Growth',
    discipline: 'Consumer Technology · Social Audio · Creator Economy',
    role: 'Operations Lead, Voice Communities',
    period: 'Aug 2021 – Aug 2022',
    location: 'Hong Kong',
    status: 'completed',
    tone: 'ink',
    summary:
      'Launched and scaled Voice Rooms, Tan Tan’s live-audio feature, by building the room formats, host onboarding, gifting and payouts that kept creators and listeners coming back.',
    intro:
      'Led the launch and growth of Tan Tan’s voice-first social communities, building the content formats, creator partnerships, monetization systems and localized operations behind Voice Rooms across Taiwan, Hong Kong and Germany. The programs contributed to 67% growth in the feature’s daily active users and a 600% increase in first-week room launches by new creators.',
    highlights: [
      'Built the Voice Rooms creator operating model from launch, including the platform’s first creator monetization framework: virtual gifting, revenue sharing and incentives.',
      'Rebuilt creator onboarding through research and controlled experiments; first-week room launches rose 600%.',
      'Redesigned creator incentives and community programs; the feature’s daily active users rose 67%.',
      'Single-handedly designed domestic and international partner payment and compliance processes, including a third-party provider to pay partners in Taiwan.',
      'Led a team of interns on expansion to Taiwan, Hong Kong and Germany.',
    ],
    overview:
      'Voice Rooms was a live-audio social feature inside Tan Tan, part of Hello Group. As Operations Lead, Artemis built its creator operating model from launch: room formats, host recruitment and onboarding, gifting and revenue sharing, partner payouts, and expansion into Taiwan, Hong Kong and Germany.',
    challenge:
      'Tan Tan, part of Hello Group, introduced Voice Rooms as a live-audio feature to extend the app beyond photo-based dating into real-time conversation, community and creator earnings. As Operations Lead, I was responsible for its operating model from launch: the formats hosts ran, how hosts were recruited, onboarded, rewarded and paid, and how the feature reached new markets. The challenge was to fill rooms with active hosts, bring listeners back, make hosting worth a creator’s time, and adapt all of it beyond mainland China.',
    owned: [
      {
        title: 'Content programming & room formats',
        body: 'Designed interactive audio formats, conversation themes and seasonal campaigns built around real-time participation and companionship.',
      },
      {
        title: 'Host recruitment & onboarding',
        body: 'Recruited hosts through talent agencies, MCNs, influencers, micro-creators and direct outreach, and wrote the onboarding playbooks and engagement templates.',
      },
      {
        title: 'Monetization & partner payouts',
        body: 'Built virtual gifting campaigns, agency revenue-sharing rates, performance incentives, and domestic and international payout workflows with Finance, Legal and Tax.',
      },
      {
        title: 'Growth analytics & localization',
        body: 'Used host feedback, user research, controlled experiments and operating metrics to raise participation, and led an intern team expanding into Taiwan, Hong Kong and Germany.',
      },
    ],
    roleDetail:
      'Operations Lead, Voice Communities. Worked across product, Finance, Legal and Tax; led a team of interns on international expansion.',
    contributions: [
      {
        heading: 'Room formats that bring listeners back',
        body: 'A new audio feature has no habits yet. Before launch, I ran the market and competitor analysis and helped define feature requirements. After launch, I built recurring room themes, conversation prompts and interactive formats around companionship, plus seasonal programming for occasions such as Valentine’s Day and Halloween, giving listeners reasons to join live and return. Host and listener feedback went straight to product managers to refine the experience.',
      },
      {
        heading: 'Host activation & onboarding experiments',
        body: 'Recruiting hosts was not enough: new hosts had to go live, and keep going live, in their first week. I rebuilt onboarding using user research and controlled experiments, adding playbooks, engagement templates and early incentives shaped by host feedback. The number of rooms new creators launched in their first week rose 600%.',
      },
      {
        heading: 'Gifting, revenue sharing & payouts',
        body: 'I built the platform’s first creator monetization program: virtual gifting campaigns, agency revenue-sharing rates and a four-tier creator incentive framework. To pay partners reliably, I built domestic and international payout workflows with Finance, Legal and Tax, covering contracts, compliance documentation, invoicing, reconciliation and disbursement, and led the integration of a third-party payment provider to launch partner payouts in Taiwan.',
      },
      {
        heading: 'Community health & international launch',
        body: 'I set the content review standards and moderation keyword lists that third-party moderators applied as rooms grew. I also led an intern team on expansion into Taiwan, Hong Kong and Germany: market and competitor research, local culture, cold-start content, and recruiting overseas hosts through local agencies, MCNs and influencers. After I redesigned creator incentives and community programs, the feature’s daily active users rose 67%.',
      },
    ],
    results: [
      { value: '+67%', label: 'daily active users for the Voice Rooms feature', note: 'After I redesigned creator incentives and community programs.' },
      { value: '+600%', label: 'rooms launched by new creators in their first week', note: 'After I rebuilt creator onboarding through user research and controlled experiments.' },
      { value: '3 markets', label: 'international expansion', note: 'Taiwan, Hong Kong and Germany, with an intern team I led.' },
      { value: '4 tiers', label: 'creator incentive framework', note: 'Part of the platform’s first creator monetization program, which I built.' },
    ],
  },
  {
    slug: 'momo',
    category: 'Consumer Tech',
    org: 'MoMo',
    title: 'Moxie & ZAO: AI Product Launches, Creator-Led Growth & International Expansion',
    discipline: 'Consumer AI · Beauty Technology · Creator Marketing',
    role: 'Senior Product Operations, AI Products (Deep Lab)',
    products: 'Moxie (AI-powered selfie & beauty editor) · ZAO (AI face swap)',
    period: 'Sep 2019 – Jun 2021',
    location: 'Hong Kong',
    status: 'completed',
    tone: 'blush',
    summary:
      'Took Moxie, an AI beauty and styling app, from concept to launch at MoMo’s Deep Lab, connecting market research, creator campaigns, localization and AI-quality feedback to engineering.',
    intro:
      'Led product operations and creator growth for Moxie, an AI-powered selfie and beauty editor, while managing creator partnerships across Moxie and ZAO at MoMo’s Deep Lab. Connected market research, creator campaigns, localization for new markets, AI output evaluation and engineering feedback to support adoption and engagement.',
    highlights: [
      'Led Moxie’s product operations from concept through launch, grounded in pre-launch market research and feature benchmarking.',
      'Turned creator feedback and usage data into three product iterations; feature engagement and content-save rates rose 40%.',
      'Managed 500+ creator and influencer partnerships for ZAO and Moxie; daily active users rose 45% and active users 200%.',
      'Built a beauty creator program that generated 20,000+ AI creations.',
      'Organized real-model shoots (~500 participants, 3,000 samples in one week) and built 40,000+ image datasets, cutting data-preparation time by about 40%.',
      'Built partner contracting with Legal and Finance, owning signing for MCN agencies and individual creators; led an intern team on expansion to Japan, South Korea and Vietnam.',
    ],
    overview:
      'At MoMo’s Deep Lab, Artemis led product operations for Moxie (芒西), an AI-powered selfie and beauty editor, from concept through launch, and managed creator and influencer partnerships across Moxie and ZAO, a face-swapping app. Her work linked market research, creator campaigns, localization, AI output evaluation and engineering feedback.',
    context:
      'MoMo Inc. (now Hello Group, NASDAQ: MOMO). Moxie and ZAO were both AI products from its Deep Lab.',
    challenge:
      'MoMo’s Deep Lab was building consumer AI products around personalized visual content. ZAO had shown how quickly AI face-swapping could spread, reaching No. 1 on China’s iOS App Store after its 2019 launch; Moxie (芒西) applied the technology to everyday beauty, letting users try hairstyles, hair colors and makeup from a single selfie. My task was to move Moxie past novelty into a repeatable beauty habit: a launch grounded in research, creators producing looks worth trying, campaigns adapted to new markets, and AI results reliable enough that users would save and share them.',
    owned: [
      {
        title: 'Go-to-market research & launch',
        body: 'Ran pre-launch market research and feature benchmarking to shape Moxie’s positioning and launch content, and led its product operations from concept through launch.',
      },
      {
        title: 'Creator marketing & partnerships',
        body: 'Built Moxie’s beauty creator program and managed 500+ creator, influencer and MCN relationships across Moxie and ZAO.',
      },
      {
        title: 'APAC localization',
        body: 'Led an intern team on expansion into Japan, South Korea and Vietnam, adapting launch content and creator recruitment to each market.',
      },
      {
        title: 'AI quality & cross-functional operations',
        body: 'Coordinated content sourcing, copyright procurement and rights clearance, creator contracting, AI output evaluation and product feedback with Deep Lab engineers, Legal, Finance and the corporate risk team.',
      },
    ],
    roleDetail:
      'Senior Product Operations, AI Products (Deep Lab). Worked between creators, Legal and Finance, the corporate risk team and Deep Lab engineers; led an intern team on international expansion.',
    video: {
      youtubeId: 'dJYTMhKXCAc',
      title: 'The Future Is Zao: How A Chinese Deepfake App Went Viral',
      caption: 'ZAO in the news — NBC News, September 2019, after Artemis joined MoMo.',
    },
    contributions: [
      {
        heading: 'Research-led launch & localization',
        body: 'Before launch, I benchmarked competitor features and analyzed consumer preferences and beauty trends to shape Moxie’s positioning and content strategy. For Japan, South Korea and Vietnam, I led an intern team researching local aesthetics and consumer behavior, then adapted launch content, marketing campaigns and local creator recruitment to each market rather than translating a single campaign.',
      },
      {
        heading: 'Creator campaigns that drive feature trial',
        body: 'An AI beauty tool is only as persuasive as the looks people see. I built Moxie’s beauty creator program: sourcing content, training creators on product features and coordinating campaigns that invited users to try AI-generated looks. It generated more than 20,000 AI creations, and one festival-makeup campaign reached 35% next-day retention among participants. Across Moxie and ZAO, my 500+ creator partnerships supported campaigns that contributed to team-level growth of 45% in daily and 200% in active users.',
      },
      {
        heading: 'Fixing AI output at the data level',
        body: 'Virtual hairstyles looked unrealistic from some angles, a gap in the training data rather than the interface. I partnered with a Beijing salon to photograph hairstyles from multiple angles, coordinating about 500 participants and 3,000 samples in one week. The work contributed to a dataset of more than 40,000 images and cut data-preparation time by about 40%. I also helped set quality standards for AI-generated looks and specified a batch review tool for comparing results, flagging defects and approving content.',
      },
      {
        heading: 'Feedback, contracts & content safety',
        body: 'I turned creator feedback and usage data into requirements for Deep Lab engineers across three product iterations, which lifted feature engagement and content-save rates by 40%. In parallel, I standardized creator contracting with Legal and Finance, managing contracts for MCNs and individual creators through signing and payment approval. I coordinated content sourcing, copyright procurement and rights clearance, managed the official Weibo channel, and worked with the corporate risk team on content standards and community guidelines.',
      },
    ],
    results: [
      { value: '20,000+', label: 'AI creations generated', note: 'Through the Moxie beauty creator program I built.' },
      { value: '+45%', label: 'daily active users', note: 'Campaigns across Moxie and ZAO, supported by my 500+ creator partnerships, contributed to this team outcome.' },
      { value: '+200%', label: 'active users', note: 'Same campaigns across Moxie and ZAO; a team outcome.' },
      { value: '+40%', label: 'feature engagement and content-save rates', note: 'Across three Moxie product iterations I supported.' },
      { value: '35%', label: 'next-day retention', note: 'Among participants in one festival-makeup campaign.' },
    ],
  },
  {
    slug: 'missingcity',
    category: 'Entrepreneurship',
    org: 'Missingcity',
    title: 'Independent Fashion Curation, Designer Partnerships & Organic Commerce',
    discipline: 'Fashion · Creative Curation · Social Commerce',
    role: 'Founder & Curator',
    period: '2017 – Present',
    status: 'ongoing',
    tone: 'clay',
    summary:
      'An independent online boutique introducing emerging international designers to global consumers, built on curation, direct designer relationships and loyal clients rather than paid advertising.',
    intro:
      // Source figure: RMB 700K+ over two years. At the 2017–2022 yearly average rates (6.45–6.91 RMB per US$) any two years come to about US$101K–109K.
      'Founded an independent multi-brand fashion boutique connecting international designers and emerging labels with global consumers. Built it through editorial curation, direct designer relationships, organic social commerce and personal client service, generating about US$100K+ in Taobao revenue over two years without paid advertising.',
    highlights: [
      'Curates 10+ international designer labels, including Who Decides War, MISBHV, Hyein Seo and I.AM.GIA, for global consumers.',
      // Source figure: RMB 700K+. At the 2017–2022 yearly average rates (6.45–6.91 RMB per US$) any two years come to about US$101K–109K.
      'Generated US$100K+ in Taobao revenue over two years without paid advertising.',
      'Built a 43,000+ follower community across Taobao, RED and WeChat with a 65%+ repeat-purchase rate.',
      'Negotiates directly with designers and suppliers on wholesale terms, early-access releases and pre-orders, and manages international shipping.',
    ],
    overview:
      'Missingcity is an independent online boutique Artemis founded in 2017 to introduce emerging international designers to global consumers. It grew through curation, direct designer relationships, editorial storytelling and loyal clients, without paid advertising.',
    challenge:
      'I founded Missingcity in 2017 as an independent online boutique built on discovering distinctive international fashion. Instead of competing on mass-market merchandise or paid reach, I focused on emerging designers, independent labels, women artists, and handcrafted or limited-edition pieces with a strong creative identity. The challenge was to establish a recognizable point of view, build relationships with designers as a new independent buyer, and turn an organic audience into returning clients.',
    owned: [
      {
        title: 'Designer discovery & curation',
        body: 'Selected international designers, independent studios and limited-edition collections for distinctive aesthetics, craftsmanship and cultural relevance.',
      },
      {
        title: 'Designer relationships & negotiation',
        body: 'Built direct relationships with brands and suppliers, negotiating wholesale terms, early-access releases and selected pre-order arrangements.',
      },
      {
        title: 'Editorial storytelling & social commerce',
        body: 'Wrote product stories and ran the boutique’s presence on Taobao, Xiaohongshu (RED) and WeChat, building its audience without paid advertising.',
      },
      {
        title: 'VIP clienteling & cross-border fulfillment',
        body: 'Developed personal styling advice, private-client communication and pre-order access, and ran international sourcing and delivery.',
      },
    ],
    roleDetail:
      'Founder & Curator. Responsible for designer discovery and curation, designer and supplier relationships, editorial content and social commerce, client relationships, and cross-border sourcing and fulfillment.',
    contributions: [
      {
        heading: 'A curator’s eye for emerging designers',
        body: 'I approached the boutique as a curator rather than a reseller, looking for independent studios and designers whose work carried a distinct creative identity. Each collection was presented through editorial product stories about its craftsmanship, artistic influences and cultural references, so Missingcity read as a place to discover designers rather than a general online store.',
      },
      {
        heading: 'Direct designer and supplier relationships',
        body: 'I worked directly with more than 10 international labels and their suppliers, including Who Decides War, MISBHV, Hyein Seo and I.AM.GIA, to buy selected collections, limited releases and early-access pieces, negotiating wholesale terms and, for some releases, pre-order arrangements. The result was an assortment not always available through mainstream retail, with customer benefits such as early access to new releases.',
      },
      {
        heading: 'Clienteling that brings customers back',
        body: 'To turn single purchases into lasting relationships, I offered personal styling advice, private-client messages and pre-order access to selected releases. Customers returned: the boutique’s repeat-purchase rate is above 65%.',
      },
      {
        heading: 'Organic commerce across borders',
        body: 'I built the audience on Xiaohongshu (RED), WeChat and Taobao, combining product discovery with direct conversations, and grew a community of more than 43,000 followers without paid advertising. Behind it, I coordinated international sourcing, shipping and fulfillment, and shortened delivery times for overseas orders. Over two years, the boutique generated about US$100K+ in Taobao revenue.',
      },
    ],
    results: [
      // Source figure: RMB 700K+ over two years. At the 2017–2022 yearly average rates (6.45–6.91 RMB per US$) any two years come to about US$101K–109K.
      { value: 'US$100K+', label: 'Taobao revenue over two years', note: 'Approximate, converted from RMB 700K+; generated without paid advertising.' },
      { value: '43,000+', label: 'organic community followers', note: 'Across Taobao, Xiaohongshu (RED) and WeChat.' },
      { value: '65%+', label: 'repeat-purchase rate' },
      { value: '10+', label: 'international designer labels curated or partnered with', note: 'Including Who Decides War, MISBHV, Hyein Seo and I.AM.GIA.' },
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
    title: 'Luxury Korean Beauty, Cross-Border Commerce & Community Growth',
    discipline: 'Beauty · Luxury Brand Strategy · Social Commerce',
    role: 'Founder & Brand Director',
    period: '2023 – Present',
    status: 'ongoing',
    tone: 'sage',
    summary:
      'A curated premium beauty venture introducing Korean salon-exclusive skincare and haircare to global customers, reaching US$60K+ in first-month sales through specialist partnerships and personal consultations.',
    intro:
      'Founded a curated premium beauty venture introducing Korean salon-exclusive skincare and haircare to global customers, with sourcing and fulfillment across Korea, the United States and Hong Kong. Built the brand around specialist salon partnerships, founder-led storytelling, personalized digital consultations and cross-border commerce, generating US$60K+ in first-month sales while introducing previously unfamiliar products to a new market.',
    highlights: [
      'Founded a curated premium beauty venture introducing Korean salon-exclusive skincare and haircare to global customers; US$60K+ in first-month sales.',
      'Secured first-to-market brand authorizations for the US and Asia and built salon partnerships in Korea; turned specialist tutorials into customer guidance and a digital consultation model.',
      'Positioned the assortment above US$100 on average without discounting; founder-led content reached 100K+ views and built 5,000+ high-intent community members organically.',
      'Runs sourcing and fulfillment between Korea, the United States and Hong Kong.',
    ],
    overview:
      'Esoteric Studios is a curated premium beauty venture Artemis founded to introduce Korean salon-exclusive skincare and haircare to global customers. She leads the brand end to end: positioning, curation, salon partnerships, content, consultations, e-commerce and cross-border operations.',
    challenge:
      'I conceived Esoteric Studios as a curated luxury beauty destination rather than a general retail store. Korean salon-exclusive skincare and haircare had little awareness outside the salons that use them, and the products sit at an average price above US$100, a premium that new customers had no reason yet to trust. My objective was to earn that trust without discounting, by pairing a tight edit of professional products with salon expertise, founder-led education and personal digital guidance.',
    owned: [
      {
        title: 'Luxury positioning & curation',
        body: 'Defined the brand identity, visual direction, premium pricing strategy and curated assortment of Korean professional skincare and haircare.',
      },
      {
        title: 'Brand authorizations & salon partnerships',
        body: 'Built direct relationships with Korean salon brands and professionals, securing first-to-market brand authorizations to introduce their specialist products in the US and Asia.',
      },
      {
        title: 'Founder-led content',
        body: 'Script, film, edit and distribute original beauty content that turns professional product knowledge into accessible education.',
      },
      {
        title: 'E-commerce, client advisory & cross-border operations',
        body: 'Built the online storefront, the personal consultation workflow, and sourcing and fulfillment between Korea, the United States and Hong Kong.',
      },
    ],
    roleDetail:
      'Founder & Brand Director, leading brand positioning, curation, salon partnerships, content, consultations, e-commerce and cross-border operations.',
    contributions: [
      {
        heading: 'Premium positioning without discounts',
        body: 'The products I chose had little local awareness, so price promotions would have undercut the expertise that makes them worth buying. I positioned Esoteric Studios on specialist knowledge, product quality and a curated luxury experience instead. I set the brand’s aesthetic and a price positioning above US$100 on average, and use ongoing customer research to refine the assortment, brand communication, conversion and retention.',
      },
      {
        heading: 'Salon partnerships & product education',
        body: 'Professional salon products usually come with a professional to explain them. I built relationships with salon owners and specialists in Korea and recorded product demonstrations and tutorials not available online. I turned that expertise into step-by-step guidance and standard instructions, so customers can choose and apply products correctly without relying on an in-person salon visit.',
      },
      {
        heading: 'Founder-led storytelling',
        body: 'To make unfamiliar products approachable, I script, film and edit my own video content, translating salon techniques into practical demonstrations and lifestyle stories. Education rather than paid promotion drives discovery: high-performing posts have reached more than 100K views with strong engagement, building 5,000+ high-intent community members within a wider following of 27,000+.',
      },
      {
        heading: 'Personal consultations & cross-border fulfillment',
        body: 'Premium beauty customers expect advice, not just a checkout page. I designed a digital consultation model that connects customers with Korean salon professionals, and coordinate sourcing and fulfillment between Korea, the United States and Hong Kong. The aim is to pair the reach of online commerce with the specialist guidance of a salon visit.',
      },
    ],
    results: [
      { value: 'US$60K+', label: 'first-month sales', note: 'Following launch in a new market, with products previously unfamiliar to it.' },
      { value: 'US$100+', label: 'average product price positioning', note: 'Premium pricing held without discounts.' },
      { value: '100K+', label: 'views on high-performing social content', note: 'Through founder-led educational content and brand storytelling.' },
      { value: '5,000+', label: 'high-intent community members', note: 'Built organically; part of a wider 27,000+ social following.' },
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
    slug: 'marie-gallery',
    category: 'Art & Culture',
    org: 'Marie Gallery',
    title: 'Gallery Operations, Art Sales & Artist-Collaboration Commerce',
    discipline: 'Gallery Operations · Art Sales · E-Commerce',
    role: 'Gallery Assistant',
    period: 'May 2024 – Aug 2026',
    location: 'Shanghai, China',
    status: 'completed',
    tone: 'stone',
    summary:
      'Supporting artists, clients, exhibitions and daily operations at Marie Gallery in Shanghai, and launching an e-commerce boutique of exclusive artist-collaboration products.',
    highlights: [
      'Helped oversee five active artists, an extensive client list and upcoming exhibitions, while managing daily gallery operations.',
      'Researched artworks for public and private sales, and launched an e-commerce boutique of exclusive artist-collaboration products.',
    ],
    overview:
      'Gallery Assistant at Marie Gallery in Shanghai, May 2024 to August 2026.',
    headings: {
      context: 'The Role',
      approach: 'Areas of Responsibility',
      status: 'Focus Areas',
    },
    challenge: `From May 2024 to August 2026, Artemis worked at Marie Gallery in Shanghai as Gallery Assistant.

She helped oversee the gallery’s five active artists, its client relationships and a calendar of upcoming exhibitions and openings; ran the daily operations behind them; researched artworks for sales; and built an e-commerce boutique for exclusive artist-collaboration products.`,
    owned: [],
    roleDetail: 'Gallery Assistant.',
    // Responsibilities as supplied by Artemis, lightly edited for grammar.
    contributions: [
      {
        heading: 'Artists, Clients & Exhibitions',
        body: 'Helped oversee a roster of five active artists, an extensive client list, and multiple upcoming exhibitions and opening events.',
      },
      {
        heading: 'Gallery Operations',
        body: 'Managed daily gallery operations, including accounting support, artwork inventory tracking, and shipment coordination.',
      },
      {
        heading: 'Artwork Research & Sales Support',
        body: 'Conducted in-depth artwork research for public and private sales, and assisted with client proposals and sales presentations.',
      },
      {
        heading: 'E-Commerce & Digital Marketing',
        body: 'Designed, launched, and maintained an e-commerce boutique featuring exclusive artist-collaboration products, and managed digital marketing and content strategy.',
      },
    ],
    results: [],
    focus: ['Artist relations', 'Client management', 'Exhibitions & openings', 'Gallery operations', 'Art sales research', 'E-commerce & digital marketing'],
  },
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
