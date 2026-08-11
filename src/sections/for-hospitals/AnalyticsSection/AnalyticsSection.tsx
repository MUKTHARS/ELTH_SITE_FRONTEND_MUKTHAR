'use client'

import { motion } from 'framer-motion'
import SectionLabel from '@components/common/SectionLabel/SectionLabel'
import { ANALYTICS_METRICS, ANALYTICS_BULLETS, ANALYTICS_CHART_BARS } from '@constants/analytics'
import styles from './AnalyticsSection.module.scss'

export default function AnalyticsSection() {
  return (
    <section className={styles.section}>
      <div className={styles.inner}>
        <div className={styles.layout}>
          <motion.div
            className={styles.left}
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <SectionLabel text="Analytics" color="blue" />
            <h2 className={styles.heading}>A clear view of the day ahead</h2>
            <p className={styles.sub}>
              Real-time dashboards that actually tell you what&apos;s happening — OPD footfall, doctor utilization, no-show prediction, and AI adoption across your facility.
            </p>
            <ul className={styles.bullets}>
              {ANALYTICS_BULLETS.map((b) => (
                <li key={b} className={styles.bullet}>
                  <span className={styles.bulletCheck}>✓</span>
                  {b}
                </li>
              ))}
            </ul>
            <div className={styles.note}>
              <span>Built for the people making daily decisions</span>
              <p>Turn operational signals into a shared next step—not another report left unread.</p>
            </div>
          </motion.div>

          <motion.div
            className={styles.right}
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            viewport={{ once: true }}
          >
            <div className={styles.dashboard}>
              <div className={styles.dashHeader}>
                <span className={styles.dashTitle}>This Month — Apollo Clinic, Chennai</span>
                <span className={styles.dashDate}>Jun 2026</span>
              </div>
              <div className={styles.metricsGrid}>
                {ANALYTICS_METRICS.map((m) => (
                  <div key={m.label} className={styles.metric}>
                    <span className={styles.metricLabel}>{m.label}</span>
                    <span className={styles.metricValue}>{m.value}</span>
                    <span className={styles.metricChange} data-positive={m.positive}>{m.change} MoM</span>
                  </div>
                ))}
              </div>
              <div className={styles.chartPlaceholder}>
                <div className={styles.chartBars}>
                  {ANALYTICS_CHART_BARS.map((h, i) => (
                    <div key={i} className={styles.bar} style={{ height: `${h}%` }} />
                  ))}
                </div>
                <span className={styles.chartLabel}>OPD footfall — last 7 days</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
