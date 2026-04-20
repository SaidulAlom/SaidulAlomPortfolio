import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowLeft } from 'lucide-react';
import ImageSlider from '../../../components/ImageSlider';
import PageTransition from '../../../components/PageTransition';
import ProjectLinks from '../../../components/ProjectLinks';

const projectImages: Record<string, string[]> = {
  "modern-fitness-tracker": ["/projects/fitness-tracker.png"],
  "saffron-and-spice": ["/projects/saffron-and-spice.svg"],
  "onesoul-e-corner-2": ["/projects/onesoul.png"],
  "onesoul-e-corner": ["/projects/OneSoul 1.png", "/projects/OneSoul 2.png", "/projects/OneSoul 3.png"],
  "guwahati-flavors": ["/projects/Guwahati Flavors 1.png", "/projects/Guwahati Flavors 2.png", "/projects/Guwahati Flavors 3.png"],
  "bella-vista": ["/projects/Bella Vista 1.png", "/projects/Bella Vista 2.png", "/projects/Bella Vista 3.png"],
  "modern-landing-page": ["/projects/ModernApp 1.png", "/projects/ModernApp 2.png", "/projects/ModernApp 3.png"],
  "weather-app": ["/projects/weather-app 1.png", "/projects/weather-app 2.png", "/projects/weather-app.png"],
  "futuristic-start-up": ["/projects/futuristic-start-up-landing-page.png"],
  "fitflow-gym": ["/projects/FitFlow 1.png", "/projects/FitFlow 2.png", "/projects/FitFlow 3.png"],
  "buildmart10": ["/projects/BuildMart.png"],
  "fintrack": ["/projects/FinTrack 1.png", "/projects/FinTrack 2.png", "/projects/FinTrack 3.png", "/projects/FinTrack 4.png", "/projects/FinTrack 5.png"]
};

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const project = projectData[slug];
  const title = project?.title ?? slug.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ');
  const description = project?.description ?? `Detailed case study and technical breakdown for the ${title} project built by Saidul Alom.`;
  const ogImage = projectImages[slug]?.[0] ?? '/SaidulAlomLogo.png';

  return {
    title: `${title} Case Study`,
    description,
    alternates: { canonical: `/project/${slug}` },
    openGraph: {
      title: `${title} Case Study | Saidul Alom`,
      description,
      url: `/project/${slug}`,
      images: [{ url: ogImage, width: 1200, height: 630, alt: `${title} preview` }],
    },
    twitter: {
      card: 'summary_large_image',
      title: `${title} Case Study | Saidul Alom`,
      description,
      images: [ogImage],
    },
  };
}

