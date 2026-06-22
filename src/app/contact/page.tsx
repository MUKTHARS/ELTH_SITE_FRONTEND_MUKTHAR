import { Metadata } from 'next'
import { DemoFormSection } from '@sections/contact'

export const metadata: Metadata = {
  title: 'Request a Demo — Elth AI',
  description: 'See Elth AI in your hospital. 30-minute live demo tailored to your workflow. Free 14-day trial after.',
}

export default function ContactPage() {
  return <DemoFormSection />
}
