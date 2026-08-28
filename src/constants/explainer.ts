import { IconMic, IconSparkle, IconCheck, IconSmartphone, IconCalendar, IconBell, IconChat, IconFileText, IconStethoscope, IconSearch, IconBrain, IconPill, IconBone, IconRepeat, IconUser } from '@icons/index'

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
    { label: 'Complaints',     icon: IconFileText,    color: '#1E2A4A', bg: '#EAEEF6' },
    { label: 'Examination',    icon: IconStethoscope, color: '#2C4A7C', bg: '#EAF0F8' },
    { label: 'Investigation',  icon: IconSearch,      color: '#9A3412', bg: '#FFEDD5' },
    { label: 'Diagnosis',      icon: IconBrain,       color: '#0F7A5C', bg: '#E6F5EF' },
    { label: 'Treatment Plan', icon: IconCalendar,    color: '#1E2A4A', bg: '#EAEEF6' },
    { label: 'Medication',     icon: IconPill,        color: '#DB2777', bg: '#FCE7F3' },
  ],
}

export const MEMORY_BLOCK = {
  eyebrow: 'CLINICAL MEMORY',
  title: 'Don\'t just store records.\nBuild clinical memory.',
  desc: 'Every consultation, prescription, report and investigation becomes part of the patient\'s longitudinal story.',
  years: [
    {
      year: '2026', color: '#3D5A99', latest: true,
      items: [
        { label: 'Consultation', icon: IconStethoscope },
        { label: 'Prescription', icon: IconPill },
        { label: 'X-Ray',        icon: IconSearch },
      ],
    },
    {
      year: '2025', color: '#16A34A',
      items: [
        { label: 'Follow-up',     icon: IconCalendar },
        { label: 'MRI',           icon: IconBrain },
        { label: 'Physiotherapy', icon: IconRepeat },
      ],
    },
    {
      year: '2024', color: '#F59E0B',
      items: [
        { label: 'Surgery',   icon: IconBone },
        { label: 'Discharge', icon: IconCheck },
      ],
    },
    {
      year: '2023', color: '#DC2626',
      items: [
        { label: 'First Consultation', icon: IconUser },
      ],
    },
  ],
}

export const CONTINUOUS_BLOCK = {
  eyebrow: 'CONTINUOUS CARE',
  title: 'Care doesn\'t end when\nthe patient leaves.',
  desc: 'Elth keeps the connection alive between consultations — helping clinics turn one-time visits into continuous care.',
  center: { icon: IconRepeat, label: 'Always on' },
  nodes: [
    { icon: IconCheck,      label: 'Visit completed',       color: '#16A34A', bg: '#DCFCE7' },
    { icon: IconCalendar,   label: 'Follow-up scheduled',   color: '#1E2A4A', bg: '#EAEEF6' },
    { icon: IconBell,       label: 'Patient notified',      color: '#DC2626', bg: '#FEE2E2' },
    { icon: IconChat,       label: 'Patient responds',      color: '#0F7A5C', bg: '#E6F5EF' },
    { icon: IconFileText,   label: 'Doctor sees the update', color: '#2C4A7C', bg: '#EAF0F8' },
    { icon: IconBell,       label: 'Next visit',            color: '#DC2626', bg: '#FEE2E2' },
  ],
}
