'use client'

import { motion } from 'framer-motion'
import SectionLabel from '@components/common/SectionLabel/SectionLabel'
import GradientText from '@components/common/GradientText/GradientText'
import { LAB_MARKERS, LAB_STATUS_COLOR, LAB_FEATURES_LIST } from '@constants/labReport'
import styles from './FeaturesLabReport.module.scss'

export default function FeaturesLabReport() {
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
            <SectionLabel text="Lab Report AI · P1" color="blue" />
            <h2 className={styles.heading}>
              Lab report in jargon.<br />
              <GradientText variant="teal">Explanation in English.</GradientText>
            </h2>
            <p className={styles.sub}>
              Upload any lab report. Elth AI explains every marker in plain language, flags abnormal values, and tells the patient exactly what to ask their doctor — in their language.
            </p>
            <div className={styles.features}>
              {LAB_FEATURES_LIST.map((f) => (
                <div key={f} className={styles.featureRow}>
                  <span className={styles.check}>✓</span>
                  <span className={styles.featureText}>{f}</span>
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
            <div className={styles.reportCard}>
              <div className={styles.reportHeader}>
                <span className={styles.reportTitle}>CBC Report — Rania, 34F</span>
                <span className={styles.reportDate}>15 Jun 2026</span>
              </div>
              <div className={styles.markers}>
                {LAB_MARKERS.map((m) => (
                  <div key={m.name} className={styles.marker}>
                    <div className={styles.markerTop}>
                      <span className={styles.markerName}>{m.name}</span>
                      <span className={styles.markerValue} style={{ color: LAB_STATUS_COLOR[m.status] }}>
                        {m.value}
                      </span>
                    </div>
                    <div className={styles.markerMeta}>
                      <span className={styles.markerNormal}>Normal: {m.normal}</span>
                      <span className={styles.markerBadge} style={{ background: LAB_STATUS_COLOR[m.status] + '22', color: LAB_STATUS_COLOR[m.status] }}>
                        {m.status}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
              <div className={styles.aiSummary}>
                <span className={styles.aiLabel}>🤖 AI Summary</span>
                <p className={styles.aiText}>Your haemoglobin is low — this may cause tiredness. Your blood sugar is slightly elevated. Your doctor will discuss next steps.</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
