"use client";

import Image from "next/image";
import { Quote } from "lucide-react";
import { friendAmericanStories } from "@/content/friendAmericans";
import { Container } from "@/components/ui/Container";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Surface } from "@/components/ui/Surface";
import { Badge } from "@/components/ui/Badge";
import { AnimatedSection, StaggerContainer, StaggerItem } from "@/components/ui/AnimatedSection";

export function FriendAmericansStories() {
  const { title, subtitle, stories } = friendAmericanStories;

  return (
    <section className="section border-t border-border bg-card">
      <Container>
        <AnimatedSection>
          <SectionHeader eyebrow="Friend Americans" title={title} subtitle={subtitle} />
        </AnimatedSection>

        <StaggerContainer className="mt-12 grid gap-6 sm:grid-cols-2">
          {stories.map((story) => (
            <StaggerItem key={story.id}>
              <Surface padding className="flex h-full flex-col">
                <div className="flex items-start gap-4">
                  <div className="relative h-16 w-16 shrink-0 overflow-hidden rounded-2xl ring-2 ring-brand-100 dark:ring-brand-900">
                    <Image
                      src={story.image}
                      alt={story.name}
                      fill
                      className="object-cover"
                      sizes="64px"
                    />
                  </div>
                  <div className="min-w-0 flex-1">
                    <h3 className="font-semibold">{story.name}</h3>
                    <p className="text-sm text-brand-600">{story.role}</p>
                    <p className="mt-0.5 text-xs text-muted-foreground">
                      {story.location} · {story.tenure}
                    </p>
                  </div>
                  <Quote className="h-5 w-5 shrink-0 text-brand-200 dark:text-brand-800" aria-hidden="true" />
                </div>

                <blockquote className="mt-5 flex-1 text-sm leading-relaxed text-muted-foreground">
                  &ldquo;{story.quote}&rdquo;
                </blockquote>

                <Badge variant="brand" className="mt-5 w-fit">
                  {story.highlight}
                </Badge>
              </Surface>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </Container>
    </section>
  );
}
