import type { Metadata, Viewport } from "next";
import { notFound } from "next/navigation";
import { JetBrains_Mono, Manrope, Noto_Sans_Hebrew } from "next/font/google";
import { site } from "@/content/site";
import { getDictionary } from "@/content/dictionaries";
import { getDirection, hasLocale, locales, ogLocales } from "@/lib/i18n";
import { ConsentScripts } from "@/components/cookies/ConsentScripts";
import { CookieBanner } from "@/components/cookies/CookieBanner";
import "../globals.css";

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  weight: ["500"],
});

// Manrope no tiene caracteres hebreos: esta fuente cubre la versión en hebreo.
const notoHebrew = Noto_Sans_Hebrew({
  variable: "--font-hebrew",
  subsets: ["hebrew"],
  preload: false,
});

export function generateStaticParams() {
  return locales.map((lang) => ({ lang }));
}

export async function generateMetadata({ params }: LayoutProps<"/[lang]">): Promise<Metadata> {
  const { lang } = await params;
  if (!hasLocale(lang)) return {};
  const { meta } = getDictionary(lang);

  return {
    metadataBase: new URL(site.url),
    title: { default: meta.title, template: `%s | ${site.legalName}` },
    description: meta.description,
    alternates: {
      canonical: `/${lang}`,
      languages: Object.fromEntries(locales.map((locale) => [locale, `/${locale}`])),
    },
    openGraph: {
      type: "website",
      locale: ogLocales[lang],
      siteName: site.legalName,
      title: meta.title,
      description: meta.description,
    },
  };
}

export const viewport: Viewport = {
  themeColor: "#ff7a00",
};

export default async function RootLayout({ children, params }: LayoutProps<"/[lang]">) {
  const { lang } = await params;
  if (!hasLocale(lang)) notFound();
  const dict = getDictionary(lang);

  return (
    <html
      lang={lang}
      dir={getDirection(lang)}
      className={`${manrope.variable} ${jetbrainsMono.variable} ${notoHebrew.variable}`}
    >
      <body className="flex min-h-dvh flex-col">
        {children}
        <CookieBanner copy={dict.cookieBanner} policyHref={`/${lang}/${site.cookiePolicyPath}`} />
        <ConsentScripts />
      </body>
    </html>
  );
}
