import type { Metadata, Viewport } from "next";
import { JetBrains_Mono, Manrope } from "next/font/google";
import { site } from "@/content/site";
import { ConsentScripts } from "@/components/cookies/ConsentScripts";
import { CookieBanner } from "@/components/cookies/CookieBanner";
import "./globals.css";

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  weight: ["500"],
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.legalName} | Marketing digital en Montevideo`,
    template: `%s | ${site.legalName}`,
  },
  description: site.description,
  openGraph: {
    type: "website",
    locale: "es_UY",
    siteName: site.legalName,
    title: `${site.legalName} | Marketing digital en Montevideo`,
    description: site.description,
  },
};

export const viewport: Viewport = {
  themeColor: "#0b1236",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="es" className={`${manrope.variable} ${jetbrainsMono.variable}`}>
      <body className="flex min-h-dvh flex-col">
        {children}
        <CookieBanner />
        <ConsentScripts />
      </body>
    </html>
  );
}
