import type { PortfolioProject, VersionSiteContent } from "@/lib/content/types";

/* ==========================================================================
   UX/UI Designer / Product Designer — sample content.
   Replace by publishing `variants` on the matching Sanity project documents.
   ========================================================================== */

export const uxSite: VersionSiteContent = {
  version: "ux",
  roleLong: "UX/UI Designer / Product Designer",
  heroEyebrow: "UX/UI Designer | Product Designer",
  heroHeadline: "Turning messy problems into clear, inclusive products.",
  heroIntro:
    "I design websites, web apps and mobile products end to end — research and framing, flows and prototypes, the interface system, and a handoff engineers can actually build from.",
  heroCtaPrimary: "View my work",
  heroCtaSecondary: "Download resume",
  heroMetrics: [
    { value: "6+", label: "Years designing digital products" },
    { value: "12", label: "Products designed and shipped" },
    { value: "3", label: "Industries: fintech, safety, agriculture" },
    { value: "Figma", label: "Primary tool, end to end" },
  ],
  positioningNote:
    "The best interface is the one a tired person can still use correctly at the end of a long day in the field.",
  featuredProjects: ["waddle-play", "culteva-evaluations-app-redesign", "t-and-t-company"],
  introBlocks: [
    {
      title: "Gallery first, process on request",
      description:
        "Recruiters should see the finished work within ten seconds. The process is there when you want to know how it was made, not in the way of the work itself.",
    },
    {
      title: "User-centred, not user-decorated",
      description:
        "Research and usability findings changed real decisions on these projects — including ones where the answer was to remove a screen.",
    },
    {
      title: "Handoff is part of the design",
      description:
        "A design that cannot be built accurately is not finished. Redlines, component documentation and build validation are part of my definition of done.",
    },
  ],
  skills: [
    "Product design",
    "UX research & interviews",
    "User flows & information architecture",
    "Wireframing & prototyping",
    "Design systems",
    "Figma",
    "FigJam",
    "Usability testing",
    "Accessibility & inclusive design",
    "Interaction design",
    "Design QA & handoff",
    "Workshop facilitation",
    "Stakeholder presentation",
  ],
  process: [
    {
      title: "Discover",
      summary: "Talk to the people who use the thing, not just the people who bought it.",
      activities: ["Stakeholder interviews", "User interviews", "Existing experience audit", "Analytics and support review"],
      output: "Research synthesis & opportunity map",
    },
    {
      title: "Define",
      summary: "Agree what problem we are actually solving and how we will know it worked.",
      activities: ["Problem framing", "Personas", "User goals", "Success criteria"],
      output: "Problem statement & scope",
    },
    {
      title: "Ideate",
      summary: "Generate widely before converging, so the obvious answer is not the only one.",
      activities: ["Sketching", "How-might-we prompts", "Concept review with stakeholders"],
      output: "Concept directions",
    },
    {
      title: "Prototype",
      summary: "Make it tangible early enough to be wrong cheaply.",
      activities: ["Low-fidelity flows", "Interactive prototypes", "Design review with engineering"],
      output: "Testable prototype",
    },
    {
      title: "Validate",
      summary: "Watch real people do the real task, not complete a survey about it.",
      activities: ["Moderated usability testing", "Iterative refinement", "Accessibility review"],
      output: "Findings & validated flows",
    },
    {
      title: "Deliver",
      summary: "Document, annotate, support the build, then check what shipped.",
      activities: ["Design system", "Redlines & specs", "Handoff workshop", "Post-launch QA"],
      output: "Shipped product & design system",
    },
  ],
  about: [
    "I design digital products for teams that have to actually ship them — which means I am as interested in the handoff and the design system as in the screen. Most of my work sits between research, interface and front-end, and I am comfortable in all three.",
    "I have designed in financial services, workplace health and safety, agriculture, fashion retail and a consumer app for neurodivergent families. That range is the point: the method transfers, the interface does not.",
    "My process is user-centred but not ceremonial. I interview real users, test real prototypes, and I am as comfortable telling a stakeholder that a feature they asked for is the wrong answer as I am delivering what they asked for.",
    "I work in Figma end to end and write specs engineers can build from without a meeting. After launch I stay close enough to review what shipped, because the design is not done until the build matches it.",
  ],
  certifications: [],
  testimonials: [],
  ctaHeading: "Looking for a designer?",
  ctaBody:
    "Send me the product, the constraint and the deadline. I will tell you what I would need to learn before I could design it properly.",
  seo: {
    title: "William Hankey — UX/UI Designer",
    description:
      "UX/UI design portfolio: research, user flows, design systems, usability testing and measurable product outcomes.",
  },
};

