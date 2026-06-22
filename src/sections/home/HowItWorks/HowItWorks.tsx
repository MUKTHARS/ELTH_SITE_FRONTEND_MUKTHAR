'use client'

import { motion } from 'framer-motion'
import SectionLabel from '@components/common/SectionLabel/SectionLabel'
import styles from './HowItWorks.module.scss'

const STEPS = [
  {
    num: '01',
    icon: '🏥',
    title: 'Hospital signs up',
    desc: 'Your hospital gets a white-label tenant. Custom logo, subdomain, and patient-facing brand. Setup takes 48 hours.',
    color: '#085041',
  },
  {
    num: '02',
    icon: '⚙️',
    title: 'Configure your workflows',
    desc: 'Enable the features your hospital needs. Scribe for OPD? Symptom checker on WhatsApp? Analytics for admin? All toggleable.',
    color: '#26215C',
  },
  {
    num: '03',
    icon: '📱',
    title: 'Patients connect',
    desc: 'Patients reach your hospital\'s AI via WhatsApp, web portal, or app. They never see Elth — only your hospital.',
    color: '#042C53',
  },
  {
    num: '04',
    icon: '🤖',
    title: 'AI works across every touchpoint',
    desc: 'Intake → consultation → diagnosis → prescription → follow-up. Elth AI is the thread across every step of care.',
    color: '#412402',
  },
]

export default function HowItWorks() {
  return (
    <section className={styles.section}>
      <div className={styles.inner}>
        <div className={styles.header}>
          <SectionLabel text="How It Works" color="teal" />
          <h2 className={styles.heading}>Up and running in 48 hours</h2>
          <p className={styles.sub}>No lengthy EMR migrations. No IT overhaul. Elth AI sits on top of your existing systems.</p>
        </div>

        <div className={styles.steps}>
          {STEPS.map((s, i) => (
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
                  {s.icon}
                </div>
                <span className={styles.stepNum} style={{ color: s.color }}>{s.num}</span>
              </div>
              <h3 className={styles.stepTitle}>{s.title}</h3>
              <p className={styles.stepDesc}>{s.desc}</p>
              {i < STEPS.length - 1 && <div className={styles.connector} />}
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
          <span className={styles.noteIcon}>💡</span>
          <p className={styles.noteText}>
            <strong>No patients ever see &quot;Elth AI&quot;</strong> — they interact with your hospital&apos;s brand. We&apos;re the infrastructure, you&apos;re the experience.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
