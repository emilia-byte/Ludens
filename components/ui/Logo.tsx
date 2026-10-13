import { useId } from "react";
import { cn } from "@/lib/cn";

type LogoProps = {
  tone?: "light" | "night";
  className?: string;
};

// Isotipo original de Ludens (círculos naranja y verde, cuadros de "pixel" y cursor),
// redibujado en vector a partir del PNG de ludenssa.com para que se vea nítido en cualquier tamaño.
// TODO: si existe el archivo vectorial original del logo, reemplazar este dibujo por ese.
export function LogoMark({ className }: { className?: string }) {
  const id = useId().replace(/:/g, "");
  const orange = `${id}-orange`;
  const green = `${id}-green`;
  const dot = `${id}-dot`;
  const overlap = `${id}-overlap`;
  const greenClip = `${id}-green-clip`;

  return (
    <svg
      viewBox="34 14 140 136"
      aria-hidden="true"
      focusable="false"
      className={cn("h-10 w-auto", className)}
    >
      <defs>
        <linearGradient id={orange} x1="0.8" y1="0" x2="0.25" y2="1">
          <stop offset="0" stopColor="#FFAA00" />
          <stop offset="1" stopColor="#FF6A00" />
        </linearGradient>
        <linearGradient id={green} x1="0.9" y1="0" x2="0.1" y2="1">
          <stop offset="0" stopColor="#A8E61A" />
          <stop offset="1" stopColor="#55CC55" />
        </linearGradient>
        <linearGradient id={dot} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#55CC55" />
          <stop offset="1" stopColor="#A8E61A" />
        </linearGradient>
        <linearGradient id={overlap} x1="0.9" y1="0" x2="0.1" y2="1">
          <stop offset="0" stopColor="#FF5A00" />
          <stop offset="1" stopColor="#FF3A00" />
        </linearGradient>
        <clipPath id={greenClip}>
          <circle cx="75.5" cy="56" r="38" />
        </clipPath>
      </defs>

      <circle cx="75.5" cy="56" r="38" fill={`url(#${green})`} />
      <circle cx="110" cy="85" r="60" fill={`url(#${orange})`} />
      <circle cx="110" cy="85" r="60" fill={`url(#${overlap})`} clipPath={`url(#${greenClip})`} />
      <circle cx="47.5" cy="123.5" r="10" fill={`url(#${dot})`} />

      <g fill="#F2F7F9">
        <rect x="60" y="31.25" width="13.5" height="13.5" />
        <rect x="86.5" y="31.25" width="13.5" height="13.5" />
        <rect x="73.25" y="44.75" width="13.5" height="13.5" />
        <rect x="60" y="58.25" width="13.5" height="13.5" />
        <path
          d="M86 63 L142 82.5 L126 89.5 L156 123 L147.5 132 L115.5 101 L105 117.5 Z"
          stroke="#F2F7F9"
          strokeWidth="3"
          strokeLinejoin="round"
        />
      </g>
    </svg>
  );
}

export function Logo({ tone = "light", className }: LogoProps) {
  return (
    <span className={cn("inline-flex items-center gap-2.5", className)}>
      <LogoMark />
      <span
        className={cn(
          "text-xl font-extrabold tracking-[-0.01em] uppercase",
          tone === "night" ? "text-on-night" : "text-ink",
        )}
      >
        Ludens S.A
      </span>
    </span>
  );
}
