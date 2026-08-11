'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import GradientText from '@components/common/GradientText/GradientText'
import { MISSION_VALUES } from '@constants/mission'
import styles from './MissionSection.module.scss'

export default function MissionSection() {
  return (
    <section className={styles.section}>
      <div className={styles.inner}>
        <motion.div
          className={styles.content}
          initial={{ opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <span className={styles.eyebrow}>Our Mission</span>
          <h1 className={styles.heading}>
            AI infrastructure for<br />
            <GradientText variant="teal">every Indian hospital.</GradientText>
          </h1>
          <p className={styles.body}>
            India has 1.4 billion people and a severe shortage of healthcare infrastructure. The solution isn&apos;t more hospitals — it&apos;s making every existing doctor, nurse, and clinic dramatically more capable using AI.
          </p>
          <p className={styles.body}>
            We built Elth AI on Saple.ai to give hospitals the same AI capabilities that large tech companies have — at a price that works for a 3-doctor clinic in Coimbatore and a 500-bed hospital in Hyderabad.
          </p>

          <div className={styles.visual}>
            <Image src="/images/clinic.avif" alt="A care team working together in a clinical setting" fill priority sizes="(max-width: 768px) 100vw, 860px" />
            <span>Built around the people delivering care, every day.</span>
          </div>

          <div className={styles.values}>
            {MISSION_VALUES.map((v, i) => (
              <motion.div
                key={v.value}
                className={styles.valueCard}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.45, delay: i * 0.1 }}
                viewport={{ once: true }}
              >
                <span className={styles.valueIcon}>{v.icon}</span>
                <strong className={styles.valueName}>{v.value}</strong>
                <p className={styles.valueDesc}>{v.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
