#!/usr/bin/env node

/**
 * Workaround script for Netlify deployment issue
 * The @netlify/plugin-nextjs expects .next/server/proxy.js but Next.js 16
 * may not generate it with that exact name. This script ensures the file exists.
 */

const fs = require('node:fs');
const path = require('node:path');

const proxyJsPath = path.join(process.cwd(), '.next', 'server', 'proxy.js');
const serverDir = path.dirname(proxyJsPath);

// Ensure .next/server directory exists
if (!fs.existsSync(serverDir)) {
  console.log(`Creating directory: ${serverDir}`);
  fs.mkdirSync(serverDir, { recursive: true });
}

// Check if proxy.js already exists
if (fs.existsSync(proxyJsPath)) {
  console.log('✓ proxy.js already exists');
  process.exit(0);
}

// Try to find the actual middleware file
// In Next.js, middleware might be compiled to different names
// Check common patterns: middleware.js, src-proxy.js, or files matching the source name
const possibleNames = [
  'middleware.js',
  'src-proxy.js',
  'proxy.js', // In case it exists but in a different location
];

// Also search for any .js files in the server directory that might be middleware
let foundFile = null;

// First, try the common names
for (const name of possibleNames) {
  const filePath = path.join(serverDir, name);
  if (fs.existsSync(filePath)) {
    foundFile = filePath;
    console.log(`Found middleware file: ${name}`);
    break;
  }
}

// If not found, search for files that might be the compiled middleware
if (!foundFile && fs.existsSync(serverDir)) {
  const files = fs.readdirSync(serverDir);
  // Look for files that might be middleware (contain 'middleware' or 'proxy' in name)
  const middlewareFiles = files.filter(file =>
    file.includes('middleware') || file.includes('proxy'),
  ).filter(file => file.endsWith('.js') && !file.endsWith('.map'));

  if (middlewareFiles.length > 0) {
    foundFile = path.join(serverDir, middlewareFiles[0]);
    console.log(`Found potential middleware file: ${middlewareFiles[0]}`);
  }
}

if (foundFile) {
  // Copy the found file to proxy.js
  fs.copyFileSync(foundFile, proxyJsPath);
  console.log(`✓ Created proxy.js from ${path.basename(foundFile)}`);
} else {
  // If no middleware file found, create an empty placeholder
  // This is a workaround - the plugin expects the file to exist
  console.log('⚠ No middleware file found, creating empty proxy.js placeholder');
  fs.writeFileSync(proxyJsPath, '// Placeholder file for Netlify plugin compatibility\n');
}

process.exit(0);
