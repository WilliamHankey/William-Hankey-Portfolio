import type { Metadata } from "next";

import { ApproachSection } from "@/app/components/version/sections";
import { getVersionSite } from "@/lib/content/sanity";

export const metadata: Metadata = {
  title: "Process",
  description:
    "The design process: discovery and research, flows and wireframes, visual design, usability testing, handoff and post-launch measurement.",
  alternates: { canonical: "/ux/process" },
};

export default async function UxProcessPage() {
  const content = await getVersionSite("ux");

  return (
    <ApproachSection
      content={content}
      eyebrow="Design process"
      heading="How I work through a design problem"
      lede="Five phases, each with its own output. Nothing advances until the previous one has answered its question."
    />
  );
}
