import { ROUTES } from './routes'
import { IconStethoscope, IconBuilding, IconUser } from '@icons/index'

export const PORTALS = [
  {
    role: 'For Doctors',
    color: '#1E2A4A',
    bg: '#EAEEF6',
    href: ROUTES.FOR_DOCTORS,
    icon: IconStethoscope,
    img: '/assets/svgs/undraw_doctor_aum1.svg',
    desc: 'AI Scribe, Visit Timeline, Drug Interaction Checker, Consent-Gated Patient History',
  },
  {
    role: 'For Hospitals',
    color: '#2C4A7C',
    bg: '#EAF0F8',
    href: ROUTES.FOR_HOSPITALS,
    icon: IconBuilding,
    img: '/assets/svgs/undraw_medicine_hqqg.svg',
    desc: 'Front Desk Queue, AI Persona Config, Continuity Dashboard, Analytics & Audit Log',
  },
  {
    role: 'For Patients',
    color: '#0F7A5C',
    bg: '#E6F5EF',
    href: ROUTES.FOR_PATIENTS,
    icon: IconUser,
    img: '/assets/svgs/undraw_booking_8vl5.svg',
    desc: 'Symptom Checker, Lab Report Trends, ABHA-Linked Records, Consent QR Sharing',
  },
]
