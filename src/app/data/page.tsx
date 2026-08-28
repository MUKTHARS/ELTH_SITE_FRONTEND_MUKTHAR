import { Metadata } from 'next'
import { DataProcessingSection } from '@sections/legal'

export const metadata: Metadata = {
  title: 'Data Processing — Elth AI',
  description: 'How Elth AI processes hospital and patient data, tenant isolation, security measures, and data residency.',
}

export default function DataProcessingPage() {
  return <DataProcessingSection />
}
