import type { PortfolioProject, VersionSiteContent } from "@/lib/content/types";

/* ==========================================================================
   Project Manager / Scrum Master / Product Owner — sample content.
   Replace by publishing `variants` on the matching Sanity project documents.
   ========================================================================== */

export const pmSite: VersionSiteContent = {
  version: "pm",
  roleLong: "Project Manager / Scrum Master",
  heroEyebrow: "Project management that ships",
  heroHeadline: "Projects that turn strategy into results.",
  heroIntro:
    "I run delivery end to end — discovery, prioritisation, release planning and the stakeholder conversations in between. I am the person who makes the trade-offs explicit so a team can move fast without losing sight of the outcome.",
  heroCtaPrimary: "View projects",
  heroCtaSecondary: "Download resume",
  heroMetrics: [
    { value: "6+", label: "Years delivering client work" },
    { value: "12", label: "Products taken to launch" },
    { value: "40%", label: "Median scope reduction in kickoff" },
    { value: "3", label: "Certifications in delivery practice" },
  ],
  positioningNote:
    "The best project managers are invisible when things go well and unmistakable when they don't.",
  featuredProjects: ["waupay", "reguhub", "t-and-t-company"],
  introBlocks: [
    {
      title: "Ownership, not reporting",
      description:
        "I hold the backlog, the roadmap conversation and the release date. That means decisions get made by the person accountable for them, not escalated into a meeting.",
    },
    {
      title: "Evidence over assertion",
      description:
        "Every claim on this page links back to a real artifact — a RAID log, a prioritisation table, a release checklist. If it is not written down, it did not happen.",
    },
    {
      title: "Outcomes over output",
      description:
        "Sprint velocity means nothing on its own. I track the business and user metrics the work was supposed to move, and report against those.",
    },
  ],
  skills: [
    "Agile delivery (Scrum, Kanban)",
    "Roadmap & release planning",
    "Backlog ownership & grooming",
    "Stakeholder management",
    "Risk, issue & dependency management",
    "Prioritisation (RICE, MoSCoW, WSJF)",
    "Requirements & user stories",
    "Budget & resource planning",
    "Vendor & client communication",
    "Process improvement",
  ],
  process: [
    {
      title: "Discover",
      summary: "Understand the business problem before committing to a solution.",
      activities: [
        "Stakeholder interviews",
        "Existing-system audit",
        "Constraint mapping",
        "Success metric definition",
      ],
      output: "Project brief & success metrics",
    },
    {
      title: "Define",
      summary: "Turn the brief into a scoped, sequenced plan the team can commit to.",
      activities: ["Backlog creation", "User story mapping", "Acceptance criteria", "Estimation"],
      output: "Prioritised backlog & release plan",
    },
    {
      title: "Plan",
      summary: "Sequence the work, assign ownership and surface dependencies early.",
      activities: [
        "Sprint planning",
        "Capacity planning",
        "RACI assignment",
        "Dependency and risk review",
      ],
      output: "Sprint plan & RAID log",
    },
    {
      title: "Execute",
      summary: "Keep delivery visible, unblocked and honest about status.",
      activities: [
        "Daily stand-up facilitation",
        "Blocker removal",
        "Scope control",
        "Design and engineering reviews",
      ],
      output: "Incrementing software & status reporting",
    },
    {
      title: "Measure",
      summary: "Check the work moved the metric it was supposed to move.",
      activities: [
        "Metric review",
        "Feedback synthesis",
        "Defect and support review",
        "Client acceptance",
      ],
      output: "Outcome report & acceptance sign-off",
    },
    {
      title: "Iterate",
      summary: "Feed what we learned back into the backlog and the next release.",
      activities: [
        "Retrospective",
        "Backlog refinement",
        "Process improvement actions",
        "Next-phase roadmap",
      ],
      output: "Improvement actions & follow-up roadmap",
    },
  ],
  about: [
    "I am the founder of MeiFlume, a digital transformation studio, which means I have spent years on both sides of the table: setting the strategy with clients, and then being accountable for shipping it.",
    "My delivery work spans regulated fintech, workplace health and safety, and consumer ecommerce — three very different problems that share one requirement: somebody has to make the call and write down why.",
    "I work best in small, senior teams where the product owner is close to the work and decisions need to be made in a day rather than a fortnight. I am comfortable running both Scrum and Kanban, and I care more about flow and predictability than about which one we call it.",
    "Outside delivery I hold a Scrum Master and a PRINCE2 Practitioner qualification, and I am an active member of the South African Scrum community.",
  ],
  certifications: [
    {
      name: "Certified ScrumMaster (CSM)",
      issuer: "Scrum Alliance",
      year: "2022",
      url: "https://www.scrumalliance.org/certifications/csm/",
    },
    {
      name: "PRINCE2 Practitioner",
      issuer: "PeopleCert",
      year: "2023",
      url: "https://www.axelos.com/certifications/prince2-project-management",
    },
    {
      name: "Certified Kanban Master",
      issuer: "Kanban University",
      year: "2024",
    },
  ],
  testimonials: [],
  ctaHeading: "Hiring a project manager?",
  ctaBody:
    "Send me the role, the messy bits and the deadline. I will tell you honestly whether I am the right fit and what I would do in the first month.",
  seo: {
    title: "William Hankey — Project Manager",
    description:
      "Project management portfolio: delivery ownership, stakeholder alignment, prioritisation frameworks and measurable outcomes.",
  },
};

