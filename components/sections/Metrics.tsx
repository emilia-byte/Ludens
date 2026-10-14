import { site } from "@/content/site";
import type { Dictionary } from "@/content/dictionaries";
import { Section } from "@/components/ui/Section";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { cn } from "@/lib/cn";

export function Metrics({ metrics }: { metrics: Dictionary["metrics"] }) {
  return (
    <Section tone="surface" aria-labelledby="metricas-title">
      <SectionHeader id="metricas-title" title={metrics.title} subtitle={metrics.body} />
      <dl className="mt-14 grid grid-cols-2 overflow-hidden rounded-card border border-line lg:grid-cols-4">
        {metrics.labels.map((label, index) => {
          const metric = site.metrics[index];
          return (
            <div
              key={label}
              className={cn(
                "flex flex-col-reverse justify-end gap-2 p-5 sm:p-8",
                index % 2 === 1 && "border-s border-line",
                index >= 2 && "border-t border-line lg:border-t-0",
                index === 2 && "lg:border-s",
              )}
            >
              <dt className="text-sm leading-snug text-ink-muted">{label}</dt>
              {/* dir="ltr": el signo "+" queda delante del número también en hebreo. */}
              <dd
                dir="ltr"
                className="text-3xl font-extrabold tracking-[-0.04em] whitespace-nowrap text-primary tabular-nums sm:text-4xl xl:text-5xl rtl:text-end"
              >
                {metric.value}
                {metric.unit && (
                  <span className="ms-1.5 text-base font-bold tracking-normal sm:text-lg">
                    {metric.unit}
                  </span>
                )}
              </dd>
            </div>
          );
        })}
      </dl>
    </Section>
  );
}
