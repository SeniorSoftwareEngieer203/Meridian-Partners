"use client";

import { Check, ArrowRight } from "lucide-react";
import { siteContent } from "@/content/site";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { AnimatedSection, StaggerContainer, StaggerItem } from "@/components/ui/AnimatedSection";

export function DeveloperSuccessSection() {
  const { developerSuccess } = siteContent;

  return (
    <section className="section relative overflow-hidden bg-brand-950 text-white">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(37,99,235,0.15),transparent_60%)]" aria-hidden="true" />

      <Container className="relative">
        <div className="grid items-center gap-16 lg:grid-cols-2">
          <AnimatedSection>
            <p className="eyebrow mb-4 text-brand-400">Friend Americans · Developer Success</p>
            <h2 className="section-heading text-white">{developerSuccess.title}</h2>
            <p className="mt-5 text-lg leading-relaxed text-white/70">{developerSuccess.subtitle}</p>
            <Button href="/developer-success" variant="secondary" className="mt-8 border-white/20 bg-white text-brand-900 hover:bg-brand-50">
              Learn More
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Button>
          </AnimatedSection>

          <AnimatedSection delay={0.15}>
            <StaggerContainer className="grid gap-2 sm:grid-cols-2">
              {developerSuccess.benefits.map((benefit) => (
                <StaggerItem key={benefit}>
                  <div className="flex items-start gap-2.5 rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white/80">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-brand-400" aria-hidden="true" />
                    {benefit}
                  </div>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </AnimatedSection>
        </div>
      </Container>
    </section>
  );
}
