import type { Metadata } from 'next';
import { AboutPreview } from '@/components/AboutPreview';
import { BlogCard } from '@/components/BlogCard';
import { HeroWithHeadshot } from '@/components/HeroWithHeadshot';
import { NeonButton } from '@/components/NeonButton';
import { NeonDivider } from '@/components/NeonDivider';
import { NeonHeading } from '@/components/NeonHeading';
import { ProjectCard } from '@/components/ProjectCard';
import { Section } from '@/components/Section';
import { SiteLayout } from '@/components/SiteLayout';
import { getAbout, getBlogPosts, getFeaturedProjects, getSiteSettings } from '@/lib/api';

export async function generateMetadata(): Promise<Metadata> {
  const siteSettings = await getSiteSettings();

  const title = siteSettings?.defaultSeo?.metaTitle || siteSettings?.siteTitle || 'jFeliWeb Creator Studio';
  const description = siteSettings?.defaultSeo?.metaDescription || siteSettings?.siteDescription || 'Building innovative tools, projects, and experiments at the intersection of design and development.';

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      type: 'website',
    },
  };
}

export default async function HomePage() {
  const [siteSettings, about, featuredProjects, blogPosts] = await Promise.all([
    getSiteSettings(),
    getAbout(),
    getFeaturedProjects(),
    getBlogPosts(),
  ]);

  // Get latest 3 blog posts
  const latestPosts = blogPosts.slice(0, 3);

  // Use local headshot image
  const headshot = '/assets/images/Jean-Felisme-1.jpg';
  const headshotAlt = 'Jean Felisme - Profile picture';

  // Extract text from portable text for subtitle
  const getSubtitle = (bio: any): string | undefined => {
    if (!bio) {
      return undefined;
    }
    if (typeof bio === 'string') {
      return bio;
    }
    if (Array.isArray(bio)) {
      const text = bio
        .filter((block: any) => block._type === 'block')
        .map((block: any) =>
          block.children
            ?.filter((child: any) => child._type === 'span')
            .map((child: any) => child.text)
            .join(''),
        )
        .join(' ')
        .trim();
      return text.length > 150 ? `${text.substring(0, 150)}...` : text;
    }
    return undefined;
  };

  const heroTitle = siteSettings?.siteTitle || 'jFeliWeb Creator Studio';
  const heroSubtitle = siteSettings?.siteDescription || getSubtitle(about?.bio);

  return (
    <SiteLayout>
      {/* Hero Section */}
      <HeroWithHeadshot
        title={heroTitle}
        subtitle={heroSubtitle}
        headshot={headshot}
        headshotAlt={headshotAlt}
        primaryCTA={{ label: 'Get In Touch', href: '/contact' }}
        secondaryCTA={{ label: 'View Projects', href: '/projects' }}
        badge="Available for Hire"
        socialLinks={siteSettings?.socialLinks}
      />

      <NeonDivider />

      {/* Featured Projects Section */}
      {featuredProjects.length > 0 && (
        <Section withRadialGlow>
          <div className="mb-12">
            <NeonHeading size="h2" withUnderline className="mb-4 text-center">
              Featured Projects
            </NeonHeading>
            {siteSettings?.siteDescription && (
              <p className="mx-auto max-w-2xl text-center text-white/70">
                {siteSettings.siteDescription}
              </p>
            )}
          </div>
          <div className="mb-8 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {featuredProjects.slice(0, 6).map(project => (
              <ProjectCard key={project._id} project={project} />
            ))}
          </div>
          <div className="text-center">
            <NeonButton href="/projects" variant="secondary">
              View All Projects
            </NeonButton>
          </div>
        </Section>
      )}

      <NeonDivider />

      {/* About Preview Section */}
      {about && (
        <Section withRadialGlow className="bg-blue-grey/20">
          <AboutPreview
            headshot={headshot}
            headshotAlt={headshotAlt}
            description={about.bio}
          />
        </Section>
      )}

      <NeonDivider />

      {/* Blog Preview Section */}
      {latestPosts.length > 0 && (
        <Section withRadialGlow>
          <div className="mb-12">
            <NeonHeading size="h2" withUnderline className="mb-4 text-center">
              Articles & News
            </NeonHeading>
            <p className="mx-auto max-w-2xl text-center text-white/70">
              Latest insights, tutorials, and thoughts on design, development, and creativity
            </p>
          </div>
          <div className="mb-8 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {latestPosts.map(post => (
              <BlogCard key={post._id} post={post} />
            ))}
          </div>
          <div className="text-center">
            <NeonButton href="/blog" variant="secondary">
              Browse Articles
            </NeonButton>
          </div>
        </Section>
      )}
    </SiteLayout>
  );
}
