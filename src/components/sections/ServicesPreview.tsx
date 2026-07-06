"use client";

import Link from "next/link";
import {
  Code2, Cloud, GitBranch, Brain, TestTube, Users, ArrowRight, type LucideIcon,
} from "lucide-react";
import { services } from "@/content/services";
import { Container } from "@/components/ui/Container";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Button } from "@/components/ui/Button";
import { Surface } from "@/components/ui/Surface";
import { AnimatedSection, StaggerContainer, StaggerItem } from "@/components/ui/AnimatedSection";

const iconMap: Record<string, LucideIcon> = {
  Code2, Cloud, GitBranch, Brain, TestTube, Users,
};

export function ServicesPreview() {
  return (
    <section className="section border-t border-border bg-muted/40">
      <Container>
        <AnimatedSection>
          <SectionHeader eyebrow="Services" title="Engineering Excellence" subtitle="Full-stack talent backed by Developer Success on every engagement." />
        </AnimatedSection>

        <StaggerContainer className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => {
            const Icon = iconMap[service.icon] ?? Code2;
            return (
              <StaggerItem key={service.id}>
                <Surface padding className="h-full">
                  <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl bg-brand-100 text-brand-700 dark:bg-brand-900/40 dark:text-brand-300">
                    <Icon className="h-5 w-5" aria-hidden="true" />
                  </div>
                  <h3 className="font-semibold">{service.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{service.description}</p>
                  <Link href={`/services#${service.id}`} className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-brand-600 dark:text-brand-400">
                    Learn more <ArrowRight className="h-3.5 w-3.5" />
                  </Link>
                </Surface>
              </StaggerItem>
            );
          })}
        </StaggerContainer>

        <AnimatedSection className="mt-10 text-center">
          <Button href="/services" variant="outline">View All Services</Button>
        </AnimatedSection>
      </Container>
    </section>
  );
}
