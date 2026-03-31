import Image from 'next/image'
import { bannerInverted, logoSecondary, mascotOk } from '@/app/lib/brand-assets'

const signals = [
  {
    title: 'Arquitetura',
    description: 'contexto técnico sólido desde a primeira decisão',
  },
  {
    title: 'Produto',
    description: 'fluxo, copy e experiência em sintonia no percurso inteiro',
  },
  {
    title: 'IA aplicada',
    description: 'automação e inteligência só onde realmente reduzem atrito',
  },
]

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative isolate flex min-h-screen items-center overflow-hidden pt-28"
      aria-label="Manifesto de entrada"
    >
      <div className="absolute inset-0" aria-hidden="true">
        <Image
          src={bannerInverted}
          alt=""
          fill
          sizes="100vw"
          loading="eager"
          fetchPriority="high"
          className="object-cover object-center opacity-30 mix-blend-screen"
        />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(2,6,17,0.94)_0%,rgba(2,6,17,0.72)_45%,rgba(2,6,17,0.82)_100%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(137,246,255,0.12),transparent_25%),radial-gradient(circle_at_bottom_left,rgba(138,98,255,0.18),transparent_30%)]" />
      </div>

      <div className="ethereal-grid absolute inset-0 opacity-50" aria-hidden="true" />
      <div className="noise-overlay" aria-hidden="true" />
      <div className="halo-cyan left-[-8%] top-[10%] h-[26rem] w-[26rem]" aria-hidden="true" />
      <div className="halo-violet bottom-[-8%] right-[-6%] h-[28rem] w-[28rem]" aria-hidden="true" />

      <div className="section-shell relative z-10 grid gap-16 py-16 lg:grid-cols-[minmax(0,0.94fr)_minmax(360px,0.9fr)] lg:items-center lg:py-10">
        <div className="max-w-[40rem]">
          <Image
            src={logoSecondary}
            alt=""
            width={232}
            height={189}
            priority
            className="mb-7 h-auto w-[11.5rem] sm:w-[14.5rem]"
          />

          <span className="eyebrow">Presença etérea. Entrega concreta.</span>

          <h1 className="display-glow mt-6 max-w-[12ch] text-balance text-[3.25rem] font-semibold leading-[0.93] tracking-[-0.06em] text-white sm:text-[4.6rem] lg:text-[5.7rem]">
            Forjando tecnologia com alma.
          </h1>

          <p className="body-muted mt-6 max-w-[37rem] text-base leading-8 sm:text-lg">
            A SyntaxSoul projeta software sob medida com arquitetura, produto e experiência trabalhando na mesma
            frequência. Menos ruído genérico. Mais intenção técnica em cada camada.
          </p>

          <div className="mt-9 flex flex-col gap-4 sm:flex-row">
            <a
              href="#contact"
              className="inline-flex items-center justify-center rounded-full bg-[linear-gradient(135deg,var(--ss-cyan),var(--ss-violet),var(--ss-orchid))] px-7 py-4 text-sm font-semibold text-[#020611] shadow-[0_22px_45px_rgba(45,219,255,0.24)] hover:-translate-y-0.5"
            >
              Iniciar conversa
            </a>
            <a
              href="#services"
              className="pill-link justify-center text-white hover:border-[rgba(137,246,255,0.35)] hover:bg-white/[0.05]"
            >
              Explorar capacidades
            </a>
          </div>

          <div className="mt-10 grid gap-5 border-t border-white/10 pt-7 sm:grid-cols-3">
            {signals.map((signal) => (
              <div key={signal.title}>
                <p className="text-sm font-semibold text-white">{signal.title}</p>
                <p className="body-muted mt-2 text-sm leading-6">{signal.description}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="relative flex items-center justify-center lg:justify-end">
          <div className="relative aspect-[0.84] w-full max-w-[38rem]">
            <div className="halo-cyan left-[16%] top-[10%] h-[18rem] w-[18rem] animate-pulse-soft" aria-hidden="true" />
            <div className="halo-violet bottom-[8%] right-[12%] h-[17rem] w-[17rem] animate-pulse-soft" aria-hidden="true" />

            <div className="line-panel absolute inset-0 rounded-[2rem] animate-drift">
              <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(137,246,255,0.04),transparent_26%,transparent_74%,rgba(203,121,255,0.08))]" />
              <Image
                src={mascotOk}
                alt=""
                fill
                sizes="(max-width: 1024px) 100vw, 42vw"
                loading="eager"
                fetchPriority="high"
                className="object-contain p-6 sm:p-8"
              />
              <div className="absolute inset-x-6 bottom-6 rounded-full border border-white/10 bg-[rgba(6,12,28,0.72)] px-4 py-3 text-center text-xs uppercase tracking-[0.28em] text-[var(--ss-muted)] backdrop-blur-md sm:inset-x-10">
                Engenharia de software, IA aplicada e experiência digital
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
