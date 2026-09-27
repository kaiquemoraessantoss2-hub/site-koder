import { useEffect, useState } from 'react'
import { Pause, Play, ArrowUpRight, Check, Smartphone } from 'lucide-react'
import { InterfacePreview, type PreviewKind } from '../ui/InterfacePreview'

const scenes: { kind: PreviewKind; label: string; title: string }[] = [
  { kind: 'site', label: 'Seu site', title: 'Uma presença que acompanha você.' },
  { kind: 'dashboard', label: 'Seus dados', title: 'Uma visão clara, onde você estiver.' },
  { kind: 'system', label: 'Seu sistema', title: 'Sua operação sempre por perto.' },
]

export function MobileExperience() {
  const [active, setActive] = useState(0)
  const [playing, setPlaying] = useState(true)

  useEffect(() => {
    if (!playing) return
    const timer = window.setInterval(() => {
      if (!document.hidden) setActive(value => (value + 1) % scenes.length)
    }, 4000)
    return () => window.clearInterval(timer)
  }, [playing])

  return (
    <section id="na-sua-mao" className="k-mobile-section">
      <div className="k-mobile-inner">
        <div className="k-mobile-copy">
          <span className="k-eyebrow">02 / SEM LIMITES DE LUGAR</span>
          <h2>Seu site.<br />Seu sistema.<br /><span>Na palma<br />da sua mão.</span></h2>
          <p>Seu negócio não para quando você sai do escritório. Criamos experiências que funcionam no computador, no tablet e no celular.</p>
          <ul><li><Check size={16} /> Interfaces pensadas para cada tela</li><li><Check size={16} /> Informações conectadas ao seu negócio</li><li><Check size={16} /> Uma experiência simples, de qualquer lugar</li></ul>
          <a className="k-button" href="#contato">Quero essa experiência <ArrowUpRight size={18} /></a>
        </div>
        <div className={`k-mobile-stage ${playing ? '' : 'is-paused'}`}>
          <span className="k-mobile-ghost" aria-hidden="true">ON THE GO.</span>
          <div className="k-hand">
            <img src="/koder-mobile-hand.png" alt="Mão segurando um celular com as experiências digitais da Koder" loading="lazy" width="1024" height="1536" />
            <div className="k-phone-screen">
              <div className="k-phone-status">9:41 <span>● ▰</span></div>
              <div className="k-phone-brand">koder<span>®</span><Smartphone size={16} /></div>
              <span className="k-phone-eyebrow">SEU NEGÓCIO, CONECTADO</span>
              <div className="k-phone-titles" aria-live="off">
                {scenes.map((scene, i) => <h3 key={scene.kind} className={active === i ? 'active' : ''}>{scene.title}</h3>)}
              </div>
              <div className="k-phone-scenes" aria-label={`Prévia: ${scenes[active].label}`}>
                {scenes.map((scene, i) => <div key={scene.kind} className={`k-phone-scene ${active === i ? 'active' : ''}`} aria-hidden={active !== i}><InterfacePreview kind={scene.kind} /></div>)}
              </div>
              <div className="k-phone-message"><span className="k-status-dot" /><div><b>Tudo sob controle.</b><small>Design e tecnologia em movimento.</small></div><Check size={16} /></div>
              <div className="k-phone-tabs">{scenes.map((scene, i) => <button key={scene.kind} onClick={() => setActive(i)} className={active === i ? 'active' : ''} aria-pressed={active === i}>{scene.label}</button>)}</div>
            </div>
          </div>
          <div className="k-mobile-badge"><Smartphone size={19} /><span>Feito para a sua rotina.<b>Em qualquer tela.</b></span></div>
          <div className="k-motion-controls"><span><span className="k-status-dot" /> DEMONSTRAÇÃO EM MOTION</span><button onClick={() => setPlaying(value => !value)} aria-label={playing ? 'Pausar demonstração' : 'Reproduzir demonstração'}>{playing ? <Pause size={15} /> : <Play size={15} />}</button></div>
        </div>
      </div>
    </section>
  )
}
