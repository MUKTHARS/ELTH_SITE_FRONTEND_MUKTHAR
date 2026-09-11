import type { IconProps } from '@/types'

export default function IconBrain({ size = 24, color = 'currentColor', className }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
      <circle cx="8" cy="8" r="4" />
      <circle cx="16" cy="8" r="4" />
      <circle cx="6" cy="14" r="3.5" />
      <circle cx="18" cy="14" r="3.5" />
      <circle cx="12" cy="16" r="4" />
    </svg>
  )
}
