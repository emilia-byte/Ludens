import { site } from "@/content/site";
import { Section } from "@/components/ui/Section";
import { SectionHeader } from "@/components/ui/SectionHeader";

export function Process() {
  const { process } = site;
  return (
    <Section id="proceso" tone="surface" aria-labelledby="proceso-title">
      <SectionHeader id="proceso-title" title={process.title} subtitle={process.subtitle} />
      <ol className="mt-14 grid gap-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
        {process.steps.map((step, index) => (
          <li key={step.title} className="border-t-2 border-primary pt-6">
            <span aria-hidden="true" className="font-mono text-sm font-medium text-primary">
              {String(index + 1).padStart(2, "0")}
            </span>
            <h3 className="mt-3 text-xl font-bold tracking-[-0.02em] text-ink">{step.title}</h3>
            <p className="mt-3 leading-relaxed text-ink-muted">{step.description}</p>
          </li>
        ))}
      </ol>
    </Section>
  );
}
