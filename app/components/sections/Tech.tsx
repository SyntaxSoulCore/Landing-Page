import Image from 'next/image'
import { mascotCode } from '@/app/lib/brand-assets'

const techStack = [
  { category: 'Backend', items: ['Node.js', 'NestJS', 'Java', 'Spring Boot'] },
  { category: 'Dados', items: ['PostgreSQL', 'Redis', 'MongoDB'] },
  { category: 'Infra', items: ['Docker', 'CI/CD', 'observabilidade'] },
  { category: 'Arquitetura', items: ['event-driven', 'modularidade', 'contratos claros'] },
]

const process = [
  {
    title: 'Leitura do contexto primeiro',
    description: 'Antes de escrever solução, mapeamos acoplamentos, gargalos e os limites reais de evolução do produto.',
  },
  {
    title: 'Estrutura para durar',
    description: 'Definimos o esqueleto técnico que deixa integrações, front e regra de negócio evoluírem sem atrito sistêmico.',
  },
  {
    title: 'Construção em ciclos legíveis',
    description: 'A entrega avança em incrementos claros, com contratos compreensíveis e feedback prático no caminho.',
  },
]

const codeSnippet = `export async function forgeExperience(context: ProductContext) {
  const foundation = alignArchitecture(context)
  const interfaceLayer = craftInterface(foundation)
  const automationLayer = attachIntelligence(interfaceLayer)

  return {
    foundation,
    interfaceLayer,
    automationLayer,
  }
}`

function renderCode(code: string) {
  const keywords = ['const', 'async', 'await', 'return', 'export', 'function']
  const lines = code.split('\n')

  return lines.map((line, i) => {
    const parts: React.ReactNode[] = []
    let remaining = line
    let idx = 0

    while (remaining.length > 0) {
      let matched = false

      for (const keyword of keywords) {
        if (
          remaining.startsWith(keyword) &&
          (remaining[keyword.length] === undefined || /\W/.test(remaining[keyword.length]))
        ) {
          parts.push(
            <span key={`${i}-${idx}`} className="text-[var(--ss-cyan)]">
              {keyword}
            </span>,
          )
          remaining = remaining.slice(keyword.length)
          idx++
          matched = true
          break
        }
      }

      if (!matched) {
        parts.push(remaining[0])
        remaining = remaining.slice(1)
        idx++
      }
    }

    return (
      <span key={i} className="block">
        {parts}
        {'\n'}
      </span>
    )
  })
}

export default function Tech() {
  return (
    <section id="tech" className="relative overflow-hidden py-24" aria-label="Arquitetura e stack">
      <div className="glow-divider absolute left-0 right-0 top-0" aria-hidden="true" />
      <div className="ethereal-grid absolute inset-0 opacity-35" aria-hidden="true" />

      <div className="section-shell relative z-10">
        <div className="mb-14 max-w-[42rem]">
          <span className="eyebrow">Arquitetura</span>
          <h2 className="mt-6 text-balance text-4xl font-semibold tracking-[-0.05em] text-white sm:text-5xl">
            Tecnologia viva precisa de estrutura respirável.
          </h2>
          <p className="body-muted mt-6 text-lg leading-8">
            O stack importa, mas o que sustenta o produto é a forma como cada camada conversa. Escolhemos tecnologia
            pela clareza de evolução, não pelo brilho passageiro do hype.
          </p>
        </div>

        <div className="grid items-center gap-12 lg:grid-cols-[minmax(320px,0.82fr)_minmax(0,1fr)]">
          <div className="relative">
            <div className="halo-cyan left-[10%] top-[8%] h-[16rem] w-[16rem]" aria-hidden="true" />
            <div className="halo-violet bottom-[5%] right-[10%] h-[15rem] w-[15rem]" aria-hidden="true" />

            <div className="line-panel relative overflow-hidden rounded-[2rem]">
              <div className="relative aspect-[0.88]">
                <Image
                  src={mascotCode}
                  alt=""
                  fill
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  className="object-contain p-8"
                />
                <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(137,246,255,0.03),transparent_28%,transparent_68%,rgba(203,121,255,0.08))]" />
              </div>

              <div className="soft-panel absolute inset-x-4 bottom-4 rounded-[1.4rem] p-4 sm:inset-x-6 sm:bottom-6 sm:p-5">
                <div className="mb-3 flex items-center justify-between">
                  <span className="text-[0.7rem] uppercase tracking-[0.28em] text-[var(--ss-muted)]">blueprint.ts</span>
                  <span className="rounded-full border border-white/10 px-3 py-1 text-[0.7rem] uppercase tracking-[0.2em] text-white/75">
                    TypeScript
                  </span>
                </div>
                <pre className="overflow-x-auto font-mono text-[0.72rem] leading-6 text-white/76 sm:text-xs">
                  <code>{renderCode(codeSnippet)}</code>
                </pre>
              </div>
            </div>
          </div>

          <div className="space-y-10">
            <div className="space-y-7">
              {process.map((step, i) => (
                <article key={step.title} className="border-t border-white/10 pt-6">
                  <p className="text-sm font-medium tracking-[0.22em] text-[var(--ss-cyan)]">{`0${i + 1}`}</p>
                  <h3 className="mt-4 text-2xl font-semibold text-white">{step.title}</h3>
                  <p className="body-muted mt-4 text-base leading-7">{step.description}</p>
                </article>
              ))}
            </div>

            <div className="grid gap-5 sm:grid-cols-2">
              {techStack.map((group) => (
                <div key={group.category} className="border-t border-white/10 pt-4">
                  <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[var(--ss-cyan)]">
                    {group.category}
                  </p>
                  <p className="body-muted mt-3 text-sm leading-7">{group.items.join(' · ')}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
