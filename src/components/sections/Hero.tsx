import { useRef, useState, type PointerEvent } from 'react'
import { ArrowDown, ArrowUpRight, Code2, Globe, BarChart3, Play, Pause } from 'lucide-react'
import { InterfacePreview } from '../ui/InterfacePreview'

export function Hero() {
  const heroRef = useRef<HTMLElement>(null)
  const [motionEnabled, setMotionEnabled] = useState(() => !window.matchMedia('(prefers-reduced-motion: reduce)').matches)
  const move = (event: PointerEvent<HTMLElement>) => {
    if (event.pointerType !== 'mouse' || !motionEnabled) return
    const bounds = event.currentTarget.getBoundingClientRect()
    event.currentTarget.style.setProperty('--hero-x', `${((event.clientX - bounds.left) / bounds.width - .5) * 24}px`)
    event.currentTarget.style.setProperty('--hero-y', `${((event.clientY - bounds.top) / bounds.height - .5) * 18}px`)
  }
  const reset = () => { heroRef.current?.style.setProperty('--hero-x', '0px'); heroRef.current?.style.setProperty('--hero-y', '0px') }
  return (
    <section ref={heroRef} className={`k-hero ${motionEnabled ? 'k-motion-on' : 'k-motion-off'}`} id="inicio" onPointerMove={move} onPointerLeave={reset}>
      <div className="k-hero-grid" aria-hidden="true" />
      <div className="k-hero-orbit" aria-hidden="true" />
      <div className="k-hero-light" aria-hidden="true" />
      <div className="k-float k-float-site" aria-hidden="true"><InterfacePreview kind="site" /></div>
      <div className="k-float k-float-dashboard" aria-hidden="true"><InterfacePreview kind="dashboard" /></div>
      <div className="k-float k-float-system" aria-hidden="true"><InterfacePreview kind="system" /></div>
      <div className="k-float k-float-stat" aria-hidden="true"><span className="k-status-dot" /> Ideias conectadas.<strong>Possibilidades infinitas.</strong><div className="k-stat-line">↗ <span>Seu próximo nível</span></div></div>
      <div className="k-hero-copy">
        <span className="k-eyebrow"><span className="k-status-dot" /> ESTÚDIO DE SOLUÇÕES DIGITAIS</span>
        <h1><span className="k-title-line">Seu negócio.</span><span className="k-title-line">Em uma</span><span className="k-title-line k-title-accent">nova dimensão.</span></h1>
        <p>Sites que impressionam. Sistemas que simplificam.<br className="hidden sm:block" /> Dados que transformam decisões. Tudo feito para você.</p>
        <div className="k-actions"><a className="k-button" href="#contato">Vamos criar seu projeto <ArrowUpRight size={18} /></a><a className="k-button-secondary" href="#servicos">Explore as possibilidades <ArrowDown size={16} /></a></div>
        <div className="k-hero-tags"><span><Globe size={14} /> Sites</span><span><Code2 size={14} /> Sistemas</span><span><BarChart3 size={14} /> Dados & dashboards</span></div>
        <button className="k-motion-toggle" onClick={() => { reset(); setMotionEnabled(v => !v) }} aria-pressed={motionEnabled}>{motionEnabled ? <Pause size={12} /> : <Play size={12} />}{motionEnabled ? 'Pausar movimento' : 'Ativar movimento'}</button>
      </div>
      <div className="k-hero-bottom"><span>ESTRATÉGIA + DESIGN + TECNOLOGIA</span><a href="#servicos">Conheça a Koder <ArrowDown size={14} /></a><span>FEITO SOB MEDIDA. FEITO PARA CRESCER.</span></div>
    </section>
  )
}
