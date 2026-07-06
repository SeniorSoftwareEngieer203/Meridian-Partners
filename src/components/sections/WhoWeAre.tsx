import { siteContent } from "@/content/site";
import { Container } from "@/components/ui/Container";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { AnimatedSection } from "@/components/ui/AnimatedSection";

export function WhoWeAre() {
  const { whoWeAre, company } = siteContent;

  return (
    <section className="section border-t border-border bg-card">
      <Container size="narrow">
        <AnimatedSection>
          <SectionHeader eyebrow="Who We Are" title={whoWeAre.title} subtitle={whoWeAre.description} />
          <p className="text-center text-muted-foreground leading-relaxed">{whoWeAre.extended}</p>
          <blockquote className="mt-10 rounded-2xl border border-border bg-muted/50 px-8 py-6 text-center text-foreground italic">
            &ldquo;{company.philosophy}&rdquo;
          </blockquote>
        </AnimatedSection>
      </Container>
    </section>
  );
}
