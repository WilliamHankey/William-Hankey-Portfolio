import { defineField } from 'sanity'
import {
  assetField,
  metricsField,
  personField,
  pointListField,
  stringListField,
  stepField,
  tableField,
} from './shared'

/**
 * Project Manager / Scrum Master case study fields.
 * Rendered across the six /pm/projects/[slug] tabs.
 */
export const pmVariantFields = [
  defineField({ name: 'industry', title: 'Industry', type: 'string' }),
  defineField({ name: 'status', title: 'Status', type: 'string', initialValue: 'Delivered' }),
  defineField({
    name: 'statusTone',
    title: 'Status colour',
    type: 'string',
    options: { list: ['success', 'warning', 'accent', 'neutral', 'danger'] },
    initialValue: 'success',
  }),
  defineField({ name: 'dateRange', title: 'Date range', type: 'string', description: 'e.g. "2023 — 2024"' }),
  stringListField('roles', 'Roles held'),
  stringListField('methodology', 'Methodology'),
  defineField({ name: 'teamSize', title: 'Team size', type: 'string' }),
  defineField({ name: 'summary', title: 'Case study summary', type: 'text', rows: 5 }),
  stringListField('businessGoals', 'Business goals'),

  // Overview
  metricsField('results', 'Key results'),
  stringListField('highlights', 'Project highlights'),
  assetField('deliverables', 'Screenshots & deliverables'),

  // My Role
  defineField({ name: 'roleSummary', title: 'Role summary', type: 'text', rows: 5 }),
  defineField({ name: 'roleLevel', title: 'Role level', type: 'string' }),
  defineField({ name: 'duration', title: 'Duration', type: 'string' }),
  stringListField('responsibilities', 'Core responsibilities'),
  pointListField('ownershipAreas', 'Scope & ownership areas'),
  pointListField('decisions', 'Decision-making authority'),
  personField('collaborators', 'Team & collaboration'),
  personField('stakeholders', 'Key stakeholders'),
  defineField({
    name: 'ceremonies',
    title: 'Ceremonies & cadence',
    type: 'array',
    of: [
      {
        type: 'object',
        fields: [
          { name: 'title', title: 'Ceremony', type: 'string', validation: (Rule) => Rule.required() },
          { name: 'cadence', title: 'Cadence', type: 'string' },
          { name: 'description', title: 'Description', type: 'text', rows: 2 },
        ],
        preview: { select: { title: 'title', subtitle: 'cadence' } },
      },
    ],
  }),
  stringListField('tools', 'Tools used'),

  // Approach
  defineField({ name: 'approachOverview', title: 'Approach overview', type: 'text', rows: 4 }),
  stringListField('principles', 'Guiding principles'),
  stepField('approachSteps', 'End-to-end delivery framework'),
  tableField('stakeholderPlan', 'Stakeholder communication plan', {
    columnCount: 4,
    description: 'Columns: stakeholder group, method, cadence, key focus.',
  }),
  defineField({
    name: 'prioritization',
    title: 'Prioritisation framework',
    type: 'object',
    fields: [
      { name: 'framework', title: 'Framework', type: 'string', description: 'e.g. RICE, MoSCoW, WSJF' },
      { name: 'description', title: 'How it was applied', type: 'text', rows: 4 },
      tableField('table', 'Sample prioritisation table', { columnCount: null }),
    ],
  }),
  stringListField('risks', 'Risk & dependency considerations'),
  tableField('raid', 'RAID preview', { columnCount: 4, description: 'Columns: type, description, owner, status.' }),

  // Outcomes
  pointListField('outcomeGroups', 'Impact dimensions'),
  defineField({
    name: 'beforeAfter',
    title: 'Before & after',
    type: 'array',
    of: [
      {
        type: 'object',
        fields: [
          { name: 'label', title: 'Metric', type: 'string', validation: (Rule) => Rule.required() },
          { name: 'before', title: 'Before', type: 'string' },
          { name: 'after', title: 'After', type: 'string' },
          { name: 'unit', title: 'Unit', type: 'string' },
        ],
        preview: { select: { title: 'label', before: 'before', after: 'after' }, prepare: ({ title, before, after }) => ({ title, subtitle: `${before || '—'} → ${after || '—'}` }) },
      },
    ],
  }),
  defineField({
    name: 'milestones',
    title: 'Milestone timeline',
    type: 'array',
    of: [
      {
        type: 'object',
        fields: [
          { name: 'date', title: 'Date', type: 'string', validation: (Rule) => Rule.required() },
          { name: 'title', title: 'Milestone', type: 'string', validation: (Rule) => Rule.required() },
          { name: 'outcome', title: 'Outcome', type: 'string' },
        ],
        preview: { select: { title: 'title', subtitle: 'date' } },
      },
    ],
  }),
  stringListField('measurement', 'How results were measured'),
  stringListField('achievements', 'Major achievements'),

  // Artifacts
  defineField({
    name: 'artifacts',
    title: 'Delivery artifacts',
    type: 'array',
    description: 'Each artifact names the decision or evidence it supports.',
    of: [
      {
        type: 'object',
        fields: [
          { name: 'title', title: 'Title', type: 'string', validation: (Rule) => Rule.required() },
          {
            name: 'category',
            title: 'Category',
            type: 'string',
            options: {
              list: [
                'Strategy & Planning',
                'Agile Delivery',
                'Requirements',
                'Stakeholders',
                'Analysis & Reporting',
              ],
            },
          },
          { name: 'description', title: 'Description', type: 'text', rows: 3 },
          { name: 'image', title: 'Thumbnail', type: 'image', options: { hotspot: true } },
          { name: 'href', title: 'Open artifact', type: 'url' },
        ],
        preview: { select: { title: 'title', subtitle: 'category', media: 'image' } },
      },
    ],
  }),

  // Learnings
  pointListField('learnings', 'Learning themes'),
  stringListField('workedWell', 'What worked well'),
  stringListField('improveNextTime', 'What I would improve next time'),
  tableField('retrospectives', 'Retrospective insights', {
    columnCount: 3,
    description: 'Columns: what we learned, action taken, impact.',
  }),
  stringListField('futurePractices', 'How this shaped my future practice'),
]
