import { ReactNode } from 'react'

interface BadgeProps {
  children: ReactNode
  className?: string
}

export function Badge({ children, className = '' }: BadgeProps) {
  return (
    <span
      className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium tracking-widest uppercase bg-primary/10 text-primary-light border border-primary/20 ${className}`}
    >
      {children}
    </span>
  )
}
