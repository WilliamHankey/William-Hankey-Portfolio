const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const vm = require('node:vm');
const ts = require('typescript');
const { createClient } = require('@sanity/client');
const root = path.resolve(__dirname, '..');

function load(file, dependencies = {}) {
  const source = fs.readFileSync(path.join(root, file), 'utf8');
  const code = ts.transpileModule(source, { compilerOptions: {
    module: ts.ModuleKind.CommonJS, target: ts.ScriptTarget.ES2020,
  } }).outputText;
  const exports = {};
  vm.runInNewContext(code, { exports, console, require(id) {
    if (!(id in dependencies)) throw new Error(`Unexpected import: ${id}`);
    return dependencies[id];
  } });
  return exports;
}
const normalize = load('lib/content/normalize.ts');
const emptyFe = normalize.normalizeCaseStudy('fe', { techStack: null, testing: null });
assert.equal(emptyFe.techStack.length, 0);
assert.equal(emptyFe.testing.points.length, 0);
assert.equal(emptyFe.beforeAfter.length, 0);
assert.equal(emptyFe.bundle, undefined);
assert.equal(emptyFe.testing.coverage, undefined);
assert.equal(normalize.normalizeCaseStudy('ux', {}).testimonial, undefined);
const pm = normalize.normalizeCaseStudy('pm', { prioritization: null, stakeholderPlan: {
  columns: ['One', 'Two'], rows: [{ cells: ['a', 'b'] }, ['c', 'd']],
} });
assert.equal(JSON.stringify(pm.stakeholderPlan.rows), JSON.stringify([['a', 'b'], ['c', 'd']]));
assert.equal(pm.prioritization.table.columns.length, 0);
const original = { components: [{ name: 'Field', variants: null, states: null }], personas: [{ name: 'Parent', needs: null }] };
const safe = normalize.normalizeCaseStudy('ux', original);
assert.equal(safe.components[0].variants.length, 0);
assert.equal(safe.personas[0].needs.length, 0);
assert.equal(original.components[0].variants, null, 'Must not mutate CMS/fallback data');
console.log('PASS: partial variants, nested lists, flexible tables, no invented measurements, no mutation');

async function live() {
  const client = createClient({
    projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || '19ncek37',
    dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || 'portfolio',
    apiVersion: '2024-01-01', perspective: 'published', useCdn: false,
  });
  const content = load('lib/content/sanity.ts', {
    '@/lib/sanity': { client }, './normalize': normalize,
    './fallbacks': { FALLBACK_PROJECTS: { pm: [], fe: [], ux: [] }, fallbackProject: () => null },
    '@/lib/versions': { VERSIONS: { pm: { accent: '#000' }, fe: { accent: '#000' }, ux: { accent: '#000' } } },
  });
  const raw = await client.fetch('*[_type == "project" && slug.current == "t-and-t-company"][0]');
  assert(raw, 'T&T Company document must exist');
  for (const version of ['pm', 'fe', 'ux']) {
    const project = await content.getProjectBySlug(version, 't-and-t-company');
    const source = raw.variants.find(v => v.version === version)[version];
    assert.equal(project.title, raw.title);
    assert.equal(project[version].summary, source.summary);
    assert.equal(project.isPlaceholder, false);
    if (version === 'pm') {
      for (const key of ['stakeholderPlan', 'raid', 'retrospectives']) {
        assert.equal(JSON.stringify(project.pm[key].columns), JSON.stringify(source[key]?.columns || []));
        assert.equal(JSON.stringify(project.pm[key].rows), JSON.stringify((source[key]?.rows || []).map(r => r.cells)));
      }
      assert.equal(JSON.stringify(project.pm.prioritization.table.columns), JSON.stringify(source.prioritization?.table?.columns || []));
      assert.equal(JSON.stringify(project.pm.prioritization.table.rows), JSON.stringify((source.prioritization?.table?.rows || []).map(r => r.cells)));
    }
    if (version === 'ux' && source.outcomeCompare?.before?.image) {
      assert(project.ux.outcomeCompare.before.image.startsWith('https://cdn.sanity.io/images/'));
    }
    console.log(`PASS: T&T ${version.toUpperCase()} title, summary, published variant and scoped content`);
  }
  const waddleUx = await content.getProjectBySlug('ux', 'waddle-play');
  assert(waddleUx.ux.outcomeCompare.before.image);
  assert(waddleUx.ux.outcomeCompare.after.image);
  const waddleFe = await content.getProjectBySlug('fe', 'waddle-play');
  assert.equal(waddleFe.fe.figmaToProduction.length, 0);
  assert.equal(waddleFe.fe.bundle, undefined);
  const pmProjects = await content.getProjects('pm');
  assert(!pmProjects.some(p => p.slug === 'waddle-play'), 'Unwritten PM case must not be listed');
  assert.equal(await content.getProjectBySlug('pm', 'reguhub'), null, 'Version visibility must apply to direct routes');
  const testimonials = await content.getTestimonials('ux');
  const testimonialSources = await client.fetch('*[_type=="testimonial" && (!defined(versions) || "ux" in versions)]{name, "photo":photo.asset->url}');
  for (const quote of testimonials) {
    const source = testimonialSources.find(item => item.name === quote.name);
    assert.equal(quote.photo, source.photo || null, 'Testimonial photo must resolve from Sanity');
  }
  assert(!fs.readFileSync(path.join(root, 'app/components/version/navigation.tsx'), 'utf8').includes('v-version-switch'));
  console.log('PASS: published testimonial avatars and no version-switch UI');
  const inventory = await client.fetch('*[_type=="project"]{ "slug":slug.current, "versions":variants[].version }');
  let count = 0;
  for (const item of inventory) for (const version of item.versions || []) {
    const p = await content.getProjectBySlug(version, item.slug);
    assert(p?.[version], `${version}/${item.slug} missing`);
    count++;
  }
  console.log(`PASS: ${count} published variant data loads; Waddle comparisons, missing FE fields and version visibility`);
}
if (process.argv.includes('--live')) live().catch(error => { console.error(error); process.exitCode = 1; });
