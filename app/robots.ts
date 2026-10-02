import type { MetadataRoute } from "next";

import { VERSIONS, versionPath } from "@/lib/versions";

const BASE = process.env.NEXT_PUBLIC_SITE_URL ?? "https://williamhankey.dev";

/**
 * The apex has no content of its own, so the site is disallowed by default and
 * only the three versioned trees are allowed. Paths are relative, per the
 * robots.txt spec.
 */
export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        disallow: "/",
        allow: [
          ...Object.values(VERSIONS).map((config) => `${config.base}/`),
          "/sitemap.xml",
        ],
      },
    ],
    sitemap: `${BASE}/sitemap.xml`,
  };
}
