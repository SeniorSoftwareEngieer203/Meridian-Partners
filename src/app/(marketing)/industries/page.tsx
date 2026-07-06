import {
  HeartPulse, Landmark, GraduationCap, Shield, ShoppingBag,
  Factory, Building, Layers, Cpu, type LucideIcon,
} from "lucide-react";
import { createMetadata } from "@/lib/metadata";
import { industries } from "@/content/industries";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Surface } from "@/components/ui/Surface";
import { PageHero } from "@/components/layout/PageHero";
import { AnimatedSection, StaggerContainer, StaggerItem } from "@/components/ui/AnimatedSection";
import { ContactCTA } from "@/components/sections/ContactCTA";

export const metadata = createMetadata({
  title: "Industries",
  description: "Healthcare, finance, education, insurance, retail, manufacturing, government, SaaS, and technology.",
  path: "/industries",
});

const iconMap: Record<string, LucideIcon> = {
  HeartPulse, Landmark, GraduationCap, Shield, ShoppingBag, Factory, Building, Layers, Cpu,
};

export default function IndustriesPage() {
  return (
    <>
      <PageHero title="Industries We Serve" subtitle="Deep domain expertise across sectors that power the U.S. economy." />

      <section className="section">
        <Container>
          <StaggerContainer className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {industries.map((industry) => {
              const Icon = iconMap[industry.icon] ?? Layers;
              return (
                <StaggerItem key={industry.id}>
                  <Surface padding className="h-full">
                    <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-brand-100 text-brand-700 dark:bg-brand-900/40 dark:text-brand-300">
                      <Icon className="h-6 w-6" aria-hidden="true" />
                    </div>
                    <h2 className="text-lg font-bold">{industry.title}</h2>
                    <p className="mt-2 text-sm text-muted-foreground">{industry.description}</p>
                    <Button href="/contact" variant="outline" size="sm" className="mt-5">Discuss Project</Button>
                  </Surface>
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