const waddlePlay: PortfolioProject = {
  slug: "waddle-play",
  title: "Waddle Play",
  subtitle: "A playdate app for neurodivergent children",
  summary:
    "A mobile app that helps parents and carers of autistic and neurodivergent children arrange safe, verified playdates with matched families, built around sensory-aware matching.",
  category: "Mobile App",
  cover: null,
  link: null,
  themeColor: "#51836A",
  tags: ["React", "TypeScript", "Tailwind CSS", "shadcn/ui", "Vite"],
  isPlaceholder: true,
  ux: {
    category: "Mobile App",
    role: "Product Designer & UX/UI Designer",
    team: "1 designer, 2 engineers, 1 founder",
    timeline: "12 weeks to pilot",
    industry: "Consumer social / parenting",
    summary:
      "Waddle Play matches families for playdates based on how their children experience the world, not just on geography. Designing it meant designing for a parent who is anxious about their child's sensory needs and anxious about the safety of a stranger — in the same screen.",
    outcome:
      "A matching model and interface that made sensory preferences a first-class filter rather than a footnote, tested with parents before build.",
    tags: ["Product design", "UX research", "Design system", "Inclusive design", "Safety UX"],

    responsibilities: [
      "Ran all user research and usability testing",
      "Defined the product's matching model with the founder",
      "Designed the full mobile experience from onboarding to playdate confirmation",
      "Built the design system and component library",
      "Wrote the handoff specs and supported the build",
      "Reviewed the shipped app against the designs",
    ],
    challenge:
      "General playdate apps match on age and distance. For a neurodivergent child, that is the least useful filter available — a child who is overwhelmed by noise cannot be helped by a playground full of children.",
    userGoals: [
      "Find families whose children have a genuinely similar sensory profile",
      "Understand who they are meeting before committing to it",
      "Know the playdate is safe and that someone else has vetted it too",
      "Get to a confirmed playdate with less messaging overhead than other apps",
    ],
    businessGoals: [
      "Validate that sensory-aware matching is a differentiator worth building on",
      "Reach a usable trust model for meeting strangers online, with children's safety as the constraint",
      "Get to a pilot with real families before committing engineering investment",
    ],
    keyResults: [
      { value: "3", label: "Sensory dimensions used in the matching model", tone: "accent" },
      { value: "100%", label: "Of matches require a completed child profile", tone: "accent" },
      { value: "2", label: "Moderated usability rounds before build", tone: "accent" },
      { value: "0", label: "Surfaces that expose a child's exact location", tone: "success" },
    ],
    outputs: [
      { title: "Research synthesis", caption: "12 parent interviews mapped onto sensory concerns" },
      { title: "User journey", caption: "From discovery to confirmed playdate, with the anxiety curve" },
      { title: "Wireframes", caption: "Onboarding, matching, profile and confirmation flows" },
      { title: "Design system", caption: "Colour, type, spacing, components and states" },
      { title: "Usability testing", caption: "Two moderated rounds with parents" },
      { title: "Final UI screens", caption: "High-fidelity screens as built" },
    ],

    problemOverview:
      "Existing playdate and parent-matching apps match families on geography and age. For parents of neurodivergent children, those filters do not address the question they are actually asking: will my child be comfortable in this house, with these people, on this day? The product exists because answering that question well is also what makes the resulting playdate work.",
    coreProblem:
      "Parents of neurodivergent children cannot find playdates that account for sensory needs, and cannot trust that a stranger they have never met is safe for their child.",
    businessContext:
      "Waddle Play was a new venture inside MeiFlume, with no existing user base and a two-person engineering team. It needed a matching model that was meaningfully different from a location filter, and a trust model strong enough that parents would put their child's details in front of it. The pilot was the whole validation strategy: prove families would use it before funding the next phase.",
    contextGoals: [
      "Prove sensory-aware matching is wanted, not just theoretically better",
      "Make safety and verification visible without burying the matching experience",
      "Reduce the number of messages required before a playdate happens",
      "Design an interface a stressed parent can operate quickly on a phone",
    ],
    userPainPoints: [
      { quote: "Every app matches on distance. I need to know if the room will be too loud before I say yes.", person: "Parent of a 7-year-old", context: "Discovery interviews" },
      { quote: "I don't want to explain my child's needs over and over to a stranger before we have even met.", person: "Parent of a 5-year-old", context: "Discovery interviews" },
      { quote: "I want to know someone else has checked this family, not just taken their word for it.", person: "Parent of a 9-year-old", context: "Discovery interviews" },
      { quote: "The apps assume you'll chat for days. I don't have that patience for a playdate.", person: "Parent of a 6-year-old", context: "Discovery interviews" },
    ],
    operationalPainPoints: [
      { title: "Fragmented data", description: "Sensory preferences, interests and support needs lived in whatever notes a parent happened to keep." },
      { title: "Manual vetting", description: "Without verification, every match required manual reassurance before anyone would meet." },
      { title: "Lack of visibility", description: "Parents could not see who was available nearby in a way that reflected their child's actual tolerance." },
      { title: "Poor alignment", description: "Matching, safety and scheduling were separate products stitched together, so no single view answered 'can we do this playdate?'" },
    ],
    constraints: [
      { title: "Two-person engineering team", description: "The design had to be buildable in a quarter, which ruled out anything requiring a novel technical approach." },
      { title: "Small pilot cohort", description: "Early matches were scarce, so the design had to be useful with a thin database as well as a full one." },
      { title: "Diverse user needs", description: "Sensory profiles vary enormously. A binary 'is your child sensitive to noise' filter would flatten that." },
      { title: "Safety and compliance", description: "Children's data and stranger meetings carry obligations that shaped what the product could ever surface." },
      { title: "Existing visual language", description: "The app needed to feel warm and welcoming rather than clinical, without becoming visually noisy for sensory-sensitive users." },
    ],
    whyItMattered:
      "Playdates are how neurodivergent children learn social patterns, and the parents supporting them are usually doing it with limited information and a lot of anxiety. A matching model that surfaces sensory compatibility is not a nice-to-have feature here; it is the reason the product works at all.",
    impactCards: [
      { title: "For children", points: ["Playdates that match sensory tolerance, not just distance", "Fewer overwhelming first meetings"] },
      { title: "For parents", points: ["Confidence that a match is appropriate before committing", "Less repetition explaining their child's needs"] },
      { title: "For safety", points: ["Verification made visible rather than assumed", "No surface that exposes a child's live location"] },
    ],
    researchInputs: [
      "12 semi-structured parent interviews",
      "Audit of three competing playdate and parent-matching apps",
      "Review of sensory-profiling approaches used in educational settings",
      "Support and moderation history from adjacent products",
      "Competitive scan of inclusive dating and matching patterns",
    ],
    personas: [
      {
        name: "The Exhausted Facilitator",
        role: "Parent of a 7-year-old, works full time",
        description:
          "Has a good understanding of their child's needs and a limited ability to coordinate it. Needs a match they can trust quickly.",
        needs: ["A sensory profile that is accurate", "Visibility of who else has been verified", "A short path from browsing to confirmed"],
      },
      {
        name: "The Overwhelmed Newcomer",
        role: "Parent of a 4-year-old, recently diagnosed",
        description:
          "New to navigating support and unsure what to prioritise. Needs guidance without being told what to do.",
        needs: ["Plain-language explanations", "Defaults that are safe", "Visible examples of what a good match looks like"],
      },
      {
        name: "The Connector",
        role: "Parent of a 10-year-old, experienced",
        description:
          "Wants to arrange something specific — a particular activity, a weekend — and needs scheduling to get out of the way.",
        needs: ["Fast scheduling", "Activity-level matching", "Repeat connections with known families"],
      },
    ],
    problemStatement:
      "How might we help parents of neurodivergent children find and confidently arrange playdates with other families whose children have a genuinely similar sensory profile, without exposing a child's details or location to a stranger before trust is established?",

    processOverview:
      "This was a user-centred, collaborative and iterative project. Research ran continuously rather than as a phase, and every round of testing changed the design rather than confirming it.",
    processPrinciples: [
      { title: "User-centred", description: "Every screen was traced back to something a parent said in an interview or did in a test." },
      { title: "Collaborative", description: "Weekly reviews with the founder and engineering so feasibility shaped the design before it was expensive to change." },
      { title: "Iterative", description: "Two moderated rounds, each one changing the flow rather than polishing the same flow." },
    ],
    processSteps: [
      { title: "Discover", summary: "Understand what parents actually need, not what the category assumes.", duration: "Weeks 1–3", activities: ["12 parent interviews", "Competitor audit", "Sensory profiling research"], methods: ["Interviews", "Heuristic review", "Desk research"], output: "Research synthesis, opportunity map" },
      { title: "Define", summary: "Frame the problem as sensory compatibility rather than proximity.", duration: "Week 4", activities: ["Problem framing workshop", "Persona development", "Matching model definition"], methods: ["Workshop", "Affinity mapping"], output: "Problem statement, personas, matching model" },
      { title: "Ideate", summary: "Generate broadly against the real constraints.", duration: "Week 5", activities: ["Sketch rounds", "Concept critique with engineering", "How-might-we prompts"], methods: ["Sketching", "Critique"], output: "Three concept directions" },
      { title: "Prototype", summary: "Make the matching flow tangible and testable.", duration: "Weeks 6–8", activities: ["Low-fidelity flows", "Interactive Figma prototype", "Engineering review"], methods: ["Prototyping", "Design review"], output: "Testable prototype" },
      { title: "Test", summary: "Watch parents try to find a playdate, not to admire a design.", duration: "Weeks 9–10", activities: ["Moderated usability testing, 2 rounds", "Iterative refinement", "Accessibility review"], methods: ["Moderated testing", "Task analysis"], output: "Findings, refined flows" },
      { title: "Deliver", summary: "Design system, specs and build support.", duration: "Weeks 11–12", activities: ["Design system", "Redlines and specs", "Handoff workshop", "Build review"], methods: ["Annotation", "Component documentation"], output: "Shipped pilot, design system" },
    ],
    phaseTimeline: [
      { week: "Weeks 1–3", focus: "Research", outcome: "Understanding of the real decision parents make" },
      { week: "Week 4", focus: "Framing", outcome: "Problem statement and matching model agreed" },
      { week: "Week 5", focus: "Ideation", outcome: "Three directions, one chosen with engineering" },
      { week: "Weeks 6–8", focus: "Prototype", outcome: "Testable matching flow" },
      { week: "Weeks 9–10", focus: "Test & iterate", outcome: "Two rounds, flow changed both times" },
      { week: "Weeks 11–12", focus: "Deliver", outcome: "Design system, specs, pilot" },
    ],
    collaboration: [
      "Weekly design reviews with the founder, who ran the parent interviews alongside me",
      "Fortnightly engineering reviews to test feasibility before high-fidelity work",
      "A matching model workshop where the founder, engineering and design agreed what the algorithm must and must not consider",
      "Continuous pairing with the front-end engineer so design tokens and components were built as they were specified",
      "Findings shared with the founder in the same week they happened, not batched into a deck",
    ],
    decisionInputs: [
      "What parents said in interviews, quoted directly",
      "What parents actually did in moderated testing",
      "Engineering feasibility and the two-person team constraint",
      "The founder's insight from running the pilot community",
      "Safety and privacy obligations for children's data",
      "Existing analytics on where users abandoned the existing flow",
    ],

    uxOverview:
      "The UX work focused on one decision: a parent deciding whether a specific family is a safe and appropriate match for their specific child. Everything else in the product exists to get to that decision with the right amount of information.",
    uxPrinciples: [
      { title: "Human-centred design", description: "The unit of design is the parent's decision, not the app's screens." },
      { title: "Simpler, clearer workflows", description: "Browsing, comparing and confirming a playdate in as few steps as the trust model allows." },
      { title: "Data-driven decisions", description: "Two testing rounds changed the flow. Both changes are documented with what triggered them." },
      { title: "Accessible & scalable", description: "Contrast, targets and calm motion as defaults, so the system extends without a redesign." },
    ],
    flow: [
      { title: "Sign up", summary: "Create a parent account and add a child profile." },
      { title: "Set sensory profile", summary: "Answer a short set of sensory questions that drive matching." },
      { title: "Browse matches", summary: "See nearby families filtered by sensory compatibility, with availability." },
      { title: "Compare", summary: "Open a family profile to see compatibility detail before deciding." },
      { title: "Send request", summary: "Propose a playdate with an activity and a time that works." },
      { title: "Confirm", summary: "Both parents accept; details are shared and the playdate is confirmed." },
    ],
    informationArchitecture: {
      label: "Waddle Play",
      children: [
        { label: "Home" },
        { label: "Discover" },
        { label: "  Browse matches" },
        { label: "  Family profile" },
        { label: "  Compatibility detail" },
        { label: "Children" },
        { label: "  Child profile" },
        { label: "  Sensory profile" },
        { label: "  Preferences" },
        { label: "Playdates" },
        { label: "  Requests" },
        { label: "  Confirmed" },
        { label: "  History" },
        { label: "Profile" },
        { label: "  Verification" },
        { label: "  Availability" },
        { label: "  Safety & privacy" },
      ],
    },
    journey: [
      { stage: "Discover", goal: "Find families nearby who might be a fit", emotion: "neutral", quote: "Is anyone actually out there for us?" },
      { stage: "Evaluate", goal: "Judge whether a specific family is appropriate", emotion: "confident", quote: "Their profile sounds like our son." },
      { stage: "Decide", goal: "Commit to asking", emotion: "neutral", quote: "I hope they say yes." },
      { stage: "Wait", goal: "Understand what is happening", emotion: "frustrated", quote: "I have no idea if they saw it." },
      { stage: "Arrange", goal: "Agree a time and activity", emotion: "neutral", quote: "Saturday afternoon, somewhere quiet." },
      { stage: "Meet", goal: "Have a playdate that works for both children", emotion: "confident", quote: "They got on straight away." },
    ],
    wireframes: [
      { title: "Browse v1", caption: "Initial layout: grid of families with a compatibility score. Failed testing — the score was meaningless to parents." },
      { title: "Sensory profile", caption: "The questionnaire that drives matching. Revised to plain language after cognitive testing." },
      { title: "Family profile", caption: "Comparison view: what matched, what did not, and what is still unknown." },
      { title: "Refined v2", caption: "After round two: reasons shown instead of a score, and unknowns stated explicitly." },
    ],
    usability: {
      participants: "8 parents",
      rounds: "2 rounds",
      points: [
        { text: "Parents read a compatibility score as a verdict and wanted to know why, not how much", status: "negative" },
        { text: "Showing matched and unmatched attributes together was understood immediately", status: "positive" },
        { text: "The request status screen was used constantly — parents wanted certainty while waiting", status: "positive" },
        { text: "Sensory questions phrased clinically were skipped or guessed at", status: "negative" },
        { text: "Rewriting the questions in plain language raised completion of the profile significantly", status: "positive" },
        { text: "Verification badges were trusted when the verification method was named", status: "positive" },
      ],
    },
    decisions: [
      { title: "Compatibility score → matched attributes", before: "A single 0–100 compatibility score at the top of the profile.", after: "Matched and unmatched attributes listed separately, with unknowns stated rather than hidden." },
      { title: "Filters", before: "Distance and age range only, mirroring competing apps.", after: "Sensory compatibility first, with distance and age secondary." },
      { title: "Progress indicators", before: "A four-step onboarding progress bar that stalled at step three.", after: "Profile completion shown on the child's own profile, so it is meaningful rather than sequential." },
      { title: "Navigation", before: "Five bottom tabs including a separate requests tab.", after: "Four tabs, with requests surfaced contextually on the home screen as a pending state." },
      { title: "Empty states", before: "Generic 'no results' copy.", after: "Empty states that explain what would widen the match and offer that action directly." },
    ],
    uxAccessibility: [
      "Keyboard order follows the visual order through onboarding and matching",
      "Focus is visible at every step and never trapped except inside the modal sheet, which closes on Escape",
      "All status and compatibility information is text, not only colour or position",
      "Touch targets are at least 44px throughout, larger on the primary matching action",
      "Headings are nested correctly so a screen-reader user can navigate by section",
      "Motion is limited to a single page transition and disabled under reduced-motion preferences",
    ],

    uiOverview:
      "The visual direction is warm and calm, with a green base that reads as safe rather than clinical. Low contrast decoration was avoided deliberately: for a sensory-sensitive audience, visual noise is a usability problem, not just an aesthetic one.",
    designGoals: [
      { title: "Modern, clear visual direction", description: "Warm, trustworthy and calm, with generous spacing and a restrained palette." },
      { title: "Scalable component system", description: "A small set of primitives with variants, documented in Figma and mirrored in the code." },
      { title: "Accessible and inclusive design", description: "Contrast, target size and calm motion designed in from the first wireframe." },
    ],
    uiPrinciples: [
      { title: "Clarity", description: "One primary action per screen. If two things look equally important, the hierarchy is wrong." },
      { title: "Consistency", description: "A component looks and behaves the same everywhere it appears, so it can be learned once." },
      { title: "Purposeful restraint", description: "No decoration that does not help a parent decide. Warmth comes from photography and language, not from effects." },
    ],
    moodboard: [
      { title: "Warm neutral base", caption: "Soft off-white and a muted green, avoiding the clinical blue of most parenting products" },
      { title: "Real families", caption: "Photography of neurodivergent children at play, chosen with the founder for how it actually looks" },
      { title: "Sensory calm", caption: "Reference for low-stimulation environments the product's users recognise" },
    ],
    brandPhrase: "Playdates that understand your child.",
    palette: [
      { name: "sage-600", value: "#51836A", usage: "Primary action, active states" },
      { name: "sage-100", value: "#E7F0EA", usage: "Soft panel backgrounds" },
      { name: "cream-50", value: "#FAF8F4", usage: "Page background" },
      { name: "clay-500", value: "#C4703F", usage: "Warm accent, highlights" },
      { name: "ink-900", value: "#1C2620", usage: "Body text" },
      { name: "ink-500", value: "#6B7A70", usage: "Secondary text" },
      { name: "alert-500", value: "#C4432F", usage: "Errors and destructive actions only" },
    ],
    typography: [
      { name: "Display", value: "Fraunces 40/44 SemiBold", usage: "Screen titles and hero" },
      { name: "Heading", value: "Fraunces 24/30 SemiBold", usage: "Section headings" },
      { name: "Title", value: "Inter 17/24 SemiBold", usage: "Card and list titles" },
      { name: "Body", value: "Inter 16/24 Regular", usage: "Body copy and form labels" },
      { name: "Caption", value: "Inter 14/20 Regular", usage: "Metadata and helper text" },
    ],
    spacing: [
      { name: "space-1", value: "4px" },
      { name: "space-2", value: "8px" },
      { name: "space-3", value: "12px" },
      { name: "space-4", value: "16px" },
      { name: "space-6", value: "24px" },
      { name: "space-8", value: "32px" },
      { name: "space-12", value: "48px" },
    ],
    icons: ["Home", "Search", "Child", "Calendar", "Message", "Shield check", "Heart", "Settings", "Chevron", "Filter", "Check", "Alert"],
    components: [
      { name: "Button", variants: ["primary", "secondary", "ghost", "destructive"], states: ["default", "hover", "pressed", "disabled", "loading"] },
      { name: "Input", variants: ["text", "search", "textarea", "select"], states: ["default", "focus", "error", "disabled"] },
      { name: "Chip", variants: ["filter", "tag", "status"], states: ["default", "selected", "disabled"] },
      { name: "Toggle", variants: ["switch", "checkbox"], states: ["off", "on", "disabled"] },
      { name: "Card", variants: ["family", "child", "playdate"], states: ["default", "pressed", "unavailable"] },
      { name: "Avatar group", variants: ["single", "stacked", "with-names"], states: ["default", "loading"] },
      { name: "List row", variants: ["default", "with-meta", "with-action"], states: ["default", "pressed", "unavailable"] },
      { name: "Bottom sheet", variants: ["filters", "confirm", "profile"], states: ["closed", "open", "loading"] },
    ],
    states: [
      { name: "Default", description: "Resting state of every interactive element.", tone: "neutral" },
      { name: "Hover", description: "Pointer hover, 150ms ease-out, background shift only.", tone: "neutral" },
      { name: "Pressed", description: "Active state with a 1px inset shift and reduced opacity.", tone: "neutral" },
      { name: "Disabled", description: "Reduced opacity plus a non-colour cue; never used to hide a reason.", tone: "neutral" },
      { name: "Success", description: "Confirmation toasts, green with an icon and a text label.", tone: "success" },
      { name: "Info", description: "Neutral toasts for context, for example a request sent.", tone: "accent" },
      { name: "Warning", description: "Profile incomplete, with the specific missing step named.", tone: "warning" },
      { name: "Error", description: "Form and network errors, announced and linked to the field.", tone: "danger" },
    ],
    uiBeforeAfter: [
      { title: "Family profile", before: { title: "Before", caption: "A compatibility score with no explanation" }, after: { title: "After", caption: "Matched and unmatched attributes, with unknowns stated" }, note: "The change came directly from round-one testing: parents read the score as a verdict and wanted the reasoning." },
      { title: "Sensory questionnaire", before: { title: "Before", caption: "Clinical terminology, skipped or guessed at" }, after: { title: "After", caption: "Plain-language questions with examples" }, note: "Cognitive testing showed clinical phrasing was being answered without reading." },
    ],
    finalScreens: [
      { title: "Discover", caption: "Browse matches, filtered by sensory compatibility" },
      { title: "Family profile", caption: "Matched and unmatched attributes with reasons" },
      { title: "Sensory profile", caption: "The questionnaire that drives matching" },
      { title: "Playdate request", caption: "Propose a time and activity" },
      { title: "Requests", caption: "Pending state, surfaced on home" },
      { title: "Safety & privacy", caption: "Verification method and data controls" },
    ],

    outcomeMetrics: [
      { value: "2", label: "Moderated usability rounds before build", tone: "accent" },
      { value: "8", label: "Parents tested across both rounds", tone: "accent" },
      { value: "100%", label: "Of matches require a completed sensory profile", tone: "success" },
      { value: "3", label: "Flow changes made directly from testing findings", tone: "accent" },
    ],
    outcomeGroups: [
      { title: "Business impact", points: ["A matching model that is genuinely different from a location filter, which was the original hypothesis to validate", "A pilot launched with a coherent product rather than a collection of screens", "Design system in place before the second phase of engineering investment"] },
      { title: "User impact", points: ["Parents compare a match using reasons rather than a number they do not trust", "Plain-language questions mean the sensory profile is actually completed", "No screen exposes a child's live location"] },
      { title: "Design impact", points: ["Compatibility became an explainable list, which is reusable across the whole matching surface", "Testing changed the flow three times; none of those changes were cosmetic", "Handoff specs let engineering build without a recurring design question"] },
    ],
    outcomeCompare: {
      title: "Compatibility display",
      before: { title: "Before", caption: "A single compatibility score with no supporting reasoning" },
      after: { title: "After", caption: "Matched attributes, unmatched attributes and explicit unknowns" },
    },
    testimonial: {
      quote: "The research changed the product. I expected a nice interface and got a matching model I could actually defend to parents.",
      name: "Waddle Play founder",
    },
    additionalWins: [
      "Matching model documented and reusable for the next product in the category",
      "Design system adopted as the shared base for further screens",
      "Sales and support could show parents what compatibility means, using the profile screen",
      "Established the research cadence used on later MeiFlume projects",
    ],
    shipped: [
      "Onboarding and child profile creation",
      "Sensory profile questionnaire",
      "Discover with compatibility filtering",
      "Family profile with explainable compatibility",
      "Playdate request and confirmation flow",
      "Requests and playdate history",
      "Safety, verification and privacy settings",
      "Design system and component library",
    ],

    handoffNarrative:
      "I designed alongside the engineers rather than designing and then handing over, so the components in Figma and the components in the code are the same objects. Specs were written for states the design had not originally shown, because the engineers found them during the build.",
    handoffGoals: [
      "Every component specified with all its states, not just the default",
      "Layouts documented with actual spacing values, not visual approximations",
      "Responsive behaviour defined per component",
      "Accessibility requirements written as acceptance criteria",
      "Component names matching what engineering would call them",
      "A build review before the pilot rather than after it",
    ],
    redlines: [
      { title: "Discover screen", caption: "Annotated with spacing, target sizes and the filter bar's behaviour at each breakpoint" },
      { title: "Family profile", caption: "Redlined with the exact matched/unmatched grouping and its empty state" },
      { title: "Sensory questionnaire", caption: "Per-question redlines including the error and skip states" },
    ],
    annotatedScreens: [
      { title: "Playdate request", caption: "Behaviour notes: what happens on a partially completed request, and how the button state changes" },
      { title: "Requests list", caption: "Edge cases: expired request, withdrawn request and a request from a blocked family" },
      { title: "Child profile", caption: "Responsive guidance and the behaviour of the sensory profile at partial completion" },
    ],
    componentDocs: [
      { title: "Family card", caption: "Variants, states, usage example and the accessibility notes" },
      { title: "Compatibility list", caption: "Matched, unmatched and unknown states with the copy for each" },
      { title: "Filter bar", caption: "Responsive behaviour from 360px to desktop, with the applied-filter summary" },
    ],
    collaborationNotes: [
      "Weekly pairing session where we built components together, so a design decision that was hard to build got changed rather than worked around",
      "A shared channel for implementation questions, answered same day",
      "Design and engineering reviewed accessibility requirements together, not passed between them",
      "A design review before the pilot where I reviewed the build against the designs and logged every deviation",
    ],
    implementationSupport: [
      "Answered implementation questions same day throughout the build",
      "Reviewed components as they were built, before they were used in four places",
      "Clarified design intent directly rather than leaving a note in the file",
      "Validated the build in the browser and logged deviations against the spec",
      "Supported bug triage by separating design issues from implementation issues",
      "Post-launch review of the pilot build against the designs",
    ],
    releaseStats: [
      { value: "12 wks", label: "Research to pilot release", tone: "accent" },
      { value: "0", label: "Design deviations open at release", tone: "success" },
      { value: "1", label: "Shared component library in Figma and code", tone: "accent" },
      { value: "100%", label: "Of components documented with all states", tone: "success" },
    ],
    postLaunch: [
      "Reviewed the pilot build against the designs and logged every deviation",
      "Watched the first ten real sessions for drop-off in the questionnaire",
      "Fed early support questions back into the empty states and helper copy",
      "Reviewed the compatibility explanation with parents who used it, which produced the clearest positive feedback of the project",
      "Documented what to test next so the next iteration starts from evidence rather than opinion",
    ],
  },
};

