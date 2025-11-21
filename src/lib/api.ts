import type { AboutContent, BlogPost, Category, Lab, Project, Tool } from '@/types/sanity';
import {
  aboutQuery,
  blogPostBySlugQuery,
  blogPostsQuery,
  categoriesQuery,
  featuredBlogPostsQuery,
  featuredProjectsQuery,
  featuredToolsQuery,
  labBySlugQuery,
  labsQuery,
  projectBySlugQuery,
  projectsQuery,
  siteSettingsQuery,
  toolBySlugQuery,
  toolsQuery,
} from './queries';
import { client } from './sanity.client';

// Tool API
export async function getTools(): Promise<Tool[]> {
  try {
    const data = await client.fetch<Tool[]>(toolsQuery);
    return Array.isArray(data) ? data : [];
  } catch (error) {
    console.error('Error fetching tools:', error);
    return [];
  }
}

export async function getFeaturedTools(): Promise<Tool[]> {
  try {
    const data = await client.fetch<Tool[]>(featuredToolsQuery);
    return Array.isArray(data) ? data : [];
  } catch (error) {
    console.error('Error fetching featured tools:', error);
    return [];
  }
}

export async function getToolBySlug(slug: string): Promise<Tool | null> {
  try {
    const data = await client.fetch<Tool>(toolBySlugQuery, { slug });
    return data && !Array.isArray(data) ? data : null;
  } catch (error) {
    console.error('Error fetching tool by slug:', error);
    return null;
  }
}

// Project API
export async function getProjects(): Promise<Project[]> {
  try {
    const data = await client.fetch<Project[]>(projectsQuery);
    return Array.isArray(data) ? data : [];
  } catch (error) {
    console.error('Error fetching projects:', error);
    return [];
  }
}

export async function getFeaturedProjects(): Promise<Project[]> {
  try {
    const data = await client.fetch<Project[]>(featuredProjectsQuery);
    return Array.isArray(data) ? data : [];
  } catch (error) {
    console.error('Error fetching featured projects:', error);
    return [];
  }
}

export async function getProjectBySlug(slug: string): Promise<Project | null> {
  try {
    const data = await client.fetch<Project>(projectBySlugQuery, { slug });
    return data && !Array.isArray(data) ? data : null;
  } catch (error) {
    console.error('Error fetching project by slug:', error);
    return null;
  }
}

// Lab API
export async function getLabs(): Promise<Lab[]> {
  try {
    const data = await client.fetch<Lab[]>(labsQuery);
    return Array.isArray(data) ? data : [];
  } catch (error) {
    console.error('Error fetching labs:', error);
    return [];
  }
}

export async function getLabBySlug(slug: string): Promise<Lab | null> {
  try {
    const data = await client.fetch<Lab>(labBySlugQuery, { slug });
    return data && !Array.isArray(data) ? data : null;
  } catch (error) {
    console.error('Error fetching lab by slug:', error);
    return null;
  }
}

// Blog API
export async function getBlogPosts(): Promise<BlogPost[]> {
  try {
    const data = await client.fetch<BlogPost[]>(blogPostsQuery);
    return Array.isArray(data) ? data : [];
  } catch (error) {
    console.error('Error fetching blog posts:', error);
    return [];
  }
}

export async function getFeaturedBlogPosts(): Promise<BlogPost[]> {
  try {
    const data = await client.fetch<BlogPost[]>(featuredBlogPostsQuery);
    return Array.isArray(data) ? data : [];
  } catch (error) {
    console.error('Error fetching featured blog posts:', error);
    return [];
  }
}

export async function getBlogPostBySlug(slug: string): Promise<BlogPost | null> {
  try {
    const data = await client.fetch<BlogPost>(blogPostBySlugQuery, { slug });
    return data && !Array.isArray(data) ? data : null;
  } catch (error) {
    console.error('Error fetching blog post by slug:', error);
    return null;
  }
}

// About API
export async function getAbout(): Promise<AboutContent | null> {
  try {
    const data = await client.fetch<AboutContent>(aboutQuery);
    return data && !Array.isArray(data) ? data : null;
  } catch (error) {
    console.error('Error fetching about content:', error);
    return null;
  }
}

// Site Settings API
export async function getSiteSettings() {
  try {
    const data = await client.fetch(siteSettingsQuery);
    return data || null;
  } catch (error) {
    console.error('Error fetching site settings:', error);
    return null;
  }
}

// Category API
export async function getCategories(): Promise<Category[]> {
  try {
    const data = await client.fetch<Category[]>(categoriesQuery);
    return Array.isArray(data) ? data : [];
  } catch (error) {
    console.error('Error fetching categories:', error);
    return [];
  }
}
