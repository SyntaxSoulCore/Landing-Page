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
    accent: '#00E5FF',
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
    accent: '#8B2FE8',
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
    accent: '#00E5FF',
  },
]

export default function Cases() {
  return (
    <section
      id="cases"
      className="py-24 relative overflow-hidden"
      style={{ background: 'linear-gradient(180deg, #080C14 0%, #0A0E1A 50%, #080C14 100%)' }}
      aria-label="Cases"
    >
      <div className="section-divider absolute top-0 left-0 right-0" aria-hidden="true" />

      {/* Ambient glows */}
      <div
        className="absolute top-0 left-0 w-96 h-96 rounded-full opacity-[0.05] pointer-events-none"
        style={{ background: 'radial-gradient(circle, #00E5FF 0%, transparent 70%)' }}
        aria-hidden="true"
      />
      <div
        className="absolute bottom-0 right-0 w-96 h-96 rounded-full opacity-[0.05] pointer-events-none"
        style={{ background: 'radial-gradient(circle, #8B2FE8 0%, transparent 70%)' }}
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
          <p className="text-xs font-semibold text-[#8B2FE8] tracking-[0.2em] uppercase mb-3">Resultados comprovados</p>
          <h2 className="text-3xl sm:text-4xl font-black mb-4">
            Resultados <span className="gradient-text">Reais</span>
          </h2>
          <p className="text-[#8A9BBF] max-w-xl mx-auto">
            Problemas reais, soluções concretas, métricas que importam.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {cases.map((c, i) => (
            <motion.div
              key={c.client}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group relative rounded-2xl border border-white/8 bg-[#0E1525]/60 backdrop-blur-sm flex flex-col overflow-hidden transition-all duration-300 hover:border-white/20 hover:shadow-[0_0_40px_rgba(0,229,255,0.06)]"
            >
              {/* Top accent */}
              <div
                className="h-1 w-full"
                style={{ background: `linear-gradient(90deg, ${c.accent}, transparent)` }}
              />

              <div className="p-6 flex flex-col gap-4 flex-1">
                {/* Client badge */}
                <div
                  className="inline-flex px-3 py-1.5 rounded-full border w-fit"
                  style={{ borderColor: `${c.accent}40`, background: `${c.accent}10` }}
                >
                  <span className="text-xs font-bold" style={{ color: c.accent }}>{c.client}</span>
                </div>

                <div className="space-y-4">
                  {[
                    { label: 'Problema', text: c.problem },
                    { label: 'Solução', text: c.solution },
                    { label: 'Resultado', text: c.result },
                  ].map((block) => (
                    <div key={block.label}>
                      <p className="text-[10px] font-bold uppercase tracking-[0.15em] text-[#8A9BBF]/60 mb-1">{block.label}</p>
                      <p className="text-sm text-[#C0CFEF] leading-relaxed">{block.text}</p>
                    </div>
                  ))}
                </div>

                {/* Metrics */}
                <div
                  className="flex gap-6 pt-4 mt-auto border-t"
                  style={{ borderColor: `${c.accent}20` }}
                >
                  {c.metrics.map((m) => (
                    <div key={m.label}>
                      <p
                        className="text-2xl font-black"
                        style={{
                          background: `linear-gradient(135deg, ${c.accent}, ${c.accent === '#00E5FF' ? '#8B2FE8' : '#00E5FF'})`,
                          WebkitBackgroundClip: 'text',
                          WebkitTextFillColor: 'transparent',
                          backgroundClip: 'text',
                        }}
                      >
                        {m.value}
                      </p>
                      <p className="text-[11px] text-[#8A9BBF] mt-0.5">{m.sub}</p>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
