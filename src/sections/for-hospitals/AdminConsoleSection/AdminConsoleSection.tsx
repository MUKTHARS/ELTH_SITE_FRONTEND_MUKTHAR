'use client'

import { motion } from 'framer-motion'
import SectionLabel from '@components/common/SectionLabel/SectionLabel'
import styles from './AdminConsoleSection.module.scss'

const FEATURES = [
  { icon: '👥', title: 'Doctor & staff management', desc: 'Add doctors, assign roles, set permissions. Full control over who sees what.' },
  { icon: '📅', title: 'Appointment scheduling', desc: 'Smart scheduling with no-show prediction and automated reminders via WhatsApp.' },
  { icon: '🏷️', title: 'White-label customization', desc: 'Your logo, your colors, your domain. Patients interact with your brand.' },
  { icon: '📢', title: 'Patient communication', desc: 'Send discharge summaries, medication reminders, follow-up prompts — all automated.' },
  { icon: '🔌', title: 'EMR integration', desc: 'Two-way sync with Healthplix, Practo, eVital, or your custom EMR.' },
  { icon: '💳', title: 'Billing & receipts', desc: 'Auto-generate bills, track payments, export to your accounting software.' },
]

export default function AdminConsoleSection() {
  return (
    <section className={styles.section}>
      <div className={styles.inner}>
        <div className={styles.header}>
          <SectionLabel text="Admin Console" color="teal" />
          <h2 className={styles.heading}>Run your entire hospital from one screen</h2>
          <p className={styles.sub}>The Elth Admin Console gives hospital administrators full operational control — staff, scheduling, communication, billing, and integrations.</p>
        </div>
        <div className={styles.grid}>
          {FEATURES.map((f, i) => (
            <motion.div
              key={f.title}
              className={styles.card}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: i * 0.07 }}
              viewport={{ once: true }}
            >
              <span className={styles.icon}>{f.icon}</span>
              <h3 className={styles.cardTitle}>{f.title}</h3>
              <p className={styles.cardDesc}>{f.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
