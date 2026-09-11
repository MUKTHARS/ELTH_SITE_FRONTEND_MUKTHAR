import type { ComplianceBadge } from '@/types'
import { IconShield, IconFileText } from '@icons/index'

export const COMPLIANCE_BADGES: ComplianceBadge[] = [
  {
    name: 'HIPAA Compliant',
    description: 'Patient health information encrypted at rest (AES-256) and in transit (TLS 1.3). Business Associate Agreements available.',
    icon: IconShield,
    color: '#5B3DF6',
  },
  {
    name: 'DPDPA 2023',
    description: "India's Digital Personal Data Protection Act. Explicit consent before data collection. Patient right to erasure guaranteed.",
    icon: IconShield,
    color: '#4A3F3B',
  },
  {
    name: 'HL7 FHIR R4',
    description: 'All patient health data stored and exchanged using FHIR-compliant data models for full interoperability.',
    icon: IconFileText,
    color: '#2954E8',
  },
  {
    name: 'ISO 27001',
    description: 'Information security management system certification. Regular security audits and penetration testing.',
    icon: IconShield,
    color: '#B8791E',
  },
  {
    name: 'ABDM & ABHA Ready',
    description: "Built for India's Ayushman Bharat Digital Mission — ABHA-linked patient records and consent-driven HIE-CM data sharing.",
    icon: IconFileText,
    color: '#5B3DF6',
  },
  {
    name: 'NHCX / PMJAY Compatible',
    description: 'Supports the National Health Claims Exchange and PMJAY beneficiary and claim workflows for eligible hospitals.',
    icon: IconShield,
    color: '#4A3F3B',
  },
]
