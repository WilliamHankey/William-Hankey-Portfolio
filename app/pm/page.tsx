import {
  AboutSection,
  ApproachSection,
  ClosingCta,
  FeaturedWork,
  IntroBlocks,
  TestimonialsSection,
  VersionHero,
} from "@/app/components/version/sections";
import { getContact, getExperiences, getFeaturedProjects, getVersionSite } from "@/lib/content/sanity";

export default async function PmHomePage() {
  const [content, projects, contact, experiences] = await Promise.all([
    getVersionSite("pm"),
    getFeaturedProjects("pm"),
    getContact(),
    getExperiences("pm"),
  ]);

  return (
    <>
      <VersionHero version="pm" content={content} contact={contact} />
      <IntroBlocks content={content} />
      <FeaturedWork version="pm" projects={projects} limit={3} heading="Delivery, framed as decisions" />
      <ApproachSection
        content={content}
        eyebrow="Delivery approach"
        heading="How I take a project from brief to shipped"
        lede="The same loop on every engagement, scaled to the size of the team and the stakes involved."
      />
      <AboutSection content={content} experiences={experiences} heading="Delivery leadership" />
      <TestimonialsSection content={content} heading="What clients say" />
      <ClosingCta version="pm" content={content} />
    </>
  );
}
