import type { FeCaseStudy } from "@/lib/content/types";

import { CodeBlock, LabelledTreeGrid, StepList, TitledTextList } from "../blocks";
import { AssetGallery, AssetPairGrid, FlowDiagram } from "../media";
import { ComparisonBars, MetricGrid, ProgressRing, SegmentBars } from "../metrics";
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

/**
 * Builds the seven FE tab panels: Overview, Problem, Architecture, UX/UI,
 * Performance, Results and Code Quality.
 */
export function buildFePanels(fe: FeCaseStudy): Record<string, React.ReactNode> {
  return {
    overview: (
      <Stack>
        <Sub index="01" title="At a glance">
          <KeyValueList
            items={[
              { label: "Role", value: fe.role },
              { label: "Team", value: fe.team },
              { label: "Timeline", value: fe.timeline },
              { label: "Industry", value: fe.industry },
            ]}
            columns={2}
          />
          <p className="v-lede">{fe.summary}</p>
          {fe.techStack.length > 0 ? <TagList items={fe.techStack.map((tech) => tech.name)} variant="accent" /> : null}
        </Sub>

        {fe.keyResults.length > 0 ? (
          <Sub index="02" title="Key results">
            <MetricGrid metrics={fe.keyResults} />
          </Sub>
        ) : null}

        {fe.contributions.length > 0 || fe.technicalHighlights.length > 0 ? (
          <Sub index="03" title="What I built">
            {fe.contributions.length > 0 ? <BulletList items={fe.contributions} /> : null}
            {fe.technicalHighlights.length > 0 ? <BulletList items={fe.technicalHighlights} /> : null}
          </Sub>
        ) : null}

        {fe.process.length > 0 ? (
          <Sub index="04" title="How the work ran">
            <StepList steps={fe.process} />
          </Sub>
        ) : null}

        {fe.screenshots.length > 0 ? (
          <Sub index="05" title="Screenshots">
            <AssetGallery assets={fe.screenshots} />
          </Sub>
        ) : null}
      </Stack>
    ),

    problem: (
      <Stack>
        <Sub index="01" title="Product context">
          <p className="v-lede">{fe.productContext}</p>
        </Sub>

        <Sub index="02" title="The business challenge">
          <p className="v-body">{fe.businessChallenge}</p>
        </Sub>

        {fe.userPainPoints.length > 0 || fe.frontendChallenges.length > 0 ? (
          <Sub index="03" title="The problems I had to solve">
            <div className="grid gap-3.5 md:grid-cols-2">
              {fe.userPainPoints.length > 0 ? (
                <Tint tone="warning" title="User pain points">
                  <BulletList items={fe.userPainPoints} />
                </Tint>
              ) : null}
              {fe.frontendChallenges.length > 0 ? (
                <Tint tone="accent" title="Front-end challenges">
                  <BulletList items={fe.frontendChallenges} />
                </Tint>
              ) : null}
            </div>
          </Sub>
        ) : null}

        {fe.technicalConstraints.length > 0 ? (
          <Sub index="04" title="Technical constraints">
            <BulletList items={fe.technicalConstraints} />
          </Sub>
        ) : null}

        {fe.goals.length > 0 || fe.successCriteria.length > 0 ? (
          <Sub index="05" title="Goals & success criteria">
            <div className="grid gap-3.5 md:grid-cols-2">
              {fe.goals.length > 0 ? (
                <Tint tone="alt" title="Project goals">
                  <BulletList items={fe.goals} />
                </Tint>
              ) : null}
              {fe.successCriteria.length > 0 ? (
                <Tint tone="success" title="Success criteria">
                  <BulletList items={fe.successCriteria} />
                </Tint>
              ) : null}
            </div>
          </Sub>
        ) : null}

        {fe.responsibilities.length > 0 || fe.stakeholders.length > 0 ? (
          <Sub index="06" title="Scope & stakeholders">
            {fe.responsibilities.length > 0 ? <BulletList items={fe.responsibilities} /> : null}
            {fe.stakeholders.length > 0 ? (
              <div className="flex flex-col gap-2">
                <p className="v-label">Stakeholders</p>
                <div className="flex flex-wrap gap-1.5">
                  {fe.stakeholders.map((stakeholder) => (
                    <span key={stakeholder} className="v-chip v-chip-neutral">
                      {stakeholder}
                    </span>
                  ))}
                </div>
              </div>
            ) : null}
          </Sub>
        ) : null}
      </Stack>
    ),

    architecture: (
      <Stack>
        <Sub index="01" title="Architecture overview">
          <p className="v-lede">{fe.architectureOverview}</p>
          <PointGrid items={fe.architectureGoals} />
        </Sub>

        <Sub index="02" title="Diagrams">
          <LabelledTreeGrid
            nodes={[
              { title: "High-level architecture", node: fe.highLevel },
              { title: "Application structure", node: fe.fileTree },
              { title: "Component architecture", node: fe.componentTree },
            ]}
          />
        </Sub>

        {fe.apiFlow.length > 0 ? (
          <Sub index="03" title="API & data flow">
            <FlowDiagram
              nodes={fe.apiFlow.map((step) => ({ title: step.title, description: step.summary }))}
            />
            <StepList steps={fe.apiFlow} />
          </Sub>
        ) : null}

        {fe.stateManagement.length > 0 || fe.uiPatterns.length > 0 || fe.responsive.length > 0 ? (
          <Sub index="04" title="Patterns">
            {fe.stateManagement.length > 0 ? (
              <div className="flex flex-col gap-2">
                <p className="v-label">State management</p>
                <BulletList items={fe.stateManagement} />
              </div>
            ) : null}
            {fe.uiPatterns.length > 0 ? <PointGrid items={fe.uiPatterns} /> : null}
            {fe.responsive.length > 0 ? <PointGrid items={fe.responsive} tone="alt" /> : null}
          </Sub>
        ) : null}

        {fe.decisions.length > 0 ? (
          <Sub index="05" title="Technical decisions">
            <ul className="grid gap-3" role="list">
              {fe.decisions.map((decision, index) => (
                <li key={index}>
                  <Card className="flex flex-col gap-1.5 p-4">
                    <p className="v-h2 text-sm">{decision.title}</p>
                    <p className="v-body text-sm">{decision.rationale}</p>
                    {decision.tradeoffs ? (
                      <p className="v-metric-note">
                        <span className="font-semibold">Trade-off: </span>
                        {decision.tradeoffs}
                      </p>
                    ) : null}
                  </Card>
                </li>
              ))}
            </ul>
          </Sub>
        ) : null}

        {fe.deployment.length > 0 ? (
          <Sub index="06" title="Deployment & integration">
            <BulletList items={fe.deployment} />
          </Sub>
        ) : null}
      </Stack>
    ),

    "ux-ui": (
      <Stack>
        {fe.designCollaboration.length > 0 ? (
          <Sub index="01" title="Design collaboration">
            <BulletList items={fe.designCollaboration} />
          </Sub>
        ) : null}

        {fe.figmaToProduction.length > 0 ? (
          <Sub index="02" title="Figma to production">
            <AssetPairGrid pairs={fe.figmaToProduction} />
          </Sub>
        ) : null}

        {fe.designSystem.length > 0 || fe.responsiveScreens.length > 0 ? (
          <Sub index="03" title="Design system & responsive build">
            {fe.designSystem.length > 0 ? <AssetGallery assets={fe.designSystem} columns={2} /> : null}
            {fe.responsiveScreens.length > 0 ? (
              <div className="flex flex-col gap-2.5">
                <p className="v-label">Responsive screens</p>
                <AssetGallery assets={fe.responsiveScreens} />
              </div>
            ) : null}
          </Sub>
        ) : null}

        {fe.interactions.length > 0 ? (
          <Sub index="04" title="Interaction design">
            <TitledTextList items={fe.interactions} />
          </Sub>
        ) : null}

        {fe.accessibility.length > 0 ? (
          <Sub index="05" title="Accessibility & usability">
            <BulletList items={fe.accessibility} />
          </Sub>
        ) : null}
      </Stack>
    ),

    performance: (
      <Stack>
        {fe.perfMetrics.length > 0 ? (
          <Sub index="01" title="Performance outcomes">
            <MetricGrid metrics={fe.perfMetrics} columns={3} />
          </Sub>
        ) : null}

        {fe.coreWebVitals.length > 0 ? (
          <Sub index="02" title="Core Web Vitals">
            <MetricGrid metrics={fe.coreWebVitals} columns={3} />
          </Sub>
        ) : null}

        {fe.beforeAfter.length > 0 ? (
          <Sub index="03" title="Before vs after">
            <ComparisonBars items={fe.beforeAfter} />
          </Sub>
        ) : null}

        {fe.optimizations.length > 0 ? (
          <Sub index="04" title="Optimisation strategy">
            <PointGrid items={fe.optimizations} numbered />
          </Sub>
        ) : null}

        {fe.bundle && typeof fe.bundle.after === "number" && (fe.bundle.segments.length > 0 || fe.bundle.after > 0) ? (
          <Sub index="05" title="Bundle size">
            <Card className="flex flex-col gap-3.5 p-4">
              <div className="flex flex-wrap items-baseline gap-3">
                {typeof fe.bundle.before === "number" ? (
                  <>
                    <span className="v-muted text-sm line-through tabular-nums">
                      {fe.bundle.before}{fe.bundle.unit}
                    </span>
                    <span className="text-gray-400" aria-hidden="true">→</span>
                  </>
                ) : null}
                <span className="v-metric-value" style={{ fontSize: "1.6rem" }}>
                  {fe.bundle.after}
                  {fe.bundle.unit}
                </span>
              </div>
              <SegmentBars segments={fe.bundle.segments} total={fe.bundle.after} unit={fe.bundle.unit} />
            </Card>
          </Sub>
        ) : null}

        {fe.impactSummary ? (
          <Sub index="06" title="Real-world impact">
            <p className="v-lede">{fe.impactSummary}</p>
          </Sub>
        ) : null}
      </Stack>
    ),

    results: (
      <Stack>
        {fe.resultMetrics.length > 0 ? (
          <Sub index="01" title="Primary results">
            <MetricGrid metrics={fe.resultMetrics} />
          </Sub>
        ) : null}

        {fe.businessImpact.length > 0 || fe.userImpact.length > 0 || fe.technicalImpact.length > 0 ? (
          <Sub index="02" title="Impact">
            <div className="grid gap-3.5 md:grid-cols-3">
              {fe.businessImpact.length > 0 ? (
                <Tint tone="alt" title="Business">
                  <BulletList items={fe.businessImpact} />
                </Tint>
              ) : null}
              {fe.userImpact.length > 0 ? (
                <Tint tone="success" title="User">
                  <BulletList items={fe.userImpact} />
                </Tint>
              ) : null}
              {fe.technicalImpact.length > 0 ? (
                <Tint tone="accent" title="Technical">
                  <BulletList items={fe.technicalImpact} />
                </Tint>
              ) : null}
            </div>
          </Sub>
        ) : null}

        {fe.launchOutcomes.length > 0 ? (
          <Sub index="03" title="Launch outcomes">
            <MetricGrid metrics={fe.launchOutcomes} />
          </Sub>
        ) : null}
      </Stack>
    ),

    "code-quality": (
      <Stack>
        {fe.principles.length > 0 ? (
          <Sub index="01" title="Principles I hold to">
            <PointGrid items={fe.principles} />
          </Sub>
        ) : null}

        {fe.typescriptSample?.code ? (
          <Sub index="02" title="TypeScript in practice">
            <CodeBlock
              filename={fe.typescriptSample.filename}
              language={fe.typescriptSample.language}
              code={fe.typescriptSample.code}
            />
          </Sub>
        ) : null}

        {fe.typescriptPoints.length > 0 || fe.componentPoints.length > 0 ? (
          <Sub index="03" title="Type safety & component design">
            {fe.typescriptPoints.length > 0 ? (
              <Tint tone="accent" title="TypeScript">
                <BulletList items={fe.typescriptPoints} />
              </Tint>
            ) : null}
            {fe.componentPoints.length > 0 ? (
              <Tint tone="alt" title="Component architecture">
                <BulletList items={fe.componentPoints} />
              </Tint>
            ) : null}
          </Sub>
        ) : null}

        <Sub index="04" title="Testing">
          {fe.testing.coverage !== undefined && fe.testing.coverage > 0 ? (
            <Card className="flex flex-wrap items-center gap-5 p-4">
              <ProgressRing value={fe.testing.coverage} label="coverage" />
              <div className="flex flex-1 flex-col gap-2">
                <KeyValueList
                  columns={2}
                  items={[
                    { label: "Unit", value: fe.testing.unit ?? "—" },
                    { label: "Integration", value: fe.testing.integration ?? "—" },
                    { label: "Component", value: fe.testing.component ?? "—" },
                    { label: "Accessibility", value: fe.testing.accessibility ?? "—" },
                  ]}
                />
                {fe.testing.coverageNote ? (
                  <p className="v-metric-note">{fe.testing.coverageNote}</p>
                ) : null}
              </div>
            </Card>
          ) : (
            <Panel className="p-4">
              <p className="v-body text-sm">
                No coverage figure is published for this project. Coverage is only shown when it is a
                real measured number.
              </p>
            </Panel>
          )}
          {fe.testing.points.length > 0 ? <BulletList items={fe.testing.points} /> : null}
        </Sub>

        {fe.linting.length > 0 || fe.ci.length > 0 ? (
          <Sub index="05" title="Tooling & CI/CD">
            {fe.linting.length > 0 ? <BulletList items={fe.linting} /> : null}
            {fe.ci.length > 0 ? (
              <ol className="grid gap-2" role="list">
                {fe.ci.map((step, index) => (
                  <li key={index}>
                    <Card className="flex flex-wrap items-baseline gap-3 p-3">
                      <span className="v-tint-head mb-0 text-sm">{step.title}</span>
                      {step.command ? (
                        <code className="v-code rounded px-2 py-1 text-xs" style={{ background: "#f3f4f6" }}>
                          {step.command}
                        </code>
                      ) : null}
                      {step.description ? (
                        <span className="v-body w-full text-xs">{step.description}</span>
                      ) : null}
                    </Card>
                  </li>
                ))}
              </ol>
            ) : null}
          </Sub>
        ) : null}

        {fe.reviews.length > 0 || fe.docs.length > 0 ? (
          <Sub index="06" title="Reviews & documentation">
            {fe.reviews.length > 0 ? (
              <Tint tone="neutral" title="Code reviews">
                <BulletList items={fe.reviews} />
              </Tint>
            ) : null}
            {fe.docs.length > 0 ? (
              <Tint tone="neutral" title="Documentation">
                <BulletList items={fe.docs} />
              </Tint>
            ) : null}
          </Sub>
        ) : null}
      </Stack>
    ),
  };
}
