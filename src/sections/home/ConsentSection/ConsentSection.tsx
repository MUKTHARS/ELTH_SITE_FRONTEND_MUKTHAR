'use client'

import { motion } from 'framer-motion'
import SectionLabel from '@components/common/SectionLabel/SectionLabel'
import GradientText from '@components/common/GradientText/GradientText'
import styles from './ConsentSection.module.scss'

const PRINCIPLES = [
  {
    icon: '🔒',
    title: 'Data never leaves your hospital',
    desc: 'Patient records are stored in your hospital\'s tenant — fully isolated. No cross-tenant data sharing, ever.',
  },
  {
    icon: '✅',
    title: 'Explicit patient consent',
    desc: 'Every patient OTPs in before any AI touches their data. Consent is logged, timestamped, and auditable.',
  },
  {
    icon: '📋',
    title: 'DPDPA 2023 compliant',
    desc: 'Built to the Digital Personal Data Protection Act 2023. Right to access, right to erase — both implemented.',
  },
  {
    icon: '🛡️',
    title: 'HIPAA & HL7 FHIR R4',
    desc: 'International standards for healthcare data exchange. Your data is interoperable and portable.',
  },
  {
    icon: '🧪',
    title: 'ISO 27001 certified infrastructure',
    desc: 'All infrastructure runs on ISO 27001 certified cloud. Annual penetration tests. 99.9% uptime SLA.',
  },
  {
    icon: '👁️',
    title: 'AI transparency',
    desc: 'Every AI suggestion shows its reasoning. Doctors see what the AI used to arrive at a recommendation.',
  },
]

export default function ConsentSection() {
  return (
    <section className={styles.section}>
      <div className={styles.inner}>
        <div className={styles.header}>
          <SectionLabel text="Privacy & Compliance" color="teal" />
          <h2 className={styles.heading}>
            AI you can trust.<br />
            <GradientText variant="teal">Privacy by design.</GradientText>
          </h2>
          <p className={styles.sub}>
            Healthcare data is the most sensitive data in the world. We built Elth AI with consent at the centre — not as an afterthought.
          </p>
        </div>

        <div className={styles.grid}>
          {PRINCIPLES.map((p, i) => (
            <motion.div
              key={p.title}
              className={styles.card}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: i * 0.07 }}
              viewport={{ once: true }}
            >
              <span className={styles.icon}>{p.icon}</span>
              <h3 className={styles.cardTitle}>{p.title}</h3>
              <p className={styles.cardDesc}>{p.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
