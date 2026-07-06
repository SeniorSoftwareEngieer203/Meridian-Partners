import type { Metadata } from "next";

const siteConfig = {
  name: "Meridian Partners",
  tagline: "Friend Americans & Foreign Developers Building for U.S. Companies",
  description:
    "Meridian Partners unites Friend Americans with foreign developers - information, environments, payments, and engineering talent - so U.S. companies get reliable delivery.",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://meridianpartners.com",
  ogImage: "/logo.png",
};

export function createMetadata({
  title,
  description,
  path = "",
  noIndex = false,
}: {
  title?: string;
  description?: string;
  path?: string;
  noIndex?: boolean;
}): Metadata {
  const pageTitle = title
    ? `${title} | ${siteConfig.name}`
    : `${siteConfig.name} - ${siteConfig.tagline}`;

  const pageDescription = description ?? siteConfig.description;
  const url = `${siteConfig.url}${path}`;

  return {
    title: pageTitle,
    description: pageDescription,
    metadataBase: new URL(siteConfig.url),
    alternates: { canonical: url },
    openGraph: {
      title: pageTitle,
      description: pageDescription,
      url,
      siteName: siteConfig.name,
      type: "website",
      locale: "en_US",
      images: [{ url: siteConfig.ogImage, width: 1200, height: 630 }],
    },
    twitter: {
      card: "summary_large_image",
      title: pageTitle,
      description: pageDescription,
      images: [siteConfig.ogImage],
    },
    robots: noIndex ? { index: false, follow: false } : { index: true, follow: true },
    icons: {
      icon: "/logo.png",
      apple: "/logo.png",
    },
  };
}

export { siteConfig };
