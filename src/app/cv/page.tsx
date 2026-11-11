import type { Metadata } from "next";

import CVPage from "@/features/cv/components/cv-page";

import { createPageMetadata } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata({
  title: "CV",
  path: "/cv",
  description:
    "Marin Heđeš — front-end and mobile developer. Experience, projects, skills, and background.",
});

export default function Page() {
  return <CVPage />;
}
