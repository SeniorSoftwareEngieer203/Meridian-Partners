"use client";

import { BookOpen, Monitor, Wallet, MessageSquare, CheckCircle, type LucideIcon } from "lucide-react";
import { siteContent } from "@/content/site";
import { Container } from "@/components/ui/Container";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Surface } from "@/components/ui/Surface";
import { AnimatedSection, StaggerContainer, StaggerItem } from "@/components/ui/AnimatedSection";

const pillarIcons: Record<string, LucideIcon> = {
  BookOpen,
  Monitor,
  Wallet,
  MessageSquare,
};

const pillarAccents = [
  "bg-brand-900",
  "bg-brand-700",
  "bg-brand-600",
  "bg-brand-500",
];

export function FriendAmericanSupportSection() {
  const { friendAmericanSupport } = siteContent;

  return (
    <section className="section border-t border-border bg-muted/40">
      <Container>
        <AnimatedSection>
          <SectionHeader
            eyebrow="Friend Americans"
            title={friendAmericanSupport.title}
            subtitle={friendAmericanSupport.subtitle}
          />
        </AnimatedSection>

        <StaggerContainer className="mt-12 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {friendAmericanSupport.requirements.map((req) => (
            <StaggerItem key={req.label}>
              <Surface className="flex items-start gap-3 p-4">
                <CheckCircle className="mt-0.5 h-5 w-5 shrink-0 text-brand-600" aria-hidden="true" />
                <div>
                  <div className="text-sm font-semibold">{req.label}</div>
                  <div className="mt-0.5 text-xs text-muted-foreground">{req.description}</div>
                </div>
              </Surface>
            </StaggerItem>
          ))}
        </StaggerContainer>

        <StaggerContainer className="mt-8 grid gap-4 sm:grid-cols-2">
          {friendAmericanSupport.pillars.map((pillar, i) => {
            const Icon = pillarIcons[pillar.icon] ?? BookOpen;
            const accent = pillarAccents[i] ?? "bg-brand-900";
            return (
              <StaggerItem key={pillar.title}>
                <Surface padding className="relative h-full overflow-hidden">
                  <div className="pointer-events-none absolute -right-6 -top-6 h-24 w-24 rounded-full bg-brand-100/60 dark:bg-brand-900/20" aria-hidden="true" />
                  <div className={`relative flex h-12 w-12 items-center justify-center rounded-2xl text-white ${accent}`}>
                    <Icon className="h-5 w-5" aria-hidden="true" />
                  </div>
                  <h3 className="relative mt-5 font-semibold">{pillar.title}</h3>
                  <p className="relative mt-2 text-sm leading-relaxed text-muted-foreground">
                    {pillar.description}
                  </p>
                </Surface>
              </StaggerItem>
            );
          })}
        </StaggerContainer>

        <AnimatedSection delay={0.2}>
          <p className="mx-auto mt-12 max-w-2xl text-center text-muted-foreground leading-relaxed">
            {friendAmericanSupport.callout}
          </p>
        </AnimatedSection>
      </Container>
    </section>
  );
}
