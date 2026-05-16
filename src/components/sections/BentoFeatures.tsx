import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion'
import { useEffect, useRef, useState } from 'react'
import { Globe, BarChart3, Headphones } from 'lucide-react'
import { fadeUp, stagger } from '../../lib/motion'

function useAnimatedCounter(target: number, duration = 2) {
  const [count, setCount] = useState(0)
  const ref = useRef<HTMLDivElement>(null)
  const started = useRef(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true
          const startTime = performance.now()
          function update(currentTime: number) {
            const elapsed = (currentTime - startTime) / (duration * 1000)
            const progress = Math.min(elapsed, 1)
            const eased = 1 - Math.pow(1 - progress, 3)
            setCount(Math.round(eased * target))
            if (progress < 1) requestAnimationFrame(update)
          }
          requestAnimationFrame(update)
        }
      },
      { threshold: 0.5 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [target, duration])

  return { count, ref }
}

function GlowBentoCard({ children, className = '' }: { children: React.ReactNode; className?: string }) {
  const cardRef = useRef<HTMLDivElement>(null)
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)
  const springX = useSpring(mouseX, { stiffness: 300, damping: 30 })
  const springY = useSpring(mouseY, { stiffness: 300, damping: 30 })

  const background = useTransform(
    [springX, springY],
    ([x, y]: number[]) =>
      `radial-gradient(400px circle at ${x}px ${y}px, rgba(255,60,0,0.09), transparent 70%)`
  )

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={(e) => {
        const rect = cardRef.current?.getBoundingClientRect()
        if (rect) { mouseX.set(e.clientX - rect.left); mouseY.set(e.clientY - rect.top) }
      }}
      onMouseLeave={() => { mouseX.set(0); mouseY.set(0) }}
      whileHover={{ scale: 1.015 }}
      transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
      className={`relative overflow-hidden rounded-2xl border border-white/[0.07] ${className}`}
      style={{ background: 'linear-gradient(145deg, #161626 0%, #111120 100%)' }}
    >
      <motion.div style={{ background }} className="absolute inset-0 pointer-events-none z-0" />
      <div className="relative z-10 h-full">{children}</div>
    </motion.div>
  )
}

