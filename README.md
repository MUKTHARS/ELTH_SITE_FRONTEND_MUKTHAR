# Elth AI — Marketing Website

Production-ready marketing website for Elth AI, an AI-native healthcare platform built on Saple.ai infrastructure. Modelled after eka.care.

---

## What We Are Building

A **frontend-only marketing website** that communicates Elth AI's product to hospitals, clinics, and doctors across India. No backend. No authentication. No database. Pure Next.js static/SSG site.

Elth AI is a white-label B2B SaaS platform — hospitals buy it and brand it as their own. Patients never see "Elth AI". The site speaks to **hospital admins and doctors**, not patients.

---

## Tech Stack

| Layer | Technology |
|---|---|
| Framework | Next.js 14 (App Router) |
| Language | TypeScript |
| Styling | SCSS Modules (`.module.scss`) |
| Global Tokens | Tailwind CSS (design tokens only) |
| Animations | Framer Motion |
| UI Primitives | shadcn/ui |
| Icons | Custom SVG React components in `src/icons/` |
| Fonts | Inter (self-hosted in `public/fonts/`) |
| Deployment | Vercel |

---

## Brand & Design

### Colors

| Token | Hex | Usage |
|---|---|---|
| `$elth-teal` | `#085041` | Primary brand, patient role, CTAs |
| `$elth-purple` | `#26215C` | Doctor role accent |
| `$elth-blue` | `#042C53` | Admin role accent |
| `$elth-amber` | `#412402` | Elth brand warm accent |
| `$elth-dark` | `#0A1628` | Hero backgrounds, dark sections |
| `$elth-bg-warm` | `#F1EFE8` | Light section backgrounds |
| `$elth-border` | `#E2E8F0` | Card borders |

### Typography

- Font: **Inter** (weights: 400, 500, 600, 700)
- Hero heading: 64px / bold
- Section heading: 40px / semibold
- Body: 16px / regular
- Small/label: 12px / medium / uppercase / letter-spacing

### Spacing Scale

```
4px / 8px / 12px / 16px / 24px / 32px / 48px / 64px / 96px / 128px
```

### Border Radius

```
$radius-sm:   6px    (badges, tags)
$radius-md:   10px   (inputs, small cards)
$radius-lg:   16px   (section cards)
$radius-xl:   24px   (hero cards, mockup frames)
```

---

## File Structure

