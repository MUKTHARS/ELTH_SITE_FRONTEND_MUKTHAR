'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import SectionLabel from '@components/common/SectionLabel/SectionLabel'
import { SYMPTOM_CHECKER_FLOW } from '@constants/symptom'
import styles from './SymptomCheckerSection.module.scss'

export default function SymptomCheckerSection() {
  return (
    <section className={styles.section}>
      <div className={styles.inner}>
        <div className={styles.header}>
          <SectionLabel text="Symptom Checker" color="teal" />
          <h2 className={styles.heading}>When something feels wrong, start with a simple conversation</h2>
          <p className={styles.sub}>
            Describe your symptoms on WhatsApp — in Tamil, Hindi, Telugu, or any Indian language. Elth AI asks the right follow-up questions and triages your urgency in minutes.
          </p>
        </div>
        <div className={styles.content}>
          <div className={styles.imagePanel}>
            <Image src="/images/clinic.avif" alt="A calm, supportive care setting" fill sizes="(max-width: 1024px) 100vw, 40vw" />
            <div className={styles.imageCaption}>Support that helps you decide what to do next.</div>
          </div>
          <div className={styles.flow}>
          {SYMPTOM_CHECKER_FLOW.map((f, i) => (
            <motion.div
              key={f.step}
              className={styles.flowStep}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: i * 0.1 }}
              viewport={{ once: true }}
            >
              <span className={styles.flowIcon}>{f.icon}</span>
              <h3 className={styles.flowLabel}>{f.step}</h3>
              <p className={styles.flowDesc}>{f.desc}</p>
            </motion.div>
          ))}
          </div>
        </div>
      </div>
    </section>
  )
}
