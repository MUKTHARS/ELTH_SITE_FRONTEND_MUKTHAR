'use client'

import { motion } from 'framer-motion'
import SectionLabel from '@components/common/SectionLabel/SectionLabel'
import { IconCheck } from '@icons/index'
import { DRUG_CHECKER_LIST, DRUG_INTERACTIONS, DRUG_SEVERITY_COLOR } from '@constants/drugCheck'
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
            {/* <SectionLabel text="Drug Checker" color="amber" /> */}
            <h2 className={styles.heading}>A second set of eyes for every prescription</h2>
            <p className={styles.desc}>
              As you add drugs to a prescription, Elth AI silently checks every combination against a 50,000+ interaction database. Contraindications surface instantly — before you confirm.
            </p>
            <ul className={styles.list}>
              {DRUG_CHECKER_LIST.map((item) => (
                <li key={item} className={styles.listItem}>
                  <IconCheck size={14} className={styles.listCheck} />
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className={styles.right}>
            <div className={styles.drugCard}>
              <div className={styles.drugCardHeader}>
                <span className={styles.drugCardTitle}>Interaction check · this prescription</span>
                <span className={styles.drugCount}>{DRUG_INTERACTIONS.length} flagged</span>
              </div>
              <div className={styles.interactions}>
                {DRUG_INTERACTIONS.map((ix) => {
                  const c = DRUG_SEVERITY_COLOR[ix.severity]
                  return (
                    <div key={`${ix.drug1}-${ix.drug2}`} className={styles.interaction}>
                      <div className={styles.interactionDrugs}>
                        <span className={styles.drugPill}>{ix.drug1}</span>
                        <span className={styles.interactionX}>×</span>
                        <span className={styles.drugPill}>{ix.drug2}</span>
                        <span className={styles.severityBadge} style={{ background: c.bg, color: c.text }}>
                          {ix.severity}
                        </span>
                      </div>
                      <p className={styles.interactionNote}>{ix.note}</p>
                    </div>
                  )
                })}
              </div>
              <div className={styles.drugFooter}>
                <span className={styles.dbNote}>Checked against DrugBank + IPC 2025 · &lt;1s</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