```
NEW_ELTH_SITE/
│
├── public/
│   ├── fonts/
│   │   ├── inter-regular.woff2
│   │   ├── inter-medium.woff2
│   │   └── inter-bold.woff2
│   └── images/
│       ├── logos/                      # Elth logo variants (dark, light, icon only)
│       ├── mockups/                    # Dashboard/app UI screenshots
│       ├── integrations/               # WhatsApp, Practo, Dr Lal logos
│       ├── avatars/                    # Testimonial doctor avatars
│       └── og-default.png              # Default Open Graph image
│
├── src/
│   ├── app/                            # Next.js App Router — routing only
│   │   ├── globals.css                 # Tailwind directives + base resets
│   │   ├── layout.tsx                  # Root layout: font, metadata, providers
│   │   ├── page.tsx                    # Homepage (/)
│   │   ├── not-found.tsx               # 404 page
│   │   ├── error.tsx                   # Error boundary
│   │   ├── loading.tsx                 # Root loading state
│   │   ├── sitemap.ts                  # Auto sitemap for SEO
│   │   ├── robots.ts                   # robots.txt
│   │   ├── opengraph-image.tsx         # Default OG image
│   │   ├── for-doctors/
│   │   │   └── page.tsx
│   │   ├── for-hospitals/
│   │   │   └── page.tsx
│   │   ├── for-patients/
│   │   │   └── page.tsx
│   │   ├── pricing/
│   │   │   └── page.tsx
│   │   ├── about/
│   │   │   └── page.tsx
│   │   └── contact/
│   │       └── page.tsx
│   │
│   ├── layouts/                        # App-wide structural shells
│   │   ├── Navbar/
│   │   │   ├── Navbar.tsx
│   │   │   └── Navbar.module.scss
│   │   ├── Footer/
│   │   │   ├── Footer.tsx
│   │   │   └── Footer.module.scss
│   │   ├── MobileMenu/
│   │   │   ├── MobileMenu.tsx
│   │   │   └── MobileMenu.module.scss
│   │   └── index.ts
│   │
│   ├── sections/                       # Page-specific full-width sections
│   │   ├── home/
│   │   │   ├── HeroSection/
│   │   │   │   ├── HeroSection.tsx
│   │   │   │   └── HeroSection.module.scss
│   │   │   ├── LogoBar/
│   │   │   │   ├── LogoBar.tsx
│   │   │   │   └── LogoBar.module.scss
│   │   │   ├── ProblemSection/
│   │   │   │   ├── ProblemSection.tsx
│   │   │   │   └── ProblemSection.module.scss
│   │   │   ├── SolutionSection/
│   │   │   │   ├── SolutionSection.tsx
│   │   │   │   └── SolutionSection.module.scss
│   │   │   ├── FeaturesScribe/
│   │   │   │   ├── FeaturesScribe.tsx
│   │   │   │   └── FeaturesScribe.module.scss
│   │   │   ├── FeaturesSymptom/
│   │   │   │   ├── FeaturesSymptom.tsx
│   │   │   │   └── FeaturesSymptom.module.scss
│   │   │   ├── FeaturesLabReport/
│   │   │   │   ├── FeaturesLabReport.tsx
│   │   │   │   └── FeaturesLabReport.module.scss
│   │   │   ├── FeaturesBriefing/
│   │   │   │   ├── FeaturesBriefing.tsx
│   │   │   │   └── FeaturesBriefing.module.scss
│   │   │   ├── FeaturesDrugCheck/
│   │   │   │   ├── FeaturesDrugCheck.tsx
│   │   │   │   └── FeaturesDrugCheck.module.scss
│   │   │   ├── HowItWorks/
│   │   │   │   ├── HowItWorks.tsx
│   │   │   │   └── HowItWorks.module.scss
│   │   │   ├── StatsSection/
│   │   │   │   ├── StatsSection.tsx
│   │   │   │   └── StatsSection.module.scss
│   │   │   ├── ConsentSection/
│   │   │   │   ├── ConsentSection.tsx
│   │   │   │   └── ConsentSection.module.scss
│   │   │   ├── IntegrationsSection/
│   │   │   │   ├── IntegrationsSection.tsx
│   │   │   │   └── IntegrationsSection.module.scss
│   │   │   ├── TestimonialsSection/
│   │   │   │   ├── TestimonialsSection.tsx
│   │   │   │   └── TestimonialsSection.module.scss
│   │   │   ├── RoadmapSection/
│   │   │   │   ├── RoadmapSection.tsx
│   │   │   │   └── RoadmapSection.module.scss
│   │   │   ├── ComplianceSection/
│   │   │   │   ├── ComplianceSection.tsx
│   │   │   │   └── ComplianceSection.module.scss
│   │   │   ├── CtaSection/
│   │   │   │   ├── CtaSection.tsx
│   │   │   │   └── CtaSection.module.scss
│   │   │   └── index.ts
│   │   ├── for-doctors/
│   │   │   ├── HeroSection/
│   │   │   │   ├── HeroSection.tsx
│   │   │   │   └── HeroSection.module.scss
│   │   │   ├── ScribeSection/
│   │   │   │   ├── ScribeSection.tsx
│   │   │   │   └── ScribeSection.module.scss
│   │   │   ├── BriefingSection/
│   │   │   │   ├── BriefingSection.tsx
│   │   │   │   └── BriefingSection.module.scss
│   │   │   ├── DrugCheckerSection/
│   │   │   │   ├── DrugCheckerSection.tsx
│   │   │   │   └── DrugCheckerSection.module.scss
│   │   │   └── index.ts
│   │   ├── for-hospitals/
│   │   │   ├── HeroSection/
│   │   │   │   ├── HeroSection.tsx
│   │   │   │   └── HeroSection.module.scss
│   │   │   ├── AdminConsoleSection/
│   │   │   │   ├── AdminConsoleSection.tsx
│   │   │   │   └── AdminConsoleSection.module.scss
│   │   │   ├── AnalyticsSection/
│   │   │   │   ├── AnalyticsSection.tsx
│   │   │   │   └── AnalyticsSection.module.scss
│   │   │   └── index.ts
│   │   ├── for-patients/
│   │   │   ├── HeroSection/
│   │   │   │   ├── HeroSection.tsx
│   │   │   │   └── HeroSection.module.scss
│   │   │   ├── SymptomCheckerSection/
│   │   │   │   ├── SymptomCheckerSection.tsx
│   │   │   │   └── SymptomCheckerSection.module.scss
│   │   │   ├── LabReportSection/
│   │   │   │   ├── LabReportSection.tsx
│   │   │   │   └── LabReportSection.module.scss
│   │   │   ├── ConciergeSection/
│   │   │   │   ├── ConciergeSection.tsx
│   │   │   │   └── ConciergeSection.module.scss
│   │   │   └── index.ts
│   │   ├── pricing/
│   │   │   ├── PricingHero/
│   │   │   │   ├── PricingHero.tsx
│   │   │   │   └── PricingHero.module.scss
│   │   │   ├── PricingCards/
│   │   │   │   ├── PricingCards.tsx
│   │   │   │   └── PricingCards.module.scss
│   │   │   └── index.ts
│   │   ├── about/
│   │   │   ├── MissionSection/
│   │   │   │   ├── MissionSection.tsx
│   │   │   │   └── MissionSection.module.scss
│   │   │   ├── TeamSection/
│   │   │   │   ├── TeamSection.tsx
│   │   │   │   └── TeamSection.module.scss
│   │   │   └── index.ts
│   │   └── contact/
│   │       ├── DemoFormSection/
│   │       │   ├── DemoFormSection.tsx
│   │       │   └── DemoFormSection.module.scss
│   │       └── index.ts
│   │
│   ├── components/
│   │   ├── ui/                         # shadcn primitives — never edit manually
│   │   │   ├── button.tsx
│   │   │   ├── badge.tsx
│   │   │   ├── card.tsx
│   │   │   ├── dialog.tsx
│   │   │   ├── input.tsx
│   │   │   ├── select.tsx
│   │   │   └── separator.tsx
│   │   ├── common/                     # Elth branded reusable atoms
│   │   │   ├── GradientText/
│   │   │   │   ├── GradientText.tsx
│   │   │   │   └── GradientText.module.scss
│   │   │   ├── SectionLabel/
│   │   │   │   ├── SectionLabel.tsx
│   │   │   │   └── SectionLabel.module.scss
│   │   │   ├── FeatureCard/
│   │   │   │   ├── FeatureCard.tsx
│   │   │   │   └── FeatureCard.module.scss
│   │   │   ├── StatCard/
│   │   │   │   ├── StatCard.tsx
│   │   │   │   └── StatCard.module.scss
│   │   │   ├── TestimonialCard/
│   │   │   │   ├── TestimonialCard.tsx
│   │   │   │   └── TestimonialCard.module.scss
│   │   │   ├── IntegrationLogo/
│   │   │   │   ├── IntegrationLogo.tsx
│   │   │   │   └── IntegrationLogo.module.scss
│   │   │   ├── RoleBadge/
│   │   │   │   ├── RoleBadge.tsx
│   │   │   │   └── RoleBadge.module.scss
│   │   │   ├── MockupFrame/
│   │   │   │   ├── MockupFrame.tsx
│   │   │   │   └── MockupFrame.module.scss
│   │   │   └── index.ts
│   │   └── index.ts
│   │
│   ├── icons/                          # SVG icons as React components
│   │   ├── IconStethoscope.tsx
│   │   ├── IconBrain.tsx
│   │   ├── IconShield.tsx
│   │   ├── IconChart.tsx
│   │   ├── IconCalendar.tsx
│   │   ├── IconPill.tsx
│   │   ├── IconMic.tsx
│   │   ├── IconFileText.tsx
│   │   ├── IconUsers.tsx
│   │   └── index.ts
│   │
│   ├── providers/
│   │   └── index.tsx                   # MotionConfig + future providers
│   │
│   ├── constants/
│   │   ├── routes.ts                   # All URL paths as constants
│   │   ├── navigation.ts               # Navbar links, mega menu, footer groups
│   │   ├── features.ts                 # All product features with phase tags
│   │   ├── stats.ts                    # Platform stats for counter section
│   │   ├── testimonials.ts             # Doctor/admin testimonial quotes
│   │   ├── integrations.ts             # Integration logos and categories
│   │   ├── roadmap.ts                  # Phase-wise delivery roadmap
│   │   ├── pricing.ts                  # Plan names, prices, feature lists
│   │   ├── compliance.ts               # Compliance badges and descriptions
│   │   └── index.ts
│   │
│   ├── hooks/
│   │   ├── useScrollProgress.ts        # Scroll position for sticky nav effects
│   │   ├── useCounterAnimation.ts      # Animate numbers when section enters viewport
│   │   └── index.ts
│   │
│   ├── styles/
│   │   ├── variables.scss              # All SCSS vars: colors, spacing, breakpoints
│   │   ├── mixins.scss                 # Shared SCSS mixins
│   │   └── animations.scss             # Global @keyframes
│   │
│   ├── config/
│   │   ├── site.ts                     # Site name, URL, OG image, Twitter handle
│   │   └── metadata.ts                 # Default Next.js metadata object
│   │
│   ├── lib/
│   │   └── utils.ts                    # cn() class merging utility
│   │
│   └── types/
│       └── index.ts                    # Shared TypeScript interfaces
│
├── .eslintrc.json
├── .prettierrc
├── .gitignore
├── .env.local
├── tailwind.config.ts
├── next.config.ts
├── tsconfig.json
├── postcss.config.js
├── components.json
└── package.json
```

