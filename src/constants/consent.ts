import { IconLock, IconCheck, IconFileText, IconEye } from '@icons/index'

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
    icon: IconEye,
    title: 'AI transparency',
    desc: 'Every AI suggestion shows its reasoning. Doctors see what the AI used to arrive at a recommendation.',
  },
]
