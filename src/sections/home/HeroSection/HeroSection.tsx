'use client'

import { useRef }         from 'react'
import Link               from 'next/link'
import { motion }         from 'framer-motion'
import { Badge }          from '@components/ui/badge'
import { IconArrowRight, IconShield, IconLock, IconFileText, IconGlobe } from '@icons/index'
import { ROUTES }         from '@constants/routes'
import styles             from './HeroSection.module.scss'

const WAVEFORM_BARS = [18, 34, 24, 46, 30, 52, 26, 40, 20, 34, 16]

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
  const sceneRef = useRef<HTMLDivElement>(null)
  const panelRef = useRef<HTMLDivElement>(null)

  function handleStageMouseMove(e: React.MouseEvent<HTMLDivElement>) {
    const r = e.currentTarget.getBoundingClientRect()
    const px = (e.clientX - r.left) / r.width - 0.5
    const py = (e.clientY - r.top) / r.height - 0.5
    if (sceneRef.current) {
      sceneRef.current.style.transform = `rotateX(${4 - py * 10}deg) rotateY(${-8 + px * 16}deg)`
    }
    if (panelRef.current) {
      panelRef.current.style.transform = `translate(-50%, -50%) translateZ(100px) rotateX(${3 - py * 5}deg) rotateY(${-6 + px * 12}deg)`
    }
  }

  function handleStageMouseLeave() {
    if (sceneRef.current) sceneRef.current.style.transform = 'rotateX(4deg) rotateY(-8deg)'
    if (panelRef.current) panelRef.current.style.transform = 'translate(-50%, -50%) translateZ(100px) rotateX(3deg) rotateY(-6deg)'
  }

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
          <div className={styles.stage} onMouseMove={handleStageMouseMove} onMouseLeave={handleStageMouseLeave}>
            <div className={styles.medScene} ref={sceneRef}>
              <div className={styles.medGlow} />

              <div className={styles.medParticles}>
                {Array.from({ length: 6 }).map((_, i) => (
                  <span key={i} className={styles.medParticle} data-particle={i} />
                ))}
              </div>

              <div className={styles.medical3d} ref={panelRef}>
                <div className={styles.listenPanel}>
                  <div className={styles.listenTop}>
                    <span className={styles.listenKicker}>Clinical companion</span>
                    <span className={styles.listenStatus}>Listening</span>
                  </div>

                  <div className={styles.listenCopy}>
                    <strong>Turning the conversation into care.</strong>
                    <p>Capturing the patient&apos;s story and preparing a clear brief for the clinician.</p>
                  </div>

                  <div className={styles.waveform} aria-hidden="true">
                    {WAVEFORM_BARS.map((h, i) => (
                      <i
                        key={i}
                        style={{
                          // eslint-disable-next-line @typescript-eslint/no-explicit-any
                          ['--bar-height' as any]: `${h}px`,
                          // eslint-disable-next-line @typescript-eslint/no-explicit-any
                          ['--bar-delay' as any]: `${i * 0.1}s`,
                        }}
                      />
                    ))}
                  </div>

                  <div className={styles.listenFoot}>
                    <span><b>EN</b> · consent verified</span>
                    <span>00:42</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