---

## Pages & What Each Contains

### `/` — Homepage
Sections in order:
1. `HeroSection` — headline, subheading, two CTAs, animated gradient background
2. `LogoBar` — "Trusted by X clinics" + scrolling hospital logo strip
3. `ProblemSection` — 3 pain point cards (doctor overload / patient confusion / care fragmentation)
4. `SolutionSection` — "One platform. Three portals." overview of Patient / Doctor / Admin
5. `FeaturesScribe` — AI Clinical Scribe deep dive (voice → SOAP note animation)
6. `FeaturesSymptom` — Symptom Checker deep dive (chat UI mockup)
7. `FeaturesLabReport` — Lab Report Interpreter (report → plain language card)
8. `FeaturesBriefing` — Pre-Consultation Briefing (doctor dashboard mockup)
9. `FeaturesDrugCheck` — Drug Interaction Checker (prescription form with alert)
10. `HowItWorks` — 3-step story: Hospital signs up → Patient registers → AI connects them
11. `StatsSection` — Animated counters: doctors, clinics, consultations, records
12. `ConsentSection` — "You own your data" — patient consent differentiator
13. `IntegrationsSection` — EMR / Labs / Insurance / Messaging logo grid
14. `TestimonialsSection` — Doctor and admin quotes carousel
15. `RoadmapSection` — Phase 0 → 4 visual timeline
16. `ComplianceSection` — HIPAA / DPDPA 2023 / FHIR R4 / ISO 27001 badges
17. `CtaSection` — Final CTA + demo request form

