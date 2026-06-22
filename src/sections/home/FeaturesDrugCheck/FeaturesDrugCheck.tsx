'use client'

import { motion } from 'framer-motion'
import SectionLabel from '@components/common/SectionLabel/SectionLabel'
import GradientText from '@components/common/GradientText/GradientText'
import { DRUG_INTERACTIONS, DRUG_SEVERITY_COLOR, DRUG_BULLETS } from '@constants/drugCheck'
import styles from './FeaturesDrugCheck.module.scss'

export default function FeaturesDrugCheck() {
  return (
    <section className={styles.section}>
      <div className={styles.inner}>
        <div className={styles.content}>
          <motion.div
            className={styles.left}
            initial={{ opacity: 0, x: -32 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <SectionLabel text="Drug Checker · P0" color="amber" />
            <h2 className={styles.heading}>
              Prescribe with<br />
              <GradientText variant="warm">confidence.</GradientText>
            </h2>
            <p className={styles.sub}>
              Before any prescription is finalized, Elth AI cross-checks every drug combination against a 50,000+ interaction database — flagging contraindications in real time.
            </p>
            <div className={styles.bullets}>
              {DRUG_BULLETS.map((b) => (
                <div key={b} className={styles.bullet}>
                  <span className={styles.bulletDot} />
                  <span className={styles.bulletText}>{b}</span>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            className={styles.right}
            initial={{ opacity: 0, x: 32 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            viewport={{ once: true }}
          >
            <div className={styles.drugCard}>
              <div className={styles.drugCardHeader}>
                <span className={styles.drugCardTitle}>Interaction Alerts</span>
                <span className={styles.drugCount}>3 flagged</span>
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
                        <span
                          className={styles.severityBadge}
                          style={{ background: c.bg, color: c.text }}
                        >
                          {ix.severity}
                        </span>
                      </div>
                      <p className={styles.interactionNote}>{ix.note}</p>
                    </div>
                  )
                })}
              </div>
              <div className={styles.drugFooter}>
                <span className={styles.dbNote}>Powered by DrugBank + IPC 2025</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
