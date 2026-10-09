import type { VersionKey } from "@/lib/versions";

/* ==========================================================================
   Shared primitives
   ========================================================================== */

export type Tone = "accent" | "success" | "warning" | "danger" | "neutral" | "alt";

export type Metric = {
  /** Headline figure, pre-formatted so "+28%" and "3.1x" both work. */
  value: string;
  label: string;
  /** Optional before → after or "measured over 6 months" context. */
  note?: string;
  /** Where the number came from. Rendered next to the metric for credibility. */
  source?: string;
  tone?: Tone;
};

export type KeyValue = {
  label: string;
  value: string;
};

export type TitledPoints = {
  title: string;
  description?: string;
  /** Optional checklist. Sections with only a summary omit this. */
  points?: string[];
};

export type TitledText = {
  title: string;
  description: string;
};

export type Quote = {
  quote: string;
  name: string;
  role?: string;
  photo?: string | null;
};

export type TreeNode = {
  label: string;
  children?: TreeNode[];
};

export type CodeSample = {
  filename?: string;
  language: string;
  code: string;
};

export type TableBlock = {
  caption?: string;
  columns: string[];
  rows: string[][];
};

export type Asset = {
  title: string;
  caption?: string;
  image?: string | null;
  href?: string;
};

export type AssetPair = {
  title: string;
  before: Asset;
  after: Asset;
  note?: string;
};

export type StatusChip = {
  label: string;
  tone: Tone;
};

export type Step = {
  title: string;
  summary: string;
  activities?: string[];
  methods?: string[];
  output?: string;
  duration?: string;
};

export type Person = {
  name: string;
  role: string;
};

/* ==========================================================================
   Project Manager case study
   ========================================================================== */

export type PmOwnershipArea = {
  title: string;
  points: string[];
};

export type PmDecisionArea = {
  title: string;
  points: string[];
};

export type PmCeremony = {
  title: string;
  cadence: string;
  description: string;
};

export type PmStakeholderRow = {
  group: string;
  method: string;
  cadence: string;
  focus: string;
};

export type PmArtifact = {
  title: string;
  category: string;
  description: string;
  image?: string | null;
  href?: string;
};

export type PmMilestone = {
  date: string;
  title: string;
  outcome: string;
};

export type PmRetrospective = {
  learned: string;
  action: string;
  impact: string;
};

export type PmCaseStudy = {
  industry: string;
  status: string;
  statusTone: Tone;
  dateRange: string;
  roles: string[];
  methodology: string[];
  teamSize: string;
  summary: string;
  businessGoals: string[];

  /* Overview */
  results: Metric[];
  highlights: string[];
  deliverables: Asset[];

  /* My Role */
  roleSummary: string;
  roleLevel: string;
  duration: string;
  responsibilities: string[];
  ownershipAreas: PmOwnershipArea[];
  decisions: PmDecisionArea[];
  collaborators: Person[];
  stakeholders: Person[];
  ceremonies: PmCeremony[];
  tools: string[];

  /* Approach */
  approachOverview: string;
  principles: string[];
  approachSteps: Step[];
  stakeholderPlan: TableBlock;
  prioritization: {
    framework: string;
    description: string;
    table: TableBlock;
  };
  risks: string[];
  raid: TableBlock;

  /* Outcomes */
  outcomeGroups: TitledPoints[];
  beforeAfter: { label: string; before: string; after: string; unit?: string }[];
  milestones: PmMilestone[];
  measurement: string[];
  achievements: string[];

  /* Artifacts */
  artifacts: PmArtifact[];

  /* Learnings */
  learnings: TitledPoints[];
  workedWell: string[];
  improveNextTime: string[];
  retrospectives: TableBlock;
  futurePractices: string[];
};

/* ==========================================================================
   Front-End Engineer case study
   ========================================================================== */

export type FeDecision = {
  title: string;
  rationale: string;
  tradeoffs?: string;
};

