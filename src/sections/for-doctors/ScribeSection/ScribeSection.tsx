'use client'

import { motion } from 'framer-motion'
import SectionLabel from '@components/common/SectionLabel/SectionLabel'
import styles from './ScribeSection.module.scss'

const WORKFLOW = [
  { step: '1', label: 'Doctor speaks', detail: 'Record the consultation naturally — patient present or dictation mode.' },
  { step: '2', label: 'AI transcribes', detail: 'Real-time multilingual transcription in 12+ Indian languages.' },
  { step: '3', label: 'SOAP note generated', detail: 'Structured Subjective / Objective / Assessment / Plan in 30 seconds.' },
  { step: '4', label: 'Review & sign', detail: 'Edit any field, then one click sends to your EMR.' },
]

export default function ScribeSection() {
  return (
    <section className={styles.section}>
      <div className={styles.inner}>
        <div className={styles.header}>
          <SectionLabel text="AI Scribe" color="purple" />
          <h2 className={styles.heading}>From spoken words to signed note in 30 seconds</h2>
          <p className={styles.sub}>
            The average doctor spends 2 hours per day on documentation. Elth Scribe gives that time back.
          </p>
        </div>
        <div className={styles.workflow}>
          {WORKFLOW.map((w, i) => (
            <motion.div
              key={w.step}
              className={styles.wStep}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: i * 0.1 }}
              viewport={{ once: true }}
            >
              <div className={styles.wNum}>{w.step}</div>
              <h3 className={styles.wLabel}>{w.label}</h3>
              <p className={styles.wDetail}>{w.detail}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
