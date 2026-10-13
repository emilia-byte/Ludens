import { NextResponse, type NextRequest } from "next/server";
import { hasLocale, matchLocale } from "@/lib/i18n";

// Si la URL no tiene idioma (por ejemplo "/" o "/politica-de-cookies"),
// redirige al idioma del navegador del visitante.
export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const firstSegment = pathname.split("/")[1] ?? "";
  if (hasLocale(firstSegment)) return;

  const locale = matchLocale(request.headers.get("accept-language"));
  request.nextUrl.pathname = `/${locale}${pathname === "/" ? "" : pathname}`;
  return NextResponse.redirect(request.nextUrl);
}

export const config = {
  // Excluye archivos internos de Next y cualquier archivo con extensión (imágenes, icon.svg, etc.).
  matcher: ["/((?!_next|.*\\..*).*)"],
};
