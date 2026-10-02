import type { Asset, AssetPair, TreeNode } from "@/lib/content/types";

/* ==========================================================================
   Images, galleries and asset placeholders
   ========================================================================== */

/**
 * A single labelled figure.
 *
 * Content is authored in the CMS before imagery exists, so a missing image
 * renders a visible placeholder rather than a broken image or an empty box.
 */
export function Figure({
  asset,
  ratio = "16 / 10",
}: {
  asset: { title?: string; caption?: string; image?: string | null };
  ratio?: string;
}) {
  return (
    <figure className="v-card m-0 flex flex-col overflow-hidden">
      <div
        className="grid w-full place-items-center"
        style={{
          aspectRatio: ratio,
          background: asset?.image ? "var(--shell-page-alt)" : "repeating-linear-gradient(45deg, #f6f6f8, #f6f6f8 10px, #eeeef2 10px, #eeeef2 20px)",
        }}
      >
        {asset?.image ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={asset.image}
            alt={asset.title ?? asset.caption ?? ""}
            className="h-full w-full object-cover"
            loading="lazy"
          />
        ) : (
          <span className="v-muted px-4 text-center text-xs font-medium uppercase tracking-widest">
            Screenshot pending
          </span>
        )}
      </div>
      {(asset?.title || asset?.caption) && (
        <figcaption className="flex flex-col gap-1 p-3.5">
          {asset.title ? (
            <p className="v-tint-head mb-0 text-sm">{asset.title}</p>
          ) : null}
          {asset.caption ? <p className="v-body text-xs">{asset.caption}</p> : null}
        </figcaption>
      )}
    </figure>
  );
}

export function AssetGallery({
  assets,
  columns = 3,
}: {
  assets: Asset[];
  columns?: 2 | 3;
}) {
  if (assets.length === 0) return null;
  const grid = columns === 3 ? "sm:grid-cols-2 lg:grid-cols-3" : "sm:grid-cols-2";
  return (
    <div className={`grid gap-3.5 ${grid}`}>
      {assets.map((asset, index) => (
        <Figure key={index} asset={asset} />
      ))}
    </div>
  );
}

export function AssetPairCard({ pair }: { pair: AssetPair }) {
  return (
    <Cardish className="flex flex-col gap-3 p-4">
      {pair.title ? <p className="v-tint-head mb-0">{pair.title}</p> : null}
      <div className="grid gap-3 sm:grid-cols-2">
        <Figure asset={{ ...pair.before, title: pair.before?.title ?? "Before" }} ratio="4 / 3" />
        <Figure asset={{ ...pair.after, title: pair.after?.title ?? "After" }} ratio="4 / 3" />
      </div>
      {pair.note ? <p className="v-body text-xs">{pair.note}</p> : null}
    </Cardish>
  );
}

export function AssetPairGrid({ pairs }: { pairs: AssetPair[] }) {
  if (pairs.length === 0) return null;
  return (
    <div className="grid gap-4 lg:grid-cols-2">
      {pairs.map((pair, index) => (
        <AssetPairCard key={index} pair={pair} />
      ))}
    </div>
  );
}

/** Local alias so this module does not need to import the primitives barrel. */
function Cardish({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return <div className={`v-card ${className}`}>{children}</div>;
}

/* ==========================================================================
   Diagrams
   ========================================================================== */

function renderLines(node: TreeNode | undefined, depth = 0, lines: string[] = []): string[] {
  if (!node) return lines;
  const indent = "  ".repeat(depth);
  lines.push(depth === 0 ? node.label : `${indent}├─ ${node.label}`);
  for (const child of node.children ?? []) {
    renderLines(child, depth + 1, lines);
  }
  return lines;
}

export function TreeView({ node, caption }: { node?: TreeNode; caption?: string }) {
  if (!node) return null;
  const lines = renderLines(node);
  if (lines.length === 0) return null;
  return (
    <figure className="v-code-block m-0">
      {caption ? <figcaption className="v-code-head">{caption}</figcaption> : null}
      <pre className="v-tree v-code-body m-0">
        <code>{lines.join("\n")}</code>
      </pre>
    </figure>
  );
}

/** Horizontal step diagram, used for user flows and API flows. */
export function FlowDiagram({
  nodes,
  caption,
}: {
  nodes: { title: string; description: string }[];
  caption?: string;
}) {
  if (nodes.length === 0) return null;
  return (
    <figure className="v-card m-0 flex flex-col gap-3 p-4">
      {caption ? <figcaption className="v-label">{caption}</figcaption> : null}
      <div className="v-flow">
        {nodes.map((node, index) => (
          <div key={index} className="flex items-center gap-2">
            <div className="v-flow-node">
              <h4>{node.title}</h4>
              {node.description ? <p>{node.description}</p> : null}
            </div>
            {index < nodes.length - 1 ? (
              <span className="v-flow-arrow" aria-hidden="true">
                →
              </span>
            ) : null}
          </div>
        ))}
      </div>
    </figure>
  );
}
