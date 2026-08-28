import { Metadata } from 'next'
import { TermsSection } from '@sections/legal'

export const metadata: Metadata = {
  title: 'Terms of Service — Elth AI',
  description: 'The terms governing use of the Elth AI website, mobile application, and services.',
}

export default function TermsPage() {
  return <TermsSection />
}
