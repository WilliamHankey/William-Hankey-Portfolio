import type { PortfolioProject, VersionSiteContent } from "@/lib/content/types";

/* ==========================================================================
   Front-End Engineer — sample content.
   Replace by publishing `variants` on the matching Sanity project documents.
   ========================================================================== */

export const feSite: VersionSiteContent = {
  version: "fe",
  roleLong: "Front-End Engineer / Developer",
  heroEyebrow: "Front-end engineering",
  heroHeadline: "Building fast, scalable, user-focused front-end experiences.",
  heroIntro:
    "I build production interfaces in React and TypeScript — component systems that stay maintainable, data layers that fail gracefully, and front ends that stay fast on the devices people actually use.",
  heroCtaPrimary: "View projects",
  heroCtaSecondary: "Download resume",
  heroMetrics: [
    { value: "6+", label: "Years shipping production front ends" },
    { value: "12", label: "Products delivered" },
    { value: "TypeScript", label: "Strict mode, no escape hatches" },
    { value: "WCAG 2.2", label: "Accessibility target on every build" },
  ],
  positioningNote:
    "A component that nobody can change safely in two years' time is not a reusable component.",
  featuredProjects: ["hummingbird-hxd", "waupay", "culteva-evaluations-app-redesign"],
  introBlocks: [
    {
      title: "Architecture over screens",
      description:
        "I start with the data flow and the component boundaries, not the mockup. A screenshot tells you what it looks like; an architecture tells you what it costs to change.",
    },
    {
      title: "Performance is a feature",
      description:
        "Bundle budgets, code splitting, image delivery and render cost are part of the definition of done, not a cleanup task for later.",
    },
    {
      title: "Accessible by default",
      description:
        "Semantic markup, keyboard operability and visible focus are cheaper to build in than to retrofit. I treat WCAG 2.2 AA as the floor.",
    },
  ],
  skills: [
    "React",
    "TypeScript",
    "Next.js",
    "JavaScript (ES2022+)",
    "HTML5 & semantics",
    "CSS3 & Tailwind",
    "React Native / Expo",
    "Node.js",
    "REST & webhook APIs",
    "State management",
    "Testing (Vitest, Testing Library)",
    "Accessibility (WCAG 2.2 AA)",
    "Performance & Core Web Vitals",
    "Design systems",
    "Sanity CMS",
    "Git & CI/CD",
  ],
  process: [
    {
      title: "Understand the data",
      summary: "Map the API, the states and the failure modes before writing components.",
      activities: ["API shape review", "State inventory", "Edge case mapping"],
      output: "Data flow diagram & type definitions",
    },
    {
      title: "Design the boundaries",
      summary: "Decide what is a component, what is a feature, and what is shared.",
      activities: ["Component inventory", "API surface design", "Variant planning"],
      output: "Component architecture",
    },
    {
      title: "Build in types",
      summary: "Model the domain first so the UI cannot drift from it.",
      activities: ["Type definitions", "Typed API layer", "Generic prop contracts"],
      output: "Typed feature modules",
    },
    {
      title: "Make it accessible",
      summary: "Semantic structure, keyboard paths and focus order as acceptance criteria.",
      activities: ["Semantic HTML", "Focus management", "Contrast checks"],
      output: "Keyboard-operable interface",
    },
    {
      title: "Measure and optimise",
      summary: "Bundle analysis, render profiling and Core Web Vitals work.",
      activities: ["Code splitting", "Image optimisation", "Render cost reduction"],
      output: "Performance budget met",
    },
    {
      title: "Test and maintain",
      summary: "Unit, integration and component tests plus automated quality checks.",
      activities: ["Unit tests", "Component tests", "Lint, type check, CI"],
      output: "Regression-safe codebase",
    },
  ],
  about: [
    "I am a front-end engineer who works across the stack boundary comfortably — I know what the API is doing because I have read it, and I know what the designer meant because I have sat in the review.",
    "Most of my work is TypeScript and React: Next.js for content-driven sites, React Native for field applications, and Tailwind with component primitives for design systems. I have shipped on Vite, Expo and Node back ends.",
    "I care about the parts of the job that are invisible in a screenshot: the empty state that never got designed, the focus ring nobody tested, the bundle that doubled because someone imported a date library for one format call.",
    "I work as part of small cross-functional teams, and I like being the person who pushes back on a component API before it gets used in four places.",
  ],
  certifications: [],
  testimonials: [],
  ctaHeading: "Need a front-end engineer?",
  ctaBody:
    "Send me the role and the product. I will tell you what I would build first and what I would refuse to ship.",
  seo: {
    title: "William Hankey — Front-End Engineer",
    description:
      "Front-end engineering portfolio: production React and TypeScript, architecture decisions, accessibility and performance work.",
  },
};

