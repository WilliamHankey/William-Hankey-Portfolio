import { client } from "@/lib/sanity";
import { normalizeCaseStudy } from "./normalize";
import { FALLBACK_PROJECTS, FALLBACK_SITE, fallbackProject } from "./fallbacks";
import type {
  FeCaseStudy,
  Metric,
  PmCaseStudy,
  PortfolioProject,
  ProcessStepContent,
  Quote,
  TreeNode,
  UxCaseStudy,
  VersionContact,
  VersionMetric,
  VersionSiteContent,
} from "./types";
import { VERSIONS, type VersionKey } from "@/lib/versions";

/* ==========================================================================
   GROQ projections
   --------------------------------------------------------------------------
   Nested images need explicit `asset->{url}` resolution, and the variant
   sub-trees are large, so each version's projection is spelled out. Fragments
   are interpolated below to keep the definitions readable.
   ========================================================================== */

const METRIC = `{
  value,
  label,
  note,
  source,
  tone
}`;

const ASSET = `{
  title,
  caption,
  href,
  "image": image.asset->url
}`;

const STEP = `{
  title,
  summary,
  duration,
  output,
  activities,
  methods
}`;

/** A TableBlock is stored as caption + columns + rows[{ cells }]. */
const TABLE = (path: string) => `${path} {
  caption,
  columns,
  "rows": rows[]{ cells }
}`;

const TITLED_POINTS = `{
  title,
  description,
  points
}`;

const PERSON = `{ name, role }`;

const PM_PROJECTION = `{
  industry,
  status,
  statusTone,
  dateRange,
  roles,
  methodology,
  teamSize,
  summary,
  businessGoals,
  "results": results[] ${METRIC},
  highlights,
  "deliverables": deliverables[] ${ASSET},
  roleSummary,
  roleLevel,
  duration,
  responsibilities,
  "ownershipAreas": ownershipAreas[] ${TITLED_POINTS},
  "decisions": decisions[] ${TITLED_POINTS},
  "collaborators": collaborators[] ${PERSON},
  "stakeholders": stakeholders[] ${PERSON},
  "ceremonies": ceremonies[]{ title, cadence, description },
  tools,
  approachOverview,
  principles,
  "approachSteps": approachSteps[] ${STEP},
  "stakeholderPlan": ${TABLE("stakeholderPlan")},
  prioritization {
    framework,
    description,
    "table": table {
      caption,
      columns,
      "rows": rows[]{ cells }
    }
  },
  risks,
  "raid": ${TABLE("raid")},
  "outcomeGroups": outcomeGroups[] ${TITLED_POINTS},
  beforeAfter[]{ label, before, after, unit },
  "milestones": milestones[]{ date, title, outcome },
  measurement,
  achievements,
  "artifacts": artifacts[]{ title, category, description, href, "image": image.asset->url },
  "learnings": learnings[] ${TITLED_POINTS},
  workedWell,
  improveNextTime,
  "retrospectives": ${TABLE("retrospectives")},
  futurePractices
}`;

const FE_PROJECTION = `{
  role,
  team,
  timeline,
  industry,
  summary,
  "techStack": techStack[]{ name, icon },
  liveUrl,
  repoUrl,
  "keyResults": keyResults[] ${METRIC},
  contributions,
  technicalHighlights,
  "process": process[] ${STEP},
  "screenshots": screenshots[] ${ASSET},
  productContext,
  businessChallenge,
  stakeholders,
  userPainPoints,
  technicalConstraints,
  frontendChallenges,
  goals,
  successCriteria,
  responsibilities,
  architectureOverview,
  "architectureGoals": architectureGoals[] ${TITLED_POINTS},
  "highLevel": highLevel {
    label,
    "children": children[] { label, "children": children[] { label, "children": children[] { label } } }
  },
  "fileTree": fileTree {
    label,
    "children": children[] { label, "children": children[] { label, "children": children[] { label } } }
  },
  "componentTree": componentTree {
    label,
    "children": children[] { label, "children": children[] { label, "children": children[] { label } } }
  },
  stateManagement,
  "apiFlow": apiFlow[] ${STEP},
  "uiPatterns": uiPatterns[] ${TITLED_POINTS},
  "responsive": responsive[] ${TITLED_POINTS},
  "decisions": decisions[]{ title, rationale, tradeoffs },
  deployment,
  designCollaboration,
  "figmaToProduction": figmaToProduction[] {
    title,
    note,
    "before": before ${ASSET},
    "after": after ${ASSET}
  },
  "designSystem": designSystem[] ${ASSET},
  "responsiveScreens": responsiveScreens[] ${ASSET},
  "interactions": interactions[]{ title, description },
  accessibility,
  "perfMetrics": perfMetrics[] ${METRIC},
  "coreWebVitals": coreWebVitals[] ${METRIC},
  beforeAfter[]{ label, before, after, unit, lowerIsBetter },
  "optimizations": optimizations[] ${TITLED_POINTS},
  bundle {
    before,
    after,
    unit,
    "segments": segments[]{ label, size }
  },
  impactSummary,
  "resultMetrics": resultMetrics[] ${METRIC},
  businessImpact,
  userImpact,
  technicalImpact,
  "launchOutcomes": launchOutcomes[] ${METRIC},
  "principles": principles[] ${TITLED_POINTS},
  typescriptSample {
    filename,
    language,
    code
  },
  typescriptPoints,
  componentPoints,
  testing {
    unit,
    integration,
    component,
    accessibility,
    coverage,
    coverageNote,
    points
  },
  linting,
  "ci": ci[]{ title, command, description },
  reviews,
  docs
}`;

