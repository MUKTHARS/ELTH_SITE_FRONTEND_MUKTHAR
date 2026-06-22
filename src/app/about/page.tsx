import { Metadata } from 'next'
import { MissionSection, TeamSection } from '@sections/about'

export const metadata: Metadata = {
  title: 'About — Elth AI',
  description: 'Elth AI is building AI infrastructure for every Indian hospital. Built on Saple.ai by a team of clinicians, AI engineers, and health-tech veterans.',
}

export default function AboutPage() {
  return (
    <>
      <MissionSection />
      <TeamSection />
    </>
  )
}
