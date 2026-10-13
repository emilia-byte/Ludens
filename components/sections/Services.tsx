import { site } from "@/content/site";
import type { Dictionary } from "@/content/dictionaries";
import { Card } from "@/components/ui/Card";
import { Icon } from "@/components/ui/Icon";
import { Section } from "@/components/ui/Section";
import { SectionHeader } from "@/components/ui/SectionHeader";

export function Services({ services }: { services: Dictionary["services"] }) {
  return (
    <Section id={site.sectionIds[0]} aria-labelledby="servicios-title">
      <SectionHeader id="servicios-title" title={services.title} subtitle={services.subtitle} />
      <ul className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6">
        {services.items.map((service, index) => (
          <li key={service.title}>
            <Card className="h-full transition-colors duration-150 hover:border-primary/40">
              <span className="inline-flex size-11 items-center justify-center rounded-control bg-primary-soft text-primary">
                <Icon name={site.serviceIcons[index]} className="size-5" strokeWidth={1.75} />
              </span>
              <h3 className="mt-6 text-lg font-bold tracking-[-0.01em] text-ink">
                {service.title}
              </h3>
              <p className="mt-2 leading-relaxed text-ink-muted">{service.description}</p>
            </Card>
          </li>
        ))}
      </ul>
    </Section>
  );
}
