import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import { Search, Code2, Rocket } from 'lucide-react'
import { fadeUp, stagger } from '../../lib/motion'

const steps = [
  {
    icon: Search,
    number: '01',
    title: 'Diagnóstico gratuito',
    description: 'Entendemos seu processo e identificamos gargalos. Sem compromisso, sem custo.',
  },
  {
    icon: Code2,
    number: '02',
    title: 'Desenvolvimento ágil',
    description: 'Sprints com sua aprovação em cada etapa. Você acompanha o progresso em tempo real.',
  },
  {
    icon: Rocket,
    number: '03',
    title: 'Entrega e suporte',
    description: 'Implantamos, treinamos sua equipe e ficamos ao lado para garantir o sucesso.',
  },
]

export function HowItWorks() {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start 0.85', 'center center'],
  })
  const pathLength = useTransform(scrollYProgress, [0, 1], [0, 1])

  return (
    <section id="como-funciona" className="relative py-32 px-6 overflow-hidden">
      {/* Background number */}
      <div
        className="absolute -left-4 top-1/2 -translate-y-1/2 select-none pointer-events-none hidden lg:block"
        style={{
          fontSize: 'clamp(200px, 25vw, 380px)',
          fontWeight: 700,
          letterSpacing: '-0.06em',
          lineHeight: 1,
          color: 'transparent',
          WebkitTextStroke: '1px rgba(255,255,255,0.025)',
        }}
        aria-hidden="true"
      >
        02
      </div>

      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="max-w-2xl mb-20">
          <motion.p
            initial={{ opacity: 0, x: -16 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-xs font-medium tracking-[4px] uppercase text-primary mb-5"
          >
            Processo
          </motion.p>
          <div className="overflow-hidden">
            <motion.h2
              initial={{ y: '100%', opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true, margin: '-40px 0px' }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              style={{
                fontSize: 'clamp(30px, 4.5vw, 56px)',
                fontWeight: 600,
                letterSpacing: '-2.5px',
                lineHeight: 1.1,
                color: '#FFFFFF',
              }}
            >
              Do diagnóstico ao sistema em produção
            </motion.h2>
          </div>
        </div>

        {/* Steps */}
        <div ref={containerRef} className="relative">
          {/* Animated connector (desktop) */}
          <div className="absolute top-8 left-8 right-8 hidden lg:block h-px overflow-hidden">
            <svg
              width="100%"
              height="2"
              viewBox="0 0 100 2"
              preserveAspectRatio="none"
              className="absolute inset-0"
            >
              <line x1="0" y1="1" x2="100" y2="1" stroke="rgba(255,255,255,0.05)" strokeWidth="2" />
              <motion.line
                x1="0"
                y1="1"
                x2="100"
                y2="1"
                stroke="#FF3C00"
                strokeWidth="2"
                strokeLinecap="round"
                style={{ pathLength, opacity: 0.6 }}
              />
            </svg>
          </div>

          <motion.div
            variants={stagger(0.18)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-80px 0px' }}
            className="grid lg:grid-cols-3 gap-12 lg:gap-8"
          >
            {steps.map((step) => {
              const Icon = step.icon
              return (
                <motion.div key={step.number} variants={fadeUp} className="relative">
                  {/* Icon + number */}
                  <div className="flex items-center gap-4 mb-6">
                    <div
                      className="w-14 h-14 rounded-2xl border border-white/[0.07] flex items-center justify-center flex-shrink-0"
                      style={{ background: 'linear-gradient(145deg, #161626 0%, #111120 100%)' }}
                    >
                      <Icon size={22} className="text-primary" />
                    </div>
                    <span
                      className="text-muted/25 font-semibold"
                      style={{ fontSize: '13px', letterSpacing: '3px' }}
                    >
                      {step.number}
                    </span>
                  </div>

                  <h3
                    className="text-off-white font-semibold mb-3"
                    style={{ fontSize: '20px', letterSpacing: '-0.5px' }}
                  >
                    {step.title}
                  </h3>
                  <p className="text-muted text-sm" style={{ lineHeight: 1.75 }}>
                    {step.description}
                  </p>
                </motion.div>
              )
            })}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
