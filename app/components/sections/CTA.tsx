import Image from 'next/image'
import { logoSecondary, mascotCore } from '@/app/lib/brand-assets'

export default function CTA() {
  return (
    <section id="contact" className="relative overflow-hidden py-24" aria-label="Contato">
      <div className="glow-divider absolute left-0 right-0 top-0" aria-hidden="true" />

      <div className="section-shell relative z-10">
        <div className="line-panel relative overflow-hidden rounded-[2.5rem]">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(137,246,255,0.14),transparent_28%),radial-gradient(circle_at_bottom_right,rgba(203,121,255,0.16),transparent_32%)]" />
          <div className="noise-overlay" aria-hidden="true" />

          <div className="relative grid gap-12 p-8 sm:p-12 lg:grid-cols-[minmax(0,1fr)_360px] lg:p-16">
            <div className="max-w-[42rem]">
              <Image
                src={logoSecondary}
                alt=""
                width={208}
                height={169}
                className="mb-8 h-auto w-[11rem] sm:w-[13rem]"
              />

              <span className="eyebrow">Contato</span>
              <h2 className="mt-6 max-w-[14ch] text-balance text-4xl font-semibold tracking-[-0.05em] text-white sm:text-5xl lg:text-6xl">
                Traga o briefing. A travessia técnica a gente desenha junto.
              </h2>
              <p className="body-muted mt-6 max-w-[36rem] text-lg leading-8">
                Se a ideia exige mais densidade do que um template entrega, a conversa certa começa por contexto,
                objetivo e limites reais do produto.
              </p>

              <div className="mt-9 flex flex-col gap-4 sm:flex-row">
                <a
                  href="mailto:hello@syntaxsoul.com"
                  className="inline-flex items-center justify-center rounded-full bg-[linear-gradient(135deg,var(--ss-cyan),var(--ss-violet),var(--ss-orchid))] px-7 py-4 text-sm font-semibold text-[#020611] shadow-[0_22px_45px_rgba(45,219,255,0.24)] hover:-translate-y-0.5"
                >
                  hello@syntaxsoul.com
                </a>
                <a
                  href="#hero"
                  className="pill-link justify-center text-white hover:border-[rgba(137,246,255,0.35)] hover:bg-white/[0.05]"
                >
                  Revisitar manifesto
                </a>
              </div>

              <div className="mt-8 flex flex-wrap gap-6 text-sm text-white/70">
                {['Produto com intenção', 'Arquitetura legível', 'IA aplicada com critério'].map((item) => (
                  <span key={item} className="inline-flex items-center gap-2">
                    <span className="h-2 w-2 rounded-full bg-[var(--ss-cyan-strong)]" aria-hidden="true" />
                    {item}
                  </span>
                ))}
              </div>
            </div>

            <div className="relative flex items-center justify-center">
              <div className="halo-cyan left-[8%] top-[12%] h-[13rem] w-[13rem]" aria-hidden="true" />
              <div className="halo-violet bottom-[8%] right-[8%] h-[12rem] w-[12rem]" aria-hidden="true" />

              <div className="relative aspect-[0.82] w-full max-w-[21rem] animate-drift">
                <Image
                  src={mascotCore}
                  alt=""
                  fill
                  sizes="(max-width: 1024px) 80vw, 360px"
                  className="object-contain"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
