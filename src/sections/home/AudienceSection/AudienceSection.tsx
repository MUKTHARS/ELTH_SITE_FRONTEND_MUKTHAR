'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { IconArrowRight, IconCheck } from '@icons/index'
import { AUDIENCE } from '@constants/audience'
import styles from './AudienceSection.module.scss'

const [doctors, clinics, specialties] = AUDIENCE

export default function AudienceSection() {
  return (
    <section className={styles.section}>
      <div className={styles.inner}>
        <div className={styles.grid}>

          <motion.div
            className={styles.card}
            style={{ background: doctors.bg }}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
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
            <Link href={doctors.href} className={styles.cta}>
              {doctors.cta} <IconArrowRight size={15} />
            </Link>
            <div className={styles.artWrap}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/images/doctor.jpg" alt="" className={styles.art} />
            </div>
          </motion.div>

          <motion.div
            className={styles.card}
            style={{ background: clinics.bg }}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <span className={styles.kicker}>{clinics.kicker}</span>
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
            <Link href={clinics.href} className={styles.cta}>
              {clinics.cta} <IconArrowRight size={15} />
            </Link>
            <div className={styles.artWrap}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/images/clinic.avif" alt="" className={styles.art} />
            </div>
          </motion.div>

          <motion.div
            className={styles.card}
            style={{ background: specialties.bg }}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <span className={styles.kicker}>{specialties.kicker}</span>
            <h3 className={styles.cardTitle}>{specialties.title}</h3>
            <ul className={styles.specialtyList}>
              {specialties.specialties?.map(s => (
                <li key={s.name} className={styles.specialtyItem}>
                  <strong>{s.name}</strong>
                  <span>{s.desc}</span>
                </li>
              ))}
            </ul>
            <Link href={specialties.href} className={styles.cta}>
              {specialties.cta} <IconArrowRight size={15} />
            </Link>
            <div className={styles.artWrap}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/images/spine2.webp" alt="" className={styles.art} />
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  )
}
