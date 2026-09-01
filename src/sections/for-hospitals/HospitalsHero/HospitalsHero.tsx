'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'
import { Button } from '@components/ui/button'
import { ROUTES } from '@constants/routes'
import { HOSPITALS_HERO_PROOF } from '@constants/heroes'
import styles from './HospitalsHero.module.scss'

export default function HospitalsHero() {
  return (
    <section className={styles.section}>
      <div className={styles.bg}>
        <Image src="/images/topbanners/for-hospitals.jpg" alt="" fill priority sizes="100vw" className={styles.bgImage} />
        <div className={styles.scrim} />
      </div>
      <div className={styles.inner}>
        <motion.div
          className={styles.content}
          initial={{ opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <span className={styles.badge}>For Hospitals</span>
          <h1 className={styles.heading}>
            One connected experience.<br />
            From arrival to follow-up.
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
            {HOSPITALS_HERO_PROOF.map((item) => (
              <span key={item}>{item}</span>
            ))}
          </div>
        </motion.div>
        <motion.div
          className={styles.visual}
          initial={{ opacity: 0, x: 28 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.65, delay: 0.15 }}
        >
          <div className={styles.imageWrap}>
            <Image src="/images/clinic.avif" alt="A welcoming hospital care environment" fill priority sizes="(max-width: 1024px) 100vw, 48vw" />
          </div>
          <div className={styles.statusCard}>
            <span className={styles.statusEyebrow}>Today, at a glance</span>
            <strong>Care is moving smoothly.</strong>
            <div className={styles.statusRows}>
              <span><i /> Appointments on track</span>
              <span><i /> Follow-ups ready to send</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
