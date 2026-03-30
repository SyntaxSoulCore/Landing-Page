'use client'

import { motion } from 'framer-motion'
import SyntaxSoulMascot from '@/app/components/ui/SyntaxSoulMascot'

const techStack = [
  { category: 'Backend', items: ['Node.js', 'NestJS', 'Java', 'Spring Boot'], color: '#00E5FF' },
  { category: 'Dados', items: ['PostgreSQL', 'Redis', 'MongoDB'], color: '#8B2FE8' },
  { category: 'DevOps', items: ['Docker', 'CI/CD', 'Kubernetes'], color: '#00E5FF' },
  { category: 'Arquitetura', items: ['Event-driven', 'Microservices', 'Clean Arch'], color: '#8B2FE8' },
]

const codeSnippet = `// SyntaxSoul — Arquitetura orientada a eventos
@Injectable()
export class OrderService {
  constructor(
    private readonly eventBus: EventBus,
    private readonly repo: OrderRepository,
  ) {}

  async placeOrder(dto: CreateOrderDto): Promise<Order> {
    const order = await this.repo.create(dto);
    
    // Publica evento para microserviços downstream
    await this.eventBus.publish(
      new OrderPlacedEvent(order.id, order.userId)
    );
    
    return order; // < 50ms p99
  }
}`

/* Simple syntax highlighter — marks keywords cyan, strings green, comments purple */
function renderCode(code: string) {
  const keywords = ['const', 'async', 'await', 'return', 'new', 'private', 'readonly', 'export', 'class', 'constructor']
  const lines = code.split('\n')
  return lines.map((line, i) => {
    if (line.trim().startsWith('//')) {
      return (
        <span key={i} className="block text-[#8B2FE8]/80">{line}{'\n'}</span>
      )
    }
    const parts: React.ReactNode[] = []
    let remaining = line
    let idx = 0
    // simple pass — highlight keywords
    while (remaining.length > 0) {
      let matched = false
      for (const kw of keywords) {
        if (remaining.startsWith(kw) && (remaining[kw.length] === undefined || /\W/.test(remaining[kw.length]))) {
          parts.push(<span key={`${i}-${idx}`} className="text-[#00E5FF]">{kw}</span>)
          remaining = remaining.slice(kw.length)
          idx++
          matched = true
          break
        }
      }
      if (!matched) {
        if (remaining[0] === "'") {
          const end = remaining.indexOf("'", 1)
          const str = end > 0 ? remaining.slice(0, end + 1) : remaining[0]
          parts.push(<span key={`${i}-${idx}`} className="text-emerald-400">{str}</span>)
          remaining = remaining.slice(str.length)
        } else {
          parts.push(remaining[0])
          remaining = remaining.slice(1)
        }
        idx++
      }
    }
    return <span key={i} className="block">{parts}{'\n'}</span>
  })
}

export default function Tech() {
  return (
    <section
      id="tech"
      className="py-24 relative overflow-hidden"
      style={{ background: '#080C14' }}
      aria-label="Stack técnico"
    >
      <div className="section-divider absolute top-0 left-0 right-0" aria-hidden="true" />

      {/* Background grid */}
      <div className="absolute inset-0 circuit-lines opacity-40 pointer-events-none" aria-hidden="true" />

      <div className="relative z-10 max-w-[1280px] mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <p className="text-xs font-semibold text-[#00E5FF] tracking-[0.2em] uppercase mb-3">Tecnologia</p>
          <h2 className="text-3xl sm:text-4xl font-black mb-4">
            Stack <span className="gradient-text">Técnico</span>
          </h2>
          <p className="text-[#8A9BBF] max-w-xl mx-auto">
            Tecnologias battle-tested escolhidas por performance, ecossistema e manutenibilidade.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left: Code block + tech tags */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="space-y-6"
          >
            {/* Code block */}
            <div className="rounded-2xl border border-[#00E5FF]/15 overflow-hidden shadow-[0_0_40px_rgba(0,229,255,0.07)]">
              <div className="flex items-center gap-2 px-4 py-3 border-b border-[#00E5FF]/10"
                style={{ background: 'rgba(0,229,255,0.04)' }}>
                <div className="flex gap-1.5">
                  <span className="w-3 h-3 rounded-full bg-red-500/70" />
                  <span className="w-3 h-3 rounded-full bg-yellow-500/70" />
                  <span className="w-3 h-3 rounded-full bg-green-500/70" />
                </div>
                <span className="text-xs text-[#8A9BBF] font-mono ml-2">order.service.ts</span>
                <span className="ml-auto text-[10px] text-[#00E5FF]/60 font-mono">TypeScript</span>
              </div>
              <pre
                className="p-5 text-xs leading-6 overflow-x-auto font-mono text-gray-300"
                style={{ background: 'rgba(8,12,20,0.95)' }}
              >
                <code>{renderCode(codeSnippet)}</code>
              </pre>
            </div>

            {/* Tech tags grid */}
            <div className="grid grid-cols-2 gap-5">
              {techStack.map((group) => (
                <div key={group.category} className="space-y-2">
                  <p
                    className="text-[10px] font-bold uppercase tracking-[0.2em]"
                    style={{ color: group.color }}
                  >
                    {group.category}
                  </p>
                  <div className="flex flex-wrap gap-1.5">
                    {group.items.map((tech) => (
                      <span
                        key={tech}
                        className="px-2.5 py-1 text-xs font-medium rounded-lg border text-[#8A9BBF] transition-colors duration-200 hover:text-white"
                        style={{
                          borderColor: `${group.color}25`,
                          background: `${group.color}08`,
                        }}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right: Mascot + caption */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex flex-col items-center justify-center gap-8"
            aria-hidden="true"
          >
            <div className="relative">
              <div
                className="absolute inset-[-12px] rounded-full opacity-15 animate-pulse-glow"
                style={{ background: 'radial-gradient(circle, #8B2FE8 0%, transparent 70%)' }}
              />
              <SyntaxSoulMascot size={300} />
            </div>

            <div className="text-center space-y-3 max-w-xs">
              <p className="text-xl font-bold text-white">Código que se explica</p>
              <p className="text-sm text-[#8A9BBF] leading-relaxed">
                Cada decisão de arquitetura é documentada, cada padrão tem propósito.
                Nossos sistemas são construídos para ser entendidos — não apenas executados.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
