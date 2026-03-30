'use client'

import { motion } from 'framer-motion'
import SyntaxSoulLogo from '@/app/components/ui/SyntaxSoulLogo'

export default function CTA() {
  return (
    <section
      id="contact"
      className="py-24 relative overflow-hidden"
      style={{ background: '#080C14' }}
      aria-label="Call to action"
    >
      <div className="section-divider absolute top-0 left-0 right-0" aria-hidden="true" />

      {/* Circuit grid */}
      <div className="absolute inset-0 circuit-bg opacity-60 pointer-events-none" aria-hidden="true" />

      {/* Left glow */}
      <div
        className="absolute top-1/2 -translate-y-1/2 -left-32 w-96 h-96 rounded-full opacity-15 pointer-events-none"
        style={{ background: 'radial-gradient(circle, #00E5FF 0%, transparent 70%)' }}
        aria-hidden="true"
      />
      {/* Right glow */}
      <div
        className="absolute top-1/2 -translate-y-1/2 -right-32 w-96 h-96 rounded-full opacity-15 pointer-events-none"
        style={{ background: 'radial-gradient(circle, #8B2FE8 0%, transparent 70%)' }}
        aria-hidden="true"
      />

      <div className="relative z-10 max-w-[1280px] mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative rounded-3xl border border-white/10 overflow-hidden"
          style={{
            background: 'linear-gradient(135deg, rgba(0,229,255,0.05) 0%, rgba(14,21,37,0.8) 40%, rgba(139,47,232,0.05) 100%)',
          }}
        >
          {/* Top gradient line */}
          <div
            className="absolute top-0 left-0 right-0 h-[2px]"
            style={{ background: 'linear-gradient(90deg, transparent, #00E5FF, #8B2FE8, transparent)' }}
            aria-hidden="true"
          />

          {/* Corner circuit decorations */}
          <svg className="absolute top-6 left-6 opacity-20" width="80" height="80" viewBox="0 0 80 80" aria-hidden="true">
            <path d="M8 8 L8 40 L40 40" stroke="#00E5FF" strokeWidth="1.5" fill="none" strokeLinecap="round" />
            <circle cx="8" cy="8" r="3" fill="#00E5FF" />
            <circle cx="40" cy="40" r="3" fill="#00E5FF" />
          </svg>
          <svg className="absolute bottom-6 right-6 opacity-20" width="80" height="80" viewBox="0 0 80 80" aria-hidden="true">
            <path d="M72 72 L72 40 L40 40" stroke="#8B2FE8" strokeWidth="1.5" fill="none" strokeLinecap="round" />
            <circle cx="72" cy="72" r="3" fill="#8B2FE8" />
            <circle cx="40" cy="40" r="3" fill="#8B2FE8" />
          </svg>

          <div className="relative z-10 p-12 lg:p-20 text-center">
            {/* Logo */}
            <div className="flex justify-center mb-8" aria-hidden="true">
              <SyntaxSoulLogo size={52} showText={false} />
            </div>

            <div className="max-w-2xl mx-auto space-y-8">
              <div>
                <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black mb-4 leading-tight">
                  Pronto para{' '}
                  <span className="gradient-text-shimmer">elevar</span>
                  <br />
                  seu produto?
                </h2>
                <p className="text-lg text-[#8A9BBF]">
                  Fale com um especialista agora. Sem jargão, sem promessas vazias —
                  apenas soluções que entregam.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="mailto:hello@syntaxsoul.com"
                  className="inline-flex items-center justify-center gap-3 px-10 py-5 rounded-xl font-bold text-lg text-[#080C14] transition-all duration-300 neon-glow-cyan hover:scale-105"
                  style={{ background: 'linear-gradient(135deg, #00E5FF, #8B2FE8)' }}
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                      d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                  </svg>
                  Falar com especialista
                </a>
              </div>

              {/* Trust indicators */}
              <div className="flex flex-wrap justify-center gap-6">
                {[
                  'Resposta em até 24h',
                  'Sem compromisso',
                  '100% confidencial',
                ].map((item) => (
                  <div key={item} className="flex items-center gap-2 text-sm text-[#8A9BBF]">
                    <svg className="w-4 h-4 text-[#00E5FF]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
