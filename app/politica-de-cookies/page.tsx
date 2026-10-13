import type { Metadata } from "next";
import { CookiePolicy, cookiePolicyMeta } from "@/content/cookie-policy";
import { Footer } from "@/components/sections/Footer";
import { Navbar } from "@/components/sections/Navbar";
import { Container } from "@/components/ui/Container";

export const metadata: Metadata = {
  title: cookiePolicyMeta.title,
  description: cookiePolicyMeta.description,
};

export default function CookiePolicyPage() {
  return (
    <>
      <Navbar />
      <main id="contenido" className="flex-1 bg-surface">
        <Container size="prose" className="py-16 sm:py-24">
          {cookiePolicyMeta.draft && (
            <p
              role="note"
              className="mb-10 rounded-card border border-line bg-background p-4 text-sm text-ink-muted"
            >
              <strong className="text-ink">Borrador:</strong> {cookiePolicyMeta.draftNote}
            </p>
          )}
          <h1 className="text-4xl font-extrabold tracking-[-0.04em] text-ink sm:text-5xl">
            {cookiePolicyMeta.title}
          </h1>
          <p className="mt-4 text-sm text-ink-muted">
            Última actualización: {cookiePolicyMeta.lastUpdated}
          </p>
          <div className="mt-10 text-ink-muted leading-relaxed [&_a]:font-semibold [&_a]:text-primary [&_a]:underline [&_a]:underline-offset-2 [&_h2]:mt-12 [&_h2]:mb-4 [&_h2]:text-2xl [&_h2]:font-bold [&_h2]:tracking-[-0.02em] [&_h2]:text-ink [&_li]:mt-2 [&_p]:mt-4 [&_strong]:text-ink [&_table]:mt-6 [&_table]:w-full [&_table]:text-left [&_table]:text-sm [&_td]:border-t [&_td]:border-line [&_td]:py-3 [&_td]:pr-4 [&_td]:align-top [&_th]:pb-3 [&_th]:pr-4 [&_th]:font-semibold [&_th]:text-ink [&_ul]:mt-4 [&_ul]:list-disc [&_ul]:pl-6">
            <CookiePolicy />
          </div>
        </Container>
      </main>
      <Footer />
    </>
  );
}
