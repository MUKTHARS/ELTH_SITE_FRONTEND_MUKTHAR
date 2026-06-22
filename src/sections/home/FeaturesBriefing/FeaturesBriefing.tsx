'use client'

import { motion } from 'framer-motion'
import SectionLabel from '@components/common/SectionLabel/SectionLabel'
import GradientText from '@components/common/GradientText/GradientText'
import { BRIEF_SECTIONS, BRIEF_STATS } from '@constants/briefing'
import styles from './FeaturesBriefing.module.scss'

export default function FeaturesBriefing() {
  return (
    <section className={styles.section}>
      <div className={styles.inner}>
        <div className={styles.content}>
          <motion.div
            className={styles.left}
            initial={{ opacity: 0, x: -32 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className={styles.briefCard}>
              <div className={styles.briefHeader}>
                <div className={styles.patientAvatar}>SR</div>
                <div>
                  <div className={styles.patientName}>Suresh Ramachandran, 58M</div>
                  <div className={styles.apptTime}>⏰ 10:30 AM · Room 3</div>
                </div>
                <span className={styles.briefBadge}>Pre-visit Brief Ready</span>
              </div>
              <div className={styles.briefBody}>
                {BRIEF_SECTIONS.map((s) => (
                  <div key={s.label} className={styles.briefRow}>
                    <span className={styles.briefLabel}>{s.label}</span>
                    <p className={styles.briefValue}>{s.value}</p>
                  </div>
                ))}
              </div>
              <div className={styles.briefFooter}>
                <div className={styles.readyPill}>
                  <span className={styles.readyDot} />
                  Doctor enters in 4 min
                </div>
                <button className={styles.viewBtn}>View Full History →</button>
              </div>
            </div>
          </motion.div>

          <motion.div
            className={styles.right}
            initial={{ opacity: 0, x: 32 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            viewport={{ once: true }}
          >
            <SectionLabel text="Pre-visit Brief · P0" color="purple" />
            <h2 className={styles.heading}>
              Know your patient<br />
              <GradientText variant="purple">before they sit down.</GradientText>
            </h2>
            <p className={styles.sub}>
              60 seconds before each appointment, Elth AI surfaces a structured brief — chief complaint, history, last labs, risk flags — so doctors can walk in prepared, not playing catch-up.
            </p>
            <div className={styles.stats}>
              {BRIEF_STATS.map((s) => (
                <div key={s.label} className={styles.stat}>
                  <span className={styles.statNum}>{s.num}</span>
                  <span className={styles.statLabel}>{s.label}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
