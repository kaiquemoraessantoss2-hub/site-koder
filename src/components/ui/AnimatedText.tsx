import { motion } from 'framer-motion'
import { fadeUp, stagger } from '../../lib/motion'

interface AnimatedHeadingProps {
  text: string
  className?: string
  as?: 'h1' | 'h2' | 'h3'
  delay?: number
}

export function AnimatedHeading({ text, className = '', as = 'h1', delay = 0 }: AnimatedHeadingProps) {
  const Tag = as

  return (
    <motion.div
      variants={stagger(0.08)}
      initial="hidden"
      animate="visible"
      className={className}
    >
      <Tag className={className} style={{ display: 'block' }}>
        {text.split(' ').map((word, i) => (
          <motion.span
            key={i}
            variants={{
              hidden: { opacity: 0, y: 40 },
              visible: {
                opacity: 1,
                y: 0,
                transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1], delay },
              },
            }}
            className="inline-block mr-[0.25em]"
          >
            {word}
          </motion.span>
        ))}
      </Tag>
    </motion.div>
  )
}

interface ScrollAnimatedHeadingProps {
  text: string
  className?: string
  as?: 'h1' | 'h2' | 'h3'
}

export function ScrollAnimatedHeading({ text, className = '', as = 'h2' }: ScrollAnimatedHeadingProps) {
  const Tag = as

  return (
    <motion.div
      variants={stagger(0.08)}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-50px 0px' }}
    >
      <Tag style={{ display: 'block' }}>
        {text.split(' ').map((word, i) => (
          <motion.span key={i} variants={fadeUp} className={`inline-block mr-[0.25em] ${className}`}>
            {word}
          </motion.span>
        ))}
      </Tag>
    </motion.div>
  )
}
