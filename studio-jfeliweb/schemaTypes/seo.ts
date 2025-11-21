import { defineField, defineType } from 'sanity';

export const seo = defineType({
  name: 'seo',
  title: 'SEO',
  type: 'object',
  fields: [
    defineField({
      name: 'metaTitle',
      title: 'Meta Title',
      type: 'string',
      description: 'Title used for search engines and browser tabs',
      validation: Rule => Rule.required().error('Meta title is required'),
    }),
    defineField({
      name: 'metaDescription',
      title: 'Meta Description',
      type: 'text',
      description: 'Description used for search engine results',
      rows: 3,
      validation: Rule =>
        Rule.required()
          .min(50)
          .max(160)
          .error('Meta description is required and should be between 50-160 characters'),
    }),
    defineField({
      name: 'metaImage',
      title: 'Meta Image',
      type: 'imageWithAlt',
    }),
  ],
  preview: {
    select: {
      title: 'metaTitle',
      description: 'metaDescription',
    },
    prepare({ title, description }) {
      return {
        title: title || 'No meta title',
        subtitle: description ? `${description.substring(0, 60)}...` : 'No meta description',
      };
    },
  },
});
