'use client'

import { useState, useEffect } from 'react'
import SyntaxSoulLogo from '@/app/components/ui/SyntaxSoulLogo'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = [
    { label: 'Soluções', href: '#services' },
    { label: 'Stack', href: '#tech' },
    { label: 'Cases', href: '#cases' },
  ]

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-navy/90 backdrop-blur-md border-b border-[#00E5FF]/10 shadow-[0_4px_30px_rgba(0,229,255,0.05)]'
          : 'bg-transparent'
      }`}
      aria-label="Navegação principal"
    >
      <div className="max-w-[1280px] mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-18 py-3">
          {/* Logo */}
          <a href="#hero" className="flex items-center">
            <SyntaxSoulLogo size={42} showText />
          </a>

          {/* Desktop links */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-sm font-medium text-[#8A9BBF] hover:text-[#00E5FF] transition-colors duration-200 relative group"
              >
                {item.label}
                <span className="absolute -bottom-0.5 left-0 w-0 h-px bg-gradient-to-r from-[#00E5FF] to-[#8B2FE8] group-hover:w-full transition-all duration-300" />
              </a>
            ))}
          </div>

          {/* CTA + mobile hamburger */}
          <div className="flex items-center gap-4">
            <a
              href="#contact"
              className="hidden md:inline-flex items-center px-5 py-2.5 rounded-lg text-sm font-semibold text-navy-card transition-all duration-300 hover:scale-105 neon-glow-cyan"
              style={{ background: 'linear-gradient(135deg, #00E5FF, #8B2FE8)' }}
            >
              Falar conosco
            </a>

            {/* Mobile menu toggle */}
            <button
              className="md:hidden text-[#8A9BBF] hover:text-white transition-colors"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Abrir menu"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {menuOpen
                  ? <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  : <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                }
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile dropdown */}
        {menuOpen && (
          <div className="md:hidden pb-4 pt-1 border-t border-white/5">
            <div className="flex flex-col gap-3 mt-3">
              {navLinks.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={() => setMenuOpen(false)}
                  className="text-sm font-medium text-[#8A9BBF] hover:text-[#00E5FF] transition-colors px-2 py-1"
                >
                  {item.label}
                </a>
              ))}
              <a
                href="#contact"
                onClick={() => setMenuOpen(false)}
                className="inline-flex items-center justify-center mt-1 px-5 py-3 rounded-lg text-sm font-semibold text-navy-card"
                style={{ background: 'linear-gradient(135deg, #00E5FF, #8B2FE8)' }}
              >
                Falar conosco
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
