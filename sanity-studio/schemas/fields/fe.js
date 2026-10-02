import { defineField } from 'sanity'
import {
  assetField,
  metricsField,
  pairField,
  pointListField,
  stringListField,
  stepField,
  tableField,
  treeField,
} from './shared'

/**
 * Front-End Engineer case study fields.
 * Rendered across the seven /fe/projects/[slug] tabs.
 */
export const feVariantFields = [
  defineField({ name: 'role', title: 'My role', type: 'string' }),
  defineField({ name: 'team', title: 'Team', type: 'string' }),
  defineField({ name: 'timeline', title: 'Timeline', type: 'string' }),
  defineField({ name: 'industry', title: 'Industry', type: 'string' }),
  defineField({ name: 'summary', title: 'Product summary', type: 'text', rows: 5 }),
  defineField({
    name: 'techStack',
    title: 'Tech stack',
    type: 'array',
    of: [
      {
        type: 'object',
        fields: [
          { name: 'name', title: 'Technology', type: 'string', validation: (Rule) => Rule.required() },
          { name: 'icon', title: 'Icon CSS class', type: 'string' },
        ],
        preview: { select: { title: 'name', subtitle: 'icon' } },
      },
    ],
  }),
  defineField({ name: 'liveUrl', title: 'Live demo URL', type: 'url' }),
  defineField({ name: 'repoUrl', title: 'Repository URL', type: 'url' }),

  // Overview
  metricsField('keyResults', 'Key results'),
  stringListField('contributions', 'My contributions'),
  stringListField('technicalHighlights', 'Technical highlights'),
  stepField('process', 'Development process'),
  assetField('screenshots', 'Project screenshots'),

  // Problem
  defineField({ name: 'productContext', title: 'Product context', type: 'text', rows: 4 }),
  defineField({ name: 'businessChallenge', title: 'Business challenge', type: 'text', rows: 4 }),
  stringListField('stakeholders', 'Key stakeholders'),
  stringListField('userPainPoints', 'User pain points'),
  stringListField('technicalConstraints', 'Technical constraints'),
  stringListField('frontendChallenges', 'Front-end challenges'),
  stringListField('goals', 'Project goals'),
  stringListField('successCriteria', 'Success criteria'),
  stringListField('responsibilities', 'My responsibilities'),

  // Architecture
  defineField({ name: 'architectureOverview', title: 'Architecture overview', type: 'text', rows: 5 }),
  pointListField('architectureGoals', 'Key architectural goals'),
  treeField('highLevel', 'High-level architecture diagram', 3),
  treeField('fileTree', 'Application structure', 3),
  treeField('componentTree', 'Component architecture', 3),
  stringListField('stateManagement', 'State management strategy'),
  stepField('apiFlow', 'API & data flow'),
  pointListField('uiPatterns', 'Reusable UI patterns'),
  pointListField('responsive', 'Responsive design system'),
  defineField({
    name: 'decisions',
    title: 'Technical decisions',
    type: 'array',
    of: [
      {
        type: 'object',
        fields: [
          { name: 'title', title: 'Decision', type: 'string', validation: (Rule) => Rule.required() },
          { name: 'rationale', title: 'Rationale', type: 'text', rows: 3 },
          { name: 'tradeoffs', title: 'Trade-offs', type: 'text', rows: 3 },
        ],
        preview: { select: { title: 'title', subtitle: 'rationale' } },
      },
    ],
  }),
  stringListField('deployment', 'Deployment & integration'),

  // UX / UI
  stringListField('designCollaboration', 'Design collaboration'),
  pairField('figmaToProduction', 'Figma to production'),
  assetField('designSystem', 'Design system execution'),
  assetField('responsiveScreens', 'Responsive implementation'),
  defineField({
    name: 'interactions',
    title: 'Interaction design',
    type: 'array',
    of: [
      {
        type: 'object',
        fields: [
          { name: 'title', title: 'Interaction', type: 'string', validation: (Rule) => Rule.required() },
          { name: 'description', title: 'Description', type: 'text', rows: 2 },
        ],
        preview: { select: { title: 'title', subtitle: 'description' } },
      },
    ],
  }),
  stringListField('accessibility', 'Accessibility & usability'),

  // Performance
  metricsField('perfMetrics', 'Key outcomes'),
  metricsField('coreWebVitals', 'Core Web Vitals'),
  defineField({
    name: 'beforeAfter',
    title: 'Before vs after',
    type: 'array',
    description: 'Numbers only — the layout derives the bar lengths and scales from them.',
    of: [
      {
        type: 'object',
        fields: [
          { name: 'label', title: 'Metric', type: 'string', validation: (Rule) => Rule.required() },
          { name: 'before', title: 'Before', type: 'number', validation: (Rule) => Rule.required() },
          { name: 'after', title: 'After', type: 'number', validation: (Rule) => Rule.required() },
          { name: 'unit', title: 'Unit', type: 'string', description: 'e.g. s, ms, kB' },
          {
            name: 'lowerIsBetter',
            title: 'Lower is better',
            type: 'boolean',
            initialValue: true,
          },
        ],
        preview: { select: { title: 'label', before: 'before', after: 'after' }, prepare: ({ title, before, after }) => ({ title, subtitle: `${before} → ${after}` }) },
      },
    ],
  }),
  pointListField('optimizations', 'Optimisation strategy'),
  defineField({
    name: 'bundle',
    title: 'Bundle size reduction',
    type: 'object',
    fields: [
      { name: 'before', title: 'Before (kB)', type: 'number' },
      { name: 'after', title: 'After (kB)', type: 'number' },
      { name: 'unit', title: 'Unit', type: 'string', initialValue: 'kB' },
      {
        name: 'segments',
        title: 'Composition after optimisation',
        type: 'array',
        of: [
          {
            type: 'object',
            fields: [
              { name: 'label', title: 'Label', type: 'string', validation: (Rule) => Rule.required() },
              { name: 'size', title: 'Size', type: 'number' },
            ],
            preview: { select: { title: 'label', subtitle: 'size' } },
          },
        ],
      },
    ],
  }),
  defineField({ name: 'impactSummary', title: 'Real-world performance impact', type: 'text', rows: 5 }),

  // Results
  metricsField('resultMetrics', 'Primary results'),
  stringListField('businessImpact', 'Business impact'),
  stringListField('userImpact', 'User impact'),
  stringListField('technicalImpact', 'Technical impact'),
  metricsField('launchOutcomes', 'Launch outcomes'),

  // Code Quality
  pointListField('principles', 'Code quality principles'),
  defineField({
    name: 'typescriptSample',
    title: 'TypeScript example',
    type: 'object',
    fields: [
      { name: 'filename', title: 'Filename', type: 'string' },
      { name: 'language', title: 'Language', type: 'string', initialValue: 'tsx' },
      { name: 'code', title: 'Code', type: 'text', rows: 24, validation: (Rule) => Rule.required() },
    ],
  }),
  stringListField('typescriptPoints', 'TypeScript checklist'),
  stringListField('componentPoints', 'Component architecture checklist'),
  defineField({
    name: 'testing',
    title: 'Testing strategy',
    type: 'object',
    fields: [
      { name: 'unit', title: 'Unit', type: 'string' },
      { name: 'integration', title: 'Integration', type: 'string' },
      { name: 'component', title: 'Component', type: 'string' },
      { name: 'accessibility', title: 'Accessibility', type: 'string' },
      {
        name: 'coverage',
        title: 'Coverage %',
        type: 'number',
        description: 'Leave blank unless this is a real measured figure.',
      },
      { name: 'coverageNote', title: 'Coverage note', type: 'string' },
      {
        name: 'points',
        title: 'Checklist',
        type: 'array',
        of: [{ type: 'string' }],
      },
    ],
  }),
  stringListField('linting', 'Linting & formatting'),
  defineField({
    name: 'ci',
    title: 'CI/CD pipeline',
    type: 'array',
    of: [
      {
        type: 'object',
        fields: [
          { name: 'title', title: 'Step', type: 'string', validation: (Rule) => Rule.required() },
          { name: 'command', title: 'Command', type: 'string' },
          { name: 'description', title: 'Description', type: 'string' },
        ],
        preview: { select: { title: 'title', subtitle: 'command' } },
      },
    ],
  }),
  stringListField('reviews', 'Code reviews'),
  stringListField('docs', 'Documentation & maintainability'),
]