### `/for-doctors`
Focused on: AI Scribe, Pre-visit Briefing, Drug Checker
Target: Dr. Ramesh persona (50 patients/day, 2+ hrs on documentation)

### `/for-hospitals`
Focused on: Admin Console, Analytics, Tenant onboarding, White-labelling
Target: Meena persona (hospital operations head)

### `/for-patients`
Focused on: Symptom Checker, Lab Report Interpreter, Health Concierge
Target: Priya persona (Tier-2 city, WhatsApp user)

### `/pricing`
Starter / Pro / Enterprise plans. "Contact for pricing" for Enterprise.

### `/about`
Mission statement, "Built on Saple.ai", team section

### `/contact`
Demo request form: Name, Clinic/Hospital name, Phone, Role (Doctor / Admin / Developer / Enterprise)

---

## Styling Rules

### Every component follows this pattern:
```
ComponentName/
├── ComponentName.tsx
└── ComponentName.module.scss
```

### Every `.module.scss` starts with:
```scss
@use '@/styles/variables' as *;
@use '@/styles/mixins' as *;
```

### `styles/variables.scss` holds all tokens:
```scss
// Colors
$elth-teal:    #085041;
$elth-purple:  #26215C;
$elth-blue:    #042C53;
$elth-amber:   #412402;
$elth-dark:    #0A1628;
$elth-bg-warm: #F1EFE8;
$elth-border:  #E2E8F0;

// Spacing
$space-xs:  4px;
$space-sm:  8px;
$space-md:  16px;
$space-lg:  24px;
$space-xl:  48px;
$space-2xl: 96px;

// Breakpoints
$mobile:  480px;
$tablet:  768px;
$desktop: 1024px;
$wide:    1280px;

// Radius
$radius-sm: 6px;
$radius-md: 10px;
$radius-lg: 16px;
$radius-xl: 24px;
```

