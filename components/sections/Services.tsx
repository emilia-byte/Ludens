import { site } from "@/content/site";
import type { Dictionary } from "@/content/dictionaries";
import { Icon } from "@/components/ui/Icon";
import { Section } from "@/components/ui/Section";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { cn } from "@/lib/cn";

// Grilla asimétrica: los dos primeros servicios del diccionario (Marketing y Plataformas en el
// orden de featured) ocupan celdas grandes con fondo de color; el resto, celdas chicas.
// Seis servicios, seis celdas: 2 + 2 arriba y 1 + 1 + 1 + 1 abajo en desktop.
const featured: Record<number, string> = {
  0: "bg-accent-soft border-accent/30", // Marketing: naranja del logo, muy aclarado
  5: "bg-primary-soft border-primary/20", // Plataformas: verde del logo, muy aclarado
};
const order = [0, 5, 1, 2, 3, 4];

export function Services({ services }: { services: Dictionary["services"] }) {
  return (
    <Section id={site.sectionIds[0]} aria-labelledby="servicios-title">
      <SectionHeader id="servicios-title" title={services.title} subtitle={services.subtitle} />
      <ul className="mt-14 grid gap-4 md:grid-cols-2 lg:grid-cols-4 lg:gap-5">
        {order.map((index) => {
          const service = services.items[index];
          const isFeatured = index in featured;
          return (
            <li
              key={service.title}
              className={cn(
                "flex flex-col rounded-card border p-6 sm:p-8",
                isFeatured ? cn("lg:col-span-2", featured[index]) : "border-line bg-surface",
              )}
            >
              <Icon
                name={site.serviceIcons[index]}
                className={cn("text-primary", isFeatured ? "size-7" : "size-6")}
                strokeWidth={1.75}
              />
              <h3
                className={cn(
                  "font-bold tracking-[-0.02em] text-ink",
                  isFeatured ? "mt-10 text-2xl sm:text-3xl" : "mt-6 text-lg",
                )}
              >
                {service.title}
              </h3>
              <p
                className={cn(
                  "mt-2 leading-relaxed text-ink-muted",
                  isFeatured && "max-w-md text-lg",
                )}
              >
                {service.description}
              </p>
            </li>
          );
        })}
      </ul>
    </Section>
  );
}