const UX_PROJECTION = `{
  category,
  role,
  team,
  timeline,
  industry,
  summary,
  outcome,
  tags,
  responsibilities,
  challenge,
  userGoals,
  businessGoals,
  "keyResults": keyResults[] ${METRIC},
  "outputs": outputs[] ${ASSET},
  problemOverview,
  coreProblem,
  businessContext,
  contextGoals,
  "userPainPoints": userPainPoints[]{ quote, person, context },
  "operationalPainPoints": operationalPainPoints[]{ title, description },
  "constraints": constraints[]{ title, description },
  whyItMattered,
  "impactCards": impactCards[] ${TITLED_POINTS},
  researchInputs,
  "personas": personas[]{ name, role, description, needs },
  problemStatement,
  processOverview,
  "processPrinciples": processPrinciples[] ${TITLED_POINTS},
  "processSteps": processSteps[] ${STEP},
  "phaseTimeline": phaseTimeline[]{ week, focus, outcome },
  collaboration,
  decisionInputs,
  uxOverview,
  "uxPrinciples": uxPrinciples[] ${TITLED_POINTS},
  "flow": flow[] ${STEP},
  "informationArchitecture": informationArchitecture {
    label,
    "children": children[] { label, "children": children[] { label, "children": children[] { label } } }
  },
  "journey": journey[]{ stage, goal, emotion, quote },
  "wireframes": wireframes[] ${ASSET},
  usability {
    participants,
    rounds,
    "points": points[]{ text, status }
  },
  "decisions": decisions[]{ title, before, after },
  uxAccessibility,
  uiOverview,
  "designGoals": designGoals[] ${TITLED_POINTS},
  "uiPrinciples": uiPrinciples[] ${TITLED_POINTS},
  "moodboard": moodboard[] ${ASSET},
  brandPhrase,
  "palette": palette[]{ name, value, usage },
  "typography": typography[]{ name, value, usage },
  "spacing": spacing[]{ name, value },
  icons,
  "components": components[]{ name, variants, states, note },
  "states": states[]{ name, description, tone },
  "uiBeforeAfter": uiBeforeAfter[] {
    title,
    note,
    "before": before ${ASSET},
    "after": after ${ASSET}
  },
  "finalScreens": finalScreens[] ${ASSET},
  "outcomeMetrics": outcomeMetrics[] ${METRIC},
  "outcomeGroups": outcomeGroups[] ${TITLED_POINTS},
  "outcomeCompare": outcomeCompare {
    title,
    "before": before ${ASSET},
    "after": after ${ASSET}
  },
  testimonial { quote, name, role },
  additionalWins,
  shipped,
  handoffNarrative,
  handoffGoals,
  "redlines": redlines[] ${ASSET},
  "annotatedScreens": annotatedScreens[] ${ASSET},
  "componentDocs": componentDocs[] ${ASSET},
  collaborationNotes,
  implementationSupport,
  "releaseStats": releaseStats[] ${METRIC},
  postLaunch
}`;

const projectsQuery = `*[_type == "project"
  && (!defined(versions) || $version in versions)] | order(order asc, _createdAt asc) {
  title,
  "slug": slug.current,
  subtitle,
  category,
  description,
  themeColor,
  link,
  "cover": image.asset->url,
  "techStack": techStack[]{ name, icon },
  "showcase": showcase[]{ title, description, "image": image.asset->url },
  "variant": variants[version == $version][0] {
    version,
    "pm": pm ${PM_PROJECTION},
    "fe": fe ${FE_PROJECTION},
    "ux": ux ${UX_PROJECTION}
  }
}`;

