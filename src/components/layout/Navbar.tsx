import { motion, useScroll, useTransform } from 'framer-motion'
import { useState } from 'react'
import { Menu, X } from 'lucide-react'
import { Logo } from '../ui/Logo'
import { ThemeToggle } from '../ui/ThemeToggle'

const navLinks = [
  { label: 'Serviços', href: '#servicos' },
  { label: 'Projetos', href: '#projetos' },
  { label: 'Como funciona', href: '#como-funciona' },
  { label: 'Contato', href: '#contato' },
]

export function Navbar() {
  const { scrollY } = useScroll()
  const bgOpacity = useTransform(scrollY, [0, 60], [0, 1])
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <motion.header
      initial={{ opacity: 0, y: -16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className="fixed top-0 left-0 right-0 z-50"
    >
      <motion.div
        className="absolute inset-0 backdrop-blur-md"
        style={{ opacity: bgOpacity, background: 'var(--bg-navbar)' } as any}
      />
      <motion.div
        className="absolute bottom-0 left-0 right-0 h-px"
        style={{ background: 'var(--border-main)', opacity: bgOpacity }}
      />

      <nav className="relative max-w-7xl mx-auto px-6 lg:px-8 h-16 flex items-center justify-between">
        {/* Logo */}
        <a href="#" aria-label="Koder — início" className="flex-shrink-0">
          <Logo size={28} showWordmark />
        </a>

        {/* Center pill — absolute so it's truly centered */}
        <div className="hidden md:block absolute left-1/2 -translate-x-1/2">
          <ul className="liquid-glass flex items-center gap-1 rounded-xl px-2 py-1.5">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="flex items-center px-3 py-1.5 rounded-lg text-sm hover:bg-black/[0.06] dark:hover:bg-white/10 transition-all duration-200 font-medium whitespace-nowrap"
                  style={{ color: 'var(--nav-link)' }}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Right CTAs */}
        <div className="hidden md:flex items-center gap-3 flex-shrink-0">
          <ThemeToggle />
          <a
            href="#cta"
            aria-label="Falar com especialista"
            className="liquid-glass hidden xl:inline-flex text-sm font-medium px-4 py-2 rounded-full hover:bg-black/[0.04] dark:hover:bg-white/5 transition-colors duration-200"
            style={{ color: 'var(--nav-link)' }}
          >
            Falar com especialista
          </a>
          <a
            href="#cta"
            aria-label="Diagnóstico gratuito"
            className="bg-primary text-white text-sm font-semibold px-4 py-2 rounded-full hover:bg-primary/90 transition-colors duration-200"
          >
            Diagnóstico gratuito
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          className="md:hidden liquid-glass p-2 rounded-lg"
          style={{ color: 'var(--text-body)' }}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? 'Fechar menu' : 'Abrir menu'}
        >
          {menuOpen ? <X size={18} /> : <Menu size={18} />}
        </button>
      </nav>

      {/* Mobile menu */}
      {menuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          className="absolute top-[64px] left-4 right-4 z-30 md:hidden liquid-glass rounded-2xl p-4 flex flex-col gap-1"
          style={{ background: 'var(--bg-mobile-menu)' }}
        >
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="flex items-center justify-between w-full px-4 py-3 rounded-lg text-sm hover:bg-black/[0.06] dark:hover:bg-white/10 transition-all duration-200 font-medium"
              style={{ color: 'var(--nav-link)' }}
            >
              {link.label}
            </a>
          ))}
          <div className="flex gap-2 mt-2 pt-3" style={{ borderTop: '1px solid var(--border-subtle)' }}>
            <a
              href="#cta"
              onClick={() => setMenuOpen(false)}
              className="flex-1 liquid-glass text-sm font-medium px-4 py-2.5 rounded-full text-center hover:bg-black/[0.04] dark:hover:bg-white/5 transition-colors"
              style={{ color: 'var(--nav-link)' }}
            >
              Especialista
            </a>
            <a
              href="#cta"
              onClick={() => setMenuOpen(false)}
              className="flex-1 bg-primary text-white text-sm font-semibold px-4 py-2.5 rounded-full text-center hover:bg-primary/90 transition-colors"
            >
              Diagnóstico gratuito
            </a>
          </div>
        </motion.div>
      )}
    </motion.header>
  )
}
