'use client'

import { motion } from 'framer-motion'

const services = [
  {
    title: 'Desenvolvimento sob medida',
    bullets: ['Aplicações web e APIs de alta performance', 'Código testável, documentado e escalável'],
    cta: 'Saiba mais →',
    href: '#contact',
    icon: '⚡',
  },
  {
    title: 'Arquitetura de sistemas',
    bullets: ['Design de sistemas distribuídos e microsserviços', 'Revisão e refatoração de arquiteturas legadas'],
    cta: 'Saiba mais →',
    href: '#contact',
    icon: '🏗️',
  },
  {
    title: 'Integrações e Automações',
    bullets: ['APIs RESTful, GraphQL e webhooks', 'Automações de processos e pipelines de dados'],
    cta: 'Saiba mais →',
    href: '#contact',
    icon: '🔗',
  },
  {
    title: 'Dashboards & Real-time',
    bullets: ['Painéis analíticos com dados em tempo real', 'WebSockets, SSE e streaming de eventos'],
    cta: 'Saiba mais →',
    href: '#contact',
    icon: '📊',
  },
  {
    title: 'IA Aplicada',
    bullets: ['Integração com LLMs e modelos de ML', 'Automação inteligente e recomendações'],
    cta: 'Saiba mais →',
    href: '#contact',
    icon: '🤖',
  },
  {
    title: 'Mobile',
    bullets: ['Apps React Native para iOS e Android', 'Performance nativa com DX de JavaScript'],
    cta: 'Saiba mais →',
    href: '#contact',
    icon: '📱',
  },
]

export default function Services() {
  return (
    <section
      id="services"
      className="py-24 bg-black"
      aria-label="Serviços"
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
            Nossas <span className="gradient-text">Soluções</span>
          </h2>
          <p className="text-gray-400 max-w-xl mx-auto">
            Do backend robusto ao frontend fluido — cobrimos todo o espectro do desenvolvimento moderno.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="group p-6 rounded-xl border border-white/10 hover:border-cyan-500/30 bg-white/[0.02] hover:bg-white/[0.04] transition-all duration-300"
            >
              <div className="text-3xl mb-4">{service.icon}</div>
              <h3 className="text-lg font-semibold text-white mb-3">{service.title}</h3>
              <ul className="space-y-2 mb-6">
                {service.bullets.map((bullet) => (
                  <li key={bullet} className="flex items-start gap-2 text-sm text-gray-400">
                    <span className="text-cyan-400 mt-0.5 flex-shrink-0">›</span>
                    {bullet}
                  </li>
                ))}
              </ul>
              <a
                href={service.href}
                className="text-sm font-medium text-cyan-400 hover:text-cyan-300 transition-colors duration-200"
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
