import { Analytics } from '@vercel/analytics/next';
import { SpeedInsights } from '@vercel/speed-insights/next';
import { setRequestLocale } from 'next-intl/server';

export default async function Layout(props: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await props.params;
  setRequestLocale(locale);

  // Marketing layout - children use SiteLayout which provides its own navigation
  return (
    <>
      {props.children}
      <Analytics />
      <SpeedInsights />
    </>
  );
}
