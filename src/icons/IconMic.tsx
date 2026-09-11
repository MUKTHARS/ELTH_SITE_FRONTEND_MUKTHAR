import type { IconProps } from '@/types'

export default function IconMic({ size = 24, color = 'currentColor', className }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
      <path d="M12 15.75a3.75 3.75 0 003.75-3.75V6a3.75 3.75 0 10-7.5 0v6a3.75 3.75 0 003.75 3.75z" />
      <path d="M6 12a.75.75 0 01.75.75 5.25 5.25 0 0010.5 0 .75.75 0 011.5 0 6.751 6.751 0 01-6 6.709v2.291h3a.75.75 0 010 1.5h-7.5a.75.75 0 010-1.5h3v-2.291a6.751 6.751 0 01-6-6.709A.75.75 0 016 12z" />
    </svg>
  )
}
