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
          <h2 className={styles.heading}>The consultation ends.<br/>The work doesn&apos;t.</h2>
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
              <div className={styles.cardHeader}>
                <h3 className={styles.cardTitle}>{p.title}</h3>
                <span className={styles.arrowIcon}>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
                </span>
              </div>
              <p className={styles.cardDesc}>{p.desc}</p>
              
              {/* <div className={styles.cardBottom}>
                <div className={styles.iconWrap} style={{ background: p.bg, color: p.color }}>
                  <p.icon size={36} strokeWidth={1.5} />
                </div>
              </div> */}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
