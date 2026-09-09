import styles from './MonoLabel.module.scss'

interface MonoLabelProps {
  text: string
  className?: string
}

export default function MonoLabel({ text, className = '' }: MonoLabelProps) {
  return <span className={`${styles.label} ${className}`}>{text}</span>
}
