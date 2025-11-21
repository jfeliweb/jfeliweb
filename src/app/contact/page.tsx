'use client';

import { useState } from 'react';
import { NeonButton } from '@/components/NeonButton';
import { NeonGlowPanel } from '@/components/NeonGlowPanel';
import { NeonHeading } from '@/components/NeonHeading';
import { Section } from '@/components/Section';
import { SiteLayout } from '@/components/SiteLayout';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Form submission logic will be added later
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <SiteLayout>
      <Section withRadialGlow>
        <div className="mx-auto max-w-2xl">
          <div className="mb-12 text-center">
            <NeonHeading size="h1" withUnderline className="mb-4">
              Get in Touch
            </NeonHeading>
            <p className="text-xl text-white/70">
              Have a question or want to collaborate? Send us a message.
            </p>
          </div>

          <NeonGlowPanel>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="mb-2 block text-sm font-medium text-white/80">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-white placeholder-white/40 transition-all focus:border-aqua focus:ring-2 focus:ring-aqua/20 focus:outline-none"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label htmlFor="email" className="mb-2 block text-sm font-medium text-white/80">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-white placeholder-white/40 transition-all focus:border-aqua focus:ring-2 focus:ring-aqua/20 focus:outline-none"
                  placeholder="your.email@example.com"
                />
              </div>

              <div>
                <label htmlFor="message" className="mb-2 block text-sm font-medium text-white/80">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="w-full resize-none rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-white placeholder-white/40 transition-all focus:border-aqua focus:ring-2 focus:ring-aqua/20 focus:outline-none"
                  placeholder="Your message..."
                />
              </div>

              <NeonButton type="submit" variant="primary" className="w-full">
                Send Message
              </NeonButton>
            </form>
          </NeonGlowPanel>

          <div className="mt-12 text-center">
            <h2 className="mb-6 font-heading text-2xl font-bold text-white">Or connect with us</h2>
            <div className="flex flex-wrap justify-center gap-4">
              <NeonButton
                href="https://github.com/jfeliweb"
                variant="secondary"
                external
              >
                GitHub
              </NeonButton>
              <NeonButton
                href="https://twitter.com/jfeliweb"
                variant="secondary"
                external
              >
                Twitter
              </NeonButton>
              <NeonButton
                href="https://linkedin.com/in/jfeliweb"
                variant="secondary"
                external
              >
                LinkedIn
              </NeonButton>
            </div>
          </div>
        </div>
      </Section>
    </SiteLayout>
  );
}
