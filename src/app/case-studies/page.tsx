import { Metadata } from 'next'
import { CaseStudiesSection } from '@sections/case-studies'

export const metadata: Metadata = {
  title: 'Case Studies — Elth AI',
  description: 'How hospitals and clinics use Elth AI in practice — from AI clinical scribe adoption to WhatsApp-first patient booking and drug interaction checks.',
}

export default function CaseStudiesPage() {
  return <CaseStudiesSection />
}
