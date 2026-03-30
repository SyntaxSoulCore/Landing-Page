import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'SyntaxSoul | Forjando Tecnologia com Alma',
  description: 'Desenvolvimento de software sob medida: sistemas escaláveis, arquitetura limpa, integrações e IA aplicada. Transformamos ideias em tecnologia de alta performance.',
  keywords: 'desenvolvimento software, arquitetura sistemas, Node.js, NestJS, Java, Spring Boot, integrações API',
  openGraph: {
    title: 'SyntaxSoul | Forjando Tecnologia com Alma',
    description: 'Desenvolvimento de software sob medida: sistemas escaláveis, arquitetura limpa, integrações e IA aplicada.',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR" className="scroll-smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Organization',
              name: 'SyntaxSoul',
              description: 'Desenvolvimento de software sob medida com foco em performance, escalabilidade e arquitetura limpa.',
              url: 'https://syntaxsoul.com',
            }),
          }}
        />
      </head>
      <body className="bg-black text-white antialiased">
        {children}
      </body>
    </html>
  )
}
