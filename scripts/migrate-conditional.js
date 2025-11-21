#!/usr/bin/env node

/**
 * Conditionally runs database migrations only if DATABASE_URL is available and valid.
 * This prevents build failures on platforms like Vercel where the database
 * may not be accessible during the build phase.
 */

const { execSync } = require('node:child_process');

// Check if we're on Vercel
const isVercel = !!process.env.VERCEL;

// Check if DATABASE_URL points to localhost (which won't work during builds)
const databaseUrl = process.env.DATABASE_URL || '';
const isLocalhost = databaseUrl.includes('127.0.0.1')
  || databaseUrl.includes('localhost')
  || databaseUrl.startsWith('postgresql://localhost')
  || databaseUrl.startsWith('postgres://localhost');

// Skip migrations if:
// 1. We're on Vercel (database not accessible during build)
// 2. DATABASE_URL is not set
// 3. DATABASE_URL points to localhost (won't work during build)
if (isVercel || !databaseUrl || isLocalhost) {
  if (isVercel) {
    console.log('Skipping migrations: Running on Vercel (database not accessible during build)');
  } else if (!databaseUrl) {
    console.log('Skipping migrations: DATABASE_URL not available');
  } else if (isLocalhost) {
    console.log('Skipping migrations: DATABASE_URL points to localhost (not accessible during build)');
  }
  console.log('This is normal for build environments where the database is not accessible.');
  process.exit(0);
}

// Run migrations if we have a valid, non-localhost DATABASE_URL
console.log('DATABASE_URL found, running migrations...');
try {
  execSync('drizzle-kit migrate', { stdio: 'inherit' });
  console.log('Migrations completed successfully.');
} catch (error) {
  console.error('Migration failed:', error.message);
  process.exit(1);
}
