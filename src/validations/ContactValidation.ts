import * as z from 'zod';

export const ContactValidation = z.object({
  name: z.string().min(1, 'Name is required').max(100, 'Name is too long'),
  email: z.string().email('Invalid email address'),
  message: z.string().min(10, 'Message must be at least 10 characters').max(2000, 'Message is too long'),
  website: z.string().length(0, 'Spam detected'), // Honeypot field - should always be empty
});
