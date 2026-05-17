import { useTranslations } from "next-intl";
import { About } from "@/components/sections/about";
import { Reveal } from "@/components/reveal";
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'About Us | JIOO Weighing Systems',
  description: 'Learn about Siddarama Tech Solution and JIOO Weighing Systems — trusted industrial weighing solutions across South India.',
}

export default function AboutPage() {
  const t = useTranslations("aboutPage");

  return (
    <>
      <section className="relative overflow-hidden bg-slate-900 pb-16 pt-32 md:pt-40">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900/95 via-blue-950/80 to-[oklch(0.3_0.18_240)]/70 backdrop-blur-sm" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,oklch(0.55_0.22_265/0.2),transparent_70%)]" />
        
        <div className="relative mx-auto max-w-7xl px-4 md:px-6">
          <Reveal className="mx-auto max-w-3xl text-center">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-cyan-400">{t("kicker")}</span>
            <h1 className="font-display mt-6 text-4xl leading-tight font-bold text-white md:text-6xl">
              {t("title1")} <span className="bg-gradient-to-r from-cyan-400 to-cyan-200 bg-clip-text text-transparent">{t("title2")}</span>
            </h1>
            <p className="mt-6 text-lg text-white/75">{t("sub")}</p>
          </Reveal>
        </div>
      </section>
      <About />
    </>
  );
}
