import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion'
import { ReactNode, useRef } from 'react'

interface GlowCardProps {
  children: ReactNode
  className?: string
}

export function GlowCard({ children, className = '' }: GlowCardProps) {
  const ref = useRef<HTMLDivElement>(null)
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)

  const springX = useSpring(mouseX, { stiffness: 300, damping: 30 })
  const springY = useSpring(mouseY, { stiffness: 300, damping: 30 })

  const background = useTransform(
    [springX, springY],
    ([x, y]: number[]) =>
      `radial-gradient(300px circle at ${x}px ${y}px, rgba(255,60,0,0.10), transparent 70%)`
  )

  function handleMouseMove(e: React.MouseEvent<HTMLDivElement>) {
    const rect = ref.current?.getBoundingClientRect()
    if (!rect) return
    mouseX.set(e.clientX - rect.left)
    mouseY.set(e.clientY - rect.top)
  }

  function handleMouseLeave() {
    mouseX.set(0)
    mouseY.set(0)
  }

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      whileHover={{ scale: 1.02 }}
      transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
      className={`relative overflow-hidden rounded-2xl bg-navy border border-white/[0.07] ${className}`}
    >
      <motion.div
        style={{ background }}
        className="absolute inset-0 pointer-events-none z-0"
      />
      <div className="relative z-10">{children}</div>
    </motion.div>
  )
}
