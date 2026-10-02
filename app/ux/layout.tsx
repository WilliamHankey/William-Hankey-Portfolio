import type { Metadata } from "next";

import { getContact } from "@/lib/content/sanity";
import { VERSIONS } from "@/lib/versions";
import { VersionShell } from "@/app/components/version/shell";

const config = VERSIONS.ux;

export const metadata: Metadata = {
  title: {
    default: config.seo.title,
    template: "%s · UX/UI Designer",
  },
  description: config.seo.description,
  alternates: { canonical: config.base },
};

export default async function UxLayout({ children }: { children: React.ReactNode }) {
  const contact = await getContact();
  return (
    <VersionShell version="ux" contact={contact}>
      {children}
    </VersionShell>
  );
}
