export type SanityImage = {
  _type: 'image';
  asset: {
    _ref: string;
    _type: 'reference';
  };
  alt?: string;
};

export type Category = {
  _id: string;
  title: string;
  slug: {
    current: string;
  };
};

export type Tool = {
  _id: string;
  title: string;
  slug: {
    current: string;
  };
  description: any; // Portable text
  shortDescription?: string;
  category?: Category;
  featured?: boolean;
  image?: SanityImage;
  url?: string;
  tags?: string[];
  createdAt?: string;
  updatedAt?: string;
};

export type Project = {
  _id: string;
  title: string;
  slug: {
    current: string;
  };
  description: any; // Portable text
  body?: any; // Portable text (main content)
  shortDescription?: string;
  featured?: boolean;
  mainImage?: {
    image: SanityImage;
    alt?: string;
  } | SanityImage; // Can be imageWithAlt object or direct image
  image?: SanityImage; // Legacy support
  gallery?: SanityImage[];
  liveUrl?: string;
  githubRepo?: string;
  url?: string; // Legacy support
  githubUrl?: string; // Legacy support
  tags?: string[];
  technologies?: string[];
  order?: number;
  createdAt?: string;
  updatedAt?: string;
};

export type Lab = {
  _id: string;
  title: string;
  slug: {
    current: string;
  };
  description: any; // Portable text
  shortDescription?: string;
  featured?: boolean;
  image?: SanityImage;
  url?: string;
  tags?: string[];
  status?: 'experimental' | 'wip' | 'completed';
  createdAt?: string;
  updatedAt?: string;
};

export type BlogPost = {
  _id: string;
  title: string;
  slug: {
    current: string;
  };
  description?: string;
  body: any; // Portable text
  featured?: boolean;
  mainImage?: {
    image: SanityImage;
    alt?: string;
  };
  author?: string;
  publishedAt: string;
  tags?: (string | { _key?: string; _id?: string; title: string; slug?: { current: string } })[];
  categories?: Category[];
};

export type AboutContent = {
  _id: string;
  bio: any; // Portable text
  description?: string;
  skills?: string[];
  links?: {
    label: string;
    url: string;
    icon?: string;
  }[];
  philosophy?: any; // Portable text
  headshot?: {
    image: SanityImage;
    alt?: string;
  } | SanityImage; // Can be imageWithAlt object or direct image
  headshotAlt?: string;
  image?: SanityImage; // Legacy support
};
