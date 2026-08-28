'use client'

import { motion } from 'framer-motion'
import SectionLabel from '@components/common/SectionLabel/SectionLabel'
import GradientText from '@components/common/GradientText/GradientText'
import { CASE_STUDIES } from '@constants/caseStudies'
import styles from './CaseStudiesSection.module.scss'

export default function CaseStudiesSection() {
  return (
    <section className={styles.section}>
      <div className={styles.inner}>
        <div className={styles.header}>
          <SectionLabel text="Case Studies" color="teal" />
          <h1 className={styles.heading}>
            What Elth AI looks like<br />
            <GradientText variant="teal">inside a real clinic.</GradientText>
          </h1>
          <p className={styles.sub}>
            Illustrative deployment scenarios based on Elth AI&apos;s product design and pilot feedback — showing how each feature changes day-to-day work for doctors, staff, and patients.
          </p>
        </div>

        <div className={styles.list}>
          {CASE_STUDIES.map((cs, i) => (
            <motion.article
              key={cs.hospital}
              className={styles.card}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: Math.min(i * 0.08, 0.3) }}
              viewport={{ once: true }}
            >
              <div className={styles.cardHead}>
                <div>
                  <h2 className={styles.hospital}>{cs.hospital}</h2>
                  <p className={styles.meta}>{cs.type} · {cs.location}</p>
                </div>
              </div>

              <div className={styles.body}>
                <div className={styles.block}>
                  <span className={styles.blockLabel}>Challenge</span>
                  <p className={styles.blockText}>{cs.challenge}</p>
                </div>
                <div className={styles.block}>
                  <span className={styles.blockLabel}>What changed</span>
                  <p className={styles.blockText}>{cs.intervention}</p>
                </div>
              </div>

              <div className={styles.metrics}>
                {cs.metrics.map((m) => (
                  <div key={m.label} className={styles.metric}>
                    <span className={styles.metricValue}>{m.value}</span>
                    <span className={styles.metricLabel}>{m.label}</span>
                  </div>
                ))}
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}