export type FeMetricComparison = {
  label: string;
  /** Rendered in seconds, kilobytes or milliseconds as `unit` describes. */
  before: number;
  after: number;
  unit: string;
  /** True when a lower number is better (LCP, INP, TTI, bundle size). */
  lowerIsBetter?: boolean;
};

export type FeBundleSegment = {
  label: string;
  size: number;
};

export type FeTestSummary = {
  unit?: string;
  integration?: string;
  component?: string;
  accessibility?: string;
  coverage?: number;
  coverageNote?: string;
  points: string[];
};

export type FePipelineStep = {
  title: string;
  command: string;
  description?: string;
};

export type FeCaseStudy = {
  role: string;
  team: string;
  timeline: string;
  industry: string;
  summary: string;
  techStack: { name: string; icon?: string }[];
  liveUrl?: string;
  repoUrl?: string;

  /* Overview */
  keyResults: Metric[];
  contributions: string[];
  technicalHighlights: string[];
  process: Step[];
  screenshots: Asset[];

  /* Problem */
  productContext: string;
  businessChallenge: string;
  stakeholders: string[];
  userPainPoints: string[];
  technicalConstraints: string[];
  frontendChallenges: string[];
  goals: string[];
  successCriteria: string[];
  responsibilities: string[];

  /* Architecture */
  architectureOverview: string;
  architectureGoals: TitledPoints[];
  highLevel: TreeNode;
  fileTree: TreeNode;
  componentTree: TreeNode;
  stateManagement: string[];
  apiFlow: Step[];
  uiPatterns: TitledPoints[];
  responsive: TitledPoints[];
  decisions: FeDecision[];
  deployment: string[];

  /* UX / UI */
  designCollaboration: string[];
  figmaToProduction: AssetPair[];
  designSystem: Asset[];
  responsiveScreens: Asset[];
  interactions: TitledText[];
  accessibility: string[];

  /* Performance */
  perfMetrics: Metric[];
  coreWebVitals: Metric[];
  beforeAfter: FeMetricComparison[];
  optimizations: TitledPoints[];
  bundle?: {
    before?: number;
    after?: number;
    unit: string;
    segments: FeBundleSegment[];
  };
  impactSummary: string;

  /* Results */
  resultMetrics: Metric[];
  businessImpact: string[];
  userImpact: string[];
  technicalImpact: string[];
  launchOutcomes: Metric[];

  /* Code Quality */
  principles: TitledPoints[];
  typescriptSample?: CodeSample;
  typescriptPoints: string[];
  componentPoints: string[];
  testing: FeTestSummary;
  linting: string[];
  ci: FePipelineStep[];
  reviews: string[];
  docs: string[];
};

/* ==========================================================================
   UX/UI Designer case study
   ========================================================================== */

export type UxQuote = {
  quote: string;
  person: string;
  context: string;
};

export type UxPainPoint = {
  title: string;
  description: string;
};

export type UxConstraint = {
  title: string;
  description: string;
};

export type UxPersona = {
  name: string;
  role: string;
  description: string;
  needs: string[];
};

export type UxJourneyStep = {
  stage: string;
  goal: string;
  emotion: "frustrated" | "neutral" | "confident";
  quote?: string;
};

export type UxDecisionComparison = {
  title: string;
  before: string;
  after: string;
};

export type UxColorToken = {
  name: string;
  value: string;
  usage: string;
};

export type UxTypeToken = {
  name: string;
  value: string;
  usage: string;
};

export type UxSpacingToken = {
  name: string;
  value: string;
};

export type UxComponentSpec = {
  name: string;
  variants: string[];
  states: string[];
  note?: string;
};

export type UxStateSpec = {
  name: string;
  description: string;
  tone: Tone;
};

export type UxTestSummary = {
  participants: string;
  rounds: string;
  points: { text: string; status: "positive" | "negative" }[];
};

