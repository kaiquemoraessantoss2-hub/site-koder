# CLAUDE.md — Koder Website

> Arquivo de referência completo para construção e manutenção do site da Koder.
> Leia este arquivo inteiramente antes de escrever qualquer linha de código.

---

## 1. VISÃO GERAL DO PROJETO

**Empresa:** Koder — Agência de Desenvolvimento de Sistemas
**Objetivo:** Converter empresas que ainda usam planilhas em clientes da Koder.
**Tom de voz:** Direto, confiante, técnico mas acessível. Fala com gestores e donos de empresa — não com devs.
**Idioma:** Português (Brasil)
**Referência visual:** https://aligno.framer.ai — dark, motion-first, bento grid, tipografia bold

---

## 2. IDENTIDADE VISUAL

### Cores
```
--obsidian:      #0D0D1A   /* fundo principal */
--deep-navy:     #1C1C2E   /* fundo secundário / cards */
--violet:        #7B6CF4   /* destaque principal */
--violet-light:  #A89CF7   /* hover / gradientes */
--violet-mist:   #EEEDFE   /* badges / pills */
--off-white:     #F0F0F8   /* texto principal em fundo escuro */
--muted:         #9090A8   /* texto secundário */
--border:        rgba(255,255,255,0.07)
```

### Tipografia
- Família: Inter (Google Fonts)
- Pesos: 300, 400, 500, 600
- Hero H1: clamp(52px, 8vw, 96px), font-weight 600, letter-spacing -4px
- Section H2: clamp(32px, 5vw, 56px), font-weight 600, letter-spacing -2px
- Body: 16–18px, weight 400, line-height 1.7
- Labels/caps: 11–13px, weight 500, letter-spacing 3.5px, uppercase

### Logo — Símbolo "Fragmento"
Diamante partido ao meio. Metade superior branca, inferior violeta.

```svg
<!-- Com badge -->
<svg viewBox="0 0 90 90" xmlns="http://www.w3.org/2000/svg">
  <rect width="90" height="90" rx="18" fill="#0D0D1A"/>
  <rect width="90" height="90" rx="18" fill="none" stroke="rgba(123,108,244,0.4)" stroke-width="1.5"/>
  <polygon points="45,10 80,47 45,47" fill="#FFFFFF"/>
  <polygon points="45,51 80,51 45,80" fill="#7B6CF4"/>
</svg>
```

---

## 3. STACK TÉCNICA

```
Framework:  React 18 + Vite  (ou Next.js 14 App Router)
Styling:    Tailwind CSS v3
Animations: Framer Motion v11
Icons:      Lucide React
Fonts:      Inter via Google Fonts
Language:   TypeScript
```

---

## 4. ESTRUTURA DE ARQUIVOS

```
src/
├── components/
│   ├── layout/
│   │   ├── Navbar.tsx
│   │   └── Footer.tsx
│   ├── sections/
│   │   ├── Hero.tsx
│   │   ├── Problem.tsx
│   │   ├── Solution.tsx
│   │   ├── BentoFeatures.tsx
│   │   ├── HowItWorks.tsx
│   │   ├── Testimonials.tsx
│   │   └── CTA.tsx
│   └── ui/
│       ├── Logo.tsx
│       ├── Badge.tsx
│       ├── AnimatedText.tsx
│       ├── GlowCard.tsx
│       └── Marquee.tsx
├── hooks/
│   └── useScrollAnimation.ts
├── lib/
│   └── motion.ts
├── App.tsx
└── main.tsx
```

---

## 5. SEÇÕES DO SITE

### 5.1 NAVBAR
- Fundo: transparente → #0D0D1A/80 + blur ao scroll
- Esquerda: Logo badge 32px + wordmark "koder"
- Centro: Problema · Solução · Como funciona · Contato
- Direita: "Falar com especialista" (outline → fill ao hover)
- Animação: fade-in from top na entrada

### 5.2 HERO
Headline: "Sua empresa ainda vive de planilhas?"
Sub: "A Koder transforma processos manuais em sistemas inteligentes, feitos sob medida para o seu negócio."
Badge: "✦ Mais de 40 empresas atendidas"
CTAs: "Quero meu sistema" (solid violet) | "Ver como funciona" (ghost)

Elementos visuais:
- Fundo #0D0D1A com grade de pontos SVG sutil (radial-gradient dot pattern)
- Símbolo Fragmento flutuando com loop y -10/+10px
- Gradient radial violet embaixo do símbolo (glow)
- Dashboard mockup animado abaixo do headline

Animações (em ordem temporal):
1. Badge: fade + slide-up, delay 0s
2. H1: cada palavra individualmente, stagger 0.08s, slide-up 40px
3. Sub: fade-up, delay 0.5s
4. CTAs: fade-up, delay 0.7s
5. Dashboard: scale 0.9→1 + fade, delay 0.9s
6. Símbolo: float loop infinito

### 5.3 PROBLEMA
Título: "Planilhas travam o crescimento da sua empresa"
Sub: "Você sabe que dá pra fazer melhor. Mas onde começa?"

3 cards em grid:
1. "Tempo perdido" — Horas gastas atualizando células manualmente
2. "Dados desorganizados" — Informações espalhadas sem padrão
3. "Erros humanos" — Um campo errado pode custar caro

Cards: bg #1C1C2E, borda sutil, entrada stagger ao scroll

### 5.4 SOLUÇÃO
Título: "A Koder cria o sistema ideal para o seu negócio"
Sub: "Software sob medida que resolve exatamente o que te trava hoje"

Features (2 colunas, 6 itens):
- Sistema 100% personalizado para o seu fluxo
- Painel de controle intuitivo e moderno
- Dados centralizados em tempo real
- Automações que eliminam trabalho repetitivo
- Treinamento e suporte incluídos
- Escalável conforme seu negócio cresce

