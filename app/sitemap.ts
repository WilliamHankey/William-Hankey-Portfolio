import type { MetadataRoute } from "next";

import { VERSIONS, versionPath } from "@/lib/versions";

const BASE = process.env.NEXT_PUBLIC_SITE_URL ?? "https://williamhankey.dev";

/**
 * Only the three versioned sites are indexable. The apex renders a 404 and is
 * never listed.
 */
export default function sitemap(): MetadataRoute.Sitemap {
  const versions = Object.values(VERSIONS).map((config) => {
    const entries = config.nav.map((item) => ({
      url: `${BASE}${versionPath(config.key, item.path)}`,
      changeFrequency: "monthly" as const,
      priority: item.path === "/" ? 1 : 0.8,
    }));

    return entries;
  });

  return versions.flat();
}
