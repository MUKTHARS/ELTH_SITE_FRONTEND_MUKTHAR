'use client'

import { motion } from 'framer-motion'
import SectionLabel from '@components/common/SectionLabel/SectionLabel'
import styles from './ConciergeSection.module.scss'

const SERVICES = [
  { icon: '💊', title: 'Medication reminders', desc: 'Daily WhatsApp reminders for every medication, in the patient\'s language.' },
  { icon: '📅', title: 'Follow-up scheduling', desc: 'AI proactively books the next appointment based on doctor\'s instructions.' },
  { icon: '📝', title: 'Discharge summaries', desc: 'Plain-language discharge summaries sent directly to the patient and family.' },
  { icon: '❓', title: '24/7 Q&A', desc: 'Patients can ask any health question, any time. The AI answers from their medical record context.' },
]

export default function ConciergeSection() {
  return (
    <section className={styles.section}>
      <div className={styles.inner}>
        <div className={styles.header}>
          <SectionLabel text="Health Concierge · P1" color="teal" />
          <h2 className={styles.heading}>Care doesn&apos;t end when the appointment does</h2>
          <p className={styles.sub}>
            Elth AI stays with patients after discharge — reminders, follow-ups, questions answered, summaries explained. Continuous care, zero extra staff.
          </p>
        </div>
        <div className={styles.grid}>
          {SERVICES.map((s, i) => (
            <motion.div
              key={s.title}
              className={styles.card}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: i * 0.09 }}
              viewport={{ once: true }}
            >
              <span className={styles.icon}>{s.icon}</span>
              <h3 className={styles.cardTitle}>{s.title}</h3>
              <p className={styles.cardDesc}>{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
