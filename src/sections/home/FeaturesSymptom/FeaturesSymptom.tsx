'use client'

import { motion } from 'framer-motion'
import SectionLabel from '@components/common/SectionLabel/SectionLabel'
import GradientText from '@components/common/GradientText/GradientText'
import MockupFrame from '@components/common/MockupFrame/MockupFrame'
import { SYMPTOM_STEPS, SYMPTOM_CHAT_MESSAGES } from '@constants/symptom'
import styles from './FeaturesSymptom.module.scss'

export default function FeaturesSymptom() {
  return (
    <section className={styles.section}>
      <div className={styles.inner}>
        <div className={styles.content}>
          <motion.div
            className={styles.left}
            initial={{ opacity: 0, x: -32 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <MockupFrame type="phone">
              <div className={styles.chatMock}>
                <div className={styles.chatHeader}>
                  <span className={styles.chatAvatar}>E</span>
                  <div>
                    <div className={styles.chatName}>Elth Health Assistant</div>
                    <div className={styles.chatStatus}>🟢 Online</div>
                  </div>
                </div>
                <div className={styles.chatMessages}>
                  {SYMPTOM_CHAT_MESSAGES.map((m, i) => (
                    <div
                      key={i}
                      className={m.from === 'patient' ? styles.chatBubblePatient : styles.chatBubbleAi}
                    >
                      {m.text}
                    </div>
                  ))}
                </div>
              </div>
            </MockupFrame>
          </motion.div>

          <motion.div
            className={styles.right}
            initial={{ opacity: 0, x: 32 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            viewport={{ once: true }}
          >
            <SectionLabel text="Symptom Checker · P0" color="teal" />
            <h2 className={styles.heading}>
              Your hospital&apos;s AI<br />
              <GradientText variant="teal">on WhatsApp.</GradientText>
            </h2>
            <p className={styles.sub}>
              Patients don&apos;t Google their symptoms anymore. They ask your hospital&apos;s AI — in their own language, on WhatsApp. The AI triages and prepares the doctor.
            </p>
            <div className={styles.steps}>
              {SYMPTOM_STEPS.map((s) => (
                <div key={s.step} className={styles.step}>
                  <span className={styles.stepNum}>{s.step}</span>
                  <div>
                    <strong className={styles.stepLabel}>{s.label}</strong>
                    <p className={styles.stepDetail}>{s.detail}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
