'use client'

import { motion } from 'framer-motion'
import SectionLabel from '@components/common/SectionLabel/SectionLabel'
import styles from './ProblemSection.module.scss'

const PROBLEMS = [
  {
    icon: '🩺',
    stat: '30–40%',
    title: 'Doctor time lost to paperwork',
    desc: 'Clinicians spend nearly half their day on documentation, notes, and administrative tasks — time stolen from patients.',
    color: '#26215C',
    bg: '#EEEDFE',
  },
  {
    icon: '📋',
    stat: '73%',
    title: 'Patients can\'t understand their reports',
    desc: 'Lab reports arrive in medical jargon. Patients panic, self-diagnose on Google, and flood clinics with unnecessary visits.',
    color: '#085041',
    bg: '#E1F5EE',
  },
  {
    icon: '🔗',
    stat: '0',
    title: 'Connected care after discharge',
    desc: 'Once the patient walks out, they\'re on their own. No automated follow-up, no medication reminders, no continuity of care.',
    color: '#042C53',
    bg: '#E6F1FB',
  },
]

export default function ProblemSection() {
  return (
    <section className={styles.section}>
      <div className={styles.inner}>
        <div className={styles.header}>
          <SectionLabel text="The Problem" color="purple" />
          <h2 className={styles.heading}>Indian healthcare is broken in three ways</h2>
          <p className={styles.sub}>Every clinic, every hospital, every patient feels it. We built Elth AI to fix all three.</p>
        </div>

        <div className={styles.grid}>
          {PROBLEMS.map((p, i) => (
            <motion.div
              key={p.title}
              className={styles.card}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              viewport={{ once: true }}
            >
              <div className={styles.iconWrap} style={{ background: p.bg, color: p.color }}>
                <span className={styles.icon}>{p.icon}</span>
              </div>
              <div className={styles.stat} style={{ color: p.color }}>{p.stat}</div>
              <h3 className={styles.cardTitle}>{p.title}</h3>
              <p className={styles.cardDesc}>{p.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
