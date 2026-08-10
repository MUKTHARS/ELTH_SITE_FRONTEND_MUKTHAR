'use client'

import { motion } from 'framer-motion'
import SectionLabel from '@components/common/SectionLabel/SectionLabel'
import { IconFileText, IconBrain, IconUsers, IconShield, IconCalendar, IconPill, IconClock } from '@icons/index'
import styles from './PatientAppSection.module.scss'

const STATS = [
  { icon: IconCalendar, n: '12', label: 'Visits' },
  { icon: IconFileText, n: '26', label: 'Reports' },
  { icon: IconPill,     n: '14', label: 'Prescriptions' },
]

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

        {/* ── Part 1: phone + text + photo, side by side ───────────────── */}
        <div className={styles.rowOne}>
          <motion.div
            className={styles.phoneCol}
            initial={{ opacity: 0, x: -32 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className={styles.phoneShell}>
              <span className={styles.phoneNotch} />
              <div className={styles.phoneStatusBar}>
                <span>9:41</span>
                <span className={styles.statusIcons}>
                  <span /><span /><span />
                </span>
              </div>

              <div className={styles.phoneScreen}>
                <div className={styles.phoneTopBar}>
                  <span className={styles.navArrow}>‹</span>
                  <span className={styles.phoneTopTitle}>MyElth</span>
                  <IconClock size={14} />
                </div>
                <div className={styles.phoneGreeting}>Hello, Ramesh</div>
                <div className={styles.phoneSub}>Your health, in your hands</div>

                <div className={styles.phoneSectionLabel}>Health Summary</div>
                <div className={styles.phoneStats}>
                  {STATS.map(s => (
                    <div key={s.label} className={styles.phoneStat}>
                      <span className={styles.phoneStatIcon}><s.icon size={12} /></span>
                      <div className={styles.phoneStatNum}>{s.n}</div>
                      <div className={styles.phoneStatLabel}>{s.label}</div>
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

              <span className={styles.phoneHomeBar} />
            </div>
          </motion.div>

          <motion.div
            className={styles.middleCol}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <SectionLabel text="MyElth" color="teal" />
            <h2 className={styles.heading}>The patient&apos;s health record. For life.</h2>
            <p className={styles.sub}>
              MyElth gives every patient one place for their health records — regardless of which hospital or clinic they visit.
            </p>
            <span className={styles.underline} />
          </motion.div>

          <motion.div
            className={styles.pointsGrid}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            viewport={{ once: true }}
          >
            {POINTS.map(pt => (
              <div key={pt.title} className={styles.pointTile}>
                <span className={styles.pointIcon}><pt.icon size={16} /></span>
                <div>
                  <strong className={styles.pointTitle}>{pt.title}</strong>
                  <p className={styles.pointDesc}>{pt.desc}</p>
                </div>
              </div>
            ))}
          </motion.div>

          <motion.div
            className={styles.photoCol}
            initial={{ opacity: 0, x: 32 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className={styles.photoFrame}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/images/regenerated.png" alt="Patient using the MyElth app — free for patients, always" className={styles.photoImg} />
            </div>
          </motion.div>
        </div>

      </div>
    </section>
  )
}
