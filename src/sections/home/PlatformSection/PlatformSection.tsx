'use client'

import { useCallback, useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import SectionLabel from '@components/common/SectionLabel/SectionLabel'
import { PLATFORM_PRODUCTS } from '@constants/platform'
import { IconArrowRight } from '@icons/index'
import styles from './PlatformSection.module.scss'

export default function PlatformSection() {
  const scrollRef = useRef<HTMLDivElement>(null)
  const [active, setActive] = useState(0)
  const [isScrolling, setIsScrolling] = useState(false)

  const goTo = useCallback((index: number) => {
    if (!scrollRef.current) return

    setIsScrolling(true)
    setActive(index)

    const height = scrollRef.current.clientHeight
    scrollRef.current.scrollTo({ top: index * height, behavior: 'smooth' })

    const timeout = setTimeout(() => setIsScrolling(false), 500)
    return () => clearTimeout(timeout)
  }, [])

  const onScroll = useCallback(() => {
    if (!scrollRef.current || isScrolling) return

    const { scrollTop, clientHeight } = scrollRef.current
    const next = Math.min(Math.round(scrollTop / clientHeight), PLATFORM_PRODUCTS.length - 1)

    if (next !== active) setActive(next)
  }, [isScrolling, active])

  useEffect(() => {
    const el = scrollRef.current
    if (!el) return

    el.addEventListener('scroll', onScroll)
    return () => el.removeEventListener('scroll', onScroll)
  }, [onScroll])

  return (
    <section className={styles.section}>
      <div className={styles.inner}>
        <div className={styles.header}>
          <SectionLabel text="The Platform" color="teal" />
          <h2 className={styles.heading}>One platform. Three connected experiences.</h2>
          <p className={styles.sub}>ElthDoc for doctors, ElthCare for hospitals, MyElth for patients — unified by a shared health-intelligence layer.</p>
        </div>

        {/* Desktop: sticky nav + scroll-synced panel */}
        <div className={styles.switcher}>
          <div className={styles.navCol}>
            <div className={styles.navSticky}>
              {PLATFORM_PRODUCTS.map((p, i) => (
                <div
                  key={p.id}
                  className={`${styles.navItem} ${active === i ? styles.navItemActive : ''}`}
                  style={{ '--accent': p.color, '--accent-bg': p.bg } as React.CSSProperties}
                  onClick={() => goTo(i)}
                >
                  <span className={styles.navBar} />
                  <div className={styles.navRow}>
                    <div className={styles.navIcon}>
                      <p.icon size={20} strokeWidth={1.5} />
                    </div>
                    <div className={styles.navText}>
                      <span className={styles.navTag}>{p.tag}</span>
                      <h3 className={styles.navTitle}>{p.title}</h3>
                      <p className={styles.navSubtitle}>{p.subtitle}</p>
                    </div>
                  </div>

                  {active === i && (
                    <motion.div
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3 }}
                      className={styles.navExpand}
                    >
                      <div className={styles.featureGrid}>
                        {p.features.map((f) => (
                          <div key={f} className={styles.feature}>
                            <span className={styles.featureDot} />
                            {f}
                          </div>
                        ))}
                      </div>
                      <Link href={p.ctaLink} className={styles.cta}>
                        {p.ctaText}
                        <IconArrowRight size={16} strokeWidth={1.75} />
                      </Link>
                    </motion.div>
                  )}
                </div>
              ))}
            </div>
          </div>

          <div className={styles.panelCol}>
            <div ref={scrollRef} className={styles.panelScroll}>
              {PLATFORM_PRODUCTS.map((p) => (
                <div key={p.id} className={styles.panelSlide}>
                  <div className={styles.mockPanel}>
                    <Image src={p.img} alt={`${p.title} interface`} fill sizes="(max-width: 1024px) 100vw, 50vw" className={styles.mockImage} />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Mobile: stacked cards */}
        <div className={styles.mobileList}>
          {PLATFORM_PRODUCTS.map((p, i) => (
            <motion.div
              key={p.id}
              className={styles.mobileCard}
              style={{ '--accent': p.color, '--accent-bg': p.bg } as React.CSSProperties}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              viewport={{ once: true }}
            >
              <div className={styles.mobileMock}>
                <Image src={p.img} alt={`${p.title} interface`} fill sizes="100vw" className={styles.mobileImage} />
              </div>
              <div className={styles.mobileBody}>
                <span className={styles.navTag}>{p.tag}</span>
                <h3 className={styles.mobileTitle}>{p.title}</h3>
                <p className={styles.navSubtitle}>{p.subtitle}</p>
                <div className={styles.featureGrid}>
                  {p.features.map((f) => (
                    <div key={f} className={styles.feature}>
                      <span className={styles.featureDot} />
                      {f}
                    </div>
                  ))}
                </div>
                <Link href={p.ctaLink} className={styles.cta}>
                  {p.ctaText}
                  <IconArrowRight size={16} strokeWidth={1.75} />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

        <div className={styles.dots}>
          {PLATFORM_PRODUCTS.map((p, i) => (
            <button
              key={p.id}
              className={`${styles.dot} ${active === i ? styles.dotActive : ''}`}
              onClick={() => goTo(i)}
              aria-label={`Go to ${p.title}`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
