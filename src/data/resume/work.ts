/**
 * Conforms to https://jsonresume.org/schema/
 */
export interface Position {
  name: string;
  position: string;
  url: string;
  startDate: string;
  endDate?: string;
  summary?: string;
  highlights?: string[];
}

const work: Position[] = [
  {
    name: 'ZedZen',
    position: 'CEO & Founder',
    url: 'https://zed-zen.com',
    startDate: '2025-07-01',
    summary: `Software studio building production SaaS and AI-powered web apps for the hospitality and retail industries. Full-stack engineering, product design, and AI integration delivered end-to-end.`,
    highlights: [
      'Shipped 20+ production projects across hospitality, retail, education, and the public sector.',
      'Built Pulse — NFC + QR waiter review SaaS with real-time analytics and AI-generated review responses.',
      'Designed and built a multi-platform restaurant operations platform aggregating Bolt, Glovo, and Wolt — with cross-platform BI and AI-assisted review responses for 12,000+ reviews.',
      'Built Floteris — fleet management SaaS with an agentic RAG assistant over fleet documents, HR records, and financials.',
      'Built Nexus Dashboard — a BI layer over the Nexus ERP API (1,370+ endpoints) for sales, cash flow, supplier balances, and food cost.',
      'Built a B2B food-wholesale e-commerce platform with live ERP catalog sync and Stripe payments — currently processing 85+ orders.',
      'Built the public-sector salary calculator covering 2,627 Romanian job functions and complex regulatory logic.',
      'Stack: Next.js, React, TypeScript, Supabase, PostgreSQL, OpenAI / Claude API, Stripe, Tailwind CSS, Vercel, Railway, Cloudflare, Coolify on Hetzner.',
    ],
  },
  {
    name: 'YOUR FAVORITE DRINKING GAMES SRL',
    position: 'Owner',
    url: '',
    startDate: '2021-01-01',
    endDate: '2025-07-01',
    summary: `Owner of a multi-arm business covering restaurant consulting, startup development, and product brands.`,
    highlights: [
      'Restaurant consulting & solutions — helped restaurant clients reach six-figure revenue by optimizing delivery operations and implementing tailored business strategies.',
      'Personally funded and developed two early-stage product brands — an arts & education platform and a board games line for adults — both currently in development.',
      'First consulting client was Ciorbe și Plăcinte, which is still an active ZED-ZEN client today.',
    ],
  },
  {
    name: 'Ciorbe și Plăcinte',
    position: 'Marketing Manager (Pricing, Contracts, Procurement)',
    url: 'https://ciorbesiplacinte.ro',
    startDate: '2024-01-01',
    endDate: '2024-08-01',
    summary: `Marketing and operations management role with a Romanian comfort-food restaurant chain in the Bucharest metropolitan area. The relationship continued as a ZED-ZEN client engagement after this role.`,
    highlights: [
      'Coordinated resource management and process optimization for operational efficiency.',
      'Developed and implemented marketing strategies to enhance brand visibility and market presence.',
      'Managed recruitment, training, and employee development across the team.',
      'Oversaw team coordination, performance monitoring, and professional development support.',
    ],
  },
  {
    name: 'Mantello Alexandru Lucian Individual Enterprise',
    position: 'Owner & Event Producer',
    url: '',
    startDate: '2018-02-01',
    endDate: '2024-09-01',
    summary: `Founded and directed four event and entertainment brands (StudFest, #greenReghin, MAL Events, and others), executing 150+ events across seven Romanian cities.`,
    highlights: [
      'Led marketing and branding efforts including media production and active social media management.',
      'Managed teams of up to 80 people for both commercial and non-profit events.',
      'Coordinated environmental cleanup campaigns demonstrating community impact (#greenReghin).',
      'This operations & marketing background informs how ZED-ZEN ships software for hospitality clients today.',
    ],
  },
  {
    name: 'Galaxy WaterPark Jupiter',
    position: 'Operations Manager',
    url: '',
    startDate: '2023-06-01',
    endDate: '2023-10-01',
    highlights: [
      'Directed a team for pool and slide oversight with a strong safety focus.',
      'Managed inventory control and operational strategies for the bar and pizzeria.',
      'Contributed to marketing and sales strategy improvements.',
    ],
  },
  {
    name: 'Music Addicts SRL',
    position: 'Chief Executive Officer',
    url: '',
    startDate: '2019-07-01',
    endDate: '2020-09-01',
    summary: `Marketing consulting, event production, and HoReCa operations.`,
    highlights: [
      'Provided marketing consulting services optimizing online presence for clients.',
      'Coordinated 25+ events across the region.',
      'Managed two coffee establishments — HR, inventory, and day-to-day operations.',
    ],
  },
  {
    name: 'Camping Fain',
    position: 'Festival, Sales & Event Manager',
    url: '',
    startDate: '2020-03-01',
    endDate: '2022-04-01',
    summary: `Multi-role engagement across festival production, sales, and event management.`,
    highlights: [
      'Planned and executed multiple festivals and 12+ additional events, enhancing the facility offering.',
      'Drove revenue growth through strategic business development and marketing analysis.',
      'Diversified income streams contributing to revenue growth and financial sustainability.',
    ],
  },
  {
    name: 'Balloonline',
    position: 'Digital Growth Intern',
    url: '',
    startDate: '2019-04-01',
    endDate: '2019-09-01',
    highlights: [
      'Contributed to email marketing and sales efforts.',
      'Foundational digital marketing experience.',
    ],
  },
];

export default work;
