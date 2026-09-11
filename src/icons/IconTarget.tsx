import type { IconProps } from '@/types'

export default function IconTarget({ size = 24, color = 'currentColor', className }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
      <circle cx="12" cy="12" r="9" opacity="0.2" />
      <circle cx="12" cy="12" r="5.5" opacity="0.5" />
      <circle cx="12" cy="12" r="2" />
    </svg>
  )
}
