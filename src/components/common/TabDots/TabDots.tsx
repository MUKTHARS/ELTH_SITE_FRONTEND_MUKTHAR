import styles from './TabDots.module.scss'

interface TabDotsProps {
  total: number
  active: number
}

export default function TabDots({ total, active }: TabDotsProps) {
  return (
    <div className={styles.dots} role="tablist" aria-label="Progress">
      {Array.from({ length: total }).map((_, i) => (
        <span key={i} className={`${styles.dot} ${i === active ? styles.active : ''}`} />
      ))}
    </div>
  )
}
