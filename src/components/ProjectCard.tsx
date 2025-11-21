import type { Project } from '@/types/sanity';
import Image from 'next/image';
import Link from 'next/link';
import { urlFor } from '@/lib/image';
import { CategoryTag } from './CategoryTag';

type ProjectCardProps = {
  project: Project;
};

export function ProjectCard({ project }: ProjectCardProps) {
  // mainImage can be imageWithAlt object { image, alt } or direct SanityImage
  const image = project.mainImage && 'image' in project.mainImage
    ? project.mainImage.image
    : project.mainImage || project.image;
  const imageUrl = image ? urlFor(image).width(400).height(250).url() : null;

  return (
    <Link href={`/projects/${project.slug.current}`}>
      <article className="group bg-card-gradient backdrop-blur-surface relative rounded-lg border border-white/6 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-aqua/30 hover:shadow-glow-aqua">
        {imageUrl && (
          <div className="relative mb-4 h-48 w-full overflow-hidden rounded-md">
            <Image
              src={imageUrl}
              alt={project.title}
              fill
              className="object-cover transition-transform duration-300 group-hover:scale-105"
            />
          </div>
        )}

        <div className="mb-2 flex items-start justify-between">
          <h3 className="font-heading text-xl font-semibold text-white transition-colors group-hover:text-aqua">
            {project.title}
          </h3>
        </div>

        {project.shortDescription && (
          <p className="mb-4 line-clamp-2 text-sm text-white/70">
            {project.shortDescription}
          </p>
        )}

        {project.technologies && project.technologies.length > 0 && (
          <div className="mb-2 flex flex-wrap items-center gap-2">
            {project.technologies.slice(0, 3).map(tech => (
              <CategoryTag key={tech} label={tech} />
            ))}
          </div>
        )}

        {project.tags && project.tags.length > 0 && (
          <div className="flex flex-wrap items-center gap-2">
            {project.tags.slice(0, 2).map(tag => (
              <CategoryTag key={tag} label={tag} />
            ))}
          </div>
        )}
      </article>
    </Link>
  );
}
