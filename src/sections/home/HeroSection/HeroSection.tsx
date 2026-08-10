'use client'

import Link               from 'next/link'
import { motion }         from 'framer-motion'
import { Badge }          from '@components/ui/badge'
import { IconArrowRight, IconMic, IconCheck, IconFileText, IconShield, IconLock, IconGlobe, IconClock, IconEdit } from '@icons/index'
import { ROUTES }         from '@constants/routes'
import styles             from './HeroSection.module.scss'

interface NoteField {
  label: string
  value: string
  highlight?: boolean
}

const NOTE_FIELDS: NoteField[] = [
  { label: 'Complaints',     value: 'Left knee pain for the past two weeks. Pain increases on walking and while climbing stairs.' },
  { label: 'Examination',    value: 'Swelling present. Tenderness over medial joint line. Range of motion painful beyond 90 degrees.' },
  { label: 'Investigation',  value: 'X-ray shows early degenerative changes.' },
  { label: 'Diagnosis',      value: 'Early osteoarthritis of left knee.', highlight: true },
  { label: 'Treatment Plan', value: 'Physiotherapy, weight reduction, knee strengthening exercises. Follow up after 2 weeks.' },
  { label: 'Medication',     value: 'Ecosprin 75 mg OD after food · Pantop 40 mg OD · Zerodol-P SOS' },
]

const TIMELINE = [
  { date: '05 Aug 2026', label: 'OPD Consultation',      active: true },
  { date: '12 Jun 2026',  label: 'Follow-up Visit' },
  { date: '02 May 2026',  label: 'Physiotherapy Session' },
  { date: '15 Mar 2026',  label: 'X-Ray — Left Knee' },
  { date: '28 Jan 2026',  label: 'OPD Consultation' },
]

const TABS = ['Consult', 'History', 'Records', 'Prescriptions', 'Reports', 'Timeline']

const COMPLIANCE_BADGES = [
  { icon: IconShield, label: 'NABH', sub: 'Compliant' },
  { icon: IconLock,   label: 'HIPAA', sub: 'Aligned' },
  { icon: IconFileText, label: 'ISO 27001', sub: 'Certified' },
  { icon: IconGlobe,  label: 'ABDM', sub: 'Ready' },
]

const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  show:   { opacity: 1, y: 0,  transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] } },
}

const stagger = { hidden: {}, show: { transition: { staggerChildren: 0.12 } } }

