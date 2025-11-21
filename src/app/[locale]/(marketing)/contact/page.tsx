'use client';

import { useLocale } from 'next-intl';
import { useState } from 'react';

import { NeonButton } from '@/components/NeonButton';
import { NeonGlowPanel } from '@/components/NeonGlowPanel';
import { NeonHeading } from '@/components/NeonHeading';
import { Section } from '@/components/Section';
import { SiteLayout } from '@/components/SiteLayout';

export default function ContactPage() {
  const locale = useLocale();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
    website: '', // Honeypot field
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{
    type: 'success' | 'error' | null;
    message: string;
  }>({ type: null, message: '' });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Check honeypot field on client side
    if (formData.website) {
      setSubmitStatus({
        type: 'error',
        message: 'Spam detected',
      });
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus({ type: null, message: '' });

    try {
      const response = await fetch(`/${locale}/api/contact`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          message: formData.message,
          website: formData.website,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Failed to send message');
      }

      setSubmitStatus({
        type: 'success',
        message: 'Message sent successfully! I\'ll get back to you soon.',
      });

      // Reset form
      setFormData({
        name: '',
        email: '',
        message: '',
        website: '',
      });
    } catch (error) {
      setSubmitStatus({
        type: 'error',
        message: error instanceof Error ? error.message : 'Failed to send message. Please try again.',
      });
    } finally {
      setIsSubmitting(false);
    }
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
              Have a question or want to collaborate? Send me a message.
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

              {/* Honeypot field - hidden from users but visible to bots */}
              <div
                style={{
                  position: 'absolute',
                  left: '-9999px',
                  opacity: 0,
                  pointerEvents: 'none',
                }}
                aria-hidden="true"
              >
                <label htmlFor="website">Website</label>
                <input
                  type="text"
                  id="website"
                  name="website"
                  value={formData.website}
                  onChange={handleChange}
                  tabIndex={-1}
                  autoComplete="off"
                />
              </div>

              {submitStatus.type && (
                <div
                  className={`rounded-lg border px-4 py-3 text-sm ${
                    submitStatus.type === 'success'
                      ? 'border-green-500/30 bg-green-500/20 text-green-400'
                      : 'border-red-500/30 bg-red-500/20 text-red-400'
                  }`}
                >
                  {submitStatus.message}
                </div>
              )}

              <NeonButton
                type="submit"
                variant="primary"
                className="w-full"
                disabled={isSubmitting}
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </NeonButton>
            </form>
          </NeonGlowPanel>

          <div className="mt-12 text-center">
            <h2 className="mb-6 font-heading text-2xl font-bold text-white">Or connect with me on social media</h2>
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
