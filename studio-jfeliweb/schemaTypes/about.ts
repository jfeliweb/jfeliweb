import { defineField, defineType } from 'sanity';

export const about = defineType({
  name: 'about',
  title: 'About',
  type: 'document',
  fields: [
    defineField({
      name: 'bio',
      title: 'Bio',
      type: 'portableText',
      validation: Rule => Rule.required().error('Bio is required'),
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
      rows: 3,
      description: 'Short description for previews and SEO',
    }),
    defineField({
      name: 'image',
      title: 'Image',
      type: 'image',
      description: 'Profile/headshot image (legacy support)',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'headshot',
      title: 'Headshot',
      type: 'imageWithAlt',
      description: 'Profile/headshot image with alt text',
    }),
    defineField({
      name: 'skills',
      title: 'Skills',
      type: 'array',
      of: [
        {
          type: 'string',
        },
      ],
      description: 'List of skills or technologies',
    }),
    defineField({
      name: 'links',
      title: 'Links',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            defineField({
              name: 'label',
              title: 'Label',
              type: 'string',
              validation: Rule => Rule.required().error('Label is required'),
            }),
            defineField({
              name: 'url',
              title: 'URL',
              type: 'url',
              validation: Rule => Rule.required().error('URL is required'),
            }),
            defineField({
              name: 'icon',
              title: 'Icon',
              type: 'string',
              description: 'Icon name or identifier (optional)',
            }),
          ],
          preview: {
            select: {
              title: 'label',
              subtitle: 'url',
            },
          },
        },
      ],
      description: 'Social links or external links',
    }),
    defineField({
      name: 'philosophy',
      title: 'Philosophy',
      type: 'portableText',
      description: 'Personal or professional philosophy',
    }),
  ],
  preview: {
    select: {
      bio: 'bio',
      image: 'headshot.image',
    },
    prepare({ bio, image }) {
      // Extract first line of text from bio for preview
      const bioText = Array.isArray(bio)
        ? bio
          .filter((block: any) => block._type === 'block')
          .map((block: any) =>
            block.children
              ?.filter((child: any) => child._type === 'span')
              .map((child: any) => child.text)
              .join(''),
          )
          .join(' ')
          .trim()
          .substring(0, 50) || 'About'
        : 'About';
      return {
        title: 'About',
        subtitle: bioText,
        media: image,
      };
    },
  },
});
