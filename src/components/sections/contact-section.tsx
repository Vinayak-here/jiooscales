'use client'

import { useState } from 'react'
import { Reveal } from '@/components/reveal'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Label } from '@/components/ui/label'
import {
  Mail,
  MapPin,
  Phone,
  Clock,
  MessageCircle,
  Send,
  ArrowUpRight,
} from 'lucide-react'
import { site } from '@/lib/site'
import { toast } from 'sonner'
import { useTranslations } from 'next-intl'

export function ContactSection() {
  const [loading, setLoading] = useState(false)
  const t = useTranslations()

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    setLoading(true)

    const data = new FormData(e.currentTarget)

    const name = String(data.get('name') || '')
    const message = String(data.get('message') || '')

    const text = `Hi Jioo Weighing System, I'm ${name}. ${message}`

    setTimeout(() => {
      window.open(
        `https://wa.me/91${site.phone}?text=${encodeURIComponent(text)}`,
        '_blank'
      )

      toast.success(t('contact.toast'))

      setLoading(false)
    }, 400)
  }

  const contactItems = [
    {
      icon: Phone,
      label: t('contact.phone'),
      value: site.phoneDisplay,
      sub: 'Available during business hours',
      href: `tel:${site.phone}`,
    },
    {
      icon: Mail,
      label: t('contact.email'),
      value: site.email,
      sub: 'Send us your enquiry anytime',
      href: `mailto:${site.email}`,
    },
    {
      icon: MapPin,
      label: t('contact.address'),
      value: site.location,
      sub: 'Serving customers across India',
    },
    {
      icon: Clock,
      label: t('contact.hours'),
      value: t('contact.hoursVal'),
      sub: 'Sunday closed',
    },
  ]

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-background to-muted/20 py-10 sm:py-12 md:py-16 lg:py-24">
      <div className="mx-auto w-full max-w-7xl px-3 sm:px-4 md:px-6">
        {/* SECTION HEADER */}
        <Reveal className="mx-auto max-w-3xl text-center">
          <span className="inline-flex rounded-full border border-blue-500/20 bg-blue-500/10 px-3 py-1 text-[10px] font-medium tracking-[0.18em] text-blue-600 uppercase sm:px-4 sm:text-xs sm:font-semibold sm:tracking-[0.25em]">
            {t('contact.kicker')}
          </span>

          <h2 className="mt-4 text-2xl font-semibold tracking-tight sm:text-3xl md:mt-5 md:text-4xl md:font-bold lg:text-5xl">
            {t('contact.title')}
          </h2>

          <p className="text-muted-foreground mx-auto mt-3 max-w-2xl text-sm leading-relaxed sm:mt-4 sm:text-[15px] md:mt-5 md:text-base lg:text-lg">
            {t('contact.sub')}
          </p>
        </Reveal>

        {/* MAIN GRID */}
        <div className="mt-8 grid items-stretch gap-5 sm:mt-10 sm:gap-6 md:mt-12 lg:mt-14 lg:gap-8 lg:grid-cols-[1fr_1.2fr]">
          {/* LEFT SIDE */}
          <Reveal className="h-full">
            <div className="border-border/50 bg-card/80 flex h-full flex-col rounded-2xl border p-4 shadow-xl backdrop-blur sm:rounded-3xl sm:p-5 md:p-6 lg:rounded-[32px] lg:p-8 lg:shadow-2xl">
              {/* HEADING */}
              <div>
                <p className="text-[11px] font-semibold tracking-[0.18em] text-blue-600 uppercase sm:text-xs sm:tracking-[0.22em] md:text-sm md:tracking-[0.25em]">
                  Contact Information
                </p>
              </div>

              {/* CONTACT ITEMS */}
              <div className="mt-5 space-y-3 sm:mt-6 sm:space-y-4 md:mt-7 md:space-y-5 lg:mt-8">
                {contactItems.map((item) => (
                  <div
                    key={item.label}
                    className="
                      border-border/50 bg-muted/30
                      flex items-start gap-3
                      rounded-xl border
                      p-3
                      transition-all duration-300
                      active:scale-[0.99]
                      sm:gap-4 sm:rounded-2xl sm:p-4
                      md:p-5
                      lg:hover:bg-background lg:hover:-translate-y-1 lg:hover:shadow-xl
                    "
                  >
                    {/* ICON */}
                    <div className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-gradient-to-br from-blue-500/15 to-cyan-400/10 text-blue-600 ring-1 ring-blue-500/10 sm:h-11 sm:w-11 md:h-12 md:w-12 lg:h-14 lg:w-14 lg:rounded-2xl">
                      <item.icon className="h-4 w-4 sm:h-5 sm:w-5 lg:h-6 lg:w-6" />
                    </div>

                    {/* CONTENT */}
                    <div className="min-w-0 flex-1">
                      <p className="text-muted-foreground text-[10px] font-medium tracking-[0.14em] uppercase sm:text-[11px] sm:font-semibold sm:tracking-[0.16em] md:text-xs md:tracking-[0.18em]">
                        {item.label}
                      </p>

                      {item.href ? (
                        <a
                          href={item.href}
                          className="text-foreground mt-0.5 inline-flex max-w-full items-center gap-1 text-sm font-medium break-words transition-colors sm:mt-1 sm:text-[15px] sm:font-semibold md:text-base lg:hover:text-blue-600"
                        >
                          {item.value}
                        </a>
                      ) : (
                        <p className="text-foreground mt-0.5 text-sm font-medium break-words sm:mt-1 sm:text-[15px] sm:font-semibold md:text-base">
                          {item.value}
                        </p>
                      )}

                      <p className="text-muted-foreground mt-1 text-xs leading-relaxed sm:text-sm">
                        {item.sub}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>

          {/* RIGHT SIDE */}
          <Reveal delay={0.1} className="h-full">
            <form
              onSubmit={onSubmit}
              className="border-border/50 bg-card/90 flex h-full flex-col rounded-2xl border p-4 shadow-xl backdrop-blur sm:rounded-3xl sm:p-5 md:p-6 lg:rounded-[32px] lg:p-8 lg:shadow-2xl"
            >
              {/* FORM HEADER */}
              <div>
                <p className="text-[11px] font-semibold tracking-[0.18em] text-blue-600 uppercase sm:text-xs sm:tracking-[0.22em] md:text-sm md:tracking-[0.25em]">
                  Send Enquiry
                </p>
              </div>

              {/* FORM BODY */}
              <div className="mt-5 flex-1 sm:mt-6 md:mt-7 lg:mt-8">
                {/* NAME + PHONE */}
                <div className="grid gap-4 sm:gap-5 md:grid-cols-2">
                  {/* NAME */}
                  <div>
                    <Label
                      htmlFor="name"
                      className="text-[13px] font-medium sm:text-sm"
                    >
                      {t('contact.form.name')}
                    </Label>

                    <Input
                      id="name"
                      name="name"
                      required
                      maxLength={80}
                      placeholder={t('contact.form.namePh')}
                      className="
                        border-border/60 bg-background/70
                        mt-1.5 h-11
                        rounded-lg px-3
                        text-sm
                        shadow-sm transition-all
                        focus-visible:ring-2 focus-visible:ring-blue-500/30
                        sm:mt-2 sm:h-12 sm:rounded-xl sm:px-4 sm:text-[15px]
                        lg:text-base
                      "
                    />
                  </div>

                  {/* PHONE */}
                  <div>
                    <Label
                      htmlFor="phone"
                      className="text-[13px] font-medium sm:text-sm"
                    >
                      {t('contact.form.phone')}
                    </Label>

                    <Input
                      id="phone"
                      name="phone"
                      required
                      maxLength={15}
                      placeholder={t('contact.form.phonePh')}
                      className="
                        border-border/60 bg-background/70
                        mt-1.5 h-11
                        rounded-lg px-3
                        text-sm
                        shadow-sm transition-all
                        focus-visible:ring-2 focus-visible:ring-blue-500/30
                        sm:mt-2 sm:h-12 sm:rounded-xl sm:px-4 sm:text-[15px]
                        lg:text-base
                      "
                    />
                  </div>
                </div>

                {/* EMAIL */}
                <div className="mt-4 sm:mt-5">
                  <Label
                    htmlFor="email"
                    className="text-[13px] font-medium sm:text-sm"
                  >
                    {t('contact.form.email')}
                  </Label>

                  <Input
                    id="email"
                    name="email"
                    type="email"
                    maxLength={120}
                    placeholder="you@example.com"
                    className="
                      border-border/60 bg-background/70
                      mt-1.5 h-11
                      rounded-lg px-3
                      text-sm
                      shadow-sm transition-all
                      focus-visible:ring-2 focus-visible:ring-blue-500/30
                      sm:mt-2 sm:h-12 sm:rounded-xl sm:px-4 sm:text-[15px]
                      lg:text-base
                    "
                  />
                </div>

                {/* MESSAGE */}
                <div className="mt-4 flex flex-col sm:mt-5 lg:h-[calc(100%-140px)]">
                  <Label
                    htmlFor="message"
                    className="text-[13px] font-medium sm:text-sm"
                  >
                    {t('contact.form.message')}
                  </Label>

                  <Textarea
                    id="message"
                    name="message"
                    required
                    maxLength={1000}
                    placeholder={t('contact.form.messagePh')}
                    className="
                      border-border/60 bg-background/70
                      mt-1.5 min-h-[140px]
                      rounded-xl
                      px-3 py-3
                      text-sm
                      shadow-sm transition-all
                      focus-visible:ring-2 focus-visible:ring-blue-500/30
                      sm:mt-2 sm:min-h-[160px] sm:rounded-2xl sm:px-4 sm:text-[15px]
                      md:min-h-[180px]
                      lg:flex-1 lg:text-base
                    "
                  />
                </div>
              </div>

              {/* BUTTON */}
              <Button
                type="submit"
                disabled={loading}
                className="
                  mt-5 h-11 w-full
                  rounded-xl
                  bg-gradient-to-r from-[#2563eb] to-[#1d4ed8]
                  px-4
                  text-sm font-medium text-white
                  shadow-lg shadow-blue-500/20
                  transition-all duration-300
                  active:scale-[0.99]
                  sm:mt-6 sm:h-12 sm:rounded-2xl sm:text-[15px] sm:font-semibold
                  md:mt-7 md:h-14 md:text-base
                  lg:hover:-translate-y-0.5 lg:hover:shadow-xl
                "
              >
                {loading ? (
                  t('contact.form.sending')
                ) : (
                  <>
                    <Send className="mr-2 h-4 w-4 sm:h-5 sm:w-5" />
                    <span className="truncate">
                      {t('contact.form.send')}
                    </span>
                    <ArrowUpRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5" />
                  </>
                )}
              </Button>
            </form>
          </Reveal>
        </div>

        {/* MAP */}
        <Reveal delay={0.2}>
          <div className="border-border/50 mt-6 overflow-hidden rounded-2xl border shadow-xl sm:mt-8 sm:rounded-3xl md:mt-10 lg:rounded-[32px] lg:shadow-2xl">
            <iframe
              title="Tumkur location map"
              src="https://www.google.com/maps?q=Tumkur,Karnataka&output=embed"
              className="h-[260px] w-full sm:h-[320px] md:h-[380px] lg:h-[420px]"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </Reveal>
      </div>
    </section>
  )
}