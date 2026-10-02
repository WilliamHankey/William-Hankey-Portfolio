export type VersionKey = "pm" | "fe" | "ux";

export const VERSION_KEYS: VersionKey[] = ["pm", "fe", "ux"];

export function isVersionKey(value: string | undefined | null): value is VersionKey {
  return value === "pm" || value === "fe" || value === "ux";
}

export type NavLink = {
  /** Route-relative path, e.g. "/projects" — resolved against the version base. */
  path: string;
  label: string;
  /** Matches the pathname prefix, used to mark the active nav item. */
  match?: string;
};

export type TabDef = {
  id: string;
  label: string;
  /** Optional short description used for the accessible tab panel label. */
  hint?: string;
};

export type VersionConfig = {
  key: VersionKey;
  /** Short badge text, e.g. "PM". */
  short: string;
  /** Human label used in the version switcher. */
  label: string;
  /** The role the page is written for. */
  role: string;
  /** Long-form role line shown in the sidebar and hero. */
  roleLong: string;
  /** Base path for every route of this version. */
  base: string;
  /** Accent colour used for chips, tab underlines and metric highlights. */
  accent: string;
  /** Accent tint used for soft panels. */
  accentSoft: string;
  /** Secondary accent for gradients / dark panels. */
  accentAlt: string;
  nav: NavLink[];
  tabs: TabDef[];
  /** Project collection route segment ("projects" for pm/fe, "work" for ux). */
  collection: string;
  seo: {
    title: string;
    description: string;
  };
};

/**
 * Single source of truth for the three role-targeted versions of the portfolio.
 *
 * Every page, query and Sanity filter is derived from these entries, so adding
 * a fourth version means adding one object here rather than a new tree of
 * routes and duplicated components.
 */
export const VERSIONS: Record<VersionKey, VersionConfig> = {
  pm: {
    key: "pm",
    short: "PM",
    label: "Project Manager",
    role: "Project Manager",
    roleLong: "Project Manager / Scrum Master",
    base: "/pm",
    accent: "#1C6673",
    accentSoft: "#EDF6F5",
    accentAlt: "#32958D",
    collection: "projects",
    nav: [
      { path: "/", label: "Home" },
      { path: "/projects", label: "Projects", match: "/projects" },
      { path: "/skills", label: "Skills" },
      { path: "/certifications", label: "Certifications" },
      { path: "/testimonials", label: "Testimonials" },
      { path: "/contact", label: "Contact" },
    ],
    tabs: [
      { id: "overview", label: "Overview" },
      { id: "role", label: "My Role" },
      { id: "approach", label: "Approach" },
      { id: "outcomes", label: "Outcomes" },
      { id: "artifacts", label: "Artifacts" },
      { id: "learnings", label: "Learnings" },
    ],
    seo: {
      title: "William Hankey — Project Manager",
      description:
        "Project management portfolio: delivery ownership, stakeholder alignment, prioritisation frameworks and measurable outcomes.",
    },
  },
  fe: {
    key: "fe",
    short: "FE",
    label: "Front-End Engineer",
    role: "Front-End Engineer",
    roleLong: "Front-End Engineer / Developer",
    base: "/fe",
    accent: "#1C6673",
    accentSoft: "#EDF6F5",
    accentAlt: "#32958D",
    collection: "projects",
    nav: [
      { path: "/", label: "Home" },
      { path: "/projects", label: "Projects" },
      { path: "/about", label: "About" },
      { path: "/skills", label: "Skills" },
      { path: "/process", label: "Process" },
      { path: "/contact", label: "Contact" },
    ],
    tabs: [
      { id: "overview", label: "Overview" },
      { id: "problem", label: "Problem" },
      { id: "architecture", label: "Architecture" },
      { id: "ux-ui", label: "UX/UI" },
      { id: "performance", label: "Performance" },
      { id: "results", label: "Results" },
      { id: "code-quality", label: "Code Quality" },
    ],
    seo: {
      title: "William Hankey — Front-End Engineer",
      description:
        "Front-end engineering portfolio: production React and TypeScript, architecture decisions, accessibility and performance work.",
    },
  },
  ux: {
    key: "ux",
    short: "UX",
    label: "UX/UI Designer",
    role: "UX/UI Designer",
    roleLong: "UX/UI Designer / Product Designer",
    base: "/ux",
    accent: "#1C6673",
    accentSoft: "#EDF6F5",
    accentAlt: "#32958D",
    collection: "work",
    nav: [
      { path: "/", label: "Work" },
      { path: "/about", label: "About" },
      { path: "/process", label: "Process" },
      { path: "/testimonials", label: "Testimonials" },
      { path: "/resume", label: "Resume" },
      { path: "/contact", label: "Contact" },
    ],
    tabs: [
      { id: "overview", label: "Overview" },
      { id: "problem", label: "Problem" },
      { id: "process", label: "Process" },
      { id: "ux", label: "UX" },
      { id: "ui", label: "UI" },
      { id: "outcomes", label: "Outcomes" },
      { id: "handoff", label: "Handoff" },
    ],
    seo: {
      title: "William Hankey — UX/UI Designer",
      description:
        "UX/UI design portfolio: research, user flows, design systems, usability testing and measurable product outcomes.",
    },
  },
};

export const DEFAULT_VERSION: VersionKey = "pm";

/** Resolves a first path segment to a version key, or null when it is not one. */
export function versionFromSegment(segment: string | undefined): VersionKey | null {
  return isVersionKey(segment) ? segment : null;
}

/** Joins a version base with a version-relative path into an absolute path. */
export function versionPath(version: VersionKey, path = "/"): string {
  const base = VERSIONS[version].base;
  if (!path || path === "/") return base;
  return `${base}${path.startsWith("/") ? path : `/${path}`}`;
}

/**
 * Joins a version base with a version-relative path into an absolute path.
 * Shared components use this so they only need the version key, not the router.
 */
export const versionHref = versionPath;
