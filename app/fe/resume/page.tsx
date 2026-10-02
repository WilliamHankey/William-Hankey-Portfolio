import type { Metadata } from "next";

import { ResumeSection } from "@/app/components/version/sections";
import { getContact, getVersionSite } from "@/lib/content/sanity";

export const metadata: Metadata = {
  title: "Résumé",
  description: "Résumé for William Hankey, front-end engineer.",
  alternates: { canonical: "/fe/resume" },
};

export default async function FeResumePage() {
  const [content, contact] = await Promise.all([getVersionSite("fe"), getContact()]);
  return <ResumeSection content={content} contact={contact} />;
}
