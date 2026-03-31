import Image from 'next/image'
import { bannerWide } from '@/app/lib/brand-assets'

const cases = [
  {
    title: 'Menos ruído entre visão e execução',
    description: 'Quando produto, engenharia e interface são definidos na mesma mesa, sobra menos retrabalho e mais clareza do que deve entrar em produção.',
  },
  {
    title: 'Base mais segura para evoluir',
    description: 'A sensação muda rápido: o código deixa de pedir desculpas para cada nova entrega e passa a aceitar expansão com menos tensão estrutural.',
  },
  {
    title: 'Experiência com assinatura própria',
    description: 'O produto deixa de parecer intercambiável. A marca aparece no ritmo da navegação, no contraste da interface e na confiança que o fluxo transmite.',
  },
]

export default function Cases() {
  return (
    <section id="cases" className="relative overflow-hidden py-24" aria-label="Impacto">
      <div className="glow-divider absolute left-0 right-0 top-0" aria-hidden="true" />
      <div className="halo-cyan left-[-5%] top-0 h-[22rem] w-[22rem]" aria-hidden="true" />
      <div className="halo-violet bottom-[-10%] right-[-5%] h-[24rem] w-[24rem]" aria-hidden="true" />

      <div className="section-shell relative z-10">
        <div className="max-w-[42rem]">
          <span className="eyebrow">Impacto</span>
          <h2 className="mt-6 text-balance text-4xl font-semibold tracking-[-0.05em] text-white sm:text-5xl">
            O que deve mudar depois da primeira entrega.
          </h2>
          <p className="body-muted mt-6 text-lg leading-8">
            O efeito esperado não é cosmético. A diferença aparece no código, na velocidade das próximas decisões e na
            forma como o produto passa a ser percebido.
          </p>
        </div>

        <div className="line-panel mt-12 overflow-hidden rounded-[2rem]">
          <div className="relative aspect-[16/6]">
            <Image
              src={bannerWide}
              alt=""
              fill
              sizes="100vw"
              className="object-cover object-center opacity-70"
            />
            <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(2,6,17,0.18),rgba(2,6,17,0.78))]" />
          </div>
        </div>

        <div className="mt-12 grid gap-7 lg:grid-cols-3">
          {cases.map((item, i) => (
            <article key={item.title} className="border-t border-white/12 pt-6">
              <p className="text-sm font-medium tracking-[0.22em] text-[var(--ss-cyan)]">{`0${i + 1}`}</p>
              <h3 className="mt-4 text-2xl font-semibold text-white">{item.title}</h3>
              <p className="body-muted mt-4 text-base leading-7">{item.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
