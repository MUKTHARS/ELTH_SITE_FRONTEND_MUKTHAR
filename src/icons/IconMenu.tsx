import type { IconProps } from '@/types'

export default function IconMenu({ size = 24, color = 'currentColor', className }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
      <rect x="3" y="5" width="18" height="2.4" rx="1.2" />
      <rect x="3" y="10.8" width="18" height="2.4" rx="1.2" />
      <rect x="3" y="16.6" width="18" height="2.4" rx="1.2" />
    </svg>
  )
}
