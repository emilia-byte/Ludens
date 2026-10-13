import { cn } from "@/lib/cn";

// Rótulo mono en mayúsculas. Usarlo con moderación: máximo uno cada tres secciones.
export function Eyebrow({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <p className={cn("font-mono text-xs font-medium uppercase tracking-[0.16em] rtl:tracking-normal", className)}>
      {children}
    </p>
  );
}
