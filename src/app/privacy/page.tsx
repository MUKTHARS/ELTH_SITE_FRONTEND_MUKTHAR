import { Metadata } from 'next'
import { PrivacySection } from '@sections/legal'

export const metadata: Metadata = {
  title: 'Privacy Policy — Elth AI',
  description: 'How Elth AI and the Elth mobile application collect, use, and protect your personal data.',
}

export default function PrivacyPage() {
  return <PrivacySection />
}
