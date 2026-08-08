'use client'

import { motion } from 'framer-motion'
import { IconCheck, IconStethoscope, IconBone, IconBuilding } from '@icons/index'
import { AUDIENCE } from '@constants/audience'
import styles from './AudienceSection.module.scss'

const [doctors, clinics, specialties] = AUDIENCE

export default function AudienceSection() {
  return (
    <section className={styles.section}>
      <div className={styles.inner}>
        <div className={styles.grid}>
          <motion.div
            className={`${styles.card} ${styles.cardDoctors}`}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <div className={styles.cardBody}>
              <span className={styles.kicker}>{doctors.kicker}</span>
              <h3 className={styles.cardTitle}>{doctors.title}</h3>
              <ul className={styles.list}>
                {doctors.points?.map(p => (
                  <li key={p} className={styles.listItem}>
                    <IconCheck size={13} className={styles.check} />
                    {p}
                  </li>
                ))}
              </ul>
            </div>
            <div className={styles.decorPanel}>
              <IconStethoscope size={40} className={styles.decorIcon} />
            </div>
          </motion.div>

          <motion.div
            className={`${styles.card} ${styles.cardClinics}`}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <IconBuilding size={140} strokeWidth={1} className={styles.decorWatermark} />
            <div className={styles.cardBody}>
              <span className={styles.kicker} style={{ color: '#085041' }}>{clinics.kicker}</span>
              <h3 className={styles.cardTitle}>{clinics.title}</h3>
              <p className={styles.cardDesc}>{clinics.desc}</p>
              <div className={styles.stepsRow}>
                {clinics.steps?.map((s, i) => (
                  <div className={styles.stepPill} key={s}>
                    {s}
                    {i < (clinics.steps?.length ?? 0) - 1 && <span className={styles.stepDivider}>·</span>}
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          <motion.div
            className={`${styles.card} ${styles.cardSpecialty}`}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className={styles.cardBody}>
              <span className={styles.kicker} style={{ color: '#042C53' }}>{specialties.kicker}</span>
              <h3 className={styles.cardTitle}>{specialties.title}</h3>
              <ul className={styles.specialtyList}>
                {specialties.specialties?.map(s => (
                  <li key={s.name} className={styles.specialtyItem}>
                    <strong>{s.name}</strong>
                    <span>{s.desc}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className={styles.decorPanel}>
              <IconBone size={40} className={styles.decorIcon} />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
