import { Metadata } from 'next'
import { PricingHero, PricingCards } from '@sections/pricing'

export const metadata: Metadata = {
  title: 'Pricing — Elth AI',
  description: 'Simple, transparent pricing for hospitals and clinics. Starter from ₹4,999/mo. Free 14-day trial. No credit card required.',
}

export default function PricingPage() {
  return (
    <>
      <PricingHero />
      <PricingCards />
    </>
  )
}
