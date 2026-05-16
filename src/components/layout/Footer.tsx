import { Instagram, MessageCircle } from 'lucide-react'
import { Logo } from '../ui/Logo'

export function Footer() {
  return (
    <footer className="border-t border-white/[0.07] bg-obsidian">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-12">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
          <div>
            <Logo size={36} showWordmark />
            <p className="mt-2 text-muted text-sm">development agency</p>
          </div>

          <nav className="flex flex-wrap gap-6">
            {['Sobre', 'Serviços', 'Contato'].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-muted hover:text-off-white text-sm transition-colors duration-200"
              >
                {item}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-4">
            <a
              href="https://instagram.com"
              aria-label="Instagram"
              className="text-muted hover:text-primary-light transition-colors duration-200"
            >
              <Instagram size={20} />
            </a>
            <a
              href="https://wa.me/"
              aria-label="WhatsApp"
              className="text-muted hover:text-primary-light transition-colors duration-200"
            >
              <MessageCircle size={20} />
            </a>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-white/[0.07]">
          <p className="text-muted text-sm">© 2025 Koder. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  )
}
