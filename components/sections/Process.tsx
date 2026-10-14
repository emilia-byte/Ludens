import { site } from "@/content/site";
import type { Dictionary } from "@/content/dictionaries";
import { Section } from "@/components/ui/Section";
import { SectionHeader } from "@/components/ui/SectionHeader";

export function Process({ process }: { process: Dictionary["process"] }) {
  return (
    <Section id={site.sectionIds[2]} tone="surface" aria-labelledby="proceso-title">
      <SectionHeader id="proceso-title" title={process.title} subtitle={process.subtitle} />
      <ol className="mt-14 grid gap-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
        {process.steps.map((step) => (
          <li key={step.title} className="border-t-2 border-signal pt-6">
            <h3 className="text-xl font-bold tracking-[-0.02em] text-ink">{step.title}</h3>
            <p className="mt-3 leading-relaxed text-ink-muted">{step.description}</p>
          </li>
        ))}
      </ol>
    </Section>
  );
}
