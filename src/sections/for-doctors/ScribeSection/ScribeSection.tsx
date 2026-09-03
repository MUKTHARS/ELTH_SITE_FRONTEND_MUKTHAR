'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import SectionLabel from '@components/common/SectionLabel/SectionLabel'
import { SCRIBE_WORKFLOW } from '@constants/scribe'
import styles from './ScribeSection.module.scss'

export default function ScribeSection() {
  return (
    <section className={styles.section}>
      <div className={styles.inner}>
        <div className={styles.header}>
          <SectionLabel text="AI Scribe" color="purple" />
          <h2 className={styles.heading}>Care the way you trained to care</h2>
          <p className={styles.sub}>
            The average doctor spends 2 hours per day on documentation. Elth Scribe gives that time back.
          </p>
        </div>
        <div className={styles.story}>
          <div className={styles.imageWrap}>
            <Image src="/images/aiscribe.jpg" alt="A calm doctor-patient consultation" fill sizes="(max-width: 1024px) 100vw, 42vw" />
            <div className={styles.imageCaption}><span /> Your conversation stays yours</div>
          </div>
          <div className={styles.workflow}>
          {SCRIBE_WORKFLOW.map((w, i) => (
            <motion.div
              key={w.step}
              className={styles.wStep}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: i * 0.1 }}
              viewport={{ once: true }}
            >
              <div className={styles.wNum}>{w.step}</div>
              <h3 className={styles.wLabel}>{w.label}</h3>
              <p className={styles.wDetail}>{w.detail}</p>
            </motion.div>
          ))}
          </div>
        </div>
      </div>
    </section>
  )
}
