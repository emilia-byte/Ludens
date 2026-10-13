import { notFound } from "next/navigation";
import { getDictionary } from "@/content/dictionaries";
import { hasLocale } from "@/lib/i18n";
import { Contact } from "@/components/sections/Contact";
import { Footer } from "@/components/sections/Footer";
import { Hero } from "@/components/sections/Hero";
import { MarketOnline } from "@/components/sections/MarketOnline";
import { Metrics } from "@/components/sections/Metrics";
import { Navbar } from "@/components/sections/Navbar";
import { Process } from "@/components/sections/Process";
import { Services } from "@/components/sections/Services";

export default async function Home({ params }: PageProps<"/[lang]">) {
  const { lang } = await params;
  if (!hasLocale(lang)) notFound();
  const dict = getDictionary(lang);

  return (
    <>
      <Navbar lang={lang} nav={dict.nav} homeLabel={dict.common.homeLabel} />
      <main id="contenido" className="flex-1">
        <Hero hero={dict.hero} />
        <Metrics metrics={dict.metrics} />
        <Services services={dict.services} />
        <MarketOnline marketOnline={dict.marketOnline} newTab={dict.common.newTab} />
        <Process process={dict.process} />
        <Contact contact={dict.contact} newTab={dict.common.newTab} />
      </main>
      <Footer lang={lang} footer={dict.footer} common={dict.common} />
    </>
  );
}
