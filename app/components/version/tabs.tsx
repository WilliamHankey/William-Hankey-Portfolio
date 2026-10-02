"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";

import type { TabDef } from "@/lib/versions";

/**
 * Case study tab strip.
 *
 * The tab list is a real WAI-ARIA tablist: arrow keys move between tabs, Home
 * and End jump to the ends, and the selected panel is the only one mounted so
 * long case studies stay responsive. The URL hash is kept in sync so a tab can
 * be linked to directly.
 */
export function CaseStudyTabs({
  tabs,
  panels,
  initialTab,
}: {
  tabs: TabDef[];
  panels: Record<string, ReactNode>;
  initialTab?: string;
}) {
  const available = tabs.filter((tab) => panels[tab.id]);

  // The first render must be identical on the server and the client, so the
  // hash is only consulted after mount (see the effect below).
  const [active, setActive] = useState(() => {
    if (initialTab && available.some((tab) => tab.id === initialTab)) return initialTab;
    return available[0]?.id ?? "";
  });
  const [hydrated, setHydrated] = useState(false);
  const listRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setHydrated(true);
  }, []);

  useEffect(() => {
    if (!active) return;
    const id = window.location.hash.replace("#", "");
    if (id !== active) window.history.replaceState(null, "", `#${active}`);
  }, [active]);

  useEffect(() => {
    if (!hydrated) return;
    const fromHash = window.location.hash.replace("#", "");
    if (fromHash && available.some((tab) => tab.id === fromHash) && fromHash !== active) {
      setActive(fromHash);
    }
  }, [hydrated, available, active]);

  if (available.length === 0) return null;

  const focusTab = (index: number) => {
    const clamped = (index + available.length) % available.length;
    const next = available[clamped];
    setActive(next.id);
    listRef.current?.querySelectorAll<HTMLButtonElement>("[role='tab']")[clamped]?.focus();
  };

  const onKeyDown = (event: React.KeyboardEvent, index: number) => {
    if (event.key === "ArrowRight") {
      event.preventDefault();
      focusTab(index + 1);
    } else if (event.key === "ArrowLeft") {
      event.preventDefault();
      focusTab(index - 1);
    } else if (event.key === "Home") {
      event.preventDefault();
      focusTab(0);
    } else if (event.key === "End") {
      event.preventDefault();
      focusTab(available.length - 1);
    }
  };

  return (
    <div className="flex flex-col">
      <div className="v-tabs" role="tablist" aria-label="Case study sections" ref={listRef}>
        {available.map((tab, index) => {
          const selected = tab.id === active;
          return (
            <button
              key={tab.id}
              type="button"
              role="tab"
              id={`tab-${tab.id}`}
              aria-selected={selected}
              aria-controls={`panel-${tab.id}`}
              tabIndex={selected ? 0 : -1}
              className="v-tab"
              onClick={() => setActive(tab.id)}
              onKeyDown={(event) => onKeyDown(event, index)}
            >
              {tab.label}
            </button>
          );
        })}
      </div>

      {available.map((tab) => (
        <div
          key={tab.id}
          role="tabpanel"
          id={`panel-${tab.id}`}
          aria-labelledby={`tab-${tab.id}`}
          hidden={tab.id !== active}
          tabIndex={0}
          className="py-7"
        >
          {panels[tab.id]}
        </div>
      ))}
    </div>
  );
}
