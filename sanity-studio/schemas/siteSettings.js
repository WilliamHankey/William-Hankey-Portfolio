import {defineType, defineField} from 'sanity'

/**
 * Site Settings / Profile — a single document holding the global portfolio info:
 * hero text, about-me paragraphs, email, CV download link, location and social links.
 * Create exactly ONE document of this type (name it "Site Settings").
 */
export default defineType({
  name: 'siteSettings',
  title: 'Site Settings / Profile',
  type: 'document',
  fields: [
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
  ],
  preview: {
    select: {
      title: 'name',
      subtitle: 'role',
    },
  },
})