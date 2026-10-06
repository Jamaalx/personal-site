export interface GalleryImage {
  src: string;
  caption: string;
}

export interface Project {
  slug: string;
  title: string;
  subtitle?: string;
  externalLink?: string;
  image: string;
  date: string;
  desc: string;
  longDesc?: string;
  tech?: string[];
  featured?: boolean;
  gallery?: GalleryImage[];
}

const data: Project[] = [
  {
    slug: 'horecaos',
    title: 'HoReCaOS',
    subtitle: 'Operating system for restaurants, cafés and hotels',
    externalLink: 'https://horecaos.org',
    image: '/images/projects/horecaos.png',
    date: '2026-09-30',
    desc: 'My main product: one platform instead of six glued-together apps. POS with fiscal printers and card terminals, stock and goods receipt, recipes and food cost, HR and shifts, delivery integrations, e-Factura and SAF-T — plus AI agents that do the work when you ask in chat. Works offline.',
    longDesc: `HoReCaOS is a multi-tenant operating system for HoReCa businesses in Romania. It replaces the usual stack of POS + stock software + payroll spreadsheet + delivery tablets + invoicing tool with a single platform, and adds AI agents that act on the operator's behalf ("add product X", "I finished the stock count").

What's inside: POS for tables and counter service that keeps selling offline, a .NET fiscal bridge for Romanian fiscal printers and bank card terminals, weighing scales and thermal printing; stock, goods receipt (NIR) with OCR, recipes with weighted-average food cost, production across warehouses, supplier orders with approval; HR with shifts, GPS/QR clock-in, onboarding with e-signature; B2B ordering, delivery notes and automatic invoicing; e-Factura (ANAF) in and out; Bolt Food / Wolt / Glovo integrations; 295 granular permissions across 12 modules.

It runs as a web app, a Windows desktop app and an Android tablet app (Tauri), and connects to Claude and ChatGPT through its own MCP server with OAuth 2.1. Earlier ZED-ZEN products — Pulse, the delivery aggregator and the B2B shop — now live inside it as modules.`,
    tech: [
      'Next.js',
      'Supabase',
      'PostgreSQL',
      'Tauri',
      '.NET',
      'Vercel AI SDK',
      'MCP',
      'TypeScript',
    ],
    featured: true,
  },
  {
    slug: 'registru-firme',
    title: 'Registrul firmelor',
    subtitle: 'Free public register of 3.9M Romanian companies',
    externalLink: 'https://registru.horecaos.org',
    image: '/images/projects/registru.png',
    date: '2026-08-12',
    desc: 'Everything public about a Romanian company in one search: tax status, 14 years of financial statements, authorized activities, phone. 3.9M companies and 12.4M balance sheets from ANAF and ONRC, updated automatically. Bulk list checks, prospect lists, a HoReCa barometer and a free API.',
    longDesc: `A free public register of Romanian companies built on open data from ANAF and ONRC: 3.9 million companies, 12.4 million financial statements (2012–2025), 18.7 million authorized activities, refreshed automatically.

Use cases: paste a list of supplier VAT IDs and see who is fiscally inactive or insolvent; build a prospect list by industry, county and fiscal status with CSV export; watch newly registered companies; a monthly HoReCa barometer of openings and closures; industry statistics and company rankings. A free API (1,000 requests/day) and a widget that fills a form from a VAT ID. It also powers the company lookup inside HoReCaOS.`,
    tech: ['Node.js', 'Hono', 'PostgreSQL', 'TypeScript', 'Docker'],
    featured: true,
  },
  {
    slug: 'meniul-zilei',
    title: 'Meniul Zilei',
    subtitle: 'Daily lunch menus near you, collected over WhatsApp',
    externalLink: 'https://meniulzilei.eu',
    image: '/images/projects/meniul-zilei.png',
    date: '2026-09-24',
    desc: 'Restaurants send their daily menu on WhatsApp; it gets parsed, published on the site and pushed to Facebook and WhatsApp community groups automatically. Diners search "ciorbă de burtă" near them, filter by price, and earn points with QR check-ins. Live in Bistrița, Reghin and Târgu Mureș.',
    tech: [
      'Next.js',
      'Supabase',
      'WhatsApp (Evolution API)',
      'LLM parsing',
      'TypeScript',
    ],
  },
  {
    slug: 'grazianos-pizza-ape',
    title: "Graziano's Pizza Ape",
    subtitle: 'Website + booking for a mobile pizzeria in Germany',
    externalLink: 'https://grazianos-pizza-ape.com',
    image: '/images/projects/graziano.png',
    date: '2026-09-09',
    desc: 'German-language site for an event pizzeria in Kaiserslautern: menu, dates and locations, event enquiries with a price calculator, plus an admin panel for bookings and content. GDPR consent, Impressum and Datenschutz built in.',
    tech: ['Next.js', 'Supabase', 'TypeScript'],
  },
  {
    slug: 'soupart-site',
    title: 'Soup Art',
    subtitle: 'B2B website + CMS for a central kitchen',
    externalLink: 'https://soupart.zed-zen.com',
    image: '/images/projects/soupart-site.webp',
    date: '2026-10-01',
    desc: 'Website for a central kitchen that cooks soups, main courses and pies for restaurants, canteens and retailers: 33 product sheets with per-portion recipes, solutions per segment, a 94-photo gallery and a 5-step quote wizard. Everything is editable from a custom admin panel, plus a refreshed brand manual.',
    longDesc: `Soup Art supplies restaurants, canteens, cafés and stores with ready-cooked soups, main courses and pies. The site speaks to the chef or the owner, not to the end customer: no prices, just what the product is, how it ships and how fast it can be on the menu.

What's inside: 59 pages — a product catalogue with filters and search, a page per product with the recipe per portion, packaging and shelf life; six solution pages (HoReCa, retail and white-label, canteens, convenience stores, distributors, corporate events); food-safety and "how we work" pages; a blog; a quote builder that collects products into an offer, and a 5-question wizard that turns a visit into a qualified lead.

Behind it is a custom admin panel behind Cloudflare Access: texts, products, solutions, blog posts, new pages built from blocks, gallery uploads, leads with status and notes, company details and a full version history with one-click restore. Every save rebuilds the static site and rolls back on its own if the build fails. The brand manual was redone alongside it, with the real logo colours and the studio photography.`,
    tech: ['Node.js', 'Python', 'Supabase', 'Cloudflare Access', 'Docker'],
    gallery: [
      {
        src: '/images/projects/soupart-site/1.webp',
        caption:
          'Home — studio photography slideshow, cold-chain and shelf-life facts, client logos right under the hero.',
      },
      {
        src: '/images/projects/soupart-site/2.webp',
        caption:
          'Product catalogue — 33 products across soups, main courses, sides and pies, with filters and search.',
      },
      {
        src: '/images/projects/soupart-site/3.webp',
        caption:
          'Product page — the plated dish first, then recipe per portion, packaging and shelf life.',
      },
      {
        src: '/images/projects/soupart-site/4.webp',
        caption:
          'Gallery — 94 studio photos with category filters and a lightbox.',
      },
      {
        src: '/images/projects/soupart-site/5.webp',
        caption:
          'Quote request — products collected into an offer, with what happens after you send it.',
      },
      {
        src: '/images/projects/soupart-site/6.webp',
        caption: 'Mobile home page.',
      },
    ],
  },
  {
    slug: 'bilbor-offroad-fest',
    title: 'Bilbor Offroad Fest',
    subtitle: 'Identity, website and registrations for a 4x4 festival',
    externalLink: 'https://offroadfestbilbor.ro',
    image: '/images/projects/bilbor.webp',
    date: '2026-07-20',
    desc: 'A new off-road festival in a mountain village at 1,050 m: logo, poster, social kit and press kit, a website with crew registrations and its own database, and email campaigns to the people who signed up. The first edition brought 1,000+ people; pre-registration for 2027 is open.',
    tech: ['Static site', 'Supabase', 'Zoho Mail', 'Branding'],
    gallery: [
      {
        src: '/images/projects/bilbor/1.webp',
        caption:
          'Home — drone footage of the first edition and the save-the-date for 2027.',
      },
      {
        src: '/images/projects/bilbor/2.webp',
        caption:
          'Program — 4x4 trails, auto expo, camping and the edition II contest.',
      },
      {
        src: '/images/projects/bilbor/3.webp',
        caption: 'Mobile home page.',
      },
      ...[1, 2, 3, 4, 5, 6].map((n) => ({
        src: `/images/projects/bilbor/brand-${n}.webp`,
        caption: 'From the brand book.',
      })),
    ],
  },
  {
    slug: 'momentis-gold',
    title: 'Momentis Gold',
    subtitle: 'Website for a photo booth and 360 platform rental',
    externalLink: 'https://cabinafotobucuresti.ro',
    image: '/images/projects/momentis-gold.webp',
    date: '2026-04-05',
    desc: 'Presentation site for an events business in Bucharest — photo booth, magic mirror, 360 platform — with packages for weddings, christenings and corporate events and quote requests. Designed in Figma with the DrimRod agency, built 1:1 from the design, hosted and maintained by ZED-ZEN.',
    tech: ['Next.js', 'Figma', 'Coolify'],
    gallery: [
      {
        src: '/images/projects/momentis-gold/1.webp',
        caption: 'Home — booth formats and the wedding / christening packages.',
      },
      {
        src: '/images/projects/momentis-gold/2.webp',
        caption: 'Services page.',
      },
      {
        src: '/images/projects/momentis-gold/3.webp',
        caption: 'Mobile home page.',
      },
      ...[1, 2, 3, 4, 5, 6, 7, 8].map((n) => ({
        src: `/images/projects/momentis-gold/fig-${n}.webp`,
        caption: 'From the Figma design, made with DrimRod.',
      })),
    ],
  },
  {
    slug: 'visit-ardeal',
    title: 'Visit Ardeal',
    subtitle: 'Brand book + website migration for adventure tours',
    externalLink: 'https://visitardeal.ro',
    image: '/images/projects/visitardeal.webp',
    date: '2026-03-01',
    desc: 'Horse riding, off-road trails and campfires in Transylvania. Brand book (logo, colours, type, photography, tone of voice), then the site moved off an external platform onto ZED-ZEN infrastructure behind Cloudflare: faster builds, no platform fees, ongoing maintenance.',
    tech: ['React', 'Coolify', 'Cloudflare', 'Branding'],
    gallery: [
      {
        src: '/images/projects/visitardeal/1.webp',
        caption: 'Home page.',
      },
      {
        src: '/images/projects/visitardeal/2.webp',
        caption: 'Mobile home page.',
      },
      ...[1, 2, 3, 4, 5, 6].map((n) => ({
        src: `/images/projects/visitardeal/brand-${n}.webp`,
        caption: 'From the brand book.',
      })),
    ],
  },
  {
    slug: 'armonia-academy',
    title: 'Armonia Academy',
    subtitle: 'Brand book + website for a music school',
    externalLink: 'https://armoniaacademy.ro',
    image: '/images/projects/armonia.webp',
    date: '2025-10-01',
    desc: 'A music school in Bucharest with several locations: a 55-page brand book (story, logo, symbol, colours, type, layouts, applications) and a website with a course catalogue by instrument and location and online enrolment. Made together with the DrimRod agency.',
    tech: ['React', 'Tailwind CSS', 'Branding'],
    gallery: [
      {
        src: '/images/projects/armonia/1.webp',
        caption: 'Home page.',
      },
      {
        src: '/images/projects/armonia/2.webp',
        caption: 'Mobile home page.',
      },
      ...[1, 2, 3, 4, 5, 6, 7, 8].map((n) => ({
        src: `/images/projects/armonia/brand-${n}.webp`,
        caption: 'From the 55-page brand book.',
      })),
    ],
  },
  {
    slug: 'lunch-dealzz',
    title: 'Lunch Dealzz',
    subtitle: 'Own delivery-only lunch brand',
    image: '/images/projects/lunch-dealzz.webp',
    date: '2025-06-01',
    desc: 'A virtual lunch brand cooked in the kitchens of another brand, to fill their quiet midday hours: soup + main + dessert deals on Bolt Food, Wolt and Tazz from 4 kitchens in Bucharest. Concept, name, brand book, menus priced per channel, product photography and weekly reports — about 1.5 years live, 500–1,000 orders.',
    tech: ['Bolt Food', 'Wolt', 'Tazz', 'Branding'],
    gallery: [
      ...[1, 2, 3, 4, 5, 6].map((n) => ({
        src: `/images/projects/lunch-dealzz/brand-${n}.webp`,
        caption: 'From the brand book.',
      })),
      ...[1, 2, 3, 4, 5, 6].map((n) => ({
        src: `/images/projects/lunch-dealzz/camp-${n}.webp`,
        caption: 'Campaign creative for the delivery platforms.',
      })),
    ],
  },
  {
    slug: 'pulse',
    title: 'Pulse',
    subtitle: 'NFC waiter reviews — now a HoReCaOS module',
    image: '/images/projects/pulse.png',
    date: '2026-04-01',
    desc: 'Restaurants collect customer feedback per individual waiter via NFC tags or QR codes. Reviews take 10 seconds. Managers see real-time analytics on staff performance, scan source, and conversion. Includes AI-generated review responses, multi-location dashboard, NFC card shop, and Stripe subscriptions.',
    longDesc: `Pulse is a SaaS platform that lets restaurants collect customer feedback for individual waiters via NFC tags or QR codes. Customers tap the waiter's badge, leave a review in 10 seconds, and managers see real-time analytics on staff performance, scan source, and conversion rate.

Beyond review collection, Pulse includes a full management suite: per-waiter performance tracking, multi-location dashboard, AI-generated review responses configurable by tone and theme, alert system for negative reviews, NFC card shop with printable designs, QR code generator with NFC tag write instructions, team management, and Stripe subscription billing.

Built end-to-end including product design, database architecture with Row Level Security, real-time event handling, AI integration, payment system, and deployment.`,
    tech: ['Next.js', 'Supabase', 'Stripe', 'TypeScript', 'Tailwind CSS'],
    featured: true,
    gallery: [
      {
        src: '/images/projects/pulse/3.png',
        caption:
          'Landing hero with key stats: 10-second reviews, under €1 per review, 3x conversion, 100% privacy.',
      },
      {
        src: '/images/projects/pulse/1.png',
        caption:
          'Feature grid: NFC + QR, Smart Redirect, Analytics, Instant Alerts, Per-Waiter Profiles, Multi-Location.',
      },
      {
        src: '/images/projects/pulse/2.png',
        caption:
          'Pricing: single plan at €29.95/month with all features included, no upsells, no hidden limits.',
      },
      {
        src: '/images/projects/pulse/4.png',
        caption:
          'Main dashboard with real-time KPIs, scan-source breakdown (NFC/QR/Direct), 30-day trend, recent reviews.',
      },
      {
        src: '/images/projects/pulse/5.png',
        caption:
          'Waiters management — per-staff rating, scan count, review count, and conversion %.',
      },
      {
        src: '/images/projects/pulse/6.png',
        caption: 'Locations module with Google Review integration per branch.',
      },
      {
        src: '/images/projects/pulse/7.png',
        caption:
          'Reports with period filters, rating distribution, top waiters leaderboard, PDF & CSV export.',
      },
      {
        src: '/images/projects/pulse/8.png',
        caption:
          'NFC Card Shop — order printable cards directly: premade designs or custom upload.',
      },
      {
        src: '/images/projects/pulse/9.png',
        caption:
          'AI Responses configuration: tone, language, response length, knowledge base, themes per rating.',
      },
      {
        src: '/images/projects/pulse/10.png',
        caption:
          'Alerts — email notifications when a review drops below the chosen rating threshold.',
      },
      {
        src: '/images/projects/pulse/11.png',
        caption:
          'QR Generator — printable QR codes per waiter with NFC tag write instructions.',
      },
    ],
  },
  {
    slug: 'app-zedzen',
    title: 'App.zed-zen.com',
    subtitle: 'Delivery-platform aggregator — now inside HoReCaOS',
    image: '/images/projects/app-zedzen.png',
    date: '2026-03-15',
    desc: 'A SaaS platform that unifies restaurant operations across Bolt, Glovo, and Wolt. Aggregates orders, revenue, profitability, and 12,000+ customer reviews into a single dashboard with AI-assisted review responses, AI Studio for photos and content, menu cost management, and combo builder.',
    longDesc: `A SaaS platform that unifies restaurant operations across the major Romanian delivery platforms (Bolt, Glovo, Wolt). Aggregates orders, revenue, profitability, and 12,000+ customer reviews into a single dashboard with cross-platform BI.

Includes AI tools across the workflow: AI Studio for generating dish photos and ANPC-compliant descriptions, AI-assisted review responses with sentiment scoring across all platforms, and AI-generated draft replies. Other modules include CSV data import from each delivery platform, product/menu management with per-product cost tracking, combo menu builder, and full account/billing configuration.`,
    tech: ['Next.js', 'OpenAI API', 'Supabase', 'Stripe', 'TypeScript'],
    featured: true,
    gallery: [
      {
        src: '/images/projects/app-zedzen/1.png',
        caption:
          'Home overview — 12-month KPIs (orders, revenue, gross profit, rating) with daily trend charts and top-10 products.',
      },
      {
        src: '/images/projects/app-zedzen/2.png',
        caption:
          'BI dashboard — unified analytics across Glovo, Bolt Food, Wolt: orders, AOV, profitability, delivery timings.',
      },
      {
        src: '/images/projects/app-zedzen/3.png',
        caption:
          'Orders module — searchable order history across platforms with full per-order financial breakdown.',
      },
      {
        src: '/images/projects/app-zedzen/4.png',
        caption:
          'Data Import — 3-step CSV ingestion (Bolt/Glovo/Wolt) with drag-and-drop and upload history.',
      },
      {
        src: '/images/projects/app-zedzen/5.png',
        caption:
          'Product Management — menu overview with per-product cost, raw price, online price, profit margins.',
      },
      {
        src: '/images/projects/app-zedzen/6.png',
        caption:
          'AI Studio — generate photos, ANPC descriptions, delivery texts with a built-in style library.',
      },
      {
        src: '/images/projects/app-zedzen/7.png',
        caption:
          'Combo Menus — drag-and-drop builder for promotional combos from the existing product catalog.',
      },
      {
        src: '/images/projects/app-zedzen/8.png',
        caption:
          'Customer Care — 12,680 reviews across platforms with sentiment scoring and AI-generated draft responses.',
      },
      {
        src: '/images/projects/app-zedzen/9.png',
        caption:
          'Integrations — connect Google Business and TripAdvisor to sync reviews into the customer-care inbox.',
      },
      {
        src: '/images/projects/app-zedzen/10.png',
        caption:
          'Settings — account, restaurant, platform-linking, notifications, security, commissions, branding, billing.',
      },
    ],
  },
  {
    slug: 'nexus-dashboard',
    title: 'Nexus Dashboard',
    subtitle: 'Business intelligence layer over ERP API',
    image: '/images/projects/nexus.png',
    date: '2026-02-20',
    desc: 'A BI dashboard pulling live data from the Nexus ERP API (1,370+ endpoints). Surfaces sales, expenses, gross profit, cash flow, top products, client balances, overdue invoices, and supplier balances — with monthly evolution charts and 12-month range filtering. Includes Excel export across all modules.',
    longDesc: `A business intelligence dashboard built on top of the Nexus ERP API (1,370+ endpoints). Pulls live data and surfaces sales, expenses, gross profit, cash flow, top products, client balances, overdue invoices, and supplier balances — with monthly evolution charts and 12-month range filtering.

Includes per-product margin analysis, raw-material price comparison across supplier tiers, production tracking with day-by-day breakdown, B2B online shop client management with approval workflow, and Excel export across all modules. Used internally as the operational BI tool for a food brand running both retail and wholesale operations.`,
    tech: ['Next.js', 'TypeScript', 'Supabase', 'REST API', 'Tailwind CSS'],
    featured: true,
    gallery: [
      {
        src: '/images/projects/nexus-dashboard/1.png',
        caption:
          'Sales & Cash Flow — KPIs, monthly evolution and top products (client figures blurred).',
      },
      {
        src: '/images/projects/nexus-dashboard/8.png',
        caption:
          'Online Shop Clients — B2B wholesale buyers with approval workflow, credit limit, order count, status.',
      },
    ],
  },
  {
    slug: 'floteris',
    title: 'Floteris',
    subtitle: 'Fleet management SaaS with AI RAG assistant',
    externalLink: 'https://floteris.zed-zen.com',
    image: '/images/projects/floteris.png',
    date: '2026-01-15',
    desc: 'Fleet management SaaS for Romanian logistics companies, built around an AI assistant that uses agentic RAG to answer questions across fleet documents, HR records, supplier data, and financial reports. Modules: fleet, HR, clients & suppliers, routes, financial, analytics — with embedded AI chat across every module.',
    longDesc: `Fleet management SaaS for Romanian logistics companies, built around an AI assistant that uses agentic RAG to answer questions across fleet documents, HR records, supplier data, and financial reports.

Modules: fleet management (tractors, semi-trailers, escorts, vehicles, documents), HR (drivers, auxiliary staff, payroll), clients & suppliers, routes/courses with status pipeline, financial, analytics, admin panel — with embedded AI chat across every module.

The RAG layer processes 2,000+ documents with AI extraction confidence scoring, surfacing operational insights that would otherwise require manual review of paperwork. Built on Vercel AI SDK + Supabase pgvector embeddings.`,
    tech: ['Next.js', 'Vercel AI SDK', 'Supabase', 'pgvector', 'TypeScript'],
    featured: true,
    gallery: [
      {
        src: '/images/projects/floteris/1.png',
        caption:
          'Landing — "Reduce fleet costs up to 30%" with live dashboard preview and ROI calculator entry.',
      },
      {
        src: '/images/projects/floteris/7.png',
        caption:
          'Dashboard — 6-month revenue/expense/profit chart, expense breakdown (per diem, repairs, fuel, leasing).',
      },
      {
        src: '/images/projects/floteris/6.png',
        caption:
          'Fleet module — tractors, trailers, escorts with searchable registration plates and per-vehicle detail pages.',
      },
      {
        src: '/images/projects/floteris/5.png',
        caption:
          'HR / Employees — driver and staff cards with active status, role tags, edit/merge/deactivate actions.',
      },
      {
        src: '/images/projects/floteris/4.png',
        caption:
          'Routes (Curse) — transport management with status pipeline, per-route per diem and cash, start action.',
      },
      {
        src: '/images/projects/floteris/2.png',
        caption:
          'Document archive — 2,182 docs processed with AI extraction confidence, financial values, status pipeline.',
      },
      {
        src: '/images/projects/floteris/3.png',
        caption:
          'Clients/suppliers directory with full sidebar (HR, Routes, Documents, Financial, Analytics, AI chat).',
      },
    ],
  },
  {
    slug: 'ciorbe-mobile',
    title: 'Ciorbe și Plăcinte Mobile App',
    subtitle: 'Restaurant chain loyalty & gamification app',
    image: '/images/projects/ciorbe-mobile.png',
    date: '2025-11-20',
    desc: 'Mobile app for a Romanian comfort-food restaurant chain covering the full customer experience: digital menu, ordering, time-limited offers, loyalty program with points, nutrition tracking, an in-app game, and referral rewards. Designed and built end-to-end.',
    longDesc: `Mobile app for a Romanian comfort-food restaurant chain covering the full customer experience: digital menu, ordering, time-limited offers, loyalty program with points, nutrition tracking, an in-app game, and referral rewards.

Designed and built end-to-end: mobile UX/UI, app development in Flutter, backend on Supabase, brand-aligned visual design, push notifications, and Romanian-language flows.`,
    tech: ['Flutter', 'Dart', 'Supabase', 'Push Notifications'],
    gallery: [
      {
        src: '/images/projects/ciorbe-mobile/01-hero-android-1080x1920.png',
        caption:
          'App hero — branded onboarding with nearest-restaurant detection and free account CTA.',
      },
      {
        src: '/images/projects/ciorbe-mobile/02-menu-android-1080x1920.png',
        caption:
          'Full digital menu — searchable by category (Ciorbe, Fel Principal, Plăcinte) with prices.',
      },
      {
        src: '/images/projects/ciorbe-mobile/03-offers-android-1080x1920.png',
        caption:
          '"Deal of the day" with limited-time promo codes and time-based discount expiry.',
      },
      {
        src: '/images/projects/ciorbe-mobile/04-loyalty-android-1080x1920.png',
        caption:
          'Loyalty program — earn points per visit, daily-visit streak, QR scan for +5 bonus points.',
      },
      {
        src: '/images/projects/ciorbe-mobile/05-nutrition-android-1080x1920.png',
        caption:
          'Nutrition calculator — daily kcal/protein/carbs/fat tracking with per-dish breakdown.',
      },
      {
        src: '/images/projects/ciorbe-mobile/06-game-android-1080x1920.png',
        caption:
          'Gamified retention — "Catch the soup" mini-game with score rewards into loyalty points.',
      },
      {
        src: '/images/projects/ciorbe-mobile/07-referral-android-1080x1920.png',
        caption:
          'Referral program — personal code, both inviter and invitee earn points on referral.',
      },
      {
        src: '/images/projects/ciorbe-mobile/08-cta-android-1080x1920.png',
        caption:
          'Final CTA — sign-up entry point with brand tagline and reward promise.',
      },
    ],
  },
  {
    slug: 'terasa-florilor',
    title: 'Terasa Florilor',
    subtitle: 'Restaurant brand website with admin panel',
    image: '/images/projects/terasa.png',
    date: '2025-09-10',
    desc: 'Custom-built website for a Bucharest restaurant brand. Includes a bold visual identity, full ordering flow with cart and checkout, event management with ticketing, and a custom admin panel for products, orders, events, comments, newsletter, and fiscal receipts.',
    longDesc: `Custom-built website for a Bucharest restaurant brand. Includes a bold visual identity, full ordering flow with cart and checkout, multi-step pickup/delivery + cash/online payment options, event management with ticketing, and a custom admin panel for products, orders, events, comments, newsletter, and fiscal receipts.

Built end-to-end as a freelance project: brand-aligned design, frontend development, custom backend, content management, hosting.`,
    tech: ['React', 'Node.js', 'Vite', 'Tailwind CSS'],
    gallery: [
      {
        src: '/images/projects/terasa-florilor/1.png',
        caption:
          'Landing hero — "Soluția #1 când îți este foame în București" with bold food photography.',
      },
      {
        src: '/images/projects/terasa-florilor/2.png',
        caption:
          'Order page — searchable product catalog with category filters and price-range slider.',
      },
      {
        src: '/images/projects/terasa-florilor/3.png',
        caption:
          'Cart modal with smart cross-sell — "You may also like" upsells before checkout.',
      },
      {
        src: '/images/projects/terasa-florilor/4.png',
        caption:
          'Desktop cart view — items list, recommendations, order summary with totals.',
      },
      {
        src: '/images/projects/terasa-florilor/5.png',
        caption:
          'Checkout — contact info, pickup vs delivery, address, online vs cash payment, order summary.',
      },
      {
        src: '/images/projects/terasa-florilor/11.png',
        caption:
          'Admin Dashboard — revenue trend, order status breakdown, payment method, delivery type analytics.',
      },
      {
        src: '/images/projects/terasa-florilor/6.png',
        caption:
          'Admin Orders — full order history with payment method, type, status badges, expandable details.',
      },
      {
        src: '/images/projects/terasa-florilor/7.png',
        caption:
          'Admin Products — product CRUD with category, price, availability toggle, search and filters.',
      },
      {
        src: '/images/projects/terasa-florilor/8.png',
        caption:
          'Admin Events — events list with publish status, edit/delete actions, full pipeline of upcoming shows.',
      },
      {
        src: '/images/projects/terasa-florilor/9.png',
        caption:
          'Admin "Add Event" form — date/time, description, image upload, ticket pricing, Facebook URL.',
      },
      {
        src: '/images/projects/terasa-florilor/10.png',
        caption:
          'Public Events page — upcoming events grid with poster images and "Aflu detalii" CTA cards.',
      },
    ],
  },
];

export default data;
