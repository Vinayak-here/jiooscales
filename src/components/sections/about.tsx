"use client";

import { motion, useInView, useMotionValue, useTransform, animate } from "framer-motion";
import { useEffect, useRef } from "react";
import { Reveal } from "@/components/reveal";
import { Award, Users, Target, IndianRupee } from "lucide-react";
import { useTranslations } from "next-intl";

function Counter({ to, suffix = "", decimals = 0 }: { to: number; suffix?: string; decimals?: number }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.5 });
  const mv = useMotionValue(0);
  const rounded = useTransform(mv, (v) => v.toFixed(decimals) + suffix);

  useEffect(() => {
    if (inView) animate(mv, to, { duration: 1.6, ease: "easeOut" });
  }, [inView, mv, to]);

  return <motion.span ref={ref}>{rounded}</motion.span>;
}

export function About() {
  const t = useTranslations();
  const stats = [
    { icon: Award, value: 500, suffix: "+", decimals: 0, label: t("stat.delivered") },
    { icon: Users, value: 10000, suffix: "+", decimals: 0, label: t("stat.customers") },
    { icon: Target, value: 99.9, suffix: "%", decimals: 1, label: t("stat.accuracy") },
    { icon: IndianRupee, value: 24, suffix: "/7", decimals: 0, label: t("stat.support") },
  ];

  return (
    <section className="relative bg-background py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <Reveal>
            <span className="text-sm font-bold uppercase tracking-widest text-blue-500">{t("about.kicker")}</span>
            <h2 className="mt-3 text-4xl font-extrabold tracking-tight text-gray-900 md:text-5xl">
              {t("about.title1")} <span className="text-blue-500">{t("about.title2")}</span>{t("about.title3")}
            </h2>
            <p className="mt-6 text-lg text-gray-600">{t("about.p1")}</p>
            <p className="mt-4 text-lg text-gray-600">{t("about.p2")}</p>
          </Reveal>

          <div className="grid grid-cols-2 gap-4">
            {stats.map((s, i) => (
              <Reveal key={s.label} delay={i * 0.08}>
                <div className="group rounded-3xl border border-gray-100 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-500 text-white shadow-md">
                    <s.icon className="h-6 w-6" />
                  </div>
                  <p className="mt-6 font-display text-3xl font-extrabold text-gray-900">
                    <Counter to={s.value} suffix={s.suffix} decimals={s.decimals} />
                  </p>
                  <p className="mt-2 text-sm text-gray-500">{s.label}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
