import type { AboutContent, BlogPost, Category, Lab, Project, Tool } from '@/types/sanity';

export const mockData = {
  tools: [
    {
      _id: '1',
      title: 'Color Palette Generator',
      slug: { current: 'color-palette-generator' },
      shortDescription: 'Generate beautiful color palettes for your projects',
      description: [
        {
          _type: 'block',
          children: [
            {
              _type: 'span',
              text: 'A powerful tool to generate and explore color palettes for your design projects.',
            },
          ],
        },
      ],
      category: {
        _id: 'cat1',
        title: 'Design',
        slug: { current: 'design' },
      },
      featured: true,
      tags: ['design', 'colors', 'tools'],
      url: 'https://example.com/color-palette',
    },
    {
      _id: '2',
      title: 'Code Formatter',
      slug: { current: 'code-formatter' },
      shortDescription: 'Format and beautify your code instantly',
      description: [
        {
          _type: 'block',
          children: [
            {
              _type: 'span',
              text: 'Format your code in multiple languages with this easy-to-use tool.',
            },
          ],
        },
      ],
      category: {
        _id: 'cat2',
        title: 'Development',
        slug: { current: 'development' },
      },
      featured: true,
      tags: ['code', 'formatter', 'tools'],
      url: 'https://example.com/formatter',
    },
  ] as Tool[],

  projects: [
    {
      _id: '1',
      title: 'E-Commerce Platform',
      slug: { current: 'ecommerce-platform' },
      shortDescription: 'A modern e-commerce solution built with Next.js',
      description: [
        {
          _type: 'block',
          children: [
            {
              _type: 'span',
              text: 'A full-featured e-commerce platform with payment integration and admin dashboard.',
            },
          ],
        },
      ],
      featured: true,
      tags: ['nextjs', 'ecommerce', 'fullstack'],
      technologies: ['Next.js', 'TypeScript', 'Stripe'],
      url: 'https://example.com/ecommerce',
      githubUrl: 'https://github.com/example/ecommerce',
    },
    {
      _id: '2',
      title: 'Task Management App',
      slug: { current: 'task-management-app' },
      shortDescription: 'Collaborative task management with real-time updates',
      description: [
        {
          _type: 'block',
          children: [
            {
              _type: 'span',
              text: 'A collaborative task management application with real-time synchronization.',
            },
          ],
        },
      ],
      featured: true,
      tags: ['react', 'realtime', 'collaboration'],
      technologies: ['React', 'Node.js', 'WebSockets'],
      url: 'https://example.com/tasks',
    },
  ] as Project[],

  labs: [
    {
      _id: '1',
      title: 'AI Text Generator',
      slug: { current: 'ai-text-generator' },
      shortDescription: 'Experimental AI-powered text generation',
      description: [
        {
          _type: 'block',
          children: [
            {
              _type: 'span',
              text: 'An experimental project exploring AI text generation capabilities.',
            },
          ],
        },
      ],
      status: 'experimental' as const,
      tags: ['ai', 'experimental'],
      url: 'https://example.com/ai-text',
    },
  ] as Lab[],

  blogPosts: [
    {
      _id: '1',
      title: 'Getting Started with Next.js 14',
      slug: { current: 'getting-started-with-nextjs-14' },
      description: 'Learn the fundamentals of Next.js 14 and build your first application',
      body: [
        {
          _type: 'block',
          children: [
            {
              _type: 'span',
              text: 'Next.js 14 introduces exciting new features...',
            },
          ],
        },
      ],
      publishedAt: '2024-01-15',
      featured: true,
      tags: ['nextjs', 'tutorial'],
      author: 'jFeliWeb',
    },
    {
      _id: '2',
      title: 'Building with Tailwind CSS',
      slug: { current: 'building-with-tailwind-css' },
      description: 'A comprehensive guide to building beautiful UIs with Tailwind CSS',
      body: [
        {
          _type: 'block',
          children: [
            {
              _type: 'span',
              text: 'Tailwind CSS makes it easy to build modern, responsive designs...',
            },
          ],
        },
      ],
      publishedAt: '2024-01-10',
      featured: true,
      tags: ['tailwind', 'css', 'design'],
      author: 'jFeliWeb',
    },
  ] as BlogPost[],

  about: {
    _id: '1',
    bio: [
      {
        _type: 'block',
        children: [
          {
            _type: 'span',
            text: 'Welcome to jFeliWeb Creator Studio, where innovation meets creativity.',
          },
        ],
      },
    ],
    skills: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'Sanity CMS'],
    links: [
      { label: 'GitHub', url: 'https://github.com/jfeliweb' },
      { label: 'Twitter', url: 'https://twitter.com/jfeliweb' },
      { label: 'LinkedIn', url: 'https://linkedin.com/in/jfeliweb' },
    ],
    philosophy: [
      {
        _type: 'block',
        children: [
          {
            _type: 'span',
            text: 'We believe in creating beautiful, functional, and accessible web experiences.',
          },
        ],
      },
    ],
  } as AboutContent,

  categories: [
    { _id: 'cat1', title: 'Design', slug: { current: 'design' } },
    { _id: 'cat2', title: 'Development', slug: { current: 'development' } },
    { _id: 'cat3', title: 'Tools', slug: { current: 'tools' } },
  ] as Category[],
};
