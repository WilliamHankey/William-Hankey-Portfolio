import type { PmCaseStudy } from "@/lib/content/types";

import { PeopleGrid, StepList, TableView, TimelineList } from "../blocks";
import { AssetGallery } from "../media";
import { MetricGrid } from "../metrics";
import {
  BulletList,
  Card,
  KeyValueList,
  Panel,
  PointGrid,
  SectionLabel,
  Tint,
} from "../primitives";

/** Sub-section heading used inside a tab panel. */
function Sub({ index, title, children }: { index: string; title: string; children: React.ReactNode }) {
  return (
    <div className="v-case-section flex flex-col gap-3.5">
      <div className="flex items-center gap-2.5">
        <span className="v-accent-bar" aria-hidden="true" />
        <h3 className="v-h2 text-lg">
          <span className="v-muted mr-1.5 text-sm tabular-nums">{index}</span>
          {title}
        </h3>
      </div>
      {children}
    </div>
  );
}

function Stack({ children }: { children: React.ReactNode }) {
  return <div className="v-case-grid">{children}</div>;
}

/**
 * Builds the six PM tab panels: Overview, My Role, Approach, Outcomes,
 * Artifacts and Learnings.
 */
export function buildPmPanels(pm: PmCaseStudy): Record<string, React.ReactNode> {
  return {
    overview: (
      <Stack>
        <Sub index="01" title="Project overview">
          <KeyValueList
            items={[
              { label: "Industry", value: pm.industry },
              { label: "Status", value: pm.status },
              { label: "Timeline", value: pm.dateRange },
              { label: "Team size", value: pm.teamSize },
              { label: "Methodology", value: pm.methodology.join(" · ") },
              { label: "Roles held", value: pm.roles.join(" · ") },
            ]}
            columns={3}
          />
          <p className="v-lede">{pm.summary}</p>
        </Sub>

        {pm.results.length > 0 ? (
          <Sub index="02" title="Results at a glance">
            <MetricGrid metrics={pm.results} />
          </Sub>
        ) : null}

        {pm.highlights.length > 0 ? (
          <Sub index="03" title="Highlights">
            <BulletList items={pm.highlights} />
          </Sub>
        ) : null}

        {pm.deliverables.length > 0 ? (
          <Sub index="04" title="Screenshots & deliverables">
            <AssetGallery assets={pm.deliverables} />
          </Sub>
        ) : null}
      </Stack>
    ),

    role: (
      <Stack>
        <Sub index="01" title="Where I sat">
          <p className="v-lede">{pm.roleSummary}</p>
          <KeyValueList
            items={[
              { label: "Role", value: pm.roleLevel },
              { label: "Duration", value: pm.duration },
            ]}
            columns={2}
          />
        </Sub>

        {pm.responsibilities.length > 0 ? (
          <Sub index="02" title="Core responsibilities">
            <BulletList items={pm.responsibilities} />
          </Sub>
        ) : null}

        {pm.ownershipAreas.length > 0 ? (
          <Sub index="03" title="Scope & ownership">
            <PointGrid items={pm.ownershipAreas} numbered />
          </Sub>
        ) : null}

        {pm.decisions.length > 0 ? (
          <Sub index="04" title="Decision authority">
            <PointGrid items={pm.decisions} tone="alt" numbered />
          </Sub>
        ) : null}

        {pm.collaborators.length > 0 || pm.stakeholders.length > 0 ? (
          <Sub index="05" title="Who I worked with">
            <div className="grid gap-4 lg:grid-cols-2">
              <div className="flex flex-col gap-2">
                <p className="v-label">Delivery team</p>
                <PeopleGrid people={pm.collaborators} />
              </div>
              <div className="flex flex-col gap-2">
                <p className="v-label">Key stakeholders</p>
                <PeopleGrid people={pm.stakeholders} />
              </div>
            </div>
          </Sub>
        ) : null}

        {pm.ceremonies.length > 0 ? (
          <Sub index="06" title="Ceremonies & cadence">
            <ul className="grid gap-2.5 md:grid-cols-2" role="list">
              {pm.ceremonies.map((ceremony, index) => (
                <li key={index}>
                  <Card className="flex flex-col gap-1 p-3.5">
                    <div className="flex flex-wrap items-baseline justify-between gap-2">
                      <p className="v-tint-head mb-0 text-sm">{ceremony.title}</p>
                      {ceremony.cadence ? (
                        <span className="v-chip v-chip-neutral">{ceremony.cadence}</span>
                      ) : null}
                    </div>
                    <p className="v-body text-sm">{ceremony.description}</p>
                  </Card>
                </li>
              ))}
            </ul>
          </Sub>
        ) : null}

        {pm.tools.length > 0 ? (
          <Sub index="07" title="Toolkit">
            <div className="flex flex-wrap gap-1.5">
              {pm.tools.map((tool) => (
                <span key={tool} className="v-chip">
                  {tool}
                </span>
              ))}
            </div>
          </Sub>
        ) : null}
      </Stack>
    ),

    approach: (
      <Stack>
        <Sub index="01" title="The approach">
          <p className="v-lede">{pm.approachOverview}</p>
          {pm.principles.length > 0 ? <BulletList items={pm.principles} /> : null}
        </Sub>

        {pm.approachSteps.length > 0 ? (
          <Sub index="02" title="End-to-end delivery framework">
            <StepList steps={pm.approachSteps} />
          </Sub>
        ) : null}

        {pm.stakeholderPlan.columns.length > 0 ? (
          <Sub index="03" title="Stakeholder communication plan">
            <TableView table={pm.stakeholderPlan} />
          </Sub>
        ) : null}

        {pm.prioritization.framework || pm.prioritization.table.columns.length > 0 ? (
          <Sub index="04" title="Prioritisation">
            <Card className="flex flex-col gap-3 p-4">
              {pm.prioritization.framework ? (
                <p className="v-tint-head mb-0">{pm.prioritization.framework}</p>
              ) : null}
              {pm.prioritization.description ? <p className="v-body">{pm.prioritization.description}</p> : null}
            </Card>
            <TableView table={pm.prioritization.table} />
          </Sub>
        ) : null}

        {pm.risks.length > 0 || pm.raid.columns.length > 0 ? (
          <Sub index="05" title="Risk & dependencies">
            {pm.risks.length > 0 ? <BulletList items={pm.risks} /> : null}
            <TableView table={pm.raid} />
          </Sub>
        ) : null}
      </Stack>
    ),

    outcomes: (
      <Stack>
        {pm.outcomeGroups.length > 0 ? (
          <Sub index="01" title="Impact">
            <PointGrid items={pm.outcomeGroups} columns={3} />
          </Sub>
        ) : null}

        {pm.beforeAfter.length > 0 ? (
          <Sub index="02" title="Before & after">
            <ul className="grid gap-2.5 sm:grid-cols-2" role="list">
              {pm.beforeAfter.map((row, index) => (
                <li key={index}>
                  <Card className="flex items-center justify-between gap-3 p-3.5">
                    <span className="v-tint-head mb-0 text-sm">{row.label}</span>
                    <span className="text-sm tabular-nums">
                      <span className="v-muted line-through">{row.before}</span>
                      <span className="mx-2 text-gray-400" aria-label="changed to">
                        →
                      </span>
                      <span className="font-semibold" style={{ color: "var(--shell-green)" }}>
                        {row.after}
                        {row.unit ? <span className="v-muted ml-0.5 text-xs">{row.unit}</span> : null}
                      </span>
                    </span>
                  </Card>
                </li>
              ))}
            </ul>
          </Sub>
        ) : null}

        {pm.milestones.length > 0 ? (
          <Sub index="03" title="Milestones">
            <TimelineList items={pm.milestones} />
          </Sub>
        ) : null}

        {pm.measurement.length > 0 ? (
          <Sub index="04" title="How this was measured">
            <BulletList items={pm.measurement} />
          </Sub>
        ) : null}

        {pm.achievements.length > 0 ? (
          <Sub index="05" title="Major achievements">
            <BulletList items={pm.achievements} />
          </Sub>
        ) : null}
      </Stack>
    ),

    artifacts: (
      <Stack>
        <Sub index="01" title="Delivery artifacts">
          {pm.artifacts.length === 0 ? (
            <Panel className="p-4">
              <p className="v-body text-sm">
                Artifacts are added per project in the CMS under{" "}
                <strong>Version case studies → PM → Artifacts</strong>.
              </p>
            </Panel>
          ) : (
            <ul className="grid gap-3.5 md:grid-cols-2" role="list">
              {pm.artifacts.map((artifact, index) => {
                const inner = (
                  <>
                    {artifact.image ? (
                      // eslint-disable-next-line @next/next/no-img-element
                      <img
                        src={artifact.image}
                        alt=""
                        className="h-32 w-full rounded-t-[inherit] object-cover"
                        loading="lazy"
                      />
                    ) : null}
                    <div className="flex flex-col gap-1.5 p-4">
                      <p className="v-label">{artifact.category}</p>
                      <h4 className="v-h2 text-sm">{artifact.title}</h4>
                      <p className="v-body text-sm">{artifact.description}</p>
                    </div>
                  </>
                );
                return (
                  <li key={index}>
                    {artifact.href ? (
                      <a
                        href={artifact.href}
                        target="_blank"
                        rel="noreferrer noopener"
                        className="block h-full no-underline"
                      >
                        <Card className="flex h-full flex-col overflow-hidden">{inner}</Card>
                      </a>
                    ) : (
                      <Card className="flex h-full flex-col overflow-hidden">{inner}</Card>
                    )}
                  </li>
                );
              })}
            </ul>
          )}
        </Sub>
      </Stack>
    ),

    learnings: (
      <Stack>
        {pm.learnings.length > 0 ? (
          <Sub index="01" title="Learning themes">
            <PointGrid items={pm.learnings} columns={3} />
          </Sub>
        ) : null}

        {pm.workedWell.length > 0 || pm.improveNextTime.length > 0 ? (
          <Sub index="02" title="Retrospective">
            <div className="grid gap-3.5 md:grid-cols-2">
              <Tint tone="success" title="What worked well">
                <BulletList items={pm.workedWell} />
              </Tint>
              <Tint tone="warning" title="What I would improve next time">
                <BulletList items={pm.improveNextTime} />
              </Tint>
            </div>
          </Sub>
        ) : null}

        {pm.retrospectives.columns.length > 0 ? (
          <Sub index="03" title="Retrospective insights">
            <TableView table={pm.retrospectives} />
          </Sub>
        ) : null}

        {pm.futurePractices.length > 0 ? (
          <Sub index="04" title="How this shaped my practice">
            <BulletList items={pm.futurePractices} />
          </Sub>
        ) : null}
      </Stack>
    ),
  };
}
