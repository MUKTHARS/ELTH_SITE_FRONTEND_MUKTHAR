import type { Integration } from '@/types'
import styles from './IntegrationLogo.module.scss'

export default function IntegrationLogo({ integration }: { integration: Integration }) {
  return (
    <div className={styles.pill}>
      <div className={styles.logoWrap}>
        <span className={styles.fallback}>{integration.name.charAt(0)}</span>
      </div>
      <span className={styles.name}>{integration.name}</span>
      <span className={styles.category}>{integration.category}</span>
    </div>
  )
}
