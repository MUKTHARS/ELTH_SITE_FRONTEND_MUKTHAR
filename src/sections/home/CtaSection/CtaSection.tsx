'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { Button } from '@components/ui/button'
import { IconCheck } from '@icons/index'
import { ROUTES } from '@constants/routes'
import styles from './CtaSection.module.scss'

function DoctorIllustration() {
  return (
    <svg viewBox="0 0 160 160" fill="none" xmlns="http://www.w3.org/2000/svg" className={styles.illustration}>
      <circle cx="80" cy="60" r="30" stroke="#fff" strokeOpacity="0.9" strokeWidth="2.5" />
      <path d="M28 148c0-30 23-48 52-48s52 18 52 48" stroke="#fff" strokeOpacity="0.9" strokeWidth="2.5" strokeLinecap="round" />
      <path d="M62 92v10a18 18 0 0 0 36 0V92" stroke="#fff" strokeOpacity="0.6" strokeWidth="2.5" strokeLinecap="round" />
      <circle cx="118" cy="118" r="14" fill="#0A1628" stroke="#38bdf8" strokeWidth="2.5" />
      <path d="M118 112v12M112 118h12" stroke="#38bdf8" strokeWidth="2" strokeLinecap="round" />
    </svg>
  )
}

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
              Give your doctors<br />their time back.
            </h2>
            <p className={styles.sub}>
              See how Elth AI can transform your consultation workflow and keep your patients connected beyond the clinic.
            </p>

            <div className={styles.actions}>
              <Button asChild variant="default" size="lg">
                <Link href={ROUTES.CONTACT}>Book a Demo</Link>
              </Button>
              <Button asChild variant="outline" size="lg" className={styles.outlineBtn}>
                <Link href={ROUTES.CONTACT}>Talk to Elth</Link>
              </Button>
            </div>

            <div className={styles.trust}>
              {['Free 14-day trial', 'No credit card needed', 'DPDPA compliant'].map((t) => (
                <span key={t} className={styles.trustItem}>
                  <IconCheck size={14} className={styles.trustCheck} />
                  {t}
                </span>
              ))}
            </div>
          </div>

          <div className={styles.graphic}>
            <div className={styles.graphicRing} />
            <div className={styles.graphicAvatar}><DoctorIllustration /></div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
