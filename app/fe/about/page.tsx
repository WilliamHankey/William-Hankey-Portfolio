import type { Metadata } from "next";

import { AboutSection, SkillsSection } from "@/app/components/version/sections";
import { getExperiences, getVersionSite } from "@/lib/content/sanity";

export const metadata: Metadata = {
  title: "About",
  description:
    "Background as a front-end engineer: production React and TypeScript, component architecture, accessibility and performance practice.",
  alternates: { canonical: "/fe/about" },
};

export default async function FeAboutPage() {
  const [content, experiences] = await Promise.all([
    getVersionSite("fe"),
    getExperiences("fe"),
  ]);

  return (
    <>
      <AboutSection content={content} experiences={experiences} heading="About" />
      <SkillsSection content={content} heading="Technical skills" />
    </>
  );
}
