import Link from "next/link";

import type { PortfolioProject, VersionContact, VersionSiteContent } from "@/lib/content/types";
import { VERSIONS, versionPath, type VersionKey } from "@/lib/versions";

import { AssetPairGrid, Figure } from "./media";
import { MetricGrid, StatStrip } from "./metrics";
import {
  Body,
  BulletList,
  ButtonLink,
  Card,
  GroupedSkills,
  KeyValueList,
  Panel,
  Prose,
  Section,
  SectionHeading,
  SectionLabel,
  TagList,
  Tint,
} from "./primitives";
import { ProjectGrid } from "./project-card";
import { StepList, QuoteCard } from "./blocks";
import type { ProcessStepContent } from "@/lib/content/types";

/* ==========================================================================
   Hero
   ========================================================================== */

export function VersionHero({
  version,
  content,
  contact,
}: {
  version: VersionKey;
  content: VersionSiteContent;
  contact: VersionContact;
}) {
  const config = VERSIONS[version];
  return (
    <Section className="v-hero">
      <div className="v-hero-grid">
        <div className="flex flex-col gap-5">
          <p className="v-eyebrow">{content.heroEyebrow}</p>
          <h1 className="v-display text-4xl md:text-5xl lg:text-6xl">{content.heroHeadline}</h1>
          <p className="v-lede max-w-xl">{content.heroIntro}</p>

          <div className="flex flex-wrap gap-2.5 pt-1">
            <ButtonLink href={versionPath(version, `/${config.collection}`)}>
              {content.heroCtaPrimary}
            </ButtonLink>
            <ButtonLink href={contact.cvUrl || versionPath(version, "/contact")} variant="ghost" external={Boolean(contact.cvUrl)}>
              {contact.cvUrl ? "Download résumé ↓" : content.heroCtaSecondary}
            </ButtonLink>
          </div>

          {content.positioningNote ? (
            <p className="v-body max-w-xl border-l-2 pl-3.5" style={{ borderColor: "var(--v-accent)" }}>
              {content.positioningNote}
            </p>
          ) : null}
        </div>

        <div className="v-hero-visual">
          <Figure asset={{ title: `${contact.name} — ${config.role}`, image: content.heroImage || "/assets/heroImage.png" }} ratio="4 / 3" />
          <div className="v-hero-caption">
            <span className="v-hero-caption-dot" aria-hidden="true" />
            <div><p className="v-h2 text-sm">{content.roleLong ?? config.roleLong}</p><p className="v-body text-xs">{contact.location || "Thoughtful work. Measurable impact."}</p></div>
            <span aria-hidden="true">↗</span>
          </div>
        </div>
      </div>

      {content.heroMetrics.length > 0 ? (
        <div className="v-hero-stats">
          <StatStrip metrics={content.heroMetrics} />
        </div>
      ) : null}
    </Section>
  );
}

/* ==========================================================================
   Work
   ========================================================================== */

export function FeaturedWork({
  version,
  projects,
  limit,
  heading,
}: {
  version: VersionKey;
  projects: PortfolioProject[];
  limit?: number;
  heading: string;
}) {
  const config = VERSIONS[version];
  const shown = limit ? projects.slice(0, limit) : projects;
  if (shown.length === 0) return null;
  return (
    <Section id="work" tone="soft">
      <div className="flex flex-col gap-6">
        <SectionHeading
          eyebrow={`${config.short} · Case studies`}
          title={heading}
          lede={`Each case study is written for the ${config.label.toLowerCase()} role — the same project, framed for the work that role owns.`}
          action={
            <ButtonLink href={versionPath(version, `/${config.collection}`)} variant="ghost">
              All {config.collection} →
            </ButtonLink>
          }
        />
        <ProjectGrid projects={shown} version={version} />
      </div>
    </Section>
  );
}

/* ==========================================================================
   Intro blocks — the short "what this page covers" cards
   ========================================================================== */

export function IntroBlocks({ content }: { content: VersionSiteContent }) {
  if (content.introBlocks.length === 0) return null;
  return (
    <Section className="!py-8">
      <div className="grid gap-3.5 md:grid-cols-3">
        {content.introBlocks.map((block, index) => (
          <Card key={index} className="flex flex-col gap-2 p-4">
            <span className="v-accent-bar" aria-hidden="true" />
            <h3 className="v-h2 text-sm">{block.title}</h3>
            <p className="v-body text-sm">{block.description}</p>
          </Card>
        ))}
      </div>
    </Section>
  );
}

/* ==========================================================================
   Approach / process
   ========================================================================== */

