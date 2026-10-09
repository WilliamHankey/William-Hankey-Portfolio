"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import type { VersionContact } from "@/lib/content/types";
import { VERSIONS, versionPath, type VersionKey } from "@/lib/versions";

export function VersionNavigation({ version, contact }: { version: VersionKey; contact: VersionContact }) {
  const config = VERSIONS[version];
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const toggle = useRef<HTMLButtonElement>(null);
  const drawer = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    drawer.current?.querySelector<HTMLElement>("button, a")?.focus();
    const keydown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false);
        toggle.current?.focus();
      }
      if (event.key !== "Tab") return;
      const elements = drawer.current?.querySelectorAll<HTMLElement>("button, a");
      if (!elements?.length) return;
      const first = elements[0];
      const last = elements[elements.length - 1];
      if (event.shiftKey && document.activeElement === first) { event.preventDefault(); last.focus(); }
      else if (!event.shiftKey && document.activeElement === last) { event.preventDefault(); first.focus(); }
    };
    document.addEventListener("keydown", keydown);
    return () => { document.body.style.overflow = previous; document.removeEventListener("keydown", keydown); };
  }, [open]);

  const links = config.nav.map((item) => {
    const href = versionPath(version, item.path);
    const active = pathname === href || (item.path !== "/" && pathname.startsWith(`${href}/`));
    return <Link key={href} href={href} aria-current={active ? "page" : undefined} className="v-nav-link" onClick={() => setOpen(false)}>{item.label}</Link>;
  });
  const resume = contact.cvUrl ? <a className="v-btn v-btn-primary v-nav-resume" href={contact.cvUrl} target="_blank" rel="noopener noreferrer">Download CV <span aria-hidden="true">↓</span></a> : <Link className="v-btn v-btn-primary v-nav-resume" href={versionPath(version, "/contact")} onClick={() => setOpen(false)}>Let’s connect <span aria-hidden="true">↗</span></Link>;

  return <>
    <aside className="v-identity-rail" aria-label="Portfolio identity">
      <Link href={versionPath(version)} aria-label={`${contact.name} home`}><Image src="/assets/wordmark.svg" alt="" width={44} height={44} /></Link>
      <div className="v-rail-name"><span>{contact.name.toUpperCase()}</span><small>{config.role.toUpperCase()}</small></div>
      <Image src="/assets/wordmark.svg" alt="" width={44} height={44} />
    </aside>
    <header className="v-topbar">
      <Link href={versionPath(version)} className="v-mobile-brand"><Image src="/assets/wordmark.svg" alt="" width={38} height={38} /><span>{contact.name}<small>{config.role}</small></span></Link>
      <div className="v-desktop-nav"><nav aria-label={`${config.label} sections`}>{links}</nav>{resume}</div>
      <button ref={toggle} type="button" className="v-menu-toggle" aria-label="Open navigation" aria-expanded={open} aria-controls="version-menu" onClick={() => setOpen(true)}><svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" aria-hidden="true"><path d="M4 6h16M4 12h16M4 18h16" /></svg></button>
    </header>
    {open && <div className="v-menu-overlay" onClick={() => { setOpen(false); toggle.current?.focus(); }}>
      <div ref={drawer} id="version-menu" className="v-menu-drawer" role="dialog" aria-modal="true" aria-label="Navigation" onClick={(event) => event.stopPropagation()}>
        <div className="v-menu-heading"><Image src="/assets/wordmark.svg" alt="" width={38} height={38} /><strong>{contact.name}</strong><button type="button" aria-label="Close navigation" onClick={() => { setOpen(false); toggle.current?.focus(); }}>×</button></div>
        <p className="v-eyebrow">{config.role}</p><nav aria-label={`${config.label} mobile sections`}>{links}</nav>{resume}
      </div>
    </div>}
  </>;
}
