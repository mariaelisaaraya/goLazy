import { NextResponse } from "next/server"
import type { NextRequest } from "next/server"
import Negotiator from "negotiator"
import { match } from "@formatjs/intl-localematcher"

const locales = ["en", "es"] // Simplified for this example, could be 'en-US', 'es-ES'
const defaultLocale = "es"

function getLocale(request: NextRequest) {
  const negotiatorHeaders: { [key: string]: string } = {}
  request.headers.forEach((value, key) => (negotiatorHeaders[key] = value))

  const languages = new Negotiator({ headers: negotiatorHeaders }).languages()

  const locale = match(languages, locales, defaultLocale)
  return locale
}

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl
  const pathnameHasLocale = locales.some((locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`)

  if (pathnameHasLocale) return

  // Redirect if there is no locale
  const locale = getLocale(request)
  request.nextUrl.pathname = `/${locale}${pathname}`
  return NextResponse.redirect(request.nextUrl)
}

export const config = {
  matcher: [
    // Skip all internal paths (_next)
    "/((?!_next|.*\\..*).*)",
    // Optional: only run on root (/) URL
    // '/'
  ],
}
