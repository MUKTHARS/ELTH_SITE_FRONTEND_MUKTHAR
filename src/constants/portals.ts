import { ROUTES } from './routes'

export const PORTALS = [
  {
    role: 'For Doctors',
    color: '#26215C',
    bg: '#EEEDFE',
    href: ROUTES.FOR_DOCTORS,
    icon: '🩺',
    desc: 'AI Scribe, Pre-visit Brief, Drug Checker, Clinical Decision Support',
  },
  {
    role: 'For Hospitals',
    color: '#042C53',
    bg: '#E6F1FB',
    href: ROUTES.FOR_HOSPITALS,
    icon: '🏥',
    desc: 'Admin Console, Analytics, Patient Communication, No-Show Prediction',
  },
  {
    role: 'For Patients',
    color: '#085041',
    bg: '#E1F5EE',
    href: ROUTES.FOR_PATIENTS,
    icon: '👤',
    desc: 'Symptom Checker, Lab Interpreter, Health Concierge, WhatsApp-first',
  },
]
