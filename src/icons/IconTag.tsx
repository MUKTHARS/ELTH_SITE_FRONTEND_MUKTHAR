import type { IconProps } from '@/types'

export default function IconTag({ size = 24, color = 'currentColor', className }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
      <path d="M20.59 13.41 13.42 20.58a2 2 0 0 1-2.83 0L2.01 12V2h10l8.58 8.58a2 2 0 0 1 0 2.83z" />
      <circle cx="7" cy="7" r="1.3" opacity="0.5" />
    </svg>
  )
}
