'use client'

import { motion } from 'framer-motion'

export default function CTA() {
  return (
    <section
      id="contact"
      className="py-24 bg-black"
      aria-label="Call to action"
    >
      <div className="max-w-[1280px] mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="relative rounded-2xl border border-white/10 overflow-hidden p-12 lg:p-20 text-center"
          style={{ background: 'radial-gradient(ellipse at center, rgba(0,255,255,0.05) 0%, rgba(139,92,246,0.05) 50%, transparent 70%)' }}
        >
          {/* Background glow */}
          <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-1 opacity-60"
              style={{ background: 'linear-gradient(90deg, transparent, #00FFFF, #8B5CF6, transparent)' }}
            />
          </div>

          <div className="relative z-10 max-w-2xl mx-auto space-y-8">
            <div>
              <h2 className="text-4xl sm:text-5xl font-bold mb-4">
                Pronto para{' '}
                <span className="gradient-text">elevar</span> seu produto?
              </h2>
              <p className="text-xl text-gray-400">
                Fale com um especialista agora. Sem jargão, sem promessas vazias — apenas soluções que entregam.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="mailto:hello@syntaxsoul.com"
                className="inline-flex items-center justify-center gap-2 px-10 py-5 rounded-lg font-semibold text-lg text-black transition-all duration-300 neon-glow-cyan hover:scale-105"
                style={{ background: 'linear-gradient(135deg, #00FFFF, #8B5CF6)' }}
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                </svg>
                Falar com especialista
              </a>
            </div>

            <p className="text-sm text-gray-600">
              Resposta em até 24h · Sem compromisso · 100% confidencial
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
