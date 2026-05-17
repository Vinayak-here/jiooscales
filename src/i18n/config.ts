export const locales = ['en', 'kn'] as const
export type Locale = (typeof locales)[number]
export const defaultLocale: Locale = 'en'