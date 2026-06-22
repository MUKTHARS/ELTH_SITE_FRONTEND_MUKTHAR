'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { Button } from '@components/ui/button'
import GradientText from '@components/common/GradientText/GradientText'
import { ROUTES } from '@constants/routes'
import styles from './PatientsHero.module.scss'

export default function PatientsHero() {
  return (
    <section className={styles.section}>
      <div className={styles.inner}>
        <motion.div
          className={styles.content}
          initial={{ opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <span className={styles.badge}>For Patients</span>
          <h1 className={styles.heading}>
            Your health,<br />
            <GradientText variant="teal">explained.</GradientText>
          </h1>
          <p className={styles.sub}>
            Symptom checker, lab report interpreter, health concierge — all on WhatsApp, in your language, from your hospital&apos;s AI.
          </p>
          <div className={styles.actions}>
            <Button asChild size="lg">
              <Link href={ROUTES.CONTACT}>Talk to your hospital</Link>
            </Button>
          </div>
          <div className={styles.proof}>
            <span>🩺 Symptom Checker</span>
            <span>🔬 Lab Interpreter</span>
            <span>💬 Health Concierge</span>
            <span>📱 WhatsApp-first</span>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
