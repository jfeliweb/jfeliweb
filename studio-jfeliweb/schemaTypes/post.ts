import { defineField, defineType } from 'sanity';

export const post = defineType({
  name: 'post',
  title: 'Post',
  type: 'document',
  groups: [
    {
      name: 'content',
      title: 'Content',
      default: true,
    },
    {
      name: 'media',
      title: 'Media',
    },
    {
      name: 'metadata',
      title: 'Metadata',
    },
    {
      name: 'seo',
      title: 'SEO',
    },
    {
      name: 'sorting',
      title: 'Sorting & Publishing',
    },
  ],
  fields: [
    // Content Group
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      group: 'content',
      validation: Rule => Rule.required().error('Title is required'),
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      group: 'content',
      options: {
        source: 'title',
        maxLength: 96,
      },
      validation: Rule => Rule.required().error('Slug is required'),
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
      group: 'content',
      rows: 4,
      validation: Rule =>
        Rule.required()
          .min(50)
          .error('Description is required and should be at least 50 characters'),
    }),
    defineField({
      name: 'body',
      title: 'Body',
      type: 'portableText',
      group: 'content',
      validation: Rule => Rule.required().error('Body content is required'),
    }),
    // Media Group
    defineField({
      name: 'mainImage',
      title: 'Main Image',
      type: 'imageWithAlt',
      group: 'media',
      validation: Rule => Rule.required().error('Main image is required'),
    }),
    // Metadata Group
    defineField({
      name: 'categories',
      title: 'Categories',
      type: 'array',
      group: 'metadata',
      of: [
        {
          type: 'reference',
          to: [{ type: 'category' }],
        },
      ],
    }),
    defineField({
      name: 'tags',
      title: 'Tags',
      type: 'array',
      group: 'metadata',
      of: [{ type: 'tag' }],
    }),
    defineField({
      name: 'author',
      title: 'Author',
      type: 'string',
      group: 'metadata',
    }),
    defineField({
      name: 'readingTime',
      title: 'Reading Time (minutes)',
      type: 'number',
      group: 'metadata',
      description: 'Estimated reading time in minutes',
      validation: Rule =>
        Rule.integer()
          .min(1)
          .error('Reading time must be a positive integer'),
    }),
    // SEO Group
    defineField({
      name: 'seo',
      title: 'SEO',
      type: 'seo',
      group: 'seo',
    }),
    // Sorting & Publishing Group
    defineField({
      name: 'publishedAt',
      title: 'Published At',
      type: 'datetime',
      group: 'sorting',
      initialValue: () => new Date().toISOString(),
    }),
    defineField({
      name: 'order',
      title: 'Order',
      type: 'number',
      group: 'sorting',
      description: 'Used for sorting posts (lower numbers appear first)',
      initialValue: 0,
      validation: Rule =>
        Rule.integer()
          .min(0)
          .error('Order must be an integer greater than or equal to 0'),
    }),
  ],
  preview: {
    select: {
      title: 'title',
      publishedAt: 'publishedAt',
      media: 'mainImage.image',
    },
    prepare({ title, publishedAt, media }) {
      const date = publishedAt
        ? new Date(publishedAt).toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'long',
            day: 'numeric',
          })
        : 'Not published';
      return {
        title: title || 'Untitled Post',
        subtitle: date,
        media,
      };
    },
  },
  orderings: [
    {
      title: 'Published Date',
      name: 'publishedAtDesc',
      by: [{ field: 'publishedAt', direction: 'desc' }],
    },
    {
      title: 'Order',
      name: 'orderAsc',
      by: [{ field: 'order', direction: 'asc' }],
    },
  ],
});
