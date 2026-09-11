import type { IconProps } from '@/types'

export default function IconCreditCard({ size = 24, color = 'currentColor', className }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
      <rect x="2" y="5" width="20" height="14" rx="2" />
      <rect x="2" y="8.5" width="20" height="3" opacity="0.35" />
    </svg>
  )
}
