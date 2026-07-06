"use client";

import { motion } from "framer-motion";
import { siteContent } from "@/content/site";
import { Container } from "@/components/ui/Container";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Button } from "@/components/ui/Button";
import { AnimatedSection } from "@/components/ui/AnimatedSection";

export function HiringProcessTimeline() {
  const { hiringProcess } = siteContent;

  return (
    <section className="section border-t border-border">
      <Container>
        <AnimatedSection>
          <SectionHeader eyebrow="Process" title={hiringProcess.title} subtitle={hiringProcess.subtitle} />
        </AnimatedSection>

        <div className="relative mx-auto max-w-3xl">
          <div className="absolute left-4 top-0 hidden h-full w-px bg-border md:left-1/2 md:block" aria-hidden="true" />

          <div className="space-y-6">
            {hiringProcess.steps.map((step, i) => (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.06, duration: 0.4 }}
                className={`relative flex gap-6 md:gap-0 ${i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}`}
              >
                <div className={`flex-1 ${i % 2 === 0 ? "md:pr-12 md:text-right" : "md:pl-12"}`}>
                  <div className="rounded-2xl border border-border bg-card p-5">
                    <span className="text-xs font-semibold uppercase tracking-widest text-brand-600">Step {step.step}</span>
                    <h3 className="mt-1 font-semibold">{step.title}</h3>
                    <p className="mt-1.5 text-sm text-muted-foreground">{step.description}</p>
                  </div>
                </div>

                <div className="absolute left-4 top-5 hidden h-3 w-3 -translate-x-1/2 rounded-full border-2 border-brand-600 bg-background md:left-1/2 md:block" aria-hidden="true" />
                <div className="hidden flex-1 md:block" />
              </motion.div>
            ))}
          </div>
        </div>

        <AnimatedSection className="mt-12 text-center">
          <Button href="/contact" size="lg">Start Your Project</Button>
        </AnimatedSection>
      </Container>
    </section>
  );
}
