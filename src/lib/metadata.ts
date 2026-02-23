import type { Metadata } from "next";

const SITE_URL = "https://arrowheadresearch.org";
const SITE_NAME = "Arrowhead Research";
const DEFAULT_DESCRIPTION =
  "Empowering military servicemembers to transform technical curiosity into real-world capability.";
const DEFAULT_OG_IMAGE = `${SITE_URL}/images/logo-large.jpg`;

interface PageMetadataOptions {
  title: string;
  description?: string;
  path?: string;
  ogImage?: string;
}

/**
 * Generate consistent metadata for a page including Open Graph and canonical URL.
 */
export function createPageMetadata({
  title,
  description = DEFAULT_DESCRIPTION,
  path = "",
  ogImage = DEFAULT_OG_IMAGE,
}: PageMetadataOptions): Metadata {
  const url = `${SITE_URL}${path}`;

  return {
    title: `${title} | ${SITE_NAME}`,
    description,
    alternates: {
      canonical: url,
    },
    openGraph: {
      title: `${title} | ${SITE_NAME}`,
      description,
      url,
      siteName: SITE_NAME,
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: SITE_NAME,
        },
      ],
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: `${title} | ${SITE_NAME}`,
      description,
      images: [ogImage],
    },
  };
}

/**
 * JSON-LD Organization structured data for the home page.
 */
export function getOrganizationJsonLd(): Record<string, unknown> {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: SITE_NAME,
    url: SITE_URL,
    logo: `${SITE_URL}/images/logo-large.jpg`,
    description: DEFAULT_DESCRIPTION,
    email: "info@arrowheadresearch.org",
    sameAs: ["https://donorbox.org/arrowhead-research-inc"],
  };
}
