import type { FeCaseStudy, PmCaseStudy, UxCaseStudy } from "./types";
import type { VersionKey } from "../versions";

// Empty UI shapes, not sample outcomes. Published partial variants must never
// acquire another project's research findings, performance figures or quotes.
const arrays = {
  pm: "roles methodology businessGoals results highlights deliverables responsibilities ownershipAreas decisions collaborators stakeholders ceremonies tools principles approachSteps risks outcomeGroups beforeAfter milestones measurement achievements artifacts learnings workedWell improveNextTime futurePractices",
  fe: "techStack keyResults contributions technicalHighlights process screenshots stakeholders userPainPoints technicalConstraints frontendChallenges goals successCriteria responsibilities architectureGoals stateManagement apiFlow uiPatterns responsive decisions deployment designCollaboration figmaToProduction designSystem responsiveScreens interactions accessibility perfMetrics coreWebVitals beforeAfter optimizations resultMetrics businessImpact userImpact technicalImpact launchOutcomes principles typescriptPoints componentPoints linting ci reviews docs",
  ux: "tags responsibilities userGoals businessGoals keyResults outputs contextGoals userPainPoints operationalPainPoints constraints impactCards researchInputs personas processPrinciples processSteps phaseTimeline collaboration decisionInputs uxPrinciples flow journey wireframes decisions uxAccessibility designGoals uiPrinciples moodboard palette typography spacing icons components states uiBeforeAfter finalScreens outcomeMetrics outcomeGroups additionalWins shipped handoffGoals redlines annotatedScreens componentDocs collaborationNotes implementationSupport releaseStats postLaunch",
};
const strings = {
  pm: "industry status dateRange teamSize summary roleSummary roleLevel duration approachOverview",
  fe: "role team timeline industry summary productContext businessChallenge architectureOverview impactSummary",
  ux: "category role team timeline industry summary outcome challenge problemOverview coreProblem businessContext whyItMattered problemStatement processOverview uxOverview uiOverview handoffNarrative",
};
const nestedArrays = new Set("points activities methods needs variants states children".split(" "));

type RecordValue = Record<string, unknown>;
function isRecord(value: unknown): value is RecordValue {
  return Boolean(value) && typeof value === "object" && !Array.isArray(value);
}
function clean(value: unknown): unknown {
  if (value == null) return undefined;
  if (Array.isArray(value)) return value.filter((item) => item != null).map(clean);
  if (!isRecord(value)) return value;
  return Object.fromEntries(Object.entries(value).map(([key, item]) => [
    key,
    nestedArrays.has(key) ? (Array.isArray(item) ? clean(item) : []) : clean(item),
  ]));
}
function table(value: unknown) {
  const source = isRecord(value) ? value : {};
  return {
    caption: typeof source.caption === "string" ? source.caption : "",
    columns: Array.isArray(source.columns) ? source.columns.map((v) => String(v ?? "")) : [],
    rows: Array.isArray(source.rows) ? source.rows.map((row) => {
      const cells = Array.isArray(row) ? row : isRecord(row) ? row.cells : [];
      return Array.isArray(cells) ? cells.map((v) => String(v ?? "")) : [];
    }) : [],
  };
}

export function normalizeCaseStudy(version: "pm", value: unknown): PmCaseStudy;
export function normalizeCaseStudy(version: "fe", value: unknown): FeCaseStudy;
export function normalizeCaseStudy(version: "ux", value: unknown): UxCaseStudy;
export function normalizeCaseStudy(version: VersionKey, value: unknown): PmCaseStudy | FeCaseStudy | UxCaseStudy;
export function normalizeCaseStudy(version: VersionKey, value: unknown): PmCaseStudy | FeCaseStudy | UxCaseStudy {
  const result: RecordValue = isRecord(value) ? clean(value) as RecordValue : {};
  for (const key of strings[version].split(" ")) {
    if (typeof result[key] !== "string") result[key] = "";
  }
  for (const key of arrays[version].split(" ")) {
    if (!Array.isArray(result[key])) result[key] = [];
  }
  if (version === "pm") {
    result.statusTone ??= "neutral";
    for (const key of ["stakeholderPlan", "raid", "retrospectives"]) result[key] = table(result[key]);
    const priority = isRecord(result.prioritization) ? result.prioritization : {};
    result.prioritization = { framework: "", description: "", ...priority, table: table(priority.table) };
  } else if (version === "fe") {
    result.testing = { points: [], ...(isRecord(result.testing) ? result.testing : {}) };
    if (isRecord(result.bundle)) {
      result.bundle = { ...result.bundle, segments: Array.isArray(result.bundle.segments) ? result.bundle.segments : [] };
    }
    for (const key of ["highLevel", "fileTree", "componentTree"]) result[key] ??= { label: "", children: [] };
  } else {
    result.usability = { participants: "", rounds: "", points: [], ...(isRecord(result.usability) ? result.usability : {}) };
    result.outcomeCompare ??= {};
    result.informationArchitecture ??= { label: "", children: [] };
    // Older records may omit these required arrays on individual entries.
    result.components = (result.components as RecordValue[]).map((entry) => ({ variants: [], states: [], ...entry }));
    result.personas = (result.personas as RecordValue[]).map((entry) => ({ needs: [], ...entry }));
  }
  return result as unknown as PmCaseStudy | FeCaseStudy | UxCaseStudy;
}
