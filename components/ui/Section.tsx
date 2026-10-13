import type { ComponentPropsWithoutRef } from "react";
import { cn } from "@/lib/cn";
import { Container } from "./Container";

type Tone = "default" | "surface" | "night";

const tones: Record<Tone, string> = {
  default: "bg-background text-ink",
  surface: "bg-surface text-ink",
  night: "bg-night text-on-night",
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
