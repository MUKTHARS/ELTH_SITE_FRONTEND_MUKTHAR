import styles from './GradientText.module.scss'

interface GradientTextProps {
  children: React.ReactNode
  className?: string
  variant?: 'teal' | 'purple' | 'warm'
}

export default function GradientText({ children, className = '', variant = 'teal' }: GradientTextProps) {
  return <span className={`${styles.gradient} ${styles[variant]} ${className}`}>{children}</span>
}