const cultevaUx: PortfolioProject = {
  slug: "culteva-evaluations-app-redesign",
  title: "Culteva Evaluations",
  subtitle: "Field research app redesign",
  summary:
    "A redesign of an agricultural evaluation tool used in trial plots, where the interface had to be operable one-handed, in sunlight, with gloves, and with no network.",
  category: "Mobile App",
  cover: null,
  link: null,
  themeColor: "#2E7D32",
  tags: ["React Native", "TypeScript", "Expo", "MongoDB"],
  isPlaceholder: true,
  ux: {
    category: "Mobile App",
    role: "Product Designer & UX/UI Designer",
    team: "1 designer, 2 engineers, 1 QA",
    timeline: "4 months",
    industry: "Agriculture / research software",
    summary:
      "Researchers record plant characteristics in trial plots, sometimes hours from a signal. The redesign had to be faster than paper, safer than paper, and usable in conditions that no interface is usually designed for.",
    outcome:
      "A capture flow that is completable one-handed, keeps working offline, and makes the safety of a record visible at all times.",
    tags: ["Field research", "Offline UX", "Design system", "Accessibility", "Design QA"],

    responsibilities: [
      "Observed researchers working in a trial plot before designing",
      "Designed the full evaluation flow and the offline-first interaction model",
      "Built the design system with outdoor legibility as a constraint",
      "Defined the sync and conflict states, which the original design omitted entirely",
      "Wrote specs and reviewed the build in the field",
    ],
    challenge:
      "A paper process was slow and error-prone, but it never lost a record. A digital tool that occasionally loses work is worse than paper, so the redesign had to earn trust in the field before it could be adopted.",
    userGoals: [
      "Complete an evaluation for a plot without putting the phone down",
      "Know that a value is saved before moving to the next characteristic",
      "Work with no signal and see clearly what is still waiting to sync",
      "Enter a measurement correctly the first time, in bright sun, wearing gloves",
    ],
    businessGoals: [
      "Replace paper capture across the trial network",
      "Eliminate transcription errors between field and report",
      "Get evaluations reported in the same week rather than the following month",
      "Support researchers on the lowest-cost Android devices still in use",
    ],
    keyResults: [
      { value: "56px", label: "Minimum touch target in the capture flow", tone: "accent" },
      { value: "2", label: "Field observation sessions before wireframing", tone: "accent" },
      { value: "100%", label: "Of capture screens designed for full offline use", tone: "success" },
      { value: "0", label: "Sync states left undesigned", note: "Every record state specified", tone: "success" },
    ],
    outputs: [
      { title: "Field observation notes", caption: "Two sessions in a trial plot, in real conditions" },
      { title: "Current-state journey", caption: "Paper process mapped end to end, including the transcription step it hid" },
      { title: "Wireframes", caption: "Index, evaluation, details, measurements, characteristics, images" },
      { title: "Offline interaction model", caption: "Pending, syncing, synced, failed and conflict, with the user's view of each" },
      { title: "Design system", caption: "Outdoor-legible components sized for gloved use" },
      { title: "Final UI screens", caption: "High-fidelity screens as built" },
    ],

    problemOverview:
      "Evaluations were recorded on paper, then transcribed into spreadsheets, which took days and introduced errors. A digital tool existed but was unreliable without a signal, and researchers had stopped trusting it. The project was to rebuild both the interface and the interaction model around the assumption that connectivity is the exception.",
    coreProblem:
      "Field researchers cannot rely on a network connection, so a data capture tool that depends on one will lose their work and lose their trust.",
    businessContext:
      "Culteva's evaluation tool was used across trial sites in several regions, with researchers on varied and often older Android devices. Trials run for a full season, so a tool that fails in week six destroys a season's work. Adoption had to be earned by reliability, not by features.",
    contextGoals: [
      "Rebuild the capture flow around offline-first operation",
      "Make the safety of a captured record visible, not implied",
      "Keep the tool usable on low-end devices with limited storage",
      "Remove the transcription step entirely",
    ],
    userPainPoints: [
      { quote: "I lost half an afternoon's measurements when the app froze. I went back to paper after that.", person: "Field researcher", context: "Interviews" },
      { quote: "In the sun, with gloves on, the small buttons are a joke.", person: "Trial supervisor", context: "Field observation" },
      { quote: "I never know if it saved or not. I write it on paper anyway to be safe.", person: "Field researcher", context: "Interviews" },
      { quote: "The phone is full by week three and then nothing works.", person: "Field researcher", context: "Interviews" },
    ],
    operationalPainPoints: [
      { title: "Fragmented capture", description: "Measurements, notes and photographs were recorded in three separate places with three different identifiers." },
      { title: "Manual transcription", description: "Field records were re-entered into a reporting spreadsheet, which took days and introduced errors." },
      { title: "No visibility of sync", description: "The tool gave no indication of what had synced, so researchers kept duplicate paper records as insurance." },
      { title: "Poor device fit", description: "Targets and contrast were designed for an office and failed in direct sunlight and with gloves." },
    ],
    constraints: [
      { title: "No reliable connectivity", description: "Trial locations are remote; the design had to treat offline as the default state." },
      { title: "Limited devices", description: "Older Android hardware with constrained storage, which ruled out heavy image handling." },
      { title: "Physical conditions", description: "Gloves, sunlight, one-handed use and a device held at waist height." },
      { title: "Fixed vocabulary", description: "Characteristic sets and units were agreed with agronomists and could not be redesigned freely." },
      { title: "Season-long datasets", description: "Storage and sync volume had to be planned for a whole trial, not a single session." },
    ],
    whyItMattered:
      "If the digital tool is less trustworthy than paper, researchers will do the work twice — which is exactly the cost the project was supposed to remove. Every design decision in this project was ultimately about whether a researcher would trust the screen enough to stop carrying a notebook.",
    impactCards: [
      { title: "For researchers", points: ["One-handed capture in real field conditions", "Visible confirmation that a value is safe"] },
      { title: "For supervisors", points: ["Live view of what has synced across sites", "Fewer incomplete evaluations at the end of a trial"] },
      { title: "For the business", points: ["Transcription step removed entirely", "Reporting in the same week as the field work"] },
    ],
    researchInputs: [
      "Two full field observation sessions in a trial plot",
      "Interviews with 6 researchers across two regions",
      "Audit of the existing app with support tickets as evidence",
      "Photography and photography-based agronomy references for the capture flow",
      "Storage and sync telemetry from the existing app",
    ],
    personas: [
      {
        name: "The Field Evaluator",
        role: "Researcher, works plots daily, limited signal",
        description: "Evaluates multiple plots a day, often alone, and cannot afford to repeat work.",
        needs: ["Fast, forgiving entry", "Unambiguous save confirmation", "Works with no network"],
      },
      {
        name: "The Trial Supervisor",
        role: "Oversees several sites and evaluators",
        description: "Needs to know which plots are complete and which records are still pending, without visiting each site.",
        needs: ["Status at a glance", "A way to see blockers", "Consistency across evaluators"],
      },
      {
        name: "The Data Analyst",
        role: "Consumes the data after the trial",
        description: "Was the person cleaning transcription errors before, and wants a dataset that is correct on arrival.",
        needs: ["Consistent vocabularies", "Validation at entry", "Fewer flagged records"],
      },
    ],
    problemStatement:
      "How might we let a field researcher capture a complete, trustworthy plant evaluation one-handed, in direct sunlight, wearing gloves, and with no network — so that the paper notebook and the transcription spreadsheet are both unnecessary?",

    processOverview:
      "Field observation came first, and it changed the brief. Everything after that was iterative and built with engineering, because the offline interaction model needed a front-end partner to be credible.",
    processPrinciples: [
      { title: "User-centred", description: "Designed in the plot, with gloves on, not in a studio from a requirements document." },
      { title: "Collaborative", description: "The offline states were designed jointly with engineering because they were mostly a technical question." },
      { title: "Iterative", description: "Every round of field testing changed the capture flow, not just the styling." },
    ],
    processSteps: [
      { title: "Discover", summary: "Watch the work happen in real conditions.", duration: "Weeks 1–3", activities: ["Field observation, two sessions", "Researcher interviews", "Existing app audit", "Telemetry review"], methods: ["Observation", "Interviews", "Heuristic review"], output: "Research synthesis, condition brief" },
      { title: "Define", summary: "Frame the product as offline-first, not offline-tolerant.", duration: "Week 4", activities: ["Problem framing", "Offline interaction model definition", "Persona development"], methods: ["Workshop", "Service blueprint"], output: "Problem statement, offline model" },
      { title: "Ideate", summary: "Explore capture patterns suited to one-handed use.", duration: "Week 5", activities: ["Sketch rounds", "One-handed ergonomics study", "Critique with engineering"], methods: ["Sketching", "Ergonomics review"], output: "Capture flow directions" },
      { title: "Prototype", summary: "Build a testable prototype on a real device.", duration: "Weeks 6–9", activities: ["Low-fidelity flows", "Device prototype", "Glove and sunlight testing"], methods: ["Prototyping", "Contextual testing"], output: "Testable capture flow" },
      { title: "Validate", summary: "Test in the plot, in the conditions the product is for.", duration: "Weeks 10–12", activities: ["In-field usability testing", "Iterative refinement", "Accessibility review"], methods: ["Contextual usability testing"], output: "Refined flow, validated states" },
      { title: "Deliver", summary: "System, specs and field build review.", duration: "Weeks 13–16", activities: ["Design system", "Redlines and specs", "Handoff workshop", "Field build review"], methods: ["Annotation", "Component documentation"], output: "Shipped app, design system" },
    ],
    phaseTimeline: [
      { week: "Weeks 1–3", focus: "Discover", outcome: "Conditions brief written from observation" },
      { week: "Week 4", focus: "Define", outcome: "Offline interaction model agreed" },
      { week: "Week 5", focus: "Ideate", outcome: "One-handed capture directions" },
      { week: "Weeks 6–9", focus: "Prototype", outcome: "Testable flow on a real device" },
      { week: "Weeks 10–12", focus: "Validate", outcome: "Field-tested capture flow" },
      { week: "Weeks 13–16", focus: "Deliver", outcome: "Shipped, reviewed in the field" },
    ],
    collaboration: [
      "Two field observation sessions with the team, in the conditions the product is used in",
      "Weekly design and engineering reviews while the offline model was being designed, not after",
      "Joint definition of every record state with the front-end engineer, because those states are mostly technical",
      "Continuous pairing so the design system components were built as they were specified",
      "A final build review conducted in the field, on the actual device, in actual conditions",
    ],
    decisionInputs: [
      "What researchers were observed doing, including the workarounds they had invented",
      "What researchers said they no longer trusted, and why",
      "Engineering constraints on storage, sync and device capability",
      "The agronomist's fixed vocabulary and validation rules",
      "Existing telemetry on where sessions failed or were abandoned",
      "Physical conditions: sunlight, gloves, one-handed reach",
    ],

    uxOverview:
      "The UX problem was trust, not efficiency. A researcher who does not believe the app saved their work will write it on paper anyway, and the project has achieved nothing. So the interaction model was designed around making the state of every record visible and unambiguous.",
    uxPrinciples: [
      { title: "Human-centred design", description: "Designed against the physical conditions of the work, not an assumed indoor context." },
      { title: "Simpler, clearer workflows", description: "One characteristic per row, thumb-reachable, with no ambiguous save state." },
      { title: "Data-driven decisions", description: "Field testing changed the capture flow twice; both changes are documented with the trigger." },
      { title: "Accessible & scalable", description: "Glove-sized targets and outdoor contrast as system defaults, so new screens inherit them." },
    ],
    flow: [
      { title: "Open app", summary: "Launches into the cached sample list, usable with no network." },
      { title: "Select sample", summary: "Search or filter to the plot and sample being evaluated." },
      { title: "Capture characteristics", summary: "Categorical values one per row, thumb-reachable, saved per field." },
      { title: "Enter measurements", summary: "Numeric entry with unit awareness and range validation on blur." },
      { title: "Add photographs", summary: "Capture, downsample on device, with a storage estimate shown." },
      { title: "Review & sync", summary: "Per-group status with a count of pending records and a retry action." },
    ],
    informationArchitecture: {
      label: "Culteva Evaluations",
      children: [
        { label: "Samples" },
        { label: "  Sample index" },
        { label: "  Sample detail" },
        { label: "Evaluation" },
        { label: "  Characteristics" },
        { label: "  Measurements" },
        { label: "  Images" },
        { label: "  Notes" },
        { label: "Sync" },
        { label: "  Pending records" },
        { label: "  Conflicts" },
        { label: "Trials" },
        { label: "Settings" },
      ],
    },
    journey: [
      { stage: "Arrive", goal: "Open the app in the plot with no signal", emotion: "neutral", quote: "Does it even work out here?" },
      { stage: "Select", goal: "Find the right sample quickly", emotion: "neutral", quote: "Right, block four, row twelve." },
      { stage: "Capture", goal: "Enter characteristics accurately, one-handed", emotion: "neutral", quote: "Next, next, next." },
      { stage: "Confirm", goal: "Be sure the values are safe", emotion: "confident", quote: "Saved. Good." },
      { stage: "Sync", goal: "Get the data off the device", emotion: "neutral", quote: "Back at the truck, this'll upload." },
      { stage: "Report", goal: "Use the data without cleaning it", emotion: "confident", quote: "No transcription this time." },
    ],
    wireframes: [
      { title: "Characteristics v1", caption: "Dense grid of all characteristics. Failed in-field testing — too many targets, wrong thumb reach." },
      { title: "One-handed layout", caption: "Single column with all controls in the lower third of the screen." },
      { title: "Measurements", caption: "Numeric entry with unit suffixes and range validation on blur." },
      { title: "Sync footer", caption: "Per-group status with pending count and retry, replacing a single global indicator." },
    ],
    usability: {
      participants: "5 researchers",
      rounds: "2 rounds, both in the field",
      points: [
        { text: "A dense grid of characteristics was unusable one-handed with gloves on", status: "negative" },
        { text: "Moving all controls into the lower third of the screen fixed reach entirely", status: "positive" },
        { text: "A per-field saved indicator removed the need for a paper backup", status: "positive" },
        { text: "A single global sync indicator was ignored; a per-group count with a retry was used", status: "negative" },
        { text: "A storage estimate on the photo screen changed when researchers deleted old images", status: "positive" },
        { text: "Validation on blur rather than per keystroke stopped researchers re-entering values", status: "positive" },
      ],
    },
    decisions: [
      { title: "Primary action placement", before: "Save button in the top-right navigation bar, unreachable with one hand.", after: "No save button at all: every field saves on change with a visible indicator." },
      { title: "Filters", before: "A filter icon opening a modal with no indication of what was applied.", after: "Applied filters shown as removable chips beneath the search field." },
      { title: "Progress indicators", before: "A global sync spinner.", after: "Per-field-group status with a pending count and a retry action." },
      { title: "Navigation", before: "Five bottom tabs with a separate sync tab.", after: "Four tabs; sync status is a persistent footer rather than a destination." },
      { title: "Empty states", before: "Blank panels with no guidance.", after: "Each empty state names the specific missing step and offers the action directly." },
    ],
    uxAccessibility: [
      "All capture controls at least 56px, above the 44px minimum, because the user is wearing gloves",
      "Contrast deliberately above the WCAG AA minimum for legibility in direct sunlight",
      "Capture order matches focus order, so the flow is completable with a screen reader",
      "Save confirmation is a polite live region, not only a visual indicator",
      "Every status carries a text label and an icon, so state is never conveyed by colour alone",
      "Validation runs on blur and announces without moving focus unexpectedly",
      "No gesture-only interaction; long-press actions have a visible alternative",
    ],

    uiOverview:
      "The visual system is built for a high-glare environment rather than an office. Contrast is pushed above the accessible minimum, spacing is generous to reduce mis-taps, and the palette is a functional green that also happens to suit the domain.",
    designGoals: [
      { title: "Modern, clear visual direction", description: "High contrast, generous spacing and a functional visual hierarchy tuned for outdoor use." },
      { title: "Scalable component system", description: "Field primitives designed once at glove scale and reused across every capture screen." },
      { title: "Accessible and inclusive design", description: "Outdoor legibility, glove-sized targets and non-colour status as system constraints." },
    ],
    uiPrinciples: [
      { title: "Clarity", description: "One value per row, one primary action per screen, nothing decorative competing with the data." },
      { title: "Consistency", description: "The same characteristic control everywhere, so it is learned once and applied everywhere." },
      { title: "Purposeful restraint", description: "No animation, no illustration, nothing that costs a frame or a mis-tap in a trial plot." },
    ],
    moodboard: [
      { title: "Field palette", caption: "Functional greens drawn from the domain, with contrast pushed for glare" },
      { title: "Glove ergonomics", caption: "Target sizing and spacing referenced from physical glove studies" },
      { title: "Plot documentation", caption: "Trial plot layouts used as a reference for information density" },
    ],
    brandPhrase: "Record it once. Trust it completely.",
    palette: [
      { name: "field-600", value: "#2E7D32", usage: "Primary action, saved state" },
      { name: "field-100", value: "#E8F3E8", usage: "Selected and completed states" },
      { name: "soil-50", value: "#F7F6F2", usage: "Page background" },
      { name: "grain-500", value: "#B8862B", usage: "Pending and warning states" },
      { name: "ink-900", value: "#1A1A16", usage: "Body text at maximum contrast" },
      { name: "ink-600", value: "#4A4A42", usage: "Secondary text" },
      { name: "alert-600", value: "#C0392B", usage: "Errors and failed sync only" },
    ],
    typography: [
      { name: "Display", value: "Inter 32/38 Bold", usage: "Screen titles" },
      { name: "Heading", value: "Inter 22/28 SemiBold", usage: "Section headings" },
      { name: "Title", value: "Inter 18/24 SemiBold", usage: "Characteristic labels" },
      { name: "Body", value: "Inter 17/26 Regular", usage: "Values and body copy, minimum 17px for field legibility" },
      { name: "Caption", value: "Inter 15/20 Regular", usage: "Helper text and units" },
    ],
    spacing: [
      { name: "space-1", value: "4px" },
      { name: "space-2", value: "8px" },
      { name: "space-4", value: "16px" },
      { name: "space-6", value: "24px" },
      { name: "space-8", value: "32px" },
      { name: "space-12", value: "48px" },
    ],
    icons: ["Sample", "Leaf", "Ruler", "Camera", "Sync", "Warning", "Check", "Search", "Filter", "Chevron", "Back", "Trash"],
    components: [
      { name: "Characteristic row", variants: ["categorical", "numeric", "text", "boolean"], states: ["default", "focus", "selected", "saved", "error"] },
      { name: "Numeric field", variants: ["integer", "decimal", "ranged"], states: ["default", "focus", "error", "out-of-range"] },
      { name: "Selectable option", variants: ["tile", "segment", "list"], states: ["unselected", "selected", "disabled", "locked"] },
      { name: "Sync status", variants: ["inline", "footer", "group"], states: ["pending", "syncing", "synced", "failed", "conflict"] },
      { name: "Photo tile", variants: ["single", "grid"], states: ["capturing", "captured", "syncing", "error"] },
      { name: "Value display", variants: ["inline", "large", "readonly"], states: ["default", "editing", "confirmed"] },
    ],
    states: [
      { name: "Default", description: "Resting state; labels at maximum contrast.", tone: "neutral" },
      { name: "Focus", description: "3px high-contrast ring, visible in sunlight.", tone: "accent" },
      { name: "Saved", description: "Check icon plus 'Saved' text plus timestamp — three cues, not one.", tone: "success" },
      { name: "Pending sync", description: "Clock icon with the pending count in text.", tone: "warning" },
      { name: "Synced", description: "Filled check with the last sync time.", tone: "success" },
      { name: "Conflict", description: "Alert icon, explanatory text, and both values shown for resolution.", tone: "danger" },
      { name: "Out of range", description: "The valid range stated in text alongside the error.", tone: "danger" },
      { name: "Locked", description: "Reduced availability with the reason given, never a disabled control with no explanation.", tone: "neutral" },
    ],
    uiBeforeAfter: [
      { title: "Characteristics screen", before: { title: "Before", caption: "Dense grid, controls across the whole screen" }, after: { title: "After", caption: "Single column, controls in the thumb zone" }, note: "The single most important change on the project, and it came from watching someone fail to use it in a field." },
      { title: "Sync status", before: { title: "Before", caption: "A single global spinner" }, after: { title: "After", caption: "Per-group status with pending count and retry" }, note: "Researchers ignored the spinner and kept paper duplicates; they used the counted version." },
    ],
    finalScreens: [
      { title: "Sample index", caption: "Cached list, searchable offline" },
      { title: "Evaluation", caption: "Characteristics, one per row, thumb zone" },
      { title: "Measurements", caption: "Numeric entry with units and range validation" },
      { title: "Images", caption: "Capture with a storage estimate" },
      { title: "Sync status", caption: "Per-group status with pending count" },
      { title: "Conflict resolution", caption: "Both values shown for a human decision" },
    ],

    outcomeMetrics: [
      { value: "2", label: "In-field usability rounds, both in real conditions", tone: "accent" },
      { value: "5", label: "Researchers observed and tested", tone: "accent" },
      { value: "56px", label: "Minimum capture target, glove-sized", tone: "accent" },
      { value: "6", label: "Capture screens designed offline-first", tone: "success" },
    ],
    outcomeGroups: [
      { title: "Business impact", points: ["Paper capture and transcription replaced across the trial network", "Evaluations reported in the same week as the field work", "Researchers stopped keeping duplicate paper records as insurance"] },
      { title: "User impact", points: ["Capture completable one-handed in real conditions", "Every record's state visible without asking support", "A saved value is confirmed three ways, so the notebook stays in the bag"] },
      { title: "Design impact", points: ["A field-specific interaction model that generalises to any offline-first tool", "Field-legibility constraints written into the design system rather than applied per screen", "Conflict resolution designed as a first-class flow, not an edge case"] },
    ],
    outcomeCompare: {
      title: "Capture flow",
      before: { title: "Before", caption: "Dense grid with a save button and no save confirmation" },
      after: { title: "After", caption: "Thumb-zone column with per-field save confirmation" },
    },
    testimonial: {
      quote: "I stopped writing everything on paper twice. That is the whole review.",
      name: "Field research supervisor",
    },
    additionalWins: [
      "Offline interaction model reused on other offline-first MeiFlume projects",
      "Field-legibility rules adopted as design system constraints",
      "Conflict resolution flow turned out to be useful for supervisor-level edits too",
      "Established a pattern of in-field build reviews on subsequent client work",
    ],
    shipped: [
      "Sample index with offline search",
      "Characteristics capture with per-field save",
      "Measurements with unit and range validation",
      "Image capture with on-device downsampling",
      "Per-group sync status with retry",
      "Conflict resolution flow",
      "Outdoor-legible design system",
      "Handoff specs and field build review",
    ],

    handoffNarrative:
      "The states that mattered most were the ones nobody had designed before — pending, syncing, failed, conflict. We designed those jointly with engineering, because they were a product question and a technical question at the same time, and shipping them late would have meant another round of field testing.",
    handoffGoals: [
      "Every async state specified, not just the loading and success cases",
      "Field-legibility requirements written as measurable constraints",
      "Touch targets specified numerically rather than shown as a screenshot",
      "Component naming matching engineering's vocabulary",
      "Behaviour specified for a device that is out of space or offline at launch",
      "A build review conducted in the field, not in an office",
    ],
    redlines: [
      { title: "Characteristics screen", caption: "Redlined with target sizes, thumb-zone boundary and the saved indicator states" },
      { title: "Sync footer", caption: "Annotated with every state, the pending count behaviour and the retry interaction" },
      { title: "Numeric field", caption: "Per-field redlines with unit placement and range validation behaviour" },
    ],
    annotatedScreens: [
      { title: "Conflict resolution", caption: "Behaviour notes for the resolution flow, including a conflict on a value already synced" },
      { title: "Photo capture", caption: "Storage threshold behaviour, and what the user sees at 90% full" },
      { title: "Sample index", caption: "Offline search behaviour and the empty state for an uncached trial" },
    ],
    componentDocs: [
      { title: "Characteristic row", caption: "Four variants, five states, usage examples and the accessibility notes" },
      { title: "Sync status", caption: "State mapping with copy for each, and the retry interaction" },
      { title: "Numeric field", caption: "Unit handling, range validation, and the out-of-range message" },
    ],
    collaborationNotes: [
      "Weekly pairing on the offline states, which were the highest-risk part of the build",
      "A shared channel where implementation questions were answered same day",
      "Joint definition of record states before high-fidelity design, so no state was discovered during the build",
      "Field build review on the actual device, in actual conditions, with the research team present",
    ],
    implementationSupport: [
      "Answered implementation questions same day throughout the build",
      "Reviewed each field component on a real device before it was used across screens",
      "Reviewed the build in the field and logged deviations against the spec",
      "Separated design issues from implementation issues during bug triage",
      "Reviewed every new screen against the field-legibility constraints before sign-off",
    ],
    releaseStats: [
      { value: "4 mo", label: "Redesign and rebuild", tone: "accent" },
      { value: "0", label: "Async states discovered during the build", tone: "success" },
      { value: "2", label: "In-field usability rounds before release", tone: "accent" },
      { value: "100%", label: "Of capture screens validated offline", tone: "success" },
    ],
    postLaunch: [
      "Reviewed the shipped build against the designs during a real trial",
      "Watched early sessions for the saved-indicator behaviour, which was the adoption signal",
      "Fed the first support questions into the empty states and helper copy",
      "Confirmed with researchers that the notebook stayed in the bag, which was the actual success measure",
      "Documented the offline interaction model for reuse on the next offline-first project",
    ],
  },
};

