'use client'

import { motion } from 'framer-motion'
import SectionLabel from '@components/common/SectionLabel/SectionLabel'
import IntegrationLogo from '@components/common/IntegrationLogo/IntegrationLogo'
import { INTEGRATIONS } from '@constants/integrations'
import styles from './IntegrationsSection.module.scss'

const CATEGORIES = ['EMR', 'Lab', 'Insurance', 'Messaging'] as const

export default function IntegrationsSection() {
  return (
    <section className={styles.section}>
      <div className={styles.inner}>
        <div className={styles.header}>
          <SectionLabel text="Integrations" color="blue" />
          <h2 className={styles.heading}>Plugs into what you already use</h2>
          <p className={styles.sub}>
            No ripping out your existing systems. Elth AI integrates with the leading EMRs, lab networks, and insurance providers in India.
          </p>
        </div>

        <div className={styles.categories}>
          {CATEGORIES.map((cat, ci) => {
            const items = INTEGRATIONS.filter((ix) => ix.category === cat)
            return (
              <motion.div
                key={cat}
                className={styles.category}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: ci * 0.1 }}
                viewport={{ once: true }}
              >
                <span className={styles.catLabel}>{cat}</span>
                <div className={styles.logos}>
                  {items.map((item) => (
                    <IntegrationLogo key={item.name} integration={item} />
                  ))}
                </div>
              </motion.div>
            )
          })}
        </div>

        <motion.div
          className={styles.footer}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <p className={styles.footerText}>
            Don&apos;t see your system? <strong>We build custom integrations</strong> for Enterprise hospitals within 2 weeks.
          </p>
          <a href="mailto:hello@elth.ai" className={styles.footerLink}>hello@elth.ai →</a>
        </motion.div>
      </div>
    </section>
  )
}
