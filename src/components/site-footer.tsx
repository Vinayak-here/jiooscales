import { Link } from '@/i18n/navigation'
import { Mail, Phone, MapPin } from 'lucide-react'
import { FaFacebook, FaInstagram, FaLinkedin } from 'react-icons/fa'
import logo from '@/assets/logos/logo Icon blue.svg'
import { site } from '@/lib/site'
import { useTranslations } from 'next-intl'
import Image from 'next/image'

export function SiteFooter() {
  const t = useTranslations('footer')
  const tNav = useTranslations('nav')

  return (
    <footer className="bg-slate-900 text-white">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 md:grid-cols-4 md:px-6">
        <div className="space-y-4">
          <div className="flex items-center gap-3">
            <Image
              src={logo}
              alt="Jioo logo"
              className="h-10 w-10 rounded-lg bg-white"
            />
            <div>
              <p className="font-display text-lg font-semibold">
                Jioo Weighing System
              </p>
              <p className="text-xs text-white/60">by {site.name}</p>
            </div>
          </div>
          <p className="text-sm text-white/70">{t('tagline')}</p>
        </div>

        <div>
          <h4 className="mb-4 text-sm font-semibold tracking-wider text-white/80 uppercase">
            {t('quick')}
          </h4>
          <ul className="space-y-2 text-sm text-white/70">
            <li>
              <Link href="/" className="hover:text-cyan">
                {tNav('home')}
              </Link>
            </li>
            <li>
              <Link href="/about" className="hover:text-cyan">
                {tNav('about')}
              </Link>
            </li>
            <li>
              <Link href="/products" className="hover:text-cyan">
                {tNav('products')}
              </Link>
            </li>
            <li>
              <Link href="/contact" className="hover:text-cyan">
                {tNav('contact')}
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="mb-4 text-sm font-semibold tracking-wider text-white/80 uppercase">
            {t('contact')}
          </h4>
          <ul className="space-y-3 text-sm text-white/70">
            <li className="flex items-start gap-2">
              <Phone className="text-cyan mt-0.5 h-4 w-4" />
              <a href={`tel:${site.phone}`}>{site.phoneDisplay}</a>
            </li>
            <li className="flex items-start gap-2">
              <Mail className="text-cyan mt-0.5 h-4 w-4" />
              <a href={`mailto:${site.email}`}>{site.email}</a>
            </li>
            <li className="flex items-start gap-2">
              <MapPin className="text-cyan mt-0.5 h-4 w-4" />
              {site.location}
            </li>
          </ul>
        </div>

        <div>
          <h4 className="mb-4 text-sm font-semibold tracking-wider text-white/80 uppercase">
            {t('follow')}
          </h4>
          <div className="flex gap-3">
            {[FaFacebook, FaInstagram, FaLinkedin].map((Icon, i) => (
              <a
                key={i}
                href="#"
                aria-label="Social link"
                className="hover:bg-cyan hover:text-navy grid h-9 w-9 place-items-center rounded-full bg-white/10 transition"
              >
                <Icon className="h-4 w-4" />
              </a>
            ))}
          </div>
          <p className="mt-6 text-xs text-white/50">
            {t('hours')}
            <br />
            {t('hoursVal')}
          </p>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="mx-auto max-w-7xl px-4 py-5 text-center text-xs text-white/50 md:px-6">
          © {new Date().getFullYear()} {site.name}. {t('rights')}
        </div>
      </div>
    </footer>
  )
}
