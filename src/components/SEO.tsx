import type { Metadata } from 'next';

type SEOProps = {
  title?: string;
  description?: string;
  image?: string;
  url?: string;
};

export function generateSEOMetadata({
  title = 'jFeliWeb Creator Studio',
  description = 'Innovative tools, projects, and experiments from jFeliWeb Creator Studio',
  image = '/og-image.png',
  url = 'https://jfeliweb.com',
}: SEOProps = {}): Metadata {
  return {
    title,
    description,
    openGraph: {
      title,
      description,
      url,
      siteName: 'jFeliWeb Creator Studio',
      images: [
        {
          url: image,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
      locale: 'en_US',
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [image],
    },
  };
}
