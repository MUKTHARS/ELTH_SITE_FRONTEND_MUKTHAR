import { IconMic, IconGlobe, IconEdit, IconFileText } from '@icons/index'

export const SCRIBE_POINTS = [
  {
    icon: IconMic,
    title: 'Voice → SOAP note in 30 seconds',
    desc: 'Record the consultation. Elth transcribes and structures it into a SOAP note, ready to sign off.',
  },
  {
    icon: IconGlobe,
    title: '12+ Indian languages',
    desc: 'Tamil, Hindi, Telugu, Malayalam, Kannada and more — our model switches mid-sentence.',
  },
  {
    icon: IconEdit,
    title: 'Always editable',
    desc: 'Every field is editable before the note is finalized. The AI drafts, the doctor decides.',
  },
  {
    icon: IconFileText,
    title: 'Pushes to your EMR',
    desc: 'One click sends the completed note straight to Healthplix, Practo, or your custom EMR.',
  },
]

export const SCRIBE_WORKFLOW = [
  {
    step: '1',
    label: 'Doctor speaks',
    detail: 'Record the consultation naturally — patient present or dictation mode.',
  },
  {
    step: '2',
    label: 'AI transcribes',
    detail: 'Real-time multilingual transcription in 12+ Indian languages.',
  },
  {
    step: '3',
    label: 'SOAP note generated',
    detail: 'Structured Subjective / Objective / Assessment / Plan in 30 seconds.',
  },
  {
    step: '4',
    label: 'Review & sign',
    detail: 'Edit any field, then one click sends to your EMR.',
  },
]
