'use client'

import { motion } from 'framer-motion'
import SectionLabel from '@components/common/SectionLabel/SectionLabel'
import StatCard from '@components/common/StatCard/StatCard'
import { STATS } from '@constants/stats'
import styles from './StatsSection.module.scss'

export default function StatsSection() {
  return (
    <section className={styles.section}>
      <div className={styles.inner}>
        <motion.div
          className={styles.header}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <SectionLabel text="Traction" color="teal" />
          <h2 className={styles.heading}>Numbers that matter</h2>
          <p className={styles.sub}>Deployed in production across India. These are real numbers from live hospitals.</p>
        </motion.div>

        <div className={styles.grid}>
          {STATS.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              viewport={{ once: true }}
            >
              <StatCard stat={stat} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
