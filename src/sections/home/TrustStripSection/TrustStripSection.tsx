'use client'

import { motion } from 'framer-motion'
import { IconCheck, IconBrain, IconShield } from '@icons/index'
import styles from './TrustStripSection.module.scss'

const TRUST_ITEMS = [
  { icon: IconCheck, title: 'Doctor approved', desc: 'Nothing is shared with the patient until the doctor reviews and approves.' },
  { icon: IconBrain, title: 'Grounded in what was said', desc: 'Elth organizes the doctor\'s dictation. It doesn\'t invent clinical findings.' },
  { icon: IconShield, title: 'Private by design', desc: 'Clinical information and dictation audio are treated as protected health information, with controlled access.' },
]

export default function TrustStripSection() {
  return (
    <section className={styles.section}>
      <div className={styles.inner}>
        <p className={styles.eyebrow}>TRUSTED. SECURE. DESIGNED FOR HEALTHCARE.</p>
        <div className={styles.row}>
          {TRUST_ITEMS.map((item, i) => (
            <motion.div
              key={item.title}
              className={styles.item}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              viewport={{ once: true }}
            >
              <span className={styles.iconWrap}><item.icon size={20} /></span>
              <div>
                <div className={styles.itemTitle}>{item.title}</div>
                <p className={styles.itemDesc}>{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
