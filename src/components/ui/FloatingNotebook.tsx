import { motion, useReducedMotion } from 'framer-motion'
import { Clock, Users, TrendingUp, Shield, BarChart3, Zap } from 'lucide-react'

const cards = [
  { icon: Users,      label: 'Clientes ativos',   value: '1.284',  sub: '+12% este mês',      accent: '#4ade80', bar: 84 },
  { icon: Clock,      label: 'Tempo economizado',  value: '70%',    sub: 'por dia, por colab.', accent: '#FF3C00', bar: 70 },
  { icon: TrendingUp, label: 'Receita gerada',     value: 'R$48k',  sub: 'mês atual',           accent: '#FF5A20', bar: 78 },
  { icon: Shield,     label: 'Erros reduzidos',    value: '↓ 90%',  sub: 'no primeiro mês',     accent: '#f59e0b', bar: 90 },
]

const chartBars = [38, 55, 42, 72, 50, 85, 63, 92, 58, 80, 95, 70]

function MetricCard({ icon: Icon, label, value, sub, accent, bar }: typeof cards[0]) {
  return (
    <div
      style={{
        background: 'rgba(22,22,38,0.92)',
        border: '1px solid rgba(255,255,255,0.07)',
        borderTop: '1px solid rgba(255,255,255,0.11)',
        borderRadius: '10px',
        padding: '12px 13px',
        display: 'flex',
        flexDirection: 'column',
        gap: '7px',
      }}
    >
      <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
        <div
          style={{
            width: '22px', height: '22px', borderRadius: '6px', flexShrink: 0,
            background: `${accent}18`, border: `1px solid ${accent}28`,
            display: 'flex', alignItems: 'center', justifyContent: 'center',
          }}
        >
          <Icon size={11} style={{ color: accent }} />
        </div>
        <span style={{ fontSize: '9.5px', color: '#555555', fontWeight: 500, letterSpacing: '0.2px' }}>
          {label}
        </span>
      </div>
      <div>
        <div style={{ fontSize: '20px', fontWeight: 600, color: '#FFFFFF', letterSpacing: '-0.8px', lineHeight: 1 }}>
          {value}
        </div>
        <div style={{ fontSize: '9px', color: '#555555', marginTop: '2px' }}>{sub}</div>
      </div>
      <div style={{ height: '2px', borderRadius: '2px', background: 'rgba(255,255,255,0.06)', overflow: 'hidden' }}>
        <div style={{ height: '100%', width: `${bar}%`, background: `linear-gradient(to right, ${accent}55, ${accent})` }} />
      </div>
    </div>
  )
}

export function FloatingNotebook() {
  const reduced = useReducedMotion()
  const W = 430

  return (
    <motion.div
      animate={reduced ? {} : { y: [-10, 10, -10] }}
      transition={{ duration: 4.5, repeat: Infinity, ease: 'easeInOut' }}
      style={{ position: 'relative', maxWidth: W, width: '100%' }}
    >
      {/* Screen lid */}
      <div
        style={{
          width: '100%',
          background: '#0a0a18',
          borderRadius: '14px 14px 0 0',
          border: '1.5px solid rgba(255,255,255,0.10)',
          borderBottom: 'none',
          overflow: 'hidden',
          boxShadow:
            '0 0 0 1px rgba(255,60,0,0.06) inset, 0 -2px 40px rgba(255,60,0,0.08) inset',
        }}
      >
        {/* Top bezel */}
        <div
          style={{
            height: '26px',
            background: '#121220',
            borderBottom: '1px solid rgba(255,255,255,0.05)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <div
            style={{
              width: '5px', height: '5px', borderRadius: '50%',
              background: 'rgba(255,255,255,0.12)',
            }}
          />
        </div>

        {/* Screen content */}
        <div style={{ padding: '14px 14px 14px', background: 'rgba(10,10,24,0.97)' }}>
          {/* Header row */}
          <div
            style={{
              display: 'flex', justifyContent: 'space-between', alignItems: 'center',
              marginBottom: '11px',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
              <svg width="14" height="14" viewBox="0 0 90 90" aria-hidden="true">
                <polygon points="45,10 80,47 45,47" fill="#FFFFFF" opacity="0.9" />
                <polygon points="45,51 80,51 45,80" fill="#FF3C00" />
              </svg>
              <span
                style={{
                  fontSize: '9px', color: '#555555', fontWeight: 500,
                  letterSpacing: '2.5px', textTransform: 'uppercase',
                }}
              >
                Dashboard Koder
              </span>
            </div>
            <div
              style={{
                fontSize: '8px', color: '#4ade80', background: 'rgba(74,222,128,0.1)',
                border: '1px solid rgba(74,222,128,0.2)',
                borderRadius: '20px', padding: '2px 8px', letterSpacing: '1px',
              }}
            >
              AO VIVO
            </div>
          </div>

          {/* Metric cards 2×2 */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '7px', marginBottom: '8px' }}>
            {cards.map((c, i) => <MetricCard key={i} {...c} />)}
          </div>

          {/* Bar chart row */}
          <div
            style={{
              background: 'rgba(22,22,38,0.85)',
              border: '1px solid rgba(255,255,255,0.06)',
              borderRadius: '10px',
              padding: '10px 12px 8px',
            }}
          >
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
                <BarChart3 size={10} style={{ color: '#FF3C00' }} />
                <span style={{ fontSize: '9px', color: '#555555', fontWeight: 500 }}>Automações / mês</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                <Zap size={9} style={{ color: '#FF5A20' }} />
                <span style={{ fontSize: '9px', color: '#FF5A20', fontWeight: 600 }}>+34%</span>
              </div>
            </div>
            <div style={{ display: 'flex', alignItems: 'flex-end', gap: '3px', height: '42px' }}>
              {chartBars.map((h, i) => (
                <div
                  key={i}
                  style={{
                    flex: 1,
                    height: `${h}%`,
                    borderRadius: '2px 2px 0 0',
                    background: i === chartBars.length - 1
                      ? 'linear-gradient(to top, #FF3C00, #FF5A20)'
                      : `rgba(255,60,0,${0.12 + i * 0.055})`,
                  }}
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Hinge */}
      <div
        style={{
          height: '4px',
          background: 'linear-gradient(to bottom, #252540, #1a1a30)',
          borderLeft: '1.5px solid rgba(255,255,255,0.07)',
          borderRight: '1.5px solid rgba(255,255,255,0.07)',
        }}
      />

      {/* Base */}
      <div
        style={{
          height: '20px',
          background: 'linear-gradient(to bottom, #1a1a30, #14142a)',
          borderRadius: '0 0 12px 12px',
          border: '1.5px solid rgba(255,255,255,0.06)',
          borderTop: 'none',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <div
          style={{
            width: '90px', height: '6px', borderRadius: '3px',
            background: 'rgba(255,255,255,0.05)',
          }}
        />
      </div>

      {/* Glow shadow */}
      <div
        aria-hidden="true"
        style={{
          position: 'absolute', bottom: '-24px',
          left: '15%', right: '15%', height: '36px',
          background: 'radial-gradient(ellipse, rgba(255,60,0,0.4) 0%, transparent 70%)',
          filter: 'blur(14px)',
          pointerEvents: 'none',
        }}
      />
    </motion.div>
  )
}
