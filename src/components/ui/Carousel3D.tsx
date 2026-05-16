import { motion, useReducedMotion } from 'framer-motion'
import { BarChart3, Clock, Users, TrendingUp, Shield, Zap, PieChart, CheckCircle } from 'lucide-react'

const cards = [
  { icon: Clock,        label: 'Tempo economizado', value: '70%',    sub: 'por dia, por colaborador',  accent: '#7B6CF4', bar: 70  },
  { icon: Users,        label: 'Clientes ativos',   value: '1.284',  sub: '+12% este mês',             accent: '#4ade80', bar: 84  },
  { icon: TrendingUp,   label: 'Receita gerada',    value: 'R$48k',  sub: 'mês atual',                 accent: '#A89CF7', bar: 78  },
  { icon: Shield,       label: 'Erros reduzidos',   value: '↓ 90%',  sub: 'no primeiro mês',           accent: '#f59e0b', bar: 90  },
  { icon: BarChart3,    label: 'Relatórios',        value: 'Auto',   sub: '100% automáticos',          accent: '#60a5fa', bar: 100 },
  { icon: Zap,          label: 'Automações',        value: '24/7',   sub: 'sem intervenção',           accent: '#7B6CF4', bar: 100 },
  { icon: PieChart,     label: 'Satisfação',        value: '98%',    sub: 'dos clientes Koder',        accent: '#a78bfa', bar: 98  },
  { icon: CheckCircle,  label: 'Entregas no prazo', value: '100%',   sub: 'últimos 12 meses',          accent: '#34d399', bar: 100 },
]

const TOTAL  = cards.length
const RADIUS = 230
const CARD_W = 210
const CARD_H = 128

export function Carousel3D() {
  const prefersReducedMotion = useReducedMotion()

  return (
    <div
      className="relative flex items-center justify-center w-full"
      style={{ height: '460px', perspective: '1100px', perspectiveOrigin: '50% 42%' }}
    >
      {/* Fixed tilt — top leans toward viewer */}
      <div
        style={{
          width: 0,
          height: 0,
          position: 'relative',
          transformStyle: 'preserve-3d',
          transform: 'rotateX(-22deg)',
        }}
      >
        {/* Continuously rotating ring */}
        <motion.div
          animate={prefersReducedMotion ? {} : { rotateX: 360 }}
          transition={{ duration: 24, repeat: Infinity, ease: 'linear', repeatType: 'loop' }}
          style={{
            width: 0,
            height: 0,
            position: 'relative',
            transformStyle: 'preserve-3d',
          }}
        >
          {cards.map((card, i) => {
            const angle = (i / TOTAL) * 360
            const Icon  = card.icon

            return (
              <div
                key={i}
                style={{
                  position: 'absolute',
                  transform: `rotateX(${angle}deg) translateZ(${RADIUS}px)`,
                  transformStyle: 'preserve-3d',
                  width:      `${CARD_W}px`,
                  height:     `${CARD_H}px`,
                  marginLeft: `${-CARD_W / 2}px`,
                  marginTop:  `${-CARD_H / 2}px`,
                }}
              >
                <div
                  style={{
                    width: '100%',
                    height: '100%',
                    background: 'linear-gradient(145deg, #1a1a2e 0%, #131321 100%)',
                    border: '1px solid rgba(255,255,255,0.09)',
                    borderTop: '1px solid rgba(255,255,255,0.15)',
                    borderRadius: '18px',
                    padding: '18px',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                    boxShadow: '0 12px 40px rgba(0,0,0,0.5), inset 0 1px 0 rgba(255,255,255,0.06)',
                  }}
                >
                  {/* Header row */}
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <div
                      style={{
                        width: '28px',
                        height: '28px',
                        borderRadius: '8px',
                        background: `${card.accent}18`,
                        border: `1px solid ${card.accent}30`,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        flexShrink: 0,
                      }}
                    >
                      <Icon size={13} style={{ color: card.accent }} />
                    </div>
                    <span style={{ fontSize: '11px', color: '#9090A8', fontWeight: 500, letterSpacing: '0.3px' }}>
                      {card.label}
                    </span>
                  </div>

                  {/* Value */}
                  <div>
                    <div style={{ fontSize: '28px', fontWeight: 600, color: '#F0F0F8', letterSpacing: '-1.5px', lineHeight: 1, marginBottom: '4px' }}>
                      {card.value}
                    </div>
                    <div style={{ fontSize: '11px', color: '#9090A8' }}>{card.sub}</div>
                  </div>

                  {/* Progress bar */}
                  <div style={{ height: '3px', borderRadius: '2px', background: 'rgba(255,255,255,0.06)', overflow: 'hidden' }}>
                    <div style={{ height: '100%', width: `${card.bar}%`, borderRadius: '2px', background: `linear-gradient(to right, ${card.accent}80, ${card.accent})` }} />
                  </div>
                </div>
              </div>
            )
          })}
        </motion.div>
      </div>

      {/* Ambient glow */}
      <div
        style={{
          position: 'absolute',
          bottom: '8%',
          left: '50%',
          transform: 'translateX(-50%)',
          width: '55%',
          height: '80px',
          background: 'radial-gradient(ellipse, rgba(123,108,244,0.2) 0%, transparent 70%)',
          pointerEvents: 'none',
        }}
      />
    </div>
  )
}
