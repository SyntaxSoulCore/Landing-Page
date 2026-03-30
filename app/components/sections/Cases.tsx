'use client'

import { motion } from 'framer-motion'

const cases = [
  {
    client: 'Fintech',
    problem: 'API de pagamentos com alta latência (>2s) impactando conversão.',
    solution: 'Refatoração com cache Redis + PostgreSQL otimizado + CDN edge.',
    result: 'Latência reduzida de 2.1s para 87ms (96% de melhoria).',
    metrics: [
      { label: 'Latência', value: '87ms', sub: 'era 2.1s' },
      { label: 'Throughput', value: '10k rps', sub: 'era 800 rps' },
    ],
  },
  {
    client: 'E-commerce',
    problem: 'Sistema monolítico com downtime frequente durante picos de acesso.',
    solution: 'Migração para microsserviços com event-driven architecture e K8s.',
    result: 'Zero downtime nos últimos 8 meses, escala automática em segundos.',
    metrics: [
      { label: 'Uptime', value: '99.99%', sub: 'últimos 8 meses' },
      { label: 'Escala', value: '<10s', sub: 'auto-scale' },
    ],
  },
  {
    client: 'SaaS B2B',
    problem: 'Processo manual de onboarding levava 3 dias e gerava erros.',
    solution: 'Automação completa com IA para validação + integrações nativas.',
    result: 'Onboarding reduzido para 4 minutos, 99% de precisão.',
    metrics: [
      { label: 'Tempo', value: '4min', sub: 'era 3 dias' },
      { label: 'Precisão', value: '99%', sub: 'validação IA' },
    ],
  },
]

export default function Cases() {
  return (
    <section
      id="cases"
      className="py-24 bg-black"
      aria-label="Cases"
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
            Resultados <span className="gradient-text">Reais</span>
          </h2>
          <p className="text-gray-400 max-w-xl mx-auto">
            Problemas reais, soluções concretas, métricas que importam.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {cases.map((c, i) => (
            <motion.div
              key={c.client}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="p-6 rounded-xl border border-white/10 bg-white/[0.02] flex flex-col gap-4"
            >
              <div className="inline-flex px-2.5 py-1 rounded-full border border-cyan-500/30 w-fit">
                <span className="text-xs font-medium text-cyan-400">{c.client}</span>
              </div>

              <div className="space-y-3">
                <div>
                  <p className="text-xs text-gray-500 uppercase tracking-wider mb-1">Problema</p>
                  <p className="text-sm text-gray-300">{c.problem}</p>
                </div>
                <div>
                  <p className="text-xs text-gray-500 uppercase tracking-wider mb-1">Solução</p>
                  <p className="text-sm text-gray-300">{c.solution}</p>
                </div>
                <div>
                  <p className="text-xs text-gray-500 uppercase tracking-wider mb-1">Resultado</p>
                  <p className="text-sm text-gray-300">{c.result}</p>
                </div>
              </div>

              <div className="flex gap-4 pt-2 mt-auto border-t border-white/10">
                {c.metrics.map((m) => (
                  <div key={m.label} className="text-center">
                    <p className="text-xl font-bold gradient-text">{m.value}</p>
                    <p className="text-xs text-gray-500 mt-0.5">{m.sub}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
