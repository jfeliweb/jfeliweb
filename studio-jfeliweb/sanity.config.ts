import { visionTool } from '@sanity/vision';
import { defineConfig } from 'sanity';
import { schemaTypes } from './schemaTypes';

export default defineConfig({
  name: 'default',
  title: 'jFeliWeb',

  projectId: 'et7vhc6j',
  dataset: 'production',

  plugins: [visionTool()],

  schema: {
    types: schemaTypes,
  },
});
