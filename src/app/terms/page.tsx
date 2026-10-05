import { Metadata } from 'next'
import { TermsSection } from '@sections/legal'

export const metadata: Metadata = {
  title: 'Terms of Service — Saple AI',
  description: 'The terms governing use of the Saple AI website, mobile application, and services.',
}

export default function TermsPage() {
  return <TermsSection />
}
