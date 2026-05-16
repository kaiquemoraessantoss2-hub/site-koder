import { motion } from 'framer-motion'
import { Quote } from 'lucide-react'
import { Marquee } from '../ui/Marquee'

const testimonials = [
  {
    quote: 'Antes levávamos 3h por dia só atualizando planilhas. Com a Koder, isso virou automático.',
    author: 'Carlos M.',
    role: 'Dir. Operacional',
  },
  {
    quote: 'Finalmente um sistema que minha equipe realmente usa.',
    author: 'Ana P.',
    role: 'Gestora',
  },
  {
    quote: 'Reduzimos erros operacionais em 90% no primeiro mês.',
    author: 'João S.',
    role: 'CEO',
  },
  {
    quote: 'O processo foi muito mais rápido do que eu esperava.',
    author: 'Fernanda L.',
    role: 'Coordenadora',
  },
  {
    quote: 'Nosso time ganhou horas no dia. Vale cada centavo investido.',
    author: 'Rafael B.',
    role: 'Gerente de TI',
  },
  {
    quote: 'A integração com nossos processos existentes foi perfeita.',
    author: 'Mariana C.',
    role: 'Diretora Financeira',
  },
]

function TestimonialCard({ quote, author, role }: { quote: string; author: string; role: string }) {
  return (
    <div
      className="w-80 flex-shrink-0 rounded-2xl p-6 border border-white/[0.07] bg-navy"
    >
      <Quote size={20} className="text-primary mb-3 opacity-60" />
      <p className="text-off-white text-sm mb-4" style={{ lineHeight: 1.7 }}>"{quote}"</p>
      <div className="flex items-center gap-3">
        <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center text-primary-light text-xs font-semibold">
          {author.charAt(0)}
        </div>
        <div>
          <p className="text-off-white text-sm font-medium">{author}</p>
          <p className="text-muted text-xs">{role}</p>
        </div>
      </div>
    </div>
  )
}

export function Testimonials() {
  return (
    <section className="py-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 mb-12 text-center">
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-xs font-medium tracking-[3px] uppercase text-primary mb-4"
        >
          Depoimentos
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          className="text-off-white font-semibold"
          style={{ fontSize: 'clamp(28px, 4vw, 44px)', letterSpacing: '-1.5px' }}
        >
          O que nossos clientes dizem
        </motion.h2>
      </div>

      <Marquee speed={50}>
        {testimonials.map((t) => (
          <TestimonialCard key={t.author} {...t} />
        ))}
      </Marquee>
    </section>
  )
}