### `styles/mixins.scss` holds shared mixins:
```scss
@mixin flex-center {
  display: flex;
  align-items: center;
  justify-content: center;
}

@mixin flex-between {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

@mixin respond-to($breakpoint) {
  @if $breakpoint == mobile  { @media (max-width: 480px)  { @content; } }
  @if $breakpoint == tablet  { @media (max-width: 768px)  { @content; } }
  @if $breakpoint == desktop { @media (max-width: 1024px) { @content; } }
}

@mixin section-padding {
  padding: 96px 0;
  @include respond-to(tablet) { padding: 64px 0; }
  @include respond-to(mobile) { padding: 48px 0; }
}

@mixin container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 24px;
}
```

---

## Animations (Framer Motion)

All animations use `whileInView` so they trigger when the section enters the viewport.

Standard patterns used across the site:

```tsx
// Fade up (most common)
initial={{ opacity: 0, y: 40 }}
whileInView={{ opacity: 1, y: 0 }}
transition={{ duration: 0.6, ease: 'easeOut' }}
viewport={{ once: true }}

// Fade in
initial={{ opacity: 0 }}
whileInView={{ opacity: 1 }}
transition={{ duration: 0.5 }}
viewport={{ once: true }}

// Stagger children
variants={{
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } }
}}

// Scale up
initial={{ opacity: 0, scale: 0.95 }}
whileInView={{ opacity: 1, scale: 1 }}
transition={{ duration: 0.5 }}
```

Custom keyframes that Framer Motion cannot handle go in `styles/animations.scss`:
- `float` — hero card floating effect
- `shimmer` — skeleton loading shimmer
- `gradient-shift` — hero background gradient movement
- `marquee` — logo bar infinite scroll

---

## Constants Structure

### `constants/routes.ts`
```ts
export const ROUTES = {
  HOME:          '/',
  FOR_DOCTORS:   '/for-doctors',
  FOR_HOSPITALS: '/for-hospitals',
  FOR_PATIENTS:  '/for-patients',
  PRICING:       '/pricing',
  ABOUT:         '/about',
  CONTACT:       '/contact',
}
```

### `constants/features.ts`
```ts
export type Phase = 'P0' | 'P1' | 'P2'

export interface Feature {
  id: string
  title: string
  description: string
  icon: string
  phase: Phase
  audience: 'doctor' | 'patient' | 'admin'
}

export const FEATURES: Feature[] = [
  {
    id: 'scribe',
    title: 'AI Clinical Scribe',
    description: 'Voice to SOAP note in under 2 minutes. Saves 12+ hours weekly.',
    icon: 'IconMic',
    phase: 'P0',
    audience: 'doctor',
  },
  // ... all features
]
```

### `constants/stats.ts`
```ts
export interface Stat {
  value: number
  suffix: string
  label: string
}

export const STATS: Stat[] = [
  { value: 90000,  suffix: '+', label: 'Doctors onboarded' },
  { value: 33000,  suffix: '+', label: 'Clinics & hospitals' },
  { value: 140000000, suffix: '+', label: 'Records managed' },
  { value: 8000000,   suffix: '+', label: 'AI conversations' },
]
```

