import Link from "next/link";
import type { ReactNode } from "react";

import { VERSIONS, VERSION_KEYS, versionPath, type VersionKey } from "@/lib/versions";
import type { VersionContact } from "@/lib/content/types";

/* ==========================================================================
   Version shell
   --------------------------------------------------------------------------
   Wraps every versioned page in `data-version`, which is what scopes the
   accent colour variables in globals.css. The apex `/` renders none of this,
   so no general portfolio navigation is ever exposed.
   ========================================================================== */

export function VersionShell({
  version,
  children,
  contact,
}: {
  version: VersionKey;
  children: ReactNode;
  contact: VersionContact;
}) {
  return (
    <div className="v-shell flex min-h-screen flex-col" data-version={version}>
      <a href="#main" className="v-skip-link">
        Skip to content
      </a>
      <VersionHeader version={version} contact={contact} />
      <main id="main" className="flex-auto">
        {children}
      </main>
      <VersionFooter version={version} contact={contact} />
    </div>
  );
}

function VersionHeader({
  version,
  contact,
}: {
  version: VersionKey;
  contact: VersionContact;
}) {
  const config = VERSIONS[version];
  return (
    <header
      className="sticky top-0 z-30 border-b backdrop-blur"
      style={{ background: "rgba(255,255,255,0.92)", borderColor: "var(--shell-line)" }}
    >
      <div className="v-container flex flex-wrap items-center justify-between gap-3 py-3">
        <Link href={versionPath(version)} className="flex items-center gap-2.5 no-underline">
          <span
            className="grid h-9 w-9 place-items-center rounded-lg font-bold text-white"
            style={{ background: "var(--v-accent)", fontFamily: "var(--font-heading)" }}
          >
            {config.short}
          </span>
          <span className="flex flex-col leading-tight">
            <span className="v-h2 text-sm" style={{ color: "var(--shell-ink)" }}>
              {contact.name}
            </span>
            <span className="text-xs v-muted">{config.role}</span>
          </span>
        </Link>

        <div className="flex items-center gap-1.5">
          <VersionSwitcher current={version} />
          {contact.cvUrl ? (
            <a
              href={contact.cvUrl}
              className="v-btn v-btn-ghost hidden !py-1.5 !text-xs sm:inline-flex"
              target="_blank"
              rel="noreferrer noopener"
            >
              Résumé
            </a>
          ) : null}
        </div>
      </div>

      <nav aria-label={`${config.label} sections`} className="v-scroll-x border-t" style={{ borderColor: "var(--shell-line)" }}>
        <ul className="v-container flex items-center gap-1" role="list">
          {config.nav.map((item) => {
            const href = versionPath(version, item.path);
            return (
              <li key={href}>
                <Link
                  href={href}
                  className="inline-block whitespace-nowrap px-3 py-2.5 text-sm font-medium no-underline transition-colors"
                  style={{ color: "var(--shell-ink-soft)" }}
                >
                  {item.label}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </header>
  );
}

/**
 * The three versions are peers, not children. Switching replaces the prefix
 * rather than nesting, so `/fe/about` and `/ux/about` are one click apart.
 */
function VersionSwitcher({ current }: { current: VersionKey }) {
  return (
    <nav aria-label="Switch portfolio version" className="flex items-center gap-0.5 rounded-lg p-0.5" style={{ background: "var(--shell-page-alt)" }}>
      {VERSION_KEYS.map((key) => {
        const active = key === current;
        return (
          <Link
            key={key}
            href={versionPath(key)}
            aria-current={active ? "page" : undefined}
            title={VERSIONS[key].label}
            className="rounded-md px-2.5 py-1.5 text-xs font-bold no-underline transition-colors"
            style={
              active
                ? { background: "var(--v-accent)", color: "#fff" }
                : { color: "var(--shell-ink-soft)" }
            }
          >
            {VERSIONS[key].short}
          </Link>
        );
      })}
    </nav>
  );
}

function VersionFooter({ version, contact }: { version: VersionKey; contact: VersionContact }) {
  const config = VERSIONS[version];
  return (
    <footer style={{ background: "var(--shell-ink)", color: "#fff" }}>
      <div className="v-container flex flex-col gap-6 py-10 md:flex-row md:justify-between">
        <div className="flex max-w-sm flex-col gap-2">
          <p className="v-h2 text-base">{contact.name}</p>
          <p className="text-sm" style={{ color: "rgba(255,255,255,0.7)" }}>
            {config.roleLong}
          </p>
          {contact.location ? (
            <p className="text-xs" style={{ color: "rgba(255,255,255,0.55)" }}>
              {contact.location}
            </p>
          ) : null}
        </div>

        <nav aria-label="Footer" className="flex flex-col gap-2">
          <p className="v-label" style={{ color: "rgba(255,255,255,0.5)" }}>
            {config.label}
          </p>
          {config.nav.map((item) => (
            <Link
              key={item.path}
              href={versionPath(version, item.path)}
              className="text-sm no-underline"
              style={{ color: "rgba(255,255,255,0.75)" }}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex flex-col gap-2">
          <p className="v-label" style={{ color: "rgba(255,255,255,0.5)" }}>
            Get in touch
          </p>
          {contact.email ? (
            <a
              href={`mailto:${contact.email}`}
              className="text-sm no-underline"
              style={{ color: "rgba(255,255,255,0.75)" }}
            >
              {contact.email}
            </a>
          ) : null}
          {contact.socials.map((social) => (
            <a
              key={social.url}
              href={social.url}
              target="_blank"
              rel="noreferrer noopener"
              className="text-sm no-underline"
              style={{ color: "rgba(255,255,255,0.75)" }}
            >
              {social.platform}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
