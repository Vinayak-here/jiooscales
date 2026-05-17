import createMiddleware from 'next-intl/middleware'
import { locales, defaultLocale } from './i18n/config'

export default createMiddleware({
  locales,
  defaultLocale,
  localePrefix: 'as-needed', // /kn/... for non-default, / for default (en)
})

export const config = {
  matcher: ['/((?!_next|api|.*\\..*).*)'],
}