import type {
  Person,
  Quote,
  Step,
  TableBlock,
  Tone,
  TreeNode,
  UxColorToken,
  UxComponentSpec,
  UxJourneyStep,
  UxPersona,
  UxSpacingToken,
  UxStateSpec,
  UxTypeToken,
} from "@/lib/content/types";

import { BulletList, Card, Tint } from "./primitives";

/* ==========================================================================
   Steps, timelines, tables
   ========================================================================== */

export function StepList({
  steps,
  showDuration = true,
}: {
  steps: Step[];
  showDuration?: boolean;
}) {
  if (steps.length === 0) return null;
  return (
    <ol className="v-process-steps grid gap-3.5" role="list">
      {steps.map((step, index) => (
        <li key={index}>
          <Card className="flex h-full flex-col gap-2.5 p-4">
            <div className="flex flex-wrap items-baseline justify-between gap-2">
              <h3 className="v-h2 text-base">
                <span className="v-muted mr-2 tabular-nums">{String(index + 1).padStart(2, "0")}</span>
                {step.title}
              </h3>
              {showDuration && step.duration ? <span className="v-chip v-chip-neutral">{step.duration}</span> : null}
            </div>
            {step.summary ? <p className="v-body">{step.summary}</p> : null}
            {step.activities && step.activities.length > 0 ? (
              <BulletList items={step.activities} />
            ) : null}
            {step.methods && step.methods.length > 0 ? (
              <p className="v-metric-note">
                <span className="font-semibold">Methods: </span>
                {step.methods.join(" · ")}
              </p>
            ) : null}
            {step.output ? (
              <p className="v-metric-note">
                <span className="font-semibold">Output: </span>
                {step.output}
              </p>
            ) : null}
          </Card>
        </li>
      ))}
    </ol>
  );
}

/**
 * Vertical timeline.
 *
 * The two label shapes are equivalent: PM milestones are keyed by
 * `date`/`title`, UX phase timelines by `week`/`focus`. Both are normalised
 * here so the markup stays identical.
 */
export function TimelineList({
  items,
}: {
  items: {
    date?: string;
    title?: string;
    week?: string;
    focus?: string;
    outcome: string;
  }[];
}) {
  if (items.length === 0) return null;
  return (
    <ol className="v-timeline grid gap-4" role="list">
      {items.map((item, index) => (
        <li key={index}>
          <p className="v-timeline-date">{item.date ?? item.week}</p>
          <p className="v-h2 text-sm">{item.title ?? item.focus}</p>
          {item.outcome ? <p className="v-body text-sm">{item.outcome}</p> : null}
        </li>
      ))}
    </ol>
  );
}

