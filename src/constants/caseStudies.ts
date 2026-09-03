export interface CaseStudy {
  hospital: string
  location: string
  type: string
  challenge: string
  intervention: string
  metrics: { value: string; label: string }[]
}

// Illustrative deployment scenarios based on Elth AI's product design and pilot
// feedback. Hospital names match the examples used in testimonials.ts for
// narrative consistency across the site.
export const CASE_STUDIES: CaseStudy[] = [
  {
    hospital: 'Varsha Health Care',
    location: 'Coimbatore',
    type: 'Multi-specialty clinic group',
    challenge:
      'Doctors were spending close to 2 hours a day on manual note-taking, and the front desk had no way to reach Tier-2 patients who preferred WhatsApp over apps.',
    intervention:
      'Rolled out the AI Clinical Scribe for all doctors and switched patient communication to a white-labeled WhatsApp-first flow for booking and reminders.',
    metrics: [
      { value: '~2 hrs/day', label: 'Documentation time reclaimed per doctor' },
      { value: '500+', label: 'Patients onboarded in month one' },
    ],
  },
  {
    hospital: 'Sri Kumaran Clinic',
    location: 'Madurai',
    type: 'General physician practice',
    challenge:
      "Patients were calling in a panic over lab results they didn't understand, creating unnecessary load on front-desk and clinical staff.",
    intervention:
      'Enabled the AI Lab Report Interpreter with plain-language, Tamil-language explanations delivered directly to patients after every report upload.',
    metrics: [
      { value: '↓ 40%', label: 'Reduction in unnecessary follow-up calls' },
      { value: '6', label: 'Languages supported for patient explanations' },
    ],
  },
  {
    hospital: 'Balaji Medical Centre',
    location: 'Chennai',
    type: 'General physician practice',
    challenge:
      'A busy OPD schedule left little time to manually cross-check every new prescription against a patient\'s existing medications.',
    intervention:
      'Turned on real-time drug-drug and drug-allergy interaction checks inline with the prescription workflow, with no change to how doctors write prescriptions.',
    metrics: [
      { value: 'Real-time', label: 'Drug interaction checks at point of prescribing' },
      { value: '0 extra clicks', label: 'Added to the existing prescribing workflow' },
    ],
  },
  {
    hospital: 'Medanta Coimbatore',
    location: 'Coimbatore',
    type: 'Hospital, multi-department',
    challenge:
      'No-shows were eating into OPD revenue, and the hospital had no automated way to remind or re-engage patients before their appointment.',
    intervention:
      'Deployed automated, white-labeled WhatsApp appointment reminders and rescheduling as part of the intelligent booking flow.',
    metrics: [
      { value: '↓ 28%', label: 'No-show rate after enabling reminders' },
      { value: '24/7', label: 'Automated booking availability' },
    ],
  },
]
