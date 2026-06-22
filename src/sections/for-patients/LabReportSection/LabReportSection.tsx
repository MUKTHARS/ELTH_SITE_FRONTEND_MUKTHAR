'use client'

import { motion } from 'framer-motion'
import SectionLabel from '@components/common/SectionLabel/SectionLabel'
import styles from './LabReportSection.module.scss'

export default function LabReportSection() {
  return (
    <section className={styles.section}>
      <div className={styles.inner}>
        <div className={styles.layout}>
          <motion.div
            className={styles.left}
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <SectionLabel text="Lab Report AI" color="blue" />
            <h2 className={styles.heading}>Your lab report, in plain English — or Tamil, or Hindi.</h2>
            <p className={styles.sub}>
              Upload your report. Elth AI explains every test in language you can understand, highlights what&apos;s abnormal, and tells you exactly what to discuss with your doctor.
            </p>
            <div className={styles.stat}>
              <span className={styles.statNum}>73%</span>
              <span className={styles.statText}>of Indian patients cannot interpret their own lab reports. We&apos;re fixing that.</span>
            </div>
          </motion.div>

          <motion.div
            className={styles.right}
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            viewport={{ once: true }}
          >
            <div className={styles.features}>
              {[
                { icon: '📤', title: 'Upload any format', desc: 'PDF, image, or WhatsApp photo. We handle all lab formats.' },
                { icon: '🔍', title: '200+ test types', desc: 'CBC, LFT, KFT, Lipid Panel, Thyroid, HbA1c and more.' },
                { icon: '🚨', title: 'Abnormal flags', desc: 'High and low values highlighted with plain-language explanation.' },
                { icon: '📋', title: 'Doctor summary', desc: 'Structured summary sent to your doctor before the appointment.' },
              ].map((f, i) => (
                <div key={f.title} className={styles.featureItem}>
                  <span className={styles.featureIcon}>{f.icon}</span>
                  <div>
                    <strong className={styles.featureTitle}>{f.title}</strong>
                    <p className={styles.featureDesc}>{f.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
