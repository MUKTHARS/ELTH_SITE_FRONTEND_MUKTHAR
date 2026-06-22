'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import SectionLabel from '@components/common/SectionLabel/SectionLabel'
import { Button } from '@components/ui/button'
import { PORTALS } from '@constants/portals'
import styles from './SolutionSection.module.scss'

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
              <div className={styles.iconWrap} style={{ background: p.bg }}>
                <span className={styles.icon}>{p.icon}</span>
              </div>
              <h3 className={styles.cardTitle} style={{ color: p.color }}>{p.role}</h3>
              <p className={styles.cardDesc}>{p.desc}</p>
              <Button asChild variant="outline" size="sm" className="mt-2 w-fit">
                <Link href={p.href}>Explore →</Link>
              </Button>
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
