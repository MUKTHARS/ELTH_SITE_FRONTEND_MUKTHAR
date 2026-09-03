'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'
import { Button } from '@components/ui/button'
import { ROUTES } from '@constants/routes'
import { PATIENTS_HERO_PROOF } from '@constants/heroes'
import styles from './PatientsHero.module.scss'

export default function PatientsHero() {
  return (
    <section className={styles.section}>
      <div className={styles.bg}>
        <Image src="/images/topbanners/for-patients.jpg" alt="" fill priority sizes="100vw" className={styles.bgImage} />
        <div className={styles.scrim} />
      </div>
      <div className={styles.inner}>
        <motion.div
          className={styles.content}
          initial={{ opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <span className={styles.badge}>For Patients</span>
          <h1 className={styles.heading}>
            Clearer answers.<br />
            Calmer next steps.
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
            {PATIENTS_HERO_PROOF.map((item) => (
              <span key={item.label}><item.icon size={13} strokeWidth={1.75} /> {item.label}</span>
            ))}
          </div>
        </motion.div>
        <motion.div className={styles.visual} initial={{ opacity: 0, x: 28 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.65, delay: 0.15 }}>
          <div className={styles.imageWrap}>
            <Image src="/images/topcontent/for-patients.avif" alt="A patient receiving thoughtful care" fill priority sizes="(max-width: 1024px) 100vw, 48vw" />
          </div>
          <div className={styles.helpCard}>
            <span>Care, in your language</span>
            <strong>Understand what comes next.</strong>
            <p>Questions, reports, reminders and follow-ups—kept simple.</p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
