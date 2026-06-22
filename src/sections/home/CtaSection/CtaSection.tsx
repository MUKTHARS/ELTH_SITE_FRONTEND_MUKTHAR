'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { Button } from '@components/ui/button'
import { ROUTES } from '@constants/routes'
import styles from './CtaSection.module.scss'

export default function CtaSection() {
  return (
    <section className={styles.section}>
      <div className={styles.inner}>
        <motion.div
          className={styles.card}
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className={styles.blobs}>
            <div className={styles.blob1} />
            <div className={styles.blob2} />
          </div>

          <div className={styles.content}>
            <span className={styles.eyebrow}>Ready to transform your hospital?</span>
            <h2 className={styles.heading}>
              Deploy Elth AI in your hospital.<br />Go live in 48 hours.
            </h2>
            <p className={styles.sub}>
              Join 33,000+ clinics already using Elth AI. No lock-in. No hidden fees. Cancel any time.
            </p>

            <div className={styles.actions}>
              <Button asChild variant="default" size="lg">
                <Link href={ROUTES.CONTACT}>Request a Demo</Link>
              </Button>
              <Button asChild variant="outline" size="lg" className={styles.outlineBtn}>
                <Link href={ROUTES.PRICING}>View Pricing</Link>
              </Button>
            </div>

            <div className={styles.trust}>
              {['Free 14-day trial', 'No credit card needed', 'DPDPA compliant'].map((t) => (
                <span key={t} className={styles.trustItem}>
                  <span className={styles.trustCheck}>✓</span>
                  {t}
                </span>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
