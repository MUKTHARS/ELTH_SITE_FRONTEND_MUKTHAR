'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { IconCheck } from '@icons/index'
import { SCRIBE_BLOCK, MEMORY_BLOCK, CONTINUOUS_BLOCK } from '@constants/explainer'
import styles from './FeaturesExplainer.module.scss'

const CIRCLE_POSITIONS = [
  { top: '0%',   left: '50%' },
  { top: '20%',  left: '92%' },
  { top: '70%',  left: '92%' },
  { top: '96%',  left: '50%' },
  { top: '70%',  left: '8%' },
  { top: '20%',  left: '8%' },
]

const TABS = [
  { id: 'scribe',     label: 'AI Scribe',        color: '#26215C' },
  { id: 'memory',     label: 'Clinical Memory',  color: '#085041' },
  { id: 'continuous', label: 'Continuous Care',  color: '#042C53' },
] as const

export default function FeaturesExplainer() {
  const [active, setActive] = useState<typeof TABS[number]['id']>('scribe')
  const activeTab = TABS.find(t => t.id === active)!

  useEffect(() => {
    const timer = setTimeout(() => {
      const currentIndex = TABS.findIndex(t => t.id === active)
      const nextTab = TABS[(currentIndex + 1) % TABS.length]
      setActive(nextTab.id)
    }, 5000)

    return () => clearTimeout(timer)
  }, [active])

  return (
    <section className={styles.section}>
      <div className={styles.inner}>

        <div className={styles.tabBar}>
          {TABS.map(t => (
            <button
              key={t.id}
              type="button"
              className={t.id === active ? styles.tabActive : styles.tab}
              style={t.id === active ? { color: t.color, borderColor: t.color } : undefined}
              onClick={() => setActive(t.id)}
            >
              {t.label}
            </button>
          ))}
        </div>

        <div className={styles.row}>
          <AnimatePresence mode="wait">
            {active === 'scribe' && (
              <motion.div
                key="scribe"
                className={styles.tabContent}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.3 }}
              >
                <div className={styles.rowContent}>
                  <span className={styles.eyebrow} style={{ color: activeTab.color }}>{SCRIBE_BLOCK.eyebrow}</span>
                  <h3 className={styles.title}>
                    {SCRIBE_BLOCK.title.split('\n').map(line => <span key={line}>{line}<br /></span>)}
                  </h3>
                  <p className={styles.desc}>{SCRIBE_BLOCK.desc}</p>
                  <ul className={styles.pointList}>
                    {SCRIBE_BLOCK.points.map(p => (
                      <li key={p.label} className={styles.pointItem}>
                        <span className={styles.pointIcon}><p.icon size={16} /></span>
                        {p.label}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className={styles.rowVisual}>
                  <div className={styles.scribeCard}>
                    <div className={styles.scribeWave}>
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img src="/images/frequencybg.png" alt="Voice waveform" className={styles.scribeWaveImg} />
                      <span className={styles.scribeStop} />
                    </div>
                    <div className={styles.checklistCard}>
                      {SCRIBE_BLOCK.checklist.map(c => (
                        <div className={styles.checklistRow} key={c.label} style={{ background: c.bg }}>
                          <span className={styles.checklistIcon} style={{ background: c.color }}><c.icon size={14} color="#fff" /></span>
                          <span className={styles.checklistLabel}>{c.label}</span>
                          <IconCheck size={14} className={styles.checklistCheck} />
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            )}

            {active === 'memory' && (
              <motion.div
                key="memory"
                className={styles.tabContent}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.3 }}
              >
                <div className={styles.rowVisual}>
                  <div className={styles.memoryCard}>
                    {MEMORY_BLOCK.years.map(y => (
                      <div className={styles.memoryYear} key={y.year}>
                        <div className={styles.memoryYearCol}>
                          <span className={styles.memoryYearLabel} style={{ color: y.color }}>{y.year}</span>
                          {y.latest && <span className={styles.memoryLatest}>Latest</span>}
                        </div>
                        <div className={styles.memoryItems}>
                          {y.items.map(item => (
                            <div className={styles.memoryItem} key={item.label}>
                              <span className={styles.memoryIcon} style={{ background: y.color }}>
                                <item.icon size={12} color="#fff" />
                              </span>
                              {item.label}
                            </div>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className={styles.rowContent}>
                  <span className={styles.eyebrow} style={{ color: activeTab.color }}>{MEMORY_BLOCK.eyebrow}</span>
                  <h3 className={styles.title}>
                    {MEMORY_BLOCK.title.split('\n').map(line => <span key={line}>{line}<br /></span>)}
                  </h3>
                  <p className={styles.desc}>{MEMORY_BLOCK.desc}</p>
                </div>
              </motion.div>
            )}

            {active === 'continuous' && (
              <motion.div
                key="continuous"
                className={styles.tabContent}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.3 }}
              >
                <div className={styles.rowContent}>
                  <span className={styles.eyebrow} style={{ color: activeTab.color }}>{CONTINUOUS_BLOCK.eyebrow}</span>
                  <h3 className={styles.title}>
                    {CONTINUOUS_BLOCK.title.split('\n').map(line => <span key={line}>{line}<br /></span>)}
                  </h3>
                  <p className={styles.desc}>{CONTINUOUS_BLOCK.desc}</p>
                </div>

                <div className={styles.rowVisual}>
                  <div className={styles.circleCard}>
                    <div className={styles.circleTrack}>
                      <div className={styles.circleCenter}>
                        <CONTINUOUS_BLOCK.center.icon size={20} />
                        <span>{CONTINUOUS_BLOCK.center.label}</span>
                      </div>
                      {CONTINUOUS_BLOCK.nodes.map((n, i) => (
                        <div
                          className={styles.circleNode}
                          key={n.label}
                          style={{ top: CIRCLE_POSITIONS[i].top, left: CIRCLE_POSITIONS[i].left }}
                        >
                          <span className={styles.circleIcon} style={{ background: n.bg, color: n.color }}><n.icon size={16} /></span>
                          <span className={styles.circleLabel}>{n.label}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

      </div>
    </section>
  )
}