export default function HeroSection() {
  return (
    <section className={styles.section}>
      <div className={styles.bg}>
        <div className={styles.blob1} />
        <div className={styles.blob2} />
        <div className={styles.grid} />
      </div>

      <div className={styles.inner}>
        <motion.div className={styles.content} variants={stagger} initial="hidden" animate="show">
          <motion.div variants={fadeUp}>
            <Badge variant="purple" className={styles.pill}>
              AI-POWERED CARE, FROM CONSULTATION TO CONTINUITY
            </Badge>
          </motion.div>

          <motion.h1 className={styles.heading} variants={fadeUp}>
            Let doctors care. <br />
            <span className={styles.accent}>Let Elth remember.</span>
          </motion.h1>

          <motion.p className={styles.sub} variants={fadeUp}>
            AI-assisted documentation, connected patient records and follow-up care —
            all in one platform. Less typing. Less searching. More time with patients.
          </motion.p>

          <motion.div className={styles.actions} variants={fadeUp}>
            <Link href={ROUTES.CONTACT} className={styles.primaryBtn}>
              Book a Demo <IconArrowRight size={18} />
            </Link>
            <Link href={ROUTES.FOR_DOCTORS} className={styles.secondaryBtn}>
              See How It Works
            </Link>
          </motion.div>

          <motion.div className={styles.trustLine} variants={fadeUp}>
            <span className={styles.trustText}>Trusted by forward-thinking hospitals and clinics</span>
          </motion.div>

          <motion.div className={styles.badges} variants={fadeUp}>
            {COMPLIANCE_BADGES.map(b => (
              <span key={b.label} className={styles.badgeItem}>
                <span className={styles.badgeIcon}><b.icon size={18} /></span>
                <span>
                  <span className={styles.badgeLabel}>{b.label}</span>
                  <span className={styles.badgeSub}>{b.sub}</span>
                </span>
              </span>
            ))}
          </motion.div>
        </motion.div>

        <motion.div
          className={styles.visual}
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className={styles.dashCard}>
            <div className={styles.dashHeader}>
              <div className={styles.avatar} role="img" aria-label="Ramesh Gupta" />
              <div className={styles.patientMeta}>
                <div className={styles.cardName}>Ramesh Gupta</div>
                <div className={styles.cardRole}>45 Y · Male · MRN: OCMC-24581</div>
              </div>
              <div className={styles.vitals}>
                <div className={styles.vitalItem}><b>BP 128/82</b><span>mmHg</span></div>
                <div className={styles.vitalItem}><b>Pulse 96</b><span>bpm</span></div>
                <div className={styles.vitalItem}><b>Temp 100°C</b></div>
                <div className={styles.vitalItem}><b>SpO2 98%</b></div>
              </div>
              <span className={styles.moreDots}>•••</span>
            </div>

            <div className={styles.tabs}>
              {TABS.map((t, i) => (
                <span key={t} className={i === 0 ? styles.tabActive : styles.tab}>{t}</span>
              ))}
            </div>

            <div className={styles.dashBody}>
              <div className={styles.scribePanel}>
                <div className={styles.scribeHeader}>
                  <IconMic size={14} /> <span>AI Scribe</span>
                </div>
                <div className={styles.scribeStatus}>Recording...</div>
                <div className={styles.scribeTimer}><IconClock size={12} /> 01:38</div>
                <div className={styles.waveform}>
                  {Array.from({ length: 22 }).map((_, i) => (
                    <span key={i} style={{ height: `${6 + ((i * 37) % 18)}px` }} />
                  ))}
                </div>
                <button className={styles.stopBtn} aria-label="Stop recording"><span /></button>
              </div>

              <div className={styles.fieldsPanel}>
                {NOTE_FIELDS.map(f => (
                  <div className={styles.noteRow} key={f.label}>
                    <div>
                      <div className={f.highlight ? styles.noteLabelAccent : styles.noteLabel}>{f.label}</div>
                      <div className={styles.noteValue}>{f.value}</div>
                    </div>
                    <span className={styles.editTag}><IconEdit size={11} /> Edit</span>
                  </div>
                ))}
              </div>

              <div className={styles.timelinePanel}>
                <div className={styles.timelineTitle}>Patient Timeline</div>
                <ul className={styles.timelineList}>
                  {TIMELINE.map(t => (
                    <li key={t.date + t.label} className={styles.timelineItem}>
                      <span className={t.active ? styles.timelineDotActive : styles.timelineDot} />
                      <div className={t.active ? styles.timelineTextActive : undefined}>
                        <div className={t.active ? styles.timelineDateActive : styles.timelineDate}>{t.date}</div>
                        <div className={styles.timelineLabel}>{t.label}</div>
                      </div>
                    </li>
                  ))}
                </ul>
                <Link href={ROUTES.FOR_DOCTORS} className={styles.timelineLink}>View full timeline →</Link>
              </div>
            </div>

            <div className={styles.dashFooter}>
              <span className={styles.footerNote}><IconFileText size={14} /> Once approved, the report will be sent to the patient app (MyElth).</span>
              <span className={styles.footerActions}>
                <span className={styles.footerBtn}>Save Draft</span>
                <span className={styles.footerBtnPrimary}><IconCheck size={13} /> Review &amp; Approve</span>
              </span>
            </div>
          </div>

        </motion.div>
      </div>
    </section>
  )
}
