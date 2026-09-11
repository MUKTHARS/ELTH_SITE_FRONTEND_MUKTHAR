'use client'

import { useState }       from 'react'
import Image              from 'next/image'
import Link               from 'next/link'
import { motion }         from 'framer-motion'
import { Badge }          from '@components/ui/badge'
import { IconArrowRight } from '@icons/index'
import { ROUTES }         from '@constants/routes'
import styles             from './HeroSection.module.scss'

const WAVEFORM_BARS = [18, 34, 24, 46, 30, 52, 26, 40, 20, 34, 16]

// Fully filled (solid) icon variants for the capability stack — kept local
// to this section so the shared line-icon set used elsewhere is untouched.
function IconMicFilled({ size = 24 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 15.75a3.75 3.75 0 003.75-3.75V6a3.75 3.75 0 10-7.5 0v6a3.75 3.75 0 003.75 3.75z" />
      <path d="M6 12a.75.75 0 01.75.75 5.25 5.25 0 0010.5 0 .75.75 0 011.5 0 6.751 6.751 0 01-6 6.709v2.291h3a.75.75 0 010 1.5h-7.5a.75.75 0 010-1.5h3v-2.291a6.751 6.751 0 01-6-6.709A.75.75 0 016 12z" />
    </svg>
  )
}

function IconFileTextFilled({ size = 24 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M6 2c-1.1 0-1.99.9-1.99 2L4 20c0 1.1.89 2 1.99 2H18c1.1 0 2-.9 2-2V8l-6-6H6zm7 7V3.5L18.5 9H13zM8 12h8v2H8v-2zm0 4h8v2H8v-2zm0-8h5v2H8V8z" />
    </svg>
  )
}

function IconShieldFilled({ size = 24 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path fillRule="evenodd" clipRule="evenodd" d="M12.516 2.17a.75.75 0 00-1.032 0 11.209 11.209 0 01-7.877 3.08.75.75 0 00-.722.515A12.74 12.74 0 002.25 9.75c0 5.942 4.064 10.933 9.563 12.348a.749.749 0 00.374 0c5.499-1.415 9.563-6.406 9.563-12.348 0-1.39-.223-2.73-.635-3.985a.75.75 0 00-.722-.516l-.143.001c-2.996 0-5.717-1.17-7.734-3.08zm3.094 8.016a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z" />
    </svg>
  )
}

const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  show:   { opacity: 1, y: 0,  transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] } },
}

const stagger = { hidden: {}, show: { transition: { staggerChildren: 0.12 } } }

const CAPABILITIES = [
  {
    id: 'scribe',
    icon: IconMicFilled,
    image: '/images/topbanners/soap_notes.jpg',
    title: 'Voice → SOAP note',
    meta: '00:11 captured',
    detail: 'Structured into Subjective, Objective, Assessment & Plan — instantly, with ICD-10 codes attached.',
  },
  {
    id: 'brief',
    icon: IconFileTextFilled,
    image: '/images/topbanners/pre-visit.png',
    title: 'Pre-visit AI brief',
    meta: 'Ready 10 min early',
    detail: 'Relevant history, last visit notes and open flags, summarized before the doctor walks in.',
  },
  {
    id: 'safety',
    icon: IconShieldFilled,
    image: '/images/topbanners/drug.webp',
    title: 'Drug safety check',
    meta: 'Live screening',
    detail: 'Every prescription cross-checked against the patient’s active medications and allergies in real time.',
  },
] as const

export default function HeroSection() {
  const [activeId, setActiveId] = useState<string>(CAPABILITIES[0].id)

  return (
    <section className={styles.section}>
      <div className={styles.inner}>
        <motion.div className={styles.content} variants={stagger} initial="hidden" animate="show">
          <motion.div variants={fadeUp}>
            {/* <Badge variant="teal" className={styles.pill}>
              AI-POWERED CARE, FROM CONSULTATION TO CONTINUITY
            </Badge> */}
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

          {/* <motion.div className={styles.trustLine} variants={fadeUp}>
            <span className={styles.trustText}>Trusted by forward-thinking hospitals and clinics</span>
          </motion.div> */}

          {/* <motion.div className={styles.badges} variants={fadeUp}>
            {COMPLIANCE_BADGES.map(b => (
              <span key={b.label} className={styles.badgeItem}>
                <span className={styles.badgeIcon}><b.icon size={18} /></span>
                <span>
                  <span className={styles.badgeLabel}>{b.label}</span>
                  <span className={styles.badgeSub}>{b.sub}</span>
                </span>
              </span>
            ))}
          </motion.div> */}
        </motion.div>

        <motion.div
          className={styles.visual}
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className={styles.stage}>
            <span className={styles.stageKicker}>What Elth is doing right now</span>

            <div className={styles.capStack}>
              {CAPABILITIES.map((cap) => {
                const Icon = cap.icon
                const isActive = cap.id === activeId
                return (
                  <div
                    key={cap.id}
                    className={`${styles.capCard} ${isActive ? styles.capCardActive : ''}`}
                    onMouseEnter={() => setActiveId(cap.id)}
                    onFocus={() => setActiveId(cap.id)}
                    tabIndex={0}
                  >
                    <div className={styles.capHead}>
                      <span className={styles.capIcon}><Icon size={18} /></span>
                      <span className={styles.capHeadText}>
                        <span className={styles.capTitle}>{cap.title}</span>
                        <span className={styles.capMeta}>{cap.meta}</span>
                      </span>
                      {/* <span className={styles.capLive} aria-hidden="true">Live</span> */}
                    </div>

                    <div className={styles.capDetailWrap}>
                      <div className={styles.capDetail}>
                        <div className={styles.capDetailRow}>
                          {/* <Image
                            src={cap.image}
                            alt=""
                            width={72}
                            height={72}
                            className={styles.capImage}
                          /> */}
                          <div className={styles.capDetailText}>
                            <p>{cap.detail}</p>

                            {cap.id === 'scribe' && (
                              <div className={styles.waveform} aria-hidden="true">
                                {WAVEFORM_BARS.map((h, wi) => (
                                  <i
                                    key={wi}
                                    style={{
                                      // eslint-disable-next-line @typescript-eslint/no-explicit-any
                                      ['--bar-height' as any]: `${h}px`,
                                      // eslint-disable-next-line @typescript-eslint/no-explicit-any
                                      ['--bar-delay' as any]: `${wi * 0.1}s`,
                                    }}
                                  />
                                ))}
                              </div>
                            )}

                            
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
