import { site } from "@/content/site";
import type { Dictionary } from "@/content/dictionaries";
import { Section } from "@/components/ui/Section";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { cn } from "@/lib/cn";

export function Metrics({ metrics }: { metrics: Dictionary["metrics"] }) {
  return (
    <Section tone="surface" aria-labelledby="metricas-title">
      <SectionHeader id="metricas-title" title={metrics.title} subtitle={metrics.body} />
      {/* TODO: reemplazar las cifras "XX" en content/site.ts (metricValues) por datos reales. */}
      <dl className="mt-14 grid grid-cols-2 overflow-hidden rounded-card border border-line lg:grid-cols-4">
        {metrics.labels.map((label, index) => (
          <div
            key={label}
            className={cn(
              "flex flex-col-reverse justify-end gap-2 p-6 sm:p-8",
              index % 2 === 1 && "border-s border-line",
              index >= 2 && "border-t border-line lg:border-t-0",
              index === 2 && "lg:border-s",
            )}
          >
            <dt className="text-sm leading-snug text-ink-muted">{label}</dt>
            <dd className="text-4xl font-extrabold tracking-[-0.04em] text-primary sm:text-5xl">
              {site.metricValues[index]}
            </dd>
          </div>
        ))}
      </dl>
    </Section>
  );
}
