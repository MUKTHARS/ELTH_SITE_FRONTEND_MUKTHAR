'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import SectionLabel from '@components/common/SectionLabel/SectionLabel'
import { ADMIN_FEATURES } from '@constants/adminConsole'
import styles from './AdminConsoleSection.module.scss'

export default function AdminConsoleSection() {
  return (
    <section className={styles.section}>
      <div className={styles.inner}>
        <div className={styles.header}>
          <SectionLabel text="Admin Console" color="teal" />
          <h2 className={styles.heading}>The care experience, connected behind the scenes</h2>
          <p className={styles.sub}>The Elth Admin Console gives hospital administrators full operational control — staff, scheduling, communication, billing, and integrations.</p>
        </div>
        <div className={styles.content}>
          <div className={styles.imagePanel}>
            <Image src="/images/doctorctc.avif" alt="Hospital team collaborating around patient care" fill sizes="(max-width: 1024px) 100vw, 40vw" />
            <div className={styles.imageCaption}>One layer for the people running care.</div>
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
              <span className={styles.icon}><f.icon size={20} color="#1E2A4A" strokeWidth={1.6} /></span>
              <h3 className={styles.cardTitle}>{f.title}</h3>
              <p className={styles.cardDesc}>{f.desc}</p>
            </motion.div>
          ))}
          </div>
        </div>
      </div>
    </section>
  )
}
