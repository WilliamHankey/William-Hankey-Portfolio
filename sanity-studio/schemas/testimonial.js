import {defineType, defineField} from 'sanity'

/**
 * Testimonial — a quote about you, shown in the Testimonials grid.
 */
export default defineType({
  name: 'testimonial',
  title: 'Testimonial',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Name',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'role',
      title: 'Role / Info',
      type: 'string',
      description: 'e.g. Junior Developer, Senior Consultant.',
    }),
    defineField({
      name: 'quote',
      title: 'Quote',
      type: 'text',
      rows: 6,
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'photo',
      title: 'Photo',
      type: 'image',
      options: {hotspot: true},
      description: 'Avatar shown next to the name.',
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
      title: 'name',
      subtitle: 'role',
      media: 'photo',
    },
  },
})