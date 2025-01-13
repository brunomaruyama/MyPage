import { match } from "@formatjs/intl-localematcher";
import Negotiator from "negotiator";

let headers = { "accept-language": "en" };
let languages = new Negotiator({ headers }).languages();
let locales = ["en", "pt"];
let defaultLocale = "en";
const PUBLIC_FILE = /\.(.*)$/;

match(languages, locales, defaultLocale); // -> 'en'

import { NextResponse } from "next/server";

// Get the preferred locale, similar to the above or using a library
function getLocale(request) {
  // Obter o cabeçalho Accept-Language da solicitação
  const acceptLanguage = request.headers.get("accept-language");

  if (!acceptLanguage) {
    // Se não houver cabeçalho Accept-Language, definir um local padrão
    return "en"; // Local padrão
  }

  // Divida o cabeçalho Accept-Language em uma lista de preferências
  const acceptedLocales = acceptLanguage.split(",").map((lang) => {
    const [locale] = lang.split(";"); // Descartar qualquer peso (q-factor)
    return locale.trim();
  });

  // Verificar se algum dos locais aceitos é compatível com os locais suportados
  for (const locale of acceptedLocales) {
    if (locales.includes(locale)) {
      return locale;
    }
  }

  // Se nenhum local preferido for compatível, definir um padrão
  return "en"; // Local padrão se não houver correspondência
}

export function middleware(request) {
  // Check if there is any supported locale in the pathname
  const { pathname } = request.nextUrl;
  const pathnameHasLocale = locales.some(
    (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
  );

  //to take the files from the public folder
  if (PUBLIC_FILE.test(request.nextUrl.pathname)) {
    return;
  }

  if (pathnameHasLocale) return;

  // Redirect if there is no locale
  const locale = getLocale(request);
  request.nextUrl.pathname = `/${locale}${pathname}`;
  // e.g. incoming request is /products
  // The new URL is now /en/products
  return NextResponse.redirect(request.nextUrl);
}

export const config = {
  matcher: [
    // Skip all internal paths (_next)
    "/((?!_next).*)",
    // Optional: only run on root (/) URL
    // '/'
  ],
};
