import { motion } from 'framer-motion'
import { useState } from 'react'
import { Mail, MessageSquare, Send, CheckCircle, Loader2 } from 'lucide-react'
import { fadeUp, stagger } from '../../lib/motion'

const WA_NUMBER = '5511980937334'
const EMAIL = 'koder.sistemas@gmail.com'
const WEB3FORMS_KEY = 'b099cc30-c131-40a4-841e-c5c53d88e9bc'

export function Contact() {
  const [sent, setSent] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const [form, setForm] = useState({ nome: '', email: '', telefone: '', mensagem: '' })

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }))
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setLoading(true)
    setError('')

    try {
      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          access_key: WEB3FORMS_KEY,
          subject: `Contato via site — ${form.nome}`,
          name: form.nome,
          email: form.email,
          phone: form.telefone,
          message: form.mensagem,
          from_name: 'Koder Site',
        }),
      })
      const data = await res.json()
      if (data.success) {
        setSent(true)
        setForm({ nome: '', email: '', telefone: '', mensagem: '' })
      } else {
        setError('Erro ao enviar. Tente pelo WhatsApp.')
      }
    } catch {
      setError('Sem conexão. Tente pelo WhatsApp.')
    } finally {
      setLoading(false)
    }
  }

  const waLink = `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent('Olá! Gostaria de saber mais sobre os sistemas da Koder.')}`

  return (
    <section id="contato" className="relative py-32 px-6 overflow-hidden">
      {/* Glow */}
      <div
        className="absolute pointer-events-none"
        style={{
          top: '20%', left: '50%', transform: 'translateX(-50%)',
          width: '60vw', height: '60vh',
          background: 'radial-gradient(ellipse, rgba(255,60,0,0.07) 0%, transparent 70%)',
        }}
      />

      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="max-w-2xl mb-16">
          <motion.p
            initial={{ opacity: 0, x: -16 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-xs font-medium tracking-[4px] uppercase mb-5"
            style={{ color: '#FF3C00' }}
          >
            Contato
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
              Vamos conversar sobre o seu negócio
            </motion.h2>
          </div>
        </div>

        <div className="grid lg:grid-cols-5 gap-12 lg:gap-16">

          {/* LEFT — info + quick contacts */}
          <motion.div
            variants={stagger(0.1)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="lg:col-span-2 space-y-8"
          >
            <motion.p
              variants={fadeUp}
              style={{ fontSize: '16px', lineHeight: 1.75, color: '#555555' }}
            >
              Preencha o formulário ou entre em contato diretamente pelos canais abaixo.
              Respondemos em até 24h.
            </motion.p>

            {/* WhatsApp card */}
            <motion.a
              variants={fadeUp}
              href={waLink}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Conversar no WhatsApp"
              className="flex items-start gap-4 p-5 rounded-2xl border transition-all duration-200 group"
              style={{
                background: 'linear-gradient(145deg, rgba(37,211,102,0.05) 0%, transparent 100%)',
                borderColor: 'rgba(37,211,102,0.15)',
              }}
              whileHover={{ borderColor: 'rgba(37,211,102,0.35)' } as any}
            >
              <div
                className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                style={{ background: 'rgba(37,211,102,0.12)', border: '1px solid rgba(37,211,102,0.2)' }}
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="#25D366" aria-hidden="true">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
              </div>
              <div>
                <p className="text-white font-semibold text-sm mb-0.5">WhatsApp</p>
                <p className="text-sm group-hover:text-white transition-colors duration-200" style={{ color: '#555555' }}>
                  +55 (11) 98093-7334
                </p>
              </div>
            </motion.a>

            {/* Email card */}
            <motion.a
              variants={fadeUp}
              href={`mailto:${EMAIL}`}
              aria-label="Enviar email"
              className="flex items-start gap-4 p-5 rounded-2xl border transition-all duration-200 group"
              style={{
                background: 'linear-gradient(145deg, rgba(255,60,0,0.04) 0%, transparent 100%)',
                borderColor: 'rgba(255,60,0,0.12)',
              }}
              whileHover={{ borderColor: 'rgba(255,60,0,0.30)' } as any}
            >
              <div
                className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                style={{ background: 'rgba(255,60,0,0.10)', border: '1px solid rgba(255,60,0,0.18)' }}
              >
                <Mail size={18} style={{ color: '#FF3C00' }} />
              </div>
              <div>
                <p className="text-white font-semibold text-sm mb-0.5">E-mail</p>
                <p className="text-sm group-hover:text-white transition-colors duration-200 break-all" style={{ color: '#555555' }}>
                  {EMAIL}
                </p>
              </div>
            </motion.a>

            {/* Response badge */}
            <motion.div
              variants={fadeUp}
              className="flex items-center gap-3 px-4 py-3 rounded-xl"
              style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.06)' }}
            >
              <MessageSquare size={15} style={{ color: '#FF5A20', flexShrink: 0 }} />
              <p className="text-xs" style={{ color: '#555555' }}>
                Resposta garantida em até <span className="text-white font-semibold">24 horas</span> em dias úteis.
              </p>
            </motion.div>
          </motion.div>

          {/* RIGHT — form */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-3"
          >
            {sent ? (
              <div
                className="h-full min-h-[380px] flex flex-col items-center justify-center gap-4 rounded-2xl border"
                style={{
                  background: 'linear-gradient(145deg, #161626 0%, #111120 100%)',
                  borderColor: 'rgba(255,255,255,0.07)',
                }}
              >
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                >
                  <CheckCircle size={48} style={{ color: '#4ade80' }} />
                </motion.div>
                <p className="text-white font-semibold text-lg">Mensagem enviada!</p>
                <p className="text-sm text-center" style={{ color: '#555555', maxWidth: '280px' }}>
                  Seu cliente de email foi aberto com a mensagem. Entraremos em contato em breve.
                </p>
                <button
                  onClick={() => setSent(false)}
                  className="mt-2 text-xs underline underline-offset-4"
                  style={{ color: '#555555' }}
                >
                  Enviar outra mensagem
                </button>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="rounded-2xl border p-8 space-y-5"
                style={{
                  background: 'linear-gradient(145deg, #161626 0%, #111120 100%)',
                  borderColor: 'rgba(255,255,255,0.07)',
                }}
              >
                {/* Row: nome + email */}
                <div className="grid sm:grid-cols-2 gap-5">
                  <div className="space-y-2">
                    <label className="text-xs font-medium tracking-wider uppercase" style={{ color: '#555555' }}>
                      Nome
                    </label>
                    <input
                      name="nome"
                      value={form.nome}
                      onChange={handleChange}
                      required
                      placeholder="Seu nome"
                      className="w-full px-4 py-3 rounded-xl text-sm text-white placeholder-white/20 outline-none transition-all duration-200"
                      style={{
                        background: 'rgba(255,255,255,0.04)',
                        border: '1px solid rgba(255,255,255,0.08)',
                      }}
                      onFocus={e => (e.target.style.borderColor = 'rgba(255,60,0,0.45)')}
                      onBlur={e => (e.target.style.borderColor = 'rgba(255,255,255,0.08)')}
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-medium tracking-wider uppercase" style={{ color: '#555555' }}>
                      Email
                    </label>
                    <input
                      name="email"
                      type="email"
                      value={form.email}
                      onChange={handleChange}
                      required
                      placeholder="seu@email.com"
                      className="w-full px-4 py-3 rounded-xl text-sm text-white placeholder-white/20 outline-none transition-all duration-200"
                      style={{
                        background: 'rgba(255,255,255,0.04)',
                        border: '1px solid rgba(255,255,255,0.08)',
                      }}
                      onFocus={e => (e.target.style.borderColor = 'rgba(255,60,0,0.45)')}
                      onBlur={e => (e.target.style.borderColor = 'rgba(255,255,255,0.08)')}
                    />
                  </div>
                </div>

                {/* Telefone */}
                <div className="space-y-2">
                  <label className="text-xs font-medium tracking-wider uppercase" style={{ color: '#555555' }}>
                    Telefone / WhatsApp
                  </label>
                  <input
                    name="telefone"
                    value={form.telefone}
                    onChange={handleChange}
                    placeholder="(11) 99999-9999"
                    className="w-full px-4 py-3 rounded-xl text-sm text-white placeholder-white/20 outline-none transition-all duration-200"
                    style={{
                      background: 'rgba(255,255,255,0.04)',
                      border: '1px solid rgba(255,255,255,0.08)',
                    }}
                    onFocus={e => (e.target.style.borderColor = 'rgba(255,60,0,0.45)')}
                    onBlur={e => (e.target.style.borderColor = 'rgba(255,255,255,0.08)')}
                  />
                </div>

                {/* Mensagem */}
                <div className="space-y-2">
                  <label className="text-xs font-medium tracking-wider uppercase" style={{ color: '#555555' }}>
                    Mensagem
                  </label>
                  <textarea
                    name="mensagem"
                    value={form.mensagem}
                    onChange={handleChange}
                    required
                    rows={4}
                    placeholder="Conte sobre o seu negócio e o que você precisa automatizar..."
                    className="w-full px-4 py-3 rounded-xl text-sm text-white placeholder-white/20 outline-none transition-all duration-200 resize-none"
                    style={{
                      background: 'rgba(255,255,255,0.04)',
                      border: '1px solid rgba(255,255,255,0.08)',
                    }}
                    onFocus={e => (e.target.style.borderColor = 'rgba(255,60,0,0.45)')}
                    onBlur={e => (e.target.style.borderColor = 'rgba(255,255,255,0.08)')}
                  />
                </div>

                {/* Submit */}
                <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 pt-2">
                  <motion.button
                    type="submit"
                    disabled={loading}
                    whileHover={loading ? {} : { scale: 1.02 }}
                    whileTap={loading ? {} : { scale: 0.97 }}
                    className="group relative inline-flex items-center gap-2.5 px-7 py-3.5 rounded-xl text-white font-bold text-sm overflow-hidden disabled:opacity-70 disabled:cursor-not-allowed"
                    style={{
                      background: 'linear-gradient(135deg, #FF3C00 0%, #FF5A20 100%)',
                      boxShadow: '0 0 0 1px rgba(255,90,32,0.35), 0 4px 20px rgba(255,60,0,0.45), inset 0 1px 0 rgba(255,255,255,0.18)',
                    }}
                  >
                    {!loading && (
                      <motion.span
                        aria-hidden="true"
                        className="absolute inset-0 pointer-events-none"
                        style={{ background: 'linear-gradient(105deg, transparent 25%, rgba(255,255,255,0.15) 50%, transparent 75%)' }}
                        animate={{ x: ['-100%', '200%'] }}
                        transition={{ duration: 1.8, repeat: Infinity, repeatDelay: 2.5, ease: 'linear' }}
                      />
                    )}
                    <span className="relative z-10 flex items-center gap-2">
                      {loading ? (
                        <><Loader2 size={14} className="animate-spin" /> Enviando...</>
                      ) : (
                        <>Enviar mensagem <Send size={14} className="group-hover:translate-x-0.5 transition-transform duration-200" /></>
                      )}
                    </span>
                  </motion.button>

                  {error && (
                    <p className="text-xs" style={{ color: '#FF5A20' }}>{error}</p>
                  )}

                  <p className="text-xs" style={{ color: '#555555' }}>
                    Ou fale direto no{' '}
                    <a
                      href={waLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="underline underline-offset-3 transition-colors duration-200 hover:text-white"
                      style={{ color: '#25D366' }}
                    >
                      WhatsApp
                    </a>
                  </p>
                </div>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
