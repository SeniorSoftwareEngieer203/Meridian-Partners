import { createMetadata } from "@/lib/metadata";
import { Container } from "@/components/ui/Container";

export const metadata = createMetadata({
  title: "Privacy Policy",
  path: "/privacy",
});

export default function PrivacyPage() {
  return (
    <section className="py-24 sm:py-32">
      <Container size="narrow">
        <h1 className="text-4xl font-bold">Privacy Policy</h1>
        <p className="mt-4 text-muted-foreground">
          Last updated: July 6, 2026
        </p>
        <div className="prose prose-lg mt-12 max-w-none dark:prose-invert">
          <p>
            Meridian Partners (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;) is
            committed to protecting your privacy. This Privacy Policy explains how we
            collect, use, and safeguard your information when you visit our website or
            use our services.
          </p>
          <h2>Information We Collect</h2>
          <p>
            We may collect personal information that you voluntarily provide, including
            your name, email address, phone number, company name, and resume when you
            contact us, apply for a position, or request our services.
          </p>
          <h2>How We Use Your Information</h2>
          <p>
            We use collected information to respond to inquiries, process applications,
            match talent with client needs, improve our services, and communicate with you
            about relevant opportunities.
          </p>
          <h2>Data Security</h2>
          <p>
            We implement appropriate technical and organizational measures to protect
            your personal information against unauthorized access, alteration, or
            destruction.
          </p>
          <h2>Contact Us</h2>
          <p>
            If you have questions about this Privacy Policy, please contact us at{" "}
            <a href="mailto:hello@meridianpartners.com">hello@meridianpartners.com</a>.
          </p>
        </div>
      </Container>
    </section>
  );
}
