import type { Metadata } from "next";

import { ApproachSection } from "@/app/components/version/sections";
import { getVersionSite } from "@/lib/content/sanity";

export const metadata: Metadata = {
  title: "Process",
  description:
    "How a front-end feature ships: scoping, component design, implementation, accessibility and performance review, then CI and release.",
  alternates: { canonical: "/fe/process" },
};

export default async function FeProcessPage() {
  const content = await getVersionSite("fe");

  return (
    <ApproachSection
      content={content}
      eyebrow="Engineering process"
      heading="How I get a feature into production"
      lede="The same five steps on every project, whether it is a redesign or a single component in a large product."
    />
  );
}