const projectData: Record<string, {
  title: string;
  tech: string[];
  description: string;
  problem: string;
  solution: string;
  result: string;
  live: string;
  github: string;
  goals?: { goal: string; metric: string }[];
  features?: { name: string; detail: string }[];
  architecture?: string;
  dataFlow?: string;
  security?: { concern: string; implementation: string }[];
  performance?: string[];
  limitations?: { area: string; current: string; improvement: string }[];
}> = {
  "modern-fitness-tracker": {
    title: "FORGEFIT — Modern Fitness Tracker",
    tech: ["Next.js 15", "React 19", "TypeScript 5", "Tailwind CSS v4", "Chart.js 4", "Insforge SDK", "PostgreSQL", "PWA / Service Worker"],
    description: "FORGEFIT is a full-stack fitness tracking web application built with Next.js 15 (App Router), React 19, TypeScript, and Tailwind CSS v4. It targets athletes and fitness enthusiasts who want a single platform to log workouts, track body composition, monitor nutrition, follow structured plans, and compete in challenges — all with a dark, high-performance aesthetic. The application is backed by Insforge (a Supabase-compatible BaaS) for authentication, a PostgreSQL database, and real-time data, and is designed as a Progressive Web App (PWA) with offline-capable service worker support.",
    problem: "Most fitness apps are either too simple (basic loggers) or too complex (bloated with features users never touch). Athletes needed a single place to log workouts, meals, and body measurements; visual progress analytics without needing a third-party tool; structured workout plans they can start immediately; accountability through challenges; and a fast, installable experience that works on mobile.",
    solution: "Architected a multi-page Next.js App Router application with isolated feature domains. A dual-mode data layer (Insforge cloud DB for authenticated users, localStorage for guests) removes sign-up friction entirely. Real streak logic, guided active workout sessions with rest timers, Chart.js analytics, and a Plan Builder make the app both powerful and approachable.",
    result: "A polished, production-quality fitness platform deployed on Netlify with sub-second load times. The app is fully functional without an account, and cloud data sync is seamless on sign-up. Premium dark UI with scroll-triggered animations drives daily re-engagement.",
    live: "https://modernfitnesstracker.netlify.app/",
    github: "https://github.com/SaidulAlom/Fitness_Tracker",
    goals: [
      { goal: "Frictionless workout logging", metric: "Log a set in under 10 seconds" },
      { goal: "Real-time progress visibility", metric: "Charts update immediately after logging" },
      { goal: "Offline-first capability", metric: "App loads and logs data without internet" },
      { goal: "Secure authentication", metric: "JWT-based auth with httpOnly cookies" },
      { goal: "Cross-device data sync", metric: "Cloud persistence for signed-in users" },
    ],
    features: [
      { name: "🏠 Dashboard", detail: "Central hub showing Day Streak, Sets Today, Calorie Balance, Today's Plan, Recent PRs, and Quick Links. Streak algorithm skips today if no workout has been logged yet." },
      { name: "📊 Progress Tracker", detail: "Core logging page with a Daily Workout Log, Volume bar chart (7D/30D/90D), Muscle Focus doughnut chart, Body Tracker with line chart, Nutrition Tracker with MacroRing charts, and auto-computed Personal Records." },
      { name: "📋 Workout Plans", detail: "Three tiers: Featured Plans (Weight Loss, Muscle Gain, Raw Strength), 6 Prebuilt Plans (Push/Pull/Leg Day, HIIT Blast, Core & Mobility, Full Body Beginner), and unlimited user-built Custom Plans via a Plan Builder modal." },
      { name: "⚡ Active Workout Session", detail: "Guided workout experience with exercise sidebar, set/rep/weight tracking, 60-second rest timer (turns orange at 10s), live elapsed stopwatch, and overall progress bar. Saves all sets via bulk insert on completion." },
      { name: "📚 Exercise Library", detail: "20 exercises with muscle group & difficulty filters, form tips, set/rep prescriptions, and a one-tap Log It button directly from the detail modal." },
      { name: "🏆 Challenges", detail: "Three structured challenges: Core Ignition (7-day), Total Body Reset (30-day), and 100 Push-Up Protocol (rep-based). Auto-resets if a day is missed." },
      { name: "💳 Membership", detail: "Free tier (basic logging, 50 exercises, 1 challenge) and Pro tier ($12/month) with full feature set including AI coaching and advanced analytics." },
    ],
    architecture: "All database calls are centralised in src/lib/db.ts. Every function checks for an authenticated user first — if none exists, it falls back to localStorage. This dual-mode approach means the app is fully functional without an account, and data migrates to the cloud on sign-up. Authentication uses Next.js Server Actions with httpOnly cookies (15-min access token + 7-day refresh token), and middleware protects routes on every request.",
    dataFlow: "User Action → React Component → Authenticated? → Insforge DB (PostgreSQL via REST) / Guest? → localStorage (forgefit_* keys)",
    security: [
      { concern: "Auth tokens", implementation: "httpOnly cookies, not localStorage" },
      { concern: "Access token lifetime", implementation: "15 minutes" },
      { concern: "Refresh token lifetime", implementation: "7 days" },
      { concern: "Route protection", implementation: "Middleware checks cookie on every request" },
      { concern: "Input validation", implementation: "Server-side validateWorkout() before any DB write" },
      { concern: "Security headers", implementation: "CSP, HSTS, X-Frame-Options, X-Content-Type-Options, Referrer-Policy" },
      { concern: "CSRF", implementation: "SameSite=lax on all auth cookies" },
    ],
    performance: [
      "Chart caching — workout data cached in a useRef; range tab changes recompute locally without refetching",
      "Parallel data fetching — Dashboard and NutritionTracker use Promise.all to fetch multiple resources simultaneously",
      "Font optimisation — All fonts loaded via next/font for automatic subsetting and zero layout shift",
      "Lazy chart destruction — Every Chart.js instance returns a cleanup function to prevent memory leaks",
      "Event-driven updates — Components listen for workoutUpdated custom events instead of polling",
    ],
    limitations: [
      { area: "Calorie burn", current: "Fixed 220 kcal per workout entry", improvement: "MET-based calculation using exercise type, duration, and user weight" },
      { area: "Macro goals", current: "Hardcoded (2500 kcal, 180g P, 280g C, 70g F)", improvement: "User-configurable goals stored in a user_settings table" },
      { area: "Payments", current: "UI only, no payment integration", improvement: "Integrate Stripe with webhook-based plan activation" },
      { area: "AI coaching", current: "Listed as Pro feature, not yet implemented", improvement: "Integrate an LLM API for personalised workout suggestions" },
      { area: "Offline caching", current: "Service worker handles notifications only", improvement: "Add Workbox cache-first strategy for static assets" },
    ],
  },
  "saffron-and-spice": {
    title: "Saffron & Spice",
    tech: ["React 19", "TypeScript", "Vite", "Tailwind CSS v4", "Motion", "Express", "Supabase", "Prisma", "Railway / Render"],
    description: "Saffron & Spice is a portfolio-grade full-stack web application for a premium Indian fine dining restaurant. It pairs a motion-rich React frontend with a production-hardened Express API, real Supabase-backed data flows, and deployment-ready SEO and infrastructure. The project was built to demonstrate more than presentation: real reservations, real orders, real contact submissions, and a reliable demo experience even when external data is unavailable.",
    problem: "Most restaurant portfolio projects are static showcases that look polished but do not prove real engineering depth. This project needed to feel premium, support real backend-connected flows for orders, reservations, and contact, stay stable during demos, and ship with the kind of security and deployment setup expected in production.",
    solution: "Built a React 19 and Vite frontend with cinematic motion, interactive menu browsing, a persistent cart, multi-step checkout, reservation and contact flows, and route-level SEO. On the backend, Express handles validation, CSRF protection, rate limiting, secure middleware ordering, and Supabase persistence, while read-heavy content uses graceful fallback data so the app remains dependable in live demos.",
    result: "A polished full-stack restaurant experience now deployed live, with real API-backed submissions, demo-safe fallback content, production-minded security controls, and a strong case-study project that showcases both frontend craft and backend engineering.",
    live: "https://saffron-and-spice.onrender.com/",
    github: "https://github.com/SaidulAlom/saffron-and-spice/",
    goals: [
      { goal: "Premium brand presentation", metric: "Restaurant site feels cinematic and high-end on desktop and mobile" },
      { goal: "Real functional flows", metric: "Orders, reservations, and contact requests submit through the backend" },
      { goal: "Demo reliability", metric: "Read content still renders when Supabase is slow or unavailable" },
      { goal: "Production readiness", metric: "Security, SEO, manifest, and deployment config are included" },
      { goal: "Portfolio credibility", metric: "Typed codebase builds cleanly and communicates engineering decisions clearly" }
    ],
    features: [
      { name: "Animated landing experience", detail: "Scroll reveals, depth effects, staggered text animation, and hover interactions create a premium restaurant first impression without sacrificing responsiveness." },
      { name: "Interactive menu and cart", detail: "Menu items load by category, users can add dishes to a persistent cart, and totals update live before checkout." },
      { name: "Multi-step checkout flow", detail: "Checkout validates customer details, recomputes totals on the server, generates a unique order ID, and persists both orders and line items." },
      { name: "Reservation system", detail: "Guests can reserve tables with validated future dates, guest count, time slots, and special requests through a dedicated modal flow." },
      { name: "Contact handling", detail: "A server-validated contact form writes inquiries to the database and returns field-level feedback to the UI." },
      { name: "Fallback content strategy", detail: "Menu, testimonials, and gallery content gracefully fall back to local constants if Supabase reads fail, keeping the demo stable." },
      { name: "SEO and social sharing", detail: "Per-route metadata, sitemap, robots rules, manifest, and Open Graph assets are wired in for discoverability and polished sharing previews." },
      { name: "Optional AI chat proxy", detail: "A rate-limited backend proxy can forward prompts to Gemini so API keys stay server-side instead of leaking to the client." }
    ],
    architecture: "The browser loads a Vite-built React SPA, and in production Express serves both the frontend assets and the backend API from one deployed service. The frontend is split into route pages and reusable UI modules, while the server applies Helmet, CORS, logging, cookie parsing, CSRF protection, rate limiting, and route handlers in a deliberate order. Supabase stores application data, and Prisma is available for type-safe access and migrations.",
    dataFlow: "Browser -> React SPA -> Express API -> Validation and security middleware -> Supabase tables for contacts, reservations, orders, and order_items",
    security: [
      { concern: "HTTP hardening", implementation: "Helmet sets secure headers including HSTS, frame protections, and CSP in production" },
      { concern: "Cross-origin control", implementation: "CORS uses a strict origin allowlist with credentials enabled" },
      { concern: "CSRF", implementation: "Double-submit cookie protection via csrf-csrf with token fetch before POST requests" },
      { concern: "Rate limiting", implementation: "Write endpoints are throttled and the Gemini proxy uses tighter limits" },
      { concern: "Input validation", implementation: "Server-side validators check payloads before any database write" }
    ],
    performance: [
      "Vite keeps local development fast and produces a lean production build",
      "Manual chunk splitting reduces the size of the main client bundle",
      "Fallback data prevents empty states or broken demos when the database is unavailable",
      "Motion effects are structured around viewport-safe animation patterns instead of heavy custom cursor dependencies",
      "Express serves the built frontend directly in production to keep deployment simple"
    ],
    limitations: [
      { area: "Payments", current: "Checkout flow is implemented without a live payment gateway", improvement: "Integrate Stripe or Razorpay with confirmed payment states" },
      { area: "Back-office tooling", current: "No admin dashboard for managing reservations, orders, or menu items", improvement: "Build a protected admin interface for restaurant operations" },
      { area: "Notifications", current: "Orders and reservations do not trigger transactional email updates", improvement: "Add email delivery through Resend or SendGrid" },
      { area: "Image hosting", current: "Media can rely on remote URLs instead of an optimized managed pipeline", improvement: "Move assets into Supabase Storage with optimized delivery" },
      { area: "Offline support", current: "The app is installable but does not yet provide richer offline workflows", improvement: "Add service-worker caching and end-to-end offline UX polish" }
    ]
  },
  "onesoul-e-corner": {
    title: "OneSoul e-Corner",
    tech: ["React.js", "Node.js", "Express", "MongoDB", "Razorpay", "JWT", "Tailwind CSS"],
    description: "A full-stack e-commerce platform with JWT authentication, product management, cart system, and payment integration.",
    problem: "Users abandoned carts due to a complex, multi-step checkout with no guest option and slow page loads.",
    solution: "Redesigned checkout into a single-page flow with guest checkout and integrated Razorpay for seamless payments. Optimized API calls and added lazy loading.",
    result: "30% reduction in checkout drop-off and a 2x increase in completed orders post-launch.",
    live: "https://onesoul-e-corner.vercel.app/",
    github: "https://github.com/SaidulAlom/OneSoul-e-Corner"
  },
  "onesoul-e-corner-2": {
    title: "OneSoul e-Corner — Vision 2026",
    tech: ["Next.js 15", "TypeScript", "Firebase Auth", "Firestore", "Firebase Admin", "Google Genkit", "Tailwind CSS", "Radix UI", "shadcn/ui", "Recharts", "React Hook Form", "Zod", "Framer Motion", "TipTap", "Netlify"],
    description: "OneSoul e-Corner (Vision 2026) is a next-generation full-stack digital commerce platform built on Next.js 15 and powered by the full Firebase suite — Firestore, Auth, and Firebase Admin. It combines real-time product commerce, a TipTap-powered news hub, a live jobs portal, Recharts analytics dashboards, AI-powered content workflows via Google Genkit, vlog/e-book distribution, and a Firebase Auth-protected admin dashboard — all within a futuristic cyberpunk aesthetic.",
    problem: "Most e-commerce platforms stop at product browsing and checkout. This project needed to be an entire platform ecosystem — covering commerce, content authoring, real-time jobs, AI-generated content, and multimedia distribution — all managed by a single admin CMS without sacrificing performance or visual premium.",
    solution: "Architected as a Next.js 15 App Router application with feature-isolated domains (shop, news, jobs, vlogs, e-books, services, admin), each backed by Firestore for real-time data. shadcn/ui components built on Radix UI primitives power the UI system. React Hook Form with Zod handles all form validation. Google Genkit drives AI features, Firebase Auth gates the admin back-office, and Recharts renders analytics dashboards.",
    result: "A live, production-grade full-stack platform ecosystem at onesoulecorner.netlify.app — with real-time Firestore data, AI-powered content workflows, Recharts analytics, a fully functional admin back-office, and a futuristic cyberpunk identity built with Framer Motion animations.",
    live: "https://onesoulecorner.netlify.app/",
    github: "https://github.com/SaidulAlom/OneSoul-e-Corner-2.0",
    goals: [
      { goal: "Platform ecosystem", metric: "Shop, news, jobs, vlogs, e-books, and services under one roof" },
      { goal: "Real-time data", metric: "Firestore listeners update jobs, cart, and notifications instantly" },
      { goal: "Admin CMS", metric: "Non-developer can publish articles, jobs, and products via dashboard" },
      { goal: "AI integration", metric: "Genkit drives dynamic content generation and loading" },
      { goal: "Type-safe forms", metric: "Every user-facing form validated end-to-end with React Hook Form + Zod" },
    ],
    features: [
      { name: "🛍️ Shop + Wishlist + Cart", detail: "Full commerce engine with real-time Firestore-backed wishlist and cart, product discovery, and a clean checkout flow built with React Hook Form and Zod validation." },
      { name: "📰 News Hub", detail: "Dynamic content center where admins author rich articles via TipTap. HTML is stored in Firestore and rendered in the public news feed with a news ticker component." },
      { name: "💼 Jobs Portal", detail: "Live career listings synced from Firestore in real time. Admins post and manage openings from the dashboard; users apply via a Zod-validated application form." },
      { name: "🤖 AI Integration (Genkit)", detail: "Google Genkit with @genkit-ai/googleai and Vertex AI is integrated for generative content features, keeping the AI layer abstracted via server-side flows." },
      { name: "📊 Recharts Analytics", detail: "Admin dashboard includes data visualizations powered by Recharts showing platform activity, content metrics, and commerce performance." },
      { name: "🎥 Vlogs & E-Books", detail: "Dedicated distribution sections for video content and digital products, managed entirely through the admin dashboard with full CRUD support." },
      { name: "🔐 Admin Dashboard", detail: "Firebase Auth-protected back-office covering every platform domain with TipTap for rich-text authoring, @tanstack/react-table for data tables, and shadcn/ui for the UI system." },
      { name: "💾 cmdk Command Palette", detail: "Global keyboard-driven command palette (cmdk) for instant navigation across the platform from any page." },
    ],
    architecture: "The platform uses Next.js 15 App Router with feature-isolated route segments. Each domain (shop, news, jobs, vlogs, services, admin) has co-located components and Firestore data access via the Firebase SDK. Firebase Admin is used server-side for privileged operations. The UI system is built on shadcn/ui components backed by Radix UI primitives. React Hook Form + Zod handles all form state and validation. Google Genkit flows are invoked server-side.",
    dataFlow: "User → Next.js App Router → Firebase SDK → Firestore / Auth\nAdmin → TipTap Editor → Firestore (content)\nServer actions → Firebase Admin SDK → Privileged Firestore writes\nAI Feature → Genkit Flow → @genkit-ai/googleai → Vertex AI",
    security: [
      { concern: "Authentication", implementation: "Firebase Auth with persistent sessions; admin routes protected by Auth middleware" },
      { concern: "Server-side privilege", implementation: "firebase-admin SDK used for privileged operations, never exposed to the client" },
      { concern: "Form validation", implementation: "Zod schemas validate all inputs both client-side (React Hook Form) and server-side" },
      { concern: "Environment secrets", implementation: "Firebase config and Admin credentials scoped via environment variables" },
      { concern: "AI safety", implementation: "Genkit flows run server-side only; no API keys shipped to the browser" },
    ],
    performance: [
      "Next.js 15 App Router with React Server Components reduces client-side JS for data-heavy pages",
      "Firestore real-time listeners eliminate polling for jobs, cart, and notification updates",
      "shadcn/ui (Radix UI) primitives are accessible and animation-optimised with zero layout shift",
      "Framer Motion animations use GPU-accelerated transforms to avoid layout reflow",
      "Netlify CDN edge caches all static assets globally for sub-100ms TTFB",
    ],
    limitations: [
      { area: "Payments", current: "UI implemented, no live payment gateway", improvement: "Integrate Razorpay or Stripe with webhook-based order confirmation" },
      { area: "AI features", current: "Genkit integration present; some flows still in progress", improvement: "Expand to AI-driven product recommendations and content summarization" },
      { area: "Search", current: "cmdk command palette with basic Firestore queries", improvement: "Full-text search via Algolia or Typesense for cross-domain results" },
      { area: "Analytics", current: "Recharts in admin; no end-user analytics", improvement: "Firebase Analytics + custom event tracking" },
      { area: "PWA", current: "Not yet installable", improvement: "Add service worker, app manifest, and offline content caching" },
    ],
  },
  "buildmart10": {
    title: "Buildmart10",
    tech: ["React.js", "Tailwind CSS", "JavaScript", "Netlify"],
    description: "A niche e-commerce store for construction materials with category filtering, product search, and a responsive mobile-first UI.",
    problem: "Existing construction supply stores had poor mobile UX and slow product discovery, losing mobile customers.",
    solution: "Built a mobile-first React storefront with instant search, category filters, and optimized image loading using lazy load.",
    result: "40% faster page loads and significantly improved product discoverability on mobile devices.",
    live: "https://buildmart10.netlify.app/",
    github: "https://github.com/SaidulAlom"
  },
  "guwahati-flavors": {
    title: "Guwahati Flavors",
    tech: ["React.js", "Node.js", "Express", "MongoDB", "Tailwind CSS"],
    description: "A full-stack food ordering platform for local Guwahati restaurants with real-time menu updates, cart management, and order tracking.",
    problem: "Local restaurants lacked a digital ordering system, relying entirely on phone calls which caused frequent order errors.",
    solution: "Created a MERN-stack platform with live menu management for restaurant owners and a smooth ordering flow for customers.",
    result: "25% increase in order completion rate and eliminated manual order errors for partnered restaurants.",
    live: "https://guwahatiflavors.netlify.app/",
    github: "https://github.com/SaidulAlom/Guwahati-Flavors"
  },
  "bella-vista": {
    title: "Bella Vista",
    tech: ["React.js", "Framer Motion", "Tailwind CSS", "Vercel"],
    description: "A premium hotel and restaurant website with animated UI, table reservation system, and gallery.",
    problem: "The client had no online presence, losing potential bookings to competitors with modern websites.",
    solution: "Built an elegant, animation-rich website with an integrated reservation form, menu showcase, and photo gallery.",
    result: "45% increase in average session duration and a measurable rise in direct reservation inquiries.",
    live: "https://bella-vista-restro.vercel.app/",
    github: "https://github.com/SaidulAlom/Bella-Vista/"
  },
  "fintrack": {
    title: "FinTrack",
    tech: ["React.js", "Chart.js", "Node.js", "MongoDB", "Tailwind CSS"],
    description: "A personal finance tracker with income/expense logging, visual chart breakdowns, and monthly summaries.",
    problem: "Users struggled to visualize where their money was going each month without a simple, intuitive tracking tool.",
    solution: "Developed a dashboard with categorized transactions, Chart.js visualizations, and monthly budget comparisons.",
    result: "Users reported an average 20% reduction in unnecessary spending after one month of consistent use.",
    live: "https://fintrackfinances.netlify.app/",
    github: "https://github.com/SaidulAlom/FinTrack"
  },
  "fitflow-gym": {
    title: "FitFlow Gym",
    tech: ["HTML", "CSS", "JavaScript", "Netlify"],
    description: "A high-converting gym website with membership plans, trainer profiles, class schedules, and a contact form.",
    problem: "The gym had no website, relying on word-of-mouth which severely limited new member acquisition.",
    solution: "Built a visually bold, fully responsive website with clear CTAs, pricing tiers, and an inquiry form.",
    result: "35% increase in membership inquiries within the first month of going live.",
    live: "https://fitflow-gym.netlify.app/",
    github: "https://github.com/SaidulAlom/FitFlow-Gym-Website-"
  },
  "modern-landing-page": {
    title: "Modern Landing Page",
    tech: ["HTML", "CSS", "JavaScript", "Vercel"],
    description: "A pixel-perfect, fully responsive SaaS landing page with smooth scroll animations and optimized Core Web Vitals.",
    problem: "Generic landing page templates had poor performance scores and lacked the visual polish needed for SaaS products.",
    solution: "Hand-coded a custom landing page with CSS animations, lazy-loaded assets, and semantic HTML for maximum performance.",
    result: "Achieved a 98/100 Lighthouse score with sub-1s LCP and 100% accessibility compliance.",
    live: "https://modern-responsive-landing-page.vercel.app/",
    github: "https://github.com/SaidulAlom/Modern-Responsive-Landing-Page"
  },
  "weather-app": {
    title: "Weather App",
    tech: ["React.js", "OpenWeatherMap API", "Tailwind CSS", "Vercel"],
    description: "A real-time weather dashboard with 5-day forecasts, location search, and dynamic UI themes based on weather conditions.",
    problem: "Most weather apps show raw data without context — users couldn't quickly understand if conditions were good or bad.",
    solution: "Implemented dynamic background themes and weather icons that change based on conditions, making data instantly readable.",
    result: "Intuitive UX that communicates weather at a glance, with accurate real-time data for any city worldwide.",
    live: "https://weather-app-gamma-eight-59.vercel.app/",
    github: "https://github.com/SaidulAlom/weather-app"
  },
  "futuristic-start-up": {
    title: "Futuristic Start-up",
    tech: ["HTML", "CSS", "JavaScript", "Canvas API", "Vercel"],
    description: "An animation-heavy startup landing page with particle effects, scroll-triggered reveals, and a bold visual identity.",
    problem: "Startup landing pages often look generic and fail to communicate innovation or build excitement with visitors.",
    solution: "Used advanced CSS animations, canvas particle effects, and scroll reveals to create an immersive first impression.",
    result: "50% longer average session duration compared to a standard template, with strong visual recall.",
    live: "https://futuristic-start-up-landing-page.vercel.app/",
    github: "https://github.com/SaidulAlom/Futuristic-Start-up-Landing-Page"
  }
};

