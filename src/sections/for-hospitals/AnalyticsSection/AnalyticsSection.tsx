'use client'

import { motion } from 'framer-motion'
import SectionLabel from '@components/common/SectionLabel/SectionLabel'
import styles from './AnalyticsSection.module.scss'

const METRICS = [
  { label: 'OPD Footfall', value: '1,247', change: '+12%', positive: true },
  { label: 'No-show Rate', value: '8.3%', change: '-34%', positive: true },
  { label: 'Avg. Wait Time', value: '14 min', change: '-22%', positive: true },
  { label: 'AI Consultations', value: '3,891', change: '+67%', positive: true },
]

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
            <h2 className={styles.heading}>Hospital intelligence, not just data</h2>
            <p className={styles.sub}>
              Real-time dashboards that actually tell you what&apos;s happening — OPD footfall, doctor utilization, no-show prediction, and AI adoption across your facility.
            </p>
            <ul className={styles.bullets}>
              {[
                'Real-time OPD and IPD dashboards',
                'No-show prediction 24h in advance',
                'Doctor-level productivity metrics',
                'AI feature adoption tracking',
                'Monthly executive summary PDF',
              ].map((b) => (
                <li key={b} className={styles.bullet}>
                  <span className={styles.bulletCheck}>✓</span>
                  {b}
                </li>
              ))}
            </ul>
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
                {METRICS.map((m) => (
                  <div key={m.label} className={styles.metric}>
                    <span className={styles.metricLabel}>{m.label}</span>
                    <span className={styles.metricValue}>{m.value}</span>
                    <span className={styles.metricChange} data-positive={m.positive}>{m.change} MoM</span>
                  </div>
                ))}
              </div>
              <div className={styles.chartPlaceholder}>
                <div className={styles.chartBars}>
                  {[40, 65, 52, 80, 70, 90, 75].map((h, i) => (
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
