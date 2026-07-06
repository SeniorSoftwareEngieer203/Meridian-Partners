import { Mail, Phone, MapPin } from "lucide-react";
import { createMetadata } from "@/lib/metadata";
import { siteContent } from "@/content/site";
import { Container } from "@/components/ui/Container";
import { Surface } from "@/components/ui/Surface";
import { PageHero } from "@/components/layout/PageHero";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { ContactForm } from "@/components/forms/ContactForm";

export const metadata = createMetadata({
  title: "Contact",
  description: siteContent.contact.subtitle,
  path: "/contact",
});

export default function ContactPage() {
  const { contact } = siteContent;

  return (
    <>
      <PageHero title={contact.title} subtitle={contact.subtitle} />

      <section className="section">
        <Container>
          <div className="grid gap-10 lg:grid-cols-5">
            <AnimatedSection className="space-y-4 lg:col-span-2">
              {[
                { icon: Mail, label: "Email", value: contact.email, href: `mailto:${contact.email}` },
                { icon: Phone, label: "Phone", value: contact.phone, href: `tel:${contact.phone.replace(/\s/g, "")}` },
                { icon: MapPin, label: "Location", value: contact.address },
              ].map((item) => (
                <Surface key={item.label} className="flex items-center gap-4 p-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-brand-100 text-brand-700 dark:bg-brand-900/40 dark:text-brand-300">
                    <item.icon className="h-4 w-4" aria-hidden="true" />
                  </div>
                  <div>
                    <div className="text-xs font-medium text-muted-foreground">{item.label}</div>
                    {item.href ? (
                      <a href={item.href} className="text-sm font-medium hover:text-brand-600">{item.value}</a>
                    ) : (
                      <div className="text-sm font-medium">{item.value}</div>
                    )}
                  </div>
                </Surface>
              ))}
              <div className="rounded-2xl border border-dashed border-border bg-muted/30 p-8 text-center text-sm text-muted-foreground">
                Map - Office location
              </div>
            </AnimatedSection>

            <AnimatedSection className="lg:col-span-3" delay={0.1}>
              <Surface padding className="p-8">
                <h2 className="text-lg font-semibold">Send a Message</h2>
                <div className="mt-6"><ContactForm /></div>
              </Surface>
            </AnimatedSection>
          </div>

          <AnimatedSection className="mt-20">
            <h2 className="section-heading mb-8">FAQ</h2>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {contact.faq.map((item) => (
                <Surface key={item.q} padding>
                  <h3 className="font-semibold">{item.q}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{item.a}</p>
                </Surface>
              ))}
            </div>
          </AnimatedSection>
        </Container>
      </section>
    </>
  );
}
