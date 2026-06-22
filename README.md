# Elth AI — Marketing Website

Production-ready marketing website for **Elth AI**, an AI-native healthcare platform built on Saple.ai infrastructure.

**Status: Complete and running** — `npm run dev` → http://localhost:3000

---

## What This Is

A **frontend-only marketing website** that communicates Elth AI's product to hospitals, clinics, and doctors across India. No backend. No authentication. No database.

Elth AI is a **white-label B2B SaaS platform** — hospitals deploy it under their own brand. Patients never see "Elth AI". The site speaks to hospital admins and doctors, not patients.

> Think Shopify for hospitals — not Apollo 247 or Practo. We give hospitals the tools to care for their own patients, with AI, under their own brand.

---

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

| Command | Description |
|---|---|
| `npm run dev` | Start dev server with hot reload |
| `npm run build` | Production build |
| `npm run start` | Serve production build |
| `npm run lint` | ESLint |
| `npm run format` | Prettier |

---

## Tech Stack

| Layer | Technology |
|---|---|
| Framework | Next.js 14 (App Router) |
| Language | TypeScript (strict) |
| Styling | SCSS Modules (`.module.scss`) |
| Design Tokens | Tailwind CSS (tokens only, no utility classes) |
| Animations | Framer Motion |
| UI Primitives | shadcn/ui (Radix-based) |
| Icons | Custom SVG React components (`src/icons/`) |
| Font | Inter via `next/font/google` |
| Deployment | Vercel |

---

## Pages

| Route | Description |
|---|---|
| `/` | Homepage — full product story, 17 sections |
| `/for-doctors` | AI Scribe, Pre-visit Brief, Drug Checker |
| `/for-hospitals` | Admin Console, Analytics, White-labelling |
| `/for-patients` | Symptom Checker, Lab Interpreter, Concierge |
| `/pricing` | Starter / Pro / Enterprise plans |
| `/about` | Mission, values, team |
| `/contact` | Demo request form |

### Homepage sections (in render order)

1. `HeroSection` — dark gradient hero, animated blobs, SOAP note mockup
2. `LogoBar` — scrolling hospital name marquee
3. `ProblemSection` — 3 pain point cards with stats
4. `SolutionSection` — three portals overview + analogy
5. `FeaturesScribe` — AI Scribe deep dive
6. `FeaturesSymptom` — Symptom Checker with chat mockup
7. `FeaturesLabReport` — Lab report interpreter
8. `FeaturesBriefing` — Pre-visit briefing card mockup
9. `FeaturesDrugCheck` — Drug interaction checker
10. `HowItWorks` — 4-step dark section
11. `StatsSection` — animated counters
12. `ConsentSection` — privacy & compliance cards
13. `IntegrationsSection` — EMR / Lab / Insurance / Messaging logos
14. `TestimonialsSection` — doctor and admin quotes
15. `RoadmapSection` — Phase 0→4 timeline
16. `ComplianceSection` — HIPAA / DPDPA / FHIR / ISO badges
17. `CtaSection` — final CTA with gradient card

---

## Project Structure

```
NEW_ELTH_SITE/
│
├── public/
│   ├── fonts/                          # Inter served via next/font/google (folder reserved)
│   └── images/
│       ├── logos/                      # elth-logo-dark.svg, elth-logo-light.svg, elth-icon.svg
│       ├── mockups/                    # Dashboard/app UI screenshots (add real assets here)
│       ├── integrations/               # 10 integration SVG logos
│       └── avatars/                    # Testimonial doctor avatars (add real assets here)
│
├── src/
│   ├── app/                            # Next.js App Router — routing only, zero logic
│   │   ├── globals.css
│   │   ├── layout.tsx
│   │   ├── page.tsx                    # Homepage
│   │   ├── opengraph-image.tsx         # Dynamic OG image (Edge runtime)
│   │   ├── not-found.tsx
│   │   ├── error.tsx
│   │   ├── loading.tsx
│   │   ├── sitemap.ts
│   │   ├── robots.ts
│   │   ├── for-doctors/page.tsx
│   │   ├── for-hospitals/page.tsx
│   │   ├── for-patients/page.tsx
│   │   ├── pricing/page.tsx
│   │   ├── about/page.tsx
│   │   └── contact/page.tsx
│   │
│   ├── layouts/                        # App-wide structural shells
│   │   ├── Navbar/
│   │   ├── MobileMenu/
│   │   ├── Footer/
│   │   └── index.ts
│   │
│   ├── sections/                       # Page-specific full-width sections
│   │   ├── home/                       # 17 sections + index.ts
│   │   ├── for-doctors/                # DoctorsHero, ScribeSection, BriefingSection, DrugCheckerSection
│   │   ├── for-hospitals/              # HospitalsHero, AdminConsoleSection, AnalyticsSection
│   │   ├── for-patients/               # PatientsHero, SymptomCheckerSection, LabReportSection, ConciergeSection
│   │   ├── pricing/                    # PricingHero, PricingCards
│   │   ├── about/                      # MissionSection, TeamSection
│   │   └── contact/                    # DemoFormSection
│   │
│   ├── components/
│   │   ├── ui/                         # shadcn primitives: button, badge, card, dialog, input, select, separator
│   │   ├── common/                     # Elth atoms: GradientText, SectionLabel, FeatureCard, StatCard,
│   │   │                               #   TestimonialCard, IntegrationLogo, RoleBadge, MockupFrame
│   │   └── index.ts
│   │
│   ├── icons/                          # SVG React components: IconStethoscope, IconBrain, IconShield,
│   │                                   #   IconChart, IconCalendar, IconPill, IconMic, IconFileText,
│   │                                   #   IconUsers, IconArrowRight, IconCheck, IconMenu, IconX
│   │
│   ├── constants/                      # All hardcoded data — nothing lives in JSX
│   │   ├── routes.ts
│   │   ├── navigation.ts
│   │   ├── features.ts
│   │   ├── stats.ts
│   │   ├── testimonials.ts
│   │   ├── integrations.ts
│   │   ├── roadmap.ts
│   │   ├── pricing.ts
│   │   ├── compliance.ts
│   │   └── index.ts
│   │
│   ├── hooks/
│   │   ├── useScrollProgress.ts        # Navbar scroll state
│   │   └── useCounterAnimation.ts      # Animated number counters
│   │
│   ├── providers/
│   │   └── index.tsx                   # MotionConfig (respects prefers-reduced-motion)
│   │
│   ├── styles/
│   │   ├── variables.scss              # All SCSS tokens
│   │   ├── mixins.scss                 # Shared mixins
│   │   └── animations.scss             # @keyframes: float, shimmer, marquee, gradient-shift
│   │
│   ├── config/
│   │   ├── site.ts                     # Site name, URL, OG, Twitter
│   │   └── metadata.ts                 # Default Next.js Metadata object
│   │
│   ├── lib/
│   │   └── utils.ts                    # cn() — clsx + tailwind-merge
│   │
│   └── types/
│       └── index.ts                    # All shared TypeScript interfaces
│
├── next.config.js
├── tailwind.config.ts
├── tsconfig.json
├── postcss.config.js
├── components.json
├── .eslintrc.json
├── .prettierrc
├── .gitignore
├── .env.local
└── package.json
```

