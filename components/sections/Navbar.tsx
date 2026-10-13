"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { site } from "@/content/site";
import { ButtonLink } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Logo } from "@/components/ui/Logo";

export function Navbar() {
  const [open, setOpen] = useState(false);
  const { nav } = site;

  useEffect(() => {
    if (!open) return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [open]);

  return (
    <header className="sticky top-0 z-40 border-b border-line bg-surface/90 backdrop-blur">
      <a
        href="#contenido"
        className="sr-only focus:not-sr-only focus:absolute focus:top-3 focus:left-3 focus:z-50 focus:rounded-control focus:bg-surface focus:px-4 focus:py-2 focus:font-semibold"
      >
        {nav.skipToContent}
      </a>
      <Container className="flex h-16 items-center justify-between gap-6">
        <Link href="/#inicio" aria-label={`${site.name}, ir al inicio`} className="rounded-control">
          <Logo />
        </Link>

        <nav aria-label="Principal" className="hidden md:block">
          <ul className="flex items-center gap-8">
            {nav.links.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="rounded-control text-sm font-medium text-ink-muted transition-colors hover:text-ink"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-2">
          <div className="hidden sm:block">
            <ButtonLink href={nav.cta.href}>{nav.cta.label}</ButtonLink>
          </div>
          <button
            type="button"
            className="inline-flex size-10 items-center justify-center rounded-control text-ink hover:bg-background md:hidden"
            aria-expanded={open}
            aria-controls="menu-mobile"
            aria-label={open ? nav.closeMenu : nav.openMenu}
            onClick={() => setOpen((value) => !value)}
          >
            {open ? (
              <X aria-hidden="true" className="size-5" />
            ) : (
              <Menu aria-hidden="true" className="size-5" />
            )}
          </button>
        </div>
      </Container>

      <nav
        id="menu-mobile"
        aria-label="Principal (móvil)"
        hidden={!open}
        className="border-t border-line bg-surface md:hidden"
      >
        <Container className="py-4">
          <ul className="flex flex-col">
            {nav.links.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="block rounded-control py-3 text-base font-medium text-ink"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
          <ButtonLink
            href={nav.cta.href}
            size="lg"
            className="mt-3 w-full"
            onClick={() => setOpen(false)}
          >
            {nav.cta.label}
          </ButtonLink>
        </Container>
      </nav>
    </header>
  );
}
