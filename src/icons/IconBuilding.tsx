import type { IconProps } from '@/types'

export default function IconBuilding({ size = 24, color = 'currentColor', className }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
      <rect x="4" y="3" width="16" height="18" rx="1" />
      <rect x="7" y="6" width="3" height="3" opacity="0.4" />
      <rect x="14" y="6" width="3" height="3" opacity="0.4" />
      <rect x="7" y="11" width="3" height="3" opacity="0.4" />
      <rect x="14" y="11" width="3" height="3" opacity="0.4" />
      <rect x="9" y="16" width="6" height="5" opacity="0.4" />
    </svg>
  )
}
