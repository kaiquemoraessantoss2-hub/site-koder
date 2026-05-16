import { motion } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'
import { VortexOrb } from '../ui/VortexOrb'

export function Hero() {
  

  return (
    <section className="relative min-h-screen overflow-hidden flex items-center" style={{ background: '#010C1E' }}>

      {/* Dot grid */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.035) 1px, transparent 1px)',
          backgroundSize: '36px 36px',
        }}
      />

      {/* Left atmospheric glow */}
      <div
        className="absolute pointer-events-none"
        style={{
          top: '5%', left: '-20%',
          width: '65vw', height: '90vh',
          background: 'radial-gradient(ellipse, rgba(255,60,0,0.10) 0%, transparent 65%)',
        }}
      />

      {/* Right glow (where the orb sits) */}
      <div
        className="absolute pointer-events-none"
        style={{
          top: '15%', right: '-15%',
          width: '55vw', height: '75vh',
          background: 'radial-gradient(ellipse, rgba(255,60,0,0.13) 0%, transparent 65%)',
        }}
      />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 w-full flex flex-col lg:flex-row items-center gap-12 lg:gap-8 pt-28 pb-16">

        {/* ── LEFT — text ── */}
        <div className="flex-1 max-w-xl">

          {/* Label */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="flex items-center gap-3 mb-8"
          >
            <motion.div
              animate={{ y: [-4, 4, -4] }}
              transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
            >
              <svg width="32" height="32" viewBox="0 0 90 90" aria-hidden="true">
                <rect width="90" height="90" rx="18" fill="#010C1E" />
                <rect width="90" height="90" rx="18" fill="none" stroke="rgba(255,60,0,0.3)" strokeWidth="1.5" />
                <polygon points="45,10 80,47 45,47" fill="#FFFFFF" />
                <polygon points="45,51 80,51 45,80" fill="#FF3C00" />
              </svg>
            </motion.div>
            <span className="text-xs tracking-[4px] uppercase font-medium" style={{ color: '#555555' }}>
              Koder — development agency
            </span>
          </motion.div>

          {/* H1 */}
          <div className="mb-6">
            {[
              { text: 'Sua empresa', delay: 0.05 },
              { text: 'ainda vive de', delay: 0.15 },
              { text: 'planilhas?', delay: 0.25, accent: true },
            ].map(({ text, delay, accent }) => (
              <div key={text} className="overflow-hidden">
                <motion.p
                  initial={{ y: '100%', opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }}
                  style={{
                    fontSize: 'clamp(42px, 6vw, 80px)',
                    fontWeight: 600,
                    letterSpacing: '-3px',
                    lineHeight: 1.05,
                    color: accent ? '#FF5A20' : '#FFFFFF',
                    display: 'block',
                  }}
                >
                  {text}
                </motion.p>
              </div>
            ))}
          </div>

          {/* Sub */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.45, ease: [0.22, 1, 0.36, 1] }}
            className="flex gap-4 items-start mb-10"
          >
            <div className="w-px h-14 flex-shrink-0 mt-1" style={{ background: 'rgba(255,60,0,0.30)' }} />
            <p style={{ fontSize: '16px', lineHeight: 1.75, color: '#555555' }}>
              A Koder transforma processos manuais em sistemas inteligentes,
              feitos sob medida para o seu negócio.
            </p>
          </motion.div>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-wrap gap-3 items-center"
          >
            {/* Primary — solid gradient */}
            <motion.a
              href="#cta"
              aria-label="Quero meu sistema"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              transition={{ duration: 0.2 }}
              className="group relative inline-flex items-center gap-2 px-6 py-3.5 rounded-full text-white font-bold text-sm overflow-hidden"
              style={{
                background: 'linear-gradient(135deg, #FF3C00 0%, #FF5A20 100%)',
                boxShadow: '0 0 0 1px rgba(255,90,32,0.35), 0 4px 24px rgba(255,60,0,0.50), inset 0 1px 0 rgba(255,255,255,0.18)',
              }}
            >
              <motion.span
                aria-hidden="true"
                className="absolute inset-0 pointer-events-none"
                style={{ background: 'linear-gradient(105deg, transparent 25%, rgba(255,255,255,0.16) 50%, transparent 75%)' }}
                animate={{ x: ['-100%', '200%'] }}
                transition={{ duration: 1.8, repeat: Infinity, repeatDelay: 2.5, ease: 'linear' }}
              />
              <span className="relative z-10 flex items-center gap-2">
                Quero meu sistema
                <ArrowUpRight size={15} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-200" />
              </span>
            </motion.a>

            {/* Secondary — liquid glass */}
            <a
              href="#como-funciona"
              aria-label="Ver como funciona"
              className="liquid-glass inline-flex items-center gap-2 px-6 py-3.5 rounded-full text-white/75 hover:text-white font-medium text-sm transition-colors duration-200"
            >
              Ver como funciona
            </a>
          </motion.div>

          {/* Social proof */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.85 }}
            className="flex items-center gap-4 mt-10"
          >
            <div className="flex -space-x-2">
              {['C', 'A', 'J', 'F'].map((letter) => (
                <div
                  key={letter}
                  className="w-7 h-7 rounded-full border-2 flex items-center justify-center text-xs font-medium"
                  style={{
                    borderColor: '#010C1E',
                    background: 'rgba(255,60,0,0.25)',
                    color: '#FF5A20',
                  }}
                >
                  {letter}
                </div>
              ))}
            </div>
            <p className="text-xs" style={{ color: '#555555' }}>
              <span className="text-white font-semibold">+40 empresas</span>{' '}
              já usam nossos sistemas
            </p>
          </motion.div>
        </div>

        {/* ── RIGHT — Glass Orb ── */}
        <motion.div
          initial={{ opacity: 0, scale: 0.88 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.1, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
          className="flex-1 flex items-center justify-center"
          style={{ minHeight: '480px' }}
        >
          <div className="relative" style={{ width: 440, height: 440 }}>

            {/* Soft atmospheric glow behind everything */}
            <div
              className="absolute pointer-events-none"
              style={{
                inset: '-60px',
                borderRadius: '50%',
                background: 'radial-gradient(ellipse, rgba(255,60,0,0.22) 0%, transparent 70%)',
                filter: 'blur(24px)',
              }}
            />

            {/* Slow outer ring */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 40, repeat: Infinity, ease: 'linear' }}
              className="absolute rounded-full"
              style={{
                inset: '-28px',
                border: '1px solid rgba(255,255,255,0.05)',
                borderTopColor: 'rgba(255,60,0,0.15)',
              }}
            />

            {/* Counter ring */}
            <motion.div
              animate={{ rotate: -360 }}
              transition={{ duration: 22, repeat: Infinity, ease: 'linear' }}
              className="absolute rounded-full"
              style={{
                inset: '-12px',
                border: '1px dashed rgba(255,60,0,0.14)',
              }}
            />

            {/* ── Glass sphere ── */}
            <div
              className="absolute inset-0 rounded-full"
              style={{ overflow: 'hidden' }}
            >
              {/* VortexOrb fills sphere — clipped by rounded-full */}
              <div className="absolute inset-0 flex items-center justify-center">
                <VortexOrb size={440} />
              </div>

              {/* Frosted glass overlay (blurs VortexOrb) */}
              <div
                className="liquid-glass absolute inset-0 rounded-full"
                style={{
                  background: 'rgba(1,12,30,0.18)',
                  boxShadow: '0 0 80px rgba(255,60,0,0.10)',
                }}
              />

              {/* Specular highlight — top-left */}
              <div
                className="absolute inset-0 rounded-full pointer-events-none"
                style={{
                  background: 'radial-gradient(ellipse 55% 35% at 32% 22%, rgba(255,255,255,0.10) 0%, transparent 70%)',
                }}
              />

              {/* Bottom inner reflection */}
              <div
                className="absolute inset-0 rounded-full pointer-events-none"
                style={{
                  background: 'radial-gradient(ellipse 60% 25% at 50% 90%, rgba(255,60,0,0.12) 0%, transparent 70%)',
                }}
              />
            </div>


            {/* Thin outer glass ring border */}
            <div
              className="absolute inset-0 rounded-full pointer-events-none"
              style={{
                boxShadow: '0 0 0 1px rgba(255,255,255,0.07), 0 0 40px rgba(255,60,0,0.08)',
              }}
            />
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.3, duration: 0.8 }}
        className="absolute bottom-10 left-8 hidden xl:flex flex-col items-center gap-2"
      >
        <span className="text-xs tracking-widest uppercase" style={{ color: 'rgba(85,85,85,0.6)' }}>Scroll</span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          className="w-px h-8 mx-auto"
          style={{ background: 'linear-gradient(to bottom, rgba(255,60,0,0.45), transparent)' }}
        />
      </motion.div>
    </section>
  )
}
