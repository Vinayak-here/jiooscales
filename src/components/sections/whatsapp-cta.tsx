import { Reveal } from "@/components/reveal";
import { Button } from "@/components/ui/button";
import { MessageCircle } from "lucide-react";
import { site } from "@/lib/site";
import { useTranslations } from "next-intl";

export function WhatsAppCTA() {
  const t = useTranslations();
  return (
    <section className="bg-blue-500/20 py-12 md:py-16">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <Reveal>
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-slate-900 to-blue-950 p-8 text-white shadow-lg md:p-12">
            <div className="absolute -right-12 -top-12 h-48 w-48 rounded-full bg-cyan-500/20 blur-3xl" />
            <div className="absolute -bottom-16 left-10 h-56 w-56 rounded-full bg-blue-500/20 blur-3xl" />
            <div className="relative flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
              <div>
                <h3 className="font-display text-2xl font-bold md:text-3xl">{t("cta.need.title")}</h3>
                <p className="mt-2 text-white/80">{t("cta.need.sub")}</p>
              </div>
              <Button asChild size="lg" className="bg-[#25D366] text-white shadow-md hover:bg-[#20bd5a] border-0">
                <a href={site.whatsappUrl} target="_blank" rel="noopener noreferrer">
                  <MessageCircle className="mr-2 h-5 w-5" /> {t("cta.chatWhatsapp")}
                </a>
              </Button>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
