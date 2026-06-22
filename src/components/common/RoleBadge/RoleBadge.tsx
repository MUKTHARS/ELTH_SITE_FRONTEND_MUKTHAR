import type { RoleBadgeProps } from '@/types'
import styles from './RoleBadge.module.scss'

const ROLE_CONFIG = {
  patient: { label: 'Patient',      className: 'patient' },
  doctor:  { label: 'Doctor',       className: 'doctor'  },
  admin:   { label: 'Tenant Admin', className: 'admin'   },
  elth:    { label: 'Super Admin',  className: 'elth'    },
}

export default function RoleBadge({ role }: RoleBadgeProps) {
  const config = ROLE_CONFIG[role]
  return <span className={`${styles.badge} ${styles[config.className]}`}>{config.label}</span>
}
