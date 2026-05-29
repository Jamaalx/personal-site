export interface Service {
  title: string;
  tagline: string;
  description: string;
  bullets: string[];
  examples?: string[];
  pricing?: string;
  icon?: string;
}

const services: Service[] = [
  {
    title: 'SaaS MVP Development',
    tagline: 'Next.js + Supabase + Stripe — from idea to paying users in weeks.',
    description:
      'I build production-ready SaaS platforms end-to-end: product design, database architecture, auth, payments, and deployment. The same stack I use for my own products — Pulse, App.zed-zen, Floteris — battle-tested under real customer load.',
    bullets: [
      'Auth & multi-tenant Postgres with Row Level Security',
      'Stripe subscriptions with multi-tier pricing & billing portal',
      'Realtime features (live dashboards, notifications)',
      'Full DevOps: Vercel, Railway, or self-hosted on your own server',
    ],
    examples: ['Pulse', 'App.zed-zen.com', 'Floteris'],
    pricing: 'Project-based, typically €4,000 – €15,000',
  },
  {
    title: 'AI Apps & Agents',
    tagline: 'OpenAI, Claude, RAG, and agentic workflows that actually solve problems.',
    description:
      'I build AI features that go beyond "ChatGPT wrapper" — agentic flows with tool use, RAG over your knowledge base, AI-assisted content generation, and chat assistants embedded inside your app.',
    bullets: [
      'Custom chatbots grounded in your data (RAG + pgvector)',
      'Multi-step agents with tool use and structured output',
      'AI-generated content (text, images, descriptions, replies)',
      'Prompt engineering, evaluation, and cost optimization',
    ],
    examples: ['Floteris AI assistant', 'App.zed-zen AI Studio', 'Pulse AI review responses'],
    pricing: 'From €1,500 for integrations, €5,000+ for custom agents',
  },
  {
    title: 'Business Intelligence Dashboards',
    tagline: 'Turn your ERP, POS, or delivery-platform data into decisions.',
    description:
      'I build BI dashboards that pull from your existing systems (ERP APIs, delivery platforms, accounting software) and surface the metrics that drive operational decisions — sales, profitability, cash flow, top products, food cost.',
    bullets: [
      'Integration with Romanian ERPs (Nexus, FreyaCloud, etc.) and delivery platforms (Bolt, Glovo, Wolt)',
      'Custom metric design tailored to your business model',
      'Excel / CSV export across modules',
      'Multi-location, multi-currency, multi-platform aggregation',
    ],
    examples: ['Nexus Dashboard', 'App.zed-zen BI'],
    pricing: 'From €3,000 depending on integration complexity',
  },
  {
    title: 'B2B & E-commerce Platforms',
    tagline: 'Wholesale shops, ERP-synced catalogs, Stripe checkout.',
    description:
      'B2B-grade e-commerce built for real business workflows: company validation (CUI / VAT), credit limits, approval workflows, ERP catalog sync, and multi-step checkout. Plus admin panels that match the way your team actually works.',
    bullets: [
      'B2B account management with company / CUI validation',
      'Live catalog and pricing sync from your ERP',
      'Stripe checkout with online + cash-on-delivery flows',
      'Custom admin panel for orders, products, and accounts',
    ],
    examples: ['Soupart Shop', 'Terasa Florilor'],
    pricing: 'From €3,500 for catalog-driven shops',
  },
  {
    title: 'Mobile Apps (Flutter)',
    tagline: 'Cross-platform iOS + Android apps with Supabase backend.',
    description:
      'Mobile apps for hospitality and retail brands — loyalty programs, nutrition tracking, gamification, ordering, and push notifications. Single Flutter codebase deploys to both iOS and Android.',
    bullets: [
      'Loyalty programs with points, streaks, and rewards',
      'In-app games and gamified retention mechanics',
      'Push notifications and deep linking',
      'Brand-aligned UX/UI design included',
    ],
    examples: ['Ciorbe și Plăcinte mobile app'],
    pricing: 'From €5,000 for branded MVPs',
  },
  {
    title: 'Brand Websites & Restaurant Sites',
    tagline: 'Bold, fast, mobile-first sites with custom admin panels.',
    description:
      'Custom-built websites for restaurants and HoReCa brands. Full ordering flow with cart, delivery / pickup, event management with ticketing, and a custom admin panel — no Squarespace, no Shopify, no template restrictions.',
    bullets: [
      'Full ordering flow with multi-step checkout',
      'Event listings with ticketing and Facebook integration',
      'Custom admin panel (orders, products, events, newsletter)',
      'Mobile-responsive, SEO-ready, brand-aligned',
    ],
    examples: ['Terasa Florilor'],
    pricing: 'From €2,000 for landing-only, €5,000+ with admin panel',
  },
  {
    title: 'Managed Hosting & Self-Hosted Infrastructure',
    tagline: 'Run your stack on a dedicated server instead of Vercel + Supabase Cloud.',
    description:
      'I run a Hetzner EX44 dedicated server (128 GB RAM, NVMe storage, Coolify-managed) and can host your projects on it — self-hosted Supabase, Next.js apps, N8N workflows, scheduled pipelines, game servers. Significantly cheaper than cloud at scale, with no rate limits and no per-request pricing.',
    bullets: [
      'Self-hosted Supabase (Postgres + Auth + Storage + Realtime) on your own infrastructure',
      'Next.js app hosting via Coolify with automatic GitHub deploys',
      'N8N for automation workflows and cron pipelines',
      'Domain, SSL (Let\'s Encrypt), and backups configured for you',
      'Monitoring and incident response included',
    ],
    examples: ['ZED-ZEN infrastructure', 'HoReCa Tech Pipeline'],
    pricing: 'From €99/month per project, or one-time setup + your own server',
  },
];

export default services;
