import type { Metadata } from "next";

import {
  EmptyNote,
  Section,
  SectionHeading,
} from "@/app/components/version/primitives";
import { CertificationsSection } from "@/app/components/version/sections";
import { getCertifications } from "@/lib/content/sanity";

export const metadata: Metadata = {
  title: "Certifications",
  description: "Professional certifications and accredited project management training.",
  alternates: { canonical: "/pm/certifications" },
};

export default async function PmCertificationsPage() {
  const certifications = await getCertifications("pm");

  return (
    <>
      <Section>
        <div className="flex flex-col gap-4">
          <SectionHeading
            eyebrow="Credentials"
            title="Certifications"
            lede="Accredited training that backs up the delivery practice described throughout these case studies."
          />
          {certifications.length === 0 ? (
            <EmptyNote>
              No certifications have been published yet. Add them in the Studio under the
              <strong> Certification</strong> document type.
            </EmptyNote>
          ) : null}
        </div>
      </Section>

      {certifications.length > 0 ? <CertificationsSection certifications={certifications} /> : null}
    </>
  );
}
