#!/usr/bin/env node

/**
 * Conditionally runs database migrations only if DATABASE_URL is available.
 * This prevents build failures on platforms like Vercel where the database
 * may not be accessible during the build phase.
 */

const { execSync } = require('node:child_process');

if (process.env.DATABASE_URL) {
  console.log('DATABASE_URL found, running migrations...');
  try {
    execSync('drizzle-kit migrate', { stdio: 'inherit' });
    console.log('Migrations completed successfully.');
  } catch (error) {
    console.error('Migration failed:', error.message);
    process.exit(1);
  }
} else {
  console.log('Skipping migrations: DATABASE_URL not available');
  console.log('This is normal for build environments where the database is not accessible.');
}
