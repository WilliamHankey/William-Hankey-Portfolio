import type { Metadata } from "next";

import { ProjectGrid } from "@/app/components/version/project-card";
import { Section, SectionHeading } from "@/app/components/version/primitives";
import { getProjects } from "@/lib/content/sanity";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Front-end case studies: the problem, the architecture, the accessibility and performance work, and the measured results.",
  alternates: { canonical: "/fe/projects" },
};

export default async function FeProjectsPage() {
  const projects = await getProjects("fe");

  return (
    <Section>
      <div className="flex flex-col gap-6">
        <SectionHeading
          eyebrow={`${projects.length} case studies`}
          title="Front-end engineering work"
          lede="Each case study leads with the engineering problem and follows through to the architecture, the UX and UI decisions, the performance numbers and the tests."
        />
        <ProjectGrid projects={projects} version="fe" />
      </div>
    </Section>
  );
}
