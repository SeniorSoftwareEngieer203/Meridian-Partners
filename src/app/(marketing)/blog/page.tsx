import Link from "next/link";
import { Calendar, Clock, ArrowRight } from "lucide-react";
import { createMetadata } from "@/lib/metadata";
import { blogPosts } from "@/content/blog";
import { Container } from "@/components/ui/Container";
import { Badge } from "@/components/ui/Badge";
import { Surface } from "@/components/ui/Surface";
import { PageHero } from "@/components/layout/PageHero";
import { StaggerContainer, StaggerItem } from "@/components/ui/AnimatedSection";

export const metadata = createMetadata({
  title: "Blog",
  description: "Technology, AI, DevOps, engineering culture, and Developer Success insights.",
  path: "/blog",
});

export default function BlogPage() {
  return (
    <>
      <PageHero title="Blog" subtitle="Insights on technology, engineering culture, and building great teams." />

      <section className="section">
        <Container>
          <StaggerContainer className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {blogPosts.map((post) => (
              <StaggerItem key={post.slug}>
                <Surface padding className="flex h-full flex-col">
                  <Badge variant="brand" className="mb-4 w-fit">{post.category}</Badge>
                  <h2 className="text-lg font-bold leading-snug">
                    <Link href={`/blog/${post.slug}`} className="hover:text-brand-600">{post.title}</Link>
                  </h2>
                  <p className="mt-3 flex-1 text-sm text-muted-foreground leading-relaxed">{post.excerpt}</p>
                  <div className="mt-5 flex items-center justify-between text-xs text-muted-foreground">
                    <span className="flex items-center gap-1">
                      <Calendar className="h-3.5 w-3.5" />
                      {new Date(post.publishedAt).toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" })}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="h-3.5 w-3.5" />{post.readTime} min
                    </span>
                  </div>
                  <Link href={`/blog/${post.slug}`} className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-brand-600">
                    Read more <ArrowRight className="h-3.5 w-3.5" />
                  </Link>
                </Surface>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </Container>
      </section>
    </>
  );
}
