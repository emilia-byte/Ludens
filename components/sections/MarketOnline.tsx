import Image from "next/image";
import { ArrowUpRight, Check } from "lucide-react";
import { site } from "@/content/site";
import { ButtonLink } from "@/components/ui/Button";
import { Section } from "@/components/ui/Section";
import { SectionHeader } from "@/components/ui/SectionHeader";

export function MarketOnline() {
  const { marketOnline } = site;
  return (
    <Section
      id="marketonline"
      tone="night"
      aria-labelledby="marketonline-title"
      containerClassName="grid items-center gap-12 lg:grid-cols-2 lg:gap-16"
    >
      <div>
        <SectionHeader
          id="marketonline-title"
          tone="night"
          eyebrow={marketOnline.eyebrow}
          title={marketOnline.title}
          subtitle={marketOnline.description}
        />
        <ul className="mt-8 space-y-3">
          {marketOnline.features.map((feature) => (
            <li key={feature} className="flex gap-3 text-on-night">
              <Check aria-hidden="true" className="mt-0.5 size-5 shrink-0 text-signal" />
              <span>{feature}</span>
            </li>
          ))}
        </ul>
        <ButtonLink
          href={marketOnline.url}
          target="_blank"
          rel="noopener noreferrer"
          variant="signal"
          size="lg"
          className="mt-10"
        >
          {marketOnline.cta}
          <ArrowUpRight aria-hidden="true" className="size-4" />
          <span className="sr-only">(se abre en una pestaña nueva)</span>
        </ButtonLink>
      </div>

      <div className="overflow-hidden rounded-card border border-night-line bg-on-night/5 p-2">
        {/* TODO: reemplazar el placeholder por la captura real de MarketOnline (ver content/site.ts).
            Con una imagen PNG o WebP real se puede quitar `unoptimized`. */}
        <Image
          src={marketOnline.image.src}
          alt={marketOnline.image.alt}
          width={marketOnline.image.width}
          height={marketOnline.image.height}
          sizes="(min-width: 1024px) 560px, 100vw"
          unoptimized
          className="h-auto w-full rounded-[calc(var(--radius-card)-0.5rem)]"
        />
      </div>
    </Section>
  );
}
