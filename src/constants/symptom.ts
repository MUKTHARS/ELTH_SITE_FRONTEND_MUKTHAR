export const SYMPTOM_STEPS = [
  {
    step: '01',
    label: 'Patient describes symptoms',
    detail: 'WhatsApp or in-app — text or voice, any language.',
  },
  {
    step: '02',
    label: 'AI asks follow-up questions',
    detail: 'Duration, severity, location, history — structured intake, not a search bar.',
  },
  {
    step: '03',
    label: 'Urgency triage',
    detail: 'Low / Moderate / High. Emergency cases are routed immediately.',
  },
  {
    step: '04',
    label: 'Doctor pre-read',
    detail: 'Physician sees a structured summary before the patient walks in.',
  },
]

import { IconChat, IconBrain, IconZap, IconStethoscope } from '@icons/index'

export const SYMPTOM_CHAT_MESSAGES = [
  { from: 'patient', text: 'I have had chest pain for 2 days, gets worse when I breathe deeply', urgent: false },
  { from: 'ai', text: 'Is the pain sharp or dull? Does it radiate to your left arm or jaw?', urgent: false },
  { from: 'patient', text: 'Sharp, only in the chest, no arm pain', urgent: false },
  { from: 'ai', text: 'Pleuritic chest pain. I am connecting you to Dr. Priya immediately. Please do not drive.', urgent: true },
]

export const SYMPTOM_CHECKER_FLOW = [
  { icon: IconChat, step: 'Describe on WhatsApp', desc: 'Text or voice. Any language. No app to download.' },
  { icon: IconBrain, step: 'AI asks follow-ups', desc: 'Smart questions about duration, severity, and history.' },
  { icon: IconZap, step: 'Urgency triage', desc: 'Low / Moderate / High. Critical cases routed immediately.' },
  { icon: IconStethoscope, step: 'Doctor pre-briefed', desc: 'Your doctor sees a structured intake before you arrive.' },
]
