import Link from "next/link";

import type { PortfolioProject } from "@/lib/content/types";
import { VERSIONS, versionPath, type VersionKey } from "@/lib/versions";

import { Card, Chip } from "./primitives";

/**
 * Card used on every version's collection page and home page.
 *
 * The same component serves all three versions; the differences live in the
 * case study content it links to, not in the card.
 */
export function ProjectCard({
  project,
  version,
  index,
}: {
  project: PortfolioProject;
  version: VersionKey;
  index: number;
}) {
  const config = VERSIONS[version];
  const href = versionPath(version, `/${config.collection}/${project.slug}`);

  // Narrowed per version rather than unioned: the three case study shapes have
  // different fields, and only the version being rendered should be read.
  const pm = project.pm;
  const fe = project.fe;
  const ux = project.ux;

  const summary = (version === "pm" ? pm?.summary : version === "fe" ? fe?.summary : ux?.summary) || project.summary;
  // Only the UX case study carries a one-line outcome; the others use subtitle.
  const subtitle = (version === "ux" ? ux?.outcome : undefined) || project.subtitle;

  return (
    <Card as="article" className="v-project-card flex h-full flex-col overflow-hidden">
      <Link href={href} aria-label={`View ${project.title} case study`} className="v-project-image"
        style={{
          aspectRatio: "16 / 9",
          background: project.cover
            ? "var(--shell-page-alt)"
            : `linear-gradient(135deg, ${config.accentSoft}, var(--shell-page-alt))`,
        }}
      >
        {project.cover ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img src={project.cover} alt="" className="h-full w-full object-cover" loading="lazy" />
        ) : (
          <span
            className="v-muted px-4 text-center text-xs font-medium uppercase tracking-widest"
            aria-hidden="true"
          >
            {String(index + 1).padStart(2, "0")}
          </span>
        )}
      </Link>

      <div className="flex flex-1 flex-col gap-2.5 p-4">
        <div className="flex flex-wrap items-center gap-1.5">
          {project.category ? <Chip variant="neutral">{project.category}</Chip> : null}
          {project.isPlaceholder ? <Chip variant="neutral">Sample data</Chip> : null}
          {version === "pm" && pm?.status ? (
            <Chip tone={statusTone(pm.statusTone)}>{pm.status}</Chip>
          ) : null}
          {version === "fe" && fe?.role ? <Chip>{fe.role}</Chip> : null}
          {version === "ux" && ux?.category ? <Chip>{ux.category}</Chip> : null}
        </div>

        <h3 className="v-h2 text-base v-balance">
          <Link href={href} className="no-underline" style={{ color: "inherit" }}>
            {project.title}
          </Link>
        </h3>

        {subtitle ? <p className="v-body text-sm font-medium">{subtitle}</p> : null}
        {summary ? (
          <p className="v-body line-clamp-3 text-sm">{summary}</p>
        ) : null}

        {project.tags.length > 0 ? (
          <ul className="mt-auto flex flex-wrap gap-1 pt-2" role="list">
            {project.tags.slice(0, 4).map((tag) => (
              <li key={tag}>
                <Chip variant="neutral">{tag}</Chip>
              </li>
            ))}
          </ul>
        ) : null}

        <Link
          href={href}
          className="v-link mt-1 text-sm no-underline"
          style={{ textDecoration: "underline" }}
        >
          Read the case study →
        </Link>
      </div>
    </Card>
  );
}

function statusTone(tone?: string) {
  switch (tone) {
    case "warning":
      return "var(--shell-amber)";
    case "danger":
      return "var(--shell-red)";
    case "neutral":
      return "#6b7280";
    default:
      return "var(--shell-green)";
  }
}

export function ProjectGrid({ projects, version }: { projects: PortfolioProject[]; version: VersionKey }) {
  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
      {projects.map((project, index) => (
        <ProjectCard key={project.slug} project={project} version={version} index={index} />
      ))}
    </div>
  );
}
