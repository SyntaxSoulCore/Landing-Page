import Navbar from '@/app/components/Navbar'
import Hero from '@/app/components/sections/Hero'
import ProofOfValue from '@/app/components/sections/ProofOfValue'
import Services from '@/app/components/sections/Services'
import Tech from '@/app/components/sections/Tech'
import Cases from '@/app/components/sections/Cases'
import CTA from '@/app/components/sections/CTA'
import Footer from '@/app/components/Footer'

export default function Home() {
  return (
    <>
      <Navbar />
      <main id="main-content" className="overflow-hidden">
        <Hero />
        <ProofOfValue />
        <Services />
        <Tech />
        <Cases />
        <CTA />
      </main>
      <Footer />
    </>
  )
}
