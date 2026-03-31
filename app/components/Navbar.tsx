'use client'

import { useEffect, useState } from 'react'
import SyntaxSoulLogo from '@/app/components/ui/SyntaxSoulLogo'

const navLinks = [
  { label: 'Essência', href: '#proof' },
  { label: 'Capacidades', href: '#services' },
  { label: 'Arquitetura', href: '#tech' },
  { label: 'Impacto', href: '#cases' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)

    handleScroll()
    window.addEventListener('scroll', handleScroll, { passive: true })

    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav
      className={`fixed left-0 right-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'border-b border-white/10 bg-[rgba(5,10,24,0.82)] shadow-[0_20px_60px_rgba(1,3,10,0.45)] backdrop-blur-[18px]'
          : 'bg-transparent'
      }`}
      aria-label="Navegação principal"
    >
      <div className="section-shell">
        <div className="flex items-center justify-between py-4">
          <a href="#hero" className="flex items-center gap-3" aria-label="Voltar ao topo">
            <SyntaxSoulLogo size={34} showText={false} />
            <div className="hidden sm:block">
              <p className="text-sm font-semibold tracking-[0.18em] text-white">SyntaxSoul</p>
              <p className="text-[0.68rem] uppercase tracking-[0.28em] text-[var(--ss-muted)]">
                Forjando tecnologia com alma
              </p>
            </div>
          </a>

          <div className="hidden md:flex items-center gap-7">
            {navLinks.map((item) => (
              <a key={item.label} href={item.href} className="text-sm font-medium text-[var(--ss-muted)] hover:text-white">
                {item.label}
              </a>
            ))}
          </div>

          <div className="flex items-center gap-4">
            <a
              href="#contact"
              className="hidden md:inline-flex items-center rounded-full border border-[rgba(137,246,255,0.26)] bg-[linear-gradient(135deg,rgba(137,246,255,0.18),rgba(138,98,255,0.22))] px-5 py-2.5 text-sm font-semibold text-white shadow-[0_0_35px_rgba(45,219,255,0.12)] hover:-translate-y-0.5 hover:border-[rgba(137,246,255,0.45)]"
            >
              Iniciar conversa
            </a>

            <button
              className="md:hidden rounded-full border border-white/10 bg-white/[0.03] p-2 text-[var(--ss-muted)] hover:text-white"
              onClick={() => setMenuOpen((open) => !open)}
              aria-label="Abrir menu"
              aria-expanded={menuOpen}
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

        {menuOpen && (
          <div className="md:hidden pb-4 pt-2">
            <div className="soft-panel flex flex-col gap-2 rounded-[1.6rem] px-4 py-4">
              {navLinks.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={() => setMenuOpen(false)}
                  className="rounded-2xl px-3 py-2 text-sm font-medium text-[var(--ss-muted)] hover:bg-white/[0.04] hover:text-white"
                >
                  {item.label}
                </a>
              ))}
              <a
                href="#contact"
                onClick={() => setMenuOpen(false)}
                className="mt-2 inline-flex items-center justify-center rounded-full border border-[rgba(137,246,255,0.26)] bg-[linear-gradient(135deg,rgba(137,246,255,0.18),rgba(138,98,255,0.22))] px-5 py-3 text-sm font-semibold text-white"
              >
                Iniciar conversa
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
