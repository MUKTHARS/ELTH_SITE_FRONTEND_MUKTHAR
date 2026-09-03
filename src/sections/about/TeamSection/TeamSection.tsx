'use client'

import { motion } from 'framer-motion'
import SectionLabel from '@components/common/SectionLabel/SectionLabel'
import { TEAM_EXPERTISE } from '@constants/team'
import styles from './TeamSection.module.scss'

export default function TeamSection() {
  return (
    <section className={styles.section}>
      <div className={styles.inner}>
        <div className={styles.header}>
          <SectionLabel text="The Team" color="teal" />
          <h2 className={styles.heading}>Built by people who understand healthcare</h2>
          <p className={styles.sub}>Our founding team combines clinical experience, AI research, and deep product intuition in Indian health-tech.</p>
        </div>
        <div className={styles.grid}>
          {TEAM_EXPERTISE.map((item, i) => (
            <motion.div
              key={item.title}
              className={styles.card}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: i * 0.1 }}
              viewport={{ once: true }}
            >
              <span className={styles.icon}><item.icon size={22} color="#0F7A5C" strokeWidth={1.6} /></span>
              <h3 className={styles.cardTitle}>{item.title}</h3>
              <p className={styles.desc}>{item.desc}</p>
            </motion.div>
          ))}
        </div>
        <div className={styles.saple}>
          <span className={styles.sapleLabel}>Built on</span>
          <strong className={styles.sapleName}>Saple.ai</strong>
          <p className={styles.sapleDesc}>Elth AI is built on the Saple.ai platform — India&apos;s enterprise AI infrastructure layer for regulated industries.</p>
        </div>
      </div>
    </section>
  )
}
