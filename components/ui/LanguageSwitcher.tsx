"use client";

import { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import { Check, ChevronDown, Globe } from "lucide-react";
import { localeNames, locales, type Locale } from "@/lib/i18n";
import { cn } from "@/lib/cn";

type LanguageSwitcherProps = {
  lang: Locale;
  label: string;
};

// Selector de idioma: lleva a la misma página en el idioma elegido.
export function LanguageSwitcher({ lang, label }: LanguageSwitcherProps) {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const rootRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!open) return;
    const onPointerDown = (event: PointerEvent) => {
      if (!rootRef.current?.contains(event.target as Node)) setOpen(false);
    };
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false);
        buttonRef.current?.focus();
      }
    };
    document.addEventListener("pointerdown", onPointerDown);
    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.removeEventListener("pointerdown", onPointerDown);
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [open]);

  // Reemplaza el primer segmento de la URL (el idioma) y conserva el resto.
  const hrefFor = (locale: Locale) => {
    const rest = pathname.split("/").slice(2).join("/");
    return `/${locale}${rest ? `/${rest}` : ""}`;
  };

  return (
    <div ref={rootRef} className="relative">
      <button
        ref={buttonRef}
        type="button"
        aria-expanded={open}
        aria-controls="language-list"
        aria-label={`${label}: ${localeNames[lang]}`}
        onClick={() => setOpen((value) => !value)}
        className="inline-flex h-10 items-center gap-1.5 rounded-control px-2.5 text-sm font-semibold text-ink hover:bg-background"
      >
        <Globe aria-hidden="true" className="size-4" />
        <span className="uppercase">{lang}</span>
        <ChevronDown aria-hidden="true" className={cn("size-4 transition-transform", open && "rotate-180")} />
      </button>

      <ul
        id="language-list"
        hidden={!open}
        className="absolute end-0 top-full z-50 mt-2 w-48 rounded-card border border-line bg-surface p-1.5 shadow-card"
      >
        {locales.map((locale) => (
          <li key={locale}>
            {/* Enlace normal (no next/link): al cambiar de idioma conviene una carga completa
                para que lang, dir y las fuentes se actualicen. */}
            <a
              href={hrefFor(locale)}
              hrefLang={locale}
              lang={locale}
              aria-current={locale === lang ? "true" : undefined}
              onClick={() => setOpen(false)}
              className={cn(
                "flex items-center justify-between gap-3 rounded-control px-3 py-2 text-sm text-ink hover:bg-background",
                locale === lang && "font-semibold",
              )}
            >
              <span>{localeNames[locale]}</span>
              {locale === lang ? (
                <Check aria-hidden="true" className="size-4 text-primary" />
              ) : (
                <span aria-hidden="true" className="text-xs font-semibold text-ink-muted uppercase">
                  {locale}
                </span>
              )}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
