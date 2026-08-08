'use client'

import { motion } from 'framer-motion'
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

export default function FeaturesExplainer() {
  return (
    <section className={styles.section}>
      <div className={styles.inner}>

        {/* ── AI Scribe ────────────────────────────────────────────────── */}
        <motion.div
          className={styles.row}
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <div className={styles.rowContent}>
            <span className={styles.eyebrow}>{SCRIBE_BLOCK.eyebrow}</span>
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
                {Array.from({ length: 26 }).map((_, i) => (
                  <span key={i} style={{ height: `${6 + ((i * 37) % 20)}px` }} />
                ))}
                <span className={styles.scribeStop} />
              </div>
              <div className={styles.checklistCard}>
                {SCRIBE_BLOCK.checklist.map(c => (
                  <div className={styles.checklistRow} key={c.label}>
                    <span className={styles.checklistIcon} style={{ background: c.bg }}><span className={styles.checklistDot} style={{ background: c.color }} /></span>
                    <span className={styles.checklistLabel}>{c.label}</span>
                    <IconCheck size={14} className={styles.checklistCheck} />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>

        {/* ── Clinical Memory ──────────────────────────────────────────── */}
        <motion.div
          className={styles.row}
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <div className={styles.rowContent}>
            <span className={styles.eyebrow} style={{ color: '#085041' }}>{MEMORY_BLOCK.eyebrow}</span>
            <h3 className={styles.title}>
              {MEMORY_BLOCK.title.split('\n').map(line => <span key={line}>{line}<br /></span>)}
            </h3>
            <p className={styles.desc}>{MEMORY_BLOCK.desc}</p>
          </div>

          <div className={styles.rowVisual}>
            <div className={styles.memoryCard}>
              {MEMORY_BLOCK.years.map(y => (
                <div className={styles.memoryYear} key={y.year}>
                  <div className={styles.memoryYearLabel}>{y.year}</div>
                  <div className={styles.memoryItems}>
                    {y.items.map(item => (
                      <div className={styles.memoryItem} key={item}>
                        <span className={styles.memoryDot} style={{ background: y.color }} />
                        {item}
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* ── Continuous Care ──────────────────────────────────────────── */}
        <motion.div
          className={styles.row}
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <div className={styles.rowContent}>
            <span className={styles.eyebrow} style={{ color: '#042C53' }}>{CONTINUOUS_BLOCK.eyebrow}</span>
            <h3 className={styles.title}>
              {CONTINUOUS_BLOCK.title.split('\n').map(line => <span key={line}>{line}<br /></span>)}
            </h3>
            <p className={styles.desc}>{CONTINUOUS_BLOCK.desc}</p>
          </div>

          <div className={styles.rowVisual}>
            <div className={styles.circleCard}>
              <div className={styles.circleTrack}>
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

      </div>
    </section>
  )
}
