'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import SectionLabel from '@components/common/SectionLabel/SectionLabel'
import { BRIEFING_ITEMS } from '@constants/briefing'
import styles from './BriefingSection.module.scss'

export default function BriefingSection() {
  return (
    <section className={styles.section}>
      <div className={styles.inner}>
        <div className={styles.header}>
          <SectionLabel text="Pre-visit Brief" color="purple" />
          <h2 className={styles.heading}>Arrive prepared. Stay present.</h2>
          <p className={styles.sub}>
            60 seconds before each appointment, Elth AI delivers a structured brief to the doctor — no chart hunting, no catching up mid-consultation.
          </p>
        </div>
        <div className={styles.content}>
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
          <motion.div
            className={styles.imagePanel}
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <Image src="/images/doctor_brief.avif" alt="Doctor reviewing a patient record before a consultation" fill sizes="(max-width: 1024px) 100vw, 36vw" />
            <div className={styles.briefOverlay}>
              <span>Next appointment</span>
              <strong>Everything important, in one brief.</strong>
              <p>History, medicines, results and risk flags—ready before the patient arrives.</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
