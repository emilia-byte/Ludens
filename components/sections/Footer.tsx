import Link from "next/link";
import { site } from "@/content/site";
import { CookieSettingsButton } from "@/components/cookies/CookieSettingsButton";
import { Container } from "@/components/ui/Container";
import { CurrentYear } from "@/components/ui/CurrentYear";
import { Logo } from "@/components/ui/Logo";

export function Footer() {
  const { contact, footer } = site;
  const linkClasses = "rounded-control text-on-night-muted transition-colors hover:text-on-night";

  return (
    <footer data-tone="night" className="bg-night text-on-night">
      <Container className="grid gap-10 py-16 sm:grid-cols-2 lg:grid-cols-12">
        <div className="lg:col-span-5">
          <Link href="/" aria-label={`${site.name}, ir al inicio`} className="inline-block rounded-control">
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
              Tel: {contact.phoneDisplay}
            </a>
          </p>
          <p>
            <a href={`mailto:${contact.email}`} className={linkClasses}>
              {contact.email}
            </a>
          </p>
        </address>

        <nav aria-label="Legal" className="lg:col-span-3">
          <ul className="space-y-2">
            <li>
              <Link href={footer.cookiePolicy.href} className={linkClasses}>
                {footer.cookiePolicy.label}
              </Link>
            </li>
            <li>
              <CookieSettingsButton label={footer.cookieSettings} className={linkClasses} />
            </li>
            <li>
              <a href={contact.linkedin} target="_blank" rel="noopener noreferrer" className={linkClasses}>
                LinkedIn<span className="sr-only"> (se abre en una pestaña nueva)</span>
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
