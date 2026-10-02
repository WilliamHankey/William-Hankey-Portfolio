import {defineType, defineField} from 'sanity'
import {versionField} from './fields/shared'

/**
 * Certification — a course, exam or credential shown in the Certifications
 * section (surfaced on /pm/skills and the shared skills pages).
 */
export default defineType({
  name: 'certification',
  title: 'Certification',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Name',
      type: 'string',
      description: 'e.g. Professional Scrum Master I (PSM I).',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'issuer',
      title: 'Issuing organisation',
      type: 'string',
      description: 'e.g. Scrum.org, Google, Meta.',
    }),
    defineField({
      name: 'year',
      title: 'Year',
      type: 'string',
      description: 'Free text so "2024" and "Mar 2025" both work.',
    }),
    defineField({
      name: 'credentialId',
      title: 'Credential ID',
      type: 'string',
      description: 'Optional verification reference.',
    }),
    defineField({
      name: 'url',
      title: 'Verification URL',
      type: 'url',
      description: 'Link to the credential or certificate.',
    }),
    defineField({
      name: 'order',
      title: 'Order',
      type: 'number',
      initialValue: 0,
      description: 'Lower numbers appear first.',
    }),
    versionField(),
  ],
  preview: {
    select: {
      title: 'name',
      issuer: 'issuer',
      year: 'year',
    },
    prepare: ({title, issuer, year}) => ({
      title,
      subtitle: [issuer, year].filter(Boolean).join(' · '),
    }),
  },
})
