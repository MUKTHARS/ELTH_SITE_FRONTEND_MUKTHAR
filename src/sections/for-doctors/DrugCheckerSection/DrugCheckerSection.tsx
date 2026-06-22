'use client'

import { motion } from 'framer-motion'
import SectionLabel from '@components/common/SectionLabel/SectionLabel'
import styles from './DrugCheckerSection.module.scss'

export default function DrugCheckerSection() {
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
            <SectionLabel text="Drug Checker" color="amber" />
            <h2 className={styles.heading}>50,000+ interactions. Zero extra steps.</h2>
            <p className={styles.desc}>
              As you add drugs to a prescription, Elth AI silently checks every combination against a 50,000+ interaction database. Contraindications surface instantly — before you confirm.
            </p>
            <ul className={styles.list}>
              {[
                'Drug–drug interactions with severity grading',
                'Drug–allergy contraindications',
                'Renal & hepatic dose adjustments',
                'Paediatric and geriatric alerts',
                'Pregnancy category warnings',
              ].map((item) => (
                <li key={item} className={styles.listItem}>
                  <span className={styles.listDot} />
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className={styles.right}>
            <div className={styles.statGroup}>
              {[
                { num: '50K+', label: 'drug interactions' },
                { num: '<1s', label: 'check time' },
                { num: '0', label: 'extra clicks' },
              ].map((s) => (
                <div key={s.label} className={styles.stat}>
                  <span className={styles.statNum}>{s.num}</span>
                  <span className={styles.statLabel}>{s.label}</span>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
