import type { IconProps } from '@/types'

export default function IconX({ size = 24, color = 'currentColor', className }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
      <rect x="10.9" y="2" width="2.2" height="20" rx="1.1" transform="rotate(45 12 12)" />
      <rect x="10.9" y="2" width="2.2" height="20" rx="1.1" transform="rotate(-45 12 12)" />
    </svg>
  )
}
