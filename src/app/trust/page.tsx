import { Metadata } from 'next'
import { ConsentSection, ComplianceSection } from '@sections/home'
import { GovtComplianceSection } from '@sections/trust'

export const metadata: Metadata = {
  title: 'Trust & Security — Saple AI',
  description: 'How Saple AI approaches patient data protection through consent-first design, DPDPA, ABDM/ABHA support, and India-first data residency.',
}

export default function TrustPage() {
  return (
    <>
      <ConsentSection />
      <GovtComplianceSection />
      <ComplianceSection />
    </>
  )
}
