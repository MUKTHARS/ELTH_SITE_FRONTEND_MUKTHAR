import * as React from 'react'
import { cva, type VariantProps } from 'class-variance-authority'
import { cn } from '@lib/utils'

const badgeVariants = cva(
  'inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors',
  {
    variants: {
      variant: {
        default:   'border-transparent bg-elth-teal text-white',
        teal:      'border-transparent bg-elth-teal-bg text-elth-teal',
        purple:    'border-transparent bg-elth-purple-bg text-elth-purple',
        blue:      'border-transparent bg-elth-blue-bg text-elth-blue',
        amber:     'border-transparent bg-elth-amber-bg text-elth-amber',
        outline:   'border-elth-border text-elth-dark bg-transparent',
        dark:      'border-transparent bg-white/10 text-white',
      },
    },
    defaultVariants: { variant: 'default' },
  }
)

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, ...props }: BadgeProps) {
  return <div className={cn(badgeVariants({ variant }), className)} {...props} />
}

export { Badge, badgeVariants }
