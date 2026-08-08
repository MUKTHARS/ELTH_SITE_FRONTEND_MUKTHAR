'use client'

import { motion } from 'framer-motion'
import SectionLabel from '@components/common/SectionLabel/SectionLabel'
import { PROBLEMS } from '@constants/problems'
import styles from './ProblemSection.module.scss'

export default function ProblemSection() {
  return (
    <section className={styles.section}>
      <div className={styles.inner}>
        <div className={styles.header}>
          <SectionLabel text="The Problem" color="purple" />
          <h2 className={styles.heading}>The consultation ends. The work doesn&apos;t.</h2>
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
                <p.icon size={24} />
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
