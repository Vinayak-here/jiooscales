"use client";

import { useState } from "react";
import { Reveal } from "@/components/reveal";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Mail, MapPin, Phone, Clock, MessageCircle, Send } from "lucide-react";
import { site } from "@/lib/site";
import { toast } from "sonner";
import { useTranslations } from "next-intl";

export function ContactSection() {
  const [loading, setLoading] = useState(false);
  const t = useTranslations();

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    const data = new FormData(e.currentTarget);
    const name = String(data.get("name") || "");
    const message = String(data.get("message") || "");
    const text = `Hi Jioo Weighing System, I'm ${name}. ${message}`;
    setTimeout(() => {
      window.open(`https://wa.me/91${site.phone}?text=${encodeURIComponent(text)}`, "_blank");
      toast.success(t("contact.toast"));
      setLoading(false);
    }, 400);
  };

  return (
    <section className="bg-background py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--royal)]">{t("contact.kicker")}</span>
          <h2 className="mt-3 text-3xl font-bold md:text-4xl">{t("contact.title")}</h2>
          <p className="mt-4 text-muted-foreground">{t("contact.sub")}</p>
        </Reveal>

        <div className="mt-12 grid gap-8 lg:grid-cols-5">
          <Reveal className="lg:col-span-2">
            <div className="space-y-4">
              {[
                { icon: Phone, label: t("contact.phone"), value: site.phoneDisplay, href: `tel:${site.phone}` },
                { icon: Mail, label: t("contact.email"), value: site.email, href: `mailto:${site.email}` },
                { icon: MapPin, label: t("contact.address"), value: site.location },
                { icon: Clock, label: t("contact.hours"), value: t("contact.hoursVal") },
              ].map((c) => (
                <div key={c.label} className="flex items-start gap-4 rounded-2xl border bg-card p-5 shadow-card">
                  <div className="grid h-11 w-11 place-items-center rounded-xl gradient-brand text-white shadow-glow">
                    <c.icon className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">{c.label}</p>
                    {c.href ? (
                      <a href={c.href} className="text-sm font-medium text-foreground hover:text-[var(--royal)]">{c.value}</a>
                    ) : (
                      <p className="text-sm font-medium text-foreground">{c.value}</p>
                    )}
                  </div>
                </div>
              ))}
              <Button asChild className="w-full bg-[oklch(0.68_0.18_150)] text-white hover:opacity-95">
                <a href={site.whatsappUrl} target="_blank" rel="noopener noreferrer">
                  <MessageCircle className="mr-2 h-4 w-4" /> {t("cta.chatWhatsapp")}
                </a>
              </Button>
            </div>
          </Reveal>

          <Reveal className="lg:col-span-3" delay={0.1}>
            <form onSubmit={onSubmit} className="rounded-3xl border bg-card p-6 shadow-card md:p-8">
              <div className="grid gap-4 md:grid-cols-2">
                <div>
                  <Label htmlFor="name">{t("contact.form.name")}</Label>
                  <Input id="name" name="name" required maxLength={80} className="mt-1.5" placeholder={t("contact.form.namePh")} />
                </div>
                <div>
                  <Label htmlFor="phone">{t("contact.form.phone")}</Label>
                  <Input id="phone" name="phone" required maxLength={15} className="mt-1.5" placeholder={t("contact.form.phonePh")} />
                </div>
              </div>
              <div className="mt-4">
                <Label htmlFor="email">{t("contact.form.email")}</Label>
                <Input id="email" name="email" type="email" maxLength={120} className="mt-1.5" placeholder="you@example.com" />
              </div>
              <div className="mt-4">
                <Label htmlFor="message">{t("contact.form.message")}</Label>
                <Textarea id="message" name="message" required maxLength={1000} rows={5} className="mt-1.5" placeholder={t("contact.form.messagePh")} />
              </div>
              <Button type="submit" disabled={loading} size="lg" className="mt-6 w-full gradient-brand text-white shadow-glow hover:opacity-95">
                {loading ? t("contact.form.sending") : (<><Send className="mr-2 h-4 w-4" /> {t("contact.form.send")}</>)}
              </Button>
            </form>

            <div className="mt-6 overflow-hidden rounded-3xl border shadow-card">
              <iframe
                title="Tumkur location map"
                src="https://www.google.com/maps?q=Tumkur,Karnataka&output=embed"
                className="h-64 w-full"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