### `constants/testimonials.ts`
```ts
export interface Testimonial {
  quote: string
  name: string
  role: string
  hospital: string
  avatar: string
}
```

### `constants/integrations.ts`
```ts
export type IntegrationCategory = 'EMR' | 'Lab' | 'Insurance' | 'Messaging'

export interface Integration {
  name: string
  logo: string
  category: IntegrationCategory
}
```

### `constants/roadmap.ts`
```ts
export interface RoadmapPhase {
  phase: string
  title: string
  timeline: string
  deliverables: string[]
  status: 'done' | 'active' | 'upcoming'
}
```

### `constants/pricing.ts`
```ts
export interface PricingPlan {
  name: string
  price: string
  period: string
  description: string
  features: string[]
  cta: string
  highlighted: boolean
}
```

---

## TypeScript Interfaces (`types/index.ts`)

```ts
export interface NavItem {
  label: string
  href: string
  children?: NavItem[]
}

export interface FooterGroup {
  title: string
  links: { label: string; href: string }[]
}

export interface ComplianceBadge {
  name: string
  description: string
  icon: string
}

export interface IconProps {
  size?: number
  color?: string
  className?: string
}
```

---

## Path Aliases (`tsconfig.json`)

```json
{
  "compilerOptions": {
    "baseUrl": ".",
    "paths": {
      "@/*":            ["./src/*"],
      "@layouts/*":     ["./src/layouts/*"],
      "@sections/*":    ["./src/sections/*"],
      "@components/*":  ["./src/components/*"],
      "@icons/*":       ["./src/icons/*"],
      "@constants/*":   ["./src/constants/*"],
      "@hooks/*":       ["./src/hooks/*"],
      "@styles/*":      ["./src/styles/*"],
      "@config/*":      ["./src/config/*"],
      "@lib/*":         ["./src/lib/*"],
      "@types/*":       ["./src/types/*"],
      "@providers/*":   ["./src/providers/*"]
    }
  }
}
```

---

## Environment Variables (`.env.local`)

```bash
NEXT_PUBLIC_SITE_URL=https://elth.ai
NEXT_PUBLIC_DEMO_FORM_ENDPOINT=          # Form submission endpoint (future)
```

---

## Setup Instructions

```bash
# 1. Install dependencies
npm install

# 2. Install shadcn/ui
npx shadcn@latest init

# 3. Add shadcn components
npx shadcn@latest add button badge card dialog input select separator

# 4. Install additional packages
npm install framer-motion sass

# 5. Run dev server
npm run dev
```

---

## Build Order

Build in this exact order. Each step depends on the previous.

### Step 1 — Project Setup
- [ ] `package.json` — dependencies
- [ ] `tsconfig.json` — path aliases
- [ ] `tailwind.config.ts` — design tokens
- [ ] `next.config.ts` — SCSS + image domains
- [ ] `postcss.config.js`
- [ ] `components.json` — shadcn config
- [ ] `.eslintrc.json`
- [ ] `.prettierrc`
- [ ] `.gitignore`
- [ ] `.env.local`

### Step 2 — Global Styles
- [ ] `src/styles/variables.scss`
- [ ] `src/styles/mixins.scss`
- [ ] `src/styles/animations.scss`
- [ ] `src/app/globals.css`
- [ ] `public/fonts/` — Inter font files

### Step 3 — Config & Types
- [ ] `src/config/site.ts`
- [ ] `src/config/metadata.ts`
- [ ] `src/types/index.ts`
- [ ] `src/lib/utils.ts`

### Step 4 — Constants
- [ ] `src/constants/routes.ts`
- [ ] `src/constants/navigation.ts`
- [ ] `src/constants/features.ts`
- [ ] `src/constants/stats.ts`
- [ ] `src/constants/testimonials.ts`
- [ ] `src/constants/integrations.ts`
- [ ] `src/constants/roadmap.ts`
- [ ] `src/constants/pricing.ts`
- [ ] `src/constants/compliance.ts`
- [ ] `src/constants/index.ts`

