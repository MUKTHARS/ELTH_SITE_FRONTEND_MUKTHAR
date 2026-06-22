import { Metadata } from 'next'
import { PatientsHero, SymptomCheckerSection, LabReportSection, ConciergeSection } from '@sections/for-patients'

export const metadata: Metadata = {
  title: 'For Patients — Elth AI',
  description: 'Symptom checker, lab report interpreter, and health concierge — on WhatsApp, in your language, from your hospital\'s AI.',
}

export default function ForPatientsPage() {
  return (
    <>
      <PatientsHero />
      <SymptomCheckerSection />
      <LabReportSection />
      <ConciergeSection />
    </>
  )
}
