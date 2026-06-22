import type { Feature } from '@/types'
import { Badge } from '@components/ui/badge'
import styles from './FeatureCard.module.scss'

interface FeatureCardProps {
  feature: Feature
  iconComponent: React.ReactNode
}

export default function FeatureCard({ feature, iconComponent }: FeatureCardProps) {
  return (
    <div className={styles.card}>
      <div className={styles.iconWrap}>{iconComponent}</div>
      <div className={styles.content}>
        <div className={styles.header}>
          <h3 className={styles.title}>{feature.title}</h3>
          <Badge variant={feature.phase === 'P0' ? 'teal' : feature.phase === 'P1' ? 'purple' : 'blue'}>
            {feature.phase === 'P0' ? 'Live' : feature.phase === 'P1' ? 'Coming Soon' : 'Roadmap'}
          </Badge>
        </div>
        <p className={styles.description}>{feature.description}</p>
      </div>
    </div>
  )
}
