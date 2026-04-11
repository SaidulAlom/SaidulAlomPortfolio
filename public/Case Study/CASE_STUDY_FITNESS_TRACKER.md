# FORGEFIT — Full Project Case Study

---

## 1. Project Overview

**FORGEFIT** is a full-stack fitness tracking web application built with Next.js 15 (App Router), React 19, TypeScript, and Tailwind CSS v4. It targets athletes and fitness enthusiasts who want a single platform to log workouts, track body composition, monitor nutrition, follow structured plans, and compete in challenges — all with a dark, high-performance aesthetic.

The application is backed by **Insforge** (a Supabase-compatible BaaS) for authentication, a PostgreSQL database, and real-time data. It is designed as a Progressive Web App (PWA) with offline-capable service worker support.

---

## 2. Problem Statement

Most fitness apps are either too simple (basic loggers) or too complex (bloated with features users never touch). Athletes needed:

- A single place to log workouts, meals, and body measurements
- Visual progress analytics without needing a third-party tool
- Structured workout plans they can start immediately
- Accountability through challenges
- A fast, installable experience that works on mobile

---

## 3. Goals & Success Criteria

| Goal | Metric |
|------|--------|
| Frictionless workout logging | Log a set in under 10 seconds |
| Real-time progress visibility | Charts update immediately after logging |
| Offline-first capability | App loads and logs data without internet |
| Secure authentication | JWT-based auth with httpOnly cookies |
| Cross-device data sync | Cloud persistence for signed-in users |

---

## 4. Tech Stack

| Layer | Technology |
|-------|-----------|
| Framework | Next.js 16 (App Router, Server Actions) |
| Language | TypeScript 5 |
| UI | React 19, Tailwind CSS v4 |
| Charts | Chart.js 4 |
| Backend / Auth / DB | Insforge SDK (@insforge/sdk) |
| Fonts | Google Fonts via next/font (Bebas Neue, Barlow Condensed, Barlow) |
| PWA | Custom Service Worker (sw.js) + Web App Manifest |
| Deployment Target | Vercel (Next.js native) |

---

## 5. Architecture

### 5.1 Folder Structure

```
src/
├── app/                  # Next.js App Router pages
│   ├── dashboard/        # Authenticated overview
│   ├── progress/         # Workout log + charts
│   ├── plans/            # Workout plan browser + builder
│   ├── library/          # Exercise reference library
│   ├── challenges/       # Streak-based challenges
│   ├── membership/       # Pricing tiers
│   ├── sign-in/          # Auth pages
│   ├── sign-up/
│   ├── forgot-password/
│   ├── layout.tsx        # Root layout (fonts, metadata, providers)
│   ├── error.tsx         # Global error boundary
│   └── not-found.tsx     # 404 page
├── components/           # All UI components (one per feature)
└── lib/
    ├── db.ts             # All database operations (CRUD + validation)
    ├── auth-actions.ts   # Server Actions for auth (sign in/up/out/reset)
    ├── insforge.ts       # Client-side Insforge singleton
    ├── insforge-server.ts# Server-side Insforge client (reads cookies)
    ├── notifications.ts  # Push notification helpers
    └── push.ts           # Service worker registration
```

### 5.2 Data Flow

```
User Action
    │
    ▼
React Component (client)
    │
    ├── Authenticated? ──► Insforge DB (PostgreSQL via REST)
    │
    └── Guest? ──────────► localStorage (forgefit_* keys)
```

All database calls are centralised in `src/lib/db.ts`. Every function checks for an authenticated user first; if none exists, it falls back to localStorage. This means the app is fully functional without an account, and data migrates to the cloud on sign-up.

### 5.3 Authentication Flow

1. User submits sign-in/sign-up form
2. Next.js Server Action (`auth-actions.ts`) calls Insforge auth API
3. On success, `accessToken` (15 min) and `refreshToken` (7 days) are stored as `httpOnly` cookies
4. Middleware (`src/middleware.ts`) reads the access token cookie on every request to protect routes
5. Server components use `getServerUser()` to verify identity without exposing tokens to the client

---

## 6. Feature Breakdown

### 6.1 Dashboard (`/dashboard`)

The central hub. On load it fetches workouts, today's meals, and custom plans in parallel using `Promise.all`. It displays:

- **Day Streak** — computed by walking backwards from today through workout dates
- **Sets Today** — workouts filtered to today's date
- **Calorie Balance** — consumed kcal minus estimated burned (workouts × 220 kcal)
- **Today's Plan** — the most recently created custom plan with its exercise list
- **Recent PRs** — top 3 personal records computed from all-time workout history
- **Quick Links** — one-tap navigation to log, progress, challenges, and library

