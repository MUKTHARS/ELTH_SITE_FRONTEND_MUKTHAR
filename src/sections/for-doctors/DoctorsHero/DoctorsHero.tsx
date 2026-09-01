'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'
import { Button } from '@components/ui/button'
import { IconCheck, IconFileText, IconMic } from '@icons/index'
import { ROUTES } from '@constants/routes'
import { DOCTORS_HERO_PROOF } from '@constants/heroes'
import styles from './DoctorsHero.module.scss'

export default function DoctorsHero() {
  return (
    <section className={styles.section}>
      <div className={styles.bg}>
        <Image src="/images/topbanners/for-doctors.webp" alt="" fill priority sizes="100vw" className={styles.bgImage} />
        <div className={styles.scrim} />
      </div>
      <div className={styles.inner}>
        <motion.div
          className={styles.content}
          initial={{ opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <span className={styles.badge}>For Doctors</span>
          <h1 className={styles.heading}>
            More time for the patient.<br />
            Less time at the screen.
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
            {DOCTORS_HERO_PROOF.map((item) => (
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
          <div className={styles.visualImage}>
            <Image
              src="/images/doctorctc.avif"
              alt="Doctor preparing for a patient consultation"
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 48vw"
            />
          </div>
          <div className={styles.workspace}>
            <div className={styles.workspaceTop}>
              <span className={styles.workspaceTitle}>Consultation note</span>
              <span className={styles.liveBadge}><i /> Live transcription</span>
            </div>
            <div className={styles.workspaceBody}>
              <div className={styles.recording}>
                <span className={styles.micIcon}><IconMic size={17} /></span>
                <div><strong>Listening</strong><span>00:42</span></div>
                <div className={styles.wave}>{Array.from({ length: 18 }).map((_, i) => <i key={i} />)}</div>
              </div>
              <div className={styles.noteBlock}>
                <span>Chief complaint</span>
                <strong>Knee pain after climbing stairs</strong>
              </div>
              <div className={styles.noteBlock}>
                <span>Assessment</span>
                <strong>Early osteoarthritis — left knee</strong>
              </div>
              <div className={styles.workspaceFooter}>
                <span><IconFileText size={14} /> SOAP note ready</span>
                <span className={styles.ready}><IconCheck size={13} /> Review</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
