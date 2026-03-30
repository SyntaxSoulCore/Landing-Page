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
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
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
      <body className="bg-navy text-[#F0F4FF] antialiased">
        {children}
      </body>
    </html>
  )
}