export function ApproachSection({
  content,
  eyebrow = "How I work",
  heading = "A repeatable approach",
  lede,
}: {
  content: VersionSiteContent;
  eyebrow?: string;
  heading?: string;
  lede?: string;
}) {
  const steps: ProcessStepContent[] = content.process;
  if (steps.length === 0) return null;
  return (
    <Section id="approach" tone="soft">
      <div className="flex flex-col gap-6">
        <SectionHeading eyebrow={eyebrow} title={heading} lede={lede} />
        <StepList
          steps={steps.map((step, index) => ({
            title: step.title,
            summary: step.summary,
            activities: step.activities,
            output: step.output,
            duration: index === 0 ? "Phase 01" : undefined,
          }))}
          showDuration={false}
        />
      </div>
    </Section>
  );
}

/* ==========================================================================
   About
   ========================================================================== */

export function AboutSection({
  content,
  experiences,
  heading = "About",
}: {
  content: VersionSiteContent;
  experiences: { role: string; company: string; period?: string; bullets?: string[] }[];
  heading?: string;
}) {
  return (
    <Section id="about">
      <div className="grid gap-8 lg:grid-cols-[1fr_0.9fr]">
        <div className="flex flex-col gap-4">
          <SectionLabel>Background</SectionLabel>
          <h2 className="v-h2 text-2xl md:text-3xl v-balance">{heading}</h2>
          <Prose paragraphs={content.about} />
        </div>

        <div className="flex flex-col gap-3">
          <SectionLabel>Experience</SectionLabel>
          {experiences.map((experience, index) => (
            <Card key={index} className="flex flex-col gap-1.5 p-4">
              <p className="v-h2 text-sm">{experience.role}</p>
              <p className="v-body text-sm">
                {experience.company}
                {experience.period ? ` · ${experience.period}` : ""}
              </p>
              {experience.bullets && experience.bullets.length > 0 ? (
                <BulletList items={experience.bullets} />
              ) : null}
            </Card>
          ))}
        </div>
      </div>
    </Section>
  );
}

/* ==========================================================================
   Skills + certifications
   ========================================================================== */

export function SkillsSection({ content, heading = "Skills" }: { content: VersionSiteContent; heading?: string }) {
  return (
    <Section id="skills" tone="soft">
      <div className="flex flex-col gap-6">
        <SectionHeading eyebrow="Capability" title={heading} />
        <GroupedSkills skills={content.skills} />
      </div>
    </Section>
  );
}

export function CertificationsSection({
  certifications,
}: {
  certifications: { name: string; issuer?: string; year?: string; url?: string }[];
}) {
  if (certifications.length === 0) return null;
  return (
    <Section id="certifications">
      <div className="flex flex-col gap-6">
        <SectionHeading eyebrow="Credentials" title="Certifications" />
        <ul className="grid gap-3.5 md:grid-cols-2 lg:grid-cols-3" role="list">
          {certifications.map((certification, index) => {
            const body = (
              <>
                <p className="v-h2 text-sm">{certification.name}</p>
                <p className="v-body text-sm">
                  {certification.issuer}
                  {certification.year ? ` · ${certification.year}` : ""}
                </p>
              </>
            );
            return (
              <li key={index}>
                {certification.url ? (
                  <a href={certification.url} target="_blank" rel="noreferrer noopener" className="block no-underline">
                    <Card className="flex h-full flex-col gap-1.5 p-4">{body}</Card>
                  </a>
                ) : (
                  <Card className="flex h-full flex-col gap-1.5 p-4">{body}</Card>
                )}
              </li>
            );
          })}
        </ul>
      </div>
    </Section>
  );
}

/* ==========================================================================
   Testimonials
   ========================================================================== */

export function TestimonialsSection({
  content,
  heading = "Testimonials",
}: {
  content: VersionSiteContent;
  heading?: string;
}) {
  if (content.testimonials.length === 0) return null;
  return (
    <Section id="testimonials" tone="soft">
      <div className="flex flex-col gap-6">
        <SectionHeading eyebrow="In their words" title={heading} />
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {content.testimonials.map((quote, index) => (
            <QuoteCard key={index} quote={quote} />
          ))}
        </div>
      </div>
    </Section>
  );
}

/* ==========================================================================
   Contact + résumé
   ========================================================================== */

