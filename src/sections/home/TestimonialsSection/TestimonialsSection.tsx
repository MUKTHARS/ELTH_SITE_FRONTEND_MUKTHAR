'use client'

import { motion } from 'framer-motion'
import SectionLabel from '@components/common/SectionLabel/SectionLabel'
import TestimonialCard from '@components/common/TestimonialCard/TestimonialCard'
import { TESTIMONIALS } from '@constants/testimonials'
import styles from './TestimonialsSection.module.scss'

export default function TestimonialsSection() {
  return (
    <section className={styles.section}>
      <div className={styles.inner}>
        <div className={styles.header}>
          <SectionLabel text="Testimonials" color="purple" />
          <h2 className={styles.heading}>Doctors and hospitals love Elth AI</h2>
          <p className={styles.sub}>From single-doctor clinics to multi-speciality hospitals — here&apos;s what they say.</p>
        </div>

        <div className={styles.grid}>
          {TESTIMONIALS.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              viewport={{ once: true }}
            >
              <TestimonialCard testimonial={t} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