const hummingbird: PortfolioProject = {
  slug: "hummingbird-hxd",
  title: "Hummingbird HXD",
  subtitle: "Agency website rebuild on a headless stack",
  summary:
    "A complete rebuild of an agency site that had been offline, moving from a rigid hosted builder to Next.js, TypeScript and Sanity so the owner could publish without a developer.",
  category: "Website / Marketing",
  cover: null,
  link: null,
  themeColor: "#5AB9A6",
  tags: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Sanity", "Vercel"],
  isPlaceholder: true,
  fe: {
    role: "Front-end lead",
    team: "2 engineers, 1 designer",
    timeline: "6 weeks",
    industry: "Creative agency / web design",
    summary:
      "The previous site had been offline for months, which meant the client had no credibility and no pipeline. The technical constraint was ownership: the site had to be maintainable by a non-developer, permanently. That single requirement shaped every decision below.",
    techStack: [
      { name: "Next.js" },
      { name: "React" },
      { name: "TypeScript" },
      { name: "Tailwind CSS" },
      { name: "Sanity CMS" },
      { name: "Vercel" },
    ],

    keyResults: [
      { value: "0", label: "Static generation, so content changes never wait on a build queue", tone: "success" },
      { value: "100", label: "Lighthouse performance score on mobile", source: "Lighthouse, production build", tone: "success" },
      { value: "0 KB", label: "JavaScript shipped for the home page hero", tone: "success" },
      { value: "1", label: "Person who can publish, with no developer involved", tone: "accent" },
    ],
    contributions: [
      "Owned the front-end architecture and the component API surface",
      "Designed the Sanity schema around what the owner actually edits",
      "Implemented the full page set in TypeScript with strict mode",
      "Set the performance budget and held the build to it",
      "Ran accessibility review against WCAG 2.2 AA before launch",
      "Wrote the publishing guide and ran the handover session",
    ],
    technicalHighlights: [
      "App Router with static generation — pages are HTML before JavaScript runs",
      "Design tokens in CSS custom properties so the brand could be re-themed without touching components",
      "next/image with remote patterns scoped to the Sanity CDN only",
      "Content model designed around the owner's vocabulary, not the schema's",
      "Zero third-party UI dependencies — the component set is small enough to own",
    ],
    process: [
      { title: "Understand the data", summary: "Audited the old site's content and the owner's actual editing habits.", activities: ["Content audit", "Owner interview", "Competitor review"], output: "Content model" },
      { title: "Design the boundaries", summary: "Kept the component set deliberately small.", activities: ["Component inventory", "Variant planning"], output: "Component API" },
      { title: "Build in types", summary: "Typed the CMS responses end to end.", activities: ["GROQ projections", "Generated types", "Zod-free runtime guards at the boundary"], output: "Typed data layer" },
      { title: "Make it accessible", summary: "Semantic structure and visible focus from the first component.", activities: ["Semantic HTML", "Focus styles", "Contrast checks"], output: "Keyboard-operable site" },
      { title: "Measure and optimise", summary: "Static generation, image optimisation, zero hero JavaScript.", activities: ["Route-level splitting", "Image sizing", "Lighthouse runs"], output: "Performance budget" },
      { title: "Test and maintain", summary: "Type check plus component tests on the shared primitives.", activities: ["Unit tests", "Type check", "Preview deploys"], output: "Safe refactors" },
    ],
    screenshots: [
      { title: "Home", caption: "Above the fold: heading, positioning and work, with no client-side JavaScript" },
      { title: "Project showcase", caption: "Case study grid driven entirely by CMS references" },
      { title: "Services", caption: "Grouped service cards with expandable detail" },
      { title: "Contact", caption: "Form with client-side validation and an accessible error summary" },
    ],

    productContext:
      "Hummingbird HXD is a web design agency. Their site is the sales tool: it has to show the quality of their work, explain what they do, and make it easy to start a conversation. The audience is a business owner deciding whether to spend money on a website.",
    businessChallenge:
      "The previous site had been offline for an extended period, so the agency had no visibility, no credibility with new clients, and no way to show prospective customers what they could do. The client also needed to update content themselves without paying a developer for every change.",
    stakeholders: ["Agency owner", "Business owners (prospective clients)", "MeiFlume delivery team", "Hosting and domain provider"],
    userPainPoints: [
      "Prospective clients had no way to judge the agency's work",
      "The owner could not publish updates without developer involvement",
      "A rigid hosted builder made long-term maintenance expensive and brittle",
      "The brand and digital presence no longer reflected the agency's expertise",
    ],
    technicalConstraints: [
      "The previous site was built on a hosted page builder with limited control",
      "The domain and DNS needed migrating without losing any existing links",
      "Content had to be editable by a non-developer on a regular basis",
      "The site had to perform well on mobile, which is where most visitors arrive",
      "No existing design system to inherit — the brand needed rebuilding too",
    ],
    frontendChallenges: [
      "Rendering a variable, image-heavy case study grid without a layout shift on load",
      "Keeping the JavaScript payload near zero for a marketing site that does not need to be an app",
      "Designing a CMS model an agency owner would not break",
      "Making a multi-page marketing site feel fast on a mid-range Android device",
      "Rebuilding the visual identity in a way that did not rely on a webfont blocking first paint",
    ],
    goals: [
      "Get a fast, credible site live as the top priority",
      "Let the owner publish case studies and services without a developer",
      "Rebuild the brand into something that reflects the agency's design capability",
      "Keep the component set small enough to maintain long after handover",
    ],
    successCriteria: [
      "Lighthouse performance 90+ on mobile",
      "No layout shift as case study images load",
      "Owner completes a content publish unaided",
      "Every page reachable and legible at 360px",
      "Keyboard navigation works across the whole site",
    ],
    responsibilities: [
      "Front-end architecture and component API design",
      "Sanity schema design and GROQ projections",
      "Full implementation in TypeScript with strict mode",
      "Performance budget definition and enforcement",
      "Accessibility implementation and audit",
      "Publishing documentation and owner handover session",
    ],

    architectureOverview:
      "A statically generated marketing site with a headless CMS. The important property is that there is very little JavaScript: content arrives as HTML from the build, and the interactive parts are isolated to a handful of components. That keeps the site fast and makes it easy for a non-developer to reason about.",
    architectureGoals: [
      { title: "Maintainable", description: "A component set small enough to hold in your head, with no third-party UI dependencies to keep current." },
      { title: "Performant", description: "Static generation, route-level splitting and a strict image policy, so the site stays fast without ongoing effort." },
      { title: "Scalable", description: "Content models that let the owner add case studies and services without a schema change." },
      { title: "Collaborative", description: "A preview deploy per branch so the owner and the designer can review before anything ships." },
    ],
    highLevel: {
      label: "Next.js App Router",
      children: [
        {
          label: "Server components (static by default)",
          children: [
            { label: "Page routes — statically generated" },
            { label: "SEO metadata generation" },
            { label: "Image optimisation pipeline" },
          ],
        },
        {
          label: "Client components (isolated)",
          children: [
            { label: "Navigation drawer" },
            { label: "Contact form validation" },
            { label: "Case study filters" },
          ],
        },
        {
          label: "Content layer",
          children: [
            { label: "Sanity GROQ projections" },
            { label: "Generated TypeScript types" },
            { label: "Image URL builder" },
          ],
        },
        { label: "Vercel — static output, CDN, preview deploys" },
      ],
    },
    fileTree: {
      label: "src/",
      children: [
        { label: "app/" },
        { label: "components/" },
        { label: "  ui/            # Button, Card, Container, Section" },
        { label: "  sections/      # Hero, WorkGrid, Services, Contact" },
        { label: "content/" },
        { label: "  queries.ts     # GROQ projections" },
        { label: "  types.ts       # Generated from the schema" },
        { label: "  image.ts       # Sanity image URL builder" },
        { label: "lib/" },
        { label: "  seo.ts" },
        { label: "  cn.ts" },
        { label: "styles/" },
        { label: "  tokens.css     # Brand colour, spacing, radii" },
        { label: "  globals.css" },
        { label: "types/" },
        { label: "tests/" },
      ],
    },
    componentTree: {
      label: "App layout",
      children: [
        { label: "Header (nav, drawer)" },
        { label: "Footer (nav, socials, contact)" },
        { label: "Page sections" },
        { label: "  Hero" },
        { label: "  WorkGrid → WorkCard" },
        { label: "  Services → ServiceCard" },
        { label: "  Contact → ContactForm" },
        { label: "Shared primitives" },
        { label: "  Button, Card, Container, Section, Chip, Prose" },
      ],
    },
    stateManagement: [
      "Server state is fetched at build time by static generation, so there is no client cache to manage on a marketing site",
      "Client state is limited to the drawer open flag and the contact form's field values, both local useState",
      "Case study filters read from the URL search params rather than a store, so a filtered view is shareable and survives a refresh",
      "No global store library — nothing on this site has state that outlives a component",
      "Form submission state is explicit (idle, submitting, error, success) rather than a pile of booleans",
    ],
    apiFlow: [
      { title: "Build", summary: "Next.js runs the GROQ projection against the Sanity API at build time." },
      { title: "Project", summary: "Only the fields each section needs are returned — no full document fetches." },
      { title: "Type", summary: "Projections are typed, so a schema change surfaces as a type error, not a runtime blank." },
      { title: "Render", summary: "Server components emit HTML; the browser never waits on a data request for content." },
      { title: "Webhook", summary: "A Sanity publish webhook triggers a rebuild so the owner's edits go live." },
    ],
    uiPatterns: [
      { title: "Composable components", description: "Sections accept children and slots rather than props-per-variant, so new pages do not fork the component." },
      { title: "Variant styling", description: "A single primitive per visual role with a variant list, instead of Button and ButtonBlue and ButtonBlueLarge." },
      { title: "Compound components", description: "Header composes Nav, NavLink and Drawer rather than growing a props array." },
      { title: "Custom hooks", description: "useMediaQuery and useScrolled wrap the awkward browser APIs once." },
      { title: "Accessible by default", description: "Focus-visible rings, semantic elements and aria attributes live in the primitive, not in each usage." },
    ],
    responsive: [
      { title: "Mobile-first", description: "Base styles target the smallest viewport; breakpoints only add, never subtract." },
      { title: "Fluid spacing", description: "Section padding uses clamp so vertical rhythm scales without breakpoint jumps." },
      { title: "Content-driven grids", description: "The work grid goes 1 → 2 → 3 columns; the card never changes shape between breakpoints." },
      { title: "Type scale", description: "Display sizes use clamp with a max, so a 27-inch monitor does not get a headline the size of a banner." },
    ],
    decisions: [
      { title: "Static generation over client fetching", rationale: "A marketing site's content changes a few times a month, so paying a network round trip per visitor buys nothing.", tradeoffs: "Content edits need a rebuild; mitigated with a Sanity publish webhook and preview deploys." },
      { title: "Zero third-party UI dependencies", rationale: "The component set is small. Owning it means no breaking major versions and no accessibility regressions inherited from upstream.", tradeoffs: "More upfront work: carousel, tabs and dropdowns written by hand." },
      { title: "CSS custom properties for brand tokens", rationale: "The brand was still moving. Tokens let a colour change be a one-line edit rather than a search across components.", tradeoffs: "Requires discipline about not hardcoding hex values in components." },
      { title: "URL state for filters", rationale: "A shareable, refresh-safe filtered view costs less than a state library and survives the back button.", tradeoffs: "Filters re-run the server component on navigation." },
      { title: "Sanity schema designed around the owner", rationale: "Field names matching the owner's vocabulary means fewer mistakes and fewer support questions after handover.", tradeoffs: "Slightly less conventional schema shape; documented with examples in the studio." },
    ],
    deployment: [
      "Hosted on Vercel with static output; the build is the deploy",
      "Sanity publish webhook triggers an incremental rebuild",
      "Preview deploys per branch so the owner reviews before production",
      "next/image with remote patterns restricted to the Sanity CDN",
      "Security headers set at the platform: CSP, X-Content-Type-Options, Referrer-Policy",
    ],

    designCollaboration: [
      "Weekly design and engineering reviews with the same Figma file open on both sides",
      "Feasibility feedback given in the design phase rather than at handoff, so the designer could adjust before building",
      "Spacing and type scale agreed as tokens first, so the design system and the CSS used the same numbers",
      "A component inventory review: what we have, what we need, and what we are deliberately not building",
      "Accessibility reviewed alongside design, not as a QA pass at the end",
      "Design tokens shared between Figma styles and CSS custom properties so drift was visible immediately",
    ],
    figmaToProduction: [
      { title: "Hero section", before: { title: "Figma design", caption: "Frame with type scale and spacing tokens" }, after: { title: "Production", caption: "Same type scale, rendered as static HTML" }, note: "The only difference on screen is the font rendering and the fact that this one is real." },
      { title: "Work card", before: { title: "Figma design", caption: "Three variants: standard, featured, compact" }, after: { title: "Production", caption: "One component with a variant prop" }, note: "The design had three cards; the code has one component and three variants." },
    ],
    designSystem: [
      { title: "Buttons", caption: "Primary, secondary and ghost, each with a focus-visible state" },
      { title: "Cards", caption: "One card component, density controlled by a prop" },
      { title: "Navigation", caption: "Desktop bar and mobile drawer from the same nav data" },
      { title: "Section", caption: "One layout primitive handling container width and vertical rhythm" },
    ],
    responsiveScreens: [
      { title: "Desktop — 1440px", caption: "Three-column work grid, full navigation" },
      { title: "Tablet — 834px", caption: "Two-column grid, condensed navigation" },
      { title: "Mobile — 390px", caption: "Single column, drawer navigation, no horizontal scroll" },
    ],
    interactions: [
      { title: "Loading", description: "Route transitions use a subtle opacity change; no full-screen spinners on static pages." },
      { title: "Hover", description: "Cards lift 2px and the image scales 3% over 180ms — both suppressed under reduced motion." },
      { title: "Nav drawer", description: "Slides in from the right, traps focus, closes on Escape." },
      { title: "Form errors", description: "Errors appear in a summary at the top and are linked to their inputs with aria-describedby." },
      { title: "Active filter", description: "Filter chips show a selected state with both a colour and a border change, so state is not conveyed by colour alone." },
    ],
    accessibility: [
      "WCAG 2.2 AA target, verified with a Lighthouse accessibility audit and a manual keyboard pass",
      "Semantic landmarks: one h1 per page, sectioned headings in order, nav/main/footer landmarks",
      "Every interactive element reachable and operable by keyboard with a visible focus ring",
      "Focus order follows the visual order; the drawer manages focus on open and restores it on close",
      "Body text meets 4.5:1 contrast; secondary text was darkened rather than lightened to fit the design",
      "All images have descriptive alt text; decorative images use an empty alt attribute",
      "The drawer and any overlay respect prefers-reduced-motion",
    ],

    perfMetrics: [
      { value: "-58%", label: "JavaScript shipped to the browser on the home route", note: "After route-level splitting and removing the client wrapper", tone: "success", source: "Next.js build output" },
      { value: "1.4s", label: "Largest Contentful Paint on mobile", note: "Field data, not lab", tone: "success", source: "Vercel Analytics" },
      { value: "0.02", label: "Cumulative Layout Shift", note: "Fixed aspect ratios on every media slot", tone: "success", source: "Vercel Analytics" },
      { value: "100", label: "Lighthouse performance, mobile", tone: "success", source: "Lighthouse, production build" },
    ],
    coreWebVitals: [
      { value: "1.4s", label: "LCP — under the 2.5s good threshold", tone: "success" },
      { value: "102ms", label: "INP — under the 200ms good threshold", tone: "success" },
      { value: "0.02", label: "CLS — well under the 0.1 good threshold", tone: "success" },
      { value: "0.8s", label: "TTFB — served from the edge cache", tone: "success" },
    ],
    beforeAfter: [
      { label: "LCP", before: 3.4, after: 1.4, unit: "s", lowerIsBetter: true },
      { label: "INP", before: 320, after: 102, unit: "ms", lowerIsBetter: true },
      { label: "CLS", before: 0.19, after: 0.02, unit: "", lowerIsBetter: true },
      { label: "TTI", before: 4.8, after: 1.9, unit: "s", lowerIsBetter: true },
    ],
    optimizations: [
      { title: "Code splitting", description: "Server components by default, with client components only where state is genuinely required. The nav drawer and form are the only hydrated islands on a content page." },
      { title: "Lazy loading", description: "Below-the-fold sections lazy-load; above-the-fold images are preloaded with fetchpriority high." },
      { title: "Memoisation", description: "Memoised the work grid's card list and the nav item mapping — both re-rendered on filter changes for no benefit." },
      { title: "Image optimisation", description: "All content images through next/image with explicit width and height, modern formats, and a size appropriate to the breakpoint." },
      { title: "Caching", description: "Static output served from the edge; Sanity image URLs are immutable so they cache indefinitely." },
      { title: "Bundle analysis", description: "Bundle analyser in CI fails the build if the client bundle crosses the agreed budget." },
      { title: "Efficient state", description: "No global store. Server data is fetched at build time; the only client state is a drawer flag and form fields." },
    ],
    bundle: {
      before: 214,
      after: 89,
      unit: "kB",
      segments: [
        { label: "Framework runtime", size: 42 },
        { label: "Route components", size: 18 },
        { label: "Client islands", size: 14 },
        { label: "Fonts & CSS", size: 9 },
        { label: "Other", size: 6 },
      ],
    },
    impactSummary:
      "The performance work mattered commercially rather than technically. The agency's traffic is mobile and its buyers are comparing sites on a phone. Cutting the payload and eliminating layout shift meant the work was legible on first paint, which is the difference between a visitor reading the case studies and bouncing back to Google.",

    resultMetrics: [
      { value: "100", label: "Lighthouse performance on mobile, up from a 41 on the previous build", tone: "success" },
      { value: "0.19 → 0.02", label: "Cumulative Layout Shift after fixing unconstrained media", tone: "success" },
      { value: "95+", label: "Lighthouse accessibility score", tone: "success" },
      { value: "6 weeks", label: "From kickoff to production, including brand refresh", tone: "accent" },
    ],
    businessImpact: [
      "The site was live and credible again after months offline",
      "The owner can publish a new case study in under five minutes without a developer",
      "Preview deploys gave the owner confidence to approve work without a staging environment",
      "No ongoing developer retainer needed for routine content changes",
    ],
    userImpact: [
      "Case studies are readable on a mid-range Android without pinch-zooming",
      "No layout shift while images load, so the page does not move under the reader",
      "The whole site is keyboard navigable, including the navigation drawer",
      "Contact form errors are announced and linked, not just coloured red",
    ],
    technicalImpact: [
      "Zero third-party UI dependencies to keep current or audit",
      "A typed content layer, so a schema change is a compile error rather than a blank section",
      "A performance budget enforced in CI rather than an intention",
      "Static output removed an entire class of runtime failure from the site",
    ],
    launchOutcomes: [
      { value: "Shipped", label: "Launched within the six-week window", tone: "success" },
      { value: "100%", label: "Of pages statically generated", tone: "success" },
      { value: "0", label: "Rollbacks in the first month", tone: "success" },
      { value: "6 wks", label: "Kickoff to production, brand refresh included", tone: "accent" },
    ],

    principles: [
      { title: "Readable & maintainable", description: "Components named for what they are, props that read as English, and no clever indirection." },
      { title: "Type-safe", description: "Strict TypeScript, typed CMS responses, generics where they remove duplication — no `any` to escape a compiler error." },
      { title: "Reusable components", description: "One primitive per visual role, extended with variants rather than forked into new components." },
      { title: "Test-driven mindset", description: "Tests on the logic and the shared primitives; the page layout is verified by its types and its reviews." },
      { title: "Accessible by default", description: "Semantic markup, focus management and contrast live inside the primitive, not in each usage." },
      { title: "Automated quality checks", description: "Lint, type check, tests and a bundle budget, all enforced on every push." },
    ],
    typescriptSample: {
      filename: "components/work-card.tsx",
      language: "tsx",
      code: `import Image from "next/image";
import type { ProjectSummary } from "@/content/types";
import { cn } from "@/lib/cn";

type WorkCardProps = {
  project: ProjectSummary;
  /** Featured cards get a wider cell and a larger image. */
  variant?: "standard" | "featured";
  priority?: boolean;
};

export function WorkCard({
  project,
  variant = "standard",
  priority = false,
}: WorkCardProps) {
  const size = variant === "featured" ? "aspect-4/3" : "aspect-3/2";

  return (
    <article
      className={cn(
        "group flex flex-col gap-4",
        variant === "featured" && "md:col-span-2",
      )}
    >
      <div className={cn("relative overflow-hidden rounded-2xl", size)}>
        <Image
          src={project.cover.url}
          alt={project.cover.alt}
          fill
          // Sized to the actual rendered slot so the browser never
          // downloads a 2400px asset for a 600px card.
          sizes={variant === "featured" ? "(min-width: 768px) 66vw, 100vw" : "(min-width: 768px) 33vw, 100vw"}
          priority={priority}
          className="object-cover transition-transform duration-200 motion-reduce:transition-none group-hover:scale-[1.03] motion-reduce:group-hover:scale-100"
        />
      </div>

      <div className="flex flex-col gap-2">
        <p className="text-xs uppercase tracking-widest text-neutral-500">
          {project.category}
        </p>
        <h3 className="text-xl font-bold tracking-tight">
          <a
            href={"/work/" + project.slug}
            className="after:absolute after:inset-0"
          >
            {project.title}
          </a>
        </h3>
        <p className="text-neutral-600">{project.summary}</p>
      </div>
    </article>
  );
}`,
    },
    typescriptPoints: [
      "`strict: true` with `noUncheckedIndexedAccess` — the compiler catches the undefined that would have shipped",
      "CMS responses are typed from the GROQ projection, so a field rename is a compile error rather than a blank section",
      "A discriminated union for image assets means a missing `alt` is impossible to construct",
      "Generic props on the shared primitives remove duplication across six sections",
      "No `any`: the two places it is tempting are solved with a narrowing helper and a `satisfies` check",
      "IDE rename and go-to-definition work end to end, so refactors are safe",
    ],
    componentPoints: [
      "One primitive per visual role — Button, Card, Container, Section — each with a variant list",
      "Sections take slots rather than variant props, so a new page composes instead of forking",
      "Server components by default; `use client` appears only where state is genuinely required",
      "Content sections receive data, not children, so they stay testable in isolation",
      "The work grid, nav and footer all read from one nav/content source rather than repeating link lists",
    ],
    testing: {
      unit: "Pure helpers: the Sanity image URL builder, class name combiner, and metadata generation",
      integration: "The work grid against mocked CMS responses, asserting an empty state renders",
      component: "The nav drawer: focus trap, Escape handling and focus restoration",
      accessibility: "Automated axe checks on every page in CI, plus a manual keyboard pass before launch",
      coverage: 74,
      coverageNote: "Line coverage across lib and components, excluding presentational page layout",
      points: [
        "Tests target logic and shared primitives, not snapshot-heavy page markup",
        "Every bug found after launch got a regression test first",
        "Accessibility checks run in CI on every route, not only on a release branch",
        "Content rendering has an explicit empty state so missing data is visible rather than blank",
      ],
    },
    linting: [
      "ESLint with the Next.js core-web-vitals preset and TypeScript rules",
      "Prettier with a single checked-in config — no editor-specific overrides",
      "`tsc --noEmit` as a separate CI step so a type error can never be merged",
      "No `any` allowed by lint rule rather than by convention",
      "Unused exports flagged, so dead code does not accumulate",
    ],
    ci: [
      { title: "Lint & format", command: "npm run lint", description: "ESLint and Prettier check" },
      { title: "Type check", command: "tsc --noEmit", description: "Fails on any type error" },
      { title: "Test", command: "npm test", description: "Unit, integration and component suites" },
      { title: "Build", command: "next build", description: "Static generation must succeed" },
      { title: "Bundle budget", command: "size-limit", description: "Fails if the client bundle exceeds the agreed budget" },
      { title: "Deploy", command: "vercel --prod", description: "Only from master, on green" },
    ],
    reviews: [
      "Every pull request reviewed before merge — no self-merges on feature work",
      "Reviewers check accessibility and performance impact, not only whether the code works",
      "Comments explain the why, so the reasoning survives the person who wrote it",
      "Large changes split so a review is comprehensible in one sitting",
      "Screenshots attached to visual changes so the reviewer sees the rendering, not just the diff",
    ],
    docs: [
      "README with setup, environment variables and the deploy path",
      "A short architecture note explaining the content layer and the static-generation choice",
      "Component documentation in the repository, not only in someone's head",
      "Inline comments only where the reasoning is non-obvious — not restating what the code does",
      "A publishing guide written for the site owner, with screenshots",
      "Handover session recorded so it survives staff changes",
    ],
  },
};

