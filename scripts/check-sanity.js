// Simple script to check Sanity project configuration
// Run with: node scripts/check-sanity.js

import { createClient } from '@sanity/client';
import { readFileSync } from 'fs';
import { join } from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Read .env.local file
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
    console.error('❌ Could not read .env.local file');
    return {};
  }
}

const env = loadEnv();
const projectId = env.NEXT_PUBLIC_SANITY_PROJECT_ID;
const dataset = env.NEXT_PUBLIC_SANITY_DATASET || 'production';
const apiVersion = env.NEXT_PUBLIC_SANITY_API_VERSION || '2024-01-01';
const token = env.SANITY_API_READ_TOKEN;

if (!projectId) {
  console.error('❌ NEXT_PUBLIC_SANITY_PROJECT_ID not found in .env.local');
  console.error('   Please make sure you have added your Sanity credentials to .env.local');
  process.exit(1);
}

console.log('🔍 Checking Sanity Project...\n');
console.log(`Project ID: ${projectId}`);
console.log(`Dataset: ${dataset}`);
console.log(`API Version: ${apiVersion}`);
if (token) {
  console.log(`Token: ${token.substring(0, 10)}... (hidden)`);
}
console.log('');

const client = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: false,
  token,
});

async function checkSanity() {
  try {
    // Test connection
    console.log('📡 Testing connection to Sanity...');
    const testQuery = '*[_type == "project"][0...1]';
    await client.fetch(testQuery);
    console.log('✅ Successfully connected to Sanity!\n');

    // Check for project documents (including drafts)
    console.log('📦 Checking for project documents (including drafts)...');
    const projectsQuery = `*[_type == "project"] {
      _id,
      title,
      "slug": slug.current,
      "isDraft": _id in path("drafts.**"),
      "published": !(_id in path("drafts.**")),
      _createdAt,
      _updatedAt
    } | order(_createdAt desc)`;
    const projects = await client.fetch(projectsQuery);
    
    if (projects && projects.length > 0) {
      console.log(`✅ Found ${projects.length} project(s):\n`);
      projects.forEach((project, index) => {
        const status = project.published ? '✅ Published' : '📝 Draft';
        console.log(`${index + 1}. ${status} - "${project.title || 'No title'}"`);
        console.log(`   Slug: ${project.slug || 'no slug'}`);
        console.log(`   ID: ${project._id}`);
        console.log(`   Is Draft: ${project.isDraft ? 'Yes' : 'No'}`);
        console.log('');
      });
    } else {
      console.log('⚠️  No documents with _type == "project" found.');
      console.log('   Checking for similar document types...\n');
    }

    // Check for all document types that might be projects
    console.log('🔍 Checking all document types (including drafts)...');
    const allTypesQuery = `*[] {
      _type,
      _id,
      "isDraft": _id in path("drafts.**")
    }`;
    const allDocs = await client.fetch(allTypesQuery);
    
    if (allDocs && allDocs.length > 0) {
      const typeGroups = {};
      allDocs.forEach((doc) => {
        if (!typeGroups[doc._type]) {
          typeGroups[doc._type] = { published: 0, drafts: 0 };
        }
        if (doc.isDraft) {
          typeGroups[doc._type].drafts++;
        } else {
          typeGroups[doc._type].published++;
        }
      });
      
      console.log(`Found ${allDocs.length} total document(s) across ${Object.keys(typeGroups).length} type(s):\n`);
      Object.entries(typeGroups).forEach(([type, counts]) => {
        const total = counts.published + counts.drafts;
        console.log(`  📄 ${type}:`);
        console.log(`     - Published: ${counts.published}`);
        console.log(`     - Drafts: ${counts.drafts}`);
        console.log(`     - Total: ${total}`);
        console.log('');
      });

      // If we found documents but not "project" type, show sample
      if (!projects || projects.length === 0) {
        const firstDoc = allDocs[0];
        console.log(`💡 Found documents with type "${firstDoc._type}" instead of "project"`);
        console.log(`   Checking if this might be your project schema...\n`);
        
        const sampleQuery = `*[_type == "${firstDoc._type}"][0]`;
        const sample = await client.fetch(sampleQuery);
        if (sample) {
          console.log('Sample document structure:');
          Object.keys(sample).forEach(key => {
            if (!key.startsWith('_')) {
              const value = sample[key];
              const type = Array.isArray(value) ? 'array' : typeof value;
              let preview = '';
              if (Array.isArray(value)) {
                preview = `[${value.length} items]`;
              } else if (typeof value === 'object' && value !== null) {
                preview = `{${Object.keys(value).join(', ')}}`;
              } else {
                preview = String(value).substring(0, 50);
              }
              console.log(`  - ${key}: ${type} ${preview.length > 50 ? '...' : ''}`);
            }
          });
        }
      }
    } else {
      console.log('⚠️  No documents found in the dataset at all.\n');
    }

    // Get sample project structure if exists
    if (projects && projects.length > 0) {
      console.log('🔧 Analyzing project schema structure...');
      const sampleQuery = `*[_type == "project"][0]`;
      const sample = await client.fetch(sampleQuery);
      
      if (sample) {
        console.log('Sample project fields:');
        Object.keys(sample).forEach(key => {
          if (!key.startsWith('_')) {
            const value = sample[key];
            const type = Array.isArray(value) ? 'array' : typeof value;
            const preview = Array.isArray(value) 
              ? `[${value.length} items]` 
              : typeof value === 'object' && value !== null
              ? `{${Object.keys(value).join(', ')}}`
              : String(value).substring(0, 50);
            console.log(`  - ${key}: ${type} ${preview.length > 50 ? '...' : ''}`);
          }
        });
        console.log('');
      }
    }

    console.log('\n✅ Check complete!');
    console.log('\n💡 Next steps:');
    if (projects && projects.length === 0) {
      console.log('   1. Add the project schema to your Sanity Studio (see sanity-project-schema.ts)');
      console.log('   2. Create your first project in Sanity Studio');
      console.log('   3. Publish the project');
    } else {
      console.log('   1. Your projects are set up! They should appear on your portfolio site.');
      console.log('   2. Make sure to restart your Next.js dev server if you just added projects.');
    }

  } catch (error) {
    console.error('\n❌ Error connecting to Sanity:');
    console.error(`   ${error.message}\n`);
    
    if (error.message.includes('401') || error.message.includes('Unauthorized')) {
      console.error('💡 This might be an authentication issue:');
      console.error('   - Check if your dataset is private and requires a token');
      console.error('   - Add SANITY_API_READ_TOKEN to your .env.local file');
    } else if (error.message.includes('404') || error.message.includes('Not Found')) {
      console.error('💡 This might be a project/dataset issue:');
      console.error('   - Verify your Project ID is correct');
      console.error('   - Verify your Dataset name is correct');
      console.error('   - Check that the project exists in your Sanity account');
    } else {
      console.error('💡 Make sure:');
      console.error('   1. Your Project ID is correct');
      console.error('   2. Your Dataset name is correct');
      console.error('   3. Your API token has read permissions (if dataset is private)');
      console.error('   4. The project exists and is accessible');
    }
    process.exit(1);
  }
}

checkSanity();

