import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { site } from "@/content/site";
import { getDictionary } from "@/content/dictionaries";
import { hasLocale, locales } from "@/lib/i18n";
import { Footer } from "@/components/sections/Footer";
import { Navbar } from "@/components/sections/Navbar";
import { Container } from "@/components/ui/Container";

export async function generateMetadata({
  params,
}: PageProps<"/[lang]/politica-de-cookies">): Promise<Metadata> {
  const { lang } = await params;
  if (!hasLocale(lang)) return {};
  const { cookiePolicy } = getDictionary(lang);
  return {
    title: cookiePolicy.title,
    description: cookiePolicy.description,
    alternates: {
      canonical: `/${lang}/${site.cookiePolicyPath}`,
      languages: Object.fromEntries(
        locales.map((locale) => [locale, `/${locale}/${site.cookiePolicyPath}`]),
      ),
    },
  };
}

// TODO: BORRADOR. El texto (en todos los idiomas) está en content/dictionaries/*.ts → cookiePolicy
// y debe ser revisado por un asesor legal antes de publicar.
export default async function CookiePolicyPage({
  params,
}: PageProps<"/[lang]/politica-de-cookies">) {
  const { lang } = await params;
  if (!hasLocale(lang)) notFound();
  const dict = getDictionary(lang);
  const policy = dict.cookiePolicy;
  const { contact, legalName } = site;
  const updated = new Intl.DateTimeFormat(lang, { dateStyle: "long", timeZone: "UTC" }).format(
    new Date(`${site.cookiePolicyUpdated}T00:00:00Z`),
  );

  return (
    <>
      <Navbar lang={lang} nav={dict.nav} homeLabel={dict.common.homeLabel} />
      <main id="contenido" className="flex-1 bg-surface">
        <Container size="prose" className="py-16 sm:py-24">
          <p
            role="note"
            className="mb-10 rounded-card border border-line bg-background p-4 text-sm text-ink-muted"
          >
            <strong className="text-ink">{policy.draftLabel}</strong> {policy.draftNote}
          </p>
          <h1 className="text-4xl font-extrabold tracking-[-0.04em] text-ink sm:text-5xl">
            {policy.title}
          </h1>
          <p className="mt-4 text-sm text-ink-muted">
            {policy.lastUpdated}: {updated}
          </p>

          <div className="mt-10 leading-relaxed text-ink-muted [&_a]:font-semibold [&_a]:text-primary [&_a]:underline [&_a]:underline-offset-2 [&_h2]:mt-12 [&_h2]:mb-4 [&_h2]:text-2xl [&_h2]:font-bold [&_h2]:tracking-[-0.02em] [&_h2]:text-ink [&_p]:mt-4">
            <p>{policy.intro}</p>

            <h2>{policy.whatTitle}</h2>
            <p>{policy.what}</p>

            <h2>{policy.whichTitle}</h2>
            <div className="mt-6 overflow-x-auto">
              <table className="w-full min-w-[32rem] text-start text-sm">
                <thead>
                  <tr>
                    <th scope="col" className="pe-4 pb-3 text-start font-semibold text-ink">
                      {policy.table.type}
                    </th>
                    <th scope="col" className="pe-4 pb-3 text-start font-semibold text-ink">
                      {policy.table.purpose}
                    </th>
                    <th scope="col" className="pb-3 text-start font-semibold text-ink">
                      {policy.table.duration}
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {policy.table.rows.map((row) => (
                    <tr key={row.type}>
                      <td className="border-t border-line py-3 pe-4 align-top">
                        <strong className="text-ink">{row.type}</strong>
                        <br />
                        <code dir="ltr">{row.detail}</code>
                      </td>
                      <td className="border-t border-line py-3 pe-4 align-top">{row.purpose}</td>
                      <td className="border-t border-line py-3 align-top">{row.duration}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p>{policy.noAds}</p>

            <h2>{policy.manageTitle}</h2>
            {policy.manage.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}

            <h2>{policy.thirdPartiesTitle}</h2>
            <p>{policy.thirdParties}</p>

            <h2>{policy.legalTitle}</h2>
            <p>{policy.legal}</p>

            <h2>{policy.changesTitle}</h2>
            <p>{policy.changes}</p>

            <h2>{policy.contactTitle}</h2>
            <p>
              {legalName}
              <br />
              {contact.address}, {contact.city}
              <br />
              {dict.contact.labels.phone}:{" "}
              <a href={contact.phoneHref} dir="ltr">
                {contact.phoneDisplay}
              </a>
              <br />
              {dict.contact.labels.email}: <a href={`mailto:${contact.email}`}>{contact.email}</a>
            </p>
          </div>
        </Container>
      </main>
      <Footer lang={lang} footer={dict.footer} common={dict.common} />
    </>
  );
}