export function TableView({ table, caption }: { table?: TableBlock; caption?: string }) {
  if (!table || table.columns.length === 0) return null;
  const heading = caption ?? table.caption;
  return (
    <figure className="m-0 flex flex-col gap-2">
      {heading ? <figcaption className="v-label">{heading}</figcaption> : null}
      <div className="v-table-scroll">
        <table className="v-table">
          <thead>
            <tr>
              {table.columns.map((column, index) => (
                <th key={index} scope="col">
                  {column}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {(table.rows ?? []).map((row, rowIndex) => (
              <tr key={rowIndex}>
                {table.columns.map((_, cellIndex) => (
                  <td key={cellIndex}>{row[cellIndex]}</td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </figure>
  );
}

/* ==========================================================================
   Code
   ========================================================================== */

export function CodeBlock({
  filename,
  language = "tsx",
  code,
}: {
  filename?: string;
  language?: string;
  code: string;
}) {
  if (!code) return null;
  return (
    <figure className="v-code-block m-0">
      <figcaption className="v-code-head">
        <span>{filename ?? language}</span>
        <span>{language}</span>
      </figcaption>
      <pre className="v-code v-code-body m-0">
        <code>{code}</code>
      </pre>
    </figure>
  );
}

/* ==========================================================================
   People, quotes, personas
   ========================================================================== */

export function PeopleGrid({ people }: { people: Person[] }) {
  if (people.length === 0) return null;
  return (
    <ul className="grid gap-2.5 sm:grid-cols-2 lg:grid-cols-3" role="list">
      {people.map((person, index) => (
        <li key={index}>
          <Card className="flex flex-col gap-0.5 p-3.5">
            <p className="v-tint-head mb-0 text-sm">{person.name}</p>
            {person.role ? <p className="v-body text-xs">{person.role}</p> : null}
          </Card>
        </li>
      ))}
    </ul>
  );
}

export function QuoteCard({ quote, dark = false }: { quote?: Quote; dark?: boolean }) {
  if (!quote?.quote) return null;
  return (
    <figure
      className={`m-0 flex flex-col gap-3 p-5 ${dark ? "v-panel-dark" : "v-panel"}`}
    >
      <blockquote className="v-lede m-0" style={dark ? { color: "#fff" } : undefined}>
        “{quote.quote}”
      </blockquote>
      <figcaption className="v-metric-note" style={dark ? { color: "rgba(255,255,255,0.75)" } : undefined}>
        <span className="font-semibold">{quote.name}</span>
        {quote.role ? ` — ${quote.role}` : null}
      </figcaption>
    </figure>
  );
}

export function PersonaGrid({ personas }: { personas: UxPersona[] }) {
  if (personas.length === 0) return null;
  return (
    <div className="grid gap-3.5 md:grid-cols-2 lg:grid-cols-3">
      {personas.map((persona, index) => (
        <Card key={index} className="flex flex-col gap-2 p-4">
          <h3 className="v-h2 text-base">{persona.name}</h3>
          {persona.role ? <span className="v-chip w-fit">{persona.role}</span> : null}
          {persona.description ? <p className="v-body text-sm">{persona.description}</p> : null}
          {persona.needs.length > 0 ? <BulletList items={persona.needs} /> : null}
        </Card>
      ))}
    </div>
  );
}

const EMOTION_TONE: Record<string, string> = {
  frustrated: "var(--shell-red)",
  neutral: "#6b7280",
  confident: "var(--shell-green)",
};

export function JourneyList({ steps }: { steps: UxJourneyStep[] }) {
  if (steps.length === 0) return null;
  return (
    <ol className="grid gap-3 md:grid-cols-2 lg:grid-cols-4" role="list">
      {steps.map((step, index) => (
        <li key={index}>
          <Card className="flex h-full flex-col gap-2 p-4">
            <p className="v-label">{String(index + 1).padStart(2, "0")}</p>
            <h3 className="v-h2 text-sm">{step.stage}</h3>
            {step.goal ? <p className="v-body text-sm">{step.goal}</p> : null}
            {step.emotion ? (
              <span className="v-chip w-fit" style={{ ["--v-accent" as string]: EMOTION_TONE[step.emotion] }}>
                {step.emotion}
              </span>
            ) : null}
            {step.quote ? <p className="v-metric-note italic">“{step.quote}”</p> : null}
          </Card>
        </li>
      ))}
    </ol>
  );
}

/* ==========================================================================
   Design system tokens
   ========================================================================== */

export function SwatchGrid({ tokens }: { tokens: UxColorToken[] }) {
  if (tokens.length === 0) return null;
  return (
    <ul className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4" role="list">
      {tokens.map((token, index) => (
        <li key={index}>
          <Card className="flex flex-col overflow-hidden">
            <span
              className="block h-14 w-full"
              style={{ background: token.value, borderBottom: "1px solid var(--shell-line)" }}
            />
            <div className="flex flex-col gap-0.5 p-3">
              <p className="v-tint-head mb-0 text-sm">{token.name}</p>
              <p className="v-metric-note font-mono">{token.value}</p>
              {token.usage ? <p className="v-body text-xs">{token.usage}</p> : null}
            </div>
          </Card>
        </li>
      ))}
    </ul>
  );
}

export function TypeScaleList({ tokens }: { tokens: UxTypeToken[] }) {
  if (tokens.length === 0) return null;
  return (
    <ul className="grid gap-2" role="list">
      {tokens.map((token, index) => (
        <li key={index}>
          <Card className="flex flex-wrap items-baseline justify-between gap-2 p-3.5">
            <span className="v-tint-head mb-0">{token.name}</span>
            <span className="v-metric-note font-mono">{token.value}</span>
            {token.usage ? <span className="v-body w-full text-xs">{token.usage}</span> : null}
          </Card>
        </li>
      ))}
    </ul>
  );
}

export function SpacingList({ tokens }: { tokens: UxSpacingToken[] }) {
  if (tokens.length === 0) return null;
  return (
    <ul className="grid gap-2 sm:grid-cols-2" role="list">
      {tokens.map((token, index) => (
        <li key={index}>
          <Card className="flex items-center gap-3 p-3">
            <span
              className="h-4 rounded-sm"
              style={{ width: token.value, background: "var(--v-accent)", minWidth: "0.5rem" }}
            />
            <span className="v-tint-head mb-0 text-sm">{token.name}</span>
            <span className="v-metric-note ml-auto font-mono">{token.value}</span>
          </Card>
        </li>
      ))}
    </ul>
  );
}

export function ComponentSpecList({ specs }: { specs: UxComponentSpec[] }) {
  if (specs.length === 0) return null;
  return (
    <div className="grid gap-3 md:grid-cols-2">
      {specs.map((spec, index) => (
        <Card key={index} className="flex flex-col gap-2 p-4">
          <h3 className="v-h2 text-sm">{spec.name}</h3>
          {spec.variants.length > 0 ? (
            <p className="v-metric-note">
              <span className="font-semibold">Variants: </span>
              {spec.variants.join(", ")}
            </p>
          ) : null}
          {spec.states.length > 0 ? (
            <p className="v-metric-note">
              <span className="font-semibold">States: </span>
              {spec.states.join(", ")}
            </p>
          ) : null}
          {spec.note ? <p className="v-body text-xs">{spec.note}</p> : null}
        </Card>
      ))}
    </div>
  );
}

export function StateList({ states }: { states: UxStateSpec[] }) {
  if (states.length === 0) return null;
  const TONE: Record<string, string> = {
    accent: "var(--v-accent)",
    success: "var(--shell-green)",
    warning: "var(--shell-amber)",
    danger: "var(--shell-red)",
    neutral: "#6b7280",
    alt: "var(--shell-purple)",
  };
  return (
    <ul className="grid gap-2.5 sm:grid-cols-2" role="list">
      {states.map((state, index) => (
        <li key={index}>
          <div className="v-tint flex items-start gap-3" style={{ ["--tint-dot" as string]: TONE[state.tone] }}>
            <div>
              <p className="v-tint-head mb-0.5">{state.name}</p>
              {state.description ? <p className="v-body text-xs">{state.description}</p> : null}
            </div>
          </div>
        </li>
      ))}
    </ul>
  );
}

/* ==========================================================================
   Generic labelled collections
   ========================================================================== */

/** `[{ title, description }]` pairs, used for FE decisions and UX interactions. */
export function TitledTextList({
  items,
  tone = "accent",
}: {
  items: { title: string; description: string }[];
  tone?: Tone;
}) {
  if (items.length === 0) return null;
  return (
    <div className="grid gap-3.5 md:grid-cols-2">
      {items.map((item, index) => (
        <Tint key={index} tone={tone} title={item.title}>
          <p className="v-body">{item.description}</p>
        </Tint>
      ))}
    </div>
  );
}

/** `{ title, before, after }` improvement pairs, used by the UX outcomes tab. */
export function ImprovementList({
  items,
}: {
  items: { title: string; before: string; after: string }[];
}) {
  if (items.length === 0) return null;
  return (
    <ul className="grid gap-2.5" role="list">
      {items.map((item, index) => (
        <li key={index}>
          <Card className="flex flex-col gap-1.5 p-3.5">
            <p className="v-tint-head mb-0 text-sm">{item.title}</p>
            <p className="v-body text-sm">
              <span className="v-muted line-through decoration-red-400">{item.before}</span>
              <span className="mx-2 text-gray-400" aria-label="changed to">
                →
              </span>
              <span className="font-medium" style={{ color: "var(--shell-green)" }}>
                {item.after}
              </span>
            </p>
          </Card>
        </li>
      ))}
    </ul>
  );
}

/** Quoted user pain points. */
export function QuoteStack({
  items,
}: {
  items: { quote: string; person: string; context: string }[];
}) {
  if (items.length === 0) return null;
  return (
    <div className="grid gap-3.5 md:grid-cols-2">
      {items.map((item, index) => (
        <figure key={index} className="v-card m-0 flex flex-col gap-2 p-4">
          <blockquote className="v-body m-0 italic">“{item.quote}”</blockquote>
          <figcaption className="v-metric-note">
            <span className="font-semibold">{item.person}</span>
            {item.context ? ` — ${item.context}` : null}
          </figcaption>
        </figure>
      ))}
    </div>
  );
}

/** Named blocks with an optional nested tree, used for architecture diagrams. */
export function LabelledTreeGrid({ nodes }: { nodes: { title: string; node: TreeNode }[] }) {
  const populated = nodes.filter((entry) => entry.node);
  if (populated.length === 0) return null;
  return (
    <div className="grid gap-4 lg:grid-cols-2">
      {populated.map((entry, index) => (
        <TreeCard key={index} title={entry.title} node={entry.node} />
      ))}
    </div>
  );
}

function TreeCard({ title, node }: { title: string; node: TreeNode }) {
  const lines: string[] = [];
  const walk = (current: TreeNode, depth: number) => {
    lines.push(depth === 0 ? current.label : `${"  ".repeat(depth)}├─ ${current.label}`);
    (current.children ?? []).forEach((child) => walk(child, depth + 1));
  };
  walk(node, 0);
  return (
    <figure className="v-code-block m-0">
      <figcaption className="v-code-head">{title}</figcaption>
      <pre className="v-tree v-code-body m-0">
        <code>{lines.join("\n")}</code>
      </pre>
    </figure>
  );
}
