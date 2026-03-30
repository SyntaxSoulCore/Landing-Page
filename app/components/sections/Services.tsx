'use client'

import { motion } from 'framer-motion'

const services = [
  {
    title: 'Desenvolvimento sob medida',
    bullets: ['Aplicações web e APIs de alta performance', 'Código testável, documentado e escalável'],
    cta: 'Saiba mais →',
    href: '#contact',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
      </svg>
    ),
    accent: '#00E5FF',
  },
  {
    title: 'Arquitetura de sistemas',
    bullets: ['Design de sistemas distribuídos e microsserviços', 'Revisão e refatoração de arquiteturas legadas'],
    cta: 'Saiba mais →',
    href: '#contact',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 5a1 1 0 011-1h4a1 1 0 011 1v4a1 1 0 01-1 1H5a1 1 0 01-1-1V5zm10 0a1 1 0 011-1h4a1 1 0 011 1v4a1 1 0 01-1 1h-4a1 1 0 01-1-1V5zm0 10a1 1 0 011-1h4a1 1 0 011 1v4a1 1 0 01-1 1h-4a1 1 0 01-1-1v-4zm-10 0a1 1 0 011-1h4a1 1 0 011 1v4a1 1 0 01-1 1H5a1 1 0 01-1-1v-4z" />
      </svg>
    ),
    accent: '#8B2FE8',
  },
  {
    title: 'Integrações e Automações',
    bullets: ['APIs RESTful, GraphQL e webhooks', 'Automações de processos e pipelines de dados'],
    cta: 'Saiba mais →',
    href: '#contact',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
      </svg>
    ),
    accent: '#00E5FF',
  },
  {
    title: 'Dashboards & Real-time',
    bullets: ['Painéis analíticos com dados em tempo real', 'WebSockets, SSE e streaming de eventos'],
    cta: 'Saiba mais →',
    href: '#contact',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      </svg>
    ),
    accent: '#8B2FE8',
  },
  {
    title: 'IA Aplicada',
    bullets: ['Integração com LLMs e modelos de ML', 'Automação inteligente e recomendações'],
    cta: 'Saiba mais →',
    href: '#contact',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
      </svg>
    ),
    accent: '#00E5FF',
  },
  {
    title: 'Mobile',
    bullets: ['Apps React Native para iOS e Android', 'Performance nativa com DX de JavaScript'],
    cta: 'Saiba mais →',
    href: '#contact',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
      </svg>
    ),
    accent: '#8B2FE8',
  },
]

export default function Services() {
  return (
    <section
      id="services"
      className="py-24 relative overflow-hidden"
      style={{ background: 'linear-gradient(180deg, #080C14 0%, #0A0E1A 50%, #080C14 100%)' }}
      aria-label="Serviços"
    >
      <div className="absolute inset-0 circuit-bg opacity-50 pointer-events-none" aria-hidden="true" />

      {/* Ambient glow */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] rounded-full opacity-[0.04] pointer-events-none"
        style={{ background: 'radial-gradient(ellipse, #8B2FE8 0%, transparent 70%)' }}
        aria-hidden="true"
      />

      <div className="relative z-10 max-w-[1280px] mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <p className="text-xs font-semibold text-[#8B2FE8] tracking-[0.2em] uppercase mb-3">O que fazemos</p>
          <h2 className="text-3xl sm:text-4xl font-black mb-4">
            Nossas <span className="gradient-text">Soluções</span>
          </h2>
          <p className="text-[#8A9BBF] max-w-xl mx-auto">
            Do backend robusto ao frontend fluido — cobrimos todo o espectro do desenvolvimento moderno.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="group relative p-6 rounded-2xl border border-white/8 bg-[#0E1525]/60 backdrop-blur-sm hover:border-white/20 transition-all duration-300 overflow-hidden"
              style={{
                ['--accent' as string]: service.accent,
              }}
            >
              {/* Gradient corner glow on hover */}
              <div
                className="absolute -top-10 -right-10 w-32 h-32 rounded-full opacity-0 group-hover:opacity-15 transition-opacity duration-500"
                style={{ background: `radial-gradient(circle, ${service.accent} 0%, transparent 70%)` }}
                aria-hidden="true"
              />

              {/* Top accent line on hover */}
              <div
                className="absolute top-0 left-0 right-0 h-[2px] opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{ background: `linear-gradient(90deg, transparent, ${service.accent}, transparent)` }}
                aria-hidden="true"
              />

              {/* Icon */}
              <div
                className="inline-flex items-center justify-center w-12 h-12 rounded-xl mb-5 transition-transform duration-300 group-hover:scale-110"
                style={{ background: `${service.accent}12`, color: service.accent }}
              >
                {service.icon}
              </div>

              <h3 className="text-base font-bold text-white mb-3">{service.title}</h3>

              <ul className="space-y-2 mb-6">
                {service.bullets.map((bullet) => (
                  <li key={bullet} className="flex items-start gap-2 text-sm text-[#8A9BBF]">
                    <span className="mt-0.5 flex-shrink-0" style={{ color: service.accent }}>›</span>
                    {bullet}
                  </li>
                ))}
              </ul>

              <a
                href={service.href}
                className="text-sm font-semibold transition-colors duration-200"
                style={{ color: service.accent }}
              >
                {service.cta}
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
