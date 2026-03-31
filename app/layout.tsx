import type { Metadata } from 'next'
import './globals.css'
import { soulMono, soulSans } from '@/app/fonts'

export const metadata: Metadata = {
  title: 'SyntaxSoul | Forjando Tecnologia com Alma',
  description: 'A SyntaxSoul projeta e constrói software com densidade técnica, presença visual e arquitetura pronta para evoluir.',
  keywords: [
    'SyntaxSoul',
    'desenvolvimento de software',
    'arquitetura de sistemas',
    'interfaces digitais',
    'IA aplicada',
    'integrações',
  ],
  openGraph: {
    title: 'SyntaxSoul | Forjando Tecnologia com Alma',
    description: 'Software sob medida com arquitetura, IA aplicada e experiências digitais que carregam intenção.',
    type: 'website',
    siteName: 'SyntaxSoul',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR" className={`${soulSans.variable} ${soulMono.variable} scroll-smooth`}>
      <head>
        <meta name="theme-color" content="#020611" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Organization',
              name: 'SyntaxSoul',
              description: 'Software sob medida com foco em arquitetura, clareza de produto e experiências digitais com presença.',
              url: 'https://syntaxsoul.com',
            }),
          }}
        />
      </head>
      <body className="bg-[var(--ss-bg)] text-[var(--ss-text)] antialiased">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-full focus:bg-white focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:text-[#020611]"
        >
          Pular para o conteúdo
        </a>
        {children}
      </body>
    </html>
  )
}
