"use client";

import { useEffect, useState } from "react";
import type { SiteData } from "./site-data";

// Module-level cache: every component that calls useSiteData() shares a single
// fetch of /api/site-data (like the Projects component fetching /api/projects).
let cache: Promise<SiteData | null> | null = null;

export function useSiteData(): SiteData | null {
  const [data, setData] = useState<SiteData | null>(() =>
    typeof window === "undefined" ? null : (null as SiteData | null)
  );

  useEffect(() => {
    if (!cache) {
      cache = fetch("/api/site-data")
        .then((res) => {
          if (!res.ok) throw new Error("Failed to fetch site data");
          return res.json();
        })
        .catch(() => null);
    }
    cache.then((result) => setData(result ?? null));
  }, []);

  return data;
}