export function ContactSection({
  version,
  content,
  contact,
}: {
  version: VersionKey;
  content: VersionSiteContent;
  contact: VersionContact;
}) {
  return (
    <Section id="contact">
      <div className="grid gap-8 lg:grid-cols-[1fr_0.8fr]">
        <div className="flex flex-col gap-4">
          <SectionLabel>Get in touch</SectionLabel>
          <h2 className="v-h2 text-2xl md:text-3xl v-balance">{content.ctaHeading}</h2>
          <p className="v-lede">{content.ctaBody}</p>
          <div className="flex flex-wrap gap-2.5 pt-1">
            <ButtonLink href={`mailto:${contact.email}`} external>
              {contact.email}
            </ButtonLink>
            {contact.cvUrl ? (
              <ButtonLink href={contact.cvUrl} variant="ghost" external>
                Download résumé
              </ButtonLink>
            ) : null}
          </div>
        </div>

        <Card className="flex flex-col gap-4 p-5">
          <KeyValueList
            columns={1}
            items={[
              { label: "Name", value: contact.name },
              { label: "Role", value: contact.role },
              { label: "Location", value: contact.location },
              { label: "Email", value: contact.email },
            ]}
          />
          {contact.socials.length > 0 ? (
            <div className="flex flex-col gap-2">
              <p className="v-label">Elsewhere</p>
              <div className="flex flex-wrap gap-1.5">
                {contact.socials.map((social) => (
                  <a
                    key={social.url}
                    href={social.url}
                    target="_blank"
                    rel="noreferrer noopener"
                    className="v-chip no-underline"
                  >
                    {social.platform}
                  </a>
                ))}
              </div>
            </div>
          ) : null}
        </Card>
      </div>
    </Section>
  );
}

export function ResumeSection({
  content,
  contact,
}: {
  content: VersionSiteContent;
  contact: VersionContact;
}) {
  return (
    <Section id="resume">
      <div className="flex flex-col gap-6">
        <SectionHeading
          eyebrow="Résumé"
          title={`${contact.name} — ${content.roleLong ?? contact.role}`}
          lede="A one-page summary of the experience behind this version of the portfolio."
          action={
            contact.cvUrl ? (
              <ButtonLink href={contact.cvUrl} external>
                Download PDF
              </ButtonLink>
            ) : null
          }
        />

        {!contact.cvUrl ? (
          <Panel className="p-4">
            <p className="v-body text-sm">
              No résumé file is linked yet. Add one under <strong>Site Settings → Download CV</strong> in
              the CMS and it will appear here.
            </p>
          </Panel>
        ) : null}

        <div className="grid gap-4 md:grid-cols-2">
          <Card className="flex flex-col gap-3 p-5">
            <p className="v-label">Summary</p>
            <Body>{<p>{content.heroIntro}</p>}</Body>
          </Card>
          <Card className="flex flex-col gap-3 p-5">
            <p className="v-label">Focus areas</p>
            <TagList items={content.skills.map((entry) => entry.split(":")[0].trim())} variant="accent" />
          </Card>
        </div>
      </div>
    </Section>
  );
}

/* ==========================================================================
   Closing CTA
   ========================================================================== */

export function ClosingCta({ version, content }: { version: VersionKey; content: VersionSiteContent }) {
  const config = VERSIONS[version];
  return (
    <Section tone="dark">
      <div className="flex flex-col items-start gap-4">
        <p className="v-label" style={{ color: "rgba(255,255,255,0.55)" }}>
          {config.label}
        </p>
        <h2 className="v-h2 max-w-2xl text-2xl md:text-3xl v-balance" style={{ color: "#fff" }}>
          {content.ctaHeading}
        </h2>
        <p className="v-lede max-w-xl" style={{ color: "rgba(255,255,255,0.75)" }}>
          {content.ctaBody}
        </p>
        <div className="flex flex-wrap gap-2.5 pt-1">
          <ButtonLink href={versionPath(version, "/contact")}>Start a conversation</ButtonLink>
          <ButtonLink
            href={versionPath(version, `/${config.collection}`)}
            variant="ghost"
            className="!border-white/25 !text-white"
          >
            See the work
          </ButtonLink>
        </div>
      </div>
    </Section>
  );
}

/* ==========================================================================
   Comparison section used by the UX / FE outcome tabs
   ========================================================================== */

export function OutcomeComparison({
  title,
  before,
  after,
}: {
  title: string;
  before?: { title?: string; caption?: string; image?: string | null } | null;
  after?: { title?: string; caption?: string; image?: string | null } | null;
}) {
  if (!before && !after) return null;
  return (
    <div className="flex flex-col gap-3">
      <p className="v-label">{title}</p>
      <div className="grid gap-3.5 sm:grid-cols-2">
        <Figure asset={before ?? { title: "Before" }} ratio="4 / 3" />
        <Figure asset={after ?? { title: "After" }} ratio="4 / 3" />
      </div>
    </div>
  );
}

export function MetricBand({ metrics, columns = 3 }: { metrics: Parameters<typeof MetricGrid>[0]["metrics"]; columns?: 2 | 3 | 4 }) {
  if (metrics.length === 0) return null;
  return <MetricGrid metrics={metrics} columns={columns} />;
}

export { AssetPairGrid, Tint };
