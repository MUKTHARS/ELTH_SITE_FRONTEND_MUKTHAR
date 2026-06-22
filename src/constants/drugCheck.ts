export const DRUG_INTERACTIONS = [
  { drug1: 'Warfarin', drug2: 'Aspirin', severity: 'high', note: 'Major bleeding risk. Consider alternatives.' },
  { drug1: 'Metformin', drug2: 'Alcohol', severity: 'moderate', note: 'Risk of lactic acidosis. Counsel patient.' },
  { drug1: 'Amlodipine', drug2: 'Clarithromycin', severity: 'moderate', note: 'Increased amlodipine levels. Monitor BP.' },
]

export const DRUG_SEVERITY_COLOR: Record<string, { bg: string; text: string }> = {
  high: { bg: '#fee2e2', text: '#dc2626' },
  moderate: { bg: '#fef3c7', text: '#d97706' },
  low: { bg: '#dcfce7', text: '#16a34a' },
}

export const DRUG_BULLETS = [
  '50,000+ drug–drug interactions',
  'Drug–allergy contraindication alerts',
  'Dosage adjustments for renal / hepatic impairment',
  'Paediatric and geriatric dose warnings',
]

export const DRUG_CHECKER_LIST = [
  'Drug–drug interactions with severity grading',
  'Drug–allergy contraindications',
  'Renal & hepatic dose adjustments',
  'Paediatric and geriatric alerts',
  'Pregnancy category warnings',
]

export const DRUG_CHECKER_STATS = [
  { num: '50K+', label: 'drug interactions' },
  { num: '<1s', label: 'check time' },
  { num: '0', label: 'extra clicks' },
]
