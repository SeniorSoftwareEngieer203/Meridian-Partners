"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Building2, Users, Code2, Flag, Trophy } from "lucide-react";
import { siteContent } from "@/content/site";
import { siteImages } from "@/content/images";
import { Container } from "@/components/ui/Container";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { AnimatedSection } from "@/components/ui/AnimatedSection";

const icons = [Building2, Users, Code2, Flag, Trophy];

export function HowWeWorkFlow() {
  const { howWeWork } = siteContent;

  return (
    <section className="section">
      <Container>
        <AnimatedSection>
          <SectionHeader eyebrow="How We Work" title={howWeWork.title} subtitle={howWeWork.subtitle} />
        </AnimatedSection>

        <AnimatedSection delay={0.1}>
          <div className="relative mx-auto mt-10 max-w-4xl overflow-hidden rounded-2xl border border-border bg-card shadow-lg shadow-brand-900/5">
            <Image
              src={siteImages.howWeWork}
              alt="How Meridian Partners works — Friend Americans and foreign developers delivering for U.S. companies"
              width={1200}
              height={800}
              className="h-auto w-full"
              priority={false}
            />
          </div>
          <p className="mx-auto mt-4 max-w-2xl text-center text-sm text-muted-foreground">
            Software professionals build. Friend Americans support. Together we deliver exceptional results for U.S. companies.
          </p>
        </AnimatedSection>

        <div className="mx-auto mt-12 grid max-w-4xl gap-3">
          {howWeWork.flow.map((item, i) => {
            const Icon = icons[i];
            const isBranch = "branch" in item && item.branch;
            return (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.07, duration: 0.4 }}
                className={`flex items-center gap-5 rounded-2xl border bg-card p-5 ${
                  isBranch ? "border-brand-200 bg-brand-50/50 dark:border-brand-800 dark:bg-brand-950/30" : "border-border"
                }`}
              >
                <div className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-xl text-white ${isBranch ? "bg-brand-600" : "bg-brand-900"}`}>
                  <Icon className="h-5 w-5" aria-hidden="true" />
                </div>
                <div>
                  <div className="font-semibold">{item.label}</div>
                  <div className="text-sm text-muted-foreground">{item.description}</div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
