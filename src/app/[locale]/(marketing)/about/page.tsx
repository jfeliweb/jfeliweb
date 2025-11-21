import type { Metadata } from 'next';
import { NeonButton } from '@/components/NeonButton';
import { NeonGlowPanel } from '@/components/NeonGlowPanel';
import { NeonHeading } from '@/components/NeonHeading';
import { PortableText } from '@/components/PortableText';
import { SanityImage } from '@/components/SanityImage';
import { Section } from '@/components/Section';
import { SiteLayout } from '@/components/SiteLayout';
import { getAbout } from '@/lib/api';

export const metadata: Metadata = {
  title: 'About | jFeliWeb Creator Studio',
  description: 'Learn more about jFeliWeb Creator Studio, our mission, skills, and philosophy.',
  openGraph: {
    title: 'About | jFeliWeb Creator Studio',
    description: 'Learn more about jFeliWeb Creator Studio',
    type: 'website',
  },
};

export default async function AboutPage() {
  const about = await getAbout();

  return (
    <SiteLayout>
      <Section withRadialGlow>
        <div className="mx-auto max-w-4xl">
          <div className="mb-12 text-center">
            <NeonHeading size="h1" withUnderline className="mb-4">
              About jFeliWeb
            </NeonHeading>
          </div>

          {about
            ? (
                <>
                  <div className="mb-12 grid grid-cols-1 gap-8 md:grid-cols-3">
                    {(() => {
                      // Handle both headshot (imageWithAlt) and image (legacy)
                      const imageData = about.headshot
                        ? (typeof about.headshot === 'object' && 'image' in about.headshot
                            ? about.headshot.image
                            : about.headshot)
                        : about.image;
                      const imageAlt = about.headshot && typeof about.headshot === 'object' && 'alt' in about.headshot
                        ? about.headshot.alt || 'jFeliWeb Founder'
                        : 'jFeliWeb Founder';

                      return imageData
                        ? (
                            <div className="relative h-64 w-full overflow-hidden rounded-lg border border-white/10 shadow-soft md:h-auto md:min-h-[400px]">
                              <SanityImage
                                image={imageData}
                                alt={imageAlt}
                                fill
                              />
                            </div>
                          )
                        : null;
                    })()}
                    <div className="md:col-span-2">
                      <NeonGlowPanel>
                        <PortableText content={about.bio} />
                      </NeonGlowPanel>
                    </div>
                  </div>

                  {about.skills && about.skills.length > 0 && (
                    <NeonGlowPanel className="mb-8">
                      <h2 className="mb-4 font-heading text-2xl font-bold text-white">Skills</h2>
                      <div className="flex flex-wrap gap-2">
                        {about.skills.map(skill => (
                          <span
                            key={skill}
                            className="rounded-pill border border-white/10 bg-white/7 px-4 py-2 text-sm text-slate-light transition-colors hover:border-aqua/30"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </NeonGlowPanel>
                  )}

                  {about.links && about.links.length > 0 && (
                    <NeonGlowPanel className="mb-8">
                      <h2 className="mb-4 font-heading text-2xl font-bold text-white">Connect</h2>
                      <div className="flex flex-wrap gap-4">
                        {about.links.map(link => (
                          <NeonButton
                            key={link.url}
                            href={link.url}
                            variant="secondary"
                            external
                          >
                            {link.label}
                          </NeonButton>
                        ))}
                      </div>
                    </NeonGlowPanel>
                  )}

                  {about.philosophy && (
                    <NeonGlowPanel>
                      <h2 className="mb-4 font-heading text-2xl font-bold text-white">Philosophy</h2>
                      <PortableText content={about.philosophy} />
                    </NeonGlowPanel>
                  )}
                </>
              )
            : (
                <div className="py-12 text-center">
                  <p className="text-lg text-white/70">About content coming soon.</p>
                </div>
              )}
        </div>
      </Section>
    </SiteLayout>
  );
}
