import { IconMic, IconSparkle, IconCheck, IconSmartphone, IconCalendar, IconBell, IconChat, IconFileText } from '@icons/index'

export const SCRIBE_BLOCK = {
  eyebrow: 'AI SCRIBE',
  title: 'Doctors speak.\nElth documents.',
  desc: 'No typing. No complicated forms. Just dictate naturally.',
  points: [
    { icon: IconMic,        label: 'Dictate naturally' },
    { icon: IconSparkle,    label: 'AI structures it' },
    { icon: IconCheck,      label: 'Review & approve' },
    { icon: IconSmartphone, label: 'Saved to patient app' },
  ],
  checklist: [
    { label: 'Complaints',     color: '#26215C', bg: '#EEEDFE' },
    { label: 'Examination',    color: '#042C53', bg: '#E6F1FB' },
    { label: 'Investigation',  color: '#9A3412', bg: '#FFEDD5' },
    { label: 'Diagnosis',      color: '#085041', bg: '#E1F5EE' },
    { label: 'Treatment Plan', color: '#26215C', bg: '#EEEDFE' },
    { label: 'Medication',     color: '#DB2777', bg: '#FCE7F3' },
  ],
}

export const MEMORY_BLOCK = {
  eyebrow: 'CLINICAL MEMORY',
  title: 'Don\'t just store records.\nBuild clinical memory.',
  desc: 'Every consultation, prescription, report and investigation becomes part of the patient\'s longitudinal story.',
  years: [
    { year: '2026', color: '#3B82F6', items: ['Consultation', 'Prescription', 'X-Ray'] },
    { year: '2025', color: '#16A34A', items: ['Follow-up', 'MRI', 'Physiotherapy'] },
    { year: '2024', color: '#F59E0B', items: ['Surgery', 'Discharge'] },
    { year: '2023', color: '#DC2626', items: ['First Consultation'] },
  ],
}

export const CONTINUOUS_BLOCK = {
  eyebrow: 'CONTINUOUS CARE',
  title: 'Care doesn\'t end when\nthe patient leaves.',
  desc: 'Elth keeps the connection alive between consultations — helping clinics turn one-time visits into continuous care.',
  nodes: [
    { icon: IconCheck,      label: 'Visit completed',       color: '#16A34A', bg: '#DCFCE7' },
    { icon: IconCalendar,   label: 'Follow-up scheduled',   color: '#26215C', bg: '#EEEDFE' },
    { icon: IconBell,       label: 'Patient notified',      color: '#DC2626', bg: '#FEE2E2' },
    { icon: IconChat,       label: 'Patient responds',      color: '#085041', bg: '#E1F5EE' },
    { icon: IconFileText,   label: 'Doctor sees the update', color: '#042C53', bg: '#E6F1FB' },
    { icon: IconBell,       label: 'Next visit',            color: '#DC2626', bg: '#FEE2E2' },
  ],
}
