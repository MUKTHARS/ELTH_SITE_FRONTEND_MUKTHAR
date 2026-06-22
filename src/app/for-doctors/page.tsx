import { Metadata } from 'next'
import { DoctorsHero, ScribeSection, BriefingSection, DrugCheckerSection } from '@sections/for-doctors'

export const metadata: Metadata = {
  title: 'For Doctors — Elth AI',
  description: 'AI Scribe, Pre-visit Briefing, and Drug Checker for doctors. Spend less time on paperwork and more time with patients.',
}

export default function ForDoctorsPage() {
  return (
    <>
      <DoctorsHero />
      <ScribeSection />
      <BriefingSection />
      <DrugCheckerSection />
    </>
  )
}
