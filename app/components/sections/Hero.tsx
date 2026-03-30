'use client'

import { motion } from 'framer-motion'
import SyntaxSoulMascot from '@/app/components/ui/SyntaxSoulMascot'

/* Binary string for the background ticker */
const BINARY = '10110011010010110101001101001011001101001011010100110100101100110100'

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center overflow-hidden"
      style={{ background: 'linear-gradient(160deg, #080C14 0%, #0A1020 60%, #080C14 100%)' }}
      aria-label="Hero"
    >
      {/* ── Grid/circuit background ─────────────────────────── */}
      <div className="absolute inset-0 circuit-lines pointer-events-none" aria-hidden="true" />

      {/* ── Binary ticker top ───────────────────────────────── */}
      <div className="absolute top-20 left-0 right-0 overflow-hidden pointer-events-none" aria-hidden="true">
        <p className="text-[10px] font-mono text-[#00E5FF]/15 whitespace-nowrap tracking-widest px-4">
          {BINARY.repeat(6)}
        </p>
        <p className="text-[10px] font-mono text-[#8B2FE8]/10 whitespace-nowrap tracking-widest px-4 mt-1">
          {BINARY.split('').reverse().join('').repeat(6)}
        </p>
      </div>

      {/* ── Ambient glows ───────────────────────────────────── */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div
          className="absolute top-1/3 left-0 w-[600px] h-[600px] rounded-full opacity-10"
          style={{ background: 'radial-gradient(circle, #00E5FF 0%, transparent 70%)' }}
        />
        <div
          className="absolute bottom-1/4 right-0 w-[500px] h-[500px] rounded-full opacity-10"
          style={{ background: 'radial-gradient(circle, #8B2FE8 0%, transparent 70%)' }}
        />
      </div>

      {/* ── Circuit corner decorations ─────────────────────── */}
      <svg className="absolute top-24 left-6 opacity-20" width="120" height="120" viewBox="0 0 120 120" aria-hidden="true">
        <path d="M10 10 L10 60 L60 60" stroke="#00E5FF" strokeWidth="1.5" fill="none" strokeLinecap="round" />
        <circle cx="10" cy="10" r="3" fill="#00E5FF" />
        <circle cx="60" cy="60" r="3" fill="#00E5FF" />
        <path d="M30 10 L30 40 L80 40" stroke="#00E5FF" strokeWidth="1" fill="none" strokeDasharray="4 4" opacity="0.6" />
      </svg>
      <svg className="absolute bottom-24 right-6 opacity-20" width="120" height="120" viewBox="0 0 120 120" aria-hidden="true">
        <path d="M110 110 L110 60 L60 60" stroke="#8B2FE8" strokeWidth="1.5" fill="none" strokeLinecap="round" />
        <circle cx="110" cy="110" r="3" fill="#8B2FE8" />
        <circle cx="60" cy="60" r="3" fill="#8B2FE8" />
        <path d="M90 110 L90 80 L40 80" stroke="#8B2FE8" strokeWidth="1" fill="none" strokeDasharray="4 4" opacity="0.6" />
      </svg>

      {/* ── Floating particles ──────────────────────────────── */}
      {[
        { cx: '8%', cy: '25%', r: 2.5, color: '#00E5FF', delay: 0 },
        { cx: '15%', cy: '70%', r: 1.5, color: '#8B2FE8', delay: 1.2 },
        { cx: '88%', cy: '20%', r: 2, color: '#8B2FE8', delay: 0.5 },
        { cx: '92%', cy: '65%', r: 1.5, color: '#00E5FF', delay: 1.8 },
        { cx: '50%', cy: '88%', r: 2, color: '#5E3BEA', delay: 0.8 },
      ].map((p, i) => (
        <div
          key={i}
          className="absolute rounded-full animate-pulse"
          style={{
            left: p.cx, top: p.cy,
            width: p.r * 2, height: p.r * 2,
            background: p.color,
            boxShadow: `0 0 8px ${p.color}`,
            animationDelay: `${p.delay}s`,
          }}
          aria-hidden="true"
        />
      ))}

      {/* ── Main content ────────────────────────────────────── */}
      <div className="relative z-10 w-full max-w-[1280px] mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center min-h-screen py-24 lg:py-0">

          {/* Left: Text */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
            className="flex flex-col gap-7"
          >
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#00E5FF]/25 bg-[#00E5FF]/5 w-fit">
              <span className="w-2 h-2 rounded-full bg-[#00E5FF] animate-pulse" />
              <span className="text-xs font-semibold text-[#00E5FF] tracking-[0.15em] uppercase">
                Software Engineering
              </span>
            </div>

            {/* Headline */}
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black leading-[1.05] tracking-tight">
              <span className="text-white">Forjando</span>
              <br />
              <span className="gradient-text-shimmer">Tecnologia</span>
              <br />
              <span className="text-white">com </span>
              <span className="gradient-text-shimmer">Alma</span>
            </h1>

            {/* Tagline pills */}
            <div className="flex flex-wrap gap-2">
              {['Inovação', 'Desenvolvimento', 'Essência Humana'].map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 text-xs font-semibold rounded-full border border-[#8B2FE8]/30 text-[#8A9BBF] bg-[#8B2FE8]/5"
                >
                  {tag}
                </span>
              ))}
            </div>

            <p className="text-lg text-[#8A9BBF] max-w-lg leading-relaxed">
              Construímos sistemas que escalam, integrações que funcionam e
              arquiteturas que resistem ao tempo — com precisão técnica e visão de produto.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 pt-1">
              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl font-bold text-base text-[#080C14] transition-all duration-300 neon-glow-cyan hover:scale-105"
                style={{ background: 'linear-gradient(135deg, #00E5FF, #8B2FE8)' }}
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5}
                    d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                </svg>
                Falar com especialista
              </a>
              <a
                href="#services"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl font-semibold text-base text-white border border-white/15 hover:border-[#00E5FF]/50 hover:text-[#00E5FF] transition-all duration-300"
              >
                Ver soluções
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
            </div>

            {/* Stats */}
            <div className="flex items-center pt-5 border-t border-white/8">
              {[
                { value: '50+', label: 'Projetos entregues' },
                { value: '99.9%', label: 'Uptime garantido' },
                { value: '5★', label: 'Avaliação média' },
              ].map((stat, i) => (
                <>
                  {i > 0 && <div key={`sep-${i}`} className="w-px h-10 bg-white/10 mx-6" />}
                  <div key={stat.label} className="text-center">
                    <p className="text-2xl font-black gradient-text">{stat.value}</p>
                    <p className="text-[11px] text-[#8A9BBF] mt-0.5 whitespace-nowrap">{stat.label}</p>
                  </div>
                </>
              ))}
            </div>
          </motion.div>

          {/* Right: Mascot */}
          <motion.div
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.25, ease: 'easeOut' }}
            className="flex items-center justify-center"
            aria-hidden="true"
          >
            <div className="relative">
              {/* Outer glow ring */}
              <div
                className="absolute inset-[-20px] rounded-full opacity-20 animate-pulse-glow"
                style={{ background: 'radial-gradient(circle, #00E5FF 0%, #8B2FE8 50%, transparent 70%)' }}
              />
              <div className="animate-float">
                <SyntaxSoulMascot size={420} />
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* ── Bottom gradient fade ────────────────────────────── */}
      <div
        className="absolute bottom-0 left-0 right-0 h-24 pointer-events-none"
        style={{ background: 'linear-gradient(to bottom, transparent, #080C14)' }}
        aria-hidden="true"
      />
    </section>
  )
}
