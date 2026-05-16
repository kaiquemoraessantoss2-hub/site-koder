import { useInView } from 'framer-motion'
import { useRef } from 'react'

export function useScrollAnimation(threshold = 0.15) {
  const ref = useRef(null)
  const isInView = useInView(ref, {
    once: true,
    margin: `-${Math.round(threshold * 100)}px 0px` as any,
  })
  return { ref, isInView }
}
