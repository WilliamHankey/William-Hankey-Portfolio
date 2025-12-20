// This file shows what the GROQ queries will look like AFTER you update the Sanity schema
// Once your schema matches the hardcoded structure, you can replace the current queries with these
// and remove the transformation function

import { client } from '../../../lib/sanity';
import { Project } from './data';

// GROQ query to fetch all projects (after schema update)
const projectsQuery = `*[_type == "project"] | order(_createdAt desc) {
  _id,
  "slug": slug.current,
  title,
  description,
  "image": image.asset->url,
  icons,
  link,
  shortOverview,
  techStack[] {
    name,
    icon
  },
  challenges[] {
    title,
    description
  },
  keyFeatures[] {
    icon,
    text
  },
  showcase[] {
    "image": image.asset->url,
    title,
    description
  }
}`;

// GROQ query to fetch a single project by slug (after schema update)
const projectBySlugQuery = `*[_type == "project" && slug.current == $slug][0] {
  _id,
  "slug": slug.current,
  title,
  description,
  "image": image.asset->url,
  icons,
  link,
  shortOverview,
  techStack[] {
    name,
    icon
  },
  challenges[] {
    title,
    description
  },
  keyFeatures[] {
    icon,
    text
  },
  showcase[] {
    "image": image.asset->url,
    title,
    description
  }
}`;

// After schema update, you can use these simpler functions (no transformation needed)
export async function getProjectsFromSanity(): Promise<Project[]> {
  try {
    const projects = await client.fetch<Project[]>(projectsQuery);
    return projects;
  } catch (error) {
    console.error('Error fetching projects from Sanity:', error);
    return [];
  }
}

export async function getProjectBySlugFromSanity(slug: string): Promise<Project | null> {
  try {
    const project = await client.fetch<Project | null>(projectBySlugQuery, { slug });
    return project;
  } catch (error) {
    console.error(`Error fetching project ${slug} from Sanity:`, error);
    return null;
  }
}

