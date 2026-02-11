import {defineType, defineField} from 'sanity'

export default defineType({
  name: 'project',
  title: 'Project',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
      description: 'Short description shown in the project list',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'shortOverview',
      title: 'Short Overview',
      type: 'text',
      description: 'Longer overview shown in the project detail page (separate from description)',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'image',
      title: 'Cover Image',
      type: 'image',
      options: {
        hotspot: true,
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'icons',
      title: 'Icons (CSS classes)',
      type: 'array',
      of: [{type: 'string'}],
      description: 'Array of CSS icon classes for the project list view (e.g., "devicon-react-original", "devicon-nodejs-plain")',
    }),
    defineField({
      name: 'link',
      title: 'Live Link',
      type: 'url',
      description: 'Optional link to the live project',
    }),
    defineField({
      name: 'themeColor',
      title: 'Theme Color',
      type: 'string',
      description:
        'Hex color used for accent elements like the "Visit Live Site" button (e.g. #2563eb).',
      validation: (Rule) =>
        Rule.regex(/^#([0-9A-Fa-f]{3}){1,2}$/, {
          name: 'hex color',
        }).warning('Use a valid hex color value like #2563eb'),
    }),
    defineField({
      name: 'techStack',
      title: 'Tech Stack',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'name',
              title: 'Technology Name',
              type: 'string',
              validation: (Rule) => Rule.required(),
            },
            {
              name: 'icon',
              title: 'Icon CSS Class',
              type: 'string',
              description: 'CSS class for the icon (e.g., "devicon-react-original")',
              validation: (Rule) => Rule.required(),
            },
          ],
          preview: {
            select: {
              title: 'name',
              subtitle: 'icon',
            },
          },
        },
      ],
    }),
    defineField({
      name: 'challenges',
      title: 'Challenges & Solutions',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'title',
              title: 'Challenge Title',
              type: 'string',
              validation: (Rule) => Rule.required(),
            },
            {
              name: 'description',
              title: 'Description',
              type: 'text',
              validation: (Rule) => Rule.required(),
            },
          ],
          preview: {
            select: {
              title: 'title',
              subtitle: 'description',
            },
          },
        },
      ],
    }),
    defineField({
      name: 'keyFeatures',
      title: 'Key Features',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'icon',
              title: 'Icon CSS Class',
              type: 'string',
              description: 'CSS class for the icon (e.g., "devicon-react-original")',
              validation: (Rule) => Rule.required(),
            },
            {
              name: 'text',
              title: 'Feature Text',
              type: 'string',
              validation: (Rule) => Rule.required(),
            },
          ],
          preview: {
            select: {
              title: 'text',
              subtitle: 'icon',
            },
          },
        },
      ],
    }),
    defineField({
      name: 'showcase',
      title: 'Showcase Items',
      type: 'array',
      description: 'Images and descriptions to showcase different aspects of the project',
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'image',
              title: 'Image',
              type: 'image',
              options: {
                hotspot: true,
              },
              validation: (Rule) => Rule.required(),
            },
            {
              name: 'title',
              title: 'Title',
              type: 'string',
              validation: (Rule) => Rule.required(),
            },
            {
              name: 'description',
              title: 'Description',
              type: 'text',
              validation: (Rule) => Rule.required(),
            },
          ],
          preview: {
            select: {
              title: 'title',
              subtitle: 'description',
              media: 'image',
            },
          },
        },
      ],
    }),
  ],
  preview: {
    select: {
      title: 'title',
      media: 'image',
    },
  },
})

