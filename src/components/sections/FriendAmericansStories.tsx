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
                <div className="relative h-14 w-14 shrink-0 overflow-hidden rounded-full ring-2 ring-brand-100 dark:ring-brand-900">
                  <Image
                    src={story.image}
                    alt=""
                    fill
                    className="object-cover object-center"
                    sizes="56px"
                  />
                </div>

                <Quote className="mb-2 mt-5 h-5 w-5 text-brand-300" aria-hidden="true" />
                <blockquote className="flex-1 text-sm leading-relaxed text-muted-foreground">
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
