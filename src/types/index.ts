import type { ComponentType } from 'react'

// ─── Navigation ───────────────────────────────────────────────────────────────
export interface NavItem {
  label: string
  href: string
  children?: NavItem[]
}

export interface FooterGroup {
  title: string
  links: { label: string; href: string }[]
}

// ─── Features ─────────────────────────────────────────────────────────────────
export type Phase = 'P0' | 'P1' | 'P2'
export type Audience = 'doctor' | 'patient' | 'admin' | 'all'

export interface Feature {
  id: string
  title: string
  description: string
  icon: string
  phase: Phase
  audience: Audience
}

// ─── Stats ────────────────────────────────────────────────────────────────────
export interface Stat {
  value: number
  suffix: string
  label: string
  description?: string
}

// ─── Testimonials ─────────────────────────────────────────────────────────────
export interface Testimonial {
  quote: string
  name: string
  role: string
  hospital: string
  location: string
  avatar: string
  initials: string
  bgColor: string
  textColor: string
}

// ─── Integrations ─────────────────────────────────────────────────────────────
export type IntegrationCategory = 'EMR' | 'Lab' | 'Insurance' | 'Messaging'

export interface Integration {
  name: string
  logo: string
  category: IntegrationCategory
  description?: string
}

// ─── Roadmap ──────────────────────────────────────────────────────────────────
export type RoadmapStatus = 'done' | 'active' | 'upcoming'

export interface RoadmapPhase {
  phase: string
  title: string
  timeline: string
  focus: string
  deliverables: string[]
  status: RoadmapStatus
}

// ─── Pricing ──────────────────────────────────────────────────────────────────
export interface PricingPlan {
  name: string
  price: string
  period: string
  description: string
  features: string[]
  cta: string
  ctaHref: string
  highlighted: boolean
  badge?: string
}

// ─── Compliance ───────────────────────────────────────────────────────────────
export interface ComplianceBadge {
  name: string
  description: string
  icon: ComponentType<IconProps>
  color: string
}

// ─── Problems ─────────────────────────────────────────────────────────────────
export interface Problem {
  icon: string
  title: string
  stat: string
  description: string
  color: string
  bgColor: string
}

// ─── How It Works ─────────────────────────────────────────────────────────────
export interface HowItWorksStep {
  step: string
  role: string
  title: string
  description: string
  color: string
  bgColor: string
  initials: string
}

// ─── Icons ────────────────────────────────────────────────────────────────────
export interface IconProps {
  size?: number
  color?: string
  className?: string
  strokeWidth?: number
}

// ─── Common Component Props ───────────────────────────────────────────────────
export interface SectionLabelProps {
  text: string
  color?: 'teal' | 'purple' | 'blue' | 'amber'
}

export interface RoleBadgeProps {
  role: 'patient' | 'doctor' | 'admin' | 'elth'
}
