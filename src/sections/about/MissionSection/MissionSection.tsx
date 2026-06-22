'use client'

import { motion } from 'framer-motion'
import GradientText from '@components/common/GradientText/GradientText'
import styles from './MissionSection.module.scss'

export default function MissionSection() {
  return (
    <section className={styles.section}>
      <div className={styles.inner}>
        <motion.div
          className={styles.content}
          initial={{ opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <span className={styles.eyebrow}>Our Mission</span>
          <h1 className={styles.heading}>
            AI infrastructure for<br />
            <GradientText variant="teal">every Indian hospital.</GradientText>
          </h1>
          <p className={styles.body}>
            India has 1.4 billion people and a severe shortage of healthcare infrastructure. The solution isn&apos;t more hospitals — it&apos;s making every existing doctor, nurse, and clinic dramatically more capable using AI.
          </p>
          <p className={styles.body}>
            We built Elth AI on Saple.ai to give hospitals the same AI capabilities that large tech companies have — at a price that works for a 3-doctor clinic in Coimbatore and a 500-bed hospital in Hyderabad.
          </p>

          <div className={styles.values}>
            {[
              { icon: '🎯', value: 'Doctor-first', desc: 'We design for the doctor\'s workflow, not around it. If it slows them down, we rebuild it.' },
              { icon: '🔒', value: 'Privacy by default', desc: 'Patient consent is not optional. Every data decision is made as if our own family is the patient.' },
              { icon: '🌏', value: 'India-native', desc: 'Built for Indian languages, Indian infrastructure, Indian healthcare workflows. Not adapted from the West.' },
            ].map((v, i) => (
              <motion.div
                key={v.value}
                className={styles.valueCard}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.45, delay: i * 0.1 }}
                viewport={{ once: true }}
              >
                <span className={styles.valueIcon}>{v.icon}</span>
                <strong className={styles.valueName}>{v.value}</strong>
                <p className={styles.valueDesc}>{v.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