const tandtUx: PortfolioProject = {
  slug: "t-and-t-company",
  title: "T&T Company",
  subtitle: "Mobile-first fashion ecommerce storefront",
  summary:
    "A small fashion brand's online storefront, designed mobile-first around a South African shopper on a mid-range Android and a payment provider that had to change.",
  category: "Website / Ecommerce",
  cover: null,
  link: null,
  themeColor: "#041625",
  tags: ["React", "TypeScript", "Sanity", "Vite", "Tailwind CSS"],
  isPlaceholder: true,
  ux: {
    category: "Website / Ecommerce",
    role: "Product Designer & UX/UI Designer",
    team: "1 designer, 2 engineers, 1 client owner",
    timeline: "10 weeks",
    industry: "Fashion retail",
    summary:
      "A single-operator fashion brand selling locally, with card payments that needed to move to a compliant provider. The design had to make a small catalogue feel curated, work on a mid-range Android, and survive the store staying open when the CMS did not.",
    outcome:
      "A storefront that converts on mobile, keeps a cart through a reload, and can be run entirely by its owner.",
    tags: ["Ecommerce", "Mobile-first", "Conversion", "Design system", "Design QA"],

    responsibilities: [
      "Designed the full storefront from homepage to order confirmation",
      "Defined the mobile-first product detail and cart experience",
      "Designed the resilient product listing behaviour",
      "Built the visual system for a brand with no existing guidelines",
      "Reviewed the build weekly and validated the payment flow end to end",
    ],
    challenge:
      "The brand had products and no online presence, a small budget, and no engineering capacity to spare. The store needed to feel like a fashion brand rather than a template, and to keep selling when the content backend had a bad afternoon.",
    userGoals: [
      "See the collection clearly on a phone, without pinching to zoom",
      "Judge a garment from photos, size and detail before buying",
      "Check out without losing the cart to a dropped connection or a reload",
      "Know where an order is without emailing the business",
    ],
    businessGoals: [
      "Take card payments on a compliant provider without losing sales in the migration",
      "Give the owner a storefront they can run and update alone",
      "Make a small catalogue look intentional rather than sparse",
      "Keep selling when the CMS is unavailable",
    ],
    keyResults: [
      { value: "Mobile-first", label: "Every layout designed at 390px before any desktop breakpoint", tone: "accent" },
      { value: "100%", label: "Of product images served at an appropriate size per breakpoint", tone: "success" },
      { value: "0", label: "Surfaces that break when the CMS is unreachable", tone: "success" },
      { value: "1", label: "Person who can run the store without a developer", tone: "accent" },
    ],
    outputs: [
      { title: "Competitive review", caption: "Six local fashion stores, reviewed on mobile" },
      { title: "User journeys", caption: "Browse, detail, cart, checkout, confirmation" },
      { title: "Wireframes", caption: "Homepage, collection, product, cart and checkout" },
      { title: "Design system", caption: "Type, colour, spacing, components and states" },
      { title: "Mobile test", caption: "Checkout flow reviewed on a real mid-range Android" },
      { title: "Final UI screens", caption: "High-fidelity screens as built" },
    ],

    problemOverview:
      "A local fashion business with products to sell and no online shop. Card payments had to move to a compliant provider, and the business had no technical staff. The design needed to establish a credible brand presence from nothing while staying inside a small budget and a short timeline.",
    coreProblem:
      "A small local fashion brand cannot compete on catalogue size, so the storefront has to sell through curation, photography and confidence in a single screen.",
    businessContext:
      "T&T Company is a small South African fashion business run by one person, with a limited catalogue and a modest budget. There was no formal PMO, so every design decision had to earn its cost. The store had to be operable by the owner alone, and the payment migration was the largest single risk in the project.",
    contextGoals: [
      "Move card payments to a compliant provider with no loss of the customer journey",
      "Establish a credible brand presence from nothing",
      "Make a small catalogue look deliberate rather than thin",
      "Keep the store selling when the CMS is unavailable",
    ],
    userPainPoints: [
      { quote: "I want to see the actual garment, not a thumbnail that hides the print.", person: "Shopper on mobile", context: "Competitive review and interviews" },
      { quote: "I shop on my phone. If I have to pinch and zoom I leave.", person: "Shopper on mobile", context: "Interviews" },
      { quote: "I don't want to lose my basket because the page reloaded on the bus.", person: "Shopper on mobile", context: "Interviews" },
      { quote: "I want to know my order went in without having to email someone.", person: "Shopper", context: "Interviews" },
    ],
    operationalPainPoints: [
      { title: "Fragmented tools", description: "Products, stock and content were maintained in spreadsheets, with no single storefront." },
      { title: "Manual fulfilment", description: "A single operator managed orders, packing and customer communication by hand." },
      { title: "Lack of visibility", description: "No way to see orders, stock or customer questions without checking email." },
      { title: "Poor cross-team alignment", description: "Design, build and fulfilment were three separate conversations with no shared definition of done." },
    ],
    constraints: [
      { title: "Small fixed budget", description: "Every design decision had a defensible cost, which ruled out anything decorative and expensive to build." },
      { title: "No dedicated engineering capacity", description: "Two engineers, so the design could not require an unusual technical approach." },
      { title: "South African payment context", description: "Local payment methods, data costs and device quality shaped every checkout decision." },
      { title: "Small catalogue", description: "A limited number of products had to be presented as a deliberate collection." },
      { title: "Single operator", description: "No admin software could be justified, so the CMS studio had to be the fulfilment tool." },
    ],
    whyItMattered:
      "This is a business that lives or dies on whether someone completes a checkout on a phone, on a data-constrained connection, with a cart that must not vanish. The design decisions that mattered most were about confidence and resilience, not aesthetics.",
    impactCards: [
      { title: "For shoppers", points: ["A storefront that reads well on a mid-range Android", "A cart that survives a reload or a dropped connection"] },
      { title: "For the owner", points: ["One place to see and fulfil every order", "Content updates without a developer"] },
      { title: "For the business", points: ["Card payments on a compliant provider", "No admin software to licence or maintain"] },
    ],
    researchInputs: [
      "Competitive review of six local fashion stores, all on mobile",
      "Interviews with 7 shoppers about mobile fashion buying",
      "Audit of the brand's existing assets and imagery",
      "Review of the current checkout flow for the provider migration",
      "Data cost and device considerations for the target market",
    ],
    personas: [
      {
        name: "The Mobile Shopper",
        role: "Shops fashion on a phone, often on mobile data",
        description: "Decides quickly from photos and price, and abandons anything that is fiddly or slow.",
        needs: ["Legible product photography", "A cart that does not vanish", "Fast, obvious checkout"],
      },
      {
        name: "The Returning Customer",
        role: "Has bought before and wants a specific item",
        description: "Comes for a known garment and expects to find it quickly.",
        needs: ["Search and filtering that work", "Stock visibility", "A saved basket"],
      },
      {
        name: "The Owner",
        role: "Runs the business single-handed",
        description: "Needs to see orders, update products and answer questions from one place.",
        needs: ["Order list with status", "Simple content editing", "No new software to learn"],
      },
    ],
    problemStatement:
      "How might we build a fashion storefront that feels like a real brand rather than a template, converts on a mid-range Android over mobile data, keeps a shopper's basket intact through a reload, and can be run day to day by one person with no developer?",

    processOverview:
      "A short, budget-constrained project, so the process was weighted towards research and decision-making rather than iteration volume. Every workshop had a decision attached to it.",
    processPrinciples: [
      { title: "User-centred", description: "Mobile shopping behaviour was researched first, because that is where the majority of the traffic and the revenue would be." },
      { title: "Collaborative", description: "Design decisions were made with the owner in the room, including the ones about what to leave out." },
      { title: "Iterative", description: "The checkout flow was reviewed on a real device weekly, which caught problems no desktop review would have." },
    ],
    processSteps: [
      { title: "Discover", summary: "Understand mobile fashion buying and the brand's real assets.", duration: "Weeks 1–2", activities: ["Competitor mobile review", "Shopper interviews", "Brand asset audit"], methods: ["Interviews", "Competitive review"], output: "Research synthesis, brand direction" },
      { title: "Define", summary: "Agree the conversion goal and the scope that fits the budget.", duration: "Week 3", activities: ["Problem framing", "Scope workshop with the owner", "Conversion goal definition"], methods: ["Workshop"], output: "Problem statement, scoped MVP" },
      { title: "Ideate", summary: "Explore how a small catalogue can read as curated.", duration: "Weeks 4–5", activities: ["Layout sketches", "Photography direction", "Collection presentation options"], methods: ["Sketching", "Art direction"], output: "Visual direction, collection layout" },
      { title: "Prototype", summary: "Build the checkout for testing before styling it.", duration: "Weeks 6–7", activities: ["Checkout prototype", "Cart behaviour spec", "Device testing"], methods: ["Prototyping", "Contextual testing"], output: "Testable checkout and cart" },
      { title: "Validate", summary: "Test on the devices and connections the market actually uses.", duration: "Weeks 8–9", activities: ["Mobile usability testing", "Iterative refinement", "Accessibility review"], methods: ["Moderated testing"], output: "Refined flows, validated checkout" },
      { title: "Deliver", summary: "System, specs, build support and launch review.", duration: "Week 10", activities: ["Design system", "Redlines and specs", "Handoff", "Launch review"], methods: ["Annotation", "Component documentation"], output: "Shipped store, design system" },
    ],
    phaseTimeline: [
      { week: "Weeks 1–2", focus: "Discover", outcome: "Mobile shopping patterns understood" },
      { week: "Week 3", focus: "Define", outcome: "Scope agreed with the owner" },
      { week: "Weeks 4–5", focus: "Ideate", outcome: "Visual direction chosen" },
      { week: "Weeks 6–7", focus: "Prototype", outcome: "Checkout testable" },
      { week: "Weeks 8–9", focus: "Validate", outcome: "Flows validated on device" },
      { week: "Week 10", focus: "Deliver", outcome: "Shipped" },
    ],
    collaboration: [
      "Weekly sessions with the owner, agenda agreed in advance, decisions minuted",
      "Fortnightly reviews with engineering to test feasibility on the checkout",
      "A scope workshop where the owner decided what to cut, with the design consequences stated",
      "Continuous pairing on the cart and checkout, which were the highest-risk flows",
      "A launch review where I tested the payment flow end to end before it went live",
    ],
    decisionInputs: [
      "What shoppers said they do on mobile, and where they abandoned",
      "The owner's knowledge of their customer and their brand",
      "Engineering feasibility on the two-person team",
      "Payment provider requirements for the migration",
      "Device and data cost realities in the target market",
      "Budget: what the design could afford to include",
    ],

    uxOverview:
      "The UX work targeted one number: completed checkouts on mobile. Almost every decision — product imagery, cart persistence, checkout field count — was made by asking whether it made completion more or less likely on a mid-range Android over mobile data.",
    uxPrinciples: [
      { title: "Human-centred design", description: "Designed on the phone first, because that is where the customer actually is." },
      { title: "Simpler, clearer workflows", description: "The shortest path from a product to a paid order, with nothing optional in it." },
      { title: "Data-driven decisions", description: "Device testing changed the checkout twice, both times in the direction of fewer fields." },
      { title: "Accessible & scalable", description: "Contrast, targets and a component system that new products inherit for free." },
    ],
    flow: [
      { title: "Home", summary: "Collection entry point: featured pieces and a clear path to the shop." },
      { title: "Shop", summary: "Product grid with filters that survive navigation." },
      { title: "Product detail", summary: "Photography, size, price and an add-to-basket action that does not lose context." },
      { title: "Basket", summary: "Editable basket that survives a reload or a dropped connection." },
      { title: "Checkout", summary: "Provider-hosted payment with the fewest possible fields, returning to a confirmation." },
      { title: "Confirmation", summary: "Order reference, status and what happens next, visible in-app." },
    ],
    informationArchitecture: {
      label: "T&T Company",
      children: [
        { label: "Home" },
        { label: "Shop" },
        { label: "  All pieces" },
        { label: "  By category" },
        { label: "  By size" },
        { label: "Product" },
        { label: "  Gallery" },
        { label: "  Size & fit" },
        { label: "  Fabric & care" },
        { label: "Basket" },
        { label: "Checkout" },
        { label: "Confirmation" },
        { label: "About" },
      ],
    },
    journey: [
      { stage: "Arrive", goal: "Understand the brand in a few seconds", emotion: "neutral", quote: "Is this a real brand?" },
      { stage: "Browse", goal: "Find something that fits", emotion: "neutral", quote: "Let me see what's in my size." },
      { stage: "Evaluate", goal: "Judge the garment", emotion: "confident", quote: "That's the one." },
      { stage: "Buy", goal: "Check out without friction", emotion: "frustrated", quote: "Why is it asking for my company?" },
      { stage: "Confirm", goal: "Be sure the order went in", emotion: "confident", quote: "Got the reference, thank you." },
      { stage: "Return", goal: "Come back for something else", emotion: "confident", quote: "Saved my size this time." },
    ],
    wireframes: [
      { title: "Homepage v1", caption: "Hero-led layout. Failed device testing — pushed the shop below two screens on a mid-range Android." },
      { title: "Collection grid", caption: "Two-column on mobile so photography stays legible without pinching." },
      { title: "Product detail", caption: "Gallery, size, price and a persistent add-to-basket bar." },
      { title: "Refined checkout", caption: "Provider-hosted with the field count cut to the minimum after testing." },
    ],
    usability: {
      participants: "6 shoppers",
      rounds: "2 rounds, both on a mid-range Android",
      points: [
        { text: "A hero-led homepage pushed the collection below two screens of scrolling", status: "negative" },
        { text: "Showing the collection immediately after the header increased exploration", status: "positive" },
        { text: "A two-column mobile grid kept photography legible without pinching", status: "positive" },
        { text: "Checkout asking for a company name was abandoned; removing it fixed the flow", status: "negative" },
        { text: "A persistent add-to-basket bar meant nobody had to scroll back to act", status: "positive" },
        { text: "An in-app order reference removed the need to email the business for confirmation", status: "positive" },
      ],
    },
    decisions: [
      { title: "Primary action placement", before: "Add to basket at the bottom of the product page, below the fold on mobile.", after: "A persistent bottom bar on the product page, always reachable." },
      { title: "Filters", before: "A filter sheet with no indication of what was applied.", after: "Size filter as removable chips directly above the grid, applied state visible." },
      { title: "Progress indicators", before: "A multi-step checkout progress bar.", after: "Provider-hosted payment with a single return step, so there is nothing to track." },
      { title: "Navigation", before: "A hamburger menu hiding the whole catalogue.", after: "Persistent shop link in the header, with the collection one tap from anywhere." },
      { title: "Empty states", before: "'No products' with no explanation.", after: "Filter-aware empty states that name the active filter and offer to clear it." },
    ],
    uxAccessibility: [
      "Tap targets at least 44px, with the primary basket action considerably larger",
      "Focus order follows the visual order, and the persistent bar does not trap focus",
      "Every image has descriptive alt text; decorative imagery uses an empty alt",
      "Price and size are text, never conveyed by an image or a badge position",
      "Colour contrast meets WCAG 2.2 AA throughout, including on photography overlays",
      "The basket persists across navigation, reload and a dropped connection, and announces its change",
      "No auto-advancing carousel, so nothing moves while a shopper is reading",
    ],

    uiOverview:
      "The visual system is deliberately spare: a fashion brand reads as expensive through restraint and photography, not through decoration. Type does most of the work, spacing does the rest, and the product images are the only thing allowed to be loud.",
    designGoals: [
      { title: "Modern, clear visual direction", description: "High-contrast type, generous whitespace and photography-forward layout that works at 390px." },
      { title: "Scalable component system", description: "A product card, a price, a size selector and a basket bar, specified once and reused throughout." },
      { title: "Accessible and inclusive design", description: "Contrast, target size and reduced-motion defaults built into the system rather than checked per screen." },
    ],
    uiPrinciples: [
      { title: "Clarity", description: "The product is the loudest thing on every screen. Everything else recedes." },
      { title: "Consistency", description: "One product card, one price treatment, one basket bar — learned once, used everywhere." },
      { title: "Purposeful restraint", description: "No gradients, no decorative motion, no overlay text on photography unless contrast demands it." },
    ],
    moodboard: [
      { title: "Editorial type", caption: "A high-contrast serif for headings, chosen for a fashion register that a sans cannot carry" },
      { title: "Product photography", caption: "Single-garment shots on a consistent background so the grid reads as a collection" },
      { title: "Paper and ink", caption: "A near-black and warm off-white base, avoiding the pure white of template stores" },
    ],
    brandPhrase: "Made to be worn, not to be bought once.",
    palette: [
      { name: "ink-900", value: "#041625", usage: "Primary text, header" },
      { name: "ink-700", value: "#1B2C3D", usage: "Secondary text" },
      { name: "paper-50", value: "#FAF9F7", usage: "Page background" },
      { name: "paper-200", value: "#EDEAE4", usage: "Dividers, subtle panels" },
      { name: "accent-500", value: "#8C6A4A", usage: "Sale and emphasis, used sparingly" },
      { name: "success-600", value: "#0A9F63", usage: "Order confirmed" },
      { name: "alert-600", value: "#C0392B", usage: "Errors only" },
    ],
    typography: [
      { name: "Display", value: "Playfair Display 40/46 Bold", usage: "Homepage and collection titles" },
      { name: "Heading", value: "Playfair Display 26/32 SemiBold", usage: "Product and section titles" },
      { name: "Title", value: "Inter 16/24 SemiBold", usage: "Product names, buttons" },
      { name: "Body", value: "Inter 16/24 Regular", usage: "Descriptions and form labels" },
      { name: "Price", value: "Inter 18/24 SemiBold", usage: "Price, tabular figures" },
    ],
    spacing: [
      { name: "space-1", value: "4px" },
      { name: "space-2", value: "8px" },
      { name: "space-3", value: "12px" },
      { name: "space-4", value: "16px" },
      { name: "space-6", value: "24px" },
      { name: "space-8", value: "32px" },
      { name: "space-16", value: "64px" },
    ],
    icons: ["Bag", "Search", "Filter", "Chevron", "Close", "Check", "Truck", "Ruler", "Heart", "Arrow", "Alert", "Menu"],
    components: [
      { name: "Product card", variants: ["default", "featured", "compact"], states: ["default", "hover", "pressed", "sold-out", "loading"] },
      { name: "Button", variants: ["primary", "secondary", "ghost"], states: ["default", "hover", "pressed", "disabled", "loading"] },
      { name: "Size selector", variants: ["inline", "sheet"], states: ["available", "selected", "unavailable", "disabled"] },
      { name: "Filter chip", variants: ["filter", "label"], states: ["default", "selected", "clearable"] },
      { name: "Price", variants: ["standard", "sale", "range"], states: ["default", "loading"] },
      { name: "Cart bar", variants: ["product", "sticky"], states: ["empty", "has-items", "updating", "error"] },
      { name: "Gallery", variants: ["single", "swipe", "grid"], states: ["loading", "ready", "error"] },
    ],
    states: [
      { name: "Default", description: "Resting state across all components.", tone: "neutral" },
      { name: "Hover", description: "Card lifts and the image scales 3% over 180ms, disabled under reduced motion.", tone: "neutral" },
      { name: "Pressed", description: "1px shift with reduced opacity, so the control feels physical.", tone: "neutral" },
      { name: "Disabled", description: "Opacity plus a text explanation of why, never a silent dead control.", tone: "neutral" },
      { name: "Success toast", description: "Order confirmed, with the order reference included in the text.", tone: "success" },
      { name: "Info toast", description: "Added to bag, with the persistent cart bar reflecting the count.", tone: "accent" },
      { name: "Warning", description: "Low stock or a size running out, stated in text on the size selector.", tone: "warning" },
      { name: "Error", description: "Payment or network failure with a recovery action, announced to assistive technology.", tone: "danger" },
    ],
    uiBeforeAfter: [
      { title: "Homepage", before: { title: "Before", caption: "Full-bleed hero, collection below two screens" }, after: { title: "After", caption: "Compact header, collection immediately visible" }, note: "Device testing showed the hero pushed the shop out of reach on a mid-range Android." },
      { title: "Product page", before: { title: "Before", caption: "Add to basket below the fold" }, after: { title: "After", caption: "Persistent bottom bar, always reachable" }, note: "Nobody in testing had to scroll back to act once the bar was added." },
    ],
    finalScreens: [
      { title: "Home", caption: "Compact header with the collection immediately visible" },
      { title: "Shop", caption: "Two-column grid with size filter chips" },
      { title: "Product", caption: "Gallery, size, price and a persistent basket bar" },
      { title: "Basket", caption: "Editable, persisted across reload and navigation" },
      { title: "Confirmation", caption: "Order reference and next steps, in-app" },
    ],

    outcomeMetrics: [
      { value: "2", label: "Device testing rounds on a mid-range Android", tone: "accent" },
      { value: "6", label: "Shoppers tested across both rounds", tone: "accent" },
      { value: "3", label: "Checkout fields removed after testing", tone: "success" },
      { value: "390px", label: "Design baseline, with no layout below it needing a redesign", tone: "accent" },
    ],
    outcomeGroups: [
      { title: "Business impact", points: ["Card payments on a compliant provider with no lost customer journey", "The owner can fulfil orders and update products from one place", "No admin software to licence or maintain"] },
      { title: "User impact", points: ["The collection is visible on the first screen of a phone", "Photography stays legible without pinching", "The basket survives a reload, a navigation and a dropped connection"] },
      { title: "Design impact", points: ["A product card and basket bar system the owner can extend without a redesign", "Device testing on real hardware rather than a simulator changed the layout twice", "Checkout kept to the minimum fields, which improved completion and reduced build time"] },
    ],
    outcomeCompare: {
      title: "Homepage",
      before: { title: "Before", caption: "Full-bleed hero with the collection below the fold" },
      after: { title: "After", caption: "Compact header with the collection on the first screen" },
    },
    testimonial: {
      quote: "I can update the shop myself now. I don't need to call anyone to add a piece.",
      name: "Business owner",
    },
    additionalWins: [
      "Component system reused for a follow-on marketing site",
      "Checkout field reduction cut both friction and build time",
      "Established device testing on real hardware as a default step for client work",
      "The scope workshop produced a written record of what was cut and why, which made later requests easier",
    ],
    shipped: [
      "Homepage with the collection above the fold",
      "Shop grid with size and category filters",
      "Product detail with gallery, size and persistent basket bar",
      "Basket with persistence across reload and navigation",
      "Provider-hosted checkout with the minimum field count",
      "Order confirmation with an in-app reference",
      "About page",
      "Design system and component library",
    ],

    handoffNarrative:
      "The build was small and the budget was smaller, so the handoff had to be short. Specs focused on the components that were reused — the product card, the basket bar, the size selector — with exact spacing values, and the behaviours that were easy to get wrong, like basket persistence and the checkout return.",
    handoffGoals: [
      "Components specified with every state, including sold-out and loading",
      "Spacing and type given as values, not approximations",
      "Basket persistence behaviour specified precisely, because it is easy to get subtly wrong",
      "Checkout return flow documented as a sequence",
      "Accessibility requirements written as acceptance criteria",
      "Component names matching engineering's vocabulary",
    ],
    redlines: [
      { title: "Product page", caption: "Redlined with the persistent bar, gallery ratios and size selector states" },
      { title: "Shop grid", caption: "Column ratios, filter chip spacing and the sold-out treatment" },
      { title: "Checkout return", caption: "Annotated as a sequence showing what the shopper sees on success and on failure" },
    ],
    annotatedScreens: [
      { title: "Basket", caption: "Edge cases: an item that sold out while in the basket, and a failed basket update" },
      { title: "Shop filters", caption: "Behaviour when a filter combination returns nothing, and how the applied set is shown" },
      { title: "Confirmation", caption: "Responsive guidance and what happens if the shopper arrives here directly" },
    ],
    componentDocs: [
      { title: "Product card", caption: "Three variants, five states, usage examples and the accessibility notes" },
      { title: "Cart bar", caption: "Empty, populated, updating and error states with the copy for each" },
      { title: "Size selector", caption: "Availability treatment and how 'unavailable' is communicated without colour alone" },
    ],
    collaborationNotes: [
      "Weekly pairing on the basket and checkout, the two highest-risk flows",
      "A shared channel with same-day answers on implementation questions",
      "Joint review of the provider's hosted checkout return before it was built",
      "A scope workshop where cut features were recorded with their design consequences",
    ],
    implementationSupport: [
      "Answered implementation questions same day throughout the build",
      "Reviewed each component on a real device before it was reused across screens",
      "Tested the full payment flow end to end before launch",
      "Separated design issues from implementation issues during bug triage",
      "Reviewed the launch build against the specs and logged every deviation",
    ],
    releaseStats: [
      { value: "10 wks", label: "Design and build", tone: "accent" },
      { value: "3", label: "Checkout fields removed after testing", tone: "success" },
      { value: "0", label: "Design deviations open at release", tone: "success" },
      { value: "390px", label: "Design baseline for all layouts", tone: "accent" },
    ],
    postLaunch: [
      "Reviewed the live store against the designs on a real device",
      "Watched the first real checkouts for drop-off, which confirmed the checkout field reduction",
      "Fed early customer questions into the confirmation and size selector copy",
      "Documented the component system so the owner can extend it with a developer when needed",
      "Confirmed with the owner that content updates are now unaided",
    ],
  },
};

export const uxProjects: PortfolioProject[] = [waddlePlay, cultevaUx, tandtUx];
