'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { Button } from '@components/ui/button'
import GradientText from '@components/common/GradientText/GradientText'
import { ROUTES } from '@constants/routes'
import styles from './DoctorsHero.module.scss'

export default function DoctorsHero() {
  return (
    <section className={styles.section}>
      <div className={styles.inner}>
        <motion.div
          className={styles.content}
          initial={{ opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <span className={styles.badge}>For Doctors</span>
          <h1 className={styles.heading}>
            Your AI colleague.<br />
            <GradientText variant="purple">Always prepared.</GradientText>
          </h1>
          <p className={styles.sub}>
            Elth AI handles documentation, pre-visit briefings, and drug safety checks — so you can focus on what only you can do: healing patients.
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
            <span>🎙️ AI Scribe</span>
            <span>📋 Pre-visit Brief</span>
            <span>💊 Drug Checker</span>
            <span>🧠 CDSS</span>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
