'use client'

import { motion } from 'framer-motion'
import SectionLabel from '@components/common/SectionLabel/SectionLabel'
import GradientText from '@components/common/GradientText/GradientText'
import MockupFrame from '@components/common/MockupFrame/MockupFrame'
import { SCRIBE_POINTS } from '@constants/scribe'
import styles from './FeaturesScribe.module.scss'

export default function FeaturesScribe() {
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
            <SectionLabel text="AI Scribe · P0" color="purple" />
            <h2 className={styles.heading}>
              Stop typing.<br />
              <GradientText variant="teal">Start healing.</GradientText>
            </h2>
            <p className={styles.sub}>
              Saple AI Scribe transcribes the consultation and organizes only what the doctor said into a draft report for review.
            </p>
            <ul className={styles.points}>
              {SCRIBE_POINTS.map((pt) => (
                <li key={pt.title} className={styles.point}>
                  <span className={styles.pointIcon}><pt.icon size={18} strokeWidth={1.6} /></span>
                  <div>
                    <strong className={styles.pointTitle}>{pt.title}</strong>
                    <p className={styles.pointDesc}>{pt.desc}</p>
                  </div>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            className={styles.right}
            initial={{ opacity: 0, x: 32 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            viewport={{ once: true }}
          >
            <MockupFrame type="browser">
              <div className={styles.soapMock}>
                <div className={styles.soapHeader}>
                  <span className={styles.soapDot} />
                  <span className={styles.soapTitle}>AI Scribe — Draft Report</span>
                  <span className={styles.soapBadge}>Live</span>
                </div>
                {['Complaints', 'Examination', 'Investigation', 'Diagnosis', 'Treatment plan', 'Medication'].map((label, i) => (
                  <div key={label} className={styles.soapRow}>
                    <span className={styles.soapLabel}>{label}</span>
                    <div className={styles.soapLines}>
                      <div className={styles.soapLine} style={{ width: `${88 - i * 8}%` }} />
                      {i < 2 && <div className={styles.soapLine} style={{ width: `${68 - i * 6}%` }} />}
                    </div>
                  </div>
                ))}
                <div className={styles.soapFooter}>
                  <button className={styles.soapBtn}>Send to EMR →</button>
                </div>
              </div>
            </MockupFrame>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
