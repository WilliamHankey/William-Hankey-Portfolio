import { defineField } from "sanity"

/* ==========================================================================
   Reusable field builders for the per-version case study variants.
   These keep `project.js` readable and guarantee the Studio shape matches the
   TypeScript types in `lib/content/types.ts`.
   ========================================================================== */

export const metricField = (name, title) =>
  defineField({
    name,
    title,
    type: 'array',
    of: [
      {
        type: 'object',
        fields: [
          { name: 'value', title: 'Figure', type: 'string', description: 'e.g. "+28%" or "3.1x". Pre-formatted.', validation: (Rule) => Rule.required() },
          { name: 'label', title: 'Label', type: 'string', validation: (Rule) => Rule.required() },
          { name: 'note', title: 'Context', type: 'string', description: 'Before → after, or the period measured.' },
          { name: 'source', title: 'Source', type: 'string', description: 'Where the number came from. Adds credibility.' },
          {
            name: 'tone',
            title: 'Colour',
            type: 'string',
            options: { list: ['accent', 'success', 'warning', 'danger', 'neutral', 'alt'] },
            initialValue: 'accent',
          },
        ],
        preview: { select: { title: 'value', subtitle: 'label' } },
      },
    ],
  })

export const metricsField = (name, title) => metricField(name, title)

export const assetField = (name, title) =>
  defineField({
    name,
    title,
    type: 'array',
    of: [
      {
        type: 'object',
        fields: [
          { name: 'title', title: 'Title', type: 'string', validation: (Rule) => Rule.required() },
          { name: 'caption', title: 'Caption', type: 'string' },
          {
            name: 'image',
            title: 'Image',
            type: 'image',
            options: { hotspot: true },
            description: 'Optional. The layout renders a labelled placeholder until an image is uploaded.',
          },
          { name: 'href', title: 'Link', type: 'url' },
        ],
        preview: {
          select: { title: 'title', subtitle: 'caption', media: 'image' },
        },
      },
    ],
  })

export const stringListField = (name, title, description) =>
  defineField({
    name,
    title,
    type: 'array',
    of: [{ type: 'string' }],
    description,
  })

export const pointListField = (name, title, description) =>
  defineField({
    name,
    title,
    type: 'array',
    of: [
      {
        type: 'object',
        fields: [
          { name: 'title', title: 'Title', type: 'string', validation: (Rule) => Rule.required() },
          { name: 'description', title: 'Description', type: 'text', rows: 2 },
          {
            name: 'points',
            title: 'Points',
            type: 'array',
            of: [{ type: 'string' }],
            validation: (Rule) => Rule.min(1),
          },
        ],
        preview: { select: { title: 'title', subtitle: 'description' } },
      },
    ],
    description,
  })

export const personField = (name, title) =>
  defineField({
    name,
    title,
    type: 'array',
    of: [
      {
        type: 'object',
        fields: [
          { name: 'name', title: 'Name', type: 'string', validation: (Rule) => Rule.required() },
          { name: 'role', title: 'Role', type: 'string' },
        ],
        preview: { select: { title: 'name', subtitle: 'role' } },
      },
    ],
  })

export const stepField = (name, title) =>
  defineField({
    name,
    title,
    type: 'array',
    of: [
      {
        type: 'object',
        fields: [
          { name: 'title', title: 'Title', type: 'string', validation: (Rule) => Rule.required() },
          { name: 'summary', title: 'Summary', type: 'string' },
          { name: 'duration', title: 'Duration', type: 'string' },
          { name: 'activities', title: 'Activities', type: 'array', of: [{ type: 'string' }] },
          { name: 'methods', title: 'Methods', type: 'array', of: [{ type: 'string' }] },
          { name: 'output', title: 'Output', type: 'string' },
        ],
        preview: { select: { title: 'title', subtitle: 'summary' } },
      },
    ],
  })

/**
 * A two-column table stored as caption + columns + rows[{ cells }].
 * Sanity has no 2D array type, so each row wraps its cells in an object.
 */
