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
      title: 'Logo URL',
      type: 'url',
      description:
        'Direct link to the logo image (e.g. an https://cdn.simpleicons.org or https://cdn.jsdelivr.net/gh/devicons/devicon URL, or a local /assets/logos/... path).',
      validation: (Rule) =>
        Rule.required().uri({allowRelative: true}),
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
    },
  },
})