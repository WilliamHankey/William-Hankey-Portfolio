import Link from "next/link";

import type { PortfolioProject } from "@/lib/content/types";
import { VERSIONS, versionPath, type VersionKey } from "@/lib/versions";

import { ButtonLink, Chip, KeyValueList, TagList } from "../primitives";
import { Figure } from "../media";

/**
 * Shared case study masthead.
 *
 * The meta fields differ per version, so the caller passes them in already
 * flattened rather than this component branching on the version.
 */
export function CaseStudyHeader({
  version,
  project,
  meta,
  children,
}: {
  version: VersionKey;
  project: PortfolioProject;
  meta: { label: string; value: string }[];
  children?: React.ReactNode;
}) {
  const config = VERSIONS[version];
  return (
    <div className="v-case-masthead flex flex-col gap-5">
      <nav aria-label="Breadcrumb" className="text-xs v-muted">
        <Link href={versionPath(version)} className="no-underline hover:underline">
          {config.label}
        </Link>
        <span className="mx-1.5">/</span>
        <Link
          href={versionPath(version, `/${config.collection}`)}
          className="no-underline hover:underline"
        >
          {config.collection === "work" ? "Work" : "Projects"}
        </Link>
      </nav>

      <div className="grid items-center gap-6 lg:grid-cols-[1fr_1.1fr]">
        <div className="flex flex-col gap-4">
          <div className="flex flex-wrap items-center gap-1.5">
            {project.category ? <Chip variant="neutral">{project.category}</Chip> : null}
            {project.isPlaceholder ? <Chip variant="neutral">Sample data</Chip> : null}
            {children}
          </div>

          <h1 className="v-display text-3xl md:text-4xl v-balance">{project.title}</h1>
          {project.subtitle ? (
            <p className="v-lede v-balance">{project.subtitle}</p>
          ) : null}

          <div className="flex flex-wrap gap-2 pt-1">
            {project.link ? (
              <ButtonLink href={project.link} variant="primary" external>
                Visit live site
              </ButtonLink>
            ) : null}
            <ButtonLink href={versionPath(version, `/${config.collection}`)} variant="ghost">
              ← All {config.collection === "work" ? "work" : "projects"}
            </ButtonLink>
          </div>
          {project.tags.length > 0 ? <TagList items={project.tags} /> : null}
        </div>

        <div className="flex flex-col gap-3">
          <Figure
            asset={{ title: project.title, caption: project.summary, image: project.cover }}
            ratio="16 / 10"
          />
        </div>
      </div>
      <div className="v-case-meta">
        <KeyValueList items={meta} columns={3} />
      </div>
    </div>
  );
}
