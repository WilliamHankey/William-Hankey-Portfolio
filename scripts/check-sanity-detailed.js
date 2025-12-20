// Detailed script to check Sanity project - checks all datasets and all document types
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
    console.error('❌ Could not read .env.local file');
    return {};
  }
}

const env = loadEnv();
const projectId = env.NEXT_PUBLIC_SANITY_PROJECT_ID;
const apiVersion = env.NEXT_PUBLIC_SANITY_API_VERSION || '2024-01-01';
const token = env.SANITY_API_READ_TOKEN;

if (!projectId) {
  console.error('❌ NEXT_PUBLIC_SANITY_PROJECT_ID not found');
  process.exit(1);
}

console.log('🔍 Detailed Sanity Project Check...\n');
console.log(`Project ID: ${projectId}`);
console.log(`API Version: ${apiVersion}\n`);

// Common dataset names to check
const datasetsToCheck = [
  env.NEXT_PUBLIC_SANITY_DATASET || 'production',
  'production',
  'development',
  'staging',
];

async function checkDataset(dataset) {
  console.log(`\n📊 Checking dataset: "${dataset}"`);
  console.log('─'.repeat(50));
  
  const client = createClient({
    projectId,
    dataset,
    apiVersion,
    useCdn: false,
    token,
  });

  try {
    // Try to get ANY documents
    const allDocsQuery = `*[] | order(_createdAt desc) [0...10] {
      _id,
      _type,
      _createdAt,
      "isDraft": _id in path("drafts.**"),
      title,
      name,
      slug
    }`;
    
    const allDocs = await client.fetch(allDocsQuery);
    
    if (allDocs && allDocs.length > 0) {
      console.log(`✅ Found ${allDocs.length} document(s) in this dataset:\n`);
      
      allDocs.forEach((doc, index) => {
        const status = doc.isDraft ? '📝 Draft' : '✅ Published';
        const title = doc.title || doc.name || 'No title';
        const slug = doc.slug?.current || doc.slug || 'no slug';
        console.log(`${index + 1}. ${status} - Type: "${doc._type}"`);
        console.log(`   Title: ${title}`);
        console.log(`   Slug: ${slug}`);
        console.log(`   ID: ${doc._id}`);
        console.log(`   Created: ${doc._createdAt || 'unknown'}`);
        console.log('');
      });

      // Group by type
      const typeGroups = {};
      allDocs.forEach(doc => {
        if (!typeGroups[doc._type]) {
          typeGroups[doc._type] = [];
        }
        typeGroups[doc._type].push(doc);
      });

      console.log('📋 Summary by document type:');
      Object.entries(typeGroups).forEach(([type, docs]) => {
        const published = docs.filter(d => !d.isDraft).length;
        const drafts = docs.filter(d => d.isDraft).length;
        console.log(`  - ${type}: ${docs.length} total (${published} published, ${drafts} drafts)`);
      });

      // Get full structure of first document
      if (allDocs.length > 0) {
        const firstDoc = allDocs[0];
        console.log(`\n🔧 Full structure of first "${firstDoc._type}" document:`);
        const fullQuery = `*[_id == "${firstDoc._id}"][0]`;
        const fullDoc = await client.fetch(fullQuery);
        
        if (fullDoc) {
          console.log(JSON.stringify(fullDoc, null, 2));
        }
      }

      return true; // Found documents
    } else {
      console.log('⚠️  No documents found in this dataset.');
      return false;
    }
  } catch (error) {
    if (error.message.includes('Dataset not found') || error.message.includes('404')) {
      console.log(`⚠️  Dataset "${dataset}" does not exist.`);
    } else {
      console.log(`❌ Error: ${error.message}`);
    }
    return false;
  }
}

async function checkAll() {
  let foundAny = false;
  
  for (const dataset of datasetsToCheck) {
    const found = await checkDataset(dataset);
    if (found) {
      foundAny = true;
      break; // Found documents, no need to check other datasets
    }
  }

  if (!foundAny) {
    console.log('\n❌ No documents found in any checked dataset.');
    console.log('\n💡 Possible reasons:');
    console.log('   1. Documents might be in a different dataset name');
    console.log('   2. Documents might not be published yet');
    console.log('   3. The schema might not be set up in Sanity Studio');
    console.log('   4. You might need to check your Sanity Studio directly');
  }
}

checkAll();

