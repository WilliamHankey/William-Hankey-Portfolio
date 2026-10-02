import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { CaseStudyHeader } from "@/app/components/version/case-study/header";
import { buildPmPanels } from "@/app/components/version/case-study/pm";
import { CaseStudyTabs } from "@/app/components/version/tabs";
import { ButtonLink, Section } from "@/app/components/version/primitives";
import { ProjectGrid } from "@/app/components/version/project-card";
import { getProjectBySlug, getProjects } from "@/lib/content/sanity";
import { VERSIONS, versionPath } from "@/lib/versions";

type Params = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  const projects = await getProjects("pm");
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { slug } = await params;
  const project = await getProjectBySlug("pm", slug);
  if (!project?.pm) return { title: "Case study" };

  return {
    title: `${project.title} — project management case study`,
    description: project.pm.summary,
    alternates: { canonical: `/pm/projects/${project.slug}` },
    openGraph: {
      title: `${project.title} — project management`,
      description: project.pm.summary,
      images: project.cover ? [project.cover] : undefined,
    },
  };
}

export default async function PmCaseStudyPage({ params }: Params) {
  const { slug } = await params;
  const [project, all] = await Promise.all([getProjectBySlug("pm", slug), getProjects("pm")]);

  if (!project?.pm) notFound();

  const related = all
    .filter((entry) => entry.slug !== project.slug && entry.pm)
    .slice(0, 2);

  return (
    <>
      <Section className="pb-8 pt-10">
        <CaseStudyHeader
          version="pm"
          project={project}
          meta={[
            { label: "Industry", value: project.pm.industry },
            { label: "Team", value: project.pm.teamSize },
            { label: "Timeline", value: project.pm.dateRange },
            { label: "Methodology", value: project.pm.methodology.join(", ") },
          ]}
        />
      </Section>

      <Section className="!pt-0">
        <CaseStudyTabs tabs={VERSIONS.pm.tabs} panels={buildPmPanels(project.pm)} />
      </Section>

      {related.length > 0 ? (
        <Section tone="soft">
          <div className="flex flex-col gap-6">
            <div className="flex flex-wrap items-end justify-between gap-3">
              <div className="flex flex-col gap-3">
                <p className="v-eyebrow">More delivery work</p>
                <h2 className="v-h2 text-2xl">Next case studies</h2>
              </div>
              <ButtonLink href={versionPath("pm", "/projects")} variant="ghost">
                All projects →
              </ButtonLink>
            </div>
            <ProjectGrid projects={related} version="pm" />
          </div>
        </Section>
      ) : null}
    </>
  );
}
