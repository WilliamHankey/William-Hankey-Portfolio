// Very simple check - just try to get ANY data
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
const dataset = env.NEXT_PUBLIC_SANITY_DATASET || 'production';
const apiVersion = env.NEXT_PUBLIC_SANITY_API_VERSION || '2024-01-01';
const token = env.SANITY_API_READ_TOKEN;

console.log('🔍 Simple Sanity Check...\n');
console.log(`Project ID: ${projectId}`);
console.log(`Dataset: ${dataset}`);
console.log(`Token: ${token ? 'Present' : 'Not provided'}\n`);

const client = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: false,
  token,
});

async function check() {
  try {
    // Try the absolute simplest query
    console.log('1️⃣ Trying: *[] (get everything)...');
    const all = await client.fetch('*[]');
    console.log(`   Result: ${Array.isArray(all) ? `${all.length} items` : typeof all}`);
    if (Array.isArray(all) && all.length > 0) {
      console.log(`   ✅ Found ${all.length} document(s)!`);
      console.log(`   First document type: ${all[0]._type}`);
      console.log(`   First document ID: ${all[0]._id}`);
      return;
    }

    // Try with limit
    console.log('\n2️⃣ Trying: *[] [0...5] (first 5)...');
    const limited = await client.fetch('*[] [0...5]');
    console.log(`   Result: ${Array.isArray(limited) ? `${limited.length} items` : typeof limited}`);
    if (Array.isArray(limited) && limited.length > 0) {
      console.log(`   ✅ Found ${limited.length} document(s)!`);
      limited.forEach((doc, i) => {
        console.log(`   ${i + 1}. Type: ${doc._type}, ID: ${doc._id}`);
      });
      return;
    }

    // Try specific project query
    console.log('\n3️⃣ Trying: *[_type == "project"]...');
    const projects = await client.fetch('*[_type == "project"]');
    console.log(`   Result: ${Array.isArray(projects) ? `${projects.length} items` : typeof projects}`);
    if (Array.isArray(projects) && projects.length > 0) {
      console.log(`   ✅ Found ${projects.length} project(s)!`);
      projects.forEach((p, i) => {
        console.log(`   ${i + 1}. ${p.title || 'No title'}, ID: ${p._id}`);
      });
      return;
    }

    // Try with different type names
    console.log('\n4️⃣ Trying common type names...');
    const types = ['project', 'projects', 'Project', 'Projects', 'portfolio', 'work'];
    for (const type of types) {
      const result = await client.fetch(`*[_type == "${type}"]`);
      if (Array.isArray(result) && result.length > 0) {
        console.log(`   ✅ Found ${result.length} document(s) with type "${type}"!`);
        result.forEach((doc, i) => {
          console.log(`      ${i + 1}. ${doc.title || doc.name || 'No title'}`);
        });
      }
    }

    console.log('\n❌ No documents found with any query.');
    console.log('\n💡 This could mean:');
    console.log('   - The dataset is truly empty');
    console.log('   - There might be a permissions issue');
    console.log('   - The documents might be in a different project');
    console.log('\n🔗 Please check your Sanity Studio directly:');
    console.log(`   https://${projectId}.api.sanity.io/v${apiVersion}/data/query/${dataset}`);

  } catch (error) {
    console.error('\n❌ Error:', error.message);
    if (error.response) {
      console.error('   Status:', error.response.status);
      console.error('   Body:', JSON.stringify(error.response.body, null, 2));
    }
  }
}

check();

