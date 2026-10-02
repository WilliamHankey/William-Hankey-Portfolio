import {defineType, defineField} from 'sanity'
import {stringListField} from './fields/shared'

/**
 * Site Settings / Profile — a single document holding the global portfolio info:
 * hero text, about-me paragraphs, email, CV download link, location and social links.
 * Create exactly ONE document of this type (name it "Site Settings").
 *
 * The global fields below are shared by every version. To vary the hero, process
 * and section copy per role, add additional documents of this type and set their
 * "Version" field — one for /pm, one for /fe, one for /ux. A document with
 * "All versions" supplies the shared values.
 */
export default defineType({
  name: 'siteSettings',
  title: 'Site Settings / Profile',
  type: 'document',
  fields: [
    defineField({
      name: 'version',
      title: 'Version',
      type: 'string',
      description:
        'Which portfolio this document configures. "All versions" holds the shared name, contact details and defaults.',
      options: {
        list: [
          {title: 'All versions (shared)', value: 'all'},
          {title: 'Project Manager (/pm)', value: 'pm'},
          {title: 'Front-End Engineer (/fe)', value: 'fe'},
          {title: 'UX/UI Designer (/ux)', value: 'ux'},
        ],
        layout: 'radio',
      },
      initialValue: 'all',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'name',
      title: 'Name',
      type: 'string',
      description: 'Your full name (e.g. William Hankey).',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'role',
      title: 'Role / Title',
      type: 'string',
      description: 'Shown in the About badge (e.g. Product Engineer & UX Strategist).',
    }),
    defineField({
      name: 'heroGreeting',
      title: 'Hero Greeting',
      type: 'string',
      description: 'First line of the homepage hero (e.g. "Hello, I\'m William. Nice to meet you!").',
    }),
    defineField({
      name: 'heroIntro',
      title: 'Hero Intro',
      type: 'text',
      rows: 4,
      description: 'Short intro paragraph shown in the homepage hero.',
    }),
    defineField({
      name: 'aboutMe',
      title: 'About Me',
      type: 'array',
      of: [{type: 'text'}],
      description: 'One paragraph per entry — each entry becomes a <p> in the About section.',
    }),
    defineField({
      name: 'footerAbout',
      title: 'Footer About Blurb',
      type: 'text',
      rows: 3,
      description: 'Short bio shown in the footer "About Me" column.',
    }),
    defineField({
      name: 'email',
      title: 'Email Address',
      type: 'string',
      validation: (Rule) => Rule.email(),
      description: 'Contact email displayed in the footer.',
    }),
    defineField({
      name: 'location',
      title: 'Location',
      type: 'string',
      description: 'e.g. Cape Town, South Africa.',
    }),
    defineField({
      name: 'cvUrl',
      title: 'Download CV — Link',
      type: 'url',
      description: 'Direct download URL for your CV (Google Drive, Dropbox, a file in /public, or a Sanity file asset URL). Used by the "Download CV" button in the navbar and footer.',
    }),
    defineField({
      name: 'socials',
      title: 'Social Media Links',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'platform',
              title: 'Platform',
              type: 'string',
              description: 'e.g. LinkedIn, GitHub, Dribbble, Behance, Medium, X, Instagram.',
              validation: (Rule) => Rule.required(),
            },
            {
              name: 'url',
              title: 'URL',
              type: 'url',
              validation: (Rule) => Rule.required(),
            },
          ],
          preview: {
            select: {
              title: 'platform',
              subtitle: 'url',
            },
          },
        },
      ],
      description: 'Social links shown in the hero and footer. Known platforms get their standard icon; others show the platform initial.',
    }),

    /* ------------------------------------------------------------------
       Per-version page content
       ------------------------------------------------------------------ */
    defineField({
      name: 'variant',
      title: 'Version page content',
      type: 'object',
      description:
        'The copy for this version\'s landing page and its shared sections. Any field left empty falls back to the built-in sample content, so you can fill this in piece by piece.',
      fields: [
        defineField({
          name: 'roleLong',
          title: 'Role label',
          type: 'string',
          description: 'Long-form role title, e.g. "Project Manager & Scrum Master".',
        }),
        defineField({
          name: 'heroEyebrow',
          title: 'Hero eyebrow',
          type: 'string',
          description: 'Small label above the headline, e.g. "Project Management".',
        }),
        defineField({
          name: 'heroHeadline',
          title: 'Hero headline',
          type: 'string',
        }),
        defineField({
          name: 'heroIntro',
          title: 'Hero intro',
          type: 'text',
          rows: 4,
        }),
        defineField({
          name: 'heroCtaPrimary',
          title: 'Primary button label',
          type: 'string',
        }),
        defineField({
          name: 'heroCtaSecondary',
          title: 'Secondary button label',
          type: 'string',
        }),
        defineField({
          name: 'heroImage',
          title: 'Hero image',
          type: 'image',
          options: {hotspot: true},
        }),
        defineField({
          name: 'heroMetrics',
          title: 'Hero credibility metrics',
          type: 'array',
          description: 'The stat strip directly beneath the hero. Two to four reads best.',
          of: [
            {
              type: 'object',
              fields: [
                defineField({
                  name: 'value',
                  title: 'Figure',
                  type: 'string',
                  description: 'Pre-formatted, e.g. "+28%" or "€1.2M".',
                  validation: (Rule) => Rule.required(),
                }),
                defineField({name: 'label', title: 'Label', type: 'string'}),
                defineField({
                  name: 'note',
                  title: 'Context',
                  type: 'string',
                  description: 'e.g. "over 6 months" or "across 3 releases".',
                }),
              ],
              preview: {select: {title: 'value', subtitle: 'label'}},
            },
          ],
        }),
        defineField({
          name: 'positioningNote',
          title: 'Positioning note',
          type: 'text',
          rows: 3,
          description: 'The short paragraph explaining how this role differs from the other two.',
        }),
        defineField({
          name: 'featuredProjects',
          title: 'Featured project slugs',
          type: 'array',
          of: [{type: 'string'}],
          description: 'Project slugs to pin to the top, in order (e.g. "waddle-play").',
        }),
        defineField({
          name: 'introBlocks',
          title: 'Section intro blocks',
          type: 'array',
          description: 'Short section summaries rendered above the shared sections.',
          of: [
            {
              type: 'object',
              fields: [
                defineField({
                  name: 'title',
                  title: 'Title',
                  type: 'string',
                  validation: (Rule) => Rule.required(),
                }),
                defineField({name: 'description', title: 'Description', type: 'text', rows: 3}),
              ],
              preview: {select: {title: 'title', subtitle: 'description'}},
            },
          ],
        }),
        stringListField(
          'skills',
          'Skills',
          'Groups shown in the Skills section, e.g. "Agile Delivery: Scrum, Kanban".'
        ),
        defineField({
          name: 'process',
          title: 'Process steps',
          type: 'array',
          of: [
            {
              type: 'object',
              fields: [
                defineField({
                  name: 'title',
                  title: 'Title',
                  type: 'string',
                  validation: (Rule) => Rule.required(),
                }),
                defineField({name: 'summary', title: 'Summary', type: 'string'}),
                defineField({name: 'output', title: 'Output', type: 'string'}),
                defineField({
                  name: 'activities',
                  title: 'Activities',
                  type: 'array',
                  of: [{type: 'string'}],
                }),
              ],
              preview: {select: {title: 'title', subtitle: 'summary'}},
            },
          ],
        }),
        defineField({
          name: 'about',
          title: 'About paragraphs',
          type: 'array',
          of: [{type: 'text'}],
          description: 'One paragraph per entry — each entry becomes a <p>.',
        }),
        defineField({
          name: 'ctaHeading',
          title: 'Closing CTA heading',
          type: 'string',
        }),
        defineField({
          name: 'ctaBody',
          title: 'Closing CTA body',
          type: 'text',
          rows: 3,
        }),
        defineField({
          name: 'seo',
          title: 'SEO',
          type: 'object',
          fields: [
            defineField({name: 'title', title: 'Meta title', type: 'string'}),
            defineField({name: 'description', title: 'Meta description', type: 'text', rows: 3}),
          ],
        }),
      ],
    }),
  ],
  preview: {
    select: {
      title: 'name',
      role: 'role',
      version: 'version',
    },
    prepare: ({title, role, version}) => ({
      title,
      subtitle: `${role || 'No role set'} — ${version || 'all'}`,
    }),
  },
})
