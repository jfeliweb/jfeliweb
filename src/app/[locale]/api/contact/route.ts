import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';
import * as z from 'zod';
import { Env } from '@/libs/Env';
import { logger } from '@/libs/Logger';
import { ContactValidation } from '@/validations/ContactValidation';

export const POST = async (request: Request) => {
  try {
    const json = await request.json();
    const parse = ContactValidation.safeParse(json);

    if (!parse.success) {
      return NextResponse.json(z.treeifyError(parse.error), { status: 422 });
    }

    const { name, email, message, website } = parse.data;

    // Check honeypot field - if filled, it's spam
    if (website && website.length > 0) {
      logger.warn('Contact form submission rejected: honeypot field filled', { email });
      return NextResponse.json({ error: 'Spam detected' }, { status: 400 });
    }

    // Create transporter for Nodemailer
    const transporter = nodemailer.createTransport({
      host: Env.SMTP_HOST,
      port: Number.parseInt(Env.SMTP_PORT, 10),
      secure: Number.parseInt(Env.SMTP_PORT, 10) === 465, // true for 465, false for other ports
      auth: {
        user: Env.SMTP_USER,
        pass: Env.SMTP_PASSWORD,
      },
    });

    // Email content
    const mailOptions = {
      from: Env.SMTP_USER,
      to: Env.CONTACT_EMAIL,
      replyTo: email,
      subject: `Contact Form Submission from ${name}`,
      text: `You received a new message from the contact form.\n\nName: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
        <p><strong>Message:</strong></p>
        <p>${message.replace(/\n/g, '<br>')}</p>
      `,
    };

    // Send email
    await transporter.sendMail(mailOptions);

    logger.info('Contact form submission received and email sent', { email, name });

    return NextResponse.json({ success: true, message: 'Message sent successfully' });
  } catch (error) {
    logger.error('Error processing contact form submission', { error });
    return NextResponse.json(
      { error: 'Failed to send message. Please try again later.' },
      { status: 500 },
    );
  }
};
