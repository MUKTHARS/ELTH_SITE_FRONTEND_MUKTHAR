'use client'

import { motion } from 'framer-motion'
import SectionLabel from '@components/common/SectionLabel/SectionLabel'
import { DRUG_CHECKER_LIST, DRUG_CHECKER_STATS } from '@constants/drugCheck'
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
            <h2 className={styles.heading}>A second set of eyes for every prescription</h2>
            <p className={styles.desc}>
              As you add drugs to a prescription, Elth AI silently checks every combination against a 50,000+ interaction database. Contraindications surface instantly — before you confirm.
            </p>
            <ul className={styles.list}>
              {DRUG_CHECKER_LIST.map((item) => (
                <li key={item} className={styles.listItem}>
                  <span className={styles.listDot} />
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className={styles.right}>
            <div className={styles.statGroup}>
              {DRUG_CHECKER_STATS.map((s) => (
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
