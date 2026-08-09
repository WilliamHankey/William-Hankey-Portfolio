import {defineType, defineField} from 'sanity'

/**
 * Skill — one technology/tool with its logo, shown in the Skills grid.
 */
export default defineType({
  name: 'skill',
  title: 'Skill',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Name',
      type: 'string',
      description: 'e.g. React, TypeScript, Figma.',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'logo',
      title: 'Logo',
      type: 'image',
      options: {hotspot: true},
      description: 'Logo/image for the tech (SVG or PNG).',
    }),
    defineField({
      name: 'order',
      title: 'Order',
      type: 'number',
      initialValue: 0,
      description: 'Lower numbers appear first in the Skills grid.',
    }),
  ],
  preview: {
    select: {
      title: 'name',
      media: 'logo',
    },
  },
})