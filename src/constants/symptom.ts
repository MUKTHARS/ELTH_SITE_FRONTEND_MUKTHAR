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

export const SYMPTOM_CHAT_MESSAGES = [
  { from: 'patient', text: 'I have had chest pain for 2 days, gets worse when I breathe deeply' },
  { from: 'ai', text: 'Is the pain sharp or dull? Does it radiate to your left arm or jaw?' },
  { from: 'patient', text: 'Sharp, only in the chest, no arm pain' },
  { from: 'ai', text: '⚠️ Pleuritic chest pain. I am connecting you to Dr. Priya immediately. Please do not drive.' },
]

export const SYMPTOM_CHECKER_FLOW = [
  { icon: '💬', step: 'Describe on WhatsApp', desc: 'Text or voice. Any language. No app to download.' },
  { icon: '🤖', step: 'AI asks follow-ups', desc: 'Smart questions about duration, severity, and history.' },
  { icon: '⚡', step: 'Urgency triage', desc: 'Low / Moderate / High. Critical cases routed immediately.' },
  { icon: '🩺', step: 'Doctor pre-briefed', desc: 'Your doctor sees a structured intake before you arrive.' },
]
