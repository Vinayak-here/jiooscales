'use client'

import { Link, usePathname } from '@/i18n/navigation'
import { useState } from 'react'
import { Menu, X, Phone } from 'lucide-react'
import logo from '@/assets/logos/colored-logo.svg'
import { site } from '@/lib/site'
import { Button } from '@/components/ui/button'
import { LanguageSwitcher } from '@/components/language-switcher'
import { useTranslations } from 'next-intl'
import Image from 'next/image'

export function SiteHeader() {
  const [open, setOpen] = useState(false)
  const pathname = usePathname()
  const t = useTranslations('nav')

  const nav = [
    { to: '/', label: t('home') },
    { to: '/about', label: t('about') },
    { to: '/products', label: t('products') },
    { to: '/contact', label: t('contact') },
  ] as const

  return (
    <header className="bg-white shadow-sm sticky top-0 z-40 w-full">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 md:px-6">
        <Link
          href="/"
          className="flex items-center gap-2"
          onClick={() => setOpen(false)}
        >
          <Image
            src={logo}
            alt={`${site.brand} logo`}
            className="h-14 w-auto md:h-16"
          />
        </Link>

        <nav className="hidden items-center gap-1 md:flex">
          {nav.map((item) => {
            const active = pathname === item.to
            return (
              <Link
                key={item.to}
                href={item.to}
                className={`rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                  active
                    ? 'bg-secondary text-foreground'
                    : 'text-muted-foreground hover:text-foreground'
                }`}
              >
                {item.label}
              </Link>
            )
          })}
        </nav>

        <div className="hidden items-center gap-2 md:flex">
          <LanguageSwitcher />
          <Button
            asChild
            className="gradient-brand shadow-glow text-white hover:opacity-95"
          >
            <a href={`tel:${site.phone}`}>
              <Phone className="mr-2 h-4 w-4" /> {site.phoneDisplay}
            </a>
          </Button>
        </div>

        <div className="flex items-center gap-1 md:hidden">
          <LanguageSwitcher />
          <button
            className="rounded-md p-2"
            onClick={() => setOpen((o) => !o)}
            aria-label="Toggle menu"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="bg-background border-t md:hidden">
          <div className="mx-auto flex max-w-7xl flex-col gap-1 px-4 py-3">
            {nav.map((item) => (
              <Link
                key={item.to}
                href={item.to}
                onClick={() => setOpen(false)}
                className={`rounded-lg px-3 py-2 text-sm font-medium ${
                  pathname === item.to ? 'bg-secondary' : ''
                }`}
              >
                {item.label}
              </Link>
            ))}
            <Button asChild className="gradient-brand mt-2 text-white">
              <a href={`tel:${site.phone}`}>
                <Phone className="mr-2 h-4 w-4" /> {site.phoneDisplay}
              </a>
            </Button>
          </div>
        </div>
      )}
    </header>
  )
}
