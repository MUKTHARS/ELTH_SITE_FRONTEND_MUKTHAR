'use client'

import { motion } from 'framer-motion'
import SectionLabel from '@components/common/SectionLabel/SectionLabel'
import { TEAM_MEMBERS } from '@constants/team'
import styles from './TeamSection.module.scss'

export default function TeamSection() {
  return (
    <section className={styles.section}>
      <div className={styles.inner}>
        <div className={styles.header}>
          <SectionLabel text="The Team" color="teal" />
          <h2 className={styles.heading}>Built by people who understand healthcare</h2>
          <p className={styles.sub}>Our founding team combines clinical experience, AI research, and deep product intuition in Indian health-tech.</p>
        </div>
        <div className={styles.grid}>
          {TEAM_MEMBERS.map((member, i) => (
            <motion.div
              key={member.name}
              className={styles.card}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: i * 0.1 }}
              viewport={{ once: true }}
            >
              <div className={styles.avatar} style={{ background: member.bg }}>
                {member.initials}
              </div>
              <div className={styles.info}>
                <div className={styles.role}>{member.name}</div>
                <p className={styles.desc}>{member.role}</p>
                <span className={styles.location}>📍 {member.location}</span>
              </div>
            </motion.div>
          ))}
        </div>
        <div className={styles.saple}>
          <span className={styles.sapleLabel}>Built on</span>
          <strong className={styles.sapleName}>Saple.ai</strong>
          <p className={styles.sapleDesc}>Elth AI is built on the Saple.ai platform — India&apos;s enterprise AI infrastructure layer for regulated industries.</p>
        </div>
      </div>
    </section>
  )
}