The streak algorithm skips today if no workout has been logged yet (so a user who trained yesterday doesn't lose their streak at midnight).

### 6.2 Progress Tracker (`/progress`)

The core logging and analytics page. It contains four sub-components:

**Workout Log (DailyLog)**
- Form with exercise name, sets, reps, weight, and date
- Server-side input validation (exercise length, numeric ranges, date format)
- Entries stored per user in the `workouts` table
- Bulk import support via `addWorkoutsBulk`

**Progress Charts (Progress component)**
- Volume bar chart: 7D (daily), 30D (weekly buckets), 90D (weekly buckets)
- Muscle focus doughnut chart: keyword-based exercise categorisation into 6 muscle groups
- Range switching recomputes from a cached ref — no extra network requests
- Charts built with Chart.js, destroyed and recreated on data change to avoid canvas leaks

**Body Tracker (BodyTracker)**
- Logs weight, body fat %, chest, waist, and hips measurements
- Line chart with selectable metric and fill gradient
- Latest snapshot displayed as stat cards above the chart

**Nutrition Tracker (NutritionTracker)**
- Date-filtered meal log with calories, protein, carbs, and fat
- Four MacroRing doughnut charts showing % of daily goal
- Net calorie balance (consumed minus estimated burned)
- Hardcoded macro goals: 2500 kcal, 180g protein, 280g carbs, 70g fat

**Personal Records (PRTracker)**
- Computed client-side from workout history using `computePRs`
- Groups by exercise name (case-insensitive), keeps highest weight entry
- Sorted alphabetically

### 6.3 Workout Plans (`/plans`)

Three tiers of plans:

1. **Featured Plans** — Weight Loss, Muscle Gain, Raw Strength (hardcoded, curated)
2. **Prebuilt Extra Plans** — Push Day, Pull Day, Leg Day, HIIT Blast, Core & Mobility, Full Body Beginner
3. **Custom Plans** — user-built via the Plan Builder modal, persisted to DB

**Plan Builder Modal**
- Name, icon (emoji picker), description, and dynamic exercise rows
- Validates name and at least one exercise before saving
- Saves to `custom_plans` table (or localStorage for guests)

**Starting a Plan**
- Clicking "Start Plan →" serialises the plan into `forgefit_active_session` in localStorage
- Redirects to `/progress` where `ActiveWorkout` picks it up

### 6.4 Active Workout Session (`ActiveWorkout`)

A guided workout experience that activates when a session is stored in localStorage:

- **Exercise sidebar** — all exercises listed with set completion dots
- **Active panel** — current exercise name, set/rep/weight, estimated time
- **Rest Timer** — 60-second countdown between sets with skip option, turns orange at 10s
- **Elapsed Timer** — live stopwatch from session start
- **Overall progress bar** — completed sets / total sets
- On completion, calls `addWorkoutsBulk` to save all completed sets, fires `workoutUpdated` event, and shows a completion screen

### 6.5 Exercise Library (`/library`)

A reference database of 20 exercises with:

- Muscle group and difficulty filters
- Exercise cards with icon, muscle group, difficulty badge, and set/rep recommendation
- Detail modal with: form tips (4 per exercise), target muscles, set/rep/rest prescription
- One-tap "Log It" button that logs default sets/reps directly from the modal
- "Log & View Progress" navigates to the progress page after logging

### 6.6 Challenges (`/challenges`)

Three structured challenges with persistent progress:

| Challenge | Type | Mechanic |
|-----------|------|----------|
| Core Ignition | 7-Day | Mark each day done; auto-resets if a day is missed |
| Total Body Reset | 30-Day | Same mechanic with 30 dot progress grid |
| 100 Push-Up Protocol | Rep-based | Log current max; progress bar to 100 |

Challenge data is stored in a key-value `challenges` table using `upsert`. The auto-reset logic runs on component mount — if the last logged date is 2+ days ago, the counter resets to 0.

### 6.7 Membership (`/membership`)

Static pricing page with two tiers:

- **Free** — $0, basic logging, 50 exercises, 1 challenge
- **Pro** — $12/month (billed annually), full feature set including AI coaching, advanced analytics, nutrition tracking, unlimited challenges

Pricing buttons are currently non-functional (no payment integration).

### 6.8 Navigation & Transitions

- Sticky navbar with scroll-based background blur
- Active route highlighting via `usePathname`
- Authenticated user display name in the nav
- Mobile hamburger menu with full-screen overlay
- Custom page transition system (`TransitionProvider` + `PageTransition`) using CSS animations
- `RevealObserver` uses IntersectionObserver to trigger `.reveal` class animations on scroll

---

## 7. Database Schema

Based on the db.ts operations, the following tables are used:

| Table | Key Columns |
|-------|-------------|
| `workouts` | id, user_id, exercise, sets, reps, weight, date, created_at |
| `custom_plans` | id, user_id, name, icon, description, exercises (JSON), created_at |
| `body_entries` | id, user_id, date, weight, body_fat, chest, waist, hips |
| `meals` | id, user_id, date, name, calories, protein, carbs, fat, created_at |
| `challenges` | user_id, key, value, updated_at (composite PK: user_id + key) |

All tables are scoped by `user_id`. Row-level security (RLS) is expected to be configured on the Insforge side.

---

## 8. Security Implementation

| Concern | Implementation |
|---------|---------------|
| Auth tokens | httpOnly cookies, not localStorage |
| Access token lifetime | 15 minutes |
| Refresh token lifetime | 7 days |
| Route protection | Middleware checks cookie on every request |
| Input validation | Server-side in `validateWorkout()` before any DB write |
| Security headers | CSP, HSTS, X-Frame-Options, X-Content-Type-Options, Referrer-Policy, Permissions-Policy |
| Secrets | Environment variables only, never hardcoded |
| CSRF | SameSite=lax on auth cookies |

---

## 9. Performance Considerations

- **Chart caching** — workout data is cached in a `useRef` on the Progress page; range tab changes recompute locally without refetching
- **Parallel data fetching** — Dashboard and NutritionTracker use `Promise.all` to fetch multiple resources simultaneously
- **Font optimisation** — All fonts loaded via `next/font` for automatic subsetting and zero layout shift
- **Lazy chart destruction** — Every Chart.js instance returns a cleanup function to `useEffect` to prevent memory leaks
- **Event-driven updates** — Components listen for `workoutUpdated` custom events instead of polling, keeping the UI in sync without unnecessary re-renders

---

## 10. PWA Configuration

| Asset | Purpose |
|-------|---------|
| `public/sw.js` | Service worker: handles push notifications and notification click routing |
| `public/manifest.json` | App name, icons, theme colour, display mode (standalone) |
| `public/icon-192.png` | App icon for home screen installation |
| `layout.tsx` metadata | Links manifest, sets themeColor |

The service worker currently handles push notifications only. It does not implement offline caching — a future enhancement would be to add a cache-first strategy for static assets.

---

## 11. Known Limitations & Future Work

| Area | Current State | Recommended Improvement |
|------|--------------|------------------------|
| Calorie burn estimate | Fixed 220 kcal per workout entry | Integrate MET-based calculation using exercise type, duration, and user weight |
| Macro goals | Hardcoded (2500 kcal, 180g P, 280g C, 70g F) | User-configurable goals stored in a `user_settings` table |
| Membership payments | UI only, no payment integration | Integrate Stripe with webhook-based plan activation |
| AI coaching | Listed as Pro feature, not implemented | Integrate an LLM API for personalised workout suggestions |
| Offline caching | Service worker handles notifications only | Add Workbox cache-first strategy for static assets and stale-while-revalidate for API data |
| Exercise library | 20 hardcoded exercises | Move to a database table; allow user-submitted exercises |
| Date handling in `finishWorkout` | Uses `toLocaleDateString()` which produces locale-specific formats | Use `toISOString().slice(0,10)` for consistent YYYY-MM-DD format |
| Rate limiting | No rate limiting on auth Server Actions | Add server-side rate limiting on sign-in, sign-up, and password reset |
| Workout date in Library log | Uses `toLocaleDateString()` — inconsistent with ISO format used elsewhere | Standardise to ISO date format |

---

## 12. Deployment Checklist

Before going live, the following must be completed:

- [ ] Set `NEXT_PUBLIC_APP_URL` to the production domain
- [ ] Set `NEXT_PUBLIC_INSFORGE_URL` to the production Insforge project URL
- [ ] Set `NEXT_PUBLIC_INSFORGE_ANON_KEY` and `INSFORGE_ANON_KEY` from the Insforge dashboard
- [ ] Confirm Insforge RLS policies are enabled on all tables
- [ ] Run `npm run build` and verify zero TypeScript/ESLint errors
- [ ] Test auth flow end-to-end (sign up → verify email → sign in → sign out → password reset)
- [ ] Test guest → authenticated data migration
- [ ] Verify PWA installs correctly on iOS and Android
- [ ] Confirm security headers are present using securityheaders.com
- [ ] Set up error monitoring (e.g. Sentry)

---

## 13. Summary

FORGEFIT is a well-structured, feature-complete fitness tracking application. It demonstrates a clean separation between data access (`lib/db.ts`), server-side auth (`lib/auth-actions.ts`, `lib/insforge-server.ts`), and UI components. The dual-mode data layer (cloud for authenticated users, localStorage for guests) is a strong UX decision that removes signup friction.

The main areas requiring work before a commercial launch are payment integration, rate limiting on auth endpoints, standardised date handling, and user-configurable goals. The core tracking, analytics, and plan management features are production-quality.
