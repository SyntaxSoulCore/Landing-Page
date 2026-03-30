'use client'

import { motion } from 'framer-motion'

const techStack = [
  { category: 'Backend', items: ['Node.js', 'NestJS', 'Java', 'Spring Boot'] },
  { category: 'Dados', items: ['PostgreSQL', 'Redis', 'MongoDB'] },
  { category: 'DevOps', items: ['Docker', 'CI/CD', 'Kubernetes'] },
  { category: 'Arquitetura', items: ['Event-driven', 'Microservices', 'Clean Arch'] },
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

export default function Tech() {
  return (
    <section
      id="tech"
      className="py-24 bg-black"
      aria-label="Stack técnico"
    >
      <div className="max-w-[1280px] mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Stack <span className="gradient-text">Técnico</span>
          </h2>
          <p className="text-gray-400 max-w-xl mx-auto">
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
            <div className="rounded-xl border border-white/10 overflow-hidden">
              <div className="flex items-center gap-2 px-4 py-3 bg-white/5 border-b border-white/10">
                <div className="flex gap-1.5">
                  <span className="w-3 h-3 rounded-full bg-red-500/60" />
                  <span className="w-3 h-3 rounded-full bg-yellow-500/60" />
                  <span className="w-3 h-3 rounded-full bg-green-500/60" />
                </div>
                <span className="text-xs text-gray-500 font-mono ml-2">order.service.ts</span>
              </div>
              <pre className="p-4 text-xs leading-relaxed overflow-x-auto font-mono text-gray-300"
                style={{ background: 'rgba(255,255,255,0.02)' }}>
                <code>{codeSnippet}</code>
              </pre>
            </div>

            {/* Tech tags grid */}
            <div className="grid grid-cols-2 gap-4">
              {techStack.map((group) => (
                <div key={group.category} className="space-y-2">
                  <p className="text-xs text-gray-500 uppercase tracking-wider font-medium">{group.category}</p>
                  <div className="flex flex-wrap gap-1.5">
                    {group.items.map((tech) => (
                      <span
                        key={tech}
                        className="px-2.5 py-1 text-xs font-medium rounded-md border border-white/10 text-gray-300 bg-white/5"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right: Mascot "explaining" */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex flex-col items-center justify-center"
            aria-hidden="true"
          >
            <div className="relative w-64 h-64 lg:w-80 lg:h-80">
              <div className="absolute inset-0 rounded-full opacity-15 animate-pulse"
                style={{ background: 'radial-gradient(circle, #8B5CF6 0%, transparent 70%)' }}
              />
              <div className="absolute inset-8 rounded-full flex items-center justify-center border border-purple-500/30"
                style={{ background: 'rgba(139,92,246,0.05)' }}
              >
                <div className="text-center">
                  <div className="text-5xl font-black gradient-text tracking-tighter">SS</div>
                  <div className="text-xs text-purple-400/70 font-mono mt-1">explicando</div>
                  <div className="mt-3 text-xl">🤓</div>
                </div>
              </div>
            </div>

            <div className="mt-8 text-center space-y-3 max-w-xs">
              <p className="text-lg font-semibold text-white">Código que se explica</p>
              <p className="text-sm text-gray-400 leading-relaxed">
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
