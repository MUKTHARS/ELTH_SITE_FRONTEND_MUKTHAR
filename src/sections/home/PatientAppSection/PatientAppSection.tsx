'use client'

import { motion } from 'framer-motion'
import SectionLabel from '@components/common/SectionLabel/SectionLabel'
import MockupFrame from '@components/common/MockupFrame/MockupFrame'
import { IconFileText, IconBrain, IconUsers, IconShield } from '@icons/index'
import styles from './PatientAppSection.module.scss'

function PatientIllustration() {
  return (
    <svg viewBox="0 0 160 200" fill="none" xmlns="http://www.w3.org/2000/svg" className={styles.illustration}>
      <path d="M80 8c-33 0-60 27-60 60v60c0 35 27 64 60 64s60-29 60-64V68c0-33-27-60-60-60Z" fill="url(#patientGrad)" opacity="0.16" />
      <circle cx="80" cy="72" r="26" stroke="#26215C" strokeWidth="2.5" />
      <path d="M34 176c0-26 20-42 46-42s46 16 46 42" stroke="#26215C" strokeWidth="2.5" strokeLinecap="round" />
      <rect x="98" y="118" width="30" height="48" rx="6" fill="#fff" stroke="#085041" strokeWidth="2.5" />
      <line x1="108" y1="156" x2="118" y2="156" stroke="#085041" strokeWidth="2.5" strokeLinecap="round" />
      <defs>
        <linearGradient id="patientGrad" x1="20" y1="8" x2="140" y2="192" gradientUnits="userSpaceOnUse">
          <stop stopColor="#26215C" />
          <stop offset="1" stopColor="#085041" />
        </linearGradient>
      </defs>
    </svg>
  )
}

const POINTS = [
  { icon: IconFileText, title: 'Everything in one place', desc: 'Reports, prescriptions, scans and visit records.' },
  { icon: IconBrain,    title: 'Understand your health', desc: 'See trends and understand reports in plain language.' },
  { icon: IconUsers,    title: 'Your records. Your choice.', desc: 'Share with doctors using patient-controlled consent.' },
  { icon: IconShield,   title: 'Connected to your care', desc: 'Receive prescriptions and follow-up information from connected hospitals.' },
]

export default function PatientAppSection() {
  return (
    <section className={styles.section}>
      <div className={styles.inner}>
        <motion.div
          className={styles.phoneCol}
          initial={{ opacity: 0, x: -32 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <MockupFrame type="phone" className={styles.phone}>
            <div className={styles.phoneScreen}>
              <div className={styles.phoneTopBar}>
                <span>‹</span>
                <span className={styles.phoneTopTitle}>MyElth</span>
                <span>⋯</span>
              </div>
              <div className={styles.phoneGreeting}>Hello, Ramesh</div>
              <div className={styles.phoneSub}>Your health, in your hands</div>
              <div className={styles.phoneStats}>
                {[['12', 'Visits'], ['26', 'Reports'], ['14', 'Prescriptions']].map(([n, l]) => (
                  <div key={l} className={styles.phoneStat}>
                    <div className={styles.phoneStatNum}>{n}</div>
                    <div className={styles.phoneStatLabel}>{l}</div>
                  </div>
                ))}
              </div>
              <div className={styles.phoneListLabel}>Recent Records</div>
              <div className={styles.phoneListItem}>
                <span className={styles.phoneListDot} />
                <div>
                  <div className={styles.phoneListTitle}>Knee X-Ray Report</div>
                  <div className={styles.phoneListDate}>05 Aug 2026</div>
                </div>
                <span className={styles.phoneListBadge}>New</span>
              </div>
            </div>
          </MockupFrame>
        </motion.div>

        <motion.div
          className={styles.middleCol}
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true }}
        >
          <div className={styles.textBlock}>
            <SectionLabel text="MyElth" color="teal" />
            <h2 className={styles.heading}>The patient&apos;s health record. For life.</h2>
            <p className={styles.sub}>
              MyElth gives every patient one place for their health records — regardless of which hospital or clinic they visit.
            </p>
          </div>

          <div className={styles.pointsGrid}>
            {POINTS.map(pt => (
              <div key={pt.title} className={styles.pointTile}>
                <span className={styles.pointIcon}><pt.icon size={16} /></span>
                <div>
                  <strong className={styles.pointTitle}>{pt.title}</strong>
                  <p className={styles.pointDesc}>{pt.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          className={styles.photoCol}
          initial={{ opacity: 0, x: 32 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <div className={styles.photoPlaceholder}>
            <PatientIllustration />
          </div>
          <div className={styles.freeBadge}>Free for<br />patients.<br />Always.</div>
        </motion.div>
      </div>
    </section>
  )
}
