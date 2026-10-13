import type { ComponentPropsWithoutRef } from "react";
import { cn } from "@/lib/cn";

export function Card({ className, ...props }: ComponentPropsWithoutRef<"div">) {
  return (
    <div
      className={cn(
        "rounded-card border border-line bg-surface p-6 shadow-card sm:p-8",
        className,
      )}
      {...props}
    />
  );
}
