import { setRequestLocale } from 'next-intl/server'
import { Hero } from '@/components/sections/hero'
import { About } from '@/components/sections/about'
import { ProductGrid } from '@/components/sections/product-grid'
import { WhyChoose } from '@/components/sections/why-choose'
import { Testimonials } from '@/components/sections/testimonials'
import { WhatsAppCTA } from '@/components/sections/whatsapp-cta'
import { locales } from '@/i18n/config'

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }))
}

export default async function HomePage({ params }: { params: { locale: string } }) {
  const { locale } = params
  setRequestLocale(locale)

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
