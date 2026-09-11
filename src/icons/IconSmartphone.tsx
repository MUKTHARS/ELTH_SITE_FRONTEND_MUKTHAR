import type { IconProps } from '@/types'

export default function IconSmartphone({ size = 24, color = 'currentColor', className }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
      <rect x="6" y="2" width="12" height="20" rx="2" />
      <rect x="10" y="17.2" width="4" height="1.6" rx="0.8" opacity="0.4" />
    </svg>
  )
}
