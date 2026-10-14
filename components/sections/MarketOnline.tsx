import Image from "next/image";
import { ArrowUpRight, Check } from "lucide-react";
import { site } from "@/content/site";
import type { Dictionary } from "@/content/dictionaries";
import { ButtonLink } from "@/components/ui/Button";
import { Section } from "@/components/ui/Section";
import { SectionHeader } from "@/components/ui/SectionHeader";

type MarketOnlineProps = {
  marketOnline: Dictionary["marketOnline"];
  newTab: string;
};

// Única sección con los colores de MarketOnline (celeste), para marcar que es un producto propio.
// Texto arriba y la captura del software a lo ancho, debajo.
export function MarketOnline({ marketOnline, newTab }: MarketOnlineProps) {
  const { url, image } = site.marketOnline;
  return (
    <Section id={site.sectionIds[1]} tone="marketonline" aria-labelledby="marketonline-title">
      <SectionHeader
        id="marketonline-title"
        tone="marketonline"
        title={marketOnline.title}
        subtitle={marketOnline.description}
      />

      <ul className="mt-10 grid max-w-4xl gap-x-10 gap-y-3 sm:grid-cols-2">
        {marketOnline.features.map((feature) => (
          <li key={feature} className="flex gap-3 text-mo-navy">
            <span
              aria-hidden="true"
              className="mt-0.5 inline-flex size-5 shrink-0 items-center justify-center rounded-full bg-mo-blue-strong"
            >
              <Check className="size-3.5 text-white" strokeWidth={3} />
            </span>
            <span>{feature}</span>
          </li>
        ))}
      </ul>

      <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center sm:gap-6">
        <ButtonLink href={url} target="_blank" rel="noopener noreferrer" size="lg">
          {marketOnline.cta}
          <ArrowUpRight aria-hidden="true" className="size-4 rtl:-scale-x-100" />
          <span className="sr-only">{newTab}</span>
        </ButtonLink>
        {/* Dirección oficial visible (es igual en todos los idiomas). */}
        <a
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          dir="ltr"
          className="self-start rounded-control font-semibold text-mo-navy underline decoration-mo-blue decoration-2 underline-offset-4 hover:decoration-mo-navy sm:self-auto"
        >
          www.marketonline.me
          <span className="sr-only"> {newTab}</span>
        </a>
      </div>

      <div className="mt-14 overflow-hidden rounded-card border border-mo-sky bg-surface p-2 shadow-card sm:p-3">
        <Image
          src={image.src}
          alt={marketOnline.imageAlt}
          width={image.width}
          height={image.height}
          sizes="(min-width: 1152px) 1088px, 100vw"
          className="h-auto w-full rounded-[calc(var(--radius-card)-0.5rem)]"
        />
      </div>
    </Section>
  );
}
