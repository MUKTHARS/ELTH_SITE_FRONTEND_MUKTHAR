'use client'

import { motion } from 'framer-motion'
import SectionLabel from '@components/common/SectionLabel/SectionLabel'
import { ADMIN_FEATURES } from '@constants/adminConsole'
import styles from './AdminConsoleSection.module.scss'

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
          {ADMIN_FEATURES.map((f, i) => (
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
