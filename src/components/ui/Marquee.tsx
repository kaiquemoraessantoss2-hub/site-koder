import { motion } from 'framer-motion'
import { ReactNode } from 'react'

interface MarqueeProps {
  children: ReactNode
  speed?: number
  className?: string
}

export function Marquee({ children, speed = 40, className = '' }: MarqueeProps) {
  return (
    <div className={`relative overflow-hidden ${className}`}>
      <div
        className="absolute left-0 top-0 bottom-0 w-32 z-10 pointer-events-none"
        style={{ background: 'linear-gradient(to right, #010C1E, transparent)' }}
      />
      <div
        className="absolute right-0 top-0 bottom-0 w-32 z-10 pointer-events-none"
        style={{ background: 'linear-gradient(to left, #010C1E, transparent)' }}
      />
      <motion.div
        className="flex gap-6 w-max"
        animate={{ x: ['0%', '-50%'] }}
        transition={{
          duration: speed,
          repeat: Infinity,
          ease: 'linear',
        }}
      >
        {children}
        {children}
      </motion.div>
    </div>
  )
}
