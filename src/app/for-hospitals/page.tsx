import { Metadata } from 'next'
import { HospitalsHero, AdminConsoleSection, AnalyticsSection } from '@sections/for-hospitals'

export const metadata: Metadata = {
  title: 'For Hospitals — Saple AI',
  description: 'White-label AI infrastructure for hospitals. Admin console, analytics, and patient communication — deployed in 48 hours under your brand.',
}

export default function ForHospitalsPage() {
  return (
    <>
      <HospitalsHero />
      <AdminConsoleSection />
      <AnalyticsSection />
    </>
  )
}
