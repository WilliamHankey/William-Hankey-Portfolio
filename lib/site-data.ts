import { client } from './sanity';

// ---------------------------------------------------------------------------
// Types (shared by the server data layer and the client hook)
// ---------------------------------------------------------------------------

export interface Profile {
  name: string;
  role: string;
  heroGreeting: string;
  heroIntro: string;
  aboutMe: string[];
  footerAbout: string;
  email: string;
  location: string;
  cvUrl: string;
  socials: { platform: string; url: string }[];
}

export interface SkillItem {
  _id: string;
  name: string;
  logo: string;
  order?: number;
}

export interface TestimonialItem {
  _id: string;
  name: string;
  role: string;
  quote: string;
  photo: string;
  order?: number;
}

export interface ExperienceItem {
  _id: string;
  role: string;
  company: string;
  period: string;
  bullets: string[];
  order?: number;
}

export interface ArticleItem {
  _id: string;
  title: string;
  url: string;
  source: string;
  publishedAt?: string;
  order?: number;
}

export interface SiteData {
  profile: Profile | null;
  skills: SkillItem[];
  testimonials: TestimonialItem[];
  experiences: ExperienceItem[];
  articles: ArticleItem[];
}

// ---------------------------------------------------------------------------
// GROQ queries
// ---------------------------------------------------------------------------

/**
 * Extracts a raw URL from a logo value that may contain an <img> tag (e.g.
 * `<img src="https://..." />` pasted into the portal), and repairs common
 * paste artifacts such as a single-slash scheme (https:/x -> https://x).
 */
export function normalizeLogo(raw: string | null | undefined): string {
  if (!raw) return '';
  let value = raw.trim();
  const match = value.match(/<img\s+[^>]*src=["']([^"']+)["']/i);
  if (match) value = match[1];
  value = value.replace(/^([a-z][a-z0-9+.-]*):\/([^/])/i, '$1://$2');
  return value.trim();
}

const siteSettingsQuery = `*[_type == "siteSettings"][0] {
  name,
  role,
  heroGreeting,
  heroIntro,
  aboutMe,
  footerAbout,
  email,
  location,
  cvUrl,
  socials[] {
    platform,
    url
  }
}`;

const skillsQuery = `*[_type == "skill"] | order(order asc, _createdAt asc) {
  _id,
  name,
  logo,
  order
}`;

const testimonialsQuery = `*[_type == "testimonial"] | order(order asc, _createdAt asc) {
  _id,
  name,
  role,
  quote,
  "photo": photo.asset->url,
  order
}`;

const experiencesQuery = `*[_type == "experience"] | order(order asc, _createdAt asc) {
  _id,
  role,
  company,
  period,
  bullets,
  order
}`;

const articlesQuery = `*[_type == "article"] | order(order asc, _createdAt asc) {
  _id,
  title,
  url,
  source,
  publishedAt,
  order
}`;

// ---------------------------------------------------------------------------
// Server-side fetchers (used by /api/site-data)
// ---------------------------------------------------------------------------

export async function getProfile(): Promise<Profile | null> {
  if (!client) return null;
  try {
    return await client.fetch<Profile | null>(siteSettingsQuery);
  } catch (error) {
    console.error('Error fetching site settings from Sanity:', error);
    return null;
  }
}

export async function getSkills(): Promise<SkillItem[]> {
  if (!client) return [];
  try {
    const skills = await client.fetch<SkillItem[]>(skillsQuery);
    return skills.map((skill) => ({ ...skill, logo: normalizeLogo(skill.logo) }));
  } catch (error) {
    console.error('Error fetching skills from Sanity:', error);
    return [];
  }
}

export async function getTestimonials(): Promise<TestimonialItem[]> {
  if (!client) return [];
  try {
    return await client.fetch<TestimonialItem[]>(testimonialsQuery);
  } catch (error) {
    console.error('Error fetching testimonials from Sanity:', error);
    return [];
  }
}

export async function getExperiences(): Promise<ExperienceItem[]> {
  if (!client) return [];
  try {
    return await client.fetch<ExperienceItem[]>(experiencesQuery);
  } catch (error) {
    console.error('Error fetching experiences from Sanity:', error);
    return [];
  }
}

export async function getArticles(): Promise<ArticleItem[]> {
  if (!client) return [];
  try {
    return await client.fetch<ArticleItem[]>(articlesQuery);
  } catch (error) {
    console.error('Error fetching articles from Sanity:', error);
    return [];
  }
}

/**
 * Fetches everything the site needs from Sanity in one round trip.
 */
export async function getSiteData(): Promise<SiteData> {
  const [profile, skills, testimonials, experiences, articles] =
    await Promise.all([
      getProfile(),
      getSkills(),
      getTestimonials(),
      getExperiences(),
      getArticles(),
    ]);
  return { profile, skills, testimonials, experiences, articles };
}