export const tableField = (name, title, { columnCount = 4, description } = {}) =>
  defineField({
    name,
    title,
    type: 'object',
    description,
    fields: [
      { name: 'caption', title: 'Caption', type: 'string' },
      {
        name: 'columns',
        title: 'Column headings',
        type: 'array',
        of: [{ type: 'string' }],
        ...(columnCount == null ? {} : { validation: (Rule) => Rule.length(columnCount) }),
      },
      {
        name: 'rows',
        title: 'Rows',
        type: 'array',
        of: [
          {
            type: 'object',
            fields: [
              {
                name: 'cells',
                title: 'Cells',
                type: 'array',
                of: [{ type: 'string' }],
                description: columnCount == null
                  ? 'One entry per column heading.'
                  : `One entry per column heading (${columnCount}).`,
                ...(columnCount == null ? {} : { validation: (Rule) => Rule.length(columnCount) }),
              },
            ],
            preview: {
              select: { cells: 'cells' },
              prepare: ({ cells }) => ({ title: (cells || []).filter(Boolean).join(' · ') }),
            },
          },
        ],
      },
    ],
  })

/** Nested label tree used for architecture diagrams and information architecture. */
export const treeField = (name, title, depth = 4) => {
  const build = (level) => ({
    type: 'object',
    fields: [
      { name: 'label', title: 'Label', type: 'string' },
      ...(level < depth
        ? [
            {
              name: 'children',
              title: 'Children',
              type: 'array',
              of: [build(level + 1)],
            },
          ]
        : []),
    ],
    preview: { select: { title: 'label' } },
  })
  return defineField({ name, title, type: 'object', fields: build(1).fields })
}

export const quoteField = (name, title) =>
  defineField({
    name,
    title,
    type: 'object',
    fields: [
      { name: 'quote', title: 'Quote', type: 'text', rows: 4, validation: (Rule) => Rule.required() },
      { name: 'name', title: 'Name', type: 'string' },
      { name: 'role', title: 'Role', type: 'string' },
    ],
  })

export const beforeAfterField = (name, title) =>
  defineField({
    name,
    title,
    type: 'array',
    of: [
      {
        type: 'object',
        fields: [
          { name: 'title', title: 'Title', type: 'string' },
          { name: 'before', title: 'Before', type: 'string' },
          { name: 'after', title: 'After', type: 'string' },
          { name: 'unit', title: 'Unit', type: 'string' },
          { name: 'note', title: 'Note', type: 'string' },
        ],
        preview: { select: { title: 'title', before: 'before', after: 'after' }, prepare: ({ title, before, after }) => ({ title, subtitle: `${before || '—'} → ${after || '—'}` }) },
      },
    ],
  })

export const pairField = (name, title) =>
  defineField({
    name,
    title,
    type: 'array',
    of: [
      {
        type: 'object',
        fields: [
          { name: 'title', title: 'Title', type: 'string' },
          { name: 'note', title: 'Note', type: 'string' },
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
        preview: { select: { title: 'title', before: 'before.title', after: 'after.title' }, prepare: ({ title, before, after }) => ({ title, subtitle: `${before || 'Before'} → ${after || 'After'}` }) },
      },
    ],
  })

export const toneField = (name = 'tone', title = 'Colour') =>
  defineField({
    name,
    title,
    type: 'string',
    options: { list: ['accent', 'success', 'warning', 'danger', 'neutral', 'alt'] },
    initialValue: 'accent',
  })

export const versionField = (description) =>
  defineField({
    name: 'versions',
    title: 'Portfolio versions',
    type: 'array',
    of: [{ type: 'string' }],
    options: {
      list: [
        { title: 'Project Manager (/pm)', value: 'pm' },
        { title: 'Front-End Engineer (/fe)', value: 'fe' },
        { title: 'UX/UI Designer (/ux)', value: 'ux' },
      ],
      layout: 'grid',
    },
    description:
      description ||
      'Which versioned pages this document appears on. Leave empty to show it on all three.',
  })

export const toneOptions = ['accent', 'success', 'warning', 'danger', 'neutral', 'alt']
