import type { IconProps } from '@/types'

export default function IconTooth({ size = 24, color = 'currentColor', className, strokeWidth = 1.5 }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M12 5c-1.5-1.5-3.5-2-5-1.3C5 4.3 4 6 4 8.5c0 2.8 1 5 1.6 7.6.4 1.7.9 4.4 2.4 4.4 1.6 0 1.5-3 2-5 .3-1.4.8-2.5 2-2.5s1.7 1.1 2 2.5c.5 2 .4 5 2 5 1.5 0 2-2.7 2.4-4.4C18.9 13.5 20 11.3 20 8.5c0-2.5-1-4.2-3-4.8-1.5-.7-3.5-.2-5 1.3z" />
    </svg>
  )
}
