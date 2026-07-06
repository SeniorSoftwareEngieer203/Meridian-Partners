import Image from "next/image";
import { Check, Building2, Code2, Flag, ArrowRight } from "lucide-react";
import { createMetadata } from "@/lib/metadata";
import { siteContent } from "@/content/site";
import { siteImages } from "@/content/images";
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
    "Friend Americans — U.S. citizens on Meridian Partners' Developer Success Team — support foreign developers with information, environments, payments, and coordination.",
  path: "/developer-success",
});

const teamNodes = [
  {
    icon: Building2,
    label: "U.S. Client",
    desc: "Sets goals & expectations",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=500&h=300&fit=crop",
  },
  {
    icon: Flag,
    label: "Friend American",
    desc: "Info, environment & payments",
    image: siteImages.careersFriendAmerican,
  },
  {
    icon: Code2,
    label: "Foreign Developer",
    desc: "Focused on building",
    image: siteImages.foreignDeveloper,
  },
];

export default function DeveloperSuccessPage() {
  const { developerSuccess, company } = siteContent;

  return (
    <>
      <PageHero
        eyebrow="Friend Americans · Developer Success"
        title={developerSuccess.title}
        subtitle={developerSuccess.subtitle}
        image={siteImages.globalCollaboration}
        imageAlt="Friend Americans supporting foreign developers in a global team"
      />

      <section className="section">
        <Container>
          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
            <AnimatedSection>
              <blockquote className="rounded-2xl border border-border bg-muted/50 px-8 py-6 italic text-foreground">
                &ldquo;{company.philosophy}&rdquo;
              </blockquote>
            </AnimatedSection>
            <AnimatedSection delay={0.1}>
              <div className="overflow-hidden rounded-2xl border border-border bg-white shadow-lg shadow-brand-900/5">
                <Image
                  src={siteImages.howWeWork}
                  alt="Meridian Partners model — software professionals and Friend Americans working together"
                  width={1200}
                  height={800}
                  className="h-auto w-full"
                />
              </div>
              <p className="mt-3 text-center text-sm text-muted-foreground">
                Our proven model: build + support = exceptional delivery.
              </p>
            </AnimatedSection>
          </div>
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
              subtitle="Friend Americans handle everything that isn't writing code — so foreign developers stay focused on building."
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
          <div className="mx-auto grid max-w-4xl gap-4 md:grid-cols-3">
            {teamNodes.map((node) => (
              <Surface key={node.label} padding className="overflow-hidden p-0 text-center">
                <div className="relative aspect-[16/10] w-full overflow-hidden bg-muted">
                  <Image
                    src={node.image}
                    alt={node.label}
                    fill
                    className="object-cover object-center"
                    sizes="300px"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                  <div className="absolute bottom-3 left-0 right-0 flex justify-center">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-brand-900/90 text-white backdrop-blur-sm">
                      <node.icon className="h-5 w-5" aria-hidden="true" />
                    </div>
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="font-semibold">{node.label}</h3>
                  <p className="mt-1 text-sm text-muted-foreground">{node.desc}</p>
                </div>
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
