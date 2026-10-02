import type { Metadata } from "next";

import { SkillsSection } from "@/app/components/version/sections";
import { getVersionSite } from "@/lib/content/sanity";

export const metadata: Metadata = {
  title: "Skills",
  description:
    "Delivery and facilitation skills: scoping and estimation, Agile and Scrum, stakeholder management, roadmapping, risk management and reporting.",
  alternates: { canonical: "/pm/skills" },
};

export default async function PmSkillsPage() {
  const content = await getVersionSite("pm");
  return <SkillsSection content={content} heading="Delivery skills" />;
}