const waupay: PortfolioProject = {
  slug: "waupay",
  title: "WauPay",
  subtitle: "Business payments automation platform",
  summary:
    "A centralised platform for local and cross-border business payments with layered approval workflows, mobile authorisation and automated bank verification.",
  category: "Web App / Fintech",
  cover: null,
  link: null,
  themeColor: "#398036",
  tags: ["React", "TypeScript", "Xero", "MongoDB", "Node.js"],
  isPlaceholder: true,
  pm: {
    industry: "Financial services / B2B payments",
    status: "Delivered",
    statusTone: "success",
    dateRange: "2023 — 2024",
    roles: ["Project Manager", "Business Analyst"],
    methodology: ["Scrum", "Kanban for support flow"],
    teamSize: "6 people (2 engineers, 1 designer, 1 QA, client PO, 1 ops lead)",
    summary:
      "WauPay replaces a patchwork of bank portals, email approvals and manual reconciliation with one platform for local and cross-border business payments. The hard part was never the payment screen — it was getting a regulated client to move approval authority out of inboxes and into a system that can be audited.",
    businessGoals: [
      "Cut payment approval turnaround from days to under an hour",
      "Eliminate manual bank-detail verification and the fraud it enabled",
      "Give finance teams real-time cash flow visibility via Xero",
      "Comply with client audit requirements without bespoke exports",
    ],

    results: [
      {
        value: "3 days",
        label: "Median approval time, down from multi-day email chains",
        note: "Before → after",
        tone: "success",
      },
      {
        value: "100%",
        label: "Payment destinations verified by automated bank check",
        note: "Replaced a manual two-person check",
        tone: "success",
      },
      {
        value: "9",
        label: "Client entities onboarded after launch",
        tone: "accent",
      },
      {
        value: "0",
        label: "Release rollbacks in the first six months",
        tone: "accent",
      },
    ],
    highlights: [
      "Owned and groomed the backlog across two sprints of discovery before a line of code was written",
      "Ran weekly prioritisation sessions with the client's finance lead and converted them into a RICE-scored backlog",
      "Built the layered approval workflow as an explicit requirement after discovering approvals were the true bottleneck",
      "Facilitated a risk review that surfaced the Xero reconciliation dependency six weeks before it blocked a release",
      "Ran daily stand-up, sprint planning, review and retrospective for nine consecutive sprints",
      "Owned the release plan, including a phased rollout to the client's largest entity",
      "Ran a two-week hypercare window after go-live with a daily status call",
      "Closed the project with an acceptance sign-off and a handed-over backlog",
    ],
    deliverables: [
      { title: "Project brief & success metrics", caption: "Signed off before kickoff" },
      { title: "Prioritised backlog", caption: "RICE-scored with the client's finance lead" },
      { title: "Release plan", caption: "Phased across three client entities" },
      { title: "RAID log", caption: "Maintained from week one to acceptance" },
      { title: "Sprint board snapshot", caption: "Sprint 9 — final before release" },
    ],

    roleSummary:
      "I owned delivery for WauPay end to end: discovery with the client's finance and operations leads, backlog ownership, sprint cadence, stakeholder reporting, release planning and go-live support. I did not write production code, but I was accountable for whether the team had the right work, in the right order, with the right definition of done.",
    roleLevel: "Delivery lead (client-facing)",
    duration: "9 sprints + 6-week release runway",
    responsibilities: [
      "Owned and prioritised the product backlog with the client's finance lead",
      "Facilitated sprint planning, refinement, stand-up, review and retrospective",
      "Wrote user stories and acceptance criteria with the business analyst",
      "Ran weekly stakeholder status reporting against a RAG status",
      "Maintained the RAID log and drove risk and dependency closure",
      "Planned and coordinated releases, including a phased entity rollout",
      "Coordinated cross-functional work between engineering, design, QA and client operations",
      "Captured and triaged client feedback into the backlog",
      "Managed scope conversations — including two features deliberately descoped",
      "Ran the go-live hypercare period and closed acceptance",
    ],
    ownershipAreas: [
      {
        title: "Product strategy",
        points: [
          "Translated business goals into a sequenced roadmap",
          "Ran prioritisation sessions using RICE with client stakeholders",
          "Defined what explicitly was not in scope for phase one",
        ],
      },
      {
        title: "Delivery management",
        points: [
          "Owned the release plan and sprint cadence",
          "Managed the RAID log from kickoff to acceptance",
          "Coordinated a phased rollout across three client entities",
        ],
      },
      {
        title: "Team coordination",
        points: [
          "Ran daily stand-up and removed blockers same day",
          "Paired design and engineering reviews to avoid late rework",
          "Protected focus time by batching stakeholder questions",
        ],
      },
      {
        title: "Stakeholder alignment",
        points: [
          "Weekly written status report with RAG and decisions required",
          "Set expectations on what a sprint would and would not deliver",
          "Ran the go-live hypercare daily call",
        ],
      },
    ],
    decisions: [
      {
        title: "Prioritisation",
        points: [
          "RICE adopted in week two after the client defaulted to loudest-voice-first",
          "Scoring done live in sessions so stakeholders could see the trade-off",
        ],
      },
      {
        title: "Release planning",
        points: [
          "Phased rollout by client entity rather than a big-bang launch",
          "First entity acted as a canary for the remaining two",
        ],
      },
      {
        title: "Acceptance criteria",
        points: [
          "Written per story with the client's finance lead, not delegated to engineering",
          "Included the audit trail requirement, which shaped the data model early",
        ],
      },
      {
        title: "Trade-off management",
        points: [
          "Two features descoped to phase two rather than carried as silent debt",
          "Scope changes required a stated business reason and a re-scored backlog",
        ],
      },
    ],
    collaborators: [
      { name: "Front-end engineer", role: "React & TypeScript" },
      { name: "Back-end engineer", role: "Node.js & MongoDB" },
      { name: "Product designer", role: "UX and design system" },
      { name: "QA engineer", role: "Test strategy & release sign-off" },
    ],
    stakeholders: [
      { name: "Client finance lead", role: "Product owner" },
      { name: "Client operations manager", role: "Process owner" },
      { name: "Client compliance officer", role: "Audit requirements" },
      { name: "MeiFlume account lead", role: "Commercial oversight" },
    ],
    ceremonies: [
      { title: "Backlog refinement", cadence: "Weekly", description: "Split, sized and re-scored stories with the client product owner." },
      { title: "Sprint planning", cadence: "Fortnightly", description: "Team commits to a sprint goal, not a list of tickets." },
      { title: "Stand-up", cadence: "Daily", description: "Fifteen minutes, blockers captured and assigned immediately." },
      { title: "Sprint review", cadence: "Fortnightly", description: "Demo against acceptance criteria with client stakeholders in the room." },
      { title: "Retrospective", cadence: "Fortnightly", description: "Three actions maximum, each with an owner and a date." },
      { title: "Stakeholder sync", cadence: "Weekly", description: "Written RAG status, decisions required, and a look at the next two sprints." },
    ],
    tools: ["Jira", "Confluence", "Miro", "Figma", "Google Sheets", "Slack", "Notion"],

    approachOverview:
      "I run delivery so that the client always knows what is happening, why it is happening, and what I need from them. Everything else — the ceremonies, the tooling, the artefacts — exists to make that true and cheap to produce.",
    principles: [
      "Customer value over output — a shipped ticket that moves nothing is not a win",
      "Transparency over comfort — bad news travels faster than good news",
      "Empowered ownership — the team decides how, I decide what and when",
      "Iterative delivery — a thin slice in front of a user beats a thick slice in a branch",
    ],
    approachSteps: [
      { title: "Discover", summary: "Understand the process before touching the backlog.", activities: ["Interviews with finance and operations", "Process mapping of the current approval flow", "Compliance and audit requirement review"], methods: ["Interviews", "Process mapping", "Audit review"], output: "Project brief, success metrics, process map" },
      { title: "Define", summary: "Turn findings into a scoped, prioritised backlog.", activities: ["User story mapping", "RICE scoring workshop", "Acceptance criteria drafting"], methods: ["Story mapping", "RICE", "Backlog grooming"], output: "Prioritised backlog" },
      { title: "Prioritize", summary: "Make the trade-offs visible and agreed.", activities: ["Scoring sessions with stakeholders", "Scope boundary definition", "Phase one definition"], methods: ["RICE", "MoSCoW"], output: "Agreed phase one scope" },
      { title: "Plan", summary: "Sequence work and surface dependencies early.", activities: ["Sprint planning", "Capacity planning", "Risk and dependency review"], methods: ["Sprint planning", "RAID log"], output: "Sprint plan, release plan, RAID log" },
      { title: "Execute", summary: "Keep delivery unblocked and status honest.", activities: ["Daily stand-up", "Blocker removal", "Design and engineering reviews"], methods: ["Scrum ceremonies", "Code/design review"], output: "Incrementing software" },
      { title: "Measure", summary: "Check the work moved the agreed metric.", activities: ["Approval turnaround tracking", "Defect review", "Client acceptance"], methods: ["Metric review", "Acceptance testing"], output: "Outcome report" },
      { title: "Iterate", summary: "Feed learning back into process and backlog.", activities: ["Retrospective actions", "Process improvement", "Next-phase roadmap"], methods: ["Retrospective"], output: "Improvement log, phase two roadmap" },
    ],
    stakeholderPlan: {
      caption: "Stakeholder communication plan",
      columns: ["Stakeholder group", "Method", "Cadence", "Key focus"],
      rows: [
        ["Client product owner", "Sprint review + backlog session", "Fortnightly", "Scope, priority, acceptance"],
        ["Client finance team", "Written status report", "Weekly", "Approval turnaround, exceptions"],
        ["Client operations", "Working session", "Weekly", "Process fit, edge cases"],
        ["Compliance officer", "Review checkpoint", "Fortnightly", "Audit trail, access control"],
        ["Delivery team", "Stand-up + planning", "Daily / fortnightly", "Blockers, sprint goal"],
        ["Account lead", "Internal status", "Weekly", "Commercial risk, scope change"],
      ],
    },
    prioritization: {
      framework: "RICE",
      description:
        "Every story was scored live in a prioritisation session. Reach came from the client's own transaction volumes, Impact was a 1–3 band agreed with the product owner, Confidence was my estimate, and Effort came from engineering. Scoring in the room mattered more than the formula — stakeholders could see why their item was not top of the list.",
      table: {
        caption: "Sample of the scored backlog at sprint 3",
        columns: ["Story", "Reach", "Impact", "Confidence", "Effort", "Score"],
        rows: [
          ["Layered approval workflow", "1,200", "3", "80%", "8", "36.0"],
          ["Bank detail verification", "1,200", "3", "90%", "5", "64.8"],
          ["Xero reconciliation export", "1,200", "2", "70%", "3", "56.0"],
          ["Bulk beneficiary upload", "400", "1", "60%", "3", "8.0"],
          ["Multi-currency display", "900", "1", "50%", "2", "2.3"],
        ],
      },
    },
    risks: [
      "Xero reconciliation could not be specified until the client shared their chart of accounts",
      "Compliance sign-off had a two-week lead time and sat on the critical path",
      "Cross-border payment rules differ by corridor and were initially treated as one case",
      "The client's finance team had no dedicated time for UAT",
      "A single back-end engineer created a delivery bottleneck on payment logic",
    ],
    raid: {
      caption: "RAID extract at sprint 6",
      columns: ["Type", "Description", "Owner", "Status"],
      rows: [
        ["Risk", "Compliance review may delay release", "Me", "Mitigated — review moved to sprint 4"],
        ["Assumption", "Client will provide 2 days per week for UAT", "Client PO", "Confirmed"],
        ["Issue", "Xero chart of accounts not supplied", "Client ops", "Closed — supplied sprint 3"],
        ["Dependency", "Bank verification API sandbox access", "Back-end", "Closed sprint 2"],
      ],
    },

    outcomeGroups: [
      {
        title: "Business impact",
        points: [
          "Approvals moved from a multi-day email chain to a same-day workflow decision",
          "Manual two-person bank verification replaced by an automated check",
          "Finance gained real-time cash flow visibility through the Xero integration",
          "Phase two scope agreed and funded before phase one shipped",
        ],
      },
      {
        title: "Customer impact",
        points: [
          "Authorisers approve from a phone rather than a desktop in an office",
          "Beneficiaries get a clear, self-serve status instead of an email asking where a payment is",
          "Audit-ready history removed a recurring compliance request",
        ],
      },
      {
        title: "Team impact",
        points: [
          "Definition of done agreed with the client before sprint one, cutting clarification churn",
          "No mid-sprint scope changes across nine sprints",
          "Retrospective actions were consistently closed rather than parked",
        ],
      },
      {
        title: "Operational impact",
        points: [
          "Reconciliation exceptions dropped because every step is logged with a timestamp and actor",
          "Onboarding a new client entity became a configuration task, not a project",
        ],
      },
    ],
    beforeAfter: [
      { label: "Payment approval turnaround", before: "3 days", after: "Under 1 hour", unit: "median" },
      { label: "Manual verification steps", before: "2 people", after: "Automated", unit: "per payment" },
      { label: "Reconciliation exceptions", before: "Manual", after: "Logged + exportable", unit: "per cycle" },
      { label: "Phases delivered to first release", before: "0", after: "1 of 2", unit: "with funded phase two" },
    ],
    milestones: [
      { date: "Week 2", title: "RICE adopted", outcome: "Backlog scoring replaced opinion-based ordering" },
      { date: "Week 5", title: "Compliance review complete", outcome: "Audit trail requirement locked into the data model" },
      { date: "Week 12", title: "First entity live", outcome: "Canary rollout succeeded with two minor defects" },
      { date: "Week 14", title: "All entities live", outcome: "Full client population migrated" },
      { date: "Week 16", title: "Acceptance signed", outcome: "Project closed, backlog handed over" },
    ],
    measurement: [
      "Approval turnaround: timestamps captured by the platform itself, measured across the first 200 payments after launch",
      "Verification coverage: count of payments with an automated bank check recorded, from the audit log",
      "Defect rate and rollbacks: from the sprint board and release checklist",
      "Client satisfaction: post-launch survey completed with the client's operations manager and finance lead",
    ],
    achievements: [
      "Nine consecutive sprints delivered with no mid-sprint scope change",
      "Phased rollout across three client entities with no data loss",
      "Compliance requirements embedded before the first release rather than retrofitted",
      "Two features descoped deliberately instead of being carried as debt",
      "Project closed with a funded and agreed phase two scope",
    ],

    artifacts: [
      { title: "Product roadmap", category: "Strategy & Planning", description: "Two-phase roadmap agreed with the client, showing what was deliberately deferred and why." },
      { title: "Release plan", category: "Strategy & Planning", description: "Phased rollout sequence by client entity, with a canary window and rollback criteria." },
      { title: "Backlog snapshot", category: "Agile Delivery", description: "The RICE-scored backlog as it stood at sprint three, with the phase one boundary marked." },
      { title: "User story example", category: "Requirements", description: "Layered approval workflow story, written with the client's finance lead including audit trail criteria." },
      { title: "Sprint board", category: "Agile Delivery", description: "Sprint nine board: the final sprint before release, with carry-over visible rather than hidden." },
      { title: "Stakeholder map", category: "Stakeholders", description: "Who decides, who advises, who is affected — with the escalation path written down." },
      { title: "RAID log", category: "Analysis & Reporting", description: "Risks, assumptions, issues and dependencies, each with an owner and a closure date." },
      { title: "RACI matrix", category: "Stakeholders", description: "Responsibility split across client and delivery team for build, UAT and go-live." },
      { title: "Workshop output", category: "Strategy & Planning", description: "Approval process map from the discovery workshop, annotated with the two bottlenecks found." },
      { title: "Retrospective notes", category: "Agile Delivery", description: "Sprint nine retrospective with three actions, two of which were already closed." },
      { title: "KPI dashboard", category: "Analysis & Reporting", description: "Approval turnaround, exception rate and active entity count, reviewed weekly with the client." },
      { title: "Launch checklist", category: "Strategy & Planning", description: "Go-live checklist with rollback criteria, hypercare schedule and named owners per line." },
    ],

    learnings: [
      { title: "Stakeholder alignment", points: ["Agreement on the prioritisation method in week two was worth more than any amount of later status reporting."] },
      { title: "Discovery depth", points: ["The approval bottleneck was invisible until we mapped the process. Two sprints of story mapping found it."] },
      { title: "Backlog hygiene", points: ["Stories that did not have acceptance criteria agreed with the client never got smaller — they got noisier."] },
      { title: "Scope management", points: ["Saying no early, with a reason and a place in phase two, kept trust better than quietly absorbing the work."] },
      { title: "Release planning", points: ["The canary entity found two real defects in week one that a big-bang launch would have found in production."] },
      { title: "Cross-functional communication", points: ["One weekly written status, read by everyone, beat three different informal updates."] },
    ],
    workedWell: [
      "Locking the prioritisation method in week two rather than week six",
      "Writing acceptance criteria with the client, not delegating it to engineering",
      "Phased rollout with an explicit canary window and rollback criteria",
      "Running retrospectives with a hard cap of three actions",
      "Batching stakeholder questions so the team was not interrupted mid-sprint",
      "Closing the project with a funded phase two rather than an open backlog",
    ],
    improveNextTime: [
      "Bring a draft prioritisation method to the first workshop instead of introducing it in the second",
      "Book compliance review slots during discovery rather than treating them as a downstream dependency",
      "Formalise the client's UAT commitment in the kickoff so time is protected",
      "Raise the single-engineer dependency earlier so a pairing or staffing plan could be made",
      "Capture corridor-specific payment rules during discovery, not during the second sprint",
      "Set up the KPI dashboard before launch so the baseline exists for comparison",
    ],
    retrospectives: {
      caption: "Retrospective insights and the actions taken",
      columns: ["What we learned", "Action taken", "Impact"],
      rows: [
        ["Acceptance criteria written by engineering alone were frequently reinterpreted", "Client joins every refinement session", "Clarification requests dropped; stories stopped bouncing"],
        ["Two dependencies surfaced too late to plan around", "Dependency review added as a standing sprint agenda item", "Xero and bank API dependencies were known a sprint earlier"],
        ["Status meetings were longer than the writing they replaced", "Moved to a written update with an async decision window", "Sync time reduced; decisions got a paper trail"],
        ["Phase one scope crept through ambiguous tickets", "Added a definition-of-phase-one document signed by the client PO", "No mid-sprint scope changes across the following sprints"],
      ],
    },
    futurePractices: [
      "Publish a one-page delivery charter in week one: cadence, decision rights, definition of done",
      "Set up the metrics dashboard during discovery so there is a pre-launch baseline",
      "Run a risk review at the end of every sprint, not only at kickoff",
      "Keep a running decision log so trade-offs can be explained months later",
    ],
  },
};

