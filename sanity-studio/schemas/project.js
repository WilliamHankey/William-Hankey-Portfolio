import {defineType, defineField} from 'sanity'
import {versionField} from './fields/shared'
import {pmVariantFields} from './fields/pm'
import {feVariantFields} from './fields/fe'
import {uxVariantFields} from './fields/ux'

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
      name: 'subtitle',
      title: 'Subtitle',
      type: 'string',
      description:
        'One-line result statement shown under the title, e.g. "Cut checkout abandonment by 28% in eight weeks".',
    }),
    defineField({
      name: 'category',
      title: 'Category',
      type: 'string',
      description: 'Short grouping label used on cards, e.g. "Fintech", "Marketplace", "Internal Tool".',
    }),
    defineField({
      name: 'order',
      title: 'Order',
      type: 'number',
      initialValue: 0,
      description: 'Lower numbers appear first on the projects page.',
    }),
    versionField(
      'Which portfolio pages this project appears on. Leave empty to list it on all three versions.'
    ),
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
    defineField({
      name: 'variants',
      title: 'Version case studies',
      type: 'array',
      description:
        'One entry per portfolio version. The shared fields above (title, cover, tech stack, showcase) feed all three pages; this holds the version-specific narrative. Add an entry, pick its version, then fill in only that version\'s section — the other two stay empty.',
      of: [
        {
          name: 'variant',
          title: 'Version',
          type: 'object',
          fields: [
            defineField({
              name: 'version',
              title: 'Version',
              type: 'string',
              options: {
                list: [
                  {title: 'Project Manager (/pm)', value: 'pm'},
                  {title: 'Front-End Engineer (/fe)', value: 'fe'},
                  {title: 'UX/UI Designer (/ux)', value: 'ux'},
                ],
              },
              validation: (Rule) => Rule.required(),
            }),
            defineField({
              name: 'pm',
              title: 'Project Manager case study',
              type: 'object',
              description:
                'Rendered across the six /pm tabs: Overview, My Role, Approach, Outcomes, Artifacts, Learnings.',
              fields: pmVariantFields,
            }),
            defineField({
              name: 'fe',
              title: 'Front-End Engineer case study',
              type: 'object',
              description:
                'Rendered across the seven /fe tabs: Overview, Problem, Architecture, UX/UI, Performance, Results, Code Quality.',
              fields: feVariantFields,
            }),
            defineField({
              name: 'ux',
              title: 'UX/UI Designer case study',
              type: 'object',
              description:
                'Rendered across the seven /ux tabs: Overview, Problem, Process, UX, UI, Outcomes, Handoff.',
              fields: uxVariantFields,
            }),
          ],
          preview: {
            select: {title: 'version', pm: 'pm.summary', fe: 'fe.summary', ux: 'ux.summary'},
            prepare: ({title, pm, fe, ux}) => {
              const filled = [
                pm && 'PM',
                fe && 'FE',
                ux && 'UX',
              ].filter(Boolean)
              return {
                title: title ? `${title.toUpperCase()} case study` : 'Unversioned case study',
                subtitle: filled.length
                  ? `Filled: ${filled.join(', ')}`
                  : 'No version content yet',
              }
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
    prepare: ({title, media}) => ({
      title,
      media,
    }),
  },
})

