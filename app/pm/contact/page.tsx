import type { Metadata } from "next";

import { ContactSection } from "@/app/components/version/sections";
import { getContact, getVersionSite } from "@/lib/content/sanity";

export const metadata: Metadata = {
  title: "Contact",
  description: "Get in touch about project management and delivery work.",
  alternates: { canonical: "/pm/contact" },
};

export default async function PmContactPage() {
  const [content, contact] = await Promise.all([getVersionSite("pm"), getContact()]);
  return <ContactSection version="pm" content={content} contact={contact} />;
}
