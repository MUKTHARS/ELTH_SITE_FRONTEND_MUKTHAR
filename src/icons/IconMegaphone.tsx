import type { IconProps } from '@/types'

export default function IconMegaphone({ size = 24, color = 'currentColor', className }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
      <path d="M3 10v4a1 1 0 0 0 1 1h2l5 4V5L6 9H4a1 1 0 0 0-1 1z" />
      <circle cx="17.2" cy="8.2" r="1.3" opacity="0.7" />
      <circle cx="19.6" cy="6" r="1" opacity="0.5" />
    </svg>
  )
}