### Step 5 — Icons
- [ ] `src/icons/IconStethoscope.tsx`
- [ ] `src/icons/IconBrain.tsx`
- [ ] `src/icons/IconShield.tsx`
- [ ] `src/icons/IconChart.tsx`
- [ ] `src/icons/IconCalendar.tsx`
- [ ] `src/icons/IconPill.tsx`
- [ ] `src/icons/IconMic.tsx`
- [ ] `src/icons/IconFileText.tsx`
- [ ] `src/icons/IconUsers.tsx`
- [ ] `src/icons/index.ts`

### Step 6 — Hooks
- [ ] `src/hooks/useScrollProgress.ts`
- [ ] `src/hooks/useCounterAnimation.ts`
- [ ] `src/hooks/index.ts`

### Step 7 — Providers
- [ ] `src/providers/index.tsx`

### Step 8 — shadcn UI Primitives
- [ ] `src/components/ui/button.tsx`
- [ ] `src/components/ui/badge.tsx`
- [ ] `src/components/ui/card.tsx`
- [ ] `src/components/ui/dialog.tsx`
- [ ] `src/components/ui/input.tsx`
- [ ] `src/components/ui/select.tsx`
- [ ] `src/components/ui/separator.tsx`

### Step 9 — Common Components
- [ ] `GradientText`
- [ ] `SectionLabel`
- [ ] `FeatureCard`
- [ ] `StatCard`
- [ ] `TestimonialCard`
- [ ] `IntegrationLogo`
- [ ] `RoleBadge`
- [ ] `MockupFrame`
- [ ] `src/components/common/index.ts`
- [ ] `src/components/index.ts`

### Step 10 — Layouts
- [ ] `Navbar`
- [ ] `MobileMenu`
- [ ] `Footer`
- [ ] `src/layouts/index.ts`

### Step 11 — App Shell
- [ ] `src/app/globals.css`
- [ ] `src/app/layout.tsx`
- [ ] `src/app/not-found.tsx`
- [ ] `src/app/error.tsx`
- [ ] `src/app/loading.tsx`
- [ ] `src/app/sitemap.ts`
- [ ] `src/app/robots.ts`
- [ ] `src/app/opengraph-image.tsx`

### Step 12 — Homepage Sections (in render order)
- [ ] `HeroSection`
- [ ] `LogoBar`
- [ ] `ProblemSection`
- [ ] `SolutionSection`
- [ ] `FeaturesScribe`
- [ ] `FeaturesSymptom`
- [ ] `FeaturesLabReport`
- [ ] `FeaturesBriefing`
- [ ] `FeaturesDrugCheck`
- [ ] `HowItWorks`
- [ ] `StatsSection`
- [ ] `ConsentSection`
- [ ] `IntegrationsSection`
- [ ] `TestimonialsSection`
- [ ] `RoadmapSection`
- [ ] `ComplianceSection`
- [ ] `CtaSection`
- [ ] `src/sections/home/index.ts`
- [ ] `src/app/page.tsx`

### Step 13 — Inner Pages
- [ ] `/for-doctors` — all sections + page.tsx
- [ ] `/for-hospitals` — all sections + page.tsx
- [ ] `/for-patients` — all sections + page.tsx
- [ ] `/pricing` — all sections + page.tsx
- [ ] `/about` — all sections + page.tsx
- [ ] `/contact` — DemoFormSection + page.tsx

---

## Coding Rules

1. Every component and section lives in its own folder with exactly 2 files: `.tsx` and `.module.scss`
2. Every `.module.scss` imports `variables` and `mixins` at the top
3. `app/` pages contain zero styling and zero logic — only import and stack sections
4. `constants/` holds all hardcoded data — nothing is hardcoded inside JSX
5. All imports use path aliases (`@layouts/`, `@sections/`, `@constants/`) — no relative paths
6. All barrel `index.ts` files must be kept in sync when new components are added
7. Framer Motion animations always use `viewport={{ once: true }}` — animate only on first scroll into view
8. No inline `style={{}}` — all styles live in `.module.scss`. Exception: dynamic values only (e.g. `style={{ width: `${progress}%` }}`)
9. All images go through Next.js `<Image />` component — never `<img>`
10. TypeScript strict mode — no `any`, no untyped props
