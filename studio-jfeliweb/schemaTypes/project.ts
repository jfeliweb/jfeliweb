import { defineField, defineType } from 'sanity';

export const project = defineType({
  name: 'project',
  title: 'Project',
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
    defineField({
      name: 'gallery',
      title: 'Gallery',
      type: 'array',
      group: 'media',
      of: [{ type: 'imageWithAlt' }],
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
      name: 'technologies',
      title: 'Technologies',
      type: 'array',
      group: 'metadata',
      of: [{ type: 'string' }],
      options: {
        layout: 'tags',
      },
    }),
    defineField({
      name: 'client',
      title: 'Client',
      type: 'string',
      group: 'metadata',
    }),
    defineField({
      name: 'year',
      title: 'Year',
      type: 'number',
      group: 'metadata',
      validation: Rule =>
        Rule.min(1900)
          .max(new Date().getFullYear() + 1)
          .integer()
          .error('Year must be a valid year'),
    }),
    defineField({
      name: 'liveUrl',
      title: 'Live URL',
      type: 'url',
      group: 'metadata',
    }),
    defineField({
      name: 'githubRepo',
      title: 'GitHub Repository',
      type: 'url',
      group: 'metadata',
    }),
    defineField({
      name: 'featured',
      title: 'Featured',
      type: 'boolean',
      group: 'metadata',
      description: 'Featured projects will appear on the home page',
      initialValue: false,
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
      description: 'Used for sorting projects (lower numbers appear first)',
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
      client: 'client',
      year: 'year',
      media: 'mainImage.image',
    },
    prepare({ title, client, year, media }) {
      const subtitle = client && year ? `${client} – ${year}` : client || year || 'No metadata';
      return {
        title: title || 'Untitled Project',
        subtitle,
        media,
      };
    },
  },
  orderings: [
    {
      title: 'Order',
      name: 'orderAsc',
      by: [{ field: 'order', direction: 'asc' }],
    },
    {
      title: 'Published Date',
      name: 'publishedAtDesc',
      by: [{ field: 'publishedAt', direction: 'desc' }],
    },
  ],
});
