import Image from 'next/image'
import { bannerCentral } from '@/app/lib/brand-assets'

const values = [
  {
    index: '01',
    title: 'Arquitetura antes de artifício',
    description: 'Toda interface bonita precisa de um núcleo técnico que aguente escala, manutenção e contexto real.',
  },
  {
    index: '02',
    title: 'Produto com leitura humana',
    description: 'Fluxo, copy e interação precisam orientar com clareza. O usuário sente quando existe intenção na construção.',
  },
  {
    index: '03',
    title: 'Ponta a ponta sem desalinhamento',
    description: 'Backend, frontend, integrações e IA evoluem com a mesma cadência, sem repasses frágeis entre disciplinas.',
  },
]

export default function ProofOfValue() {
  return (
    <section id="proof" className="relative overflow-hidden py-24" aria-label="Essência da SyntaxSoul">
      <div className="glow-divider absolute left-0 right-0 top-0" aria-hidden="true" />

      <div className="section-shell relative">
        <div className="grid gap-10 lg:grid-cols-[minmax(0,0.72fr)_minmax(0,1fr)] lg:items-start">
          <div className="max-w-[34rem]">
            <span className="eyebrow">Essência</span>
            <h2 className="mt-6 text-balance text-4xl font-semibold tracking-[-0.05em] text-white sm:text-5xl">
              O visual é etéreo. A entrega não pode ser.
            </h2>
            <p className="body-muted mt-6 text-lg leading-8">
              A SyntaxSoul existe para dar densidade a produtos digitais. Isso significa decisão técnica clara,
              experiência consistente e uma assinatura visual que não parece derivada do mesmo template de sempre.
            </p>
          </div>

          <div className="line-panel overflow-hidden rounded-[2rem]">
            <div className="relative aspect-[16/7]">
              <Image
                src={bannerCentral}
                alt=""
                fill
                sizes="(max-width: 1024px) 100vw, 56vw"
                className="object-cover object-center opacity-90"
              />
              <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(2,6,17,0.1),rgba(2,6,17,0.74))]" />
              <div className="absolute inset-x-6 bottom-6 sm:inset-x-8 sm:bottom-8">
                <p className="max-w-[32rem] text-sm leading-7 text-white/78 sm:text-base">
                  Um posicionamento técnico forte precisa ser visto, sentido e sustentado. A marca conduz a atmosfera,
                  mas a arquitetura segura a experiência.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-16 grid gap-6 lg:grid-cols-3">
          {values.map((item) => (
            <article key={item.title} className="border-t border-white/12 pt-6">
              <p className="text-sm font-medium tracking-[0.2em] text-[var(--ss-cyan)]">{item.index}</p>
              <h3 className="mt-4 text-xl font-semibold text-white">{item.title}</h3>
              <p className="body-muted mt-4 text-base leading-7">{item.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
