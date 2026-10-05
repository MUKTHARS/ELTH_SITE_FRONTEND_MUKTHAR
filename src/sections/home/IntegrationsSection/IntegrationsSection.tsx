'use client'

import { motion } from 'framer-motion'
import SectionLabel from '@components/common/SectionLabel/SectionLabel'
import styles from './IntegrationsSection.module.scss'

export default function IntegrationsSection() {
  return (
    <section className={styles.section}>
      <div className={styles.inner}>
        <div className={styles.header}>
          <SectionLabel text="Integrations" color="blue" />
          <h2 className={styles.heading}>Fits into the care systems you already use</h2>
          <p className={styles.sub}>
            Saple is designed to fit into your care workflows—not force your teams to start over. Integration availability depends on your existing systems and deployment.
          </p>
        </div>

        <motion.div
          className={styles.footer}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <p className={styles.footerText}>
            Need to check compatibility with your systems? <strong>Talk to our team</strong> about your workflow and deployment.
          </p>
          <a href="mailto:hello@elth.ai" className={styles.footerLink}>Discuss compatibility →</a>
        </motion.div>
      </div>
    </section>
  )
}