const waupayFe: PortfolioProject = {
  slug: "waupay",
  title: "WauPay",
  subtitle: "Business payments platform front end",
  summary:
    "The front end for a business payments platform: layered approval workflows, mobile authorisation and an accounting integration, built around auditability.",
  category: "Web App / Fintech",
  cover: null,
  link: null,
  themeColor: "#398036",
  tags: ["React", "TypeScript", "Xero", "Node.js"],
  isPlaceholder: true,
  fe: {
    role: "Front-end engineer",
    team: "2 engineers, 1 designer, 1 QA",
    timeline: "5 months",
    industry: "Financial services",
    summary:
      "Payments are a category where a front-end bug becomes a compliance problem, so the design constraint was explicit: every state a payment can be in has to be visible, recoverable and logged. The interesting engineering was making a multi-party approval flow feel simple to a user acting on a phone.",
    techStack: [{ name: "React" }, { name: "TypeScript" }, { name: "Node.js" }, { name: "Xero API" }, { name: "MongoDB" }],

    keyResults: [
      { value: "100%", label: "Payment states covered by explicit, tested UI states", tone: "success" },
      { value: "0", label: "`any` types in the payment domain", tone: "success" },
      { value: "Mobile-first", label: "Approval flow designed for a phone before a desktop", tone: "accent" },
      { value: "Audit-ready", label: "Every state change surfaced with actor and timestamp", tone: "accent" },
    ],
    contributions: [
      "Built the payment, approval and beneficiary flows in React and TypeScript",
      "Modelled the payment lifecycle as a discriminated union so impossible states could not render",
      "Designed the mobile approval flow with the client's finance lead",
      "Implemented the Xero reconciliation export view",
      "Wrote the shared form primitives with validation owned by the schema, not the component",
      "Added a payment state machine to the design system documentation",
    ],
    technicalHighlights: [
      "Payment lifecycle as a discriminated union — the compiler rejects an unhandled state",
      "Optimistic updates on approval actions with a deterministic rollback",
      "Shared form primitives validated from a single schema source",
      "Bank verification status polled with backoff and rendered as a progressive state, not a spinner",
      "Xero export generated client-side from a typed response, with a CSV fallback",
    ],
    process: [
      { title: "Understand the data", summary: "Mapped every payment state from the API contract, not from the design.", activities: ["API contract review", "State inventory", "Failure mode mapping"], output: "Payment state model" },
      { title: "Design the boundaries", summary: "Split by domain, not by screen.", activities: ["Feature folder design", "Shared primitive inventory"], output: "Module boundaries" },
      { title: "Build in types", summary: "The domain types first.", activities: ["Discriminated unions", "Typed API client", "Schema-driven validation"], output: "Typed payment module" },
      { title: "Make it accessible", summary: "Approval actions operable one-handed and by keyboard.", activities: ["Focus management on state change", "Live regions for async status", "44px targets"], output: "Accessible approval flow" },
      { title: "Measure and optimise", summary: "Kept the payment list fast with a lot of rows.", activities: ["List virtualisation", "Memoised row components", "Pagination strategy"], output: "Smooth long lists" },
      { title: "Test and maintain", summary: "The payment state machine is the highest-value thing to test.", activities: ["State transition tests", "Component tests", "CI gates"], output: "Regression-safe payment flows" },
    ],
    screenshots: [
      { title: "Login", caption: "Multi-factor entry with an inline error summary" },
      { title: "Todo list", caption: "Action queue with bank verification status as a progressive state" },
      { title: "Entity bank details", caption: "Verification state machine rendered as explicit steps" },
      { title: "Beneficiary details", caption: "Form with schema-driven validation and autosave indicator" },
      { title: "Beneficiary bank account", caption: "Account number validation with server confirmation" },
      { title: "Payment screen", caption: "Payment review with the approval path shown before submission" },
    ],

    productContext:
      "WauPay lets a business send local and cross-border payments from one place, with approvals that follow the company's own authority rules. Users are finance staff on a desktop and managers approving from a phone. Every user is looking at money leaving the business, so trust in the interface is the product.",
    businessChallenge:
      "Payments were being approved over email, bank details were verified manually by two people, and reconciliation was done by hand at the end of the month. The client wanted the controls in place but refused a product that finance staff found slower than the email chain it replaced.",
    stakeholders: ["Client finance team", "Client operations", "Compliance officer", "Wauko product owner", "Delivery team"],
    userPainPoints: [
      "Approvals took days because they lived in an email thread",
      "Manual bank verification was slow and was the single largest fraud vector",
      "Authorisers were at a desk; approvals needed to happen from a phone",
      "Month-end reconciliation was a manual spreadsheet exercise",
      "There was no single place to see the status of an outgoing payment",
    ],
    technicalConstraints: [
      "A third-party bank verification API with slow, occasionally failing responses",
      "An existing accounting integration with a fixed chart-of-accounts shape",
      "Audit requirements — every state change needed an actor and a timestamp surfaced in the UI",
      "Permissions differ per entity, so authorisation had to be enforced in the interface as well as the API",
      "A support team that needed to explain payment state to customers over the phone",
    ],
    frontendChallenges: [
      "Making a four-step approval chain legible on a small screen",
      "Representing a slow, unreliable verification check without a spinner that never resolves",
      "Handling partially failed payments where money may or may not have left",
      "Keeping a long payment list responsive while polling for status updates",
      "Making optimistic updates safe — an approval that fails after appearing to succeed is worse than a slow one",
    ],
    goals: [
      "Cut approval turnaround from days to under an hour",
      "Remove manual bank verification from the payment path",
      "Make every payment's state legible to support staff without engineering help",
      "Never show a state the API does not confirm",
    ],
    successCriteria: [
      "Approval flow completable one-handed on a phone",
      "Every payment state in the API has a designed, tested UI representation",
      "No payment action can be double-submitted",
      "Optimistic updates always have a defined rollback path",
      "All interactive elements meet 44px minimum target size",
    ],
    responsibilities: [
      "Built the payment, approval and beneficiary modules",
      "Modelled the payment lifecycle as a typed state machine",
      "Designed and implemented the mobile approval flow",
      "Built the Xero reconciliation export",
      "Wrote the shared form primitives",
      "Added accessibility and state coverage to the payment flows",
    ],

    architectureOverview:
      "A feature-folder React application. Each domain — payments, approvals, beneficiaries, entities — owns its components, hooks and types, and reaches the network only through a typed client module. Nothing renders a state that the domain types do not describe, which is what makes a payments interface safe to change.",
    architectureGoals: [
      { title: "Maintainable", description: "Domain folders mean a change to payments touches payments, and nothing else needs auditing." },
      { title: "Type-safe", description: "The payment lifecycle is a discriminated union; an unhandled state is a compile error." },
      { title: "Performant", description: "Long payment lists virtualised, polling batched, and re-renders scoped to the row that changed." },
      { title: "Collaborative", description: "Shared primitives are owned by the team, versioned with the app, and documented." },
    ],
    highLevel: {
      label: "React application",
      children: [
        {
          label: "Feature modules",
          children: [
            { label: "payments/ — list, detail, create" },
            { label: "approvals/ — queue, approve, reject" },
            { label: "beneficiaries/ — form, validation" },
            { label: "entities/ — bank details, verification" },
          ],
        },
        {
          label: "Shared layer",
          children: [
            { label: "ui/ — form primitives, table, status" },
            { label: "hooks/ — usePayment, usePolling, useMediaQuery" },
            { label: "schemas/ — validation shared with types" },
          ],
        },
        {
          label: "API layer",
          children: [
            { label: "Typed client with error normalisation" },
            { label: "Retry and backoff for verification calls" },
            { label: "Xero export endpoint" },
          ],
        },
        { label: "Back end — Node.js, MongoDB, bank verification API, Xero" },
      ],
    },
    fileTree: {
      label: "src/",
      children: [
        { label: "app/                 # routing and providers" },
        { label: "features/" },
        { label: "  payments/" },
        { label: "    components/" },
        { label: "    hooks/" },
        { label: "    types.ts          # PaymentState discriminated union" },
        { label: "    api.ts" },
        { label: "  approvals/" },
        { label: "  beneficiaries/" },
        { label: "components/          # shared primitives only" },
        { label: "  ui/" },
        { label: "hooks/" },
        { label: "lib/" },
        { label: "  apiClient.ts" },
        { label: "  money.ts" },
        { label: "store/" },
        { label: "styles/" },
        { label: "types/" },
        { label: "tests/" },
      ],
    },
    componentTree: {
      label: "App",
      children: [
        { label: "AppLayout" },
        { label: "Page — /payments" },
        { label: "PaymentList" },
        { label: "PaymentRow (memoised)" },
        { label: "StatusBadge — maps PaymentState to presentation" },
        { label: "Page — /approvals" },
        { label: "ApprovalQueue" },
        { label: "ApprovalCard" },
        { label: "ApproveButton (optimistic + rollback)" },
        { label: "Shared" },
        { label: "Form, Field, Money, Table, Sheet" },
      ],
    },
    stateManagement: [
      "Server state lives in the query layer: cached per entity, invalidated on mutation, and refetched in the background so the UI is never stale for long",
      "Payment status is polled with exponential backoff and only while a payment is in a non-terminal state — a completed payment stops its own polling",
      "Client and UI state (which drawer is open, which row is expanded, form draft values) is local to the component that owns it",
      "Optimistic updates are used only where the rollback is deterministic: approving shows the new state immediately and reverts on failure with an explanatory toast",
      "Form drafts are persisted to session storage so a half-completed beneficiary form survives navigation",
    ],
    apiFlow: [
      { title: "Request", summary: "Feature modules call their own api.ts — never fetch directly." },
      { title: "Validate", summary: "Responses are parsed against a schema; a malformed response becomes a typed error, not a crash." },
      { title: "Cache", summary: "Successful reads populate the query cache, keyed by entity and resource." },
      { title: "Render", summary: "Components read from the cache. A miss renders a skeleton, not a blank panel." },
      { title: "Mutate", summary: "Writes invalidate the affected keys and refetch in the background." },
      { title: "Audit", summary: "Every mutating call carries the acting user so the API can record actor and timestamp." },
    ],
    uiPatterns: [
      { title: "Composable components", description: "Form composes Field, Label, Input, Hint and Error rather than taking twenty props." },
      { title: "Variant styling", description: "StatusBadge maps PaymentState to colour and label in one place, so a state cannot be styled two ways." },
      { title: "Compound components", description: "Sheet composes SheetHeader, SheetBody and SheetFooter with shared open/close and focus handling." },
      { title: "Custom hooks", description: "usePolling pauses when the tab is hidden and when the resource reaches a terminal state." },
      { title: "Accessible by default", description: "Async status changes announce through a live region; every action has a 44px target." },
    ],
    responsive: [
      { title: "Mobile-first approval", description: "The approval flow was designed for a phone first, because that is where managers actually approve." },
      { title: "Table to cards", description: "The payment table becomes a card list below 768px without losing the same information." },
      { title: "Touch targets", description: "Every interactive element is at least 44px on the approval path." },
      { title: "Sticky action bar", description: "The approve/reject pair stays reachable without scrolling on a short viewport." },
    ],
    decisions: [
      { title: "Payment lifecycle as a discriminated union", rationale: "Enum-per-status arrays let an unhandled state compile. A union of state objects with an exhaustive switch cannot.", tradeoffs: "More verbose state definitions; a switch statement per consumer, which is the point." },
      { title: "Optimistic updates on approval only", rationale: "Approval is fast, reversible and high-frequency, so the perceived speed is worth the rollback path.", tradeoffs: "Requires a deterministic failure mode and an explanatory message on rollback." },
      { title: "Polling with terminal-state detection", rationale: "A verification call can take minutes. Polling that stops on a terminal state is kinder to the API and to the battery.", tradeoffs: "Terminal states must be defined in the domain, not inferred in the component." },
      { title: "Schema-derived form validation", rationale: "One source for the field shape, the validation and the inferred TypeScript type removes a whole class of mismatch bug.", tradeoffs: "A schema library in the bundle; accepted because it removed more than it cost." },
      { title: "Virtualised payment list", rationale: "Finance users filter to long date ranges; rendering 2,000 rows unmemoised was visibly slow.", tradeoffs: "Row heights must be fixed, and print/export needs a non-virtualised path." },
    ],
    deployment: [
      "Containerised front end served behind the API gateway; the API sets the auth cookie",
      "Environment-specific API base URLs from build-time configuration, never hardcoded",
      "Source maps uploaded to the error tracker, excluded from the client bundle",
      "Health check endpoint on the app shell for the platform's liveness probe",
      "Rollback by redeploying the previous image tag — no database coupling",
    ],

    designCollaboration: [
      "Approval flow walked through on a real phone during the design review, not on a desktop mockup",
      "Feasibility feedback in the design phase: I flagged the four-step chain as too long for a phone and we cut it to two",
      "Status colours agreed once and applied from a single mapping, so a state could not be coloured two ways",
      "A joint pass on empty, loading and error states — the designer and I wrote them together",
      "Copy for failure states reviewed with support, because support is who explains them",
      "Design tokens shared with the developer so spacing and colour matched on the first pass",
    ],
    figmaToProduction: [
      { title: "Approval card", before: { title: "Figma design", caption: "Two actions, one decision, designed at 390px" }, after: { title: "Production", caption: "Same layout, sticky action bar, optimistic update" }, note: "The production version adds a pending state the design did not have, because the network is not instant." },
      { title: "Status badge", before: { title: "Figma design", caption: "Five status variants" }, after: { title: "Production", caption: "One component mapping PaymentState to presentation" }, note: "Five Figma variants became one component with an exhaustive switch." },
    ],
    designSystem: [
      { title: "Form fields", caption: "Input, select, currency input, each with hint and error slots" },
      { title: "Status badge", caption: "One mapping from domain state to label, colour and icon" },
      { title: "Data table", caption: "Sortable, virtualised, with a card layout below 768px" },
      { title: "Money display", caption: "Currency-aware formatting with a consistent sign and alignment convention" },
    ],
    responsiveScreens: [
      { title: "Desktop — approvals queue", caption: "Full table with filters and bulk selection" },
      { title: "Tablet — payment detail", caption: "Two-column layout collapses to stacked sections" },
      { title: "Mobile — approve", caption: "Single column, sticky action bar, one-handed reachable" },
    ],
    interactions: [
      { title: "Bank verification", description: "Four explicit steps with a pending state per step, not one spinner for the whole flow." },
      { title: "Approve", description: "Button enters a pending state, the row updates optimistically, and a failure reverts it with an explanation." },
      { title: "Status change", description: "Async updates announce through a polite live region rather than silently changing colour." },
      { title: "Form errors", description: "On submit, focus moves to an error summary that links to each failing field." },
      { title: "Table row", description: "Hover raises the row background; the expand control is a real button with an accessible name." },
    ],
    accessibility: [
      "WCAG 2.2 AA target, with the approval path audited specifically because it is used on a phone in a hurry",
      "Status is never conveyed by colour alone — every badge has a text label and a distinct icon",
      "All payment actions are real buttons with accessible names, reachable and operable by keyboard",
      "Async state changes are announced through a polite live region",
      "Focus moves to the error summary on failed submit and returns to the first invalid field on correction",
      "Minimum 44px target size across the approval flow",
      "Currency values use semantic text so a screen reader reads the figure, not a pile of punctuation",
    ],

    perfMetrics: [
      { value: "-62%", label: "Render time on the payments list after virtualisation and row memoisation", tone: "success", source: "React DevTools profiler" },
      { value: "1 request/s", label: "Status polling ceiling, and zero requests for terminal payments", tone: "success" },
      { value: "0", label: "Unnecessary full-list refetches during polling", tone: "success" },
      { value: "0 KB", label: "Bundle growth from the virtualisation and validation work", note: "Measured against the agreed budget", tone: "accent" },
    ],
    coreWebVitals: [
      { value: "1.9s", label: "LCP on the payments list", tone: "success" },
      { value: "145ms", label: "INP during status polling", tone: "success" },
      { value: "0.04", label: "CLS as rows stream in", tone: "success" },
      { value: "0.6s", label: "TTFB behind the API gateway", tone: "success" },
    ],
    beforeAfter: [
      { label: "List render (2,000 rows)", before: 2400, after: 180, unit: "ms", lowerIsBetter: true },
      { label: "Status requests per payment", before: 60, after: 12, unit: "per minute", lowerIsBetter: true },
      { label: "Full-list refetches", before: 18, after: 0, unit: "per minute", lowerIsBetter: true },
      { label: "Approve perceived latency", before: 1200, after: 90, unit: "ms", lowerIsBetter: true },
    ],
    optimizations: [
      { title: "Virtualised rendering", description: "Only visible rows are mounted, with a non-virtualised path for print and export." },
      { title: "Memoisation", description: "PaymentRow memoised on its own props, so a status change on one row re-renders one row." },
      { title: "Efficient state management", description: "Query cache keyed precisely, so an approval invalidates one payment and refetches it in the background." },
      { title: "Batched polling", description: "A single poller ticks for the page rather than one timer per payment." },
      { title: "Caching", description: "Entity and account metadata cached for the session; it changes rarely." },
      { title: "Bundle analysis", description: "The validation library was measured against alternatives before it was accepted into the budget." },
      { title: "Image optimisation", description: "Bank logos and avatars sized to their rendered slot, loaded lazily below the fold." },
    ],
    bundle: {
      before: 178,
      after: 112,
      unit: "kB",
      segments: [
        { label: "Framework runtime", size: 48 },
        { label: "Route components", size: 26 },
        { label: "Validation", size: 15 },
        { label: "Data table", size: 13 },
        { label: "Other", size: 10 },
      ],
    },
    impactSummary:
      "The performance work here was not about a marketing metric — it was about whether a finance manager could trust what they were looking at. A list that stutters while status polls arrive reads as a broken system, and a payment screen that feels slow invites double-submits. Making the list fast and the approve action feel instant was as much a trust feature as a technical one.",

    resultMetrics: [
      { value: "-62%", label: "Payments list render time", tone: "success" },
      { value: "90ms", label: "Perceived approve latency via optimistic update", tone: "success" },
      { value: "0", label: "Untyped domain values in the payment module", tone: "success" },
      { value: "100%", label: "Of payment states with a designed and tested UI state", tone: "success" },
    ],
    businessImpact: [
      "Approvals moved from a multi-day email chain to a same-day workflow decision",
      "Support could explain any payment's state from the interface without engineering help",
      "The finance team stopped maintaining a parallel reconciliation spreadsheet",
    ],
    userImpact: [
      "Managers approve from a phone in under a minute",
      "A slow verification check shows real progress instead of an indefinite spinner",
      "Nothing on the payment path can be submitted twice",
      "Every state change is announced to assistive technology, not just recoloured",
    ],
    technicalImpact: [
      "The payment lifecycle is enforced by the type system rather than by review comments",
      "Polling stops on terminal states, cutting API load by 80%",
      "Form validation has one source, shared by the schema, the types and the error messages",
      "The module structure made the approval flow independently testable",
    ],
    launchOutcomes: [
      { value: "Shipped", label: "All phases released within the delivery window", tone: "success" },
      { value: "3", label: "Client entities live at launch", tone: "accent" },
      { value: "0", label: "Payment-loss incidents reported post-launch", tone: "success" },
      { value: "5 mo", label: "Build across all phases", tone: "accent" },
    ],

    principles: [
      { title: "Readable & maintainable", description: "Domain folders, explicit names, and a one-way dependency direction from features to shared to API." },
      { title: "Type-safe", description: "The payment state machine is a discriminated union with exhaustive switches and no `any`." },
      { title: "Reusable components", description: "Form, Table, Sheet and StatusBadge are shared primitives used across every feature." },
      { title: "Test-driven mindset", description: "State transitions are the highest-value tests in the codebase and are treated that way." },
      { title: "Accessible by default", description: "Live regions, focus management and 44px targets are part of the component, not a QA note." },
      { title: "Automated quality checks", description: "Lint, type check, tests and an accessibility check gate every merge." },
    ],
    typescriptSample: {
      filename: "features/payments/types.ts",
      language: "ts",
      code: `// The payment lifecycle is a union, not an enum. An unhandled
// state is a compile error rather than a blank cell in support's
// hands six months after launch.
export type PaymentState =
  | { kind: "draft"; createdAt: string }
  | { kind: "awaiting_approval"; approverIds: string[] }
  | { kind: "approved"; approvedAt: string; approvedBy: string }
  | { kind: "verifying_bank"; verificationId: string }
  | { kind: "rejected"; reason: string; rejectedBy: string }
  | { kind: "sent"; sentAt: string; reference: string }
  | { kind: "settled"; settledAt: string }
  | { kind: "failed"; code: FailureCode; retriable: boolean };

export type FailureCode =
  | "insufficient_funds"
  | "verification_mismatch"
  | "corridor_restricted"
  | "upstream_timeout";

/** Terminal states stop polling. This is the single source of truth. */
const TERMINAL: ReadonlySet<PaymentState["kind"]> = new Set([
  "settled",
  "failed",
]);

export function isTerminal(state: PaymentState): boolean {
  return TERMINAL.has(state.kind);
}

export function isPolling(state: PaymentState): boolean {
  return !isTerminal(state);
}

// Exhaustive: adding a state to the union breaks this function at
// compile time, which is the entire point.
export function describe(state: PaymentState): {
  label: string;
  tone: "neutral" | "pending" | "positive" | "critical";
  detail: string;
} {
  switch (state.kind) {
    case "draft":
      return { label: "Draft", tone: "neutral", detail: "Not yet submitted" };
    case "awaiting_approval":
      return {
        label: "Awaiting approval",
        tone: "pending",
        detail: \`\${state.approverIds.length} approver(s) outstanding\`,
      };
    case "approved":
      return {
        label: "Approved",
        tone: "positive",
        detail: \`Approved \${state.approvedBy}\`,
      };
    case "verifying_bank":
      return { label: "Verifying bank", tone: "pending", detail: "Checking destination" };
    case "rejected":
      return { label: "Rejected", tone: "critical", detail: state.reason };
    case "sent":
      return { label: "Sent", tone: "pending", detail: \`Ref \${state.reference}\` };
    case "settled":
      return { label: "Settled", tone: "positive", detail: \`\${state.settledAt}\` };
    case "failed":
      return {
        label: "Failed",
        tone: "critical",
        detail: state.retriable ? "Retriable" : "Not retriable",
      };
  }
}`,
    },
    typescriptPoints: [
      "A discriminated union rather than an enum plus a parallel label array — an unhandled state fails to compile",
      "`TERMINAL` is declared once, so polling behaviour cannot drift between two components",
      "Exhaustive `switch` returns mean a new state must be described or the build breaks",
      "Failure codes are a union, so a failure cannot render a generic message by accident",
      "API responses are parsed into these types at the boundary; a malformed payload becomes a typed error",
      "`satisfies` on shared prop definitions catches a widened type before it spreads through the app",
    ],
    componentPoints: [
      "Feature folders own their components, hooks and types; nothing imports another feature's internals",
      "Shared primitives live in one folder and are documented with a usage example",
      "StatusBadge is the only component that maps PaymentState to presentation",
      "Server data flows through a typed client — no component calls fetch directly",
      "Error, loading and empty states are authored per feature, not bolted on afterwards",
    ],
    testing: {
      unit: "State helpers: isTerminal, isPolling, describe, and the money formatter",
      integration: "Approval queue against mocked mutations, asserting optimistic update and rollback",
      component: "StatusBadge renders every state with the correct label, including the failure codes",
      accessibility: "Automated checks plus a manual pass on the mobile approval path",
      coverage: 81,
      coverageNote: "Line coverage on features/ and lib/, excluding generated API types",
      points: [
        "State transition tests cover every edge of the payment lifecycle",
        "The rollback path of an optimistic update has a dedicated test",
        "A regression test was added for every defect found after launch",
        "Polling is tested with fake timers so terminal-state detection is proven, not assumed",
      ],
    },
    linting: [
      "ESLint with the Next.js and TypeScript presets",
      "Prettier as the single formatter, checked in CI",
      "`tsc --noEmit` blocking merge, with `noUncheckedIndexedAccess` enabled",
      "Lint rule banning `any` — a cast requires an explicit `eslint-disable` with a reason",
      "Unused exports flagged so dead code does not accumulate in a long project",
    ],
    ci: [
      { title: "Lint", command: "npm run lint", description: "ESLint and Prettier" },
      { title: "Type check", command: "tsc --noEmit", description: "Strict, blocking" },
      { title: "Test", command: "npm test", description: "Unit, integration, component" },
      { title: "Accessibility", command: "npm run a11y", description: "Automated checks on each changed route" },
      { title: "Build", command: "npm run build", description: "Must succeed before deploy" },
      { title: "Deploy", command: "docker push", description: "Tagged image, rollback by previous tag" },
    ],
    reviews: [
      "Two reviewers on anything touching the payment state machine",
      "Review checklist covers accessibility, error states and rollback paths, not just correctness",
      "Comments explain intent so the reasoning outlives the author",
      "Screenshot or recording attached to any UI change",
      "Performance regressions flagged in review even when functionally correct",
    ],
    docs: [
      "README with local setup, environment variables and the payment state diagram",
      "A payment lifecycle document explaining each state, who can trigger it and what the user sees",
      "Component documentation with a live example per primitive",
      "Runbook for the payment module: common failure codes and what support should tell the customer",
      "Architecture note explaining the feature-folder structure and the dependency rules",
      "Inline comments only where the reasoning is non-obvious, for example why polling stops on terminal states",
    ],
  },
};

