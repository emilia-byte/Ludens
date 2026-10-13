import { ArrowUpRight, Mail, MapPin, MessageCircle, Phone } from "lucide-react";
import { site } from "@/content/site";
import { Card } from "@/components/ui/Card";
import { Section } from "@/components/ui/Section";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { ContactForm } from "./ContactForm";

export function Contact() {
  const { contact, contactSection } = site;
  const { labels } = contactSection;
  const linkClasses =
    "rounded-control font-semibold text-ink underline-offset-4 hover:text-primary hover:underline";

  return (
    <Section
      id="contacto"
      aria-labelledby="contacto-title"
      containerClassName="grid gap-12 lg:grid-cols-12 lg:gap-16"
    >
      <div className="lg:col-span-5">
        <SectionHeader
          id="contacto-title"
          title={contactSection.title}
          subtitle={contactSection.subtitle}
        />
        <address className="mt-10 space-y-6 not-italic">
          <p className="text-lg font-bold text-ink">{site.legalName}</p>
          <ContactRow icon={<MapPin className="size-5" />} label={labels.address}>
            {contact.address}, {contact.city}
          </ContactRow>
          <ContactRow icon={<Phone className="size-5" />} label={labels.phone}>
            <a href={contact.phoneHref} className={linkClasses}>
              {contact.phoneDisplay}
            </a>
          </ContactRow>
          <ContactRow icon={<Mail className="size-5" />} label={labels.email}>
            <a href={`mailto:${contact.email}`} className={linkClasses}>
              {contact.email}
            </a>
          </ContactRow>
          <ContactRow icon={<MessageCircle className="size-5" />} label={labels.whatsapp}>
            <a href={contact.whatsapp} target="_blank" rel="noopener noreferrer" className={linkClasses}>
              {contact.phoneDisplay}
              <span className="sr-only"> (se abre en una pestaña nueva)</span>
            </a>
          </ContactRow>
          <ContactRow icon={<ArrowUpRight className="size-5" />} label={labels.linkedin}>
            <a href={contact.linkedin} target="_blank" rel="noopener noreferrer" className={linkClasses}>
              ludens-sa
              <span className="sr-only"> (se abre en una pestaña nueva)</span>
            </a>
          </ContactRow>
        </address>
      </div>

      <Card className="lg:col-span-7">
        <ContactForm />
      </Card>
    </Section>
  );
}

function ContactRow({
  icon,
  label,
  children,
}: {
  icon: React.ReactNode;
  label: string;
  children: React.ReactNode;
}) {
  return (
    <div className="flex gap-4">
      <span
        aria-hidden="true"
        className="inline-flex size-10 shrink-0 items-center justify-center rounded-control border border-line bg-surface text-primary"
      >
        {icon}
      </span>
      <div>
        <p className="text-sm text-ink-muted">{label}</p>
        <p className="mt-0.5 text-ink">{children}</p>
      </div>
    </div>
  );
}
