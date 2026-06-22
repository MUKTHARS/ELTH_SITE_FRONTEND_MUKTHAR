'use client'

import { motion } from 'framer-motion'
import SectionLabel from '@components/common/SectionLabel/SectionLabel'
import styles from './BriefingSection.module.scss'

const ITEMS = [
  { icon: '📌', title: 'Chief complaint', desc: 'What the patient is here for, in their own words — summarized by AI.' },
  { icon: '📂', title: 'Full history snapshot', desc: 'Diagnoses, allergies, ongoing medications, past surgeries — one screen.' },
  { icon: '🔬', title: 'Latest investigations', desc: 'Labs and imaging from the last 90 days, flagged if abnormal.' },
  { icon: '🚩', title: 'Risk flags', desc: 'Smoking, BMI, family history, adherence issues — surfaced automatically.' },
]

export default function BriefingSection() {
  return (
    <section className={styles.section}>
      <div className={styles.inner}>
        <div className={styles.header}>
          <SectionLabel text="Pre-visit Brief" color="purple" />
          <h2 className={styles.heading}>Walk in knowing everything that matters</h2>
          <p className={styles.sub}>
            60 seconds before each appointment, Elth AI delivers a structured brief to the doctor — no chart hunting, no catching up mid-consultation.
          </p>
        </div>
        <div className={styles.grid}>
          {ITEMS.map((item, i) => (
            <motion.div
              key={item.title}
              className={styles.card}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: i * 0.09 }}
              viewport={{ once: true }}
            >
              <span className={styles.icon}>{item.icon}</span>
              <h3 className={styles.cardTitle}>{item.title}</h3>
              <p className={styles.cardDesc}>{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
