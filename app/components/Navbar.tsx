'use client'

import { useState, useEffect } from 'react'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-black/90 backdrop-blur-md border-b border-white/10' : 'bg-transparent'
      }`}
      aria-label="Navegação principal"
    >
      <div className="max-w-[1280px] mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <a href="#hero" className="flex items-center gap-2">
            <span className="text-xl font-black gradient-text">SyntaxSoul</span>
          </a>

          <div className="hidden md:flex items-center gap-8">
            {[
              { label: 'Soluções', href: '#services' },
              { label: 'Stack', href: '#tech' },
              { label: 'Cases', href: '#cases' },
            ].map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-sm text-gray-400 hover:text-white transition-colors duration-200"
              >
                {item.label}
              </a>
            ))}
          </div>

          <a
            href="#contact"
            className="inline-flex items-center px-5 py-2.5 rounded-lg text-sm font-semibold text-black transition-all duration-300 hover:scale-105"
            style={{ background: 'linear-gradient(135deg, #00FFFF, #8B5CF6)' }}
          >
            Falar conosco
          </a>
        </div>
      </div>
    </nav>
  )
}
