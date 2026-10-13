import { cn } from "@/lib/cn";

// Rótulo corto sobre un titular: misma fuente del sitio, con una línea naranja del logo.
// Usarlo con moderación: máximo uno cada tres secciones.
export function Eyebrow({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <p className={cn("flex items-center gap-3 text-sm font-semibold sm:text-base", className)}>
      <span aria-hidden="true" className="h-0.5 w-6 shrink-0 rounded-full bg-accent" />
      {children}
    </p>
  );
}
