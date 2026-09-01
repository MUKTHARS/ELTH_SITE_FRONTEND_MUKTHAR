'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import SectionLabel from '@components/common/SectionLabel/SectionLabel'
import { Button } from '@components/ui/button'
import { PORTALS } from '@constants/portals'
import styles from './SolutionSection.module.scss'

import {
  IconUser,
  IconStethoscope,
  IconMic,
  IconFileText,
  IconCheck,
  IconSmartphone,
  IconBell,
  IconCalendar,
} from '@icons/index'

const JOURNEY = [
  { label: 'Patient arrives',    Icon: IconUser },
  { label: 'Consultation',       Icon: IconStethoscope },
  { label: 'AI Scribe',          Icon: IconMic },
  { label: 'Clinical Record',    Icon: IconFileText },
  { label: 'Doctor Approval',    Icon: IconCheck },
  { label: 'Patient App',        Icon: IconSmartphone },
  { label: 'Follow-up',          Icon: IconBell },
  { label: 'Next Consultation',  Icon: IconCalendar },
]

export default function SolutionSection() {
  return (
    <section className={styles.section}>
      <div className={styles.inner}>
        <div className={styles.header}>
          <SectionLabel text="The Solution" color="teal" />
          <h2 className={styles.heading}>One platform. Three portals. Every role served.</h2>
          <p className={styles.sub}>
            Elth AI is white-label infrastructure. Hospitals deploy it under their brand. Patients never see &ldquo;Elth&rdquo; — they see their hospital&apos;s AI.
          </p>
        </div>

        <p className={styles.journeyCaption}>One platform. One continuous patient journey.</p>

        <motion.div
          className={styles.journey}
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          {JOURNEY.map((step, i) => (
            <div className={styles.journeyStepWrap} key={step.label}>
              <div className={styles.journeyStep}>
                <div className={styles.journeyNode}>
                  <step.Icon size={32} color="#FFFFFF" strokeWidth={1.5} />
                </div>
                <span className={styles.journeyLabel}>{step.label}</span>
              </div>
              {i < JOURNEY.length - 1 && <span className={styles.journeyDot}>·</span>}
            </div>
          ))}
        </motion.div>

        <div className={styles.grid}>
          {PORTALS.map((p, i) => (
            <motion.div
              key={p.role}
              className={styles.card}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              viewport={{ once: true }}
            >
              <div className={styles.cardBg} />
              <div className={styles.cardHeader}>
                <h3 className={styles.cardTitle} style={{ color: p.color }}>{p.role}</h3>
                <Link href={p.href} className={styles.arrowIcon}>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
                </Link>
              </div>
              <p className={styles.cardDesc}>{p.desc}</p>
              
              <div className={styles.cardBottom}>
                <div className={styles.illustrationWrap}>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={p.img} alt={p.role} className={styles.cardIllustration} />
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className={styles.analogy}>
          <span className={styles.analogyLabel}>Think of us like</span>
          <p className={styles.analogyText}>
            <strong>Shopify for hospitals</strong> — not Apollo 247 or Practo. We don&apos;t run a marketplace.
            We give hospitals the tools to care for their own patients, with AI, under their own brand.
          </p>
        </div>
      </div>
    </section>
  )
}
