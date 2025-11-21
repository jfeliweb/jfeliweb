import { defineField, defineType } from 'sanity';

export const imageWithAlt = defineType({
  name: 'imageWithAlt',
  title: 'Image with Alt Text',
  type: 'object',
  fields: [
    defineField({
      name: 'image',
      title: 'Image',
      type: 'image',
      options: {
        hotspot: true,
      },
      validation: Rule => Rule.required().error('Image is required'),
    }),
    defineField({
      name: 'alt',
      title: 'Alt Text',
      type: 'string',
      validation: Rule => Rule.required().error('Alt text is required for accessibility'),
    }),
  ],
  preview: {
    select: {
      image: 'image',
      alt: 'alt',
    },
    prepare({ image, alt }) {
      return {
        title: alt || 'Image without alt text',
        media: image,
      };
    },
  },
});
