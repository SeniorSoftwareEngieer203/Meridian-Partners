import { ArrowRight } from "lucide-react";
import { siteContent } from "@/content/site";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { AnimatedSection } from "@/components/ui/AnimatedSection";

export function ContactCTA() {
  const { cta } = siteContent;

  return (
    <section className="section border-t border-border bg-muted/40">
      <Container size="narrow">
        <AnimatedSection>
          <div className="rounded-3xl border border-border bg-card px-8 py-14 text-center shadow-sm sm:px-16">
            <h2 className="section-heading">{cta.title}</h2>
            <p className="mx-auto mt-4 max-w-md text-muted-foreground">{cta.subtitle}</p>
            <Button href={cta.href} size="lg" className="mt-8">
              {cta.button}
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Button>
          </div>
        </AnimatedSection>
      </Container>
    </section>
  );
}
