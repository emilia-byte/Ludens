"use client";

import { clearConsent } from "@/lib/consent";
import { cn } from "@/lib/cn";

// Vuelve a mostrar el banner para que el usuario cambie su elección.
export function CookieSettingsButton({ label, className }: { label: string; className?: string }) {
  return (
    <button type="button" onClick={clearConsent} className={cn("cursor-pointer", className)}>
      {label}
    </button>
  );
}
