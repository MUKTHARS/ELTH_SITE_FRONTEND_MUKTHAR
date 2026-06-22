'use client'

import { motion } from 'framer-motion'
import SectionLabel from '@components/common/SectionLabel/SectionLabel'
import { BRIEFING_ITEMS } from '@constants/briefing'
import styles from './BriefingSection.module.scss'

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
          {BRIEFING_ITEMS.map((item, i) => (
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
