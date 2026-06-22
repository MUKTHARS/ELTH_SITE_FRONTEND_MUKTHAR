import type { RoadmapPhase } from '@/types'

export const ROADMAP: RoadmapPhase[] = [
  {
    phase: 'Phase 0',
    title: 'Foundation',
    timeline: 'Months 1–2',
    focus: 'Platform setup & compliance architecture',
    deliverables: [
      'FHIR-compliant data store',
      'HIPAA & DPDPA compliance framework',
      'EMR adapter (HL7 FHIR R4)',
      'Medical knowledge base ingestion',
      'WhatsApp Business API channel setup',
    ],
    status: 'done',
  },
  {
    phase: 'Phase 1',
    title: 'MVP',
    timeline: 'Months 3–5',
    focus: 'Core doctor + patient flows. First 5 paying clinics.',
    deliverables: [
      'AI Clinical Scribe (voice → SOAP)',
      'Pre-Visit Patient Briefing',
      'Drug Interaction Checker',
      'Symptom Checker (Web + WhatsApp)',
      'Appointment Booking & Reminders',
      'Doctor Dashboard',
    ],
    status: 'active',
  },
  {
    phase: 'Phase 2',
    title: 'Growth',
    timeline: 'Months 6–9',
    focus: 'Patient engagement, lab reports, admin console',
    deliverables: [
      'Lab Report Interpreter (OCR + AI)',
      'Post-Discharge Follow-Up Bot',
      'Medication Reminders',
      'Admin Analytics Console',
      'Mobile App (iOS + Android)',
    ],
    status: 'upcoming',
  },
  {
    phase: 'Phase 3',
    title: 'Scale',
    timeline: 'Months 10–14',
    focus: 'Advanced features & hospital network contracts',
    deliverables: [
      'Insurance & Billing Assistant',
      'Mental Health First Responder',
      'Clinical Decision Support',
      'Population Health Analytics',
      'Telugu + Kannada + Malayalam support',
    ],
    status: 'upcoming',
  },
  {
    phase: 'Phase 4',
    title: 'Expansion',
    timeline: 'Months 15–18',
    focus: 'International markets & B2C freemium launch',
    deliverables: [
      'SEA & MENA localisation',
      'Open FHIR API for third-party developers',
      'B2C freemium patient app',
      'Wearable device integrations',
    ],
    status: 'upcoming',
  },
]
