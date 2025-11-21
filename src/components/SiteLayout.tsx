import { Footer } from './Footer';
import { Navigation } from './Navigation';
import { ScrollToTop } from './ScrollToTop';

export function SiteLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-screen flex-col bg-navy-black text-slate-light">
      <Navigation />
      <main className="flex-1">{children}</main>
      <Footer />
      <ScrollToTop />
    </div>
  );
}
