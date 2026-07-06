import { siteContent } from "@/content/site";
import { siteImages } from "@/content/images";
import { Container } from "@/components/ui/Container";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { SectionImage } from "@/components/ui/SectionImage";
import { AnimatedSection } from "@/components/ui/AnimatedSection";

export function WhoWeAre() {
  const { whoWeAre, company } = siteContent;

  return (
    <section className="section border-t border-border bg-card">
      <Container>
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <AnimatedSection>
            <SectionHeader
              eyebrow="Who We Are"
              title={whoWeAre.title}
              subtitle={whoWeAre.description}
              align="left"
            />
            <p className="mt-4 text-muted-foreground leading-relaxed">{whoWeAre.extended}</p>
            <blockquote className="mt-8 rounded-2xl border border-border bg-muted/50 px-6 py-5 text-foreground italic">
              &ldquo;{company.philosophy}&rdquo;
            </blockquote>
          </AnimatedSection>

          <AnimatedSection delay={0.1}>
            <SectionImage
              src={siteImages.partnership}
              alt="Friend Americans and foreign developers collaborating as one team"
              caption="Friend Americans and foreign developers — one team, one mission."
              priority
            />
          </AnimatedSection>
        </div>
      </Container>
    </section>
  );
}
