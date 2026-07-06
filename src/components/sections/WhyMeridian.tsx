"use client";

import {
  Globe, Flag, MessageSquare, Settings, Handshake, ShieldCheck, type LucideIcon,
} from "lucide-react";
import { siteContent } from "@/content/site";
import { Container } from "@/components/ui/Container";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Surface } from "@/components/ui/Surface";
import { AnimatedSection, StaggerContainer, StaggerItem } from "@/components/ui/AnimatedSection";

const iconMap: Record<string, LucideIcon> = {
  Globe, Flag, MessageSquare, Settings, Handshake, ShieldCheck,
};

export function WhyMeridian() {
  const { whyMeridian } = siteContent;

  return (
    <section className="section border-t border-border">
      <Container>
        <AnimatedSection>
          <SectionHeader eyebrow="Why Us" title={whyMeridian.title} subtitle={whyMeridian.subtitle} />
        </AnimatedSection>

        <StaggerContainer className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {whyMeridian.reasons.map((reason) => {
            const Icon = iconMap[reason.icon] ?? Flag;
            return (
              <StaggerItem key={reason.title}>
                <Surface padding className="h-full">
                  <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl bg-brand-100 text-brand-700 dark:bg-brand-900/40 dark:text-brand-300">
                    <Icon className="h-5 w-5" aria-hidden="true" />
                  </div>
                  <h3 className="font-semibold">{reason.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{reason.description}</p>
                </Surface>
              </StaggerItem>
            );
          })}
        </StaggerContainer>
      </Container>
    </section>
  );
}
