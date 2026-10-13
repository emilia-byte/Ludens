import Link from "next/link";
import { site } from "@/content/site";
import type { Dictionary } from "@/content/dictionaries";
import type { Locale } from "@/lib/i18n";
import { CookieSettingsButton } from "@/components/cookies/CookieSettingsButton";
import { Container } from "@/components/ui/Container";
import { CurrentYear } from "@/components/ui/CurrentYear";
import { Logo } from "@/components/ui/Logo";

type FooterProps = {
  lang: Locale;
  footer: Dictionary["footer"];
  common: Dictionary["common"];
};

export function Footer({ lang, footer, common }: FooterProps) {
  const { contact } = site;
  const linkClasses = "rounded-control text-on-night-muted transition-colors hover:text-on-night";

  return (
    <footer data-tone="night" className="bg-night text-on-night">
      <Container className="grid gap-10 py-16 sm:grid-cols-2 lg:grid-cols-12">
        <div className="lg:col-span-5">
          <Link href={`/${lang}`} aria-label={common.homeLabel} className="inline-block rounded-control">
            <Logo tone="night" />
          </Link>
          <p className="mt-4 max-w-sm leading-relaxed text-on-night-muted">{footer.tagline}</p>
        </div>

        <address className="space-y-2 not-italic lg:col-span-4">
          <p className="font-semibold">{site.legalName}</p>
          <p className="text-on-night-muted">
            {contact.address}, {contact.city}
          </p>
          <p>
            <a href={contact.phoneHref} className={linkClasses}>
              {footer.phone} <span dir="ltr">{contact.phoneDisplay}</span>
            </a>
          </p>
          <p>
            <a href={`mailto:${contact.email}`} className={linkClasses}>
              {contact.email}
            </a>
          </p>
        </address>

        <nav aria-label={footer.legalNav} className="lg:col-span-3">
          <ul className="space-y-2">
            <li>
              <Link href={`/${lang}/${site.cookiePolicyPath}`} className={linkClasses}>
                {footer.cookiePolicy}
              </Link>
            </li>
            <li>
              <CookieSettingsButton label={footer.cookieSettings} className={linkClasses} />
            </li>
            <li>
              <a href={contact.linkedin} target="_blank" rel="noopener noreferrer" className={linkClasses}>
                LinkedIn<span className="sr-only"> {common.newTab}</span>
              </a>
            </li>
          </ul>
        </nav>
      </Container>

      <div className="border-t border-night-line">
        <Container className="py-6 text-sm text-on-night-muted">
          <p>
            © <CurrentYear /> {site.legalName}. {footer.rights}
          </p>
        </Container>
      </div>
    </footer>
  );
}
