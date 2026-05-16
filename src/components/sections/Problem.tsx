import { motion } from 'framer-motion'
import { Clock, Database, AlertTriangle } from 'lucide-react'
import { fadeUp } from '../../lib/motion'

const problems = [
  {
    icon: Clock,
    number: '01',
    title: 'Tempo perdido',
    description: 'Horas gastas atualizando células manualmente, todo dia, sem nenhuma automação.',
  },
  {
    icon: Database,
    number: '02',
    title: 'Dados desorganizados',
    description: 'Informações espalhadas em arquivos diferentes, sem padrão, sem histórico confiável.',
  },
  {
    icon: AlertTriangle,
    number: '03',
    title: 'Erros humanos',
    description: 'Um campo errado pode custar caro. Planilhas não validam, não alertam, não protegem.',
  },
]

export function Problem() {
  return (
    <section id="problema" className="relative py-32 px-6 overflow-hidden">
      {/* Background number — editorial element */}
      <div
        className="absolute -right-8 top-1/2 -translate-y-1/2 select-none pointer-events-none hidden lg:block"
        style={{
          fontSize: 'clamp(200px, 28vw, 420px)',
          fontWeight: 700,
          letterSpacing: '-0.06em',
          lineHeight: 1,
          color: 'transparent',
          WebkitTextStroke: '1px rgba(255,255,255,0.03)',
        }}
        aria-hidden="true"
      >
        01
      </div>

      <div className="max-w-7xl mx-auto">
        {/* Header — left aligned, not centered */}
        <div className="max-w-2xl mb-20">
          <motion.p
            initial={{ opacity: 0, x: -16 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-xs font-medium tracking-[4px] uppercase text-primary mb-5"
          >
            O problema
          </motion.p>

          <div className="overflow-hidden">
            <motion.h2
              initial={{ y: '100%', opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true, margin: '-40px 0px' }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              style={{
                fontSize: 'clamp(32px, 4.5vw, 60px)',
                fontWeight: 600,
                letterSpacing: '-2.5px',
                lineHeight: 1.1,
                color: '#FFFFFF',
              }}
            >
              Planilhas travam o crescimento da sua empresa
            </motion.h2>
          </div>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="mt-5 text-muted"
            style={{ fontSize: '17px', lineHeight: 1.75 }}
          >
            Você sabe que dá pra fazer melhor. Mas onde começa?
          </motion.p>
        </div>

        {/* Cards — horizontal rule style, not grid boxes */}
        <div className="space-y-0">
          {problems.map((problem, i) => {
            const Icon = problem.icon
            return (
              <motion.div
                key={problem.number}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: '-40px 0px' }}
                transition={{ delay: i * 0.1 }}
                className="group flex items-start gap-8 py-8 border-t border-white/[0.07] cursor-default"
                whileHover={{ x: 6 }}
              >
                {/* Number */}
                <span
                  className="text-muted/30 font-semibold flex-shrink-0 hidden sm:block"
                  style={{ fontSize: '13px', letterSpacing: '2px', marginTop: '2px' }}
                >
                  {problem.number}
                </span>

                {/* Icon */}
                <div className="w-9 h-9 rounded-lg bg-primary/[0.08] border border-primary/[0.12] flex items-center justify-center flex-shrink-0 group-hover:bg-primary/15 transition-colors duration-300">
                  <Icon size={16} className="text-primary" />
                </div>

                {/* Text */}
                <div className="flex-1 flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3">
                  <h3
                    className="text-off-white font-semibold group-hover:text-primary-light transition-colors duration-300"
                    style={{ fontSize: '20px', letterSpacing: '-0.5px' }}
                  >
                    {problem.title}
                  </h3>
                  <p
                    className="text-muted sm:max-w-md sm:text-right"
                    style={{ fontSize: '15px', lineHeight: 1.7 }}
                  >
                    {problem.description}
                  </p>
                </div>

                {/* Arrow hint */}
                <span className="text-primary/0 group-hover:text-primary/60 transition-all duration-300 flex-shrink-0 mt-1 text-lg">
                  →
                </span>
              </motion.div>
            )
          })}
          {/* Bottom rule */}
          <div className="border-t border-white/[0.07]" />
        </div>
      </div>
    </section>
  )
}
