import { about } from './about';
import { category } from './category';
// Import shared object schemas
import { imageWithAlt } from './imageWithAlt';
import { portableText } from './portableText';

import { post } from './post';
// Import document schemas
import { project } from './project';
import { seo } from './seo';
import { siteSettings } from './siteSettings';
import { tag } from './tag';

// Re-export for external use
export { about, category, imageWithAlt, portableText, post, project, seo, siteSettings, tag };

// Export all schemas as an array for Sanity config
export const schemaTypes = [
  // Shared objects (must come before documents that reference them)
  imageWithAlt,
  tag,
  seo,
  portableText,
  // Documents
  project,
  post,
  category,
  siteSettings,
  about,
];
