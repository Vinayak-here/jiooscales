'use client'

import { useParams, useRouter } from 'next/navigation'
import { Button } from '@/components/ui/button'

export default function LocaleNotFoundPage() {
  const params = useParams() as { locale?: string }
  const router = useRouter()
  const locale = params.locale ?? 'en'

  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-slate-50 px-6 py-20 text-center">
      <div className="max-w-xl rounded-3xl border border-slate-200 bg-white p-10 shadow-xl">
        <p className="text-sm font-semibold uppercase tracking-[0.25em] text-cyan-600">Page not available</p>
        <h1 className="mt-6 text-4xl font-bold text-slate-900">This page cannot be found</h1>
        <p className="mt-4 text-slate-600">
          The route you tried to visit is not available for this language. Please go back to the localized homepage.
        </p>

        <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
          <Button onClick={() => router.push(`/${locale}`)} className="bg-blue-600 text-white hover:bg-blue-700">
            Go back to home
          </Button>
          <Button variant="outline" onClick={() => router.back()}>
            Back
          </Button>
        </div>
      </div>
    </main>
  )
}
