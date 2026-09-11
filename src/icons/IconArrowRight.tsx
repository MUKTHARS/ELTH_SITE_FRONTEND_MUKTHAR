import type { IconProps } from '@/types'

export default function IconArrowRight({ size = 24, color = 'currentColor', className }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
      <path d="M16.01 11H4v2h12.01v3L20 12l-3.99-4z" />
    </svg>
  )
}
