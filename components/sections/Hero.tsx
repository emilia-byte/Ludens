import { ArrowRight } from "lucide-react";
import { site } from "@/content/site";
import { ButtonLink } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { LogoMark } from "@/components/ui/Logo";

export function Hero() {
  const { hero } = site;
  return (
    <section
      id="inicio"
      aria-labelledby="hero-title"
      className="relative overflow-hidden bg-background bg-[radial-gradient(45%_60%_at_88%_35%,var(--color-accent-soft)_0%,transparent_70%),radial-gradient(35%_45%_at_70%_85%,var(--color-primary-soft)_0%,transparent_70%)]"
    >
      <Container className="relative grid items-center gap-12 pt-16 pb-20 sm:pt-20 sm:pb-24 lg:grid-cols-12 lg:pt-24 lg:pb-32">
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

        <div aria-hidden="true" className="hidden lg:col-span-4 lg:flex lg:justify-end">
          <LogoMark className="h-auto w-full max-w-sm" />
        </div>
      </Container>
    </section>
  );
}
