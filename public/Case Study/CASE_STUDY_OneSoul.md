# Case Study: OneSoul e Corner

## Overview

OneSoul e Corner is a full-stack e-commerce and content platform built with Vite + React and Supabase. It serves as a unified storefront and media hub — combining product sales, news, jobs, vlogs, e-books, and services under one brand.

---

## Problem Statement

The client needed a single platform that could:
- Sell physical products with cart, wishlist, and payment support
- Publish and manage content (news, vlogs, e-books, services)
- Handle job listings and partnership inquiries
- Allow admin-managed content without a separate CMS
- Be fast, SEO-friendly, and deployable on a serverless edge network

---

## Tech Stack

| Layer | Technology |
|---|---|
| Frontend | React 19, Vite 6, TypeScript |
| Styling | Tailwind CSS v4 |
| Routing | React Router v7 |
| Backend / DB | Supabase (PostgreSQL + Auth + Storage) |
| Payments | Razorpay |
| Serverless Functions | Netlify Functions |
| Animations | GSAP, Motion, Lenis (smooth scroll) |
| 3D Rendering | Three.js, React Three Fiber |
| Rich Text Editor | React Quill |
| Charts | Recharts |
| Deployment | Netlify |

---

## Key Features

### Storefront
- Product listing with category filters, search, and 3D model previews
- Cart and wishlist with persistent context state
- Razorpay-powered checkout with order tracking
- Product reviews with star ratings

### Content Platform
- News articles with category filtering (Technology, Business, Entertainment)
- Vlog listings with detail pages
- E-book catalog with purchase flow
- Service category pages with featured posts

### User & Admin
- Supabase Auth (email/password + magic link)
- Role-based admin dashboard with analytics (Recharts)
- Admin CRUD for all content types
- Protected admin routes via `AdminRoute` component

### Infrastructure
- CSRF token protection via Netlify Function
- Order creation and payment verification as serverless functions
- Contact form with Supabase Edge Function email notification
- Row-level security policies defined in `supabase-schema.sql`

---

## Architecture

```
Browser
  └── React SPA (Vite)
        ├── Pages (Shop, News, Vlogs, EBooks, Services, Jobs, Admin…)
        ├── Context (Cart, Wishlist, Notifications)
        ├── Supabase JS Client  ──►  Supabase (Auth + DB + Storage)
        └── Netlify Functions   ──►  Razorpay API
```

---

## Challenges & Solutions

| Challenge | Solution |
|---|---|
| Secure payment flow in a serverless SPA | Moved order creation and payment verification to Netlify Functions, keeping Razorpay secret server-side |
| CSRF protection without a traditional server | Dedicated `csrf-token` Netlify Function issues and validates tokens |
| Rich admin content editing | Integrated React Quill with a custom image-resize plugin |
| 3D product previews | Used React Three Fiber + Drei for lightweight, declarative 3D rendering |
| Smooth UX across content-heavy pages | Lenis smooth scroll + GSAP animations for transitions |

---

## Outcomes

- Single deployable unit covering e-commerce + content + admin
- Serverless architecture with zero backend maintenance overhead
- Supabase RLS ensures data is secure per user/role without custom auth middleware
- Netlify CDN delivery for fast global load times

---

## Lessons Learned

- Supabase RLS policies need careful design upfront — schema-first planning (`supabase-schema.sql`) saved significant refactoring time
- Splitting payment logic into serverless functions early prevented security debt
- Tailwind CSS v4's new config approach reduced boilerplate significantly compared to v3

---

*Project version: 0.0.0 — Active development*
