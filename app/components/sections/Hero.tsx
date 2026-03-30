'use client'

import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen bg-black flex items-center overflow-hidden"
      aria-label="Hero"
    >
      {/* Subtle background glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        aria-hidden="true"
      >
        <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full opacity-10"
          style={{ background: 'radial-gradient(circle, #00FFFF 0%, transparent 70%)' }}
        />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full opacity-10"
          style={{ background: 'radial-gradient(circle, #8B5CF6 0%, transparent 70%)' }}
        />
      </div>

      <div className="relative z-10 w-full max-w-[1280px] mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center min-h-screen py-20 lg:py-0">
          {/* Left: Text content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="flex flex-col gap-6"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-cyan-500/30 w-fit">
              <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
              <span className="text-xs font-medium text-cyan-400 tracking-wider uppercase">
                Software Engineering
              </span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight tracking-tight">
              Forjando{' '}
              <span className="gradient-text">Tecnologia</span>
              <br />
              com <span className="gradient-text">Alma</span>
            </h1>

            <p className="text-lg sm:text-xl text-gray-300 max-w-lg leading-relaxed">
              Construímos sistemas que escalam, integrações que funcionam e
              arquiteturas que resistem ao tempo — com precisão técnica e visão de produto.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-2">
              <a
                href="#contact"
                className="inline-flex items-center justify-center px-8 py-4 rounded-lg font-semibold text-base text-black transition-all duration-300 neon-glow-cyan hover:scale-105"
                style={{ background: 'linear-gradient(135deg, #00FFFF, #8B5CF6)' }}
              >
                Falar com especialista
              </a>
              <a
                href="#services"
                className="inline-flex items-center justify-center px-8 py-4 rounded-lg font-semibold text-base text-white border border-white/20 hover:border-cyan-400/50 hover:text-cyan-400 transition-all duration-300"
              >
                Ver soluções
                <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </a>
            </div>

            <div className="flex items-center gap-6 pt-4 border-t border-white/10">
              <div className="text-center">
                <p className="text-2xl font-bold gradient-text">50+</p>
                <p className="text-xs text-gray-400 mt-1">Projetos entregues</p>
              </div>
              <div className="w-px h-10 bg-white/10" />
              <div className="text-center">
                <p className="text-2xl font-bold gradient-text">99.9%</p>
                <p className="text-xs text-gray-400 mt-1">Uptime garantido</p>
              </div>
              <div className="w-px h-10 bg-white/10" />
              <div className="text-center">
                <p className="text-2xl font-bold gradient-text">5★</p>
                <p className="text-xs text-gray-400 mt-1">Avaliação média</p>
              </div>
            </div>
          </motion.div>

          {/* Right: Mascot */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2, ease: 'easeOut' }}
            className="flex items-center justify-center"
            aria-hidden="true"
          >
            <div className="relative w-80 h-80 lg:w-[420px] lg:h-[420px]">
              {/* Mascot placeholder - glowing orb with "SS" branding */}
              <div className="absolute inset-0 rounded-full opacity-20 animate-pulse"
                style={{ background: 'radial-gradient(circle, #00FFFF 0%, #8B5CF6 50%, transparent 70%)' }}
              />
              <div className="absolute inset-8 rounded-full flex items-center justify-center border border-cyan-500/30"
                style={{ background: 'linear-gradient(135deg, rgba(0,255,255,0.05) 0%, rgba(139,92,246,0.05) 100%)' }}
              >
                <div className="text-center">
                  <div className="text-6xl lg:text-8xl font-black gradient-text tracking-tighter">SS</div>
                  <div className="text-sm text-cyan-400/70 font-mono mt-2">SyntaxSoul</div>
                  <div className="mt-4 flex justify-center gap-2">
                    <span className="text-2xl">👍</span>
                  </div>
                </div>
              </div>
              {/* Orbiting elements */}
              <div className="absolute top-4 right-8 w-3 h-3 rounded-full bg-cyan-400 opacity-60 animate-bounce" />
              <div className="absolute bottom-8 left-4 w-2 h-2 rounded-full bg-purple-500 opacity-60 animate-bounce" style={{ animationDelay: '0.3s' }} />
              <div className="absolute top-1/2 right-0 w-2 h-2 rounded-full bg-blue-400 opacity-60 animate-bounce" style={{ animationDelay: '0.6s' }} />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