const projectBySlugQuery = `*[_type == "project" && slug.current == $slug
  && (!defined(versions) || $version in versions)][0] {
  title,
  "slug": slug.current,
  subtitle,
  category,
  description,
  themeColor,
  link,
  "cover": image.asset->url,
  "techStack": techStack[]{ name, icon },
  "showcase": showcase[]{ title, description, "image": image.asset->url },
  "variant": variants[version == $version][0] {
    version,
    "pm": pm ${PM_PROJECTION},
    "fe": fe ${FE_PROJECTION},
    "ux": ux ${UX_PROJECTION}
  }
}`;

const VERSION_SITE_FIELDS = `{
  roleLong,
  heroEyebrow,
  heroHeadline,
  heroIntro,
  heroCtaPrimary,
  heroCtaSecondary,
  "heroImage": heroImage.asset->url,
  "heroMetrics": heroMetrics[]{ value, label, note },
  positioningNote,
  featuredProjects,
  introBlocks[]{ title, description },
  skills,
  "process": process[]{ title, summary, output, activities },
  about,
  ctaHeading,
  ctaBody,
  seo { title, description }
}`;

/** A document with no `version` predates the versioned schema and is shared. */
const siteSettingsQuery = `*[_type == "siteSettings"
  && (!defined(version) || version == $version || version == "all")] {
  "version": version,
  name,
  role,
  email,
  location,
  cvUrl,
  "socials": socials[]{ platform, url },
  "variant": variant ${VERSION_SITE_FIELDS}
}`;

const testimonialsQuery = `*[_type == "testimonial"
  && (!defined(versions) || $version in versions)] | order(order asc, _createdAt asc) {
  name,
  role,
  quote,
  "photo": photo.asset->url
}`;

const certificationsQuery = `*[_type == "certification"
  && (!defined(versions) || $version in versions)] | order(year desc) {
  name,
  issuer,
  year,
  url
}`;

const experiencesQuery = `*[_type == "experience"
  && (!defined(versions) || $version in versions)] | order(order asc, _createdAt asc) {
  role,
  company,
  period,
  bullets
}`;

/* ==========================================================================
   Sanity result shapes
   ========================================================================== */

type SanityProject = {
  title?: string;
  slug?: string;
  subtitle?: string;
  category?: string;
  description?: string;
  themeColor?: string;
  link?: string;
  cover?: string;
  techStack?: { name: string; icon?: string }[];
  showcase?: { title: string; description?: string; image?: string }[];
  variant?: { version?: string; pm?: unknown; fe?: unknown; ux?: unknown } | null;
};

type SanitySiteSettings = {
  version?: string;
  name?: string;
  role?: string;
  email?: string;
  location?: string;
  cvUrl?: string;
  socials?: { platform: string; url: string }[];
  variant?: Partial<VersionSiteContent> & { heroMetrics?: VersionMetric[] } | null;
};

/* ==========================================================================
   Transform helpers
   ========================================================================== */

function str(value: unknown, fallback = ""): string {
  return typeof value === "string" && value.trim().length > 0 ? value : fallback;
}

function strArray(value: unknown, fallback: string[] = []): string[] {
  return Array.isArray(value) ? value.filter((item): item is string => typeof item === "string") : fallback;
}

function titleCase(value: string): string {
  return value
    .replace(/[_-]+/g, " ")
    .replace(/\b\w/g, (character) => character.toUpperCase())
    .trim();
}

function metricArray(value: unknown, fallback: Metric[] = []): Metric[] {
  if (!Array.isArray(value)) return fallback;
  const items = value.filter(
    (item): item is Metric => Boolean(item) && typeof (item as Metric).value === "string",
  );
  return items.length > 0 ? items : fallback;
}

/* ==========================================================================
   Public API
   ========================================================================== */

/**
 * Hydrates a published variant with safe empty UI shapes. Missing CMS case
 * studies are never replaced by sample claims when Sanity is configured.
 * Local samples are available only in explicitly unconfigured demo mode.
 */
