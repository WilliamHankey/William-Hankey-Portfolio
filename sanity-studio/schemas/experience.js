import {defineType, defineField} from 'sanity'

/**
 * Experience — one job/role entry in the About → Experience column.
 */
export default defineType({
  name: 'experience',
  title: 'Experience',
  type: 'document',
  fields: [
    defineField({
      name: 'role',
      title: 'Role',
      type: 'string',
      description: 'e.g. Founder & Lead Consultant.',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'company',
      title: 'Company',
      type: 'string',
      description: 'e.g. MeiFlume.',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'period',
      title: 'Period',
      type: 'string',
      description: 'e.g. "May 2025 — Present" (free text so any format works).',
    }),
    defineField({
      name: 'bullets',
      title: 'Highlights',
      type: 'array',
      of: [{type: 'string'}],
      description: 'Bullet points of what you did there.',
    }),
    defineField({
      name: 'order',
      title: 'Order',
      type: 'number',
      initialValue: 0,
      description: 'Lower numbers appear first (most recent first).',
    }),
  ],
  preview: {
    select: {
      title: 'role',
      subtitle: 'company',
    },
  },
})