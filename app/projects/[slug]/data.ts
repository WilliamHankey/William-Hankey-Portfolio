export interface Project {
  slug: string;
  title: string;
  description: string;
  image: string;
  themeColor?: string | null;
  icons: string[];
  link?: string;
  shortOverview: string;
  techStack: {
    name: string;
    icon: string;
  }[];
  challenges: {
    title: string;
    description: string;
  }[];
  keyFeatures: {
    icon: string;
    text: string;
  }[];
  showcase: {
    image: string;
    title: string;
    description: string;
  }[];
}

/**
 * Fetches all projects from Sanity (project id: 19ncek37).
 * Projects are stored in the "project" document type in the Sanity portal.
 */
export async function getProjects(): Promise<Project[]> {
  try {
    const { getProjectsFromSanity } = await import('./sanity-data');
    const projects = await getProjectsFromSanity();
    return projects ?? [];
  } catch (error) {
    console.warn('Failed to fetch projects from Sanity:', error);
    return [];
  }
}

/**
 * Fetches a single project by slug from Sanity.
 */
export async function getProjectBySlug(slug: string): Promise<Project | null> {
  try {
    const { getProjectBySlugFromSanity } = await import('./sanity-data');
    return await getProjectBySlugFromSanity(slug);
  } catch (error) {
    console.warn(`Failed to fetch project "${slug}" from Sanity:`, error);
    return null;
  }
}
