import { Metadata } from 'next'
import { ConsentSection, ComplianceSection } from '@sections/home'
import { GovtComplianceSection } from '@sections/trust'

export const metadata: Metadata = {
  title: 'Trust & Security — Elth AI',
  description: 'How Elth AI protects patient data — consent-first design, HIPAA/DPDPA/ISO 27001 compliance, ABDM/ABHA readiness, and India-first data residency.',
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
