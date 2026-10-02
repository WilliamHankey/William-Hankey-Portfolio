import { defineField } from 'sanity'
import {
  assetField,
  beforeAfterField,
  metricsField,
  pairField,
  pointListField,
  quoteField,
  stringListField,
  stepField,
  toneField,
  treeField,
} from './shared'

/**
 * UX/UI Designer case study fields.
 * Rendered across the seven /ux/work/[slug] tabs.
 */
export const uxVariantFields = [
  defineField({
    name: 'category',
    title: 'Category',
    type: 'string',
    options: { list: ['Website', 'Web App / SaaS', 'Mobile App'] },
  }),
  defineField({ name: 'role', title: 'My role', type: 'string' }),
  defineField({ name: 'team', title: 'Team', type: 'string' }),
  defineField({ name: 'timeline', title: 'Timeline', type: 'string' }),
  defineField({ name: 'industry', title: 'Industry', type: 'string' }),
  defineField({ name: 'summary', title: 'Project summary', type: 'text', rows: 5 }),
  defineField({ name: 'outcome', title: 'One-line outcome', type: 'string' }),
  stringListField('tags', 'Skill tags'),

  // Overview
  stringListField('responsibilities', 'My responsibilities'),
  defineField({ name: 'challenge', title: 'The challenge', type: 'text', rows: 4 }),
  stringListField('userGoals', 'User goals'),
  stringListField('businessGoals', 'Business goals'),
  metricsField('keyResults', 'Key results'),
  assetField('outputs', 'Representative outputs'),

  // Problem
  defineField({ name: 'problemOverview', title: 'Problem overview', type: 'text', rows: 5 }),
  defineField({ name: 'coreProblem', title: 'Core problem', type: 'text', rows: 3 }),
  defineField({ name: 'businessContext', title: 'Company & business context', type: 'text', rows: 5 }),
  stringListField('contextGoals', 'Business goals (side card)'),
  defineField({
    name: 'userPainPoints',
    title: 'User pain points',
    type: 'array',
    of: [
      {
        type: 'object',
        fields: [
          { name: 'quote', title: 'Quote', type: 'text', rows: 3, validation: (Rule) => Rule.required() },
          { name: 'person', title: 'Persona', type: 'string' },
          { name: 'context', title: 'Context', type: 'string' },
        ],
        preview: { select: { title: 'person', subtitle: 'quote' } },
      },
    ],
  }),
  pointListField('operationalPainPoints', 'Operational pain points'),
  pointListField('constraints', 'Constraints'),
  defineField({ name: 'whyItMattered', title: 'Why this project mattered', type: 'text', rows: 4 }),
  pointListField('impactCards', 'Impact cards'),
  stringListField('researchInputs', 'Research inputs'),
  defineField({
    name: 'personas',
    title: 'Target users & personas',
    type: 'array',
    of: [
      {
        type: 'object',
        fields: [
          { name: 'name', title: 'Name', type: 'string', validation: (Rule) => Rule.required() },
          { name: 'role', title: 'Role', type: 'string' },
          { name: 'description', title: 'Description', type: 'text', rows: 3 },
          { name: 'needs', title: 'Needs', type: 'array', of: [{ type: 'string' }] },
        ],
        preview: { select: { title: 'name', subtitle: 'role' } },
      },
    ],
  }),
  defineField({ name: 'problemStatement', title: 'Problem statement', type: 'text', rows: 4 }),

  // Process
  defineField({ name: 'processOverview', title: 'Design process introduction', type: 'text', rows: 4 }),
  pointListField('processPrinciples', 'Process at a glance'),
  stepField('processSteps', 'Phase detail'),
  defineField({
    name: 'phaseTimeline',
    title: 'Timeline by week',
    type: 'array',
    of: [
      {
        type: 'object',
        fields: [
          { name: 'week', title: 'Weeks', type: 'string', validation: (Rule) => Rule.required() },
          { name: 'focus', title: 'Focus', type: 'string' },
          { name: 'outcome', title: 'Outcome', type: 'string' },
        ],
        preview: { select: { title: 'week', subtitle: 'focus' } },
      },
    ],
  }),
  stringListField('collaboration', 'Collaboration & workshops'),
  stringListField('decisionInputs', 'How decisions were made'),

  // UX
  defineField({ name: 'uxOverview', title: 'UX overview', type: 'text', rows: 4 }),
  pointListField('uxPrinciples', 'UX principles'),
  stepField('flow', 'Primary user flow'),
  treeField('informationArchitecture', 'Information architecture', 3),
  defineField({
    name: 'journey',
    title: 'User journey',
    type: 'array',
    of: [
      {
        type: 'object',
        fields: [
          { name: 'stage', title: 'Stage', type: 'string', validation: (Rule) => Rule.required() },
          { name: 'goal', title: 'Goal', type: 'string' },
          { name: 'emotion', title: 'Emotion', type: 'string', options: { list: ['frustrated', 'neutral', 'confident'] } },
          { name: 'quote', title: 'Quote', type: 'string' },
        ],
        preview: { select: { title: 'stage', subtitle: 'goal' } },
      },
    ],
  }),
  assetField('wireframes', 'Wireframes & iterations'),
  defineField({
    name: 'usability',
    title: 'Usability testing',
    type: 'object',
    fields: [
      { name: 'participants', title: 'Participants', type: 'string' },
      { name: 'rounds', title: 'Rounds', type: 'string' },
      {
        name: 'points',
        title: 'Key findings',
        type: 'array',
        of: [
          {
            type: 'object',
            fields: [
              { name: 'text', title: 'Finding', type: 'text', rows: 2, validation: (Rule) => Rule.required() },
              { name: 'status', title: 'Status', type: 'string', options: { list: ['positive', 'negative'] } },
            ],
            preview: { select: { title: 'text', subtitle: 'status' } },
          },
        ],
      },
    ],
  }),
  beforeAfterField('decisions', 'UX decisions & improvements'),
  stringListField('uxAccessibility', 'Accessibility considerations'),

  // UI
  defineField({ name: 'uiOverview', title: 'UI design overview', type: 'text', rows: 4 }),
  pointListField('designGoals', 'Design goals'),
  pointListField('uiPrinciples', 'UI principles'),
  assetField('moodboard', 'Moodboard / visual direction'),
  defineField({ name: 'brandPhrase', title: 'Brand phrase', type: 'string' }),
  defineField({
    name: 'palette',
    title: 'Colour palette',
    type: 'array',
    of: [
      {
        type: 'object',
        fields: [
          { name: 'name', title: 'Token', type: 'string', validation: (Rule) => Rule.required() },
          { name: 'value', title: 'Hex', type: 'string', validation: (Rule) => Rule.required() },
          { name: 'usage', title: 'Usage', type: 'string' },
        ],
        preview: { select: { title: 'name', subtitle: 'value' } },
      },
    ],
  }),
  defineField({
    name: 'typography',
    title: 'Typography',
    type: 'array',
    of: [
      {
        type: 'object',
        fields: [
          { name: 'name', title: 'Role', type: 'string', validation: (Rule) => Rule.required() },
          { name: 'value', title: 'Specification', type: 'string' },
          { name: 'usage', title: 'Usage', type: 'string' },
        ],
        preview: { select: { title: 'name', subtitle: 'value' } },
      },
    ],
  }),
  defineField({
    name: 'spacing',
    title: 'Spacing scale',
    type: 'array',
    of: [
      {
        type: 'object',
        fields: [
          { name: 'name', title: 'Token', type: 'string' },
          { name: 'value', title: 'Value', type: 'string' },
        ],
        preview: { select: { title: 'name', subtitle: 'value' } },
      },
    ],
  }),
  stringListField('icons', 'Iconography'),
  defineField({
    name: 'components',
    title: 'Core components',
    type: 'array',
    of: [
      {
        type: 'object',
        fields: [
          { name: 'name', title: 'Component', type: 'string', validation: (Rule) => Rule.required() },
          { name: 'variants', title: 'Variants', type: 'array', of: [{ type: 'string' }] },
          { name: 'states', title: 'States', type: 'array', of: [{ type: 'string' }] },
          { name: 'note', title: 'Note', type: 'string' },
        ],
        preview: { select: { title: 'name', subtitle: 'note' } },
      },
    ],
  }),
  defineField({
    name: 'states',
    title: 'States & feedback',
    type: 'array',
    of: [
      {
        type: 'object',
        fields: [
          { name: 'name', title: 'State', type: 'string', validation: (Rule) => Rule.required() },
          { name: 'description', title: 'Description', type: 'string' },
          toneField(),
        ],
        preview: { select: { title: 'name', subtitle: 'description' } },
      },
    ],
  }),
  pairField('uiBeforeAfter', 'Before / after UI improvements'),
  assetField('finalScreens', 'High-fidelity screens'),

  // Outcomes
  metricsField('outcomeMetrics', 'Metric cards'),
  pointListField('outcomeGroups', 'Impact groups'),
  defineField({
    name: 'outcomeCompare',
    title: 'Before vs after',
    type: 'object',
    fields: [
      { name: 'title', title: 'Title', type: 'string' },
      {
        name: 'before',
        title: 'Before',
        type: 'object',
        fields: [
          { name: 'title', title: 'Title', type: 'string' },
          { name: 'caption', title: 'Caption', type: 'string' },
          { name: 'image', title: 'Image', type: 'image', options: { hotspot: true } },
        ],
      },
      {
        name: 'after',
        title: 'After',
        type: 'object',
        fields: [
          { name: 'title', title: 'Title', type: 'string' },
          { name: 'caption', title: 'Caption', type: 'string' },
          { name: 'image', title: 'Image', type: 'image', options: { hotspot: true } },
        ],
      },
    ],
  }),
  quoteField('testimonial', 'Testimonial'),
  stringListField('additionalWins', 'Additional wins'),
  stringListField('shipped', 'What was shipped'),

  // Handoff
  defineField({ name: 'handoffNarrative', title: 'Handoff & delivery', type: 'text', rows: 5 }),
  stringListField('handoffGoals', 'Handoff goals'),
  assetField('redlines', 'Design specs & redlines'),
  assetField('annotatedScreens', 'Annotated screens'),
  assetField('componentDocs', 'Component documentation'),
  stringListField('collaborationNotes', 'Collaboration with engineers'),
  stringListField('implementationSupport', 'Implementation support'),
  metricsField('releaseStats', 'Release readiness stats'),
  stringListField('postLaunch', 'Post-launch follow-up'),
]
