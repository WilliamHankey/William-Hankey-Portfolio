import { client } from '../../../lib/sanity';
import { Project } from './data';

// GROQ query to fetch all projects from the "project" document type
const projectsQuery = `*[_type == "project"] | order(_createdAt desc) {
  _id,
  "slug": slug.current,
  title,
  description,
  shortOverview,
  "image": image.asset->url,
  link,
  themeColor,
  icons,
  techStack,
  challenges,
  keyFeatures,
  showcase[] {
    "image": image.asset->url,
    title,
    description
  }
}`;

// GROQ query to fetch a single project by slug
const projectBySlugQuery = `*[_type == "project" && slug.current == $slug][0] {
  _id,
  "slug": slug.current,
  title,
  description,
  shortOverview,
  "image": image.asset->url,
  link,
  themeColor,
  icons,
  techStack,
  challenges,
  keyFeatures,
  showcase[] {
    "image": image.asset->url,
    title,
    description
  }
}`;

// Transform Sanity data to match Project interface
function transformSanityProject(sanityProject: any): Project {
  // Handle challenges: can be object array (schema) or string array (legacy)
  const transformedChallenges = sanityProject.challenges?.map((challenge: any) => {
    if (typeof challenge === 'object' && challenge?.title != null) {
      return { title: challenge.title, description: challenge.description ?? '' };
    }
    const str = String(challenge);
    const parts = str.split(':');
    if (parts.length >= 2) {
      return { title: parts[0].trim(), description: parts.slice(1).join(':').trim() };
    }
    return { title: 'Challenge', description: str };
  }) || [];

  // Handle keyFeatures: can be object array (schema) or string array (legacy)
  const transformedKeyFeatures = sanityProject.keyFeatures?.map((feature: any) => {
    if (typeof feature === 'object' && feature?.text != null) {
      return { icon: feature.icon ?? 'devicon-react-original', text: feature.text };
    }
    return { icon: 'devicon-react-original', text: String(feature) };
  }) || [];

  // Handle techStack: can be object array (schema) or string array (legacy)
  const iconMap: Record<string, string> = {
    'React.js': 'devicon-react-original',
    'React': 'devicon-react-original',
    'TypeScript': 'devicon-typescript-plain',
    'Node.js': 'devicon-nodejs-plain',
    'Express': 'devicon-express-original',
    'Supabase': 'devicon-postgresql-plain',
    'Next.js': 'devicon-nextjs-original',
    'Angular': 'devicon-angularjs-plain',
    'MongoDB': 'devicon-mongodb-plain',
    'PostgreSQL': 'devicon-postgresql-plain',
  };
  const transformedTechStack = sanityProject.techStack?.map((tech: any) => {
    if (typeof tech === 'object' && tech?.name != null) {
      return {
        name: tech.name,
        icon: tech.icon || iconMap[tech.name] || 'devicon-javascript-plain'
      };
    }
    const name = String(tech).trim();
    return { name, icon: iconMap[name] || 'devicon-javascript-plain' };
  }) || [];

  // Icons: use Sanity icons array if present, else first 2 from techStack
  const icons = Array.isArray(sanityProject.icons) && sanityProject.icons.length > 0
    ? sanityProject.icons
    : transformedTechStack.slice(0, 2).map((t: { icon: string }) => t.icon);

  return {
    slug: sanityProject.slug ?? '',
    title: sanityProject.title ?? '',
    description: sanityProject.description ?? '',
    image: sanityProject.image ?? '',
    themeColor: sanityProject.themeColor ?? null,
    icons,
    link: sanityProject.link,
    shortOverview: sanityProject.shortOverview ?? sanityProject.description ?? '',
    techStack: transformedTechStack,
    challenges: transformedChallenges,
    keyFeatures: transformedKeyFeatures,
    showcase: sanityProject.showcase ?? []
  };
}

export async function getProjectsFromSanity(): Promise<Project[]> {
  if (!client) return [];
  try {
    const sanityProjects = await client.fetch<any[]>(projectsQuery);
    return sanityProjects.map(transformSanityProject);
  } catch (error) {
    console.error('Error fetching projects from Sanity:', error);
    return [];
  }
}

export async function getProjectBySlugFromSanity(slug: string): Promise<Project | null> {
  if (!client) return null;
  try {
    const sanityProject = await client.fetch<any>(projectBySlugQuery, { slug });
    if (!sanityProject) return null;
    return transformSanityProject(sanityProject);
  } catch (error) {
    console.error(`Error fetching project ${slug} from Sanity:`, error);
    return null;
  }
}

