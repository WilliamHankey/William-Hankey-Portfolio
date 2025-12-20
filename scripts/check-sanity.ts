import { createClient } from '@sanity/client';
import * as dotenv from 'dotenv';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

// Load environment variables
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
dotenv.config({ path: join(__dirname, '../.env.local') });

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID;
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || 'production';
const apiVersion = process.env.NEXT_PUBLIC_SANITY_API_VERSION || '2024-01-01';
const token = process.env.SANITY_API_READ_TOKEN;

if (!projectId) {
  console.error('❌ NEXT_PUBLIC_SANITY_PROJECT_ID not found in .env.local');
  process.exit(1);
}

console.log('🔍 Checking Sanity Project...\n');
console.log(`Project ID: ${projectId}`);
console.log(`Dataset: ${dataset}`);
console.log(`API Version: ${apiVersion}\n`);

const client = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: false,
  token,
});

async function checkSanity() {
  try {
    // Check if we can connect
    console.log('📡 Testing connection...');
    const testQuery = '*[_type == "project"][0...1]';
    const testResult = await client.fetch(testQuery);
    console.log('✅ Successfully connected to Sanity!\n');

    // Get all document types
    console.log('📋 Checking available document types...');
    const typesQuery = `*[_type == "sanity.documentType"] {
      _id,
      name,
      title
    }`;
    const types = await client.fetch(typesQuery);
    
    if (types && types.length > 0) {
      console.log(`Found ${types.length} document type(s):`);
      types.forEach((type: any) => {
        console.log(`  - ${type.name} (${type.title || 'No title'})`);
      });
    } else {
      console.log('⚠️  No document types found (this might be normal for some setups)');
    }
    console.log('');

    // Check for project documents
    console.log('📦 Checking for project documents...');
    const projectsQuery = `*[_type == "project"] {
      _id,
      title,
      slug,
      "published": !(_id in path("drafts.**"))
    }`;
    const projects = await client.fetch(projectsQuery);
    
    if (projects && projects.length > 0) {
      console.log(`Found ${projects.length} project(s):`);
      projects.forEach((project: any) => {
        const status = project.published ? '✅ Published' : '📝 Draft';
        console.log(`  ${status} - ${project.title} (slug: ${project.slug?.current || 'no slug'})`);
      });
    } else {
      console.log('⚠️  No projects found. The "project" schema might not be set up yet.');
    }
    console.log('');

    // Try to get schema information
    console.log('🔧 Checking project schema...');
    const schemaQuery = `*[_type == "project"][0]`;
    const sampleProject = await client.fetch(schemaQuery);
    
    if (sampleProject) {
      console.log('Sample project structure:');
      console.log(JSON.stringify(sampleProject, null, 2));
    } else {
      console.log('No projects found to analyze schema structure.');
    }

    // Check for any documents at all
    console.log('\n📊 Checking all document types in dataset...');
    const allDocsQuery = `*[!(_id in path("drafts.**"))] | order(_type) {
      _type
    }`;
    const allDocs = await client.fetch(allDocsQuery);
    const typeCounts: Record<string, number> = {};
    
    if (allDocs && allDocs.length > 0) {
      allDocs.forEach((doc: any) => {
        typeCounts[doc._type] = (typeCounts[doc._type] || 0) + 1;
      });
      
      console.log(`Found ${allDocs.length} published document(s) across ${Object.keys(typeCounts).length} type(s):`);
      Object.entries(typeCounts).forEach(([type, count]) => {
        console.log(`  - ${type}: ${count} document(s)`);
      });
    } else {
      console.log('⚠️  No published documents found in the dataset.');
    }

  } catch (error: any) {
    console.error('❌ Error connecting to Sanity:');
    if (error.message) {
      console.error(`   ${error.message}`);
    }
    if (error.response) {
      console.error(`   Status: ${error.response.status}`);
      console.error(`   Details:`, error.response.body);
    }
    console.error('\n💡 Make sure:');
    console.error('   1. Your Project ID is correct');
    console.error('   2. Your Dataset name is correct');
    console.error('   3. Your API token has read permissions (if dataset is private)');
    console.error('   4. The project exists and is accessible');
    process.exit(1);
  }
}

checkSanity();

