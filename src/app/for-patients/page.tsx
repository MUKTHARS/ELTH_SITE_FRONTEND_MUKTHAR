import { Metadata } from 'next'
import { PatientsHero, LabReportSection, ConciergeSection, AppDownloadSection } from '@sections/for-patients'

export const metadata: Metadata = {
  title: 'For Patients — Saple AI',
  description: 'Understand lab reports and stay connected to your care team with your hospital\'s patient app.',
}

export default function ForPatientsPage() {
  return (
    <>
      <PatientsHero />
      <LabReportSection />
      <ConciergeSection />
      <AppDownloadSection />
    </>
  )
}
