'use client'

import { motion } from 'framer-motion'
import styles from './PricingHero.module.scss'

export default function PricingHero() {
  return (
    <section className={styles.section}>
      <div className={styles.inner}>
        <motion.div
          className={styles.content}
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className={styles.heading}>Simple, transparent pricing</h1>
          <p className={styles.sub}>
            No per-feature paywalls. No surprise invoices. Pick the plan that fits your hospital size — and get every feature in that plan.
          </p>
          <div className={styles.note}>
            <span>🇮🇳 Prices in INR + GST · </span>
            <span>Free 14-day trial · </span>
            <span>Cancel any time</span>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
