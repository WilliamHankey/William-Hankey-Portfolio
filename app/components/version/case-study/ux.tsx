import type { UxCaseStudy } from "@/lib/content/types";

import {
  ComponentSpecList,
  ImprovementList,
  JourneyList,
  PersonaGrid,
  QuoteStack,
  SpacingList,
  StateList,
  StepList,
  SwatchGrid,
  TimelineList,
  TypeScaleList,
} from "../blocks";
import { AssetGallery, AssetPairGrid, Figure, TreeView } from "../media";
import { MetricGrid } from "../metrics";
import {
  BulletList,
  Card,
  KeyValueList,
  Panel,
  PointGrid,
  TagList,
  Tint,
} from "../primitives";

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

const USABILITY_TONE = (status?: string) => (status === "negative" ? "danger" : "success");

/**
 * Builds the seven UX tab panels: Overview, Problem, Process, UX, UI,
 * Outcomes and Handoff.
 */
export function buildUxPanels(ux: UxCaseStudy): Record<string, React.ReactNode> {
  return {
    overview: (
      <Stack>
        <Sub index="01" title="At a glance">
          <KeyValueList
            items={[
              { label: "Category", value: ux.category },
              { label: "Role", value: ux.role },
              { label: "Team", value: ux.team },
              { label: "Timeline", value: ux.timeline },
              { label: "Industry", value: ux.industry },
            ]}
            columns={3}
          />
          <p className="v-lede">{ux.summary}</p>
          {ux.tags.length > 0 ? <TagList items={ux.tags} variant="accent" /> : null}
        </Sub>

        {ux.challenge ? (
          <Sub index="02" title="The challenge">
            <Tint tone="warning" title="The problem in one line">
              <p className="v-body">{ux.challenge}</p>
            </Tint>
          </Sub>
        ) : null}

        {ux.responsibilities.length > 0 ? (
          <Sub index="03" title="My responsibilities">
            <BulletList items={ux.responsibilities} />
          </Sub>
        ) : null}

        {ux.userGoals.length > 0 || ux.businessGoals.length > 0 ? (
          <Sub index="04" title="Goals">
            <div className="grid gap-3.5 md:grid-cols-2">
              {ux.userGoals.length > 0 ? (
                <Tint tone="accent" title="User goals">
                  <BulletList items={ux.userGoals} />
                </Tint>
              ) : null}
              {ux.businessGoals.length > 0 ? (
                <Tint tone="alt" title="Business goals">
                  <BulletList items={ux.businessGoals} />
                </Tint>
              ) : null}
            </div>
          </Sub>
        ) : null}

        {ux.keyResults.length > 0 ? (
          <Sub index="05" title="Key results">
            <MetricGrid metrics={ux.keyResults} />
          </Sub>
        ) : null}

        {ux.outputs.length > 0 ? (
          <Sub index="06" title="Representative outputs">
            <AssetGallery assets={ux.outputs} />
          </Sub>
        ) : null}
      </Stack>
    ),

    problem: (
      <Stack>
        <Sub index="01" title="Problem overview">
          <p className="v-lede">{ux.problemOverview}</p>
          {ux.coreProblem ? <Tint tone="warning" title="The core problem">{<p className="v-body">{ux.coreProblem}</p>}</Tint> : null}
        </Sub>

        {ux.businessContext ? (
          <Sub index="02" title="Company & business context">
            <p className="v-body">{ux.businessContext}</p>
            {ux.contextGoals.length > 0 ? <BulletList items={ux.contextGoals} /> : null}
          </Sub>
        ) : null}

        {ux.userPainPoints.length > 0 ? (
          <Sub index="03" title="What users told us">
            <QuoteStack items={ux.userPainPoints} />
          </Sub>
        ) : null}

        {ux.operationalPainPoints.length > 0 || ux.constraints.length > 0 ? (
          <Sub index="04" title="Operational pain & constraints">
            <div className="grid gap-3.5 md:grid-cols-2">
              {ux.operationalPainPoints.length > 0 ? (
                <PointGrid items={ux.operationalPainPoints} tone="warning" />
              ) : null}
              {ux.constraints.length > 0 ? (
                <PointGrid items={ux.constraints} tone="neutral" />
              ) : null}
            </div>
          </Sub>
        ) : null}

        {ux.whyItMattered ? (
          <Sub index="05" title="Why this project mattered">
            <p className="v-body">{ux.whyItMattered}</p>
            {ux.impactCards.length > 0 ? <PointGrid items={ux.impactCards} columns={3} /> : null}
          </Sub>
        ) : null}

        {ux.researchInputs.length > 0 || ux.personas.length > 0 || ux.problemStatement ? (
          <Sub index="06" title="Research inputs">
            {ux.researchInputs.length > 0 ? <BulletList items={ux.researchInputs} /> : null}
            {ux.problemStatement ? (
              <Panel className="p-4">
                <p className="v-label mb-1.5">Problem statement</p>
                <p className="v-lede">{ux.problemStatement}</p>
              </Panel>
            ) : null}
            <PersonaGrid personas={ux.personas} />
          </Sub>
        ) : null}
      </Stack>
    ),

    process: (
      <Stack>
        <Sub index="01" title="The design process">
          <p className="v-lede">{ux.processOverview}</p>
          <PointGrid items={ux.processPrinciples} columns={3} />
        </Sub>

        {ux.processSteps.length > 0 ? (
          <Sub index="02" title="Phase detail">
            <StepList steps={ux.processSteps} />
          </Sub>
        ) : null}

        {ux.phaseTimeline.length > 0 ? (
          <Sub index="03" title="Timeline by week">
            <TimelineList items={ux.phaseTimeline} />
          </Sub>
        ) : null}

        {ux.collaboration.length > 0 || ux.decisionInputs.length > 0 ? (
          <Sub index="04" title="Collaboration & decisions">
            {ux.collaboration.length > 0 ? (
              <Tint tone="accent" title="Collaboration & workshops">
                <BulletList items={ux.collaboration} />
              </Tint>
            ) : null}
            {ux.decisionInputs.length > 0 ? (
              <Tint tone="neutral" title="How decisions were made">
                <BulletList items={ux.decisionInputs} />
              </Tint>
            ) : null}
          </Sub>
        ) : null}
      </Stack>
    ),

    ux: (
      <Stack>
        <Sub index="01" title="UX overview">
          <p className="v-lede">{ux.uxOverview}</p>
          <PointGrid items={ux.uxPrinciples} columns={3} />
        </Sub>

        {ux.flow.length > 0 ? (
          <Sub index="02" title="Primary user flow">
            <StepList steps={ux.flow} />
          </Sub>
        ) : null}

        <Sub index="03" title="Information architecture">
          <TreeView node={ux.informationArchitecture} caption="Site map" />
        </Sub>

        {ux.journey.length > 0 ? (
          <Sub index="04" title="User journey">
            <JourneyList steps={ux.journey} />
          </Sub>
        ) : null}

        {ux.wireframes.length > 0 ? (
          <Sub index="05" title="Wireframes & iterations">
            <AssetGallery assets={ux.wireframes} />
          </Sub>
        ) : null}

        {ux.usability.participants || ux.usability.points.length > 0 ? (
          <Sub index="06" title="Usability testing">
            <Card className="flex flex-col gap-3 p-4">
              <KeyValueList
                columns={2}
                items={[
                  { label: "Participants", value: ux.usability.participants || "—" },
                  { label: "Rounds", value: ux.usability.rounds || "—" },
                ]}
              />
              {ux.usability.points.length > 0 ? (
                <ul className="grid gap-2" role="list">
                  {ux.usability.points.map((point, index) => (
                    <li key={index}>
                      <Tint tone={USABILITY_TONE(point.status) as "danger" | "success"}>
                        <p className="v-body text-sm">{point.text}</p>
                      </Tint>
                    </li>
                  ))}
                </ul>
              ) : null}
            </Card>
          </Sub>
        ) : null}

        {ux.decisions.length > 0 ? (
          <Sub index="07" title="UX decisions & improvements">
            <ImprovementList items={ux.decisions} />
          </Sub>
        ) : null}

        {ux.uxAccessibility.length > 0 ? (
          <Sub index="08" title="Accessibility considerations">
            <BulletList items={ux.uxAccessibility} />
          </Sub>
        ) : null}
      </Stack>
    ),

    ui: (
      <Stack>
        <Sub index="01" title="UI overview">
          <p className="v-lede">{ux.uiOverview}</p>
          <PointGrid items={ux.designGoals} columns={3} />
          <PointGrid items={ux.uiPrinciples} />
        </Sub>

        {ux.moodboard.length > 0 ? (
          <Sub index="02" title="Visual direction">
            {ux.brandPhrase ? <Tint tone="alt" title="Brand direction">{<p className="v-body">{ux.brandPhrase}</p>}</Tint> : null}
            <AssetGallery assets={ux.moodboard} />
          </Sub>
        ) : null}

        {ux.palette.length > 0 || ux.typography.length > 0 || ux.spacing.length > 0 ? (
          <Sub index="03" title="Design tokens">
            <SwatchGrid tokens={ux.palette} />
            <div className="grid gap-4 lg:grid-cols-2">
              <TypeScaleList tokens={ux.typography} />
              <SpacingList tokens={ux.spacing} />
            </div>
            {ux.icons.length > 0 ? (
              <div className="flex flex-col gap-2">
                <p className="v-label">Iconography</p>
                <TagList items={ux.icons} />
              </div>
            ) : null}
          </Sub>
        ) : null}

        {ux.components.length > 0 || ux.states.length > 0 ? (
          <Sub index="04" title="Components & states">
            <ComponentSpecList specs={ux.components} />
            <StateList states={ux.states} />
          </Sub>
        ) : null}

        {ux.uiBeforeAfter.length > 0 ? (
          <Sub index="05" title="Before / after UI">
            <AssetPairGrid pairs={ux.uiBeforeAfter} />
          </Sub>
        ) : null}

        {ux.finalScreens.length > 0 ? (
          <Sub index="06" title="High-fidelity screens">
            <AssetGallery assets={ux.finalScreens} />
          </Sub>
        ) : null}
      </Stack>
    ),

    outcomes: (
      <Stack>
        {ux.outcomeMetrics.length > 0 ? (
          <Sub index="01" title="Outcomes">
            <MetricGrid metrics={ux.outcomeMetrics} />
          </Sub>
        ) : null}

        {ux.outcomeGroups.length > 0 ? (
          <Sub index="02" title="Impact">
            <PointGrid items={ux.outcomeGroups} columns={3} />
          </Sub>
        ) : null}

        {ux.outcomeCompare.before || ux.outcomeCompare.after ? (
          <Sub index="03" title="Before vs after">
            <div className="grid gap-3.5 sm:grid-cols-2">
              <Figure asset={ux.outcomeCompare.before} ratio="4 / 3" />
              <Figure asset={ux.outcomeCompare.after} ratio="4 / 3" />
            </div>
          </Sub>
        ) : null}

        {ux.testimonial ? (
          <Sub index="04" title="Testimonial">
            <Card className="p-0">
              <div className="v-panel m-3.5 flex flex-col gap-2.5 p-4">
                <p className="v-lede italic">“{ux.testimonial.quote}”</p>
                <p className="v-metric-note">
                  <span className="font-semibold">{ux.testimonial.name}</span>
                  {ux.testimonial.role ? ` — ${ux.testimonial.role}` : null}
                </p>
              </div>
            </Card>
          </Sub>
        ) : null}

        {ux.additionalWins.length > 0 || ux.shipped.length > 0 ? (
          <Sub index="05" title="What was shipped">
            {ux.additionalWins.length > 0 ? (
              <Tint tone="success" title="Additional wins">
                <BulletList items={ux.additionalWins} />
              </Tint>
            ) : null}
            {ux.shipped.length > 0 ? (
              <Tint tone="accent" title="Shipped">
                <BulletList items={ux.shipped} />
              </Tint>
            ) : null}
          </Sub>
        ) : null}
      </Stack>
    ),

    handoff: (
      <Stack>
        <Sub index="01" title="Handoff & delivery">
          <p className="v-lede">{ux.handoffNarrative}</p>
          {ux.handoffGoals.length > 0 ? <BulletList items={ux.handoffGoals} /> : null}
        </Sub>

        {ux.redlines.length > 0 || ux.annotatedScreens.length > 0 || ux.componentDocs.length > 0 ? (
          <Sub index="02" title="What was handed over">
            {ux.redlines.length > 0 ? (
              <div className="flex flex-col gap-2.5">
                <p className="v-label">Design specs & redlines</p>
                <AssetGallery assets={ux.redlines} />
              </div>
            ) : null}
            {ux.annotatedScreens.length > 0 ? (
              <div className="flex flex-col gap-2.5">
                <p className="v-label">Annotated screens</p>
                <AssetGallery assets={ux.annotatedScreens} />
              </div>
            ) : null}
            {ux.componentDocs.length > 0 ? (
              <div className="flex flex-col gap-2.5">
                <p className="v-label">Component documentation</p>
                <AssetGallery assets={ux.componentDocs} />
              </div>
            ) : null}
          </Sub>
        ) : null}

        {ux.collaborationNotes.length > 0 || ux.implementationSupport.length > 0 ? (
          <Sub index="03" title="Working with engineering">
            {ux.collaborationNotes.length > 0 ? (
              <Tint tone="accent" title="Collaboration">
                <BulletList items={ux.collaborationNotes} />
              </Tint>
            ) : null}
            {ux.implementationSupport.length > 0 ? (
              <Tint tone="alt" title="Implementation support">
                <BulletList items={ux.implementationSupport} />
              </Tint>
            ) : null}
          </Sub>
        ) : null}

        {ux.releaseStats.length > 0 ? (
          <Sub index="04" title="Release readiness">
            <MetricGrid metrics={ux.releaseStats} columns={3} />
          </Sub>
        ) : null}

        {ux.postLaunch.length > 0 ? (
          <Sub index="05" title="After launch">
            <BulletList items={ux.postLaunch} />
          </Sub>
        ) : null}
      </Stack>
    ),
  };
}