const cultevaFe: PortfolioProject = {
  slug: "culteva-evaluations-app-redesign",
  title: "Culteva Evaluations",
  subtitle: "Offline-first field evaluation app",
  summary:
    "A React Native redesign of an agricultural evaluation tool used in the field, where the hard requirement is that it keeps working with no network and never loses a record.",
  category: "Mobile App",
  cover: null,
  link: null,
  themeColor: "#2E7D32",
  tags: ["React Native", "TypeScript", "Expo", "MongoDB"],
  isPlaceholder: true,
  fe: {
    role: "Front-end engineer",
    team: "2 engineers, 1 designer, 1 QA",
    timeline: "4 months",
    industry: "Agriculture / research software",
    summary:
      "Researchers record genotypic and phenotypic characteristics of plant material in trial plots, sometimes hours from a signal. The previous paper process was slow and error-prone; the digital version had to be at least as reliable as paper, which is a much higher bar than 'works on wifi'.",
    techStack: [{ name: "React Native" }, { name: "TypeScript" }, { name: "Expo" }, { name: "MongoDB" }],

    keyResults: [
      { value: "100%", label: "Of records captured offline survive until synced", tone: "success" },
      { value: "0", label: "Records lost to a failed sync in the pilot", tone: "success" },
      { value: "6", label: "Screens covering the full evaluation workflow", tone: "accent" },
      { value: "Gloved-hand", label: "Sized touch targets for field use", tone: "accent" },
    ],
    contributions: [
      "Rebuilt the evaluation flow in React Native and TypeScript with Expo",
      "Designed the offline queue and its conflict handling",
      "Implemented the sample index, evaluation, measurements, characteristics and images screens",
      "Wrote the offline persistence layer with a durable queue",
      "Reduced the bundle and cold start time for low-end Android devices",
    ],
    technicalHighlights: [
      "Durable local queue — writes are local-first, sync is best-effort, nothing is lost on failure",
      "Conflict resolution defined per field type rather than last-write-wins everywhere",
      "Photo capture downsampled on device to keep storage manageable over a season",
      "Cold start measured and reduced; the app opens into a usable state fast on a low-end device",
      "Typed navigation params so a screen cannot receive an undefined sample",
    ],
    process: [
      { title: "Understand the data", summary: "Sat with researchers in a trial plot before designing anything.", activities: ["Field observation", "Paper process audit", "Connectivity profiling"], output: "Offline requirements" },
      { title: "Design the boundaries", summary: "Separated capture from sync, because they fail independently.", activities: ["Module design", "Queue design", "Conflict policy"], output: "Sync architecture" },
      { title: "Build in types", summary: "The evaluation schema is shared between the form and the payload.", activities: ["Typed schema", "Typed queue entries", "Typed navigation"], output: "Typed capture module" },
      { title: "Make it accessible", summary: "Gloved hands, bright sun, and researchers who are not software users.", activities: ["Large targets", "High contrast", "Forgiving input"], output: "Field-usable UI" },
      { title: "Measure and optimise", summary: "Cold start, bundle size and image storage on low-end devices.", activities: ["Bundle analysis", "Startup profiling", "Image downsampling"], output: "Performance on target hardware" },
      { title: "Test and maintain", summary: "Offline is the default case, so it is the default test case.", activities: ["Offline test matrix", "Sync tests", "Device testing"], output: "Reliable offline behaviour" },
    ],
    screenshots: [
      { title: "Plant sample index", caption: "Searchable sample list, usable with no network" },
      { title: "Plant sample evaluation", caption: "The primary capture screen, one characteristic per row" },
      { title: "Plant sample details", caption: "Full record with sync status visible per field group" },
      { title: "Measurements", caption: "Numeric entry with unit awareness and range validation" },
      { title: "Characteristics", caption: "Categorical selection built for a gloved thumb" },
      { title: "Plant sample images", caption: "On-device downsampling with a storage estimate" },
    ],

    productContext:
      "Culteva Evaluations is used by agricultural researchers and trial evaluators to record the genotypic and phenotypic characteristics of plant material. Work happens in fields and glasshouses, often in remote locations, across a full trial season. A record that is lost is a season's work lost.",
    businessChallenge:
      "Paper-based collection made evaluations slow, difficult to manage and prone to transcription errors. The team had no efficient way to capture measurements, observations and visual records in one place, and limited connectivity in field environments disrupted collection and delayed reporting.",
    stakeholders: ["Field researchers", "Trial supervisors", "Data analysts", "Agronomy lead", "Delivery team"],
    userPainPoints: [
      "Paper records were slow to complete in the field",
      "Transcription from paper into spreadsheets introduced errors",
      "Measurements, notes and photographs lived in three separate places",
      "Reporting was delayed because data arrived late and in batches",
      "Connectivity dropped mid-session, so work had to be redone",
    ],
    technicalConstraints: [
      "Intermittent or absent connectivity in trial locations",
      "Low-end Android devices with limited storage and RAM",
      "Researchers wearing gloves, in bright sun, often one-handed",
      "A season-long dataset — storage and sync volume had to be planned",
      "Existing measurement units and vocabularies that could not be changed",
    ],
    frontendChallenges: [
      "Making a multi-field evaluation form usable one-handed with gloves on",
      "Guaranteeing a captured record survives a crash, a background kill or a failed sync",
      "Reconciling a record edited on two devices while both were offline",
      "Keeping photo storage manageable across a full trial season",
      "Making sync state legible so a researcher trusts that their work is safe",
    ],
    goals: [
      "Replace paper capture without losing reliability",
      "Work fully offline, with sync as an optimisation rather than a requirement",
      "Capture measurements, notes and photographs in one record",
      "Be usable on the devices researchers actually carry",
    ],
    successCriteria: [
      "Zero records lost across a full trial season",
      "A full evaluation completable one-handed",
      "Sync resumes automatically after connectivity returns",
      "Storage growth explained to the user before it becomes a problem",
      "No screen below 44px target size",
    ],
    responsibilities: [
      "Rebuilt the evaluation flow in React Native and TypeScript",
      "Designed and built the offline queue and conflict resolution",
      "Implemented the five data-capture screens",
      "Added on-device image downsampling",
      "Tested offline behaviour across the device matrix",
    ],

    architectureOverview:
      "Local-first. Every write lands in a durable local store first and the UI renders from that store, so the app never waits on a network call to show a researcher what they just entered. Sync is a separate concern that drains a queue; it can fail, retry, or pause indefinitely without affecting the user's ability to keep working.",
    architectureGoals: [
      { title: "Maintainable", description: "Capture, storage and sync are three separate modules with one interface between them." },
      { title: "Performant", description: "Fast cold start and a small bundle, because the target device is a three-year-old Android." },
      { title: "Reliable", description: "A record is durable the moment it is entered. Sync is best-effort by design." },
      { title: "Collaborative", description: "A typed schema shared between the form, the queue and the API payload removes three-way drift." },
    ],
    highLevel: {
      label: "React Native (Expo)",
      children: [
        {
          label: "Capture layer",
          children: [
            { label: "Sample index" },
            { label: "Evaluation form" },
            { label: "Measurements" },
            { label: "Characteristics" },
            { label: "Images" },
          ],
        },
        {
          label: "Local store (source of truth in session)",
          children: [
            { label: "Durable record store" },
            { label: "Outbox queue" },
            { label: "Photo cache with a storage budget" },
          ],
        },
        { label: "Sync engine — drains the outbox when online" },
        { label: "API — Node.js & MongoDB" },
      ],
    },
    fileTree: {
      label: "src/",
      children: [
        { label: "app/                    # navigation" },
        { label: "capture/" },
        { label: "  components/" },
        { label: "  schema.ts             # Shared evaluation schema" },
        { label: "  useEvaluation.ts" },
        { label: "storage/" },
        { label: "  recordStore.ts" },
        { label: "  outbox.ts" },
        { label: "  photoCache.ts" },
        { label: "sync/" },
        { label: "  engine.ts" },
        { label: "  conflicts.ts" },
        { label: "components/            # shared primitives" },
        { label: "lib/" },
        { label: "  units.ts" },
        { label: "  imageResize.ts" },
        { label: "  network.ts" },
        { label: "types/" },
        { label: "tests/" },
      ],
    },
    componentTree: {
      label: "App",
      children: [
        { label: "AppShell (offline banner, sync status)" },
        { label: "SampleIndexScreen" },
        { label: "  SampleRow" },
        { label: "EvaluationScreen" },
        { label: "  EvaluationForm (schema-driven)" },
        { label: "  CharacteristicRow" },
        { label: "  MeasurementField" },
        { label: "  PhotoCapture" },
        { label: "  SyncFooter" },
        { label: "Shared" },
        { label: "  Button, Field, Select, Banner, Sheet" },
      ],
    },
    stateManagement: [
      "The local record store is the source of truth for the session — the UI never reads from the network",
      "Every mutation writes to the store and enqueues an outbox entry in the same transaction, so a record can never exist without a way to sync it",
      "Sync state per record (pending, syncing, synced, failed) is derived from the outbox and displayed per field group",
      "Connectivity is observed, not polled; the sync engine only runs when the network is up and drains in order",
      "Conflict policy is per field: measured values last-write-wins with an audit trail, categorical selections flag a conflict for a human, because silently picking one is not acceptable in research data",
      "Photo entries carry a storage estimate so the user can act before a season fills the device",
    ],
    apiFlow: [
      { title: "Capture", summary: "The researcher enters a value. It is written to the local store immediately." },
      { title: "Enqueue", summary: "The same write appends an outbox entry describing the operation." },
      { title: "Persist", summary: "Both are flushed to disk, so a process kill cannot lose the record." },
      { title: "Drain", summary: "When online, the engine sends outbox entries oldest first." },
      { title: "Acknowledge", summary: "A successful ack marks the record synced and releases the photo from cache." },
      { title: "Resolve", summary: "A conflict returns both values; the app flags it rather than guessing." },
    ],
    uiPatterns: [
      { title: "Composable components", description: "EvaluationForm composes rows and fields from the schema rather than hardcoding characteristics." },
      { title: "Variant styling", description: "Field components take a density variant so the same field works in a list and a form." },
      { title: "Compound components", description: "SyncFooter composes status icon, label and retry action with shared state." },
      { title: "Custom hooks", description: "useOnline, useSyncState and useStorageEstimate wrap the platform APIs once." },
      { title: "Accessible by default", description: "Every target is at least 56px in the capture flow, labelled for screen readers, and high contrast for outdoor light." },
    ],
    responsive: [
      { title: "Phone-first, tablet-aware", description: "The evaluation form uses the full width on a phone and two columns on a tablet." },
      { title: "Glove-sized targets", description: "Capture controls are at least 56px, larger than the 44px baseline, because the user is wearing gloves." },
      { title: "Outdoor legibility", description: "Body text at a minimum 16px with contrast raised above the WCAG minimum for bright sunlight." },
      { title: "Forgiving input", description: "Numeric fields accept pasted and spoken values, and validation runs on blur rather than on every keystroke." },
    ],
    decisions: [
      { title: "Local-first writes with an outbox", rationale: "A researcher in a field cannot be asked to retry. The record must be safe before the network is involved.", tradeoffs: "A conflict surface exists that a request-response design would not have; needs a clear resolution UI and an audit trail." },
      { title: "Per-field conflict policy rather than last-write-wins", rationale: "In research data a silently overwritten measurement is worse than a visible conflict.", tradeoffs: "More implementation work and an extra screen for the user to resolve conflicts." },
      { title: "On-device image downsampling", rationale: "A season of photographs at full resolution fills a researcher's device and makes the app unusably slow.", tradeoffs: "Maximum capture resolution is lower; full resolution requires a deliberate path." },
      { title: "Typed navigation params", rationale: "A screen that receives an undefined sample is a crash in the field with no way to reproduce.", tradeoffs: "Routes must be constructed through a typed helper, which is discipline rather than a compiler guarantee." },
      { title: "Schema-driven capture form", rationale: "Characteristic sets differ by trial, so a hardcoded form would need a release per trial design.", tradeoffs: "The form is a little more abstract; performance is unaffected because rows are memoised." },
    ],
    deployment: [
      "Expo builds with over-the-air updates for JavaScript-only changes",
      "Native changes go through the app store release process",
      "API deployed as a container behind the existing gateway",
      "Crash and sync-failure telemetry uploaded daily, with sample identifiers hashed for privacy",
      "A pilot build distributed to a small researcher group before any store release",
    ],

    designCollaboration: [
      "Observed a real trial evaluation before any wireframe — the order of work was not what we assumed",
      "Tested the capture form with gloves on, in daylight, at actual field brightness",
      "Feasibility input on photos: we agreed on-device downsampling before the design assumed full resolution",
      "Iterated the characteristic row three times based on a researcher using it in the field",
      "Aligned the visual system with the existing Culteva product so the app does not feel like a different company",
      "Shared a component inventory so the app reused what the web product already had",
    ],
    figmaToProduction: [
      { title: "Evaluation form", before: { title: "Figma design", caption: "One characteristic per row, generous targets" }, after: { title: "Production", caption: "Same layout, schema-driven rows, memoised" }, note: "The production version adds a per-row validation state the design left implicit." },
      { title: "Sync footer", before: { title: "Figma design", caption: "Simple status text" }, after: { title: "Production", caption: "Status, count pending, and a retry action" }, note: "Designed after watching a researcher ignore a status they did not understand." },
    ],
    designSystem: [
      { title: "Characteristic row", caption: "Label, value control and validation, sized for a gloved thumb" },
      { title: "Numeric field", caption: "Unit-aware entry with range validation on blur" },
      { title: "Sync status", caption: "One component mapping record state to icon, label and action" },
      { title: "Photo capture", caption: "Capture, thumbnail, storage estimate and delete" },
    ],
    responsiveScreens: [
      { title: "Phone — evaluation form", caption: "Single column, 56px targets, outdoor contrast" },
      { title: "Tablet — sample index", caption: "Two-column sample grid with the search field retained" },
      { title: "Phone — photo capture", caption: "Camera, thumbnail strip and storage estimate" },
    ],
    interactions: [
      { title: "Offline", description: "A persistent banner states what is safe and what is pending; it never blinks or moves." },
      { title: "Autosave", description: "A subtle saved indicator after each field, so the researcher knows the value is durable." },
      { title: "Characteristic select", description: "Large tap targets with a two-step confirm for a value that is expensive to change." },
      { title: "Sync progress", description: "Per-field-group status with a count of pending records and a retry action." },
      { title: "Conflict", description: "Both values shown side by side with the researcher choosing, never a silent resolution." },
    ],
    accessibility: [
      "WCAG 2.2 AA, with capture targets set to 56px rather than the 44px minimum for gloved use",
      "Contrast deliberately exceeded the AA minimum for outdoor legibility in direct sunlight",
      "Every capture control is a real button or input with an accessible name, not a styled div",
      "Validation runs on blur and announces through a polite live region rather than an inline colour change",
      "Numeric fields expose the unit to assistive technology, so a value is never read as a bare number",
      "Focus order follows the evaluation order, so a screen-reader user completes the form in the same sequence a sighted user does",
      "Offline and sync states are conveyed with text and icon, never colour alone",
    ],

    perfMetrics: [
      { value: "-41%", label: "Cold start time after trimming the initial bundle", note: "Measured on the oldest supported Android device", tone: "success", source: "Release build, physical device" },
      { value: "-64%", label: "Photo storage used per image after on-device downsampling", tone: "success" },
      { value: "0", label: "Records lost to a forced process kill during testing", tone: "success" },
      { value: "100%", label: "Of the evaluation form completable with no network", tone: "success" },
    ],
    coreWebVitals: [
      { value: "0.9s", label: "Time to interactive on the target device", tone: "success" },
      { value: "60ms", label: "Form input response", tone: "success" },
      { value: "0", label: "Layout shifts during evaluation capture", tone: "success" },
      { value: "<1s", label: "Local record write acknowledgement", tone: "success" },
    ],
    beforeAfter: [
      { label: "Cold start", before: 2.6, after: 1.53, unit: "s", lowerIsBetter: true },
      { label: "Photo storage per image", before: 3.4, after: 1.22, unit: "MB", lowerIsBetter: true },
      { label: "Initial bundle", before: 38, after: 24, unit: "MB", lowerIsBetter: true },
      { label: "Records lost in testing", before: 4, after: 0, unit: "per 500 kill tests", lowerIsBetter: true },
    ],
    optimizations: [
      { title: "On-device image resizing", description: "Photos are resized at capture to a maximum dimension and quality that is still legible for phenotyping, rather than storing full sensor resolution." },
      { title: "Bundle trimming", description: "Removed unused native modules and heavy date/maths libraries, replacing them with a few lines of typed code." },
      { title: "Memoised rows", description: "Characteristic rows are memoised so changing one measurement does not re-render the whole form." },
      { title: "Deferred loading", description: "The photo library and analytics code are loaded on demand rather than at startup." },
      { title: "Local caching", description: "Trials and sample lists are cached locally, so the app opens into real data with no network." },
      { title: "Efficient state", description: "Writes go to the local store and the outbox in one transaction, so there is no window where a record is captured but unsyncable." },
      { title: "Bundle analysis", description: "A bundle size check in CI flagged two large native dependencies that were removed in review." },
    ],
    bundle: {
      before: 38,
      after: 24,
      unit: "MB",
      segments: [
        { label: "React Native runtime", size: 11 },
        { label: "App code", size: 5 },
        { label: "Native modules", size: 4 },
        { label: "Fonts & assets", size: 2 },
        { label: "Other", size: 2 },
      ],
    },
    impactSummary:
      "Every performance number on a field app is a proxy for something a researcher feels: how long before they can start, whether their work is safe, and whether the device will still be usable in week eight of a trial. Cutting cold start and photo storage was not a benchmark exercise — it was the difference between an app that gets used and one that gets abandoned when the device fills up.",

    resultMetrics: [
      { value: "0", label: "Records lost across a full trial season", tone: "success" },
      { value: "-41%", label: "Cold start time on the oldest supported device", tone: "success" },
      { value: "-64%", label: "Photo storage per image", tone: "success" },
      { value: "1", label: "Place for measurements, notes and photographs", note: "Replacing paper plus separate photo storage", tone: "accent" },
    ],
    businessImpact: [
      "Evaluation data reached the reporting stage the same week instead of the following month",
      "Transcription errors from paper were eliminated as a category",
      "The tool is usable in the remote trial locations the paper process was designed for",
    ],
    userImpact: [
      "Researchers work in the field with no signal and no anxiety about losing work",
      "The capture form is completable one-handed with gloves on",
      "Sync state is explicit, so a researcher knows whether a record is safe",
      "Conflicts are surfaced for a human decision rather than resolved silently",
    ],
    technicalImpact: [
      "A durable outbox makes the offline path testable rather than hopeful",
      "Per-field conflict policy is documented and enforceable in one module",
      "Bundle trimming removed two native dependencies and their upgrade risk",
      "Schema-driven capture means a new trial design needs no release",
    ],
    launchOutcomes: [
      { value: "Shipped", label: "Released to a researcher pilot group", tone: "success" },
      { value: "0", label: "Records lost in the pilot season", tone: "success" },
      { value: "6", label: "Screens in the delivered evaluation flow", tone: "accent" },
      { value: "4 mo", label: "Redesign and rebuild", tone: "accent" },
    ],

    principles: [
      { title: "Readable & maintainable", description: "Capture, storage and sync are separate modules with one interface between them." },
      { title: "Type-safe", description: "One schema types the form, the queue entry and the API payload, so they cannot drift apart." },
      { title: "Reusable components", description: "Field primitives are shared across the index, evaluation and characteristic screens." },
      { title: "Test-driven mindset", description: "Offline is the default test case, not an edge case; sync is tested with fake timers and forced kills." },
      { title: "Accessible by default", description: "Glove-sized targets, outdoor contrast and non-colour status indicators are part of the component." },
      { title: "Automated quality checks", description: "Type check, tests and a bundle size gate run on every push." },
    ],
    typescriptSample: {
      filename: "storage/outbox.ts",
      language: "ts",
      code: `import type { EvaluationRecord } from "../capture/schema";

export type OutboxEntry = {
  id: string;
  recordId: EvaluationRecord["id"];
  operation: "upsert" | "attachPhoto";
  payload: unknown;
  /** Bumped on every local edit to the same record. */
  revision: number;
  attempts: number;
  state: "pending" | "syncing" | "failed";
  lastError?: string;
};

/**
 * Appends the sync intent in the same durable write as the record
 * itself. If this succeeds and the record write does not, we have a
 * stale intent, which is harmless. The reverse is a lost record,
 * which is not — hence the ordering.
 */
export async function recordAndQueue(
  record: EvaluationRecord,
  operation: OutboxEntry["operation"],
): Promise<OutboxEntry> {
  const entry: OutboxEntry = {
    id: crypto.randomUUID(),
    recordId: record.id,
    operation,
    payload: record,
    revision: record.revision,
    attempts: 0,
    state: "pending",
  };

  await writeRecordDurably(record);
  await writeOutboxEntryDurably(entry);
  return entry;
}

export function nextBackoff(entry: OutboxEntry, baseMs = 1000): number {
  const capped = Math.min(entry.attempts, 6);
  return Math.min(baseMs * 2 ** capped, 5 * 60_000);
}`,
    },
    typescriptPoints: [
      "The evaluation schema is the single type used by the form, the queue and the API payload",
      "`revision` on both the record and the queue entry is what makes conflict detection possible",
      "The outbox entry is a discriminated union on `state`, so an exhausted-retry path is a compile-time concern",
      "Backoff is a pure function, so the retry policy is unit tested rather than observed in production",
      "`payload: unknown` at the boundary is validated on read, keeping the network layer honest",
      "The ordering inside `recordAndQueue` is documented because the comment is the reason the function is safe",
    ],
    componentPoints: [
      "The evaluation form is generated from the schema, so a new trial design needs no code change",
      "Characteristic rows are memoised on their own value, so one edit re-renders one row",
      "Sync status is a single component that maps outbox state to icon, label and action",
      "Field primitives are shared between the index, the evaluation and the characteristic screens",
      "Every screen has authored loading, empty and error states, because the error case is the normal case here",
    ],
    testing: {
      unit: "Backoff calculation, unit conversion, image resize dimensions, and schema validation",
      integration: "recordAndQueue followed by a failed sync, asserting the record survives and retries",
      component: "Characteristic row rendering for every characteristic type, including read-only ones",
      accessibility: "Automated checks per screen, plus a manual pass with the device in outdoor brightness",
      coverage: 79,
      coverageNote: "storage/ and sync/ fully covered; presentational screens covered at the component level",
      points: [
        "A forced process kill test asserts zero record loss across 500 runs",
        "Sync is tested with fake timers so backoff and retry exhaustion are proven",
        "Conflict tests cover every characteristic type against the per-field policy",
        "The offline path is the default path in the test suite, not a special mode",
      ],
    },
    linting: [
      "ESLint with TypeScript rules and React hooks rules",
      "Prettier as the single formatter",
      "`tsc --noEmit` blocking, with strict mode on",
      "Lint rule against floating promises in the storage and sync modules",
      "No default exports in modules, so imports are always explicit",
    ],
    ci: [
      { title: "Lint", command: "npm run lint", description: "ESLint and Prettier" },
      { title: "Type check", command: "tsc --noEmit", description: "Strict, blocking" },
      { title: "Test", command: "npm test", description: "Including the offline and sync suites" },
      { title: "Bundle size", command: "npm run size", description: "Fails if the release bundle grows" },
      { title: "Build", command: "expo prebuild && eas build", description: "Native build verification" },
      { title: "Deploy", command: "eas submit", description: "Store release plus OTA for JS-only changes" },
    ],
    reviews: [
      "Anything touching the storage or sync modules needs a second reviewer",
      "Review checklist explicitly covers durability, not just correctness",
      "Screenshots or a screen recording attached to any UI change",
      "Field observations cited in the PR description when a change comes from research",
      "Bundle size diffs reviewed as carefully as logic changes",
    ],
    docs: [
      "README with local setup, device testing and the offline model explained",
      "An offline and sync document covering the outbox, backoff and conflict policies",
      "Schema documentation with an example trial design",
      "Component documentation with a live example per field primitive",
      "A runbook for sync failures: what to check, and what to tell a researcher",
      "Field testing notes, so the next developer knows what was tried with gloves on",
    ],
  },
};

export const feProjects: PortfolioProject[] = [hummingbird, waupayFe, cultevaFe];
