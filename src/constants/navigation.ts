import type { NavItem, FooterGroup } from '@/types'
import { ROUTES } from './routes'

export const NAV_ITEMS: NavItem[] = [
  {
    label: 'Products',
    href: '#',
    children: [
      { label: 'For Doctors',   href: ROUTES.FOR_DOCTORS },
      { label: 'For Hospitals', href: ROUTES.FOR_HOSPITALS },
      { label: 'For Patients',  href: ROUTES.FOR_PATIENTS },
    ],
  },
  { label: 'Pricing',      href: ROUTES.PRICING },
  // { label: 'Case Studies', href: ROUTES.CASE_STUDIES },
  { label: 'About',        href: ROUTES.ABOUT },
]

export const NAV_CTA = {
  label: 'Request Demo',
  href:  ROUTES.CONTACT,
}

export const FOOTER_GROUPS: FooterGroup[] = [
  {
    title: 'Products',
    links: [
      { label: 'For Doctors',   href: ROUTES.FOR_DOCTORS },
      { label: 'For Hospitals', href: ROUTES.FOR_HOSPITALS },
      { label: 'For Patients',  href: ROUTES.FOR_PATIENTS },
      { label: 'Pricing',       href: ROUTES.PRICING },
      { label: 'Case Studies',  href: ROUTES.CASE_STUDIES },
    ],
  },
  {
    title: 'Features',
    links: [
      { label: 'AI Clinical Scribe',    href: `${ROUTES.FOR_DOCTORS}#scribe` },
      { label: 'Symptom Checker',       href: `${ROUTES.FOR_PATIENTS}#symptom` },
      { label: 'Lab Report Interpreter',href: `${ROUTES.FOR_PATIENTS}#lab` },
      { label: 'Drug Interaction Check',href: `${ROUTES.FOR_DOCTORS}#drug` },
      { label: 'Pre-Visit Briefing',    href: `${ROUTES.FOR_DOCTORS}#briefing` },
    ],
  },
  {
    title: 'Company',
    links: [
      { label: 'About',            href: ROUTES.ABOUT },
      { label: 'Trust & Security', href: ROUTES.TRUST },
      { label: 'Contact',          href: ROUTES.CONTACT },
      { label: 'Request Demo',     href: ROUTES.CONTACT },
    ],
  },
  {
    title: 'Legal',
    links: [
      { label: 'Privacy Policy',    href: ROUTES.PRIVACY },
      { label: 'Terms of Service',  href: ROUTES.TERMS },
      { label: 'Data Processing',   href: ROUTES.DATA },
    ],
  },
]
