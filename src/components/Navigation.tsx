'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import { cn } from '@/lib/utils';

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/projects', label: 'Projects' },
  { href: '/blog', label: 'Blog' },
  // { href: '/labs', label: 'Labs' },
  // { href: '/tools', label: 'Tools' },
];

export function Navigation() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className="bg-header-bg backdrop-blur-frosted sticky top-0 z-50 w-full border-b border-white/10 shadow-soft">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between md:h-20">
          <Link
            href="/"
            className="group flex items-center space-x-2 transition-all duration-300"
          >
            <span className="bg-clip-text font-heading text-2xl font-bold transition-all duration-300 group-hover:drop-shadow-[0_0_15px_rgba(56,253,253,0.8)]">
              jFeliWeb
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden items-center space-x-8 md:flex">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={cn(
                    'relative px-2 py-1 text-sm font-medium transition-all duration-300',
                    isActive
                      ? 'text-aqua drop-shadow-[0_0_10px_rgba(56,253,253,0.6)]'
                      : 'text-white/75 hover:text-aqua/80',
                  )}
                >
                  {link.label}
                  {isActive && (
                    <span className="absolute right-0 bottom-0 left-0 h-0.5 bg-linear-to-r from-aqua to-neonPink shadow-glow-aqua" />
                  )}
                </Link>
              );
            })}
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center gap-4 md:hidden">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="rounded-md p-2 text-white/75 hover:text-aqua focus:ring-2 focus:ring-aqua focus:outline-none"
              aria-label="Toggle menu"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {mobileMenuOpen
                  ? (
                      <path d="M6 18L18 6M6 6l12 12" />
                    )
                  : (
                      <path d="M4 6h16M4 12h16M4 18h16" />
                    )}
              </svg>
            </button>
          </div>

          {/* Desktop Contact Button */}
          <Link
            href="/contact"
            className="bg-button-secondary hover:bg-button-primary hidden rounded-pill px-4 py-2 text-sm font-medium text-white transition-all duration-300 hover:scale-105 hover:shadow-glow-aqua active:scale-95 md:block"
          >
            Contact
          </Link>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="border-t border-white/10 py-4 md:hidden">
            <div className="flex flex-col space-y-4">
              {navLinks.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className={cn(
                      'relative px-4 py-2 text-sm font-medium transition-all duration-300',
                      isActive
                        ? 'text-aqua drop-shadow-[0_0_10px_rgba(56,253,253,0.6)]'
                        : 'text-white/75 hover:text-aqua/80',
                    )}
                  >
                    {link.label}
                    {isActive && (
                      <span className="absolute top-0 bottom-0 left-0 w-1 bg-linear-to-b from-aqua to-neonPink shadow-glow-aqua" />
                    )}
                  </Link>
                );
              })}
              <Link
                href="/contact"
                onClick={() => setMobileMenuOpen(false)}
                className="bg-button-secondary hover:bg-button-primary rounded-pill px-4 py-2 text-center text-sm font-medium text-white transition-all duration-300 hover:scale-105 hover:shadow-glow-aqua active:scale-95"
              >
                Contact
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
