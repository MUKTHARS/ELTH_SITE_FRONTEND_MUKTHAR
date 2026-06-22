import styles from './MockupFrame.module.scss'

interface MockupFrameProps {
  children: React.ReactNode
  type?: 'browser' | 'phone'
  className?: string
}

export default function MockupFrame({ children, type = 'browser', className = '' }: MockupFrameProps) {
  return (
    <div className={`${styles.frame} ${styles[type]} ${className}`}>
      {type === 'browser' && (
        <div className={styles.browserBar}>
          <div className={styles.dots}>
            <span className={styles.dot} />
            <span className={styles.dot} />
            <span className={styles.dot} />
          </div>
          <div className={styles.urlBar} />
        </div>
      )}
      {type === 'phone' && <div className={styles.phoneNotch} />}
      <div className={styles.content}>{children}</div>
    </div>
  )
}
