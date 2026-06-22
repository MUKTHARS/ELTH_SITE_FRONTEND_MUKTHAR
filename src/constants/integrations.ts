import type { Integration } from '@/types'

export const INTEGRATIONS: Integration[] = [
  { name: 'WhatsApp',      logo: '/images/integrations/whatsapp.svg',    category: 'Messaging', description: 'Patient communication' },
  { name: 'Healthplix',    logo: '/images/integrations/healthplix.svg',  category: 'EMR',       description: 'EMR integration' },
  { name: 'Practo Ray',    logo: '/images/integrations/practo.svg',      category: 'EMR',       description: 'Clinic management' },
  { name: 'Dr Lal PathLabs', logo: '/images/integrations/drlal.svg',    category: 'Lab',       description: 'Lab reports' },
  { name: 'Thyrocare',     logo: '/images/integrations/thyrocare.svg',   category: 'Lab',       description: 'Diagnostics' },
  { name: 'Star Health',   logo: '/images/integrations/starhealth.svg',  category: 'Insurance', description: 'Insurance' },
  { name: 'Medi Assist',   logo: '/images/integrations/mediassist.svg',  category: 'Insurance', description: 'TPA' },
  { name: 'Twilio',        logo: '/images/integrations/twilio.svg',      category: 'Messaging', description: 'SMS & Voice' },
  { name: 'eVital',        logo: '/images/integrations/evital.svg',      category: 'EMR',       description: 'Hospital EMR' },
  { name: 'SRL Diagnostics', logo: '/images/integrations/srl.svg',      category: 'Lab',       description: 'Lab reports' },
]
