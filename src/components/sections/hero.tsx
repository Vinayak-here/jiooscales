'use client'

import { motion } from 'framer-motion'
import {
  ArrowRight,
  MessageCircle,
  Phone,
} from 'lucide-react'
import { Link } from '@/i18n/navigation'
import heroBg from '@/assets/hero-bg.jpg'
import jiooHq from '@/assets/logos/Logo Gradient.svg'
import { Button } from '@/components/ui/button'
import { site } from '@/lib/site'
import { useTranslations } from 'next-intl'
import Image from 'next/image'

export function Hero() {
  const t = useTranslations('hero')
  const tCta = useTranslations('cta')
  return (
    <section className="relative isolate overflow-hidden bg-slate-900 text-white">
      <Image
        src={heroBg}
        alt="Industrial weighing platform"
        className="absolute inset-0 h-full w-full object-cover opacity-35"
        priority
      />
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900/95 via-blue-950/80 to-[oklch(0.3_0.18_240)]/70 backdrop-blur-sm" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,oklch(0.55_0.22_265/0.4),transparent_60%)]" />

      {/* Floating elements */}
      <motion.div
        animate={{ y: [0, -18, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
        className="glass absolute top-[22%] left-[8%] hidden h-24 w-24 rounded-2xl md:block"
      />
      <motion.div
        animate={{ y: [0, 14, 0] }}
        transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }}
        className="glass absolute top-[60%] right-[10%] hidden h-32 w-32 rounded-full md:block"
      />
      <motion.div
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
        className="glass absolute top-[15%] right-[18%] hidden h-16 w-16 rounded-xl md:block"
      />

      <div className="relative mx-auto max-w-7xl px-4 py-17 md:px-6 md:py-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-3xl text-center"
        >
          <div className="glass inline-flex items-center justify-center rounded-2xl px-5 py-3">
            <Image
              src={jiooHq}
              alt="Jioo Weighing System"
              className="h-24 w-auto md:h-32"
            />
          </div>
          <h1 className="font-display mt-6 text-4xl leading-tight font-bold md:text-6xl">
            {t('title1')}
            <br />
            <span className="bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
              {t('title2')}
            </span>
          </h1>
          <p className="mt-6 text-base text-white/75 md:text-lg">
            {t('subtitle')}
          </p>

          <div className="mt-9 flex flex-wrap items-center justify-center gap-3">
            <Button
              asChild
              size="lg"
              className="border-0 bg-gradient-to-r from-blue-600 to-cyan-500 text-white shadow-lg hover:opacity-95"
            >
              <Link href="/products">
                {tCta('viewProducts')} <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-white/30 bg-white/5 text-white hover:bg-white/15 hover:text-white"
            >
              <Link href="/contact">
                <Phone className="mr-2 h-4 w-4" /> {tCta('contactUs')}
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              className="border-0 bg-[#25D366] text-white hover:bg-[#20bd5a]"
            >
              <a
                href={site.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                <MessageCircle className="mr-2 h-4 w-4" /> {tCta('whatsapp')}
              </a>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
