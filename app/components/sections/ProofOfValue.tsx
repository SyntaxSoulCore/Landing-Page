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
    color: 'cyan',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4" />
      </svg>
    ),
    title: 'Escalabilidade',
    description: 'Arquitetura distribuída pronta para crescer de mil para milhões de usuários.',
    color: 'purple',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
    title: 'Segurança',
    description: 'Autenticação robusta, validação de entrada e práticas OWASP desde o dia 1.',
    color: 'cyan',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
      </svg>
    ),
    title: 'Arquitetura Limpa',
    description: 'Clean Architecture, SOLID e DDD aplicados para máxima manutenibilidade.',
    color: 'purple',
  },
]

const colorMap = {
  cyan: {
    icon: 'text-cyan-400',
    border: 'border-cyan-500/20',
    glow: 'hover:border-cyan-500/50 hover:shadow-[0_0_20px_rgba(0,255,255,0.1)]',
    bg: 'bg-cyan-500/5',
  },
  purple: {
    icon: 'text-purple-400',
    border: 'border-purple-500/20',
    glow: 'hover:border-purple-500/50 hover:shadow-[0_0_20px_rgba(139,92,246,0.1)]',
    bg: 'bg-purple-500/5',
  },
}

export default function ProofOfValue() {
  return (
    <section
      id="proof"
      className="py-24 bg-black"
      aria-label="Prova de valor"
    >
      <div className="max-w-[1280px] mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Por que a <span className="gradient-text">SyntaxSoul</span>?
          </h2>
          <p className="text-gray-400 max-w-xl mx-auto">
            Não entregamos apenas código — entregamos sistemas que funcionam de verdade.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((item, i) => {
            const colors = colorMap[item.color as keyof typeof colorMap]
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className={`p-6 rounded-xl border ${colors.border} ${colors.glow} ${colors.bg} transition-all duration-300`}
              >
                <div className={`${colors.icon} mb-4`}>
                  {item.icon}
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">{item.title}</h3>
                <p className="text-sm text-gray-400 leading-relaxed">{item.description}</p>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
