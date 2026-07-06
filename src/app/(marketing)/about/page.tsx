import {
  Heart, Handshake, Award, Shield, TrendingUp, type LucideIcon,
} from "lucide-react";
import { createMetadata } from "@/lib/metadata";
import { siteContent } from "@/content/site";
import { siteImages } from "@/content/images";
import { coreValues } from "@/content/values";
import { Container } from "@/components/ui/Container";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { SectionImage } from "@/components/ui/SectionImage";
import { Surface } from "@/components/ui/Surface";
import { PageHero } from "@/components/layout/PageHero";
import { FriendAmericanSupportSection } from "@/components/sections/FriendAmericanSupportSection";
import { FriendAmericansStories } from "@/components/sections/FriendAmericansStories";
import { AnimatedSection, StaggerContainer, StaggerItem } from "@/components/ui/AnimatedSection";
import { ContactCTA } from "@/components/sections/ContactCTA";

export const metadata = createMetadata({
  title: "About Us",
  description: siteContent.company.mission,
  path: "/about",
});

const valueIcons: Record<string, LucideIcon> = {
  "people-first": Heart,
  partnership: Handshake,
  excellence: Award,
  integrity: Shield,
  "continuous-growth": TrendingUp,
};

export default function AboutPage() {
  const { company } = siteContent;

  return (
    <>
      <PageHero
        eyebrow="About Meridian Partners"
        title={`Friend Americans & Foreign Developers`}
        subtitle={company.mission}
        image={siteImages.aboutTeam}
        imageAlt="Diverse team of Friend Americans and foreign developers working together"
      />

      <section className="section">
        <Container>
          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
            <AnimatedSection>
              <SectionHeader
                eyebrow="Our Story"
                title="Two Strengths. One Team."
                align="left"
              />
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>{company.vision}</p>
                <blockquote className="border-l-2 border-brand-600 pl-5 italic text-foreground">
                  &ldquo;{company.philosophy}&rdquo;
                </blockquote>
                <p>
                  Meridian Partners is not a traditional staffing agency. We unite Friend Americans
                  — U.S. citizens who provide information, environments, and payments — with
                  talented foreign developers who build software for American companies.
                </p>
                <p>
                  Any U.S. citizen can become a Friend American. You don&apos;t need a technical
                  background. We ask for commitment, patience, and a strong work ethic — and we
                  provide the training to help you succeed.
                </p>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.1}>
              <SectionImage
                src={siteImages.foreignDeveloper}
                alt="Foreign developer building software with support from a Friend American"
                caption="Foreign developers focus on code. Friend Americans handle the rest."
              />
            </AnimatedSection>
          </div>
        </Container>
      </section>

      <FriendAmericanSupportSection />
      <FriendAmericansStories />

      <section className="section border-t border-border">
        <Container>
          <AnimatedSection>
            <SectionHeader eyebrow="Values" title="What We Stand For" />
          </AnimatedSection>
          <StaggerContainer className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {coreValues.map((value) => {
              const Icon = valueIcons[value.id] ?? Heart;
              return (
                <StaggerItem key={value.id}>
                  <Surface padding className="h-full">
                    <Icon className="mb-3 h-5 w-5 text-brand-600" aria-hidden="true" />
                    <h3 className="font-semibold">{value.title}</h3>
                    <p className="mt-1.5 text-sm text-muted-foreground">{value.description}</p>
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
