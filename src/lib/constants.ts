export const SITE_CONFIG = {
  name: 'jFeliWeb Creator Studio',
  description: 'Building innovative tools, projects, and experiments at the intersection of design and development',
  url: process.env.NEXT_PUBLIC_SITE_URL || 'https://jfeliweb.com',
  ogImage: '/og-image.jpg',
};

export const SOCIAL_LINKS = {
  github: 'https://github.com/jfeliweb',
  twitter: 'https://twitter.com/jfeliweb',
  linkedin: 'https://linkedin.com/in/jfeliweb',
};

export const NAV_LINKS = [
  { href: '/', label: 'Home' },
  { href: '/tools', label: 'Tools' },
  { href: '/projects', label: 'Projects' },
  { href: '/labs', label: 'Labs' },
  { href: '/blog', label: 'Blog' },
  { href: '/about', label: 'About' },
] as const;
