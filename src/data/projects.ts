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
    slug: 'pulse',
    title: 'Pulse',
    subtitle: 'NFC waiter review SaaS with real-time analytics',
    image: '/images/projects/pulse.png',
    date: '2026-04-01',
    desc: 'Restaurants collect customer feedback per individual waiter via NFC tags or QR codes. Reviews take 10 seconds. Managers see real-time analytics on staff performance, scan source, and conversion. Includes AI-generated review responses, multi-location dashboard, NFC card shop, and Stripe subscriptions.',
    longDesc: `Pulse is a SaaS platform that lets restaurants collect customer feedback for individual waiters via NFC tags or QR codes. Customers tap the waiter's badge, leave a review in 10 seconds, and managers see real-time analytics on staff performance, scan source, and conversion rate.

Beyond review collection, Pulse includes a full management suite: per-waiter performance tracking, multi-location dashboard, AI-generated review responses configurable by tone and theme, alert system for negative reviews, NFC card shop with printable designs, QR code generator with NFC tag write instructions, team management, and Stripe subscription billing.

Built end-to-end including product design, database architecture with Row Level Security, real-time event handling, AI integration, payment system, and deployment.`,
    tech: ['Next.js', 'Supabase', 'Stripe', 'TypeScript', 'Tailwind CSS'],
    featured: true,
    gallery: [
      { src: '/images/projects/pulse/3.png', caption: 'Landing hero with key stats: 10-second reviews, under €1 per review, 3x conversion, 100% privacy.' },
      { src: '/images/projects/pulse/1.png', caption: 'Feature grid: NFC + QR, Smart Redirect, Analytics, Instant Alerts, Per-Waiter Profiles, Multi-Location.' },
      { src: '/images/projects/pulse/2.png', caption: 'Pricing: single plan at €29.95/month with all features included, no upsells, no hidden limits.' },
      { src: '/images/projects/pulse/4.png', caption: 'Main dashboard with real-time KPIs, scan-source breakdown (NFC/QR/Direct), 30-day trend, recent reviews.' },
      { src: '/images/projects/pulse/5.png', caption: 'Waiters management — per-staff rating, scan count, review count, and conversion %.' },
      { src: '/images/projects/pulse/6.png', caption: 'Locations module with Google Review integration per branch.' },
      { src: '/images/projects/pulse/7.png', caption: 'Reports with period filters, rating distribution, top waiters leaderboard, PDF & CSV export.' },
      { src: '/images/projects/pulse/8.png', caption: 'NFC Card Shop — order printable cards directly: premade designs or custom upload.' },
      { src: '/images/projects/pulse/9.png', caption: 'AI Responses configuration: tone, language, response length, knowledge base, themes per rating.' },
      { src: '/images/projects/pulse/10.png', caption: 'Alerts — email notifications when a review drops below the chosen rating threshold.' },
      { src: '/images/projects/pulse/11.png', caption: 'QR Generator — printable QR codes per waiter with NFC tag write instructions.' },
    ],
  },
  {
    slug: 'app-zedzen',
    title: 'App.zed-zen.com',
    subtitle: 'AI restaurant operations platform',
    externalLink: 'https://app.zed-zen.com',
    image: '/images/projects/app-zedzen.png',
    date: '2026-03-15',
    desc: 'A SaaS platform that unifies restaurant operations across Bolt, Glovo, and Wolt. Aggregates orders, revenue, profitability, and 12,000+ customer reviews into a single dashboard with AI-assisted review responses, AI Studio for photos and content, menu cost management, and combo builder.',
    longDesc: `A SaaS platform that unifies restaurant operations across the major Romanian delivery platforms (Bolt, Glovo, Wolt). Aggregates orders, revenue, profitability, and 12,000+ customer reviews into a single dashboard with cross-platform BI.

Includes AI tools across the workflow: AI Studio for generating dish photos and ANPC-compliant descriptions, AI-assisted review responses with sentiment scoring across all platforms, and AI-generated draft replies. Other modules include CSV data import from each delivery platform, product/menu management with per-product cost tracking, combo menu builder, and full account/billing configuration.`,
    tech: ['Next.js', 'OpenAI API', 'Supabase', 'Stripe', 'TypeScript'],
    featured: true,
    gallery: [
      { src: '/images/projects/app-zedzen/1.png', caption: 'Home overview — 12-month KPIs (orders, revenue, gross profit, rating) with daily trend charts and top-10 products.' },
      { src: '/images/projects/app-zedzen/2.png', caption: 'BI dashboard — unified analytics across Glovo, Bolt Food, Wolt: orders, AOV, profitability, delivery timings.' },
      { src: '/images/projects/app-zedzen/3.png', caption: 'Orders module — searchable order history across platforms with full per-order financial breakdown.' },
      { src: '/images/projects/app-zedzen/4.png', caption: 'Data Import — 3-step CSV ingestion (Bolt/Glovo/Wolt) with drag-and-drop and upload history.' },
      { src: '/images/projects/app-zedzen/5.png', caption: 'Product Management — menu overview with per-product cost, raw price, online price, profit margins.' },
      { src: '/images/projects/app-zedzen/6.png', caption: 'AI Studio — generate photos, ANPC descriptions, delivery texts with a built-in style library.' },
      { src: '/images/projects/app-zedzen/7.png', caption: 'Combo Menus — drag-and-drop builder for promotional combos from the existing product catalog.' },
      { src: '/images/projects/app-zedzen/8.png', caption: 'Customer Care — 12,680 reviews across platforms with sentiment scoring and AI-generated draft responses.' },
      { src: '/images/projects/app-zedzen/9.png', caption: 'Integrations — connect Google Business and TripAdvisor to sync reviews into the customer-care inbox.' },
      { src: '/images/projects/app-zedzen/10.png', caption: 'Settings — account, restaurant, platform-linking, notifications, security, commissions, branding, billing.' },
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
      { src: '/images/projects/nexus-dashboard/1.png', caption: 'Sales & Cash Flow — KPIs (sales, expenses, profit, cash flow) with 12-month chart and top-products bar chart.' },
      { src: '/images/projects/nexus-dashboard/4.png', caption: 'Clients & Balances — 26 active clients, total balance and overdue tracking, per-client invoice status.' },
      { src: '/images/projects/nexus-dashboard/2.png', caption: 'Supplier Balances — 179 suppliers, total invoiced vs paid, overdue tracking with CSV/Excel export.' },
      { src: '/images/projects/nexus-dashboard/3.png', caption: 'Financial Report — net sales, food cost, gross margin %, per-product breakdown by sales channel.' },
      { src: '/images/projects/nexus-dashboard/9.png', caption: 'Products — 599 SKUs across 66 categories with per-channel pricing (Auchan, own retail, wholesale).' },
      { src: '/images/projects/nexus-dashboard/7.png', caption: 'Food Cost — raw-material price comparison across 3 supplier tiers, colour-coded best/worst per ingredient.' },
      { src: '/images/projects/nexus-dashboard/5.png', caption: 'Production — 808k RON over 35 days, unique products and average daily value, with raw-material consumption.' },
      { src: '/images/projects/nexus-dashboard/6.png', caption: 'Daily Production — day-by-day production volume and top products for kitchen capacity planning.' },
      { src: '/images/projects/nexus-dashboard/8.png', caption: 'Online Shop Clients — B2B wholesale buyers with approval workflow, credit limit, order count, status.' },
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
      { src: '/images/projects/floteris/1.png', caption: 'Landing — "Reduce fleet costs up to 30%" with live dashboard preview and ROI calculator entry.' },
      { src: '/images/projects/floteris/7.png', caption: 'Dashboard — 6-month revenue/expense/profit chart, expense breakdown (per diem, repairs, fuel, leasing).' },
      { src: '/images/projects/floteris/6.png', caption: 'Fleet module — tractors, trailers, escorts with searchable registration plates and per-vehicle detail pages.' },
      { src: '/images/projects/floteris/5.png', caption: 'HR / Employees — driver and staff cards with active status, role tags, edit/merge/deactivate actions.' },
      { src: '/images/projects/floteris/4.png', caption: 'Routes (Curse) — transport management with status pipeline, per-route per diem and cash, start action.' },
      { src: '/images/projects/floteris/2.png', caption: 'Document archive — 2,182 docs processed with AI extraction confidence, financial values, status pipeline.' },
      { src: '/images/projects/floteris/3.png', caption: 'Clients/suppliers directory with full sidebar (HR, Routes, Documents, Financial, Analytics, AI chat).' },
    ],
  },
  {
    slug: 'soupart-shop',
    title: 'Soupart Shop',
    subtitle: 'B2B food wholesale e-commerce',
    externalLink: 'https://soupart.horecaos.org/shop',
    image: '/images/projects/shop.png',
    date: '2025-12-10',
    desc: 'B2B e-commerce platform for a Romanian food brand serving HoReCa clients. Wholesale buyers browse a catalog pulled live from the client\'s ERP API, place orders, and pay through Stripe. Currently processing 85+ confirmed orders.',
    longDesc: `B2B e-commerce platform built for a Romanian food brand serving HoReCa clients (restaurants, cafes, hotels). Wholesale buyers register, browse a product catalog pulled live from the client's ERP API, place orders, and pay through Stripe.

Features: real-time catalog and pricing sync from ERP, B2B account management with company/CUI validation, multi-step checkout, order history with status tracking, admin order management, automated invoicing. Currently processing 85+ confirmed orders.`,
    tech: ['Next.js', 'Supabase', 'Stripe', 'REST API', 'TypeScript'],
    gallery: [
      { src: '/images/projects/soupart-shop/2.png', caption: 'Landing — B2B wholesale homepage with fresh-product hero, category browsing, popular products grid.' },
      { src: '/images/projects/soupart-shop/1.png', caption: '"My Orders" — 85+ confirmed wholesale orders with status badges (Confirmed / Finalized) and per-order RON values.' },
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
      { src: '/images/projects/ciorbe-mobile/01-hero-android-1080x1920.png', caption: 'App hero — branded onboarding with nearest-restaurant detection and free account CTA.' },
      { src: '/images/projects/ciorbe-mobile/02-menu-android-1080x1920.png', caption: 'Full digital menu — searchable by category (Ciorbe, Fel Principal, Plăcinte) with prices.' },
      { src: '/images/projects/ciorbe-mobile/03-offers-android-1080x1920.png', caption: '"Deal of the day" with limited-time promo codes and time-based discount expiry.' },
      { src: '/images/projects/ciorbe-mobile/04-loyalty-android-1080x1920.png', caption: 'Loyalty program — earn points per visit, daily-visit streak, QR scan for +5 bonus points.' },
      { src: '/images/projects/ciorbe-mobile/05-nutrition-android-1080x1920.png', caption: 'Nutrition calculator — daily kcal/protein/carbs/fat tracking with per-dish breakdown.' },
      { src: '/images/projects/ciorbe-mobile/06-game-android-1080x1920.png', caption: 'Gamified retention — "Catch the soup" mini-game with score rewards into loyalty points.' },
      { src: '/images/projects/ciorbe-mobile/07-referral-android-1080x1920.png', caption: 'Referral program — personal code, both inviter and invitee earn points on referral.' },
      { src: '/images/projects/ciorbe-mobile/08-cta-android-1080x1920.png', caption: 'Final CTA — sign-up entry point with brand tagline and reward promise.' },
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
      { src: '/images/projects/terasa-florilor/1.png', caption: 'Landing hero — "Soluția #1 când îți este foame în București" with bold food photography.' },
      { src: '/images/projects/terasa-florilor/2.png', caption: 'Order page — searchable product catalog with category filters and price-range slider.' },
      { src: '/images/projects/terasa-florilor/3.png', caption: 'Cart modal with smart cross-sell — "You may also like" upsells before checkout.' },
      { src: '/images/projects/terasa-florilor/4.png', caption: 'Desktop cart view — items list, recommendations, order summary with totals.' },
      { src: '/images/projects/terasa-florilor/5.png', caption: 'Checkout — contact info, pickup vs delivery, address, online vs cash payment, order summary.' },
      { src: '/images/projects/terasa-florilor/11.png', caption: 'Admin Dashboard — revenue trend, order status breakdown, payment method, delivery type analytics.' },
      { src: '/images/projects/terasa-florilor/6.png', caption: 'Admin Orders — full order history with payment method, type, status badges, expandable details.' },
      { src: '/images/projects/terasa-florilor/7.png', caption: 'Admin Products — product CRUD with category, price, availability toggle, search and filters.' },
      { src: '/images/projects/terasa-florilor/8.png', caption: 'Admin Events — events list with publish status, edit/delete actions, full pipeline of upcoming shows.' },
      { src: '/images/projects/terasa-florilor/9.png', caption: 'Admin "Add Event" form — date/time, description, image upload, ticket pricing, Facebook URL.' },
      { src: '/images/projects/terasa-florilor/10.png', caption: 'Public Events page — upcoming events grid with poster images and "Aflu detalii" CTA cards.' },
    ],
  },
];

export default data;
