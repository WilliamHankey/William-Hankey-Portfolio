import type { Metadata } from "next";

import { ResumeSection } from "@/app/components/version/sections";
import { getContact, getVersionSite } from "@/lib/content/sanity";

export const metadata: Metadata = {
  title: "Resume",
  description: "Resume for William Hankey, UX/UI designer.",
  alternates: { canonical: "/ux/resume" },
};

export default async function UxResumePage() {
  const [content, contact] = await Promise.all([getVersionSite("ux"), getContact()]);
  return <ResumeSection content={content} contact={contact} />;
}
