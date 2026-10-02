import type {
  FeBundleSegment,
  FeMetricComparison,
  Metric,
  VersionMetric,
} from "@/lib/content/types";

/* ==========================================================================
   Metric cards and stat strips
   ========================================================================== */

const TONE_COLORS: Record<string, string> = {
  accent: "var(--v-accent)",
  success: "var(--shell-green)",
  warning: "var(--shell-amber)",
  danger: "var(--shell-red)",
  neutral: "#6b7280",
  alt: "var(--shell-purple)",
};

export function MetricCard({ metric }: { metric: Metric }) {
  return (
    <div className="v-card flex flex-col p-4">
      <p
        className="v-metric-value"
        style={{ ["--metric-color" as string]: TONE_COLORS[metric.tone ?? "accent"] }}
      >
        {metric.value}
      </p>
      <p className="v-metric-label">{metric.label}</p>
      {metric.note ? <p className="v-metric-note">{metric.note}</p> : null}
      {metric.source ? (
        <p className="v-metric-note italic opacity-80">{metric.source}</p>
      ) : null}
    </div>
  );
}

export function MetricGrid({
  metrics,
  columns = 4,
}: {
  metrics: Metric[];
  columns?: 2 | 3 | 4;
}) {
  if (metrics.length === 0) return null;
  const grid =
    columns === 4 ? "sm:grid-cols-2 lg:grid-cols-4" : columns === 3 ? "sm:grid-cols-3" : "sm:grid-cols-2";
  return (
    <div className={`grid gap-3.5 ${grid}`}>
      {metrics.map((metric, index) => (
        <MetricCard key={index} metric={metric} />
      ))}
    </div>
  );
}

/** The flat credibility strip that sits directly under the hero. */
export function StatStrip({ metrics }: { metrics: VersionMetric[] }) {
  if (metrics.length === 0) return null;
  return (
    <dl className="v-stat-strip">
      {metrics.map((metric, index) => (
        <div key={index} className="flex flex-col gap-1">
          <dt className="v-sr-only">{metric.label}</dt>
          <dd>
            <span
              className="v-metric-value"
              style={{ fontSize: "clamp(1.5rem, 1.1rem + 1.4vw, 2.1rem)" }}
            >
              {metric.value}
            </span>
            <span className="v-metric-label mt-1 block">{metric.label}</span>
            {metric.note ? <span className="v-metric-note block">{metric.note}</span> : null}
          </dd>
        </div>
      ))}
    </dl>
  );
}

/* ==========================================================================
   Before / after comparisons
   ========================================================================== */

function formatNumber(value: number) {
  return Number.isInteger(value) ? String(value) : value.toFixed(2).replace(/0+$/, "");
}

export function DeltaBadge({
  before,
  after,
  lowerIsBetter = true,
}: {
  before: number;
  after: number;
  lowerIsBetter?: boolean;
}) {
  if (before === after) return null;
  const change = ((after - before) / before) * 100;
  const improved = lowerIsBetter ? change < 0 : change > 0;
  const rounded = `${change > 0 ? "+" : ""}${Math.round(change)}%`;
  return (
    <span
      className="v-delta"
      style={{ color: improved ? "var(--shell-green)" : "var(--shell-red)" }}
    >
      <span aria-hidden="true">{improved ? "▼" : "▲"}</span>
      {rounded}
    </span>
  );
}

/**
 * Renders a metric comparison as two proportional bars.
 *
 * Both bars are drawn relative to the larger of the two values, so the shorter
 * bar is always visibly shorter regardless of the unit.
 */
export function ComparisonBars({ items }: { items: FeMetricComparison[] }) {
  if (items.length === 0) return null;
  return (
    <div className="grid gap-4">
      {items.map((item) => {
        const max = Math.max(item.before, item.after) || 1;
        return (
          <div key={item.label} className="v-card flex flex-col gap-2.5 p-4">
            <div className="flex flex-wrap items-center justify-between gap-2">
              <p className="v-tint-head mb-0">{item.label}</p>
              <DeltaBadge before={item.before} after={item.after} lowerIsBetter={item.lowerIsBetter} />
            </div>
            {[
              { label: "Before", value: item.before, color: "#cbd5e1" },
              { label: "After", value: item.after, color: "var(--v-accent)" },
            ].map((row) => (
              <div key={row.label} className="flex items-center gap-3">
                <span className="w-14 shrink-0 text-xs font-medium v-muted">{row.label}</span>
                <span className="v-meter flex-1">
                  <span
                    style={{
                      width: `${Math.max((row.value / max) * 100, 2)}%`,
                      ["--meter-color" as string]: row.color,
                    }}
                  />
                </span>
                <span className="w-20 shrink-0 text-right text-sm font-semibold tabular-nums">
                  {formatNumber(row.value)}
                  {item.unit ? <span className="v-muted ml-0.5 text-xs">{item.unit}</span> : null}
                </span>
              </div>
            ))}
          </div>
        );
      })}
    </div>
  );
}

/** Simple labelled bar list, used for bundle composition. */
export function SegmentBars({
  segments,
  total,
  unit,
}: {
  segments: FeBundleSegment[];
  total?: number;
  unit?: string;
}) {
  if (segments.length === 0) return null;
  const sum = total ?? segments.reduce((accumulator, segment) => accumulator + segment.size, 0);
  const colors = ["var(--v-accent)", "var(--v-accent-alt)", "var(--shell-purple)", "var(--shell-amber)"];
  return (
    <div className="flex flex-col gap-3">
      <div className="flex h-3 w-full overflow-hidden rounded-full" role="presentation">
        {segments.map((segment, index) => (
          <span
            key={segment.label}
            style={{
              width: `${sum > 0 ? (segment.size / sum) * 100 : 0}%`,
              background: colors[index % colors.length],
            }}
          />
        ))}
      </div>
      <ul className="grid gap-2 sm:grid-cols-2" role="list">
        {segments.map((segment, index) => (
          <li key={segment.label} className="flex items-center gap-2 text-sm">
            <span
              className="h-2.5 w-2.5 shrink-0 rounded-full"
              style={{ background: colors[index % colors.length] }}
            />
            <span className="v-body flex-1">{segment.label}</span>
            <span className="font-semibold tabular-nums">
              {formatNumber(segment.size)}
              {unit ? <span className="v-muted ml-0.5 text-xs">{unit}</span> : null}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}

/** A percentage ring, used for coverage and readiness figures. */
export function ProgressRing({ value, label, size = 132 }: { value: number; label: string; size?: number }) {
  const clamped = Math.max(0, Math.min(100, value));
  return (
    <div
      className="v-ring"
      style={{
        width: size,
        height: size,
        ["--ring-value" as string]: clamped,
        ["--ring-color" as string]: "var(--v-accent)",
      }}
    >
      <div className="grid h-[calc(100%-14px)] w-[calc(100%-14px)] place-items-center rounded-full bg-white">
        <div className="text-center">
          <p className="v-h2 text-xl tabular-nums">{Math.round(clamped)}%</p>
          <p className="v-metric-note mt-0.5">{label}</p>
        </div>
      </div>
    </div>
  );
}
