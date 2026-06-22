import type { SectionLabelProps } from '@/types'
import styles from './SectionLabel.module.scss'

export default function SectionLabel({ text, color = 'teal' }: SectionLabelProps) {
  return <span className={`${styles.label} ${styles[color]}`}>{text}</span>
}
