import { cn } from "@/lib/cn";

type LogoProps = {
  tone?: "light" | "night";
  className?: string;
};

// Logo "A · Bloque" del Ludens Branding Project: cuatro bloques arman la L,
// el último (el resultado) va en color de acento.
// TODO: reemplazar por el SVG final del diseñador cuando esté disponible.
export function LogoMark({ tone = "light", className }: LogoProps) {
  const block = tone === "night" ? "fill-on-night" : "fill-primary";
  const result = tone === "night" ? "fill-signal" : "fill-accent";
  return (
    <svg
      viewBox="0 0 23 35"
      aria-hidden="true"
      focusable="false"
      className={cn("h-7 w-auto", className)}
    >
      <rect className={block} x="0" y="0" width="10" height="10" rx="3" />
      <rect className={block} x="0" y="12.5" width="10" height="10" rx="3" />
      <rect className={block} x="0" y="25" width="10" height="10" rx="3" />
      <rect className={result} x="12.5" y="25" width="10" height="10" rx="3" />
    </svg>
  );
}

export function Logo({ tone = "light", className }: LogoProps) {
  return (
    <span className={cn("inline-flex items-center gap-2.5", className)}>
      <LogoMark tone={tone} />
      <span
        className={cn(
          "text-2xl font-bold tracking-[-0.04em]",
          tone === "night" ? "text-on-night" : "text-primary",
        )}
      >
        Ludens
      </span>
    </span>
  );
}
