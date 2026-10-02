import type { Metadata } from "next";

import { AboutSection, SkillsSection } from "@/app/components/version/sections";
import { getExperiences, getVersionSite } from "@/lib/content/sanity";

export const metadata: Metadata = {
  title: "About",
  description:
    "Background as a UX/UI designer: research, information architecture, design systems, usability testing and design-to-engineering handoff.",
  alternates: { canonical: "/ux/about" },
};

export default async function UxAboutPage() {
  const [content, experiences] = await Promise.all([
    getVersionSite("ux"),
    getExperiences("ux"),
  ]);

  return (
    <>
      <AboutSection content={content} experiences={experiences} heading="About" />
      <SkillsSection content={content} heading="Design skills" />
    </>
  );
}
