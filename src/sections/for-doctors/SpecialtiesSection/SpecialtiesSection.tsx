'use client'

import { motion } from 'framer-motion'
import SectionLabel from '@components/common/SectionLabel/SectionLabel'
import MonoLabel from '@components/common/MonoLabel/MonoLabel'
import TabDots from '@components/common/TabDots/TabDots'
import { SPECIALTIES } from '@constants/specialties'
import styles from './SpecialtiesSection.module.scss'

export default function SpecialtiesSection() {
  return (
    <section className={styles.section}>
      <div className={styles.inner}>
        <div className={styles.header}>
          <SectionLabel text="Built for Every Specialty" color="purple" />
          <h2 className={styles.heading}>Adapted to how you practice</h2>
          <p className={styles.sub}>
            Your workflows. Your terminology. Your templates — across every specialty in your hospital.
          </p>
        </div>

        <div className={styles.mockupCard}>
          <button type="button" className={styles.expandBtn} aria-label="More detail">+</button>
          <div className={styles.mockupTop}>
            <MonoLabel text="Specialties · Coverage" />
            <TabDots total={3} active={0} />
          </div>
          <div className={styles.mockupBody}>
            <span className={styles.monoNum}>{SPECIALTIES.length}</span>
            <span className={styles.mockupStatLabel}>specialty templates live</span>
          </div>
        </div>

        <div className={styles.grid}>
          {SPECIALTIES.map((s, i) => (
            <motion.div
              key={s.name}
              className={styles.card}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: i * 0.06 }}
              viewport={{ once: true }}
            >
              <span className={styles.icon}><s.icon size={20} color="#1E2A4A" strokeWidth={1.6} /></span>
              <h3 className={styles.cardTitle}>{s.name}</h3>
              <p className={styles.cardDesc}>{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
