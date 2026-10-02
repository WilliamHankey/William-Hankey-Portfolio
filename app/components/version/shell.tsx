import Link from "next/link";
import type { ReactNode } from "react";

import { VERSIONS, versionPath, type VersionKey } from "@/lib/versions";
import type { VersionContact } from "@/lib/content/types";
import { VersionNavigation } from "./navigation";
import { SectionMotion } from "./motion";

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
      <VersionNavigation version={version} contact={contact} />
      <SectionMotion />
      <main id="main" className="flex-auto">
        {children}
      </main>
      <VersionFooter version={version} contact={contact} />
    </div>
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
