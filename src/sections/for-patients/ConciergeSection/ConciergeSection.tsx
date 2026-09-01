'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import SectionLabel from '@components/common/SectionLabel/SectionLabel'
import { CONCIERGE_SERVICES } from '@constants/concierge'
import styles from './ConciergeSection.module.scss'

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
        <div className={styles.content}>
          <div className={styles.grid}>
          {CONCIERGE_SERVICES.map((s, i) => (
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
          <div className={styles.imagePanel}>
            <Image src="/images/appointment.webp" alt="A caring clinician supporting a patient" fill sizes="(max-width: 1024px) 100vw, 36vw" />
            <div className={styles.imageCaption}>The details are easier to manage when care stays connected.</div>
          </div>
        </div>
      </div>
    </section>
  )
}
