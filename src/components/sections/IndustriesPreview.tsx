"use client";

import Link from "next/link";
import {
  HeartPulse, Landmark, GraduationCap, Shield, ShoppingBag,
  Factory, Building, Layers, Cpu, ArrowRight, type LucideIcon,
} from "lucide-react";
import { industries } from "@/content/industries";
import { Container } from "@/components/ui/Container";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Surface } from "@/components/ui/Surface";
import { AnimatedSection, StaggerContainer, StaggerItem } from "@/components/ui/AnimatedSection";

const iconMap: Record<string, LucideIcon> = {
  HeartPulse, Landmark, GraduationCap, Shield, ShoppingBag, Factory, Building, Layers, Cpu,
};

export function IndustriesPreview() {
  return (
    <section className="section bg-muted/40 border-t border-border">
      <Container>
        <AnimatedSection>
          <SectionHeader eyebrow="Industries" title="Sectors We Serve" subtitle="Deep expertise across the industries that power the U.S. economy." />
        </AnimatedSection>

        <StaggerContainer className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {industries.map((industry) => {
            const Icon = iconMap[industry.icon] ?? Layers;
            return (
              <StaggerItem key={industry.id}>
                <Surface className="flex items-start gap-4 p-5">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-brand-100 text-brand-700 dark:bg-brand-900/40 dark:text-brand-300">
                    <Icon className="h-5 w-5" aria-hidden="true" />
                  </div>
                  <div>
                    <h3 className="font-semibold">{industry.title}</h3>
                    <p className="mt-1 text-sm text-muted-foreground">{industry.description}</p>
                  </div>
                </Surface>
              </StaggerItem>
            );
          })}
        </StaggerContainer>

        <AnimatedSection className="mt-8 text-center">
          <Link href="/industries" className="inline-flex items-center gap-1.5 text-sm font-medium text-brand-600 dark:text-brand-400">
            All industries <ArrowRight className="h-3.5 w-3.5" />
          </Link>
        </AnimatedSection>
      </Container>
    </section>
  );
}
