import {
  AboutSection,
  ApproachSection,
  ClosingCta,
  FeaturedWork,
  IntroBlocks,
  TestimonialsSection,
  VersionHero,
} from "@/app/components/version/sections";
import {
  getContact,
  getExperiences,
  getFeaturedProjects,
  getVersionSite,
} from "@/lib/content/sanity";

export default async function UxHomePage() {
  const [content, projects, contact, experiences] = await Promise.all([
    getVersionSite("ux"),
    getFeaturedProjects("ux"),
    getContact(),
    getExperiences("ux"),
  ]);

  return (
    <>
      <VersionHero version="ux" content={content} contact={contact} />
      <IntroBlocks content={content} />
      <FeaturedWork
        version="ux"
        projects={projects}
        limit={3}
        heading="Product design work"
      />
      <ApproachSection
        content={content}
        eyebrow="Design process"
        heading="How I take a product from problem to shipped design"
        lede="Research, flows, wireframes, visual design, testing and handoff — with the trade-offs written down at every step."
      />
      <AboutSection content={content} experiences={experiences} heading="Design background" />
      <TestimonialsSection content={content} heading="What partners say" />
      <ClosingCta version="ux" content={content} />
    </>
  );
}
