import type { Metadata } from "next";

import { ContactSection } from "@/app/components/version/sections";
import { getContact, getVersionSite } from "@/lib/content/sanity";

export const metadata: Metadata = {
  title: "Contact",
  description: "Get in touch about front-end engineering work.",
  alternates: { canonical: "/fe/contact" },
};

export default async function FeContactPage() {
  const [content, contact] = await Promise.all([getVersionSite("fe"), getContact()]);
  return <ContactSection version="fe" content={content} contact={contact} />;
}
