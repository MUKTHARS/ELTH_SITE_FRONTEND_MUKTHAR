'use client'

import { motion } from 'framer-motion'
import { DATA_PROCESSING_SECTIONS } from '@constants/dataProcessing'
import styles from './DataProcessingSection.module.scss'

export default function DataProcessingSection() {
  return (
    <section className={styles.section}>
      <div className={styles.inner}>
        <div className={styles.header}>
          <span className={styles.eyebrow}>Legal · Security</span>
          <h1 className={styles.heading}>Data Processing</h1>
          <p className={styles.sub}>
            How Elth AI processes hospital and patient data, and the technical and organisational measures in place to protect it — for hospital compliance and IT teams evaluating the platform.
          </p>
        </div>

        <div className={styles.list}>
          {DATA_PROCESSING_SECTIONS.map((sec, i) => (
            <motion.div
              key={sec.title}
              className={styles.card}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: Math.min(i * 0.04, 0.3) }}
              viewport={{ once: true }}
            >
              <h2 className={styles.cardTitle}>{sec.title}</h2>
              <p className={styles.cardBody}>{sec.body}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
