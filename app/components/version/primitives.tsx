import Link from "next/link";
import type { ReactNode } from "react";

import type { Tone, TitledPoints, Tone as ToneType } from "@/lib/content/types";

/* ==========================================================================
   Layout + typography
   ========================================================================== */

export function Section({
  children,
  id,
  tone = "plain",
  className = "",
}: {
  children: ReactNode;
  id?: string;
  tone?: "plain" | "soft" | "dark";
  className?: string;
}) {
  const background =
    tone === "soft" ? "var(--shell-page-alt)" : tone === "dark" ? "var(--shell-ink)" : undefined;
  const color = tone === "dark" ? "#fff" : undefined;
  return (
    <section
      id={id}
      className={`v-section ${className}`}
      style={background ? { background, color } : undefined}
    >
      <div className="v-container">{children}</div>
    </section>
  );
}

export function Eyebrow({ children }: { children: ReactNode }) {
  return <p className="v-eyebrow">{children}</p>;
}

export function SectionHeading({
  eyebrow,
  title,
  lede,
  action,
  align = "left",
}: {
  eyebrow?: string;
  title: ReactNode;
  lede?: ReactNode;
  action?: ReactNode;
  align?: "left" | "center";
}) {
  return (
    <header
      className={`flex flex-col gap-3 ${action ? "md:flex-row md:items-end md:justify-between" : ""}`}
      style={align === "center" ? { alignItems: "center", textAlign: "center" } : undefined}
    >
      <div className="flex flex-col gap-3" style={align === "center" ? { alignItems: "center" } : undefined}>
        {eyebrow ? <Eyebrow>{eyebrow}</Eyebrow> : null}
        <div className="flex flex-col gap-3">
          <span className="v-accent-bar" aria-hidden="true" />
          <h2 className="v-h2 text-2xl md:text-3xl v-balance">{title}</h2>
          {lede ? <p className="v-lede max-w-2xl">{lede}</p> : null}
        </div>
      </div>
      {action ? <div className="shrink-0">{action}</div> : null}
    </header>
  );
}

/** The numbered "01 / Overview" marker used throughout the case studies. */
export function SectionLabel({ index, children }: { index?: string; children: ReactNode }) {
  return (
    <p className="v-label">
      {index ? <span className="v-muted">{index} / </span> : null}
      {children}
    </p>
  );
}

export function Lede({ children }: { children: ReactNode }) {
  return <p className="v-lede v-balance">{children}</p>;
}

export function Body({ children }: { children: ReactNode }) {
  return <div className="v-body flex flex-col gap-3">{children}</div>;
}

export function Prose({ paragraphs }: { paragraphs: string[] }) {
  return (
    <div className="v-body flex flex-col gap-3.5">
      {paragraphs.map((paragraph, index) => (
        <p key={index}>{paragraph}</p>
      ))}
    </div>
  );
}

/* ==========================================================================
   Surfaces
   ========================================================================== */

export function Card({
  children,
  className = "",
  flat = false,
  as: Tag = "div",
}: {
  children: ReactNode;
  className?: string;
  flat?: boolean;
  as?: "div" | "article" | "li" | "section";
}) {
  return <Tag className={`${flat ? "v-card-flat" : "v-card"} ${className}`}>{children}</Tag>;
}

export function Panel({
  children,
  className = "",
  dark = false,
}: {
  children: ReactNode;
  className?: string;
  dark?: boolean;
}) {
  return <div className={`${dark ? "v-panel-dark" : "v-panel"} ${className}`}>{children}</div>;
}

export function Tint({
  children,
  tone = "accent",
  title,
  className = "",
}: {
  children: ReactNode;
  tone?: Tone;
  title?: string;
  className?: string;
}) {
  return (
    <div className={`v-tint v-tint-${tone} ${className}`}>
      {title ? <p className="v-tint-head">{title}</p> : null}
      {children}
    </div>
  );
}

/* ==========================================================================
   Chips, tags, buttons
   ========================================================================== */

export function Chip({
  children,
  tone,
  variant = "accent",
}: {
  children: ReactNode;
  tone?: string;
  variant?: "accent" | "neutral" | "dark";
}) {
  const className =
    variant === "neutral" ? "v-chip v-chip-neutral" : variant === "dark" ? "v-chip v-chip-dark" : "v-chip";
  return (
    <span className={className} style={tone ? { ["--v-accent" as string]: tone } : undefined}>
      {children}
    </span>
  );
}

