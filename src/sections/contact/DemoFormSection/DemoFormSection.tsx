'use client'

import { useState } from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { Button } from '@components/ui/button'
import { Input } from '@components/ui/input'
import { IconMail, IconSmartphone, IconSparkles } from '@icons/index'
import { DEMO_PROMISES } from '@constants/heroes'
import styles from './DemoFormSection.module.scss'

export default function DemoFormSection() {
  const [submitted, setSubmitted] = useState(false)
  const [form, setForm] = useState({
    name: '',
    hospital: '',
    email: '',
    phone: '',
    size: '',
    message: '',
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <section className={styles.section}>
      <div className={styles.bg}>
        <Image src="/images/top.jpg" alt="" fill priority sizes="100vw" className={styles.bgImage} />
        <div className={styles.scrim} />
      </div>
      <div className={styles.inner}>
        <div className={styles.layout}>
          <motion.div
            className={styles.left}
            initial={{ opacity: 0, x: -24 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className={styles.eyebrow}>Request a Demo</span>
            <h1 className={styles.heading}>See Elth AI in your hospital</h1>
            <p className={styles.sub}>
              We&apos;ll show you a live demo tailored to your hospital&apos;s workflow — Scribe, Symptom Checker, Admin Console, and Analytics — in 30 minutes.
            </p>

            <div className={styles.promises}>
              {DEMO_PROMISES.map((p) => (
                <div key={p} className={styles.promise}>
                  <span className={styles.promiseCheck}>✓</span>
                  {p}
                </div>
              ))}
            </div>

            <div className={styles.contact}>
              <div className={styles.contactItem}>
                <span className={styles.contactIcon}><IconMail size={16} strokeWidth={1.75} /></span>
                <span className={styles.contactText}>hello@elth.ai</span>
              </div>
              <div className={styles.contactItem}>
                <span className={styles.contactIcon}><IconSmartphone size={16} strokeWidth={1.75} /></span>
                <span className={styles.contactText}>WhatsApp: +91 98XXX XXXXX</span>
              </div>
            </div>
          </motion.div>

          <motion.div
            className={styles.right}
            initial={{ opacity: 0, x: 24 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
          >
            {submitted ? (
              <div className={styles.success}>
                <span className={styles.successIcon}><IconSparkles size={32} strokeWidth={1.5} /></span>
                <h2 className={styles.successTitle}>Demo request received!</h2>
                <p className={styles.successDesc}>We&apos;ll reach out within 24 hours to schedule your demo. Check your email for confirmation.</p>
              </div>
            ) : (
              <form className={styles.form} onSubmit={handleSubmit}>
                <div className={styles.row}>
                  <div className={styles.field}>
                    <label className={styles.label}>Your name *</label>
                    <Input name="name" placeholder="Dr. Priya Ramesh" required value={form.name} onChange={handleChange} />
                  </div>
                  <div className={styles.field}>
                    <label className={styles.label}>Hospital / Clinic *</label>
                    <Input name="hospital" placeholder="Apollo Clinic, Chennai" required value={form.hospital} onChange={handleChange} />
                  </div>
                </div>
                <div className={styles.row}>
                  <div className={styles.field}>
                    <label className={styles.label}>Work email *</label>
                    <Input type="email" name="email" placeholder="you@hospital.com" required value={form.email} onChange={handleChange} />
                  </div>
                  <div className={styles.field}>
                    <label className={styles.label}>Phone (WhatsApp preferred)</label>
                    <Input type="tel" name="phone" placeholder="+91 98XXX XXXXX" value={form.phone} onChange={handleChange} />
                  </div>
                </div>
                <div className={styles.field}>
                  <label className={styles.label}>Hospital size</label>
                  <select name="size" className={styles.select} value={form.size} onChange={handleChange}>
                    <option value="">Select…</option>
                    <option value="1-5">1–5 doctors</option>
                    <option value="6-20">6–20 doctors</option>
                    <option value="21-100">21–100 doctors</option>
                    <option value="100+">100+ doctors</option>
                  </select>
                </div>
                <div className={styles.field}>
                  <label className={styles.label}>What would you like to see? (optional)</label>
                  <textarea
                    name="message"
                    className={styles.textarea}
                    rows={4}
                    placeholder="e.g. AI Scribe for our OPD, WhatsApp symptom checker, analytics dashboard…"
                    value={form.message}
                    onChange={handleChange}
                  />
                </div>
                <Button type="submit" size="lg" className={styles.submit}>
                  Request Demo →
                </Button>
                <p className={styles.privacy}>We never share your data. Demo is free with no commitment.</p>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