function hydrate(
  version: VersionKey,
  doc: SanityProject,
): PortfolioProject {
  const local = fallbackProject(version, doc.slug ?? "");
  const variant = doc.variant ?? null;
  const source = (variant?.[version] ?? (!client ? local?.[version] : null) ?? null) as
    | PmCaseStudy
    | FeCaseStudy
    | UxCaseStudy
    | null;
  // Copy before appending: `source` may be the shared module-level fallback
  // object, and mutating it would accumulate showcase images across requests.
  let caseStudy = source ? normalizeCaseStudy(version, source) : null;

  const summary = str(doc.description, str(local?.summary));

  const base: PortfolioProject = {
    slug: str(doc.slug, str(local?.slug)),
    title: str(doc.title, str(local?.title, "Untitled project")),
    subtitle: str(doc.subtitle, str(local?.subtitle, summary)),
    summary,
    category: str(doc.category, str(local?.category, "Project")),
    cover: str(doc.cover, str(local?.cover)) || null,
    link: str(doc.link) || str(local?.link) || null,
    themeColor: str(doc.themeColor, str(local?.themeColor, VERSIONS[version].accent)),
    tags:
      doc.techStack && doc.techStack.length > 0
        ? doc.techStack.map((item) => str(item.name)).filter(Boolean)
        : (local?.tags ?? []),
    isPlaceholder: !variant?.[version],
  };

  // Showcase images from Sanity enrich the FE "screenshots" and UX output
  // galleries, which otherwise live inside the sample case study.
  if (caseStudy && doc.showcase && doc.showcase.length > 0) {
    const fromSanity = doc.showcase.map((item) => ({
      title: str(item.title, "Screen"),
      caption: str(item.description),
      image: str(item.image) || null,
    }));
    if (version === "fe") {
      const fe = caseStudy as FeCaseStudy;
      caseStudy = { ...fe, screenshots: [...(fe.screenshots ?? []), ...fromSanity] };
    } else if (version === "ux") {
      const ux = caseStudy as UxCaseStudy;
      caseStudy = { ...ux, outputs: [...(ux.outputs ?? []), ...fromSanity] };
    } else {
      const pm = caseStudy as PmCaseStudy;
      caseStudy = {
        ...pm,
        deliverables: [
          ...(pm.deliverables ?? []),
          ...fromSanity.map((item) => ({
            title: item.title,
            caption: item.caption,
            image: item.image,
          })),
        ],
      };
    }
  }

  if (version === "pm") return { ...base, pm: (caseStudy as PmCaseStudy) ?? undefined };
  if (version === "fe") return { ...base, fe: (caseStudy as FeCaseStudy) ?? undefined };
  return { ...base, ux: (caseStudy as UxCaseStudy) ?? undefined };
}

async function fetchSanity<T>(query: string, params: Record<string, string>): Promise<T | null> {
  if (!client) return null;
  try {
    return await client.fetch<T>(query, params, { next: { revalidate: 60 } });
  } catch (error) {
    console.error("Sanity fetch failed:", error);
    return null;
  }
}

/**
 * All projects visible on a version's projects page.
 *
 * With Sanity configured, only authored variants are listed. Local samples
 * are reserved for unconfigured demo mode, not missing or failed CMS reads.
 */
export async function getProjects(version: VersionKey): Promise<PortfolioProject[]> {
  const docs = await fetchSanity<SanityProject[]>(projectsQuery, { version });
  const fromSanity = (docs ?? []).filter((doc) => doc.slug).map((doc) => hydrate(version, doc))
    .filter((project) => Boolean(project[version]));
  if (client) return fromSanity;
  const seen = new Set(fromSanity.map((project) => project.slug));

  const localOnly = FALLBACK_PROJECTS[version]
    .filter((project) => !seen.has(project.slug))
    .map((project) => ({ ...project }));

  const all = [...fromSanity, ...localOnly];
  const order = new Map(
    FALLBACK_PROJECTS[version].map((project, index) => [project.slug, index]),
  );
  return all.sort((a, b) => (order.get(a.slug) ?? 99) - (order.get(b.slug) ?? 99));
}

export async function getProjectBySlug(
  version: VersionKey,
  slug: string,
): Promise<PortfolioProject | null> {
  const doc = await fetchSanity<SanityProject | null>(projectBySlugQuery, { version, slug });
  if (doc) return hydrate(version, doc);
  return client ? null : fallbackProject(version, slug);
}

export async function getFeaturedProjects(version: VersionKey): Promise<PortfolioProject[]> {
  const site = await getVersionSite(version);
  const all = await getProjects(version);
  const wanted = site.featuredProjects;
  if (wanted.length === 0) return all.slice(0, 3);
  const ordered = wanted
    .map((slug) => all.find((project) => project.slug === slug))
    .filter((project): project is PortfolioProject => Boolean(project));
  const rest = all.filter((project) => !wanted.includes(project.slug));
  return [...ordered, ...rest];
}

export type { VersionContact };

