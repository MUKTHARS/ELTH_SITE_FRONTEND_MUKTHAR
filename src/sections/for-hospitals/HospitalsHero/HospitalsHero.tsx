'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { Button } from '@components/ui/button'
import GradientText from '@components/common/GradientText/GradientText'
import { ROUTES } from '@constants/routes'
import styles from './HospitalsHero.module.scss'

export default function HospitalsHero() {
  return (
    <section className={styles.section}>
      <div className={styles.inner}>
        <motion.div
          className={styles.content}
          initial={{ opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <span className={styles.badge}>For Hospitals</span>
          <h1 className={styles.heading}>
            Your hospital.<br />
            <GradientText variant="teal">Your AI.</GradientText>
          </h1>
          <p className={styles.sub}>
            Elth AI is white-label infrastructure. Deploy it under your brand in 48 hours. Your patients never see &ldquo;Elth&rdquo; — they see your hospital&apos;s AI.
          </p>
          <div className={styles.actions}>
            <Button asChild size="lg">
              <Link href={ROUTES.CONTACT}>Request Demo</Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link href={ROUTES.PRICING}>View Pricing</Link>
            </Button>
          </div>
          <div className={styles.proof}>
            <span>🏥 Admin Console</span>
            <span>📊 Analytics</span>
            <span>📱 Patient Communication</span>
            <span>🤖 AI Across Touchpoints</span>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
