'use client'

import { motion } from 'framer-motion'
import SectionLabel from '@components/common/SectionLabel/SectionLabel'
import { COMPLIANCE_BADGES } from '@constants/compliance'
import styles from './ComplianceSection.module.scss'

export default function ComplianceSection() {
  return (
    <section className={styles.section}>
      <div className={styles.inner}>
        <motion.div
          className={styles.card}
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <div className={styles.left}>
            <SectionLabel text="Compliance" color="teal" />
            <h2 className={styles.heading}>Enterprise-grade security. Day one.</h2>
            <p className={styles.sub}>
              We don&apos;t wait for hospitals to ask about compliance. Every Elth AI deployment ships with full DPDPA 2023, HIPAA, and HL7 FHIR R4 compliance — built in, not bolted on.
            </p>
          </div>
          <div className={styles.badges}>
            {COMPLIANCE_BADGES.map((b, i) => (
              <motion.div
                key={b.name}
                className={styles.badge}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                viewport={{ once: true }}
              >
                <span className={styles.badgeIcon} style={{ color: b.color }}><b.icon size={20} color={b.color} strokeWidth={1.6} /></span>
                <span className={styles.badgeName}>{b.name}</span>
                <span className={styles.badgeDesc}>{b.description}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
