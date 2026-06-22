import type { ComplianceBadge } from '@/types'

export const COMPLIANCE_BADGES: ComplianceBadge[] = [
  {
    name: 'HIPAA Compliant',
    description: 'Patient health information encrypted at rest (AES-256) and in transit (TLS 1.3). Business Associate Agreements available.',
    icon: 'IconShield',
    color: '#085041',
  },
  {
    name: 'DPDPA 2023',
    description: "India's Digital Personal Data Protection Act. Explicit consent before data collection. Patient right to erasure guaranteed.",
    icon: 'IconShield',
    color: '#26215C',
  },
  {
    name: 'HL7 FHIR R4',
    description: 'All patient health data stored and exchanged using FHIR-compliant data models for full interoperability.',
    icon: 'IconFileText',
    color: '#042C53',
  },
  {
    name: 'ISO 27001',
    description: 'Information security management system certification. Regular security audits and penetration testing.',
    icon: 'IconShield',
    color: '#412402',
  },
]
