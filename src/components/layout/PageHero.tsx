import { Container } from "@/components/ui/Container";
import { AnimatedSection } from "@/components/ui/AnimatedSection";

interface PageHeroProps {
  eyebrow?: string;
  title: string;
  subtitle?: string;
}

export function PageHero({ eyebrow, title, subtitle }: PageHeroProps) {
  return (
    <section className="relative overflow-hidden border-b border-border bg-background hero-glow">
      <div className="pointer-events-none absolute inset-0 bg-grid" aria-hidden="true" />
      <Container className="relative py-20 sm:py-28">
        <AnimatedSection>
          <div className="mx-auto max-w-2xl text-center">
            {eyebrow && <p className="eyebrow mb-4">{eyebrow}</p>}
            <h1 className="display-heading">{title}</h1>
            {subtitle && (
              <p className="mt-5 text-lg leading-relaxed text-muted-foreground">{subtitle}</p>
            )}
          </div>
        </AnimatedSection>
      </Container>
    </section>
  );
}
