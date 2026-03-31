import Image from 'next/image'
import SyntaxSoulLogo from '@/app/components/ui/SyntaxSoulLogo'
import { logoSecondary } from '@/app/lib/brand-assets'

const footerLinks = [
  { label: 'Essência', href: '#proof' },
  { label: 'Capacidades', href: '#services' },
  { label: 'Arquitetura', href: '#tech' },
  { label: 'Impacto', href: '#cases' },
  { label: 'Contato', href: '#contact' },
]

export default function Footer() {
  return (
    <footer className="relative overflow-hidden" aria-label="Rodapé">
      <div className="glow-divider absolute left-0 right-0 top-0" aria-hidden="true" />

      <div className="section-shell py-12">
        <div className="grid gap-10 md:grid-cols-[minmax(0,1fr)_220px_220px]">
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <SyntaxSoulLogo size={36} showText={false} />
              <Image
                src={logoSecondary}
                alt=""
                width={144}
                height={117}
                className="h-auto w-36"
              />
            </div>
            <p className="body-muted max-w-md text-sm leading-7">
              A SyntaxSoul combina arquitetura, experiência e presença visual para construir software que não se dissolve
              no ruído.
            </p>
          </div>

          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[var(--ss-cyan)]">Mapa</p>
            <ul className="mt-4 space-y-2">
              {footerLinks.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="text-sm text-[var(--ss-muted)] hover:text-white">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[var(--ss-cyan)]">Contato</p>
            <a href="mailto:hello@syntaxsoul.com" className="mt-4 block text-sm text-white hover:text-[var(--ss-cyan)]">
              hello@syntaxsoul.com
            </a>
            <p className="body-muted mt-3 text-sm leading-7">
              Conversas iniciais com foco em contexto, problema e direção técnica viável.
            </p>
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-3 border-t border-white/10 pt-8 text-xs sm:flex-row sm:items-center sm:justify-between">
          <p className="text-white/55">© {new Date().getFullYear()} SyntaxSoul. Todos os direitos reservados.</p>
          <p className="font-mono text-white/35">produto · arquitetura · interfaces · IA aplicada</p>
        </div>
      </div>
    </footer>
  )
}
