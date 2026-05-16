import { motion } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'

export function CTA() {
  return (
    <section id="cta" className="relative py-32 px-6 overflow-hidden">
      {/* Full-bleed primary gradient */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse 90% 70% at 50% 50%, rgba(255,60,0,0.12) 0%, transparent 70%)',
        }}
      />

      {/* Giant ghost text */}
      <div
        className="absolute inset-0 flex items-center justify-center select-none pointer-events-none overflow-hidden"
        aria-hidden="true"
      >
        <span
          style={{
            fontSize: 'clamp(120px, 18vw, 260px)',
            fontWeight: 700,
            letterSpacing: '-0.06em',
            color: 'transparent',
            WebkitTextStroke: '1px rgba(255,60,0,0.05)',
            whiteSpace: 'nowrap',
          }}
        >
          KODER
        </span>
      </div>

      <div className="relative max-w-7xl mx-auto">
        <div className="max-w-3xl">
          <motion.p
            initial={{ opacity: 0, x: -16 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-xs font-medium tracking-[4px] uppercase text-primary mb-6"
          >
            Próximo passo
          </motion.p>

          <div className="overflow-hidden mb-6">
            <motion.h2
              initial={{ y: '100%', opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              style={{
                fontSize: 'clamp(36px, 5.5vw, 72px)',
                fontWeight: 600,
                letterSpacing: '-3px',
                lineHeight: 1.05,
                color: '#FFFFFF',
              }}
            >
              Pronto para parar de depender de planilhas?
            </motion.h2>
          </div>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="text-muted mb-10"
            style={{ fontSize: '17px', lineHeight: 1.75, maxWidth: '480px' }}
          >
            Agende um diagnóstico gratuito e veja o que um sistema sob medida pode fazer pelo seu negócio.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-col sm:flex-row items-start gap-4"
          >
            <motion.a
              href="mailto:koder.sistemas@gmail.com"
              aria-label="Quero meu diagnóstico gratuito"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              transition={{ duration: 0.2, ease: [0.22, 1, 0.36, 1] }}
              className="group relative inline-flex items-center gap-2.5 px-8 py-4 rounded-xl text-white font-bold text-base overflow-hidden"
              style={{
                background: 'linear-gradient(135deg, #FF3C00 0%, #FF5A20 100%)',
                boxShadow: '0 0 0 1px rgba(255,90,32,0.4), 0 4px 24px rgba(255,60,0,0.55), 0 12px 48px rgba(255,60,0,0.25), inset 0 1px 0 rgba(255,255,255,0.18)',
              }}
            >
              {/* Shimmer sweep */}
              <motion.span
                aria-hidden="true"
                className="absolute inset-0 pointer-events-none"
                style={{
                  background: 'linear-gradient(105deg, transparent 25%, rgba(255,255,255,0.18) 50%, transparent 75%)',
                }}
                animate={{ x: ['-100%', '200%'] }}
                transition={{ duration: 1.8, repeat: Infinity, repeatDelay: 2.2, ease: 'linear' }}
              />
              <span className="relative z-10 flex items-center gap-2.5">
                Quero meu diagnóstico gratuito
                <ArrowUpRight
                  size={18}
                  className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-200"
                />
              </span>
            </motion.a>

            <div className="flex items-center gap-3 py-4">
              <div className="w-px h-6 bg-white/10" />
              <p className="text-muted text-sm">Sem compromisso. Resposta em 24h.</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
