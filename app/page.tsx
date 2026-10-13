import { Contact } from "@/components/sections/Contact";
import { Footer } from "@/components/sections/Footer";
import { Hero } from "@/components/sections/Hero";
import { MarketOnline } from "@/components/sections/MarketOnline";
import { Metrics } from "@/components/sections/Metrics";
import { Navbar } from "@/components/sections/Navbar";
import { Process } from "@/components/sections/Process";
import { Services } from "@/components/sections/Services";

export default function Home() {
  return (
    <>
      <Navbar />
      <main id="contenido" className="flex-1">
        <Hero />
        <Metrics />
        <Services />
        <MarketOnline />
        <Process />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
