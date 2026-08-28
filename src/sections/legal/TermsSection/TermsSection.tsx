'use client'

import { motion } from 'framer-motion'
import { TERMS_SECTIONS } from '@constants/terms'
import styles from './TermsSection.module.scss'

export default function TermsSection() {
  return (
    <section className={styles.section}>
      <div className={styles.inner}>
        <div className={styles.header}>
          <span className={styles.eyebrow}>Legal</span>
          <h1 className={styles.heading}>Terms of Service</h1>
          <p className={styles.sub}>
            These Terms govern Your access to and use of the Elth AI website, the Elth mobile application, and related services, owned and operated by Monobot Agentic Automations LLP.
          </p>
        </div>

        <div className={styles.list}>
          {TERMS_SECTIONS.map((sec, i) => (
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
