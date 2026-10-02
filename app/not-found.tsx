import Link from "next/link";

import { VERSIONS, VERSION_KEYS, versionPath } from "@/lib/versions";

/**
 * Shown for any unmatched route, including the apex `/`.
 *
 * The apex deliberately does not render a general portfolio. This page only
 * offers the three role-specific versions and carries `noindex`, so it cannot
 * be indexed as a portfolio home page.
 */
export default function NotFound() {
  return (
    <div
      className="flex min-h-screen flex-col justify-center gap-8 px-6 py-16"
      style={{ background: "var(--shell-page, #f3f4f6)", color: "var(--shell-ink, #2c2b3e)" }}
    >
      <div className="mx-auto w-full max-w-3xl">
        <p
          className="text-xs font-bold uppercase tracking-widest"
          style={{ color: "var(--shell-purple, #9333ea)" }}
        >
          Page not found
        </p>
        <h1 className="mt-3 text-3xl font-bold md:text-4xl">
          This portfolio is split by role. Pick the one you came for.
        </h1>
        <p className="mt-4 max-w-xl text-base" style={{ color: "#4b5563" }}>
          There is no single combined home page — each version is written for a different job, so the
          same project reads differently depending on the role.
        </p>

        <ul className="mt-8 grid gap-3 md:grid-cols-3" role="list">
          {VERSION_KEYS.map((key) => {
            const config = VERSIONS[key];
            return (
              <li key={key}>
                <Link
                  href={versionPath(key)}
                  className="flex h-full flex-col gap-1.5 rounded-lg border bg-white p-4 no-underline transition-shadow hover:shadow-md"
                  style={{ borderColor: config.accent }}
                >
                  <span
                    className="w-fit rounded-full px-2.5 py-0.5 text-xs font-bold text-white"
                    style={{ background: config.accent }}
                  >
                    {config.short}
                  </span>
                  <span className="font-bold" style={{ color: config.accent }}>
                    {config.label}
                  </span>
                  <span className="text-sm" style={{ color: "#4b5563" }}>
                    {config.seo.description}
                  </span>
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
