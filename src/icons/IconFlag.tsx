import type { IconProps } from '@/types'

export default function IconFlag({ size = 24, color = 'currentColor', className }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
      <path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z" />
      <rect x="3.4" y="3" width="1.6" height="19" rx="0.8" />
    </svg>
  )
}
