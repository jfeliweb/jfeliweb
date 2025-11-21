# jFeliWeb Creator Studio

A modern portfolio and creator studio website built with Next.js 16+, Tailwind CSS 4, TypeScript, and Sanity CMS. Featuring the Miami Neon design system with vibrant gradients, neon glows, and smooth animations.

## Features

- ⚡ **Next.js 16+** with App Router
- 🔥 **TypeScript** for type safety
- 💎 **Tailwind CSS 4** with custom Miami Neon design tokens
- 🎨 **Miami Neon Design System** - Custom neon gradients, glows, and animations
- 📝 **Sanity CMS** for content management
- 🖼️ **Image Optimization** with Next.js Image and Sanity Image URLs
- 📱 **Fully Responsive** mobile-first design
- ⚡ **Server Components** for optimal performance
- 🎭 **Smooth Animations** and micro-interactions
- 🔍 **SEO Optimized** with metadata and Open Graph tags

## Tech Stack

- **Framework**: Next.js 16+ (App Router)
- **Styling**: Tailwind CSS 4
- **Language**: TypeScript
- **CMS**: Sanity CMS
- **Deployment**: Vercel (recommended)

## Getting Started

### Prerequisites

- Node.js 20+ and npm
- A Sanity account (free tier available)

### Installation

1. Clone the repository:
```shell
git clone <repository-url>
cd jfeliweb-site
```

2. Install dependencies:
```shell
npm install
```

3. Set up environment variables:
Create a `.env.local` file in the root directory:
```env
NEXT_PUBLIC_SANITY_PROJECT_ID=your_project_id
NEXT_PUBLIC_SANITY_DATASET=production
SANITY_API_TOKEN=your_api_token
```

4. Run the development server:
```shell
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to see the site.

## Project Structure

```
jfeliweb-site/
├── public/                          # Static assets
│   ├── assets/
│   │   └── images/                  # Image assets
│   └── favicon.ico                  # Favicon files
│
├── src/
│   ├── app/                         # Next.js App Router pages
│   │   ├── layout.tsx              # Root layout
│   │   ├── page.tsx                # Home page
│   │   ├── about/
│   │   │   └── page.tsx           # About page
│   │   ├── blog/
│   │   │   ├── page.tsx           # Blog listing
│   │   │   └── [slug]/
│   │   │       └── page.tsx       # Blog post detail
│   │   ├── contact/
│   │   │   └── page.tsx           # Contact page
│   │   ├── projects/
│   │   │   ├── page.tsx           # Projects listing
│   │   │   └── [slug]/
│   │   │       └── page.tsx       # Project detail
│   │   ├── labs/
│   │   │   ├── page.tsx           # Labs listing
│   │   │   └── [slug]/
│   │   │       └── page.tsx       # Lab detail
│   │   ├── tools/
│   │   │   ├── page.tsx           # Tools listing
│   │   │   └── [slug]/
│   │   │       └── page.tsx       # Tool detail
│   │   ├── studio/
│   │   │   └── [[...tool]]/       # Sanity Studio
│   │   │       └── page.tsx
│   │   ├── not-found.tsx          # 404 page
│   │   ├── robots.ts              # Robots.txt
│   │   └── sitemap.ts             # Sitemap generation
│   │
│   ├── components/                  # React components
│   │   ├── Navigation.tsx         # Main navigation
│   │   ├── Footer.tsx             # Site footer
│   │   ├── SiteLayout.tsx         # Layout wrapper
│   │   ├── Hero.tsx               # Hero section
│   │   ├── HeroWithHeadshot.tsx   # Hero with profile image
│   │   ├── AboutPreview.tsx       # About preview component
│   │   ├── BlogCard.tsx           # Blog post card
│   │   ├── ProjectCard.tsx        # Project card
│   │   ├── ToolCard.tsx           # Tool card
│   │   ├── CategoryTag.tsx        # Category/tag component
│   │   ├── NeonButton.tsx        # Neon-styled button
│   │   ├── NeonHeading.tsx        # Neon-styled heading
│   │   ├── NeonDivider.tsx        # Section divider
│   │   ├── NeonGlowPanel.tsx      # Glowing panel component
│   │   ├── PortableText.tsx       # Sanity portable text renderer
│   │   ├── SanityImage.tsx        # Sanity image component
│   │   ├── Section.tsx             # Section wrapper
│   │   ├── ScrollToTop.tsx        # Scroll to top button
│   │   └── SEO.tsx                # SEO metadata helper
│   │
│   ├── lib/                        # Utility libraries
│   │   ├── sanity.client.ts       # Sanity client configuration
│   │   ├── image.ts               # Sanity image URL builder
│   │   ├── queries.ts             # GROQ queries for Sanity
│   │   ├── api.ts                 # API functions for fetching data
│   │   ├── mock-data.ts           # Mock data (fallback)
│   │   └── utils.ts               # Utility functions
│   │
│   ├── types/                      # TypeScript type definitions
│   │   └── sanity.ts              # Sanity content types
│   │
│   ├── hooks/                      # React hooks
│   │   ├── useToolData.ts         # Hook for tools data
│   │   ├── useProjects.ts         # Hook for projects data
│   │   └── useBlogPosts.ts        # Hook for blog posts data
│   │
│   ├── styles/                     # Global styles
│   │   └── global.css             # Tailwind CSS and design tokens
│   │
│   └── sanity/                     # Sanity Studio configuration
│       ├── schemaTypes/           # Sanity schema definitions
│       ├── lib/
│       │   ├── client.ts          # Sanity client
│       │   ├── image.ts           # Image utilities
│       │   └── live.ts            # Live preview
│       └── structure.ts           # Studio structure
│
├── cursor.json                     # Design system tokens (Miami Neon)
├── tailwind.config.ts              # Tailwind configuration
├── next.config.ts                  # Next.js configuration
├── tsconfig.json                   # TypeScript configuration
└── package.json                    # Dependencies and scripts
```

## Pages

### Home Page (`/`)
- Hero section with headshot and bio
- Featured projects showcase
- About preview section
- Latest blog posts

### About Page (`/about`)
- Full biography
- Skills showcase
- Social links
- Philosophy section

### Projects Page (`/projects`)
- Grid layout of all projects
- Filter by technologies/tags
- Individual project detail pages

### Blog Page (`/blog`)
- List of all blog posts
- Pagination support
- Individual blog post pages with full content

### Labs Page (`/labs`)
- Experimental projects and prototypes
- Work-in-progress showcase

### Tools Page (`/tools`)
- Collection of tools and applications
- Category filtering
- Tool detail pages

### Contact Page (`/contact`)
- Contact form
- Social media links

## Sanity CMS Setup

### 1. Create a Sanity Project

1. Go to [sanity.io](https://www.sanity.io) and create an account
2. Create a new project
3. Note your Project ID and Dataset name

### 2. Configure Environment Variables

Add to `.env.local`:
```env
NEXT_PUBLIC_SANITY_PROJECT_ID=your_project_id
NEXT_PUBLIC_SANITY_DATASET=production
SANITY_API_TOKEN=your_api_token
```

### 3. Access Sanity Studio

The Sanity Studio is available at `/studio` when running the development server. You can manage all content types there:

- **Projects**: Portfolio items with images, descriptions, and links
- **Blog Posts**: Articles with rich text content
- **Tools**: Tools and applications
- **Labs**: Experimental projects
- **About**: Site owner information
- **Site Settings**: Global site configuration

### 4. Content Types

The site expects the following Sanity document types:

- `project` - Portfolio projects
- `post` - Blog posts
- `tool` - Tools and applications
- `lab` - Experimental projects
- `about` - About page content
- `siteSettings` - Global site settings
- `category` - Categories for organizing content

See `src/types/sanity.ts` for the complete type definitions.

## Miami Neon Design System

The site uses a custom Miami Neon design system defined in `cursor.json`. Key features:

### Colors
- **Neon Pink**: `#fc3fd9`
- **Aqua**: `#38fdfd`
- **Navy Black**: `#0f172a` (background)
- **Gradients**: Custom button and card gradients

