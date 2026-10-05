import { Metadata } from 'next'
import { CaseStudiesSection } from '@sections/case-studies'

export const metadata: Metadata = {
  title: 'Case Studies — Saple AI',
  description: 'How hospitals and clinics use Saple AI in practice — from AI clinical scribe adoption to WhatsApp-first patient booking and drug interaction checks.',
}

export default function CaseStudiesPage() {
  return <CaseStudiesSection />
}
