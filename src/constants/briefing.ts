export const BRIEF_SECTIONS = [
  { label: 'Chief Complaint', value: 'Chest pain for 2 days, worse on inspiration', flagged: false },
  { label: 'History', value: 'HTN × 4 yrs, on Amlodipine 5mg. No prior cardiac events.', flagged: false },
  { label: 'Last Labs', value: 'ECG (Jun 12): Sinus rhythm, no ST changes. CBC normal.', flagged: false },
  { label: 'Risk Flags', value: 'Smoker · BMI 28.4 · Father: MI at 52', flagged: true },
]

export const BRIEF_STATS = [
  { num: '60s', label: 'before appointment' },
  { num: '3x', label: 'faster consultation start' },
  { num: '0', label: 'chart hunting' },
]

import { IconChat, IconClock, IconChart, IconShield } from '@icons/index'

export const BRIEFING_ITEMS = [
  { icon: IconChat, title: 'Chief complaint', desc: 'What the patient is here for, in their own words — summarized by AI.' },
  { icon: IconClock, title: 'Full history snapshot', desc: 'Diagnoses, allergies, ongoing medications, past surgeries — one screen.' },
  { icon: IconChart, title: 'Latest investigations', desc: 'Labs and imaging from the last 90 days, flagged if abnormal.' },
  { icon: IconShield, title: 'Risk flags', desc: 'Smoking, BMI, family history, adherence issues — surfaced automatically.' },
]
