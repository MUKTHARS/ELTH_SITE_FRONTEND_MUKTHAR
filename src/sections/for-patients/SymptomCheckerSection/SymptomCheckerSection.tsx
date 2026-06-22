'use client'

import { motion } from 'framer-motion'
import SectionLabel from '@components/common/SectionLabel/SectionLabel'
import styles from './SymptomCheckerSection.module.scss'

export default function SymptomCheckerSection() {
  return (
    <section className={styles.section}>
      <div className={styles.inner}>
        <div className={styles.header}>
          <SectionLabel text="Symptom Checker" color="teal" />
          <h2 className={styles.heading}>Don&apos;t Google it. Ask your hospital&apos;s AI.</h2>
          <p className={styles.sub}>
            Describe your symptoms on WhatsApp — in Tamil, Hindi, Telugu, or any Indian language. Elth AI asks the right follow-up questions and triages your urgency in minutes.
          </p>
        </div>
        <div className={styles.flow}>
          {[
            { icon: '💬', step: 'Describe on WhatsApp', desc: 'Text or voice. Any language. No app to download.' },
            { icon: '🤖', step: 'AI asks follow-ups', desc: 'Smart questions about duration, severity, and history.' },
            { icon: '⚡', step: 'Urgency triage', desc: 'Low / Moderate / High. Critical cases routed immediately.' },
            { icon: '🩺', step: 'Doctor pre-briefed', desc: 'Your doctor sees a structured intake before you arrive.' },
          ].map((f, i) => (
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
    </section>
  )
}