export function TagList({ items, variant = "neutral" }: { items: string[]; variant?: "accent" | "neutral" }) {
  if (items.length === 0) return null;
  return (
    <ul className="flex flex-wrap gap-1.5" role="list">
      {items.map((item) => (
        <li key={item}>
          <Chip variant={variant}>{item}</Chip>
        </li>
      ))}
    </ul>
  );
}

type ButtonVariant = "primary" | "dark" | "ghost";

function buttonClass(variant: ButtonVariant) {
  if (variant === "dark") return "v-btn v-btn-dark";
  if (variant === "ghost") return "v-btn v-btn-ghost";
  return "v-btn v-btn-primary";
}

export function ButtonLink({
  href,
  children,
  variant = "primary",
  external = false,
  className = "",
}: {
  href: string;
  children: ReactNode;
  variant?: ButtonVariant;
  external?: boolean;
  className?: string;
}) {
  const classes = `${buttonClass(variant)} ${className}`;
  if (external) {
    return (
      <a href={href} className={classes} target="_blank" rel="noreferrer noopener">
        {children}
      </a>
    );
  }
  return (
    <Link href={href} className={classes}>
      {children}
    </Link>
  );
}

/* ==========================================================================
   Content blocks
   ========================================================================== */

export function BulletList({
  items,
  tone,
  className = "",
}: {
  items?: string[];
  tone?: ToneType;
  className?: string;
}) {
  if (!items || items.length === 0) return null;
  return (
    <ul
      className={`v-list ${className}`}
      style={tone ? { ["--list-dot" as string]: `var(--shell-${tone})` } : undefined}
    >
      {items.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </ul>
  );
}

/**
 * The "title + description + optional checklist" block used by nearly every
 * section. Renders as a bare description when there are no points.
 */
export function PointCard({
  item,
  tone = "accent",
  numbered,
}: {
  item: TitledPoints;
  tone?: Tone;
  numbered?: number;
}) {
  return (
    <Tint tone={tone} title={numbered === undefined ? item.title : `${numbered}. ${item.title}`}>
      {item.description ? <p className="v-body">{item.description}</p> : null}
      <BulletList items={item.points} />
    </Tint>
  );
}

export function PointGrid({
  items,
  tone = "accent",
  numbered = false,
  columns = 2,
}: {
  items: TitledPoints[];
  tone?: Tone;
  numbered?: boolean;
  columns?: 2 | 3;
}) {
  if (items.length === 0) return null;
  return (
    <div className={`grid gap-3.5 ${columns === 3 ? "md:grid-cols-3" : "md:grid-cols-2"}`}>
      {items.map((item, index) => (
        <PointCard
          key={index}
          item={item}
          tone={tone}
          numbered={numbered ? index + 1 : undefined}
        />
      ))}
    </div>
  );
}

export function KeyValueList({
  items,
  columns = 2,
}: {
  items: { label: string; value: string }[];
  columns?: 1 | 2 | 3;
}) {
  if (items.length === 0) return null;
  const grid =
    columns === 3 ? "md:grid-cols-3" : columns === 2 ? "sm:grid-cols-2" : "grid-cols-1";
  return (
    <dl className={`grid gap-3 ${grid}`}>
      {items.map((item) => (
        <div key={item.label} className="v-card-flat p-3.5">
          <dt className="v-label">{item.label}</dt>
          <dd className="v-body mt-1.5 font-medium" style={{ color: "var(--shell-ink)" }}>
            {item.value}
          </dd>
        </div>
      ))}
    </dl>
  );
}

/** "Agile Delivery: Scrum, Kanban" style grouped skills, as stored in the CMS. */
export function GroupedSkills({ skills }: { skills: string[] }) {
  if (skills.length === 0) return null;
  const groups = skills.map((entry) => {
    const [group, ...rest] = entry.split(":");
    return { group: group.trim(), items: rest.join(":").trim() };
  });
  return (
    <div className="grid gap-3.5 md:grid-cols-2 lg:grid-cols-3">
      {groups.map((entry) => (
        <Card key={entry.group} className="p-4">
          <h3 className="v-tint-head">{entry.group}</h3>
          <TagList items={entry.items ? entry.items.split(",").map((item) => item.trim()) : []} />
        </Card>
      ))}
    </div>
  );
}

export function EmptyNote({ children }: { children: ReactNode }) {
  return (
    <p className="v-body rounded-lg border border-dashed p-4 text-sm v-muted" style={{ borderColor: "var(--shell-line)" }}>
      {children}
    </p>
  );
}
