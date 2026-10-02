import type { Metadata } from "next";

import { SkillsSection } from "@/app/components/version/sections";
import { getVersionSite } from "@/lib/content/sanity";

export const metadata: Metadata = {
  title: "Skills",
  description:
    "Front-end technical skills: React, Next.js, TypeScript, Tailwind, testing, accessibility, Core Web Vitals and CI tooling.",
  alternates: { canonical: "/fe/skills" },
};

export default async function FeSkillsPage() {
  const content = await getVersionSite("fe");
  return <SkillsSection content={content} heading="Technical skills" />;
}
