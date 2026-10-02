import type { PortfolioProject, VersionSiteContent } from "@/lib/content/types";
import type { VersionKey } from "@/lib/versions";
import { pmProjects, pmSite } from "./pm";
import { feProjects, feSite } from "./fe";
import { uxProjects, uxSite } from "./ux";

/**
 * Local sample content used when Sanity has no published document for a version.
 *
 * Project *base* fields (title, cover, description, tech stack) come from
 * Sanity; the per-version case study depth comes from either a Sanity
 * `variants` entry or the objects below. Publishing a Sanity variant for a slug
 * replaces the matching local case study entirely — see `lib/content/sanity.ts`.
 */
export const FALLBACK_SITE: Record<VersionKey, VersionSiteContent> = {
  pm: pmSite,
  fe: feSite,
  ux: uxSite,
};

export const FALLBACK_PROJECTS: Record<VersionKey, PortfolioProject[]> = {
  pm: pmProjects,
  fe: feProjects,
  ux: uxProjects,
};

/** Local case study for a single version + slug, or null if there is none. */
export function fallbackProject(
  version: VersionKey,
  slug: string,
): PortfolioProject | null {
  return FALLBACK_PROJECTS[version].find((project) => project.slug === slug) ?? null;
}
