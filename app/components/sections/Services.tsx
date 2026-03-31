import Image from 'next/image'
import { logoPrimary } from '@/app/lib/brand-assets'

const services = [
  {
    index: '01',
    title: 'Produtos e plataformas sob medida',
    bullets: [
      'Aplicações web, painéis operacionais, fluxos internos e experiências digitais com identidade própria.',
      'Estrutura pensada para crescer sem colapsar quando o produto deixa de ser MVP.',
    ],
  },
  {
    index: '02',
    title: 'Arquitetura e integrações críticas',
    bullets: [
      'APIs, contratos entre serviços, refatoração de legado e desenho de fluxos orientados a contexto.',
      'Integrações que deixam de ser pontos frágeis e passam a operar como parte estável do produto.',
    ],
  },
  {
    index: '03',
    title: 'IA aplicada no ponto certo',
    bullets: [
      'Copilotos, automações, classificação, busca semântica e experiências assistidas que ajudam de verdade.',
      'Nada de IA ornamental: a camada inteligente entra onde reduz tempo, erro ou esforço cognitivo.',
    ],
  },
  {
    index: '04',
    title: 'Interfaces com presença',
    bullets: [
      'Landing pages, jornadas de onboarding, painéis e superfícies que parecem feitos para a marca e não para o catálogo.',
      'Design e implementação caminham juntos para preservar intenção, performance e legibilidade.',
    ],
  },
]

export default function Services() {
  return (
    <section id="services" className="relative overflow-hidden py-24" aria-label="Capacidades">
      <div className="section-shell relative z-10 grid gap-14 lg:grid-cols-[minmax(320px,0.72fr)_minmax(0,1fr)]">
        <div className="lg:sticky lg:top-28 lg:self-start">
          <span className="eyebrow">Capacidades</span>
          <h2 className="mt-6 max-w-[14ch] text-balance text-4xl font-semibold tracking-[-0.05em] text-white sm:text-5xl">
            Uma stack inteira falando a mesma língua.
          </h2>
          <p className="body-muted mt-6 max-w-[33rem] text-lg leading-8">
            A SyntaxSoul opera onde a marca encontra a engenharia. Não é só construir telas ou endpoints; é alinhar
            decisão, arquitetura e experiência para que o produto respire como uma coisa só.
          </p>

          <div className="line-panel relative mt-10 overflow-hidden rounded-[2rem]">
            <div className="relative aspect-square">
              <Image
                src={logoPrimary}
                alt=""
                fill
                sizes="(max-width: 1024px) 100vw, 28vw"
                className="object-cover opacity-90"
              />
              <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(2,6,17,0.08),rgba(2,6,17,0.78))]" />
              <div className="absolute inset-x-6 bottom-6 text-sm leading-7 text-white/74">
                Identidade visual e sistema técnico não precisam competir. Quando trabalham juntos, o produto ganha
                assinatura.
              </div>
            </div>
          </div>
        </div>

        <div className="border-y border-white/10">
          {services.map((service) => (
            <article
              key={service.title}
              className="grid gap-5 border-b border-white/10 py-8 last:border-b-0 md:grid-cols-[96px_minmax(0,1fr)]"
            >
              <p className="text-sm font-medium tracking-[0.22em] text-[var(--ss-cyan)]">{service.index}</p>

              <div>
                <h3 className="text-2xl font-semibold text-white">{service.title}</h3>
                <ul className="mt-5 grid gap-4">
                  {service.bullets.map((bullet) => (
                    <li key={bullet} className="body-muted flex gap-3 text-base leading-7">
                      <span className="mt-2 h-2 w-2 rounded-full bg-[var(--ss-cyan-strong)]" aria-hidden="true" />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
