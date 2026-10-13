import type { ComponentPropsWithoutRef } from "react";
import { cn } from "@/lib/cn";
import { Container } from "./Container";

type Tone = "default" | "surface" | "night" | "marketonline";

const tones: Record<Tone, string> = {
  default: "bg-background text-ink",
  surface: "bg-surface text-ink",
  night: "bg-night text-on-night",
  // Sección de MarketOnline: usa los colores de marketonline.me (degradé celeste como su hero).
  marketonline:
    "bg-mo-mist text-mo-navy bg-[radial-gradient(140%_120%_at_50%_100%,var(--color-mo-sky)_0%,var(--color-mo-mist)_55%)]",
};

type SectionProps = ComponentPropsWithoutRef<"section"> & {
  tone?: Tone;
  containerClassName?: string;
};

export function Section({
  tone = "default",
  className,
  containerClassName,
  children,
  ...props
}: SectionProps) {
  return (
    <section
      data-tone={tone}
      className={cn("py-20 sm:py-24 lg:py-32", tones[tone], className)}
      {...props}
    >
      <Container className={containerClassName}>{children}</Container>
    </section>
  );
}
