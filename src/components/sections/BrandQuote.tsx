import { brandPhilosophy, coreValues } from "@/content/values";
import { Container } from "@/components/ui/Container";
import { AnimatedSection } from "@/components/ui/AnimatedSection";

interface BrandQuoteProps {
  variant?: "full" | "compact";
}

export function BrandQuote({ variant = "full" }: BrandQuoteProps) {
  return (
    <section className={variant === "full" ? "py-16 sm:py-20" : "py-10"}>
      <Container size="narrow">
        <AnimatedSection>
          <blockquote className="text-center">
            <p className="text-2xl font-bold leading-relaxed sm:text-3xl">
              &ldquo;{variant === "full" ? brandPhilosophy.quote : brandPhilosophy.shortQuote}&rdquo;
            </p>
          </blockquote>
        </AnimatedSection>
      </Container>
    </section>
  );
}

interface ValuesStripProps {
  title?: string;
  limit?: number;
}

export function ValuesStrip({ title, limit }: ValuesStripProps) {
  const values = limit ? coreValues.slice(0, limit) : coreValues;

  return (
    <section className="border-y border-border bg-muted/20 py-12 sm:py-16">
      <Container>
        {title && (
          <AnimatedSection>
            <h2 className="mb-8 text-center text-sm font-semibold uppercase tracking-wider text-muted-foreground">
              {title}
            </h2>
          </AnimatedSection>
        )}
        <div className="flex flex-wrap items-center justify-center gap-3">
          {values.map((value) => (
            <span
              key={value.id}
              className="rounded-full border border-border bg-card px-4 py-2 text-sm font-medium shadow-sm"
              title={value.description}
            >
              {value.title}
            </span>
          ))}
        </div>
      </Container>
    </section>
  );
}
