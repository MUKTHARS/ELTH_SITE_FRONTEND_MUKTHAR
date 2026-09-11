import type { IconProps } from '@/types'

export default function IconStethoscope({ size = 24, color = 'currentColor', className }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
      <path d="M6 2a1 1 0 00-1 1v6.5a5.5 5.5 0 0011 0V3a1 1 0 10-2 0v6.5a3.5 3.5 0 01-7 0V3a1 1 0 00-1-1z" />
      <path d="M9.5 14.8v1.7a6.5 6.5 0 0013 0v-2a1 1 0 10-2 0v2a4.5 4.5 0 01-9 0v-1.7a1 1 0 10-2 0z" />
      <circle cx="21" cy="16.5" r="2.2" />
    </svg>
  )
}
