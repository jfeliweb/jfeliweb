import type { Metadata } from 'next';
import { SiteLayout } from '@/components/SiteLayout';

export const metadata: Metadata = {
  title: 'jFeliWeb Creator Studio',
  description: 'Innovative tools, projects, and experiments from jFeliWeb Creator Studio',
  icons: [
    {
      rel: 'apple-touch-icon',
      url: '/apple-touch-icon.png',
    },
    {
      rel: 'icon',
      type: 'image/png',
      sizes: '32x32',
      url: '/favicon-32x32.png',
    },
    {
      rel: 'icon',
      type: 'image/png',
      sizes: '16x16',
      url: '/favicon-16x16.png',
    },
    {
      rel: 'icon',
      url: '/favicon.ico',
    },
  ],
};

export default function SiteRootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <SiteLayout>{children}</SiteLayout>;
}