export function BentoFeatures() {
  const { count, ref } = useAnimatedCounter(70, 2)

  return (
    <section className="py-32 px-6">
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6 mb-14">
          <div>
            <motion.p
              initial={{ opacity: 0, x: -16 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-xs font-medium tracking-[4px] uppercase text-primary mb-4"
            >
              Funcionalidades
            </motion.p>
            <div className="overflow-hidden">
              <motion.h2
                initial={{ y: '100%', opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                style={{
                  fontSize: 'clamp(28px, 3.5vw, 50px)',
                  fontWeight: 600,
                  letterSpacing: '-2px',
                  lineHeight: 1.1,
                  color: '#FFFFFF',
                }}
              >
                Tudo que seu negócio precisa
              </motion.h2>
            </div>
          </div>
        </div>

        {/* Bento grid */}
        <motion.div
          variants={stagger(0.08)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px 0px' }}
          className="grid grid-cols-1 md:grid-cols-3 gap-4"
        >
          {/* Card 1 — Large, col-span-2 */}
          <motion.div variants={fadeUp} className="md:col-span-2">
            <GlowBentoCard className="p-8 min-h-[240px] flex flex-col justify-between">
              <div>
                <span
                  className="inline-block px-2.5 py-1 rounded-md text-xs font-medium tracking-wider uppercase mb-6"
                  style={{ background: 'rgba(255,60,0,0.12)', color: '#FF5A20' }}
                >
                  Eficiência
                </span>
                <div ref={ref} className="flex items-baseline gap-3 mb-3">
                  <span
                    style={{
                      fontSize: 'clamp(56px, 7vw, 88px)',
                      fontWeight: 600,
                      letterSpacing: '-4px',
                      color: '#FFFFFF',
                      lineHeight: 1,
                    }}
                  >
                    {count}%
                  </span>
                </div>
                <p className="text-muted" style={{ fontSize: '15px', lineHeight: 1.6 }}>
                  de tempo economizado com automações inteligentes.
                </p>
              </div>

              {/* Mini bar chart */}
              <div className="flex items-end gap-1 h-10 mt-6 opacity-60">
                {[30, 50, 40, 65, 45, 80, 60, 90, 70, 100].map((h, i) => (
                  <motion.div
                    key={i}
                    initial={{ height: 0 }}
                    whileInView={{ height: `${h}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7, delay: i * 0.04, ease: [0.22, 1, 0.36, 1] }}
                    className="flex-1 rounded-sm"
                    style={{ background: i >= 7 ? '#FF3C00' : 'rgba(255,60,0,0.18)' }}
                  />
                ))}
              </div>
            </GlowBentoCard>
          </motion.div>

          {/* Card 2 */}
          <motion.div variants={fadeUp}>
            <GlowBentoCard className="p-6 min-h-[240px] flex flex-col">
              <div className="w-9 h-9 rounded-xl border border-primary/20 bg-primary/[0.08] flex items-center justify-center mb-auto">
                <BarChart3 size={18} className="text-primary" />
              </div>
              <div className="mt-8">
                <p
                  className="text-off-white font-semibold mb-1.5"
                  style={{ fontSize: '18px', letterSpacing: '-0.5px' }}
                >
                  Tudo em um lugar
                </p>
                <p className="text-muted text-sm" style={{ lineHeight: 1.65 }}>
                  Dados centralizados. Sem arquivos espalhados.
                </p>
              </div>
            </GlowBentoCard>
          </motion.div>

          {/* Card 3 */}
          <motion.div variants={fadeUp}>
            <GlowBentoCard className="p-6 min-h-[210px] flex flex-col">
              <div className="w-9 h-9 rounded-xl border border-primary/20 bg-primary/[0.08] flex items-center justify-center mb-auto">
                <Globe size={18} className="text-primary" />
              </div>
              <div className="mt-8">
                <p
                  className="text-off-white font-semibold mb-1.5"
                  style={{ fontSize: '18px', letterSpacing: '-0.5px' }}
                >
                  Acesso de qualquer lugar
                </p>
                <p className="text-muted text-sm" style={{ lineHeight: 1.65 }}>
                  Web, tablet ou mobile.
                </p>
              </div>
            </GlowBentoCard>
          </motion.div>

          {/* Card 4 — Large col-span-2 */}
          <motion.div variants={fadeUp} className="md:col-span-2">
            <GlowBentoCard className="p-8 min-h-[210px] flex flex-col justify-between">
              <div>
                <p
                  className="text-off-white font-semibold mb-1.5"
                  style={{ fontSize: '18px', letterSpacing: '-0.5px' }}
                >
                  Relatórios automáticos
                </p>
                <p className="text-muted text-sm" style={{ lineHeight: 1.65 }}>
                  Dashboards em tempo real, sem precisar montar nada manualmente.
                </p>
              </div>

              {/* Horizontal progress bars */}
              <div className="mt-6 space-y-3">
                {[
                  { label: 'Vendas', val: 88 },
                  { label: 'Clientes', val: 72 },
                  { label: 'Retorno', val: 95 },
                ].map(({ label, val }, i) => (
                  <div key={label} className="flex items-center gap-3">
                    <span className="text-muted text-xs w-14">{label}</span>
                    <div className="flex-1 h-1 rounded-full bg-white/[0.05]">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${val}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
                        className="h-full rounded-full"
                        style={{ background: 'linear-gradient(to right, #FF3C00, #FF5A20)' }}
                      />
                    </div>
                    <span className="text-primary-light text-xs font-medium w-8 text-right">{val}%</span>
                  </div>
                ))}
              </div>
            </GlowBentoCard>
          </motion.div>

          {/* Card 5 — Full width */}
          <motion.div variants={fadeUp} className="md:col-span-3">
            <GlowBentoCard className="p-8">
              <div className="flex flex-col lg:flex-row lg:items-center gap-10">
                <div className="lg:w-56 flex-shrink-0">
                  <div className="w-9 h-9 rounded-xl border border-primary/20 bg-primary/[0.08] flex items-center justify-center mb-4">
                    <Headphones size={18} className="text-primary" />
                  </div>
                  <p
                    className="text-off-white font-semibold mb-1.5"
                    style={{ fontSize: '18px', letterSpacing: '-0.5px' }}
                  >
                    Suporte dedicado
                  </p>
                  <p className="text-muted text-sm">Do diagnóstico à implantação, você nunca fica sozinho.</p>
                </div>

                {/* Timeline */}
                <div className="flex-1 flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-0">
                  {['Diagnóstico', 'Desenvolvimento', 'Treinamento', 'Suporte contínuo'].map((step, i) => (
                    <div key={step} className="flex sm:flex-col sm:flex-1 items-center sm:items-start gap-3 sm:gap-2">
                      <div className="flex items-center gap-3 sm:gap-0">
                        <motion.div
                          initial={{ scale: 0, opacity: 0 }}
                          whileInView={{ scale: 1, opacity: 1 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.4, delay: i * 0.12, ease: [0.22, 1, 0.36, 1] }}
                          className="w-7 h-7 rounded-full border border-primary/40 bg-primary/10 flex items-center justify-center text-primary-light text-xs font-semibold flex-shrink-0"
                        >
                          {i + 1}
                        </motion.div>
                        {i < 3 && (
                          <motion.div
                            initial={{ scaleX: 0 }}
                            whileInView={{ scaleX: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.2 + i * 0.12, ease: [0.22, 1, 0.36, 1] }}
                            className="hidden sm:block h-px bg-primary/20 origin-left"
                            style={{ width: '100%', marginLeft: '8px', marginRight: '8px' }}
                          />
                        )}
                      </div>
                      <p className="text-muted text-xs sm:mt-1">{step}</p>
                    </div>
                  ))}
                </div>
              </div>
            </GlowBentoCard>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
