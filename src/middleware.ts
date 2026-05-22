import createMiddleware from 'next-intl/middleware'
import { locales, defaultLocale } from './i18n/config'

export default createMiddleware({
  locales,
  defaultLocale,
  localePrefix: 'always', // always include locale prefix: /en/... and /kn/...
})

export const config = {
  matcher: ['/((?!_next|api|.*\\..*).*)'],
}