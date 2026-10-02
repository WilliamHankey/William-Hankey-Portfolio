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
  description: "Feedback from product, engineering and client partners on design work.",
  alternates: { canonical: "/ux/testimonials" },
};

export default async function UxTestimonialsPage() {
  const content = await getVersionSite("ux");

  return (
    <>
      <Section>
        <div className="flex flex-col gap-4">
          <SectionHeading
            eyebrow="In their words"
            title="Testimonials"
            lede="What product, engineering and client partners say about the design work."
          />
          {content.testimonials.length === 0 ? (
            <EmptyNote>No testimonials have been published for this version yet.</EmptyNote>
          ) : null}
        </div>
      </Section>

      {content.testimonials.length > 0 ? (
        <TestimonialsSection content={content} heading="Partner feedback" />
      ) : null}
    </>
  );
}
