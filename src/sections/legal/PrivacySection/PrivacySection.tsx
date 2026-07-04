'use client'

import { motion } from 'framer-motion'
import { PRIVACY_SECTIONS } from '@constants/privacy'
import styles from './PrivacySection.module.scss'

export default function PrivacySection() {
  return (
    <section className={styles.section}>
      <div className={styles.inner}>
        <div className={styles.header}>
          <span className={styles.eyebrow}>Legal</span>
          <h1 className={styles.heading}>Privacy Policy</h1>
          <p className={styles.sub}>
            This Privacy Policy applies to the Elth mobile application and the Elth AI website, both owned and operated by Monobot Agentic Automations LLP.
          </p>
        </div>

        <div className={styles.list}>
          {PRIVACY_SECTIONS.map((sec, i) => (
            <motion.div
              key={sec.title}
              className={styles.card}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: Math.min(i * 0.04, 0.3) }}
              viewport={{ once: true }}
            >
              <h2 className={styles.cardTitle}>{sec.title}</h2>
              <p className={styles.cardBody}>{sec.body}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
