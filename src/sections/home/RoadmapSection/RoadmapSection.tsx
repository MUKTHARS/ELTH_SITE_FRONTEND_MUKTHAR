'use client'

import { motion } from 'framer-motion'
import SectionLabel from '@components/common/SectionLabel/SectionLabel'
import { ROADMAP } from '@constants/roadmap'
import styles from './RoadmapSection.module.scss'

const STATUS_LABEL: Record<string, string> = {
  done: 'Shipped',
  active: 'In Progress',
  upcoming: 'Planned',
}

const STATUS_CLASS: Record<string, string> = {
  done: 'statusDone',
  active: 'statusActive',
  upcoming: 'statusUpcoming',
}

export default function RoadmapSection() {
  return (
    <section className={styles.section}>
      <div className={styles.inner}>
        <div className={styles.header}>
          <SectionLabel text="Roadmap" color="purple" />
          <h2 className={styles.heading}>Where we&apos;re going</h2>
          <p className={styles.sub}>
            Elth AI is on an aggressive build schedule. Here&apos;s what&apos;s shipped, what&apos;s coming, and what&apos;s on the horizon.
          </p>
        </div>

        <div className={styles.timeline}>
          {ROADMAP.map((phase, i) => (
            <motion.div
              key={phase.phase}
              className={styles.phase}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              viewport={{ once: true }}
            >
              <div className={styles.phaseLeft}>
                <span className={`${styles.statusPill} ${styles[STATUS_CLASS[phase.status]]}`}>
                  {STATUS_LABEL[phase.status]}
                </span>
                <span className={styles.phaseNum}>{phase.phase}</span>
              </div>

              <div className={styles.phaseConnector}>
                <div className={styles.dot} data-status={phase.status} />
                {i < ROADMAP.length - 1 && <div className={styles.line} />}
              </div>

              <div className={styles.phaseRight}>
                <h3 className={styles.phaseTitle}>{phase.title}</h3>
                <ul className={styles.features}>
                  {phase.deliverables.map((f) => (
                    <li key={f} className={styles.feature}>{f}</li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
