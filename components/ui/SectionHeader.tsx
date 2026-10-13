import { cn } from "@/lib/cn";
import { Eyebrow } from "./Eyebrow";

type SectionHeaderProps = {
  id?: string;
  title: string;
  subtitle?: string;
  eyebrow?: string;
  tone?: "light" | "night" | "marketonline";
  className?: string;
};

export function SectionHeader({
  id,
  title,
  subtitle,
  eyebrow,
  tone = "light",
  className,
}: SectionHeaderProps) {
  const night = tone === "night";
  const mo = tone === "marketonline";
  return (
    <div className={cn("max-w-2xl", className)}>
      {eyebrow && (
        <Eyebrow className={cn("mb-4", night ? "text-signal" : mo ? "text-mo-navy" : "text-primary")}>
          {eyebrow}
        </Eyebrow>
      )}
      <h2
        id={id}
        className={cn(
          "text-3xl font-bold tracking-[-0.03em] text-balance sm:text-4xl lg:text-5xl",
          night ? "text-on-night" : mo ? "text-mo-navy" : "text-ink",
        )}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={cn(
            "mt-4 max-w-[60ch] text-lg leading-relaxed text-pretty",
            night ? "text-on-night-muted" : mo ? "text-mo-slate" : "text-ink-muted",
          )}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}
