'use client'

import type { Stat } from '@/types'
import { useCounterAnimation } from '@hooks/useCounterAnimation'
import { formatNumber } from '@lib/utils'
import styles from './StatCard.module.scss'

export default function StatCard({ stat }: { stat: Stat }) {
  const { count, ref } = useCounterAnimation(stat.value)
  return (
    <div className={styles.card} ref={ref as React.RefObject<HTMLDivElement>}>
      <div className={styles.value}>
        {formatNumber(count)}{stat.suffix}
      </div>
      <div className={styles.label}>{stat.label}</div>
      {stat.description && <div className={styles.description}>{stat.description}</div>}
    </div>
  )
}
