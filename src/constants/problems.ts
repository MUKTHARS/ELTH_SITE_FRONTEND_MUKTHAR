import { IconStethoscope, IconSearch, IconBell } from '@icons/index'

export const PROBLEMS = [
  {
    icon: IconStethoscope,
    stat: '30–40%',
    title: 'Doctors don\'t have time to document',
    desc: 'Doctors spend valuable consultation time typing notes, searching records and completing repetitive documentation.',
    color: '#26215C',
    bg: '#EEEDFE',
  },
  {
    icon: IconSearch,
    stat: '73%',
    title: 'Patient history is scattered',
    desc: 'Prescriptions, reports, scans and previous consultations often live across hospital systems, PDFs, WhatsApp and paper.',
    color: '#085041',
    bg: '#E1F5EE',
  },
  {
    icon: IconBell,
    stat: '0',
    title: 'Follow-up gets lost',
    desc: 'The patient leaves the clinic — but the relationship shouldn\'t end there. Appointments and treatment plans need to continue.',
    color: '#042C53',
    bg: '#E6F1FB',
  },
]
