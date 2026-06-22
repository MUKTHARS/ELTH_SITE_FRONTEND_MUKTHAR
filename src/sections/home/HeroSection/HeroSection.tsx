'use client'

import Link               from 'next/link'
import { motion }         from 'framer-motion'
import { Button }         from '@components/ui/button'
import { Badge }          from '@components/ui/badge'
import { IconArrowRight } from '@icons/index'
import { ROUTES }         from '@constants/routes'
import styles             from './HeroSection.module.scss'

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
            <Badge variant="dark" className={styles.pill}>
              Built on Saple.ai · AI-Native Healthcare Platform
            </Badge>
          </motion.div>

          <motion.h1 className={styles.heading} variants={fadeUp}>
            The AI that <br />
            <span className={styles.accent}>runs your clinic.</span>
          </motion.h1>

          <motion.p className={styles.sub} variants={fadeUp}>
            Elth AI gives hospitals and clinics white-label AI infrastructure.
            Your brand. Your patients. Powered by the smartest clinical AI in India.
          </motion.p>

          <motion.div className={styles.actions} variants={fadeUp}>
            <Button asChild size="xl">
              <Link href={ROUTES.CONTACT}>Request a Demo <IconArrowRight size={18} /></Link>
            </Button>
            <Button asChild variant="dark" size="xl">
              <Link href={ROUTES.FOR_DOCTORS}>See how it works</Link>
            </Button>
          </motion.div>

          <motion.div className={styles.trustLine} variants={fadeUp}>
            <span className={styles.trustText}>Trusted by</span>
            {['Apollo', 'Medanta', 'Varsha Health', 'Sri Kumaran'].map(name => (
              <span key={name} className={styles.trustName}>{name}</span>
            ))}
          </motion.div>
        </motion.div>

        <motion.div
          className={styles.visual}
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className={styles.card}>
            <div className={styles.cardHeader}>
              <div className={styles.avatar} style={{ background: '#EEEDFE', color: '#26215C' }}>PR</div>
              <div>
                <div className={styles.cardName}>Dr. Priya Ramachandran</div>
                <div className={styles.cardRole}>Endocrinologist · Varsha Health Care</div>
              </div>
            </div>
            <div className={styles.cardBody}>
              <div className={styles.noteLabel}>AI-generated SOAP Note</div>
              <div className={styles.noteLine}><span className={styles.noteKey}>S:</span> Patient reports fatigue, increased thirst for 3 weeks</div>
              <div className={styles.noteLine}><span className={styles.noteKey}>O:</span> HbA1c 8.2% · FBS 186 mg/dL · Weight 72kg</div>
              <div className={styles.noteLine}><span className={styles.noteKey}>A:</span> Uncontrolled Type 2 Diabetes Mellitus (E11.9)</div>
              <div className={styles.noteLine}><span className={styles.noteKey}>P:</span> Increase Metformin to 1g BD · Repeat HbA1c in 3 months</div>
            </div>
            <div className={styles.cardFooter}>
              <span className={styles.timeSave}>⏱ Generated in 14 seconds · Saved 12 min</span>
            </div>
          </div>

          <div className={styles.floatCard1}>
            <span className={styles.floatIcon}>🔴</span>
            <div>
              <div className={styles.floatTitle}>Critical Alert</div>
              <div className={styles.floatSub}>Vitamin D: 3.31 ng/mL</div>
            </div>
          </div>

          <div className={styles.floatCard2}>
            <span className={styles.floatIcon}>✅</span>
            <div>
              <div className={styles.floatTitle}>No Drug Interactions</div>
              <div className={styles.floatSub}>Prescription is safe</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