### Typography
- **Headings**: Sora, Lexend (fallback)
- **Body**: Inter
- **Mono**: JetBrains Mono

### Components
All components follow the design system rules:
- Neon glow effects on hover
- Gradient backgrounds for cards
- Smooth transitions and animations
- Backdrop blur effects

### Design Tokens

Design tokens are defined in:
- `cursor.json` - Design system specification
- `src/styles/global.css` - CSS custom properties
- `tailwind.config.ts` - Tailwind theme extensions

## Development

### Available Scripts

```shell
# Development
npm run dev              # Start development server

# Build
npm run build           # Create production build
npm run start           # Start production server

# Code Quality
npm run lint            # Run ESLint
npm run lint:fix        # Fix ESLint errors
npm run check:types     # TypeScript type checking
npm run check:deps      # Check for unused dependencies

# Testing (if configured)
npm run test            # Run unit tests
npm run test:e2e        # Run E2E tests
```

### Code Style

- **TypeScript**: Strict mode enabled
- **ESLint**: Next.js recommended rules + custom config
- **Prettier**: Code formatting
- **Conventional Commits**: Commit message format

## Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Import the repository in Vercel
3. Add environment variables:
   - `NEXT_PUBLIC_SANITY_PROJECT_ID`
   - `NEXT_PUBLIC_SANITY_DATASET`
   - `SANITY_API_TOKEN`
4. Deploy!

### Other Platforms

The site can be deployed to any platform that supports Next.js:
- Netlify
- AWS Amplify
- Railway
- Any Node.js hosting

Make sure to set the required environment variables in your hosting platform.

## Content Management

### Adding New Content

1. Access Sanity Studio at `/studio` (in development) or your deployed Studio URL
2. Create new documents for the content type you want
3. Fill in all required fields
4. Publish the document

### Image Management

- Images are stored in Sanity's CDN
- Use the image picker in Sanity Studio
- Images are automatically optimized via Sanity Image URLs
- See `src/lib/image.ts` for image URL building utilities

### Rich Text Content

The site uses Sanity's Portable Text for rich content:
- Supports headings, paragraphs, lists
- Inline formatting (bold, italic, code)
- Links and embedded images
- Custom code blocks

See `src/components/PortableText.tsx` for the renderer implementation.

## Customization

### Design System

To modify the design system:
1. Update `cursor.json` with new tokens
2. Update `src/styles/global.css` with CSS variables
3. Update `tailwind.config.ts` if needed

### Components

All components are in `src/components/`. They follow the design system and can be customized as needed.

### Pages

Pages are in `src/app/`. Each page is a server component that fetches data from Sanity.

## Troubleshooting

### Sanity Connection Issues

- Verify environment variables are set correctly
- Check that your Sanity project is active
- Ensure API token has read permissions

### Build Errors

- Run `npm run check:types` to check for TypeScript errors
- Run `npm run lint` to check for linting errors
- Clear `.next` folder and rebuild

### Image Issues

- Verify Sanity image URLs are correct
- Check that images are published in Sanity
- Ensure image assets are properly referenced

## License

Licensed under the MIT License, Copyright © 2025

---

Built with ❤️ by jFeliWeb Creator Studio
