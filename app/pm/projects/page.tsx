import type { Metadata } from "next";

import { ProjectGrid } from "@/app/components/version/project-card";
import { Section, SectionHeading } from "@/app/components/version/primitives";
import { getProjects } from "@/lib/content/sanity";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Project management case studies: scope and ownership, stakeholder plans, prioritisation frameworks, delivery artifacts and measurable outcomes.",
  alternates: { canonical: "/pm/projects" },
};

export default async function PmProjectsPage() {
  const projects = await getProjects("pm");

  return (
    <Section>
      <div className="flex flex-col gap-6">
        <SectionHeading
          eyebrow={`${projects.length} case studies`}
          title="Project management work"
          lede="Each case study is broken into the six things a project manager is judged on: what happened, what I owned, how I ran it, what it produced, what I handed over and what I learned."
        />
        <ProjectGrid projects={projects} version="pm" />
      </div>
    </Section>
  );
}
