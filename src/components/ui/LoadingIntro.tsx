import { useEffect } from 'react'
import { VortexOrb } from './VortexOrb'

export type IntroPhase = 'loading' | 'revealing' | 'done'

export function LoadingIntro({ phase, onReady, onComplete }: { phase: IntroPhase; onReady: () => void; onComplete: () => void }) {
  useEffect(() => {
    let cancelled = false
    let minTimer: number
    let fallbackTimer: number
    const minimum = new Promise<void>(resolve => { minTimer = window.setTimeout(resolve, 2400) })
    const resources = Promise.race([
      document.fonts.ready.catch(() => undefined),
      new Promise<void>(resolve => { fallbackTimer = window.setTimeout(resolve, 2800) }),
    ])
    Promise.all([minimum, resources]).then(() => { if (!cancelled) onReady() })
    return () => { cancelled = true; window.clearTimeout(minTimer); window.clearTimeout(fallbackTimer) }
  }, [onReady])

  useEffect(() => {
    // The boot cover is already visible before React and CSS load.
    document.getElementById('koder-boot-cover')?.remove()
  }, [])

  useEffect(() => {
    if (phase !== 'revealing') return
    // Keep the canvas mounted until the entire crossfade has finished.
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const timer = window.setTimeout(onComplete, reduced ? 1300 : 1800)
    return () => window.clearTimeout(timer)
  }, [phase, onComplete])

  if (phase === 'done') return null
  return <div className={`k-intro ${phase === 'revealing' ? 'k-intro-leaving' : ''}`} role="status" aria-label="Preparando a experiência Koder"><div className="k-intro-orb"><VortexOrb size={300} animate /></div><div className="k-intro-wordmark">koder<span>®</span></div><p>IDEIAS EM MOVIMENTO.</p><div className="k-intro-track" aria-hidden="true"><span /></div></div>
}
