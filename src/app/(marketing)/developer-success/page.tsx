import { Check, Building2, Code2, Flag, ArrowRight } from "lucide-react";
import { createMetadata } from "@/lib/metadata";
import { siteContent } from "@/content/site";
import { Container } from "@/components/ui/Container";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Surface } from "@/components/ui/Surface";
import { Button } from "@/components/ui/Button";
import { PageHero } from "@/components/layout/PageHero";
import { FriendAmericanSupportSection } from "@/components/sections/FriendAmericanSupportSection";
import { FriendAmericansStories } from "@/components/sections/FriendAmericansStories";
import { HowWeWorkFlow } from "@/components/sections/HowWeWorkFlow";
import { AnimatedSection, StaggerContainer, StaggerItem } from "@/components/ui/AnimatedSection";
import { ContactCTA } from "@/components/sections/ContactCTA";

export const metadata = createMetadata({
  title: "Developer Success",
  description:
    "Friend Americans - U.S. citizens on Meridian Partners' Developer Success Team - support foreign developers with information, environments, payments, and coordination.",
  path: "/developer-success",
});

export default function DeveloperSuccessPage() {
  const { developerSuccess, company } = siteContent;

  return (
    <>
      <PageHero
        eyebrow="Friend Americans · Developer Success"
        title={developerSuccess.title}
        subtitle={developerSuccess.subtitle}
      />

      <section className="section">
        <Container size="narrow">
          <AnimatedSection>
            <blockquote className="rounded-2xl border border-border bg-muted/50 px-8 py-6 text-center italic text-foreground">
              &ldquo;{company.philosophy}&rdquo;
            </blockquote>
          </AnimatedSection>
        </Container>
      </section>

      <FriendAmericanSupportSection />
      <FriendAmericansStories />

      <section className="section border-t border-border">
        <Container>
          <AnimatedSection>
            <SectionHeader
              eyebrow="What Friend Americans Do"
              title="Not Customer Support. Not Technical Support."
              subtitle="Friend Americans handle everything that isn't writing code - so foreign developers stay focused on building."
            />
          </AnimatedSection>
          <StaggerContainer className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {developerSuccess.responsibilities.map((item) => (
              <StaggerItem key={item}>
                <Surface className="flex items-start gap-3 p-4">
                  <Check className="mt-0.5 h-4 w-4 shrink-0 text-brand-600" aria-hidden="true" />
                  <span className="text-sm">{item}</span>
                </Surface>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </Container>
      </section>

      <section className="section border-t border-border bg-muted/40">
        <Container>
          <AnimatedSection>
            <SectionHeader eyebrow="The Model" title="How Teams Connect" />
          </AnimatedSection>
          <div className="mx-auto grid max-w-3xl gap-4 md:grid-cols-3">
            {[
              { icon: Building2, label: "U.S. Client", desc: "Sets goals & expectations" },
              { icon: Flag, label: "Friend American", desc: "Info, environment & payments" },
              { icon: Code2, label: "Foreign Developer", desc: "Focused on building" },
            ].map((node) => (
              <Surface key={node.label} padding className="text-center">
                <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-xl bg-brand-900 text-white">
                  <node.icon className="h-6 w-6" aria-hidden="true" />
                </div>
                <h3 className="font-semibold">{node.label}</h3>
                <p className="mt-1 text-sm text-muted-foreground">{node.desc}</p>
              </Surface>
            ))}
          </div>
        </Container>
      </section>

      <HowWeWorkFlow />

      <section className="section border-t border-border">
        <Container size="narrow" className="text-center">
          <h2 className="section-heading">Become a Friend American</h2>
          <p className="mt-4 text-muted-foreground">
            Any U.S. citizen is welcome. No technical background required.
            We ask for commitment, patience, and a strong work ethic. Training provided.
          </p>
          <Button href="/careers#developer-success" className="mt-8">
            View Open Roles <ArrowRight className="h-4 w-4" />
          </Button>
        </Container>
      </section>

      <ContactCTA />
    </>
  );
}
