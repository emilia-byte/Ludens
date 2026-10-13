"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { site } from "@/content/site";
import type { Dictionary } from "@/content/dictionaries";
import type { Locale } from "@/lib/i18n";
import { ButtonLink } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { LanguageSwitcher } from "@/components/ui/LanguageSwitcher";
import { Logo } from "@/components/ui/Logo";

type NavbarProps = {
  lang: Locale;
  nav: Dictionary["nav"];
  homeLabel: string;
};

// Encabezado con menú hamburguesa en todos los tamaños de pantalla.
export function Navbar({ lang, nav, homeLabel }: NavbarProps) {
  const [open, setOpen] = useState(false);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const panelRef = useRef<HTMLElement>(null);
  const home = `/${lang}`;
  const links = nav.links.map((label, index) => ({
    label,
    href: `${home}#${site.sectionIds[index]}`,
  }));
  const contactHref = `${home}#${site.sectionIds[3]}`;

  useEffect(() => {
    if (!open) return;
    panelRef.current?.querySelector<HTMLElement>("a")?.focus();
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false);
        buttonRef.current?.focus();
      }
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [open]);

  return (
    <header className="sticky top-0 z-40 border-b border-line bg-surface/90 backdrop-blur">
      <a
        href="#contenido"
        className="sr-only focus:not-sr-only focus:absolute focus:start-3 focus:top-3 focus:z-50 focus:rounded-control focus:bg-surface focus:px-4 focus:py-2 focus:font-semibold"
      >
        {nav.skipToContent}
      </a>
      <Container className="flex h-16 items-center justify-between gap-4">
        <Link href={home} aria-label={homeLabel} className="rounded-control">
          <Logo />
        </Link>

        <div className="flex items-center gap-1 sm:gap-2">
          <LanguageSwitcher lang={lang} label={nav.language} />
          <div className="hidden sm:block">
            <ButtonLink href={contactHref}>{nav.cta}</ButtonLink>
          </div>
          <button
            ref={buttonRef}
            type="button"
            className="inline-flex size-10 items-center justify-center rounded-control text-ink hover:bg-background"
            aria-expanded={open}
            aria-controls="menu-principal"
            aria-label={open ? nav.closeMenu : nav.openMenu}
            onClick={() => setOpen((value) => !value)}
          >
            {open ? (
              <X aria-hidden="true" className="size-6" />
            ) : (
              <Menu aria-hidden="true" className="size-6" />
            )}
          </button>
        </div>
      </Container>

      <nav
        ref={panelRef}
        id="menu-principal"
        aria-label={nav.primaryNav}
        hidden={!open}
        className="absolute inset-x-0 top-full border-b border-line bg-surface shadow-card"
      >
        <Container className="grid gap-8 py-8 sm:py-10">
          <ul className="flex flex-col">
            {links.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="block rounded-control py-2.5 text-2xl font-bold tracking-[-0.02em] text-ink transition-colors hover:text-primary sm:text-3xl"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
          <div className="sm:hidden">
            <ButtonLink
              href={contactHref}
              size="lg"
              className="w-full"
              onClick={() => setOpen(false)}
            >
              {nav.cta}
            </ButtonLink>
          </div>
        </Container>
      </nav>
    </header>
  );
}