export type UxCaseStudy = {
  category: string;
  role: string;
  team: string;
  timeline: string;
  industry: string;
  summary: string;
  outcome: string;
  tags: string[];

  /* Overview */
  responsibilities: string[];
  challenge: string;
  userGoals: string[];
  businessGoals: string[];
  keyResults: Metric[];
  outputs: Asset[];

  /* Problem */
  problemOverview: string;
  coreProblem: string;
  businessContext: string;
  contextGoals: string[];
  userPainPoints: UxQuote[];
  operationalPainPoints: UxPainPoint[];
  constraints: UxConstraint[];
  whyItMattered: string;
  impactCards: TitledPoints[];
  researchInputs: string[];
  personas: UxPersona[];
  problemStatement: string;

  /* Process */
  processOverview: string;
  processPrinciples: TitledPoints[];
  processSteps: Step[];
  /** Phase-by-phase breakdown, distinct from the project-level `timeline` string. */
  phaseTimeline: { week: string; focus: string; outcome: string }[];
  collaboration: string[];
  decisionInputs: string[];

  /* UX */
  uxOverview: string;
  uxPrinciples: TitledPoints[];
  flow: Step[];
  informationArchitecture: TreeNode;
  journey: UxJourneyStep[];
  wireframes: Asset[];
  usability: UxTestSummary;
  decisions: UxDecisionComparison[];
  uxAccessibility: string[];

  /* UI */
  uiOverview: string;
  designGoals: TitledPoints[];
  uiPrinciples: TitledPoints[];
  moodboard: Asset[];
  brandPhrase?: string;
  palette: UxColorToken[];
  typography: UxTypeToken[];
  spacing: UxSpacingToken[];
  icons: string[];
  components: UxComponentSpec[];
  states: UxStateSpec[];
  uiBeforeAfter: AssetPair[];
  finalScreens: Asset[];

  /* Outcomes */
  outcomeMetrics: Metric[];
  outcomeGroups: TitledPoints[];
  outcomeCompare: AssetPair;
  testimonial?: Quote;
  additionalWins: string[];
  shipped: string[];

  /* Handoff */
  handoffNarrative: string;
  handoffGoals: string[];
  redlines: Asset[];
  annotatedScreens: Asset[];
  componentDocs: Asset[];
  collaborationNotes: string[];
  implementationSupport: string[];
  releaseStats: Metric[];
  postLaunch: string[];
};

/* ==========================================================================
   Unified project shape
   ========================================================================== */

export type ProjectBase = {
  slug: string;
  title: string;
  subtitle: string;
  /** Short description used on cards, previews and meta descriptions. */
  summary: string;
  category: string;
  cover: string | null;
  link: string | null;
  themeColor: string;
  tags: string[];
  /** True while the entry is local sample content rather than published data. */
  isPlaceholder: boolean;
};

export type PortfolioProject = ProjectBase & {
  pm?: PmCaseStudy;
  fe?: FeCaseStudy;
  ux?: UxCaseStudy;
};

/* ==========================================================================
   Versioned site content
   ========================================================================== */

export type VersionMetric = {
  value: string;
  label: string;
  note?: string;
};

export type VersionNavNote = {
  title: string;
  description: string;
};

export type ProcessStepContent = {
  title: string;
  summary: string;
  activities: string[];
  output: string;
};

export type VersionContact = {
  name: string;
  role: string;
  email: string;
  location: string;
  cvUrl: string;
  socials: { platform: string; url: string }[];
};

export type VersionSiteContent = {
  version: VersionKey;
  /** Overrides the registry `roleLong` when set in Sanity. */
  roleLong?: string;
  heroEyebrow: string;
  heroHeadline: string;
  heroIntro: string;
  heroCtaPrimary: string;
  heroCtaSecondary: string;
  heroImage?: string | null;
  /** Credibility strip under the hero. Empty renders nothing. */
  heroMetrics: VersionMetric[];
  positioningNote?: string;
  featuredProjects: string[];
  /** Short section summaries that sit above the shared sections. */
  introBlocks: VersionNavNote[];
  skills: string[];
  process: ProcessStepContent[];
  about: string[];
  certifications: { name: string; issuer: string; year: string; url?: string }[];
  testimonials: Quote[];
  ctaHeading: string;
  ctaBody: string;
  seo: { title: string; description: string };
};
