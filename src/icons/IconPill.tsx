import type { IconProps } from '@/types'

export default function IconPill({ size = 24, color = 'currentColor', className }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
      <path d="m10.5 20.5 10-10a4.95 4.95 0 1 0-7-7l-10 10a4.95 4.95 0 1 0 7 7Z" />
      <rect x="11" y="6.5" width="2" height="12" opacity="0.35" transform="rotate(45 12 12)" />
    </svg>
  )
}
