'use client'

import { motion } from 'framer-motion'
import SectionLabel from '@components/common/SectionLabel/SectionLabel'
import { IconLightbulb } from '@icons/index'
import { HOW_IT_WORKS_STEPS } from '@constants/howItWorks'
import styles from './HowItWorks.module.scss'

export default function HowItWorks() {
  return (
    <section className={styles.section}>
      <div className={styles.inner}>
        <div className={styles.header}>
          <SectionLabel text="How It Works" color="teal" />
          <h2 className={styles.heading}>Up and running in 48 hours</h2>
          <p className={styles.sub}>No lengthy EMR migrations. No IT overhaul. Saple AI sits on top of your existing systems.</p>
        </div>

        <div className={styles.steps}>
          {HOW_IT_WORKS_STEPS.map((s, i) => (
            <motion.div
              key={s.num}
              className={styles.step}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.12 }}
              viewport={{ once: true }}
            >
              <div className={styles.stepTop}>
                <div className={styles.stepIcon} style={{ color: s.color, background: s.color + '18' }}>
                  <s.icon size={22} strokeWidth={1.6} />
                </div>
                <span className={styles.stepNum} style={{ color: s.color }}>{s.num}</span>
              </div>
              <h3 className={styles.stepTitle}>{s.title}</h3>
              <p className={styles.stepDesc}>{s.desc}</p>
              {i < HOW_IT_WORKS_STEPS.length - 1 && <div className={styles.connector} />}
            </motion.div>
          ))}
        </div>

        <motion.div
          className={styles.note}
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          viewport={{ once: true }}
        >
          <span className={styles.noteIcon}><IconLightbulb size={18} strokeWidth={1.6} /></span>
          <p className={styles.noteText}>
            <strong>Hospitals can offer care through their own branded channels.</strong> MyElth remains the patient&apos;s personal health app, bringing together records from participating hospitals and clinics.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
