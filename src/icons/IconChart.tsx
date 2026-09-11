import type { IconProps } from '@/types'

export default function IconChart({ size = 24, color = 'currentColor', className }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
      <path d="M4 3a1 1 0 011 1v14h15a1 1 0 110 2H4a1 1 0 01-1-1V4a1 1 0 011-1z" />
      <path d="M14.6 13.4a1 1 0 001.4 0l3.7-3.7 1.6 1.6a.5.5 0 00.85-.36V6.5a.5.5 0 00-.5-.5h-4.44a.5.5 0 00-.36.85l1.6 1.6-3 3-3.29-3.3a1 1 0 00-1.42 0l-4 4a1 1 0 101.42 1.42L11.6 10z" />
    </svg>
  )
}
