import { IconIdBadge, IconGlobe, IconLock } from '@icons/index'

export const GOVT_COMPLIANCE_ITEMS = [
  {
    icon: IconIdBadge,
    title: 'ABDM & ABHA',
    desc: 'Patient records can be linked to an ABHA (Ayushman Bharat Health Account) ID. Data is shared with other providers only through consent-driven HIE-CM flows, never by default.',
  },
  {
    icon: IconGlobe,
    title: 'India-first data residency',
    desc: 'Patient data is stored and processed in India by default (AWS ap-south-1). Enterprise tenants can request dedicated regional or on-premise deployment.',
  },
  {
    icon: IconLock,
    title: 'Full audit trail',
    desc: 'Every consent grant, revocation, and AI access to a patient record is logged and auditable — for hospitals, regulators, and patients alike.',
  },
]
