import { Reveal } from "@/components/reveal";
import { Target, Shield, Cpu, Tags, Headset } from "lucide-react";
import { useTranslations } from "next-intl";

export function WhyChoose() {
  const t = useTranslations();
  const features = [
    { icon: Target, title: t("why.f1.t"), desc: t("why.f1.d") },
    { icon: Shield, title: t("why.f2.t"), desc: t("why.f2.d") },
    { icon: Cpu, title: t("why.f3.t"), desc: t("why.f3.d") },
    { icon: Tags, title: t("why.f4.t"), desc: t("why.f4.d") },
    { icon: Headset, title: t("why.f5.t"), desc: t("why.f5.d") },
  ];

  return (
    <section className="relative bg-slate-50/30 py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-blue-500">{t("why.kicker")}</span>
          <h2 className="mt-3 text-3xl font-extrabold md:text-5xl text-slate-900">{t("why.title")}</h2>
        </Reveal>

        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {features.map((f, i) => (
            <Reveal key={f.title} delay={i * 0.08}>
              <div className="group h-full rounded-3xl border border-gray-100 bg-white p-8 shadow-sm transition hover:shadow-md">
                <div className="grid h-12 w-12 place-items-center rounded-full bg-gradient-to-r from-blue-600 to-cyan-500 text-white shadow-sm transition group-hover:scale-105">
                  <f.icon className="h-5 w-5" />
                </div>
                <h3 className="mt-6 font-display text-lg font-bold text-slate-900">{f.title}</h3>
                <p className="mt-3 text-sm text-slate-500">{f.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