const reguhub: PortfolioProject = {
  slug: "reguhub",
  title: "ReguHub",
  subtitle: "Workplace safety & compliance platform",
  summary:
    "A workplace safety management platform built with a health and safety consultant, replacing manual compliance tracking and fragmented documentation.",
  category: "Web App / SaaS",
  cover: null,
  link: null,
  themeColor: "#28446B",
  tags: ["React", "MUI", "MongoDB", "Keycloak"],
  isPlaceholder: true,
  pm: {
    industry: "Workplace health and safety",
    status: "Delivered",
    statusTone: "success",
    dateRange: "2024",
    roles: ["Project Manager", "Product Owner"],
    methodology: ["Scrum"],
    teamSize: "4 people (2 engineers, 1 designer, client safety consultant)",
    summary:
      "ReguHub came out of a consultant's frustration with the tools she was asked to run a business on. The scope risk was regulatory: safety compliance has real consequences, so 'good enough' was never an option and every requirement needed a defensible reason behind it.",
    businessGoals: [
      "Replace spreadsheet-based compliance tracking with auditable records",
      "Give safety consultants and site managers one shared view of compliance status",
      "Reduce time spent preparing for an audit",
      "Prove the product before approaching larger customers",
    ],
    results: [
      { value: "5", label: "Customer sites onboarded in the pilot", tone: "accent" },
      { value: "1", label: "Source of truth for compliance records", note: "Previously four spreadsheets", tone: "success" },
      { value: "0", label: "Missed audit findings in the pilot period", tone: "success" },
      { value: "100%", label: "Of safety records traceable to an actor and a timestamp", tone: "accent" },
    ],
    highlights: [
      "Ran weekly discovery with the client consultant to understand the regulatory workflow before writing stories",
      "Built a compliance vocabulary glossary to stop the same requirement being described three different ways",
      "Owned the backlog and definition of done for a regulated MVP",
      "Introduced a compliance review gate before any requirement reached build",
      "Managed the pilot onboarding for five customer sites as a delivery workstream",
      "Coordinated a legal review of the data retention policy",
      "Ran a post-pilot review with the consultant and converted findings into a phase two backlog",
    ],
    deliverables: [
      { title: "Project charter", caption: "Scope, success metrics and compliance constraints" },
      { title: "Compliance requirement matrix", caption: "Every requirement traced to a regulation or a client policy" },
      { title: "Pilot onboarding plan", caption: "Five sites, sequenced with data migration steps" },
      { title: "Sprint board", caption: "Sprint board at pilot release" },
    ],

    roleSummary:
      "I ran this as a hybrid Product Owner and Project Manager: close enough to the work to write a usable story, senior enough to say no to the client's product owner when a request had no compliance basis. The defining constraint was that this product touches people's safety, so I treated 'why does this exist?' as a required field on every story.",
    roleLevel: "Product Owner / Project Manager",
    duration: "6 months to pilot release",
    responsibilities: [
      "Ran discovery workshops with the client safety consultant",
      "Owned and prioritised the backlog",
      "Maintained a requirement-to-regulation traceability matrix",
      "Introduced and enforced a compliance review gate",
      "Facilitated sprint ceremonies and retrospectives",
      "Managed pilot site onboarding as a delivery workstream",
      "Coordinated the legal and data-retention review",
      "Reported status to the client weekly in writing",
      "Converted pilot findings into a funded phase two backlog",
    ],
    ownershipAreas: [
      { title: "Product strategy", points: ["Scoped the MVP around the regulatory minimum, not the full feature list", "Defined what the pilot had to prove before any sales conversation"] },
      { title: "Delivery management", points: ["Owned the six-month plan and the pilot readiness gate", "Ran the compliance review as a blocking activity, not a parallel one"] },
      { title: "Team coordination", points: ["Kept the consultant in refinement, not just in reviews", "Batched regulatory questions so the team was not blocked piecemeal"] },
      { title: "Stakeholder alignment", points: ["Weekly written status with an explicit decisions-required section", "Set expectations that regulatory review would gate build, and why"] },
    ],
    decisions: [
      { title: "Prioritisation", points: ["MoSCoW applied to regulatory requirements: all Musts in the MVP, Shoulds deferred to the pilot", "Anything without a named regulatory or client-policy source was pushed to Could"] },
      { title: "Release planning", points: ["Pilot released to five sites in two waves", "Wave two only started after wave one produced a clean audit export"] },
      { title: "Acceptance criteria", points: ["Every story's criteria included the audit trail behaviour", "Compliance sign-off was a required checkbox on the definition of done"] },
      { title: "Trade-off management", points: ["Cut a reporting feature that was requested twice because it had no compliance basis", "Documented the cut and its rationale in the backlog so it could be revisited"] },
    ],
    collaborators: [
      { name: "Front-end engineer", role: "React & MUI" },
      { name: "Back-end engineer", role: "Node.js & MongoDB" },
      { name: "Product designer", role: "UX and accessibility" },
      { name: "Health & safety consultant", role: "Domain authority (client)" },
    ],
    stakeholders: [
      { name: "Client founder", role: "Commercial sponsor" },
      { name: "Safety consultant", role: "Domain expert and product proxy" },
      { name: "Pilot site managers", role: "End users" },
      { name: "Legal reviewer", role: "Data retention and privacy" },
    ],
    ceremonies: [
      { title: "Discovery workshop", cadence: "Weekly during discovery", description: "Mapped the real compliance workflow with the consultant." },
      { title: "Backlog refinement", cadence: "Weekly", description: "Every story traced to a regulation or client policy before sizing." },
      { title: "Sprint planning", cadence: "Fortnightly", description: "Committed against the compliance review gate, not raw story points." },
      { title: "Stand-up", cadence: "Daily", description: "Blockers escalated same day; regulatory blockers flagged separately." },
      { title: "Sprint review", cadence: "Fortnightly", description: "Walked through the generated audit export, not just the UI." },
      { title: "Retrospective", cadence: "Fortnightly", description: "Focused on where regulatory context was missing from the team." },
    ],
    tools: ["Jira", "Confluence", "Miro", "Figma", "Google Sheets", "Slack"],

    approachOverview:
      "On a regulated product the fastest route to a wrong answer is to build first and justify later. I front-loaded domain context so the team could tell the difference between a preference and a requirement.",
    principles: [
      "Compliance is a constraint, not a feature to be added at the end",
      "Traceability is part of done — a requirement without a source is a guess",
      "Shorten the feedback loop with the domain expert rather than adding process",
      "Ship the smallest thing that can be defended in an audit",
    ],
    approachSteps: [
      { title: "Discover", summary: "Learn the regulatory workflow from the person who lives it.", activities: ["Workflow mapping sessions", "Regulatory requirement gathering", "Audit process walkthrough"], methods: ["Interviews", "Process mapping", "Audit walkthrough"], output: "Compliance requirement matrix" },
      { title: "Define", summary: "Separate regulatory minimums from nice-to-haves.", activities: ["MoSCoW classification", "Story writing with source references", "Traceability recording"], methods: ["MoSCoW", "Story mapping"], output: "Prioritised, traceable backlog" },
      { title: "Plan", summary: "Sequence build behind the compliance gate.", activities: ["Sprint planning", "Compliance review scheduling", "Pilot readiness planning"], methods: ["Sprint planning"], output: "Sprint plan, pilot plan" },
      { title: "Execute", summary: "Build with the domain expert in the room.", activities: ["Refinement with consultant", "Blocker removal", "Definition of done enforcement"], methods: ["Scrum ceremonies"], output: "Incrementing, auditable software" },
      { title: "Measure", summary: "Validate against a real audit, not a checklist.", activities: ["Audit export review", "Pilot feedback collection", "Defect triage"], methods: ["Audit review", "User feedback"], output: "Pilot readiness report" },
      { title: "Iterate", summary: "Turn pilot findings into the next funded release.", activities: ["Post-pilot review", "Backlog refinement", "Phase two scoping"], methods: ["Retrospective", "Backlog grooming"], output: "Phase two backlog" },
    ],
    stakeholderPlan: {
      caption: "Stakeholder communication plan",
      columns: ["Stakeholder group", "Method", "Cadence", "Key focus"],
      rows: [
        ["Safety consultant", "Refinement + review", "Weekly", "Requirement accuracy, workflow fit"],
        ["Client founder", "Written status", "Weekly", "Pilot readiness, scope, commercial risk"],
        ["Legal reviewer", "Documented review", "As required", "Retention, privacy, access"],
        ["Pilot site managers", "Guided onboarding", "Per wave", "Adoption friction, real workflow gaps"],
        ["Delivery team", "Stand-up + planning", "Daily / fortnightly", "Blockers, gate status"],
      ],
    },
    prioritization: {
      framework: "MoSCoW with regulatory traceability",
      description:
        "The consultant's compliance requirements were classified as Must before anything else was considered. Everything from the client's wish list had to compete against that list, and anything that could not be tied to a regulation or a written client policy was parked as Could with a note explaining why.",
      table: {
        caption: "MVP classification at sprint 1",
        columns: ["Requirement", "Class", "Source", "Decision"],
        rows: [
          ["Incident record with actor + timestamp", "Must", "Regulatory", "In MVP — audit depends on it"],
          ["Certificate expiry tracking + alerts", "Must", "Regulatory", "In MVP — missed expiry is a finding"],
          ["Role-based access control", "Must", "Client policy", "In MVP — Keycloak roles"],
          ["Custom report builder", "Should", "Client request", "Deferred — no compliance basis"],
          ["Site photograph gallery", "Could", "Client request", "Pilot only if time remains"],
        ],
      },
    },
    risks: [
      "Domain context lived in one person and was not documented",
      "Regulatory requirements arrived in prose that mapped to several different features",
      "Legal review of data retention had an unknown turnaround time",
      "Pilot sites had existing spreadsheets with inconsistent formats",
      "A small team left no slack for a second engineer being unavailable",
    ],
    raid: {
      caption: "RAID extract at pilot readiness review",
      columns: ["Type", "Description", "Owner", "Status"],
      rows: [
        ["Risk", "Single point of domain knowledge", "Me", "Mitigated — glossary and traceability matrix"],
        ["Assumption", "Pilot sites will migrate spreadsheets themselves", "Client founder", "Confirmed with wave 1"],
        ["Issue", "Legacy certificate data had inconsistent date formats", "Back-end", "Closed — migration rule documented"],
        ["Dependency", "Legal retention review", "Legal reviewer", "Closed pre-launch"],
      ],
    },

    outcomeGroups: [
      { title: "Business impact", points: ["A working product the consultant could take to prospects", "Compliance status visible to every site manager, not just the consultant", "Audit preparation reduced from days of spreadsheet work to an export"] },
      { title: "Customer impact", points: ["Safety records have one owner and one history", "Expiring certificates generate a proactive alert rather than an audit finding", "Site managers stopped maintaining parallel spreadsheets"] },
      { title: "Team impact", points: ["Traceability matrix let the team answer 'why does this exist?' without a meeting", "Compliance gate stopped late-stage rework"] },
      { title: "Operational impact", points: ["Every record is attributable, which changed how incidents were reviewed", "Onboarding a new site became data entry rather than a project"] },
    ],
    beforeAfter: [
      { label: "Sources of truth for a record", before: "4 spreadsheets", after: "1", unit: "per site" },
      { label: "Audit preparation", before: "Days", after: "One export", unit: "per audit" },
      { label: "Certificate expiry visibility", before: "Manual check", after: "Automatic alert", unit: "" },
      { label: "Record attribution", before: "Not recorded", after: "Actor + timestamp", unit: "per change" },
    ],
    milestones: [
      { date: "Month 1", title: "Requirement matrix complete", outcome: "Every MVP requirement traced to a source" },
      { date: "Month 2", title: "Compliance gate in place", outcome: "Requirements blocked without a source" },
      { date: "Month 4", title: "Feature complete", outcome: "MVP scope delivered in six sprints" },
      { date: "Month 5", title: "Pilot wave 1 live", outcome: "Two sites running, export verified" },
      { date: "Month 6", title: "Pilot complete", outcome: "Five sites, phase two funded" },
    ],
    measurement: [
      "Compliance status: read directly from the platform, reviewed weekly during the pilot",
      "Audit findings: compared against the consultant's prior two audits of the same sites",
      "Adoption: active sites and records created per site, from the platform",
      "Audit preparation effort: self-reported by the consultant for the previous and current cycle",
    ],
    achievements: [
      "Every MVP requirement traceable to a regulation or written client policy",
      "Five pilot sites onboarded with no missed audit findings",
      "Phase two funded before the pilot ended",
      "A reusable traceability matrix adopted as the default for later client work",
    ],

    artifacts: [
      { title: "Project charter", category: "Strategy & Planning", description: "Scope, success metrics and the regulatory constraints that shaped them." },
      { title: "Compliance requirement matrix", category: "Requirements", description: "Each requirement traced to the regulation or client policy that requires it." },
      { title: "Workflow map", category: "Analysis & Reporting", description: "The real compliance workflow as described by the consultant, annotated with friction points." },
      { title: "Glossary", category: "Requirements", description: "Shared vocabulary for regulatory terms, agreed in a workshop with the consultant." },
      { title: "Backlog snapshot", category: "Agile Delivery", description: "MoSCoW-classified MVP backlog at sprint one." },
      { title: "Pilot onboarding plan", category: "Strategy & Planning", description: "Two-wave site onboarding with data migration steps and rollback." },
      { title: "RACI matrix", category: "Stakeholders", description: "Who signs off on build, compliance, data migration and go-live." },
      { title: "Sprint board", category: "Agile Delivery", description: "Board at feature complete, showing what moved out of the MVP and why." },
      { title: "Retrospective notes", category: "Agile Delivery", description: "Focus on where domain context was missing during the sprint." },
      { title: "Launch checklist", category: "Strategy & Planning", description: "Compliance gate checks, data migration steps and per-site owners." },
    ],

    learnings: [
      { title: "Stakeholder alignment", points: ["Weekly refinement with the consultant replaced fortnightly reviews and caught wrong assumptions before build."] },
      { title: "Discovery depth", points: ["Walking an actual audit was worth more than three interviews — it showed which fields the regulator actually reads."] },
      { title: "Backlog hygiene", points: ["A traceability column turned 'why are we building this?' from an opinion into a lookup."] },
      { title: "Scope management", points: ["Refusing a twice-requested feature was easier once it had to be traced to a source."] },
      { title: "Release planning", points: ["Two pilot waves gave a real de-risking step that a single launch could not."] },
      { title: "Cross-functional communication", points: ["Showing the audit export in the sprint review shifted the conversation from UI to evidence."] },
    ],
    workedWell: [
      "Requiring a source reference on every requirement",
      "Running the compliance review as a blocking gate rather than a parallel activity",
      "Including the domain expert in refinement, not just reviews",
      "Piloting in two waves with a verification step between them",
      "Documenting the rationale for cut features in the backlog itself",
      "Reviewing the generated artefact rather than the interface during demos",
    ],
    improveNextTime: [
      "Document domain context as we go rather than producing a glossary after the third workshop",
      "Involve legal earlier, at discovery, rather than before launch",
      "Write the data migration rules with the site managers, not for them",
      "Agree a buffer for the single-engineer risk at planning time",
      "Capture a baseline audit timeline before the pilot so the improvement is measurable",
      "Schedule a mid-pilot checkpoint rather than relying on the end-of-pilot review",
    ],
    retrospectives: {
      caption: "Retrospective insights and the actions taken",
      columns: ["What we learned", "Action taken", "Impact"],
      rows: [
        ["Requirements described in prose mapped to several different features", "Built a glossary and a requirement matrix in discovery", "Duplicate stories stopped appearing in refinement"],
        ["Compliance review ran in parallel with build and surfaced conflicts late", "Made compliance review a blocking gate before build", "No regulatory rework after build started"],
        ["Domain knowledge was concentrated in one person", "Mandatory consultant attendance at refinement", "The team could answer most domain questions independently"],
        ["Pilot feedback only arrived at the end", "Introduced a mid-pilot checkpoint", "Two usability issues were fixed during the pilot, not after"],
      ],
    },
    futurePractices: [
      "Add a traceability artefact to the definition of done for every regulated client project",
      "Walk a real audit during discovery rather than reading a policy document",
      "Treat domain experts as part of the team, not as reviewers who drop in",
      "Run pilots in waves with a verification checkpoint between them",
    ],
  },
};

