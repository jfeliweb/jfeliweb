import { groq } from 'next-sanity';

// Tool Queries
export const toolsQuery = groq`
  *[_type == "tool"] | order(createdAt desc) {
    _id,
    title,
    slug,
    description,
    shortDescription,
    "category": category->{
      _id,
      title,
      slug
    },
    image,
    url,
    tags,
    featured,
    createdAt,
    updatedAt
  }
`;

export const featuredToolsQuery = groq`
  *[_type == "tool" && featured == true] | order(createdAt desc) [0...6] {
    _id,
    title,
    slug,
    description,
    shortDescription,
    "category": category->{
      _id,
      title,
      slug
    },
    image,
    url,
    tags,
    featured,
    createdAt,
    updatedAt
  }
`;

export const toolBySlugQuery = groq`
  *[_type == "tool" && slug.current == $slug][0] {
    _id,
    title,
    slug,
    description,
    shortDescription,
    "category": category->{
      _id,
      title,
      slug
    },
    image,
    url,
    tags,
    featured,
    createdAt,
    updatedAt
  }
`;

// Site Settings Query
export const siteSettingsQuery = groq`
  *[_type == "siteSettings"][0] {
    _id,
    siteTitle,
    siteDescription,
    logo,
    favicon,
    socialLinks,
    defaultSeo
  }
`;

// Project Queries
export const projectsQuery = groq`
  *[_type == "project"] | order(order asc, createdAt desc) {
    _id,
    title,
    slug,
    description,
    shortDescription,
    mainImage,
    gallery,
    "liveUrl": liveUrl,
    "githubRepo": githubRepo,
    "tags": tags[].title,
    technologies,
    featured,
    order,
    createdAt,
    updatedAt
  }
`;

export const featuredProjectsQuery = groq`
  *[_type == "project" && featured == true] | order(order asc, createdAt desc) [0...6] {
    _id,
    title,
    slug,
    description,
    shortDescription,
    mainImage,
    gallery,
    "liveUrl": liveUrl,
    "githubRepo": githubRepo,
    "tags": tags[].title,
    technologies,
    featured,
    order,
    createdAt,
    updatedAt
  }
`;

export const projectBySlugQuery = groq`
  *[_type == "project" && slug.current == $slug][0] {
    _id,
    title,
    slug,
    description,
    body,
    shortDescription,
    mainImage,
    gallery,
    "liveUrl": liveUrl,
    "githubRepo": githubRepo,
    "tags": tags[].title,
    technologies,
    featured,
    order,
    createdAt,
    updatedAt
  }
`;

// Lab Queries
export const labsQuery = groq`
  *[_type == "lab"] | order(createdAt desc) {
    _id,
    title,
    slug,
    description,
    shortDescription,
    image,
    url,
    tags,
    status,
    featured,
    createdAt,
    updatedAt
  }
`;

export const labBySlugQuery = groq`
  *[_type == "lab" && slug.current == $slug][0] {
    _id,
    title,
    slug,
    description,
    shortDescription,
    image,
    url,
    tags,
    status,
    featured,
    createdAt,
    updatedAt
  }
`;

// Blog Queries
export const blogPostsQuery = groq`
  *[_type == "post"] | order(publishedAt desc) {
    _id,
    title,
    slug,
    description,
    body,
    mainImage {
      image {
        ...,
        asset->
      },
      alt
    },
    author,
    publishedAt,
    tags,
    "categories": categories[]->{
      _id,
      title,
      slug
    },
    featured
  }
`;

export const featuredBlogPostsQuery = groq`
  *[_type == "post" && featured == true] | order(publishedAt desc) [0...3] {
    _id,
    title,
    slug,
    description,
    body,
    mainImage {
      image {
        ...,
        asset->
      },
      alt
    },
    author,
    publishedAt,
    tags,
    "categories": categories[]->{
      _id,
      title,
      slug
    },
    featured
  }
`;

export const blogPostBySlugQuery = groq`
  *[_type == "post" && slug.current == $slug][0] {
    _id,
    title,
    slug,
    description,
    body,
    mainImage {
      image {
        ...,
        asset->
      },
      alt
    },
    author,
    publishedAt,
    tags,
    "categories": categories[]->{
      _id,
      title,
      slug
    },
    featured
  }
`;

// About Query
export const aboutQuery = groq`
  *[_type == "about"][0] {
    _id,
    bio,
    skills,
    links,
    philosophy,
    image {
      ...,
      asset->
    },
    headshot {
      ...,
      image {
        ...,
        asset->
      }
    },
    description
  }
`;

// Category Queries
export const categoriesQuery = groq`
  *[_type == "category"] | order(title asc) {
    _id,
    title,
    slug
  }
`;
