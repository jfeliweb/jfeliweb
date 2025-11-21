import type { Metadata } from 'next';
import { NeonHeading } from '@/components/NeonHeading';
import { ProjectCard } from '@/components/ProjectCard';
import { Section } from '@/components/Section';
import { SiteLayout } from '@/components/SiteLayout';
import { getProjects } from '@/lib/api';

export const metadata: Metadata = {
  title: 'Projects | jFeliWeb Creator Studio',
  description: 'A showcase of past work and personal development projects. Explore our portfolio of creative solutions.',
  openGraph: {
    title: 'Projects | jFeliWeb Creator Studio',
    description: 'A showcase of past work and personal development projects',
    type: 'website',
  },
};

export default async function ProjectsPage() {
  const projects = await getProjects();

  return (
    <SiteLayout>
      <Section withRadialGlow>
        <div className="mb-12 text-center">
          <NeonHeading size="h1" withUnderline className="mb-4">
            Projects
          </NeonHeading>
          <p className="mx-auto max-w-2xl text-xl text-white/70">
            A showcase of past work and personal development projects.
          </p>
        </div>

        {projects.length > 0
          ? (
              <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
                {projects.map(project => (
                  <ProjectCard key={project._id} project={project} />
                ))}
              </div>
            )
          : (
              <div className="py-12 text-center">
                <p className="text-lg text-white/70">No projects available at the moment.</p>
                <p className="mt-2 text-sm text-white/50">Check back soon for new additions!</p>
              </div>
            )}
      </Section>
    </SiteLayout>
  );
}
