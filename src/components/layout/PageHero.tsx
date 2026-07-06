import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { AnimatedSection } from "@/components/ui/AnimatedSection";

interface PageHeroProps {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  image?: string;
  imageAlt?: string;
}

export function PageHero({ eyebrow, title, subtitle, image, imageAlt }: PageHeroProps) {
  return (
    <section className="relative overflow-hidden border-b border-border bg-background hero-glow">
      <div className="pointer-events-none absolute inset-0 bg-grid" aria-hidden="true" />
      <Container className="relative py-20 sm:py-28">
        <AnimatedSection>
          {image ? (
            <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
              <div>
                {eyebrow && <p className="eyebrow mb-4">{eyebrow}</p>}
                <h1 className="display-heading">{title}</h1>
                {subtitle && (
                  <p className="mt-5 text-lg leading-relaxed text-muted-foreground">{subtitle}</p>
                )}
              </div>
              <div className="relative aspect-[4/3] overflow-hidden rounded-2xl border border-border shadow-xl shadow-brand-900/5">
                <Image
                  src={image}
                  alt={imageAlt ?? title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  priority
                />
              </div>
            </div>
          ) : (
            <div className="mx-auto max-w-2xl text-center">
              {eyebrow && <p className="eyebrow mb-4">{eyebrow}</p>}
              <h1 className="display-heading">{title}</h1>
              {subtitle && (
                <p className="mt-5 text-lg leading-relaxed text-muted-foreground">{subtitle}</p>
              )}
            </div>
          )}
        </AnimatedSection>
      </Container>
    </section>
  );
}