### 5.5 BENTO FEATURES
Título: "Tudo que seu negócio precisa"

Layout desktop:
```
[  Card Grande  ][  Card Médio  ]
[  Card Médio   ][  Card Grande ]
[      Card Full Width          ]
```

Cards:
1. (Grande) "Economize até 70% do tempo" — counter animado + ícone
2. (Médio)  "Tudo em um lugar" — dados centralizados
3. (Médio)  "Acesso de qualquer lugar" — web, tablet, mobile
4. (Grande) "Relatórios automáticos" — mini gráfico animado
5. (Full)   "Suporte dedicado" — timeline do processo

Hover em todos: scale 1.02 + glow violet radial seguindo mouse

### 5.6 COMO FUNCIONA
Título: "Do diagnóstico ao sistema em produção"

3 etapas:
1. Diagnóstico gratuito — Entendemos seu processo e identificamos gargalos
2. Desenvolvimento ágil — Sprints com sua aprovação em cada etapa
3. Entrega e suporte — Implantamos, treinamos sua equipe e ficamos ao lado

Animação: linha conectora se desenha via strokeDashoffset ao scrollar

### 5.7 DEPOIMENTOS (MARQUEE)
Carrossel infinito horizontal com fade nas bordas.

Textos:
- "Antes levávamos 3h por dia só atualizando planilhas. Com a Koder, isso virou automático." — Carlos M., Dir. Operacional
- "Finalmente um sistema que minha equipe realmente usa." — Ana P., Gestora
- "Reduzimos erros operacionais em 90% no primeiro mês." — João S., CEO
- "O processo foi muito mais rápido do que eu esperava." — Fernanda L., Coordenadora

### 5.8 CTA FINAL
Título: "Pronto para parar de depender de planilhas?"
Sub: "Agende um diagnóstico gratuito e veja o que um sistema sob medida pode fazer."
Botão: "Quero meu diagnóstico gratuito"
BG: gradient violet radial sobre escuro
Decorativo: Fragmento grande, baixa opacidade, atrás do texto

### 5.9 FOOTER
Logo + "development agency"
Links: Sobre · Serviços · Contato
Redes: Instagram · WhatsApp
© 2025 Koder. Todos os direitos reservados.

---

## 6. SISTEMA DE ANIMAÇÕES

### lib/motion.ts — Variantes base
```ts
export const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } }
}

export const fadeIn = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.5 } }
}

export const scaleIn = {
  hidden: { opacity: 0, scale: 0.92 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } }
}

export const stagger = (delay = 0.1) => ({
  visible: { transition: { staggerChildren: delay } }
})
```

### Hook useScrollAnimation
```ts
import { useInView } from 'framer-motion'
import { useRef } from 'react'

export function useScrollAnimation(threshold = 0.15) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: `-${threshold * 100}px 0px` })
  return { ref, isInView }
}
```

### Padrões obrigatórios
- Scroll-triggered: todo conteúdo usa whileInView com once: true
- Stagger em listas: staggerChildren 0.1
- Hero: AnimatePresence + initial/animate (sem scroll trigger)
- Hover cards: whileHover={{ scale: 1.02 }}
- Easing padrão: [0.22, 1, 0.36, 1]
- Float loop: animate={{ y: [-8, 8, -8] }}, transition: repeat Infinity, duration 4
- Prefers-reduced-motion: sempre implementar

### Animação de texto palavra por palavra
```tsx
function AnimatedHeading({ text }: { text: string }) {
  return (
    <motion.h1 variants={stagger(0.08)} initial="hidden" animate="visible">
      {text.split(' ').map((word, i) => (
        <motion.span key={i} variants={fadeUp} className="inline-block mr-[0.25em]">
          {word}
        </motion.span>
      ))}
    </motion.h1>
  )
}
```

---

## 7. TAILWIND CONFIG

```js
module.exports = {
  theme: {
    extend: {
      colors: {
        obsidian: '#0D0D1A',
        navy: '#1C1C2E',
        violet: {
          DEFAULT: '#7B6CF4',
          light: '#A89CF7',
          mist: '#EEEDFE',
        },
        'off-white': '#F0F0F8',
        muted: '#9090A8',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
}
```

---

## 8. COPY COMPLETO

### Meta
- title: "Koder — Sistemas sob medida para empresas"
- description: "Transformamos planilhas em sistemas inteligentes. Software personalizado que economiza tempo e organiza seu negócio."

### Textos por seção (produção)
- Navbar CTA: "Falar com especialista"
- Hero badge: "✦ Mais de 40 empresas atendidas"
- Hero H1: "Sua empresa ainda vive de planilhas?"
- Hero sub: "A Koder transforma processos manuais em sistemas inteligentes, feitos sob medida para o seu negócio."
- Problema H2: "Planilhas travam o crescimento da sua empresa"
- Solução H2: "A Koder cria o sistema ideal para o seu negócio"
- Bento H2: "Tudo que seu negócio precisa"
- HowItWorks H2: "Do diagnóstico ao sistema em produção"
- CTA H2: "Pronto para parar de depender de planilhas?"
- CTA button: "Quero meu diagnóstico gratuito"

---

## 9. REGRAS GERAIS

- Nunca use cores fora das definidas na seção 2
- Sempre use once: true no whileInView
- Nunca use top/left para animar — apenas transform e opacity
- Sempre implemente prefers-reduced-motion
- Mobile-first: fluido de 320px até 1440px+
- Performance: lazy load em imagens, animações só com transform/opacity
- Acessibilidade: contraste mínimo 4.5:1, todos os botões com aria-label