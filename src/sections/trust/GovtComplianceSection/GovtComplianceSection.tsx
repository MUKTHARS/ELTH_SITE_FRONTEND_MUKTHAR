'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import SectionLabel from '@components/common/SectionLabel/SectionLabel'
import { GOVT_COMPLIANCE_ITEMS } from '@constants/govtCompliance'
import styles from './GovtComplianceSection.module.scss'

export default function GovtComplianceSection() {
  return (
    <section className={styles.section}>
      <div className={styles.bg}>
        <Image src="/images/top.jpg" alt="" fill priority sizes="100vw" className={styles.bgImage} />
        <div className={styles.scrim} />
      </div>
      <div className={styles.inner}>
        <div className={styles.header}>
          <SectionLabel text="India Health Stack" color="teal" />
          <h2 className={styles.heading}>Built for how India regulates health data</h2>
          <p className={styles.sub}>
            Elth AI is built around ABDM from day one — not retrofitted. That means every hospital deployment is ready for ABHA-linked records, consent-based sharing, and claims interoperability as those requirements roll out.
          </p>
        </div>

        <div className={styles.grid}>
          {GOVT_COMPLIANCE_ITEMS.map((item, i) => (
            <motion.div
              key={item.title}
              className={styles.card}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: i * 0.06 }}
              viewport={{ once: true }}
            >
              <span className={styles.icon}>{item.icon}</span>
              <h3 className={styles.cardTitle}>{item.title}</h3>
              <p className={styles.cardDesc}>{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
