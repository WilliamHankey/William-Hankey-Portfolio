// Test the actual query that will be used
import { createClient } from '@sanity/client';
import { readFileSync } from 'fs';
import { join } from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

function loadEnv() {
  try {
    const envPath = join(__dirname, '../.env.local');
    const envContent = readFileSync(envPath, 'utf-8');
    const env = {};
    
    envContent.split('\n').forEach(line => {
      const trimmed = line.trim();
      if (trimmed && !trimmed.startsWith('#')) {
        const [key, ...valueParts] = trimmed.split('=');
        if (key && valueParts.length > 0) {
          env[key.trim()] = valueParts.join('=').trim().replace(/^["']|["']$/g, '');
        }
      }
    });
    
    return env;
  } catch (error) {
    return {};
  }
}

const env = loadEnv();
const projectId = env.NEXT_PUBLIC_SANITY_PROJECT_ID;
const dataset = env.NEXT_PUBLIC_SANITY_DATASET || 'portfolio';
const apiVersion = env.NEXT_PUBLIC_SANITY_API_VERSION || '2024-01-01';
const token = env.SANITY_API_READ_TOKEN;

const client = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: false,
  token,
});

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

async function test() {
  try {
    console.log('Testing GROQ query...\n');
    const projects = await client.fetch(projectsQuery);
    
    console.log(`✅ Found ${projects.length} project(s):\n`);
    projects.forEach((project, i) => {
      console.log(`${i + 1}. ${project.title}`);
      console.log(`   Slug: ${project.slug}`);
      console.log(`   Image: ${project.image ? '✅' : '❌'}`);
      console.log(`   Link: ${project.link || 'none'}`);
      console.log(`   Tech Stack: ${project.techStack?.length || 0} items`);
      console.log(`   Challenges: ${project.challenges?.length || 0} items`);
      console.log(`   Key Features: ${project.keyFeatures?.length || 0} items`);
      console.log(`   Showcase: ${project.showcase?.length || 0} items`);
      console.log('');
    });
    
    console.log('✅ Query is working correctly!');
  } catch (error) {
    console.error('❌ Error:', error.message);
  }
}

test();