---

## Brand & Design Tokens

### Colors

| SCSS Variable | Hex | Usage |
|---|---|---|
| `$elth-teal` | `#085041` | Primary brand, patient role, CTAs |
| `$elth-purple` | `#26215C` | Doctor role accent |
| `$elth-blue` | `#042C53` | Admin/hospital role accent |
| `$elth-amber` | `#412402` | Warm accent |
| `$elth-dark` | `#0A1628` | Dark section backgrounds |
| `$elth-bg-warm` | `#F1EFE8` | Light warm section backgrounds |
| `$elth-border` | `#E2E8F0` | Card and input borders |

### Spacing scale

```
$space-1: 4px   $space-2: 8px    $space-3: 12px  $space-4: 16px
$space-5: 20px  $space-6: 24px   $space-8: 32px  $space-10: 40px
$space-12: 48px $space-16: 64px  $space-20: 80px $space-24: 96px
```

### Border radius

```
$radius-sm: 6px   $radius-md: 10px  $radius-lg: 16px
$radius-xl: 24px  $radius-full: 9999px
```

### Typography

- Font: **Inter** (400 / 500 / 600 / 700)
- Scale: `$text-xs` (12px) → `$text-6xl` (64px)

---

## Coding Rules

1. Every component/section lives in its own folder with exactly **2 files**: `.tsx` + `.module.scss`
2. Every `.module.scss` starts with `@use '@styles/variables' as *;` and `@use '@styles/mixins' as *;`
3. `app/` pages contain **zero styling and zero logic** — only import and stack sections
4. All hardcoded data lives in `constants/` — nothing is hardcoded inside JSX
5. All imports use **path aliases** (`@layouts/`, `@sections/`, `@constants/`) — no relative paths
6. Framer Motion animations always use `viewport={{ once: true }}`
7. Dynamic inline styles only for truly dynamic values (colours from data, percentage widths)
8. All images use Next.js `<Image />` — never `<img>`
9. TypeScript strict mode — no `any`, no untyped props

---

## Path Aliases

```json
"@/*"           → "./src/*"
"@layouts/*"    → "./src/layouts/*"
"@sections/*"   → "./src/sections/*"
"@components/*" → "./src/components/*"
"@icons/*"      → "./src/icons/*"
"@constants/*"  → "./src/constants/*"
"@hooks/*"      → "./src/hooks/*"
"@styles/*"     → "./src/styles/*"
"@config/*"     → "./src/config/*"
"@lib/*"        → "./src/lib/*"
"@types/*"      → "./src/types/*"
"@providers/*"  → "./src/providers/*"
```

---

## Environment Variables

```bash
# .env.local
NEXT_PUBLIC_SITE_URL=https://elth.ai
NEXT_PUBLIC_DEMO_FORM_ENDPOINT=        # future: form submission endpoint
```

---

## Assets to Replace

The following are placeholder SVGs — replace with real assets before launch:

| Path | Replace with |
|---|---|
| `public/images/logos/elth-logo-dark.svg` | Real Elth logo (dark bg) |
| `public/images/logos/elth-logo-light.svg` | Real Elth logo (light bg) |
| `public/images/logos/elth-icon.svg` | Elth favicon/icon |
| `public/images/integrations/*.svg` | Real partner logos |
| `public/images/avatars/` | Real doctor/admin photos |
| `public/images/mockups/` | Real dashboard screenshots |
