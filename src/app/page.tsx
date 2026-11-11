import HomePage from "@/features/home/components/home-page";

import { SITE_DESCRIPTION, getSiteUrl } from "@/lib/seo";

export default function Page() {
  const siteUrl = getSiteUrl();
  const personStructuredData = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Marin Heđeš",
    url: siteUrl.toString(),
    image: new URL("/images/profile/profile-picture.webp", siteUrl).toString(),
    jobTitle: "Front-End & Mobile Developer",
    description: SITE_DESCRIPTION,
    sameAs: [
      "https://github.com/sincerelyfaust",
      "https://linkedin.com/in/marinhedes",
      "https://twitter.com/sincerelyfaust",
      "https://instagram.com/marinhedes",
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(personStructuredData).replace(/</g, "\\u003c"),
        }}
      />
      <HomePage />
    </>
  );
}
