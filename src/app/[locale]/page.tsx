import { Hero } from '@/components/sections/hero'
import { About } from '@/components/sections/about'
import { ProductGrid } from '@/components/sections/product-grid'
import { WhyChoose } from '@/components/sections/why-choose'
import { Testimonials } from '@/components/sections/testimonials'
import { WhatsAppCTA } from '@/components/sections/whatsapp-cta'

export default function HomePage() {
  return (
    <>
      <Hero />
      <About />
      <ProductGrid />
      <WhyChoose />
      <Testimonials />
      <WhatsAppCTA />
    </>
  )
}
