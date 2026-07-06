import {
  Code2, Cloud, GitBranch, Brain, TestTube, Users, Check, type LucideIcon,
} from "lucide-react";
import { createMetadata } from "@/lib/metadata";
import { services } from "@/content/services";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Surface } from "@/components/ui/Surface";
import { PageHero } from "@/components/layout/PageHero";
import { AnimatedSection, StaggerContainer, StaggerItem } from "@/components/ui/AnimatedSection";
import { ContactCTA } from "@/components/sections/ContactCTA";

export const metadata = createMetadata({
  title: "Services",
  description: "Software engineering, cloud, DevOps, AI, QA, and dedicated teams with Developer Success support.",
  path: "/services",
});

const iconMap: Record<string, LucideIcon> = {
  Code2, Cloud, GitBranch, Brain, TestTube, Users,
};

export default function ServicesPage() {
  return (
    <>
      <PageHero title="Our Services" subtitle="Engineering excellence backed by Developer Success on every engagement." />

      <section className="section">
        <Container>
          <StaggerContainer className="space-y-20">
            {services.map((service, i) => {
              const Icon = iconMap[service.icon] ?? Code2;
              return (
                <StaggerItem key={service.id}>
                  <div id={service.id} className="scroll-mt-24 grid gap-10 lg:grid-cols-2 lg:items-center">
                    <div className={i % 2 === 1 ? "lg:order-2" : ""}>
                      <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-brand-100 text-brand-700 dark:bg-brand-900/40 dark:text-brand-300">
                        <Icon className="h-6 w-6" aria-hidden="true" />
                      </div>
                      <h2 className="section-heading">{service.title}</h2>
                      <p className="mt-4 text-muted-foreground leading-relaxed">{service.description}</p>
                      <Button href="/contact" className="mt-6">Get Started</Button>
                    </div>
                    <Surface padding className={i % 2 === 1 ? "lg:order-1" : ""}>
                      <h3 className="mb-4 text-sm font-semibold uppercase tracking-widest text-muted-foreground">Capabilities</h3>
                      <ul className="space-y-3">
                        {service.features.map((f) => (
                          <li key={f} className="flex items-start gap-3 text-sm">
                            <Check className="mt-0.5 h-4 w-4 shrink-0 text-brand-600" />
                            <span className="text-muted-foreground">{f}</span>
                          </li>
                        ))}
                      </ul>
                    </Surface>
                  </div>
                </StaggerItem>
              );
            })}
          </StaggerContainer>
        </Container>
      </section>

      <ContactCTA />
    </>
  );
}
