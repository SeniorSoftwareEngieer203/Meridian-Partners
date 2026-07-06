import {
  Heart, Handshake, Award, Shield, TrendingUp, type LucideIcon,
} from "lucide-react";
import { createMetadata } from "@/lib/metadata";
import { siteContent } from "@/content/site";
import { coreValues } from "@/content/values";
import { Container } from "@/components/ui/Container";
import { SectionHeader } from "@/components/ui/SectionHeader";
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
      <PageHero title={`About ${company.name}`} subtitle={company.mission} />

      <section className="section">
        <Container size="narrow">
          <AnimatedSection>
            <SectionHeader
              eyebrow="Our Story"
              title="Friend Americans & Foreign Developers, One Team"
              align="left"
            />
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>{company.vision}</p>
              <blockquote className="border-l-2 border-brand-600 pl-5 italic text-foreground">
                &ldquo;{company.philosophy}&rdquo;
              </blockquote>
              <p>
                Meridian Partners is not a traditional staffing agency. We unite Friend Americans
                - U.S. citizens who provide information, environments, and payments - with
                talented foreign developers who build software for American companies.
              </p>
              <p>
                Any U.S. citizen can become a Friend American. You don&apos;t need a technical
                background. We ask for commitment, patience, and a strong work ethic - and we
                provide the training to help you succeed.
              </p>
            </div>
          </AnimatedSection>
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
