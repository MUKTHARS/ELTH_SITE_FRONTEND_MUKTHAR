import { ROUTES } from './routes'
import { IconStethoscope, IconBuilding, IconUser } from '@icons/index'

export const PORTALS = [
  {
    role: 'For Doctors',
    color: '#26215C',
    bg: '#EEEDFE',
    href: ROUTES.FOR_DOCTORS,
    icon: IconStethoscope,
    img: '/assets/svgs/undraw_doctor_aum1.svg',
    desc: 'AI Scribe, Pre-visit Brief, Drug Checker, Clinical Decision Support',
  },
  {
    role: 'For Hospitals',
    color: '#042C53',
    bg: '#E6F1FB',
    href: ROUTES.FOR_HOSPITALS,
    icon: IconBuilding,
    img: '/assets/svgs/undraw_medicine_hqqg.svg',
    desc: 'Admin Console, Analytics, Patient Communication, No-Show Prediction',
  },
  {
    role: 'For Patients',
    color: '#085041',
    bg: '#E1F5EE',
    href: ROUTES.FOR_PATIENTS,
    icon: IconUser,
    img: '/assets/svgs/undraw_booking_8vl5.svg',
    desc: 'Symptom Checker, Lab Interpreter, Health Concierge, WhatsApp-first',
  },
]