const tandt: PortfolioProject = {
  slug: "t-and-t-company",
  title: "T&T Company",
  subtitle: "Mobile-first fashion ecommerce storefront",
  summary:
    "A small fashion brand's online storefront, delivered on a constrained budget with a payment provider migration and resilient checkout.",
  category: "Website / Ecommerce",
  cover: null,
  link: null,
  themeColor: "#041625",
  tags: ["React", "TypeScript", "Sanity", "Vite", "Tailwind CSS"],
  isPlaceholder: true,
  pm: {
    industry: "Fashion retail",
    status: "Delivered",
    statusTone: "success",
    dateRange: "2025",
    roles: ["Project Manager", "Product Owner"],
    methodology: ["Kanban", "Weekly releases"],
    teamSize: "3 people (2 engineers, 1 designer, client owner)",
    summary:
      "A single-operator fashion brand needed to sell online without hiring a team. There was no PMO, a fixed budget, and a payment provider that no longer met the card-on-file requirements — so the project had to survive a migration, an unreliable email dependency, and no room for a second attempt.",
    businessGoals: [
      "Move card payments to a compliant provider without losing the customer journey",
      "Give the owner order visibility they could run the business from",
      "Keep the storefront selling when the CMS is unavailable",
      "Ship inside a small fixed budget",
    ],
    results: [
      { value: "1", label: "Payment provider migration completed without customer-facing downtime", tone: "success" },
      { value: "100%", label: "Of carts survive a page reload or a dropped connection", tone: "success" },
      { value: "0", label: "Duplicate orders after switching to idempotent webhooks", tone: "success" },
      { value: "1", label: "Person operating the whole order process", tone: "accent" },
    ],
    highlights: [
      "Ran a Kanban flow rather than sprints, because the owner worked in unpredictable batches",
      "Made the payment migration the first story rather than the last, so the risk surfaced immediately",
      "Wrote the webhook idempotency requirement after a duplicate notification was observed in the old integration",
      "Made 'the storefront must sell without the CMS' an explicit acceptance criterion on the product listing story",
      "Ran weekly releases so the owner could see progress on real dates",
      "Scoped out everything that was not needed to take a first order",
    ],
    deliverables: [
      { title: "Release plan", caption: "Weekly releases with the payment migration in week one" },
      { title: "Backlog snapshot", caption: "Kanban board at go-live" },
      { title: "Risk log", caption: "Small, focused, all closed or accepted" },
      { title: "Launch checklist", caption: "Go-live checks including webhook replay test" },
    ],

    roleSummary:
      "I was the delivery lead on a very small project, which usually means wearing every hat. I kept the scope honest, surfaced the payment risk in week one, and made sure the owner could run the thing themselves afterwards — that last part was the actual deliverable as far as the business was concerned.",
    roleLevel: "Delivery lead",
    duration: "10 weeks, weekly releases",
    responsibilities: [
      "Owned scope, backlog and the weekly release plan",
      "Ran Kanban flow with WIP limits rather than sprint ceremonies",
      "Managed the payment provider migration as the top risk",
      "Wrote the idempotency requirement for payment webhooks",
      "Kept the storefront selling when the CMS is unavailable",
      "Ran weekly demo and prioritisation sessions with the owner",
      "Handed over fulfilment process documentation",
    ],
    ownershipAreas: [
      { title: "Product strategy", points: ["Scoped to 'can take a real order safely', nothing more", "Made CMS resilience an acceptance criterion, not a nice-to-have"] },
      { title: "Delivery management", points: ["Weekly releases so risk surfaced continuously", "Kept a hard WIP limit to protect a two-person team"] },
      { title: "Team coordination", points: ["Design and engineering reviewed together weekly", "Avoided ceremony overhead a three-person team cannot afford"] },
      { title: "Stakeholder alignment", points: ["One weekly session with the owner, agenda sent in advance", "Said no to requests by writing down the trade-off"] },
    ],
    decisions: [
      { title: "Prioritisation", points: ["WSJF applied: risk-reduction stories outrank feature stories", "Payment migration first, explicitly, to de-risk the release"] },
      { title: "Release planning", points: ["Weekly releases rather than one launch", "Each release was shippable to real customers"] },
      { title: "Acceptance criteria", points: ["Required the store to work with the CMS unreachable", "Required duplicate webhook deliveries to be harmless"] },
      { title: "Trade-off management", points: ["No admin panel: the owner's fulfilment flow used the Sanity studio directly", "Documented the trade-off so it can be revisited when volume justifies it"] },
    ],
    collaborators: [
      { name: "Front-end engineer", role: "React & TypeScript" },
      { name: "Product designer", role: "UX and visual design" },
      { name: "Client owner", role: "Product decisions & fulfilment" },
    ],
    stakeholders: [
      { name: "Business owner", role: "Decision maker" },
      { name: "Fulfilment assistant", role: "Day-to-day user" },
      { name: "Payment provider support", role: "Migration dependency" },
    ],
    ceremonies: [
      { title: "Kanban flow", cadence: "Continuous", description: "WIP limits per column instead of sprint commitments." },
      { title: "Weekly release", cadence: "Weekly", description: "Every Friday, shippable, live for real customers." },
      { title: "Demo & prioritise", cadence: "Weekly", description: "Thirty minutes with the owner, agenda in advance." },
      { title: "Retrospective", cadence: "Every two weeks", description: "Short, with actions assigned before the next session." },
    ],
    tools: ["Jira", "Figma", "Sanity", "Slack", "Google Sheets"],

    approachOverview:
      "Small projects fail on ceremony, not on effort. With two engineers and one owner, the job was to keep the risk visible every week and resist building anything that was not required to take a first order.",
    principles: [
      "De-risk first — build the thing most likely to go wrong earliest",
      "Weekly releases beat big launches for a project this size",
      "A three-person team needs a board, not a process manual",
      "The deliverable includes the client being able to run it",
    ],
    approachSteps: [
      { title: "Discover", summary: "Understand the order journey and the constraints.", activities: ["Owner interview", "Provider requirement review", "Fulfilment process mapping"], methods: ["Interview", "Process mapping"], output: "Scope and constraints" },
      { title: "Define", summary: "Split the work so the risk lands in week one.", activities: ["Backlog creation", "Risk-first sequencing", "Acceptance criteria"], methods: ["WSJF", "Story writing"], output: "Sequenced backlog" },
      { title: "Plan", summary: "Set a weekly release rhythm and protect WIP.", activities: ["WIP limits", "Release calendar", "Risk review"], methods: ["Kanban", "Release planning"], output: "Release plan" },
      { title: "Execute", summary: "Ship small, ship often, verify each week.", activities: ["Continuous flow", "Weekly release", "Blocker removal"], methods: ["Kanban"], output: "Ten weekly releases" },
      { title: "Measure", summary: "Watch orders, not tickets.", activities: ["Order flow verification", "Defect review", "Owner feedback"], methods: ["Analytics", "User feedback"], output: "Launch confirmation" },
      { title: "Iterate", summary: "Hand over a process the owner can run.", activities: ["Fulfilment documentation", "Walkthrough", "Post-launch check-in"], methods: ["Documentation", "Training"], output: "Handover pack" },
    ],
    stakeholderPlan: {
      caption: "Stakeholder communication plan",
      columns: ["Stakeholder group", "Method", "Cadence", "Key focus"],
      rows: [
        ["Business owner", "Weekly demo & prioritise", "Weekly", "Scope, order flow, next release"],
        ["Fulfilment assistant", "Walkthrough", "Pre-launch and monthly", "Order handling, edge cases"],
        ["Delivery team", "Board review", "Weekly", "WIP, blockers"],
        ["Payment provider", "Support ticket", "As needed", "Migration, webhook behaviour"],
      ],
    },
    prioritization: {
      framework: "WSJF",
      description:
        "Cost of delay divided by job size, with a deliberate override: any story that reduced a delivery risk jumped the queue regardless of its score. The payment migration scored middling on effort but would have sunk the release, so it went first.",
      table: {
        caption: "Release sequence",
        columns: ["Story", "CoD", "Size", "Score", "Sequence"],
        rows: [
          ["Migrate checkout to compliant provider", "8", "5", "1.6", "Week 1"],
          ["Idempotent webhook handling", "8", "3", "2.7", "Week 1"],
          ["Product listing reads from cache", "6", "5", "1.2", "Week 2"],
          ["Cart persistence across reload", "6", "3", "2.0", "Week 2"],
          ["Checkout form validation", "4", "2", "2.0", "Week 3"],
          ["Order confirmation email", "2", "2", "1.0", "Week 4"],
        ],
      },
    },
    risks: [
      "Payment provider migration could break checkout with no fallback",
      "Webhooks are at-least-once and can deliver duplicates, risking stock drain",
      "Email delivery was unreliable, so confirmations could silently fail",
      "Store must keep selling when the CMS is unavailable",
      "Fixed budget left no room for a second attempt",
    ],
    raid: {
      caption: "Risk log at go-live",
      columns: ["Type", "Description", "Owner", "Status"],
      rows: [
        ["Risk", "Provider migration breaks checkout", "Front-end", "Mitigated — feature flag, old path retained"],
        ["Risk", "Duplicate webhook drains stock", "Back-end", "Mitigated — idempotency key, replay tested"],
        ["Issue", "Confirmation emails intermittently not sent", "Back-end", "Accepted — in-app order status is the source of truth"],
        ["Dependency", "Provider onboarding approval", "Client owner", "Closed week 1"],
      ],
    },

    outcomeGroups: [
      { title: "Business impact", points: ["Card payments working on a compliant provider", "The owner can see and fulfil every order from one place", "No ongoing development dependency for routine operation"] },
      { title: "Customer impact", points: ["Checkout completes without a duplicate-order failure", "Cart survives a reload or a dropped connection", "Order status visible in-app even when the confirmation email does not arrive"] },
      { title: "Team impact", points: ["Weekly releases kept a two-engineer team honest about risk", "Explicit WIP limits stopped the board from becoming a wish list"] },
      { title: "Operational impact", points: ["Idempotent webhooks removed a class of stock and order corruption", "No admin panel to maintain or licence"] },
    ],
    beforeAfter: [
      { label: "Card payment provider", before: "Non-compliant", after: "Migrated", unit: "" },
      { label: "Cart on page reload", before: "Lost", after: "Restored", unit: "" },
      { label: "Storefront without CMS", before: "Blank", after: "Sells from cache", unit: "" },
      { label: "Admin software to maintain", before: "n/a", after: "None", unit: "sanity studio only" },
    ],
    milestones: [
      { date: "Week 1", title: "Provider migrated", outcome: "Largest delivery risk retired first" },
      { date: "Week 2", title: "Storefront resilient", outcome: "Listings survive a CMS outage" },
      { date: "Week 5", title: "Checkout hardened", outcome: "Validation and duplicate protection live" },
      { date: "Week 8", title: "First real order", outcome: "End-to-end flow confirmed with a live customer" },
      { date: "Week 10", title: "Handover complete", outcome: "Owner running fulfilment independently" },
    ],
    measurement: [
      "Order flow: verified against live orders from launch week, not test data",
      "Duplicate orders: counted in the order log after the idempotency change landed",
      "Checkout completion: measured in the analytics funnel from first release",
      "CMS resilience: tested by taking the CMS unreachable during week 2 acceptance",
    ],
    achievements: [
      "Payment provider migration completed with no customer-facing downtime",
      "Storefront verified to sell with the CMS unreachable",
      "Webhook replay tested and confirmed harmless",
      "Delivered inside a fixed budget with weekly releases",
      "Handover documentation written for a non-technical operator",
    ],

    artifacts: [
      { title: "Release plan", category: "Strategy & Planning", description: "Ten weekly releases with the risk-first sequence visible." },
      { title: "Backlog snapshot", category: "Agile Delivery", description: "Kanban board at go-live, WIP columns included." },
      { title: "Risk log", category: "Analysis & Reporting", description: "Four entries, each closed or explicitly accepted with a rationale." },
      { title: "User story example", category: "Requirements", description: "Webhook idempotency story, written after a duplicate notification was observed." },
      { title: "Fulfilment process map", category: "Requirements", description: "How an order moves from paid to shipped, as the assistant actually does it." },
      { title: "Launch checklist", category: "Strategy & Planning", description: "Including the webhook replay test and the feature flag removal step." },
      { title: "Handover pack", category: "Analysis & Reporting", description: "Written process the owner can follow without a developer present." },
    ],

    learnings: [
      { title: "Cross-functional communication", points: ["One weekly session with a pre-agreed agenda replaced ad-hoc interruptions, which a two-engineer team cannot absorb."] },
      { title: "Scope management", points: ["Refusing an admin panel was the single decision that kept the project inside budget."] },
      { title: "Release planning", points: ["Putting the riskiest story in week one gave eight weeks to react to it instead of one."] },
      { title: "Discovery depth", points: ["Asking the fulfilment assistant, not the owner, exposed the manual steps that mattered."] },
    ],
    workedWell: [
      "Sequencing the highest-risk story first",
      "Weekly shippable releases on a small budget",
      "Explicit WIP limits instead of sprint ceremony",
      "Treating CMS resilience as an acceptance criterion",
      "Writing the handover as a deliverable",
      "Documenting accepted risks rather than pretending they were solved",
    ],
    improveNextTime: [
      "Ask the fulfilment assistant during discovery, not after build",
      "Set up the order funnel analytics at week one to capture a real baseline",
      "Agree an escalation path with the payment provider before migrating",
      "Write acceptance criteria for failure states, not just happy paths",
      "Book a post-launch review at two weeks rather than at handover",
    ],
    retrospectives: {
      caption: "Retrospective insights and the actions taken",
      columns: ["What we learned", "Action taken", "Impact"],
      rows: [
        ["Interruption from the owner was the biggest drag on the engineers", "Weekly demo with a pre-agreed agenda", "Protected focus time rose sharply"],
        ["The board grew faster than the team could pull", "WIP limits per column", "Cycle time stabilised and blockers surfaced earlier"],
        ["Assumptions about the fulfilment process were wrong", "Mapped the process with the actual operator", "Two requirements changed before they were built"],
        ["Email unreliability was treated as a bug rather than a design constraint", "Made in-app order status the source of truth", "Removed a dependency the project could not control"],
      ],
    },
    futurePractices: [
      "Sequence the highest-risk story into the first release on any constrained project",
      "Interview the person doing the work, not only the person funding it",
      "Set WIP limits before the board fills up",
      "Write the handover document as part of the plan, not after it",
    ],
  },
};

export const pmProjects: PortfolioProject[] = [waupay, reguhub, tandt];
