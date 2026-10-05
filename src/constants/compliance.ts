import type { ComplianceBadge } from '@/types'
import { IconShield, IconFileText } from '@icons/index'

export const COMPLIANCE_BADGES: ComplianceBadge[] = [
  {
    name: 'DPDPA 2023',
    description: "India's Digital Personal Data Protection Act. Explicit consent before data collection. Patient right to erasure guaranteed.",
    icon: IconShield,
    color: '#4A3F3B',
  },
  {
    name: 'ABDM & ABHA Ready',
    description: "Built for India's Ayushman Bharat Digital Mission — ABHA-linked patient records and consent-driven HIE-CM data sharing.",
    icon: IconFileText,
    color: '#5B3DF6',
  },
]
