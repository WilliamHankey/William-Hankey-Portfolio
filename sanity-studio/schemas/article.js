import {defineType, defineField} from 'sanity'

/**
 * Article — a link to a published article/blog post, shown in the About → Articles column.
 */
export default defineType({
  name: 'article',
  title: 'Article',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'url',
      title: 'URL',
      type: 'url',
      description: 'Link to the published article.',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'source',
      title: 'Source',
      type: 'string',
      description: 'Where it is published (e.g. Medium, Dev.to, personal blog).',
    }),
    defineField({
      name: 'publishedAt',
      title: 'Published Date',
      type: 'date',
      options: {
        dateFormat: 'MMM YYYY',
      },
    }),
    defineField({
      name: 'order',
      title: 'Order',
      type: 'number',
      initialValue: 0,
      description: 'Lower numbers appear first.',
    }),
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'source',
    },
  },
})