/** Global contact details, shared by all three versions. */
export async function getContact(): Promise<VersionContact> {
  const docs = await fetchSanity<SanitySiteSettings[]>(siteSettingsQuery, { version: "all" });
  const doc = docs?.find((entry) => !entry.version || entry.version === "all") ?? docs?.[0] ?? {};
  return {
    name: str(doc.name, "William Hankey"),
    role: str(doc.role),
    email: str(doc.email, "william@meiflume.com"),
    location: str(doc.location),
    cvUrl: str(doc.cvUrl),
    socials: doc.socials ?? [],
  };
}

/**
 * Page-level content for a version.
 *
 * Global fields come from the `all` siteSettings document; the per-version
 * document (matched on `version`) supplies the rest. Anything the Studio has
 * not published falls back to the local sample content, so a version route
 * always renders.
 */
export async function getVersionSite(version: VersionKey): Promise<VersionSiteContent> {
  const local = FALLBACK_SITE[version];
  const config = VERSIONS[version];
  const docs = await fetchSanity<SanitySiteSettings[]>(siteSettingsQuery, { version });
  const globalDoc = docs?.find((entry) => !entry.version || entry.version === "all");
  const versionDoc = docs?.find((entry) => entry.version === version);
  const variant = { ...globalDoc?.variant, ...versionDoc?.variant } as
    | Partial<VersionSiteContent>
    | undefined;

  const heroMetrics = Array.isArray(variant?.heroMetrics)
    ? variant.heroMetrics.filter((item) => item && typeof item.value === "string")
    : local.heroMetrics;

  const process = Array.isArray(variant?.process)
    ? (variant.process as ProcessStepContent[])
    : local.process;

  return {
    version,
    roleLong: str(variant?.roleLong, local.roleLong ?? config.roleLong),
    heroEyebrow: str(variant?.heroEyebrow, local.heroEyebrow),
    heroHeadline: str(variant?.heroHeadline, local.heroHeadline),
    heroIntro: str(variant?.heroIntro, local.heroIntro),
    heroCtaPrimary: str(variant?.heroCtaPrimary, local.heroCtaPrimary),
    heroCtaSecondary: str(variant?.heroCtaSecondary, local.heroCtaSecondary),
    heroImage: str(variant?.heroImage) || null,
    heroMetrics,
    positioningNote: str(variant?.positioningNote, local.positioningNote),
    featuredProjects: strArray(variant?.featuredProjects, local.featuredProjects),
    introBlocks: variant?.introBlocks?.length ? variant.introBlocks : local.introBlocks,
    skills: strArray(variant?.skills, local.skills),
    process: process.length > 0 ? process : local.process,
    about: strArray(variant?.about, local.about),
    certifications: local.certifications,
    testimonials: await getTestimonials(version, local.testimonials),
    ctaHeading: str(variant?.ctaHeading, local.ctaHeading),
    ctaBody: str(variant?.ctaBody, local.ctaBody),
    seo: {
      title: str(variant?.seo?.title, local.seo.title),
      description: str(variant?.seo?.description, local.seo.description),
    },
  };
}

export async function getTestimonials(
  version: VersionKey,
  fallback: Quote[] = [],
): Promise<Quote[]> {
  const docs = await fetchSanity<Quote[]>(testimonialsQuery, { version });
  if (!docs || docs.length === 0) return fallback;
  return docs
    .filter((item) => item && typeof item.quote === "string" && item.quote.length > 0)
    .map((item) => ({
      quote: str(item.quote),
      name: str(item.name, "Client"),
      role: str(item.role),
      photo: str(item.photo) || null,
    }));
}

export async function getCertifications(version: VersionKey) {
  const docs = await fetchSanity<
    { name: string; issuer?: string; year?: string; url?: string }[]
  >(certificationsQuery, { version });
  if (docs && docs.length > 0) return docs;
  return FALLBACK_SITE[version].certifications;
}

export async function getExperiences(version: VersionKey) {
  const docs = await fetchSanity<{ role: string; company: string; period?: string; bullets?: string[] }[]>(
    experiencesQuery,
    { version },
  );
  if (docs && docs.length > 0) return docs;
  return FALLBACK_SITE[version].about.map((paragraph, index) => ({
    role: index === 0 ? VERSIONS[version].roleLong : "",
    company: "MeiFlume",
    period: "",
    bullets: [paragraph],
  }));
}

/** Tree helper used by the architecture and information-architecture views. */
export function flattenTree(node: TreeNode | undefined): string[] {
  if (!node) return [];
  return [node.label, ...(node.children ?? []).flatMap((child) => flattenTree(child))];
}

export { titleCase };
