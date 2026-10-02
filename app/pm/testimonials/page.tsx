import type { Metadata } from "next";

import {
  EmptyNote,
  Section,
  SectionHeading,
} from "@/app/components/version/primitives";
import { TestimonialsSection } from "@/app/components/version/sections";
import { getVersionSite } from "@/lib/content/sanity";

export const metadata: Metadata = {
  title: "Testimonials",
  description:
    "Feedback from clients and cross-functional partners on delivery, facilitation and stakeholder management.",
  alternates: { canonical: "/pm/testimonials" },
};

export default async function PmTestimonialsPage() {
  const content = await getVersionSite("pm");

  return (
    <>
      <Section>
        <div className="flex flex-col gap-4">
          <SectionHeading
            eyebrow="In their words"
            title="Testimonials"
            lede="What clients and cross-functional partners say about working with me on delivery."
          />
          {content.testimonials.length === 0 ? (
            <EmptyNote>No testimonials have been published for this version yet.</EmptyNote>
          ) : null}
        </div>
      </Section>

      {content.testimonials.length > 0 ? (
        <TestimonialsSection content={content} heading="Client and partner feedback" />
      ) : null}
    </>
  );
}
