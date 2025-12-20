import { client } from '../../../lib/sanity';
import { Project } from './data';

// GROQ query to fetch all projects
const projectsQuery = `*[_type == "project"] | order(_createdAt desc) {
  _id,
  "slug": slug.current,
  title,
  description,
  "image": image.asset->url,
  "link": liveUrl,
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
  "image": image.asset->url,
  "link": liveUrl,
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
  // Transform challenges from string array to object array
  const transformedChallenges = sanityProject.challenges?.map((challenge: string) => {
    // Try to parse "Title: Description" format
    const parts = challenge.split(':');
    if (parts.length >= 2) {
      return {
        title: parts[0].trim(),
        description: parts.slice(1).join(':').trim()
      };
    }
    // Fallback: use entire string as description
    return {
      title: 'Challenge',
      description: challenge
    };
  }) || [];

  // Transform keyFeatures from string array to object array
  const transformedKeyFeatures = sanityProject.keyFeatures?.map((feature: string) => ({
    icon: 'devicon-react-original', // Default icon, you can customize this
    text: feature
  })) || [];

  // Transform techStack from string array to object array
  const transformedTechStack = sanityProject.techStack?.map((tech: string) => {
    // Map common tech names to icon classes
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
    
    return {
      name: tech.trim(),
      icon: iconMap[tech.trim()] || 'devicon-javascript-plain'
    };
  }) || [];

  // Generate icons array from techStack for the project list view
  const icons = transformedTechStack.slice(0, 2).map((tech: any) => tech.icon);

  return {
    slug: sanityProject.slug || '',
    title: sanityProject.title || '',
    description: sanityProject.description || '',
    image: sanityProject.image || '',
    icons: icons,
    link: sanityProject.link,
    shortOverview: sanityProject.description || '', // Use description as shortOverview
    techStack: transformedTechStack,
    challenges: transformedChallenges,
    keyFeatures: transformedKeyFeatures,
    showcase: sanityProject.showcase || []
  };
}

export async function getProjectsFromSanity(): Promise<Project[]> {
  try {
    const sanityProjects = await client.fetch<any[]>(projectsQuery);
    // Transform Sanity data to match Project interface
    return sanityProjects.map(transformSanityProject);
  } catch (error) {
    console.error('Error fetching projects from Sanity:', error);
    // Fallback to empty array or handle error as needed
    return [];
  }
}

export async function getProjectBySlugFromSanity(slug: string): Promise<Project | null> {
  try {
    const sanityProject = await client.fetch<any>(projectBySlugQuery, { slug });
    if (!sanityProject) return null;
    // Transform Sanity data to match Project interface
    return transformSanityProject(sanityProject);
  } catch (error) {
    console.error(`Error fetching project ${slug} from Sanity:`, error);
    return null;
  }
}

