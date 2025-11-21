import Link from 'next/link';
import { SiteLayout } from '@/components/SiteLayout';

export default function NotFound() {
  return (
    <SiteLayout>
      <div className="flex min-h-screen items-center justify-center px-6">
        <div className="text-center">
          <h1 className="bg-button-primary mb-4 bg-clip-text font-heading text-6xl font-bold text-transparent md:text-8xl">
            404
          </h1>
          <h2 className="mb-4 font-heading text-2xl font-semibold text-white md:text-3xl">
            Page Not Found
          </h2>
          <p className="mx-auto mb-8 max-w-md text-white/70">
            The page you're looking for doesn't exist or has been moved.
          </p>
          <Link
            href="/"
            className="bg-button-primary inline-block rounded-pill px-8 py-4 font-semibold text-navy-black shadow-glow-aqua transition-all duration-300 hover:shadow-glow-pink"
          >
            Go Home
          </Link>
        </div>
      </div>
    </SiteLayout>
  );
}
