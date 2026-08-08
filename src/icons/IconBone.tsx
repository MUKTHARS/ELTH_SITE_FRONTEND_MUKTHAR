import type { IconProps } from '@/types'

export default function IconBone({ size = 24, color = 'currentColor', className, strokeWidth = 1.5 }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M17.5 3a2.5 2.5 0 0 1 1.9 4.1L9.1 17.4A2.5 2.5 0 1 1 5.6 21a2.5 2.5 0 0 1-.5-2.9L15.4 7.8A2.5 2.5 0 0 1 17.5 3Z" />
      <circle cx="6" cy="18" r="2.2" />
      <circle cx="18" cy="6" r="2.2" />
    </svg>
  )
}
