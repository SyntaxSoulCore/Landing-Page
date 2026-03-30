'use client'

import { motion } from 'framer-motion'

const values = [
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
    title: 'Performance',
    description: 'APIs sub-100ms, otimizações de banco e caching inteligente por padrão.',
    color: 'cyan' as const,
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4" />
      </svg>
    ),
    title: 'Escalabilidade',
    description: 'Arquitetura distribuída pronta para crescer de mil para milhões de usuários.',
    color: 'purple' as const,
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
    title: 'Segurança',
    description: 'Autenticação robusta, validação de entrada e práticas OWASP desde o dia 1.',
    color: 'cyan' as const,
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
      </svg>
    ),
    title: 'Arquitetura Limpa',
    description: 'Clean Architecture, SOLID e DDD aplicados para máxima manutenibilidade.',
    color: 'purple' as const,
  },
]

const colorMap = {
  cyan: {
    icon: 'text-[#00E5FF]',
    border: 'border-[#00E5FF]/15',
    hoverBorder: 'hover:border-[#00E5FF]/50',
    glow: 'hover:shadow-[0_0_32px_rgba(0,229,255,0.15)]',
    bg: 'bg-[#00E5FF]/[0.04]',
    iconBg: 'bg-[#00E5FF]/10',
    barColor: '#00E5FF',
  },
  purple: {
    icon: 'text-[#8B2FE8]',
    border: 'border-[#8B2FE8]/15',
    hoverBorder: 'hover:border-[#8B2FE8]/50',
    glow: 'hover:shadow-[0_0_32px_rgba(139,47,232,0.15)]',
    bg: 'bg-[#8B2FE8]/[0.04]',
    iconBg: 'bg-[#8B2FE8]/10',
    barColor: '#8B2FE8',
  },
}

export default function ProofOfValue() {
  return (
    <section
      id="proof"
      className="py-24 relative overflow-hidden"
      style={{ background: '#080C14' }}
      aria-label="Prova de valor"
    >
      {/* Subtle top divider */}
      <div className="section-divider mb-0 absolute top-0 left-0 right-0" aria-hidden="true" />

      <div className="max-w-[1280px] mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <p className="text-xs font-semibold text-[#00E5FF] tracking-[0.2em] uppercase mb-3">Nossa essência</p>
          <h2 className="text-3xl sm:text-4xl font-black mb-4">
            Por que a <span className="gradient-text">SyntaxSoul</span>?
          </h2>
          <p className="text-[#8A9BBF] max-w-xl mx-auto">
            Não entregamos apenas código — entregamos sistemas que funcionam de verdade.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((item, i) => {
            const colors = colorMap[item.color]
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className={`group relative p-6 rounded-2xl border ${colors.border} ${colors.hoverBorder} ${colors.glow} ${colors.bg} transition-all duration-300 backdrop-blur-sm overflow-hidden`}
              >
                {/* Top accent bar */}
                <div
                  className="absolute top-0 left-0 right-0 h-[2px] opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{ background: `linear-gradient(90deg, transparent, ${colors.barColor}, transparent)` }}
                />

                <div className={`inline-flex items-center justify-center w-12 h-12 rounded-xl ${colors.iconBg} ${colors.icon} mb-5 transition-transform duration-300 group-hover:scale-110`}>
                  {item.icon}
                </div>
                <h3 className="text-base font-bold text-white mb-2">{item.title}</h3>
                <p className="text-sm text-[#8A9BBF] leading-relaxed">{item.description}</p>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
