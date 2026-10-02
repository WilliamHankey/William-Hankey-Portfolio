import type { Metadata } from "next";

import { ProjectGrid } from "@/app/components/version/project-card";
import { Section, SectionHeading } from "@/app/components/version/primitives";
import { getProjects } from "@/lib/content/sanity";

export const metadata: Metadata = {
  title: "Work",
  description:
    "UX/UI case studies: research and problem framing, user flows, design systems, usability testing, outcomes and handoff.",
  alternates: { canonical: "/ux/work" },
};

export default async function UxWorkPage() {
  const projects = await getProjects("ux");

  return (
    <Section>
      <div className="flex flex-col gap-6">
        <SectionHeading
          eyebrow={`${projects.length} case studies`}
          title="Selected design work"
          lede="Each case study is organised by design phase, from the research that framed the problem to the annotated screens that went to engineering."
        />
        <ProjectGrid projects={projects} version="ux" />
      </div>
    </Section>
  );
}
