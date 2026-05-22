import { Reveal } from "@/components/reveal";
import { Button } from "@/components/ui/button";
import { products } from "@/lib/site";
import { ArrowRight, Check, Download, Gauge, Ruler } from "lucide-react";
import tabletop from "@/assets/TableTopScalepng1.png";
import portable from "@/assets/PortableScalepng1.png";
import platform from "@/assets/PlatformScalepng1.png";
import loadcell from "@/assets/LoadCellPlatformScalepng1.png";
import { site } from "@/lib/site";
import { useTranslations } from "next-intl";
import Image, { type StaticImageData } from "next/image";

const imgs: Record<string, StaticImageData> = { tabletop, portable, platform, loadcell };

const nameKey: Record<string, string> = {
  "tabletop-scale": "prod.tabletop.name",
  "portable-scale": "prod.portable.name",
  "platform-scale": "prod.platform.name",
  "4-load-cell-platform-scale": "prod.loadcell.name",
};
const descKey: Record<string, string> = {
  "tabletop-scale": "prod.tabletop.desc",
  "portable-scale": "prod.portable.desc",
  "platform-scale": "prod.platform.desc",
  "4-load-cell-platform-scale": "prod.loadcell.desc",
};

type ExtendedProduct = (typeof products)[number] & {
  capacities?: readonly string[];
  accuracies?: readonly string[];
  catalog?: string;
  models?: readonly { size: string; capacity: string; accuracy: string }[];
  model?: string;
  sizeLabel?: string;
};

function ProductRow({ p, index }: { p: ExtendedProduct; index: number }) {
  const t = useTranslations();
  const reverse = index % 2 === 1;

  const enquireUrl = `https://wa.me/91${site.phone}?text=${encodeURIComponent(
    `Hi Jioo Weighing System, I'd like to enquire about the ${t(nameKey[p.slug])}.`
  )}`;

  return (
    <Reveal>
      <article
        className={`grid items-center gap-8 rounded-3xl border bg-card p-6 shadow-card md:gap-12 md:p-10 lg:grid-cols-2 ${
          reverse ? "lg:[&>div:first-child]:order-2" : ""
        }`}
      >
        <div className="relative overflow-hidden rounded-2xl bg-white flex items-center justify-center">
          <Image
            src={imgs[p.image]}
            alt={t(nameKey[p.slug])}
            className="aspect-[4/3] h-full w-full object-contain transition duration-700 hover:scale-105"
          />
          <div className="absolute left-4 top-4 rounded-full glass-light px-3 py-1 text-[11px] font-semibold text-foreground">
            Jioo
          </div>
        </div>

        <div>
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--royal)]">
            0{index + 1} · Jioo Series
          </span>
          <h3 className="mt-2 font-display text-2xl font-bold md:text-3xl flex flex-wrap items-center gap-3">
            {t(nameKey[p.slug])}
            {p.model && (
              <span className="inline-flex items-center rounded-md bg-blue-50 px-2 py-0.5 font-sans text-xs font-bold tracking-widest text-blue-700 border border-blue-200 shadow-sm uppercase mt-1">
                {p.model}
              </span>
            )}
          </h3>
          <p className="mt-3 text-muted-foreground">{t(descKey[p.slug])}</p>

          <div className="mt-6 overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
            <div className="overflow-x-auto">
              <table className="w-full text-left text-sm">
                <thead className="bg-slate-50 text-slate-600 border-b border-slate-200">
                  <tr>
                    <th className="px-4 py-3 font-semibold whitespace-nowrap">{p.sizeLabel || t("prod.panSize", { fallback: "Pan Size" })}</th>
                    <th className="px-4 py-3 font-semibold whitespace-nowrap">{t("prod.capacity")}</th>
                    <th className="px-4 py-3 font-semibold whitespace-nowrap">{t("prod.accuracy")}</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {p.models?.map((m, i) => (
                    <tr key={i} className="hover:bg-slate-50/50 transition-colors">
                      <td className="px-4 py-3 text-slate-900 font-medium">{m.size}</td>
                      <td className="px-4 py-3 text-slate-600">{m.capacity}</td>
                      <td className="px-4 py-3 text-slate-600">{m.accuracy}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <ul className="mt-8 grid gap-4 sm:grid-cols-2">
            {p.features.map((f, i) => (
              <li key={`${p.slug}-feature-${i}`} className="flex items-start gap-2 text-sm text-slate-600">
                <Check className="mt-0.5 h-4 w-4 flex-none text-cyan-500" /> {f}
              </li>
            ))}
          </ul>

          <div className="mt-8 flex flex-wrap gap-3">
            <Button asChild size="lg" className="bg-gradient-to-r from-blue-600 to-cyan-500 text-white shadow-md hover:from-blue-700 hover:to-cyan-600 border-0">
              <a href={enquireUrl} target="_blank" rel="noopener noreferrer">
                {t("cta.enquire")} <ArrowRight className="ml-2 h-4 w-4" />
              </a>
            </Button>
            <Button asChild size="lg" variant="outline">
              <a href={p.catalog ?? site.catalogUrl} download target="_blank" rel="noopener noreferrer">
                <Download className="mr-2 h-4 w-4" /> {t("prod.downloadCatalog")}
              </a>
            </Button>
          </div>
        </div>
      </article>
    </Reveal>
  );
}

export function ProductGrid({ heading = true }: { heading?: boolean }) {
  const t = useTranslations();
  return (
    <section className="relative bg-blue-50/50 py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        {heading && (
          <Reveal className="mx-auto max-w-2xl text-center">
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--royal)]">{t("prod.kicker")}</span>
            <h2 className="mt-3 text-3xl font-bold md:text-4xl">{t("prod.title")}</h2>
            <p className="mt-4 text-muted-foreground">{t("prod.subtitle")}</p>
          </Reveal>
        )}

        <div className="mt-12 space-y-8">
          {products.map((p, i) => (
            <ProductRow key={p.slug} p={p as ExtendedProduct} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
