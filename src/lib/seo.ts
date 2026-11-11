import type { Metadata } from "next";

export const SITE_NAME = "Marin Heđeš";
export const SITE_DESCRIPTION =
  "Front-end and mobile developer building thoughtful, reliable digital experiences.";

// Reuse the existing portrait for link previews; no separate image needs to be generated.
export const SOCIAL_IMAGE = {
  url: "/images/profile/profile-picture.webp",
  alt: "Portrait of Marin Heđeš",
  width: 2316,
  height: 2514,
} as const;

const DEFAULT_SITE_URL = "https://www.marinhedes.com";

export function getSiteUrl(): URL {
  const value = process.env.SITE_URL || DEFAULT_SITE_URL;
  try {
    const url = new URL(value);
    if (url.protocol !== "https:" && url.protocol !== "http:") return new URL(DEFAULT_SITE_URL);
    return new URL(url.origin);
  } catch {
    return new URL(DEFAULT_SITE_URL);
  }
}

export function createPageMetadata({
  title,
  description = SITE_DESCRIPTION,
  path,
}: {
  title: string;
  description?: string;
  path: string;
}): Metadata {
  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: {
      type: "website",
      url: path,
      title: `${title} | ${SITE_NAME}`,
      siteName: SITE_NAME,
      description,
      locale: "en_US",
      images: [SOCIAL_IMAGE],
    },
    twitter: {
      card: "summary",
      title: `${title} | ${SITE_NAME}`,
      description,
      images: [SOCIAL_IMAGE],
    },
  };
}
