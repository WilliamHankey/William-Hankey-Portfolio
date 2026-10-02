import type { Metadata } from "next";

import { ContactSection } from "@/app/components/version/sections";
import { getContact, getVersionSite } from "@/lib/content/sanity";

export const metadata: Metadata = {
  title: "Contact",
  description: "Get in touch about UX/UI and product design work.",
  alternates: { canonical: "/ux/contact" },
};

export default async function UxContactPage() {
  const [content, contact] = await Promise.all([getVersionSite("ux"), getContact()]);
  return <ContactSection version="ux" content={content} contact={contact} />;
}
