import { motion } from 'framer-motion'
import { Check, ArrowUpRight } from 'lucide-react'
import { fadeUp, stagger } from '../../lib/motion'

const features = [
  'Sistema 100% personalizado para o seu fluxo',
  'Painel de controle intuitivo e moderno',
  'Dados centralizados em tempo real',
  'Automações que eliminam trabalho repetitivo',
  'Treinamento e suporte incluídos',
  'Escalável conforme seu negócio cresce',
]

export function Solution() {
  return (
    <section id="solucao" className="relative py-32 px-6 overflow-hidden">
      {/* Subtle primary glow — right side */}
      <div
        className="absolute right-0 top-1/2 -translate-y-1/2 w-[50vw] h-[60vh] pointer-events-none"
        style={{ background: 'radial-gradient(ellipse at right, rgba(255,60,0,0.08) 0%, transparent 65%)' }}
      />

      <div className="max-w-7xl mx-auto">
        {/* Top row — label + headline spanning full width */}
        <div className="mb-16">
          <motion.p
            initial={{ opacity: 0, x: -16 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-xs font-medium tracking-[4px] uppercase text-primary mb-5"
          >
            A solução
          </motion.p>

          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
            <div className="overflow-hidden max-w-2xl">
              <motion.h2
                initial={{ y: '100%', opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true, margin: '-40px 0px' }}
                transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                style={{
                  fontSize: 'clamp(30px, 4vw, 54px)',
                  fontWeight: 600,
                  letterSpacing: '-2.5px',
                  lineHeight: 1.1,
                  color: '#FFFFFF',
                }}
              >
                A Koder cria o sistema ideal para o seu negócio
              </motion.h2>
            </div>

            <motion.a
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              href="#cta"
              aria-label="Quero meu diagnóstico gratuito"
              className="group relative flex items-center gap-2 px-6 py-3 rounded-xl text-white font-bold text-sm flex-shrink-0 self-start lg:self-auto overflow-hidden"
              style={{
                background: 'linear-gradient(135deg, #FF3C00 0%, #FF5A20 100%)',
                boxShadow: '0 0 0 1px rgba(255,90,32,0.35), 0 4px 20px rgba(255,60,0,0.45), inset 0 1px 0 rgba(255,255,255,0.15)',
              }}
            >
              Diagnóstico gratuito
              <ArrowUpRight size={15} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-200" />
            </motion.a>
          </div>
        </div>

        {/* Two-column body */}
        <div className="grid lg:grid-cols-5 gap-12 lg:gap-16 items-start">
          {/* Left — feature list */}
          <motion.ul
            variants={stagger(0.07)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-50px 0px' }}
            className="lg:col-span-3 space-y-0"
          >
            {features.map((feature, i) => (
              <motion.li
                key={feature}
                variants={fadeUp}
                className="group flex items-center gap-4 py-4 border-b border-white/[0.06]"
              >
                <span className="text-muted/30 text-xs font-medium tracking-widest flex-shrink-0 w-6">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <span className="w-5 h-5 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors duration-200">
                  <Check size={10} className="text-primary" />
                </span>
                <span
                  className="text-off-white group-hover:text-primary-light transition-colors duration-200"
                  style={{ fontSize: '16px' }}
                >
                  {feature}
                </span>
              </motion.li>
            ))}
          </motion.ul>

          {/* Right — stats panel */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-2"
          >
            <div
              className="rounded-2xl p-6 border border-white/[0.07] space-y-6"
              style={{ background: 'linear-gradient(145deg, #161626 0%, #111120 100%)' }}
            >
              <p className="text-xs text-muted tracking-widest uppercase">
                Resultados — 1º mês
              </p>

              {[
                { label: 'Tempo economizado', value: '70%', bar: 70, color: '#FF3C00' },
                { label: 'Erros operacionais', value: '↓ 90%', bar: 90, color: '#4ade80' },
                { label: 'Satisfação da equipe', value: '98%', bar: 98, color: '#FF5A20' },
              ].map((stat, i) => (
                <div key={stat.label} className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-muted text-xs">{stat.label}</span>
                    <span className="font-semibold text-xs" style={{ color: stat.color }}>
                      {stat.value}
                    </span>
                  </div>
                  <div className="h-1 rounded-full bg-white/[0.05]">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${stat.bar}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1.2, delay: 0.2 + i * 0.1, ease: [0.22, 1, 0.36, 1] }}
                      className="h-full rounded-full"
                      style={{ background: stat.color }}
                    />
                  </div>
                </div>
              ))}

              {/* Divider quote */}
              <div className="pt-2 border-t border-white/[0.06]">
                <p className="text-muted/60 text-xs leading-relaxed italic">
                  "Reduzimos erros operacionais em 90% no primeiro mês."
                </p>
                <p className="text-muted/40 text-xs mt-1">— João S., CEO</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
