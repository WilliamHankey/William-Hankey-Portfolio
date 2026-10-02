import type { Metadata } from "next";

import { getContact } from "@/lib/content/sanity";
import { VERSIONS } from "@/lib/versions";
import { VersionShell } from "@/app/components/version/shell";

const config = VERSIONS.fe;

export const metadata: Metadata = {
  title: {
    default: config.seo.title,
    template: "%s · Front-End Engineer",
  },
  description: config.seo.description,
  alternates: { canonical: config.base },
};

export default async function FeLayout({ children }: { children: React.ReactNode }) {
  const contact = await getContact();
  return (
    <VersionShell version="fe" contact={contact}>
      {children}
    </VersionShell>
  );
}
