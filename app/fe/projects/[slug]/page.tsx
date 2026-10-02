import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { CaseStudyHeader } from "@/app/components/version/case-study/header";
import { buildFePanels } from "@/app/components/version/case-study/fe";
import { CaseStudyTabs } from "@/app/components/version/tabs";
import { ButtonLink, Section } from "@/app/components/version/primitives";
import { ProjectGrid } from "@/app/components/version/project-card";
import { getProjectBySlug, getProjects } from "@/lib/content/sanity";
import { VERSIONS, versionPath } from "@/lib/versions";

type Params = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  const projects = await getProjects("fe");
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { slug } = await params;
  const project = await getProjectBySlug("fe", slug);
  if (!project?.fe) return { title: "Case study" };

  return {
    title: `${project.title} — front-end case study`,
    description: project.fe.summary,
    alternates: { canonical: `/fe/projects/${project.slug}` },
    openGraph: {
      title: `${project.title} — front-end engineering`,
      description: project.fe.summary,
      images: project.cover ? [project.cover] : undefined,
    },
  };
}

export default async function FeCaseStudyPage({ params }: Params) {
  const { slug } = await params;
  const [project, all] = await Promise.all([getProjectBySlug("fe", slug), getProjects("fe")]);

  if (!project?.fe) notFound();

  const related = all
    .filter((entry) => entry.slug !== project.slug && entry.fe)
    .slice(0, 2);

  return (
    <>
      <Section className="pb-8 pt-10">
        <CaseStudyHeader
          version="fe"
          project={project}
          meta={[
            { label: "Role", value: project.fe.role },
            { label: "Team", value: project.fe.team },
            { label: "Timeline", value: project.fe.timeline },
            { label: "Industry", value: project.fe.industry },
            { label: "Stack", value: project.fe.techStack.map((item) => item.name).join(", ") },
          ]}
        />
      </Section>

      <Section className="!pt-0">
        <CaseStudyTabs tabs={VERSIONS.fe.tabs} panels={buildFePanels(project.fe)} />
      </Section>

      {related.length > 0 ? (
        <Section tone="soft">
          <div className="flex flex-col gap-6">
            <div className="flex flex-wrap items-end justify-between gap-3">
              <div className="flex flex-col gap-3">
                <p className="v-eyebrow">More engineering work</p>
                <h2 className="v-h2 text-2xl">Next case studies</h2>
              </div>
              <ButtonLink href={versionPath("fe", "/projects")} variant="ghost">
                All projects →
              </ButtonLink>
            </div>
            <ProjectGrid projects={related} version="fe" />
          </div>
        </Section>
      ) : null}
    </>
  );
}
