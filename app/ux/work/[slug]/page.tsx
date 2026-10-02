import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { CaseStudyHeader } from "@/app/components/version/case-study/header";
import { buildUxPanels } from "@/app/components/version/case-study/ux";
import { CaseStudyTabs } from "@/app/components/version/tabs";
import { ButtonLink, Section } from "@/app/components/version/primitives";
import { ProjectGrid } from "@/app/components/version/project-card";
import { getProjectBySlug, getProjects } from "@/lib/content/sanity";
import { VERSIONS, versionPath } from "@/lib/versions";

type Params = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  const projects = await getProjects("ux");
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { slug } = await params;
  const project = await getProjectBySlug("ux", slug);
  if (!project?.ux) return { title: "Case study" };

  return {
    title: `${project.title} — UX/UI case study`,
    description: project.ux.summary,
    alternates: { canonical: `/ux/work/${project.slug}` },
    openGraph: {
      title: `${project.title} — UX/UI design`,
      description: project.ux.summary,
      images: project.cover ? [project.cover] : undefined,
    },
  };
}

export default async function UxCaseStudyPage({ params }: Params) {
  const { slug } = await params;
  const [project, all] = await Promise.all([getProjectBySlug("ux", slug), getProjects("ux")]);

  if (!project?.ux) notFound();

  const related = all
    .filter((entry) => entry.slug !== project.slug && entry.ux)
    .slice(0, 2);

  return (
    <>
      <Section className="pb-8 pt-10">
        <CaseStudyHeader
          version="ux"
          project={project}
          meta={[
            { label: "Role", value: project.ux.role },
            { label: "Team", value: project.ux.team },
            { label: "Timeline", value: project.ux.timeline },
            { label: "Industry", value: project.ux.industry },
          ]}
        />
      </Section>

      <Section className="!pt-0">
        <CaseStudyTabs tabs={VERSIONS.ux.tabs} panels={buildUxPanels(project.ux)} />
      </Section>

      {related.length > 0 ? (
        <Section tone="soft">
          <div className="flex flex-col gap-6">
            <div className="flex flex-wrap items-end justify-between gap-3">
              <div className="flex flex-col gap-3">
                <p className="v-eyebrow">More design work</p>
                <h2 className="v-h2 text-2xl">Next case studies</h2>
              </div>
              <ButtonLink href={versionPath("ux", "/work")} variant="ghost">
                All work →
              </ButtonLink>
            </div>
            <ProjectGrid projects={related} version="ux" />
          </div>
        </Section>
      ) : null}
    </>
  );
}
