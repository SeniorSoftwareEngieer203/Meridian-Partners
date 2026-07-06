import { createMetadata } from "@/lib/metadata";
import { Container } from "@/components/ui/Container";

export const metadata = createMetadata({
  title: "Terms of Service",
  path: "/terms",
});

export default function TermsPage() {
  return (
    <section className="py-24 sm:py-32">
      <Container size="narrow">
        <h1 className="text-4xl font-bold">Terms of Service</h1>
        <p className="mt-4 text-muted-foreground">
          Last updated: July 6, 2026
        </p>
        <div className="prose prose-lg mt-12 max-w-none dark:prose-invert">
          <p>
            These Terms of Service govern your use of the Meridian Partners website
            and services. By accessing our website, you agree to these terms.
          </p>
          <h2>Services</h2>
          <p>
            Meridian Partners provides software talent placement and business support
            services to U.S. companies. Specific terms for client engagements are
            outlined in individual service agreements.
          </p>
          <h2>User Responsibilities</h2>
          <p>
            You agree to provide accurate information, use our services lawfully, and
            not engage in any activity that could harm our platform, team members, or
            other users.
          </p>
          <h2>Intellectual Property</h2>
          <p>
            All content on this website, including text, graphics, logos, and software,
            is the property of Meridian Partners and protected by applicable
            intellectual property laws.
          </p>
          <h2>Contact</h2>
          <p>
            For questions about these terms, contact us at{" "}
            <a href="mailto:hello@meridianpartners.com">hello@meridianpartners.com</a>.
          </p>
        </div>
      </Container>
    </section>
  );
}
