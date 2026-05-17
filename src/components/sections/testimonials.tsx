import { Reveal } from "@/components/reveal";
import { Quote, Star } from "lucide-react";
import { useTranslations } from "next-intl";

const items = [
  { name: "Ramesh K.", role: "Retail Store, Tumkur", text: "Tabletop scale has been spot-on for 8 months — quick delivery and great after-sales support from the Jioo team." },
  { name: "Mahesh Patil", role: "Warehouse Manager", text: "Their 4 load cell platform handles our drum loads beautifully. Sturdy build and the indicator is super clear." },
  { name: "Priya N.", role: "Coffee Trader", text: "Switched all our shops to Jioo platform scales. Accuracy and reliability have been excellent." },
];

export function Testimonials() {
  const t = useTranslations();
  return (
    <section className="gradient-soft py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--royal)]">{t("test.kicker")}</span>
          <h2 className="mt-3 text-3xl font-bold md:text-4xl">{t("test.title")}</h2>
        </Reveal>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {items.map((t, i) => (
            <Reveal key={t.name} delay={i * 0.08}>
              <div className="relative h-full rounded-3xl border bg-card p-7 shadow-card transition hover:-translate-y-1 hover:shadow-elegant">
                <Quote className="absolute right-6 top-6 h-8 w-8 text-[var(--royal)]/15" />
                <div className="flex gap-0.5 text-[var(--cyan)]">
                  {Array.from({ length: 5 }).map((_, k) => <Star key={k} className="h-4 w-4 fill-current" />)}
                </div>
                <p className="mt-4 text-sm text-foreground/90">"{t.text}"</p>
                <div className="mt-6 flex items-center gap-3">
                  <div className="grid h-10 w-10 place-items-center rounded-full gradient-brand font-semibold text-white">
                    {t.name.charAt(0)}
                  </div>
                  <div>
                    <p className="text-sm font-semibold">{t.name}</p>
                    <p className="text-xs text-muted-foreground">{t.role}</p>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
