import { ROUTES } from './routes'

interface AudienceBlock {
  kicker: string
  title: string
  desc?: string
  points?: string[]
  steps?: string[]
  specialties?: { name: string; desc: string }[]
  cta: string
  href: string
  bg: string
}

export const AUDIENCE: AudienceBlock[] = [
  {
    kicker: 'OUR DOCTORS',
    title: 'Built around the way doctors actually work.',
    points: [
      'AI Scribe — dictate naturally, Elth structures it',
      'Clinical Memory — find past consultations instantly',
      'Faster consultations — less typing, more time with patients',
      'Doctor in control — AI assists, the doctor reviews and approves',
    ],
    cta: 'See how doctors use Elth',
    href: ROUTES.FOR_DOCTORS,
    bg: '#E9F7F1',
  },
  {
    kicker: 'FOR CLINICS & HOSPITALS',
    title: 'Your clinic. Your workflow. Connected care.',
    desc: 'Elth works alongside your existing workflow and brings modern AI, patient engagement and continuity of care to the front.',
    steps: ['Run your clinic', 'Document care', 'Connect patients', 'Continue care'],
    cta: 'See how clinics use Elth',
    href: ROUTES.FOR_HOSPITALS,
    bg: '#E8F1FB',
  },
  {
    kicker: 'BUILT FOR EVERY SPECIALTY',
    title: 'Adapted to how you practice.',
    specialties: [
      { name: 'Orthopedics', desc: 'Knee pain · Back pain · Fracture follow-up · Post-op' },
      { name: 'General Medicine', desc: 'Fever · Diabetes · Hypertension · Respiratory' },
      { name: 'Dentistry', desc: 'Dental pain · RCT · Crown · Follow-up' },
      { name: 'More specialties', desc: 'Your workflows. Your terminology. Your templates.' },
    ],
    cta: 'See all specialties',
    href: ROUTES.FOR_DOCTORS,
    bg: '#F1EEFB',
  },
]
