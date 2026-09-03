import { IconLock, IconCheck, IconFileText, IconShield, IconSettings, IconEye } from '@icons/index'

export const CONSENT_PRINCIPLES = [
  {
    icon: IconLock,
    title: 'Data never leaves your hospital',
    desc: "Patient records are stored in your hospital's tenant — fully isolated. No cross-tenant data sharing, ever.",
  },
  {
    icon: IconCheck,
    title: 'Explicit patient consent',
    desc: 'Every patient OTPs in before any AI touches their data. Consent is logged, timestamped, and auditable.',
  },
  {
    icon: IconFileText,
    title: 'DPDPA 2023 compliant',
    desc: 'Built to the Digital Personal Data Protection Act 2023. Right to access, right to erase — both implemented.',
  },
  {
    icon: IconShield,
    title: 'HIPAA & HL7 FHIR R4',
    desc: 'International standards for healthcare data exchange. Your data is interoperable and portable.',
  },
  {
    icon: IconSettings,
    title: 'ISO 27001 certified infrastructure',
    desc: 'All infrastructure runs on ISO 27001 certified cloud. Annual penetration tests. 99.9% uptime SLA.',
  },
  {
    icon: IconEye,
    title: 'AI transparency',
    desc: 'Every AI suggestion shows its reasoning. Doctors see what the AI used to arrive at a recommendation.',
  },
]
