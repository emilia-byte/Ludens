"use client";

import Link from "next/link";
import { site } from "@/content/site";
import { writeConsent } from "@/lib/consent";
import { useConsent } from "@/lib/use-consent";
import { Button } from "@/components/ui/Button";

export function CookieBanner() {
  const consent = useConsent();
  const copy = site.cookieBanner;

  // Solo se muestra cuando ya leímos el navegador y no hay una elección guardada.
  if (consent !== null) return null;

  return (
    <section
      aria-labelledby="cookie-banner-title"
      className="fixed inset-x-0 bottom-0 z-50 p-3 sm:p-4"
    >
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-col gap-4 rounded-card border border-line bg-surface p-5 shadow-card sm:p-6 md:flex-row md:items-center md:justify-between md:gap-8">
          <div className="max-w-2xl">
            <h2 id="cookie-banner-title" className="text-base font-bold text-ink">
              {copy.title}
            </h2>
            <p className="mt-1 text-sm leading-relaxed text-ink-muted">
              {copy.body}{" "}
              <Link
                href={site.footer.cookiePolicy.href}
                className="font-semibold text-accent underline underline-offset-2 hover:text-accent-strong"
              >
                {copy.policyLink}
              </Link>
            </p>
          </div>
          {/* Rechazar y Aceptar tienen el mismo peso visual: rechazar tiene que ser igual de fácil. */}
          <div className="grid shrink-0 grid-cols-2 gap-3">
            <Button variant="secondary" onClick={() => writeConsent("rejected")}>
              {copy.reject}
            </Button>
            <Button variant="primary" onClick={() => writeConsent("accepted")}>
              {copy.accept}
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
