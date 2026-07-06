import { siteConfig } from "@/lib/metadata";
import { siteContent } from "@/content/site";

export function OrganizationJsonLd() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: siteConfig.name,
    description: siteConfig.description,
    url: siteConfig.url,
    contactPoint: {
      "@type": "ContactPoint",
      telephone: siteContent.contact.phone,
      email: siteContent.contact.email,
      contactType: "sales",
      areaServed: "US",
    },
    sameAs: [],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}
