'use client'

import { motion } from 'framer-motion'
import SectionLabel from '@components/common/SectionLabel/SectionLabel'
import GradientText from '@components/common/GradientText/GradientText'
import { CONSENT_PRINCIPLES } from '@constants/consent'
import styles from './ConsentSection.module.scss'

export default function ConsentSection() {
  return (
    <section className={styles.section}>
      <div className={styles.inner}>
        <div className={styles.header}>
          <SectionLabel text="Privacy & Compliance" color="teal" />
          <h2 className={styles.heading}>
            AI you can trust.<br />
            <GradientText variant="teal">Privacy by design.</GradientText>
          </h2>
          <p className={styles.sub}>
            Healthcare data is the most sensitive data in the world. We built Elth AI with consent at the centre — not as an afterthought.
          </p>
        </div>

        <div className={styles.grid}>
          {CONSENT_PRINCIPLES.map((p, i) => (
            <motion.div
              key={p.title}
              className={styles.card}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: i * 0.07 }}
              viewport={{ once: true }}
            >
              <span className={styles.icon}>{p.icon}</span>
              <h3 className={styles.cardTitle}>{p.title}</h3>
              <p className={styles.cardDesc}>{p.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
