import { ArrowRight } from "lucide-react";
import { site } from "@/content/site";
import { ButtonLink } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { cn } from "@/lib/cn";

// Grilla decorativa con el recurso gráfico del logo "Bloque".
// 1 = bloque azul, 0 = bloque vacío, 2 = el bloque "resultado" en acento.
const blocks = [
  [1, 0, 0, 0],
  [1, 0, 1, 0],
  [1, 1, 1, 0],
  [1, 1, 1, 2],
];

export function Hero() {
  const { hero } = site;
  return (
    <section id="inicio" aria-labelledby="hero-title" className="bg-background">
      <Container className="grid items-center gap-12 pt-16 pb-20 sm:pt-20 sm:pb-24 lg:grid-cols-12 lg:pt-24 lg:pb-32">
        <div className="lg:col-span-8">
          <Eyebrow className="text-primary">{hero.eyebrow}</Eyebrow>
          <h1
            id="hero-title"
            className="mt-5 text-4xl leading-[1.05] font-extrabold tracking-[-0.04em] text-balance text-ink sm:text-5xl lg:text-6xl"
          >
            {hero.title}
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-pretty text-ink-muted sm:text-xl">
            {hero.subtitle}
          </p>
          <div className="mt-10 flex flex-col gap-3 sm:flex-row">
            <ButtonLink href={hero.primaryCta.href} size="lg">
              {hero.primaryCta.label}
              <ArrowRight aria-hidden="true" className="size-4" />
            </ButtonLink>
            <ButtonLink href={hero.secondaryCta.href} size="lg" variant="secondary">
              {hero.secondaryCta.label}
            </ButtonLink>
          </div>
        </div>

        <div aria-hidden="true" className="hidden lg:col-span-4 lg:block">
          <div className="ml-auto grid w-full max-w-xs grid-cols-4 gap-3">
            {blocks.flat().map((value, index) => (
              <span
                key={index}
                className={cn(
                  "aspect-square rounded-[22%]",
                  value === 1 && "bg-primary",
                  value === 0 && "border border-line",
                  value === 2 && "bg-accent",
                )}
              />
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
