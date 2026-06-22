import type { IconProps } from '@/types'

export default function IconMenu({ size = 24, color = 'currentColor', className, strokeWidth = 1.5 }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" className={className}>
      <line x1="4" x2="20" y1="12" y2="12" />
      <line x1="4" x2="20" y1="6"  y2="6"  />
      <line x1="4" x2="20" y1="18" y2="18" />
    </svg>
  )
}
