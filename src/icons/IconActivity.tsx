import type { IconProps } from '@/types'

export default function IconActivity({ size = 24, color = 'currentColor', className }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
      <rect x="2" y="10" width="2.4" height="4" rx="1.2" />
      <rect x="6.8" y="6" width="2.4" height="12" rx="1.2" />
      <rect x="11.6" y="2" width="2.4" height="20" rx="1.2" />
      <rect x="16.4" y="8" width="2.4" height="8" rx="1.2" />
      <rect x="20" y="10.5" width="2.4" height="3" rx="1.2" />
    </svg>
  )
}