export default async function ProjectCaseStudy({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const title = slug.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
  const images = projectImages[slug] || [];
  const project = projectData[slug];

  return (
    <PageTransition>
    <div className="min-h-screen bg-black text-white font-sans selection:bg-[#a3ff33] selection:text-black">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 p-6 md:p-12 flex justify-between items-center z-50 pointer-events-none gap-4">
        <div className="pointer-events-auto shrink-0">
          <Link href="/">
            <Image src="/SaidulAlomLogo.png" alt="Saidul Alom Logo" width={40} height={40} className="h-6 sm:h-8 md:h-10 w-auto object-contain hover:scale-105 transition-transform duration-300" priority />
          </Link>
        </div>
        <Link href="/#projects" className="bg-white text-black px-6 py-2 rounded-full flex items-center gap-3 hover:scale-105 transition-transform duration-300 font-bold text-sm pointer-events-auto shadow-2xl">
          <ArrowLeft size={16} /> <span className="hidden md:inline">Back to Projects</span><span className="md:hidden">Back</span>
        </Link>
      </header>

      {/* Main Case Study Content */}
      <main className="pt-40 pb-24 px-8 md:px-12 max-w-6xl mx-auto">
        <div>
          <h1 className="text-4xl md:text-8xl font-bold tracking-tighter uppercase mb-6 text-[#a3ff33] leading-[0.9]">{title}</h1>
          <div className="w-24 h-[2px] bg-[#a3ff33]/50 mb-12" />
        </div>

        {/* Dynamic Image Gallery */}
        <ImageSlider images={images} title={title} />
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
          {/* Main Content Column */}
          <div className="lg:col-span-2 space-y-12">
            <section>
              <h2 className="text-2xl font-bold uppercase tracking-widest mb-6 flex items-center gap-4">
                Overview <div className="h-[1px] flex-1 bg-white/10" />
              </h2>
              <p className="text-gray-400 text-lg leading-relaxed">
                {project?.description ?? `A detailed case study for ${title}.`}
              </p>
            </section>

            <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="p-6 border border-red-500/20 rounded-2xl bg-red-500/5">
                <p className="text-red-400 text-xs font-bold uppercase tracking-widest mb-3">Problem</p>
                <p className="text-gray-300 text-sm leading-relaxed">{project?.problem ?? "—"}</p>
              </div>
              <div className="p-6 border border-blue-500/20 rounded-2xl bg-blue-500/5">
                <p className="text-blue-400 text-xs font-bold uppercase tracking-widest mb-3">Solution</p>
                <p className="text-gray-300 text-sm leading-relaxed">{project?.solution ?? "—"}</p>
              </div>
              <div className="p-6 border border-[#a3ff33]/20 rounded-2xl bg-[#a3ff33]/5">
                <p className="text-[#a3ff33] text-xs font-bold uppercase tracking-widest mb-3">Result</p>
                <p className="text-gray-300 text-sm leading-relaxed">{project?.result ?? "—"}</p>
              </div>
            </section>

            {/* Goals & Success Criteria */}
            {project?.goals && (
              <section>
                <h2 className="text-2xl font-bold uppercase tracking-widest mb-6 flex items-center gap-4">
                  Goals & Success Criteria <div className="h-[1px] flex-1 bg-white/10" />
                </h2>
                <div className="overflow-hidden rounded-2xl border border-white/10">
                  {project.goals.map((g, i) => (
                    <div key={i} className={`flex gap-6 p-5 ${i % 2 === 0 ? 'bg-white/[0.02]' : 'bg-transparent'} border-b border-white/5 last:border-0`}>
                      <p className="text-white text-sm font-semibold min-w-[200px]">{g.goal}</p>
                      <p className="text-gray-400 text-sm">{g.metric}</p>
                    </div>
                  ))}
                </div>
              </section>
            )}

            {/* Feature Breakdown */}
            {project?.features && (
              <section>
                <h2 className="text-2xl font-bold uppercase tracking-widest mb-6 flex items-center gap-4">
                  Feature Breakdown <div className="h-[1px] flex-1 bg-white/10" />
                </h2>
                <div className="space-y-4">
                  {project.features.map((f, i) => (
                    <div key={i} className="p-5 border border-white/10 rounded-2xl bg-white/[0.02] hover:border-[#a3ff33]/30 transition-colors">
                      <p className="text-white font-bold mb-2">{f.name}</p>
                      <p className="text-gray-400 text-sm leading-relaxed">{f.detail}</p>
                    </div>
                  ))}
                </div>
              </section>
            )}

            {/* Architecture */}
            {project?.architecture && (
              <section>
                <h2 className="text-2xl font-bold uppercase tracking-widest mb-6 flex items-center gap-4">
                  Architecture <div className="h-[1px] flex-1 bg-white/10" />
                </h2>
                <p className="text-gray-400 text-sm leading-relaxed mb-4">{project.architecture}</p>
                {project.dataFlow && (
                  <div className="p-5 bg-neutral-900 border border-white/10 rounded-2xl font-mono text-xs text-[#a3ff33] leading-relaxed whitespace-pre-wrap">
                    {project.dataFlow}
                  </div>
                )}
              </section>
            )}

            {/* Security */}
            {project?.security && (
              <section>
                <h2 className="text-2xl font-bold uppercase tracking-widest mb-6 flex items-center gap-4">
                  Security <div className="h-[1px] flex-1 bg-white/10" />
                </h2>
                <div className="overflow-hidden rounded-2xl border border-white/10">
                  {project.security.map((s, i) => (
                    <div key={i} className={`flex gap-6 p-4 ${i % 2 === 0 ? 'bg-white/[0.02]' : 'bg-transparent'} border-b border-white/5 last:border-0`}>
                      <p className="text-[#a3ff33] text-xs font-bold uppercase tracking-wider min-w-[180px] pt-0.5">{s.concern}</p>
                      <p className="text-gray-300 text-sm">{s.implementation}</p>
                    </div>
                  ))}
                </div>
              </section>
            )}

            {/* Performance */}
            {project?.performance && (
              <section>
                <h2 className="text-2xl font-bold uppercase tracking-widest mb-6 flex items-center gap-4">
                  Performance <div className="h-[1px] flex-1 bg-white/10" />
                </h2>
                <ul className="space-y-3">
                  {project.performance.map((p, i) => (
                    <li key={i} className="flex gap-3 items-start text-sm text-gray-400">
                      <span className="mt-1 w-1.5 h-1.5 rounded-full bg-[#a3ff33] shrink-0" />
                      {p}
                    </li>
                  ))}
                </ul>
              </section>
            )}

            {/* Limitations & Future Work */}
            {project?.limitations && (
              <section>
                <h2 className="text-2xl font-bold uppercase tracking-widest mb-6 flex items-center gap-4">
                  Known Limitations & Future Work <div className="h-[1px] flex-1 bg-white/10" />
                </h2>
                <div className="space-y-4">
                  {project.limitations.map((l, i) => (
                    <div key={i} className="p-5 border border-white/10 rounded-2xl bg-white/[0.02]">
                      <p className="text-white font-bold text-sm mb-2">{l.area}</p>
                      <p className="text-red-400 text-xs mb-1"><span className="font-bold uppercase tracking-wider">Current: </span>{l.current}</p>
                      <p className="text-[#a3ff33] text-xs"><span className="font-bold uppercase tracking-wider">Improvement: </span>{l.improvement}</p>
                    </div>
                  ))}
                </div>
              </section>
            )}
          </div>

          {/* Sidebar Detail Column */}
          <div className="space-y-8">
            <section className="p-8 border border-white/10 rounded-3xl bg-neutral-900/40 backdrop-blur-3xl hover:border-[#a3ff33]/30 transition-colors">
              <h3 className="text-xs font-bold uppercase tracking-widest text-[#a3ff33] mb-6">Technologies Used</h3>
              <div className="flex flex-wrap gap-2">
                {(project?.tech ?? ["React.js", "Tailwind CSS"]).map(tech => (
                  <span key={tech} className="px-4 py-2 bg-white/5 rounded-full text-xs font-medium text-white border border-white/10 cursor-default hover:bg-[#a3ff33] hover:text-black transition-colors">
                    {tech}
                  </span>
                ))}
              </div>
            </section>

            <section className="p-8 border border-white/10 rounded-3xl bg-neutral-900/40 backdrop-blur-3xl hover:border-[#a3ff33]/30 transition-colors">
              <h3 className="text-xs font-bold uppercase tracking-widest text-[#a3ff33] mb-6">Project Links</h3>
              <ProjectLinks projectTitle={project?.title ?? title} live={project?.live} github={project?.github} />
            </section>
          </div>
        </div>
      </main>

      {/* Subtle Grain Overlay */}
      <div className="pointer-events-none fixed inset-0 z-0 opacity-[0.04] bg-[url('https://grainy-gradients.vercel.app/noise.svg')]"></div>
    </div>
    </PageTransition>
  );
}
