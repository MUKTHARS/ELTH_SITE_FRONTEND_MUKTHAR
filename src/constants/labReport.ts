export const LAB_MARKERS = [
  { name: 'Haemoglobin', value: '9.2 g/dL', status: 'low', normal: '12–17 g/dL' },
  { name: 'Fasting Glucose', value: '126 mg/dL', status: 'high', normal: '70–100 mg/dL' },
  { name: 'Serum Creatinine', value: '0.9 mg/dL', status: 'normal', normal: '0.6–1.2 mg/dL' },
  { name: 'Total Cholesterol', value: '214 mg/dL', status: 'borderline', normal: '<200 mg/dL' },
]

export const LAB_STATUS_COLOR: Record<string, string> = {
  low: '#ef4444',
  high: '#f97316',
  normal: '#22c55e',
  borderline: '#eab308',
}

export const LAB_FEATURES_LIST = [
  '73% of Indian patients cannot interpret their lab reports',
  'Supports 200+ test types including CBC, LFT, KFT, Lipid Panel',
  'Plain-language summary + abnormal flag + next step',
  'Sends directly to doctor before consultation',
]

import { IconUpload, IconSearch, IconAlertTriangle, IconFileText } from '@icons/index'

export const LAB_REPORT_FEATURES = [
  { icon: IconUpload, title: 'Upload any format', desc: 'PDF, image, or WhatsApp photo. We handle all lab formats.' },
  { icon: IconSearch, title: '200+ test types', desc: 'CBC, LFT, KFT, Lipid Panel, Thyroid, HbA1c and more.' },
  { icon: IconAlertTriangle, title: 'Abnormal flags', desc: 'High and low values highlighted with plain-language explanation.' },
  { icon: IconFileText, title: 'Doctor summary', desc: 'Structured summary sent to your doctor before the appointment.' },
]
