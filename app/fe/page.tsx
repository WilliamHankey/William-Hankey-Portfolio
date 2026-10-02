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

export default async function FeHomePage() {
  const [content, projects, contact, experiences] = await Promise.all([
    getVersionSite("fe"),
    getFeaturedProjects("fe"),
    getContact(),
    getExperiences("fe"),
  ]);

  return (
    <>
      <VersionHero version="fe" content={content} contact={contact} />
      <IntroBlocks content={content} />
      <FeaturedWork
        version="fe"
        projects={projects}
        limit={3}
        heading="Production front-end work"
      />
      <ApproachSection
        content={content}
        eyebrow="Engineering approach"
        heading="How I build and ship front-end code"
        lede="Component boundaries, measured performance and accessibility checks — applied in the order that actually reduces risk."
      />
      <AboutSection content={content} experiences={experiences} heading="Engineering background" />
      <TestimonialsSection content={content} heading="What teams say" />
      <ClosingCta version="fe" content={content} />
    </>
  );